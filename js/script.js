// Enhanced Responsive ServicesMover Script
// Modern JavaScript with mobile-first approach and performance optimizations

// DOM Content Loaded Event with enhanced error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize all functionality
        initResponsiveNavigation();
        initSmoothScrolling();
        initHeaderScrollEffect();
        initServiceCardAnimations();
        initContactFormValidation();
        initWhatsAppFloat();
        initResponsiveUtilities();
        initPerformanceOptimizations();
        initAccessibilityFeatures();

        console.log('✅ ServicesMover: All scripts initialized successfully');
    } catch (error) {
        console.error('❌ ServicesMover: Error initializing scripts:', error);
    }
});

// Enhanced Responsive Navigation with mobile menu
function initResponsiveNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileMenuToggle || !navMenu) {
        console.warn('Mobile navigation elements not found');
        return;
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        this.setAttribute('aria-expanded', !isExpanded);
        this.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            mobileMenuToggle.focus();
        }
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && 
            !navMenu.contains(e.target) && 
            navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 768) {
                // Reset mobile menu for desktop
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }, 250);
    });
}

// Enhanced smooth scrolling with mobile considerations
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                // Adjust header offset based on screen size
                const isMobile = window.innerWidth < 768;
                const headerOffset = isMobile ? 70 : 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                // Use smooth scrolling with fallback
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback for older browsers
                    animatedScrollTo(offsetPosition, 800);
                }

                // Update URL without triggering scroll
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Animated scroll fallback for older browsers
function animatedScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = new Date().getTime();

    function animateScroll() {
        const elapsed = new Date().getTime() - startTime;
        const progress = elapsed / duration;

        if (progress < 1) {
            const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, targetPosition);
        }
    }

    requestAnimationFrame(animateScroll);
}

// Enhanced header scroll effects with mobile optimization
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    let ticking = false;
    let lastScrollY = 0;

    function updateHeader() {
        const scrollY = window.pageYOffset;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        const isMobile = window.innerWidth < 768;

        // Hide header on mobile when scrolling down, show when scrolling up
        if (isMobile && Math.abs(scrollY - lastScrollY) > 10) {
            if (scrollDirection === 'down' && scrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else if (scrollDirection === 'up' || scrollY < 100) {
                header.style.transform = 'translateY(0)';
            }
        }

        // Background and shadow changes
        if (scrollY > 50) {
            header.style.background = 'rgba(235, 231, 9, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'linear-gradient(135deg, #96da29ff 0%, #d4a919ff 100%)';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Enhanced service card animations with mobile considerations
function initServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');

    // Check if device supports animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Skip animations for users who prefer reduced motion
        serviceCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
        return;
    }

    // Intersection Observer for performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger animation for multiple cards
                const delay = Array.from(serviceCards).indexOf(entry.target) * 100;

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-in');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        observer.observe(card);

        // Enhanced mobile-friendly hover effects
        const isMobile = 'ontouchstart' in window;

        if (!isMobile) {
            // Desktop hover effects
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                const icon = this.querySelector('.service-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.color = '#23C483';
                }
            });

            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
                const icon = this.querySelector('.service-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.color = '#218085';
                }
            });
        } else {
            // Mobile touch effects
            card.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });

            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        }
    });
}

// Enhanced contact form validation
function initContactFormValidation() {
    const contactButtons = document.querySelectorAll('.cta-button');

    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': 'cta_button',
                    'value': 1
                });
            }

            // Enhanced mobile experience
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (isMobile && this.href.startsWith('tel:')) {
                // Add haptic feedback on mobile if supported
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            }
        });
    });
}

// Enhanced WhatsApp float button functionality
// Replace or update the initWhatsAppFloat() in your script.js with this implementation.

function getGAClientId() {
  // Read _ga cookie (format: GA1.2.1234567890.1234567890) and return last two parts as client_id
  try {
    const m = document.cookie.match(/_ga=([^;]+)/);
    if (!m) return null;
    const parts = m[1].split('.');
    if (parts.length >= 2) return parts.slice(-2).join('.');
  } catch (e) {
    console.warn('getGAClientId error', e);
  }
  return null;
}

// --- Example Usage ---
// clearAllCookiesAndReload();
function initWhatsAppFloat() {
  const whatsappButton = document.querySelector('.whatsapp-float');
  if (!whatsappButton) return;

  // (Optional) Keep the pulse behavior for desktop
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    const pulseInterval = setInterval(() => {
      whatsappButton.classList.add('pulse');
      setTimeout(() => whatsappButton.classList.remove('pulse'), 2000);
    }, 150);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(pulseInterval);
    });
  }

  // Robust click-tracking handler (non-blocking)
  whatsappButton.addEventListener('click', function clickHandler(e) {
    try {
      // Haptic feedback for mobile
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }

      // Build common analytics payload
      const payload = {
        event: 'whatsapp_click',
        event_category: 'engagement',
        event_label: 'whatsapp_button',
        value: 1,
        page_path: location.pathname,
        page_title: document.title,
        ts: Date.now()
      };

      // 1) Preferred: gtag if available -> use beacon transport (non-blocking)
      if (typeof gtag !== 'undefined') {
        try {
          gtag('event', 'click', {
            event_category: payload.event_category,
            event_label: payload.event_label,
            value: payload.value,
            transport_type: 'beacon' // ask browser to use navigator.sendBeacon under the hood
          });
          // We do not prevent default — link opens immediately and gtag uses beacon.
          console.debug('Analytics: gtag event queued (transport_type: beacon)');
          return; // DONE
        } catch (err) {
          console.warn('Analytics: gtag error ->', err);
          // fallback to other methods below
        }
      }

      // 2) If using Google Tag Manager (dataLayer)
      if (Array.isArray(window.dataLayer)) {
        try {
          window.dataLayer.push({
            event: 'whatsapp_click',
            event_category: payload.event_category,
            event_label: payload.event_label,
            value: payload.value
          });
          console.debug('Analytics: dataLayer push');
          return; // DONE
        } catch (err) {
          console.warn('Analytics: dataLayer push failed ->', err);
        }
      }

      // 3) Fallback: GA4 Measurement Protocol via sendBeacon (requires MEASUREMENT_ID and API_SECRET)
      const MEASUREMENT_ID = window.__GA_MEASUREMENT_ID__;
      const API_SECRET = window.__GA_API_SECRET__;
      if (navigator.sendBeacon && MEASUREMENT_ID && API_SECRET && MEASUREMENT_ID !== 'G-XXXXXXX' && API_SECRET !== 'YOUR_API_SECRET') {
        try {
          const client_id = getGAClientId() || `cid-${Date.now()}`;
          const body = {
            client_id,
            events: [
              {
                name: 'whatsapp_click',
                params: {
                  event_category: payload.event_category,
                  event_label: payload.event_label,
                  value: payload.value,
                  page_path: payload.page_path
                }
              }
            ]
          };
          const url = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`;
          const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
          const ok = navigator.sendBeacon(url, blob);
          console.debug('Analytics: sent sendBeacon to GA4 Measurement Protocol ->', ok);
          return; // DONE
        } catch (err) {
          console.warn('Analytics: sendBeacon to GA4 failed ->', err);
        }
      }

      // 4) Final fallback: call a server endpoint (keepalive) or fire a lightweight fetch (keepalive)
      // You can implement /collect-event on your server to accept these logs.
      try {
        fetch('/collect-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => { /* ignore network errors */ });
        console.debug('Analytics: fetch keepalive fallback triggered');
      } catch (err) {
        console.warn('Analytics: fetch fallback error ->', err);
      }

    } catch (err) {
      console.error('whatsapp click handler error', err);
    }
    // NOTE: We keep this listener passive/non-blocking so the link opens immediately.
  }, { passive: true });
}


// Responsive utilities and enhancements
function initResponsiveUtilities() {
    // Viewport height fix for mobile browsers
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setVH, 250);
    });

    // Touch device detection and class addition
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Device orientation handling
    function handleOrientationChange() {
        // Small delay to allow for orientation change to complete
        setTimeout(() => {
            setVH();

            // Trigger resize event for other components
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }

    window.addEventListener('orientationchange', handleOrientationChange);

    // Enhanced image loading for responsive images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Connection speed detection for adaptive loading
    if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (connection && connection.effectiveType) {
            document.body.classList.add(`connection-${connection.effectiveType}`);

            // Disable animations on slow connections
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.body.classList.add('reduce-animations');
            }
        }
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Defer non-critical JavaScript
    function loadNonCriticalJS() {
        // Load analytics or other non-critical scripts here
        console.log('🚀 Loading non-critical JavaScript');
    }

    // Load non-critical JS after page is fully loaded
    if (document.readyState === 'complete') {
        loadNonCriticalJS();
    } else {
        window.addEventListener('load', loadNonCriticalJS);
    }

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('🔧 Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.log('❌ Service Worker registration failed:', error);
                });
        });
    }
}

// Accessibility enhancements
function initAccessibilityFeatures() {
    // Focus management for mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        // Trap focus within mobile menu when open
        const focusableElements = navMenu.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );

        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Skip link functionality
    const skipLink = document.querySelector('a[href="#main"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.querySelector('#main');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Announce page changes to screen readers
    function announcePageChange(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;

        document.body.appendChild(announcement);

        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // High contrast mode detection
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');

        function handleContrastChange(e) {
            if (e.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        }

        mediaQuery.addListener(handleContrastChange);
        handleContrastChange(mediaQuery);
    }
}

// Utility functions for external use
window.ServicesMover = {
    // Public API for other scripts
    showNotification: function(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');

        // Create notification content
        const content = document.createElement('span');
        content.textContent = message;
        notification.appendChild(content);

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'notification__close';
        closeButton.setAttribute('aria-label', 'Close notification');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => removeNotification());
        notification.appendChild(closeButton);

        // Styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            background: ${getNotificationColor(type)};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        `;

        closeButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            opacity: 0.8;
        `;

        closeButton.addEventListener('mouseenter', () => {
            closeButton.style.opacity = '1';
        });

        closeButton.addEventListener('mouseleave', () => {
            closeButton.style.opacity = '0.8';
        });

        function removeNotification() {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }

        function getNotificationColor(type) {
            const colors = {
                success: '#23C483',
                error: '#EF4444',
                warning: '#F59E0B',
                info: '#218085'
            };
            return colors[type] || colors.info;
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Auto remove
        if (duration > 0) {
            setTimeout(removeNotification, duration);
        }

        return {
            remove: removeNotification
        };
    },

    // Scroll to section
    scrollToSection: function(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            const headerOffset = window.innerWidth < 768 ? 70 : 80;
            const elementPosition = section.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    },

    // Get device info
    getDeviceInfo: function() {
        return {
            isMobile: window.innerWidth < 768,
            isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
            isDesktop: window.innerWidth >= 1024,
            isTouchDevice: 'ontouchstart' in window,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        };
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.ServicesMover;
}

console.log('📱 ServicesMover: Enhanced responsive script loaded');