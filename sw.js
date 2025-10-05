// ServicesMover Service Worker
// Basic service worker for PWA capabilities

const CACHE_NAME = 'servicesmover-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/script.js',
  '/index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('🔧 ServicesMover: Service Worker installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('🗄️ ServicesMover: Caching resources');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('✅ ServicesMover: Service Worker activated');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ ServicesMover: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('🎯 ServicesMover: Serving from cache:', event.request.url);
          return response;
        }

        console.log('🌐 ServicesMover: Fetching from network:', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

// Handle service worker updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('🚀 ServicesMover: Service Worker ready');