const CACHE_NAME = 'bpm-v2';
const STATIC_CACHE = 'bpm-static-v2';
const DYNAMIC_CACHE = 'bpm-dynamic-v2';
const OFFLINE_ANALYTICS = 'bpm-analytics-offline';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/script.js',
  '/manifest.json',
  '/assets/images/favicon.png',
  '/assets/images/apple-touch-icon.png',
  '/assets/images/logo-48w.avif',
  '/assets/images/logo-48w.webp',
  '/assets/images/logo-48w.jpg',
  '/assets/images/hero-1200w.avif',
  '/assets/images/hero-1200w.webp',
  '/assets/images/hero-1200w.jpg',
  '/assets/images/about-1200w.avif',
  '/assets/images/about-1200w.webp',
  '/assets/images/about-1200w.jpg'
];

const CACHE_STRATEGIES = {
  // HTML - Network first, fallback to cache
  html: 'network-first',
  // Static assets - Cache first, update in background
  static: 'cache-first',
  // Images - Stale while revalidate
  image: 'stale-while-revalidate',
  // API/Analytics - Network only with offline queue
  api: 'network-only'
};

// Install - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== STATIC_CACHE && k !== DYNAMIC_CACHE && k !== OFFLINE_ANALYTICS)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch handler with strategy routing
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    // For external resources (WhatsApp, Google Analytics), pass through
    return;
  }

  const accept = request.headers.get('accept') || '';
  const isNavigate = request.mode === 'navigate';
  const isHTML = isNavigate || accept.includes('text/html');
  const isImage = accept.includes('image/');
  const isStatic = request.destination === 'style' || request.destination === 'script' || request.destination === 'font';
  const isAnalytics = url.pathname.startsWith('/analytics');

  // HTML - Network first with offline fallback
  if (isHTML) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Static assets - Cache first
  if (isStatic) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Images - Stale while revalidate
  if (isImage) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    return;
  }

  // Analytics - Network only, queue offline
  if (isAnalytics) {
    event.respondWith(networkOnlyWithOfflineQueue(request));
    return;
  }

  // Default - Network first
  event.respondWith(networkFirst(request));
});

// Strategy: Network First
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Offline fallback for navigation
    if (request.mode === 'navigate') {
      return caches.match('/index.html') || new Response('Offline', { status: 503 });
    }
    throw error;
  }
}

// Strategy: Cache First
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request, { cacheName });
  if (cached) {
    // Update in background
    fetch(request).then(response => {
      if (response.ok) {
        caches.open(cacheName).then(cache => cache.put(request, response));
      }
    }).catch(() => {});
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

// Strategy: Stale While Revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request, { cacheName });
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      caches.open(cacheName).then(cache => cache.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

// Strategy: Network Only with Offline Queue
async function networkOnlyWithOfflineQueue(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    // Queue for background sync
    await queueAnalytics(request);
    // Return a minimal success response to prevent client-side errors
    return new Response(JSON.stringify({ queued: true }), {
      status: 202,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Queue analytics for background sync
async function queueAnalytics(request) {
  try {
    const body = await request.clone().text();
    const cache = await caches.open(OFFLINE_ANALYTICS);
    const queueKey = `analytics-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    await cache.put(queueKey, new Response(body, {
      headers: { 'Content-Type': 'application/json' }
    }));
    // Register background sync
    if (self.registration.sync) {
      await self.registration.sync.register('analytics-sync');
    }
  } catch (e) {
    console.warn('[SW] Failed to queue analytics:', e);
  }
}

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

// Sync queued analytics
async function syncAnalytics() {
  const cache = await caches.open(OFFLINE_ANALYTICS);
  const keys = await cache.keys();

  for (const key of keys) {
    try {
      const response = await cache.match(key);
      const body = await response.text();

      await fetch('/analytics', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true
      });

      await cache.delete(key);
    } catch (error) {
      console.warn('[SW] Failed to sync analytics item:', key, error);
      // Keep in queue for next sync
    }
  }
}

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/assets/images/logo-192w.png',
    badge: '/assets/images/logo-48w.png',
    vibrate: [100, 50, 100],
    data: data.url ? { url: data.url } : {},
    actions: data.actions || []
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action && event.notification.data?.url) {
    event.waitUntil(clients.openWindow(event.notification.data.url));
  } else if (event.notification.data?.url) {
    event.waitUntil(clients.openWindow(event.notification.data.url));
  }
});

// Message from client
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }

  if (event.data === 'getVersion') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }

  if (event.data?.type === 'clearCache') {
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => event.ports[0].postMessage({ success: true }));
  }
});