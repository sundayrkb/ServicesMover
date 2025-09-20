// ===== MAIN APPLICATION ===== 
class MovingServicesApp {
    constructor() {
        this.isLoaded = false;
        this.scrollPosition = 0;
        this.header = null;
        this.mobileNav = null;
        this.mobileMenuToggle = null;
        this.whatsappFloat = null;
        this.serviceCards = [];
        
        this.init();
    }

    // Initialize the application
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    // Setup all application features
    setupApp() {
        this.cacheElements();
        this.setupLoadingScreen();
        this.initSmoothScrolling();
        this.initHeaderEffects();
        this.initMobileNavigation();
        this.initServiceAnimations();
        this.initWhatsAppFeatures();
        this.initPerformanceOptimizations();
        this.initAnalytics();
        
        // Mark app as loaded
        this.isLoaded = true;
        console.log('🚀 Moving Services App initialized successfully');
    }

    // Cache DOM elements for performance
    cacheElements() {
        this.header = document.querySelector('.header');
        this.mobileNav = document.querySelector('.mobile-nav');
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        this.whatsappFloat = document.querySelector('.whatsapp-float');
        this.serviceCards = document.querySelectorAll('.service-card');
        this.loadingScreen = document.querySelector('.loading-screen');
        this.heroScrollIndicator = document.querySelector('.hero-scroll-indicator');
    }

    // ===== LOADING SCREEN =====
    setupLoadingScreen() {
        if (!this.loadingScreen) return;

        // Hide loading screen after everything is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loadingScreen.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(() => {
                    if (this.loadingScreen.parentNode) {
                        this.loadingScreen.parentNode.removeChild(this.loadingScreen);
                    }
                }, 300);
            }, 800); // Show loading screen for at least 800ms
        });
    }

    // ===== SMOOTH SCROLLING =====
    initSmoothScrolling() {
        // Handle navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });

        // Handle hero scroll indicator
        if (this.heroScrollIndicator) {
            this.heroScrollIndicator.addEventListener('click', () => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    this.scrollToElement(servicesSection);
                }
            });
        }
    }

    handleSmoothScroll(event) {
        event.preventDefault();
        
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            this.closeMobileMenu();
            
            // Scroll to element with offset for fixed header
            this.scrollToElement(targetElement);
        }
    }

    scrollToElement(element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // ===== HEADER EFFECTS =====
    initHeaderEffects() {
        if (!this.header) return;

        let ticking = false;

        const updateHeader = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            this.scrollPosition = currentScroll;
            ticking = false;
        };

        const requestHeaderUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        // Throttled scroll event
        window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
    }

    // ===== MOBILE NAVIGATION =====
    initMobileNavigation() {
        if (!this.mobileMenuToggle || !this.mobileNav) return;

        // Toggle mobile menu
        this.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close menu when clicking on links
        const mobileLinks = this.mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileNav.contains(e.target) && 
                !this.mobileMenuToggle.contains(e.target) &&
                this.mobileNav.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileNav.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const isActive = this.mobileNav.classList.contains('active');
        
        if (isActive) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.mobileNav.classList.add('active');
        this.mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Analytics
        this.trackEvent('mobile_menu', 'open');
    }

    closeMobileMenu() {
        this.mobileNav.classList.remove('active');
        this.mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== SERVICE CARD ANIMATIONS =====
    initServiceAnimations() {
        if (this.serviceCards.length === 0) return;

        // Intersection Observer for entrance animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in-up');
                    }, index * 100); // Stagger animation
                    
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Set initial state and observe cards
        this.serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            cardObserver.observe(card);
            
            // Enhanced hover effects
            this.setupCardHoverEffects(card);
        });
    }

    setupCardHoverEffects(card) {
        const icon = card.querySelector('.service-icon');
        const features = card.querySelectorAll('.feature-tag');
        
        card.addEventListener('mouseenter', () => {
            // Scale animation for features
            features.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05)';
                }, index * 50);
            });
            
            // Track hover for analytics
            const serviceName = card.querySelector('h3')?.textContent;
            this.trackEvent('service_hover', serviceName);
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset feature tags
            features.forEach(tag => {
                tag.style.transform = 'scale(1)';
            });
        });
    }

    // ===== WHATSAPP FEATURES =====
    initWhatsAppFeatures() {
        if (!this.whatsappFloat) return;

        // Periodic pulse animation
        this.startWhatsAppPulse();
        
        // Click tracking
        this.whatsappFloat.addEventListener('click', () => {
            this.trackEvent('whatsapp_click', 'floating_button');
        });

        // Show/hide based on scroll position
        this.initWhatsAppScroll();
        
        // Add tooltip interactions
        this.initWhatsAppTooltip();
    }

    startWhatsAppPulse() {
        setInterval(() => {
            if (!this.whatsappFloat.matches(':hover')) {
                this.whatsappFloat.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    this.whatsappFloat.style.animation = '';
                }, 1000);
            }
        }, 15000); // Pulse every 15 seconds
    }

    initWhatsAppScroll() {
        let isVisible = true;
        
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const shouldShow = scrollTop > 300;
            
            if (shouldShow && !isVisible) {
                this.whatsappFloat.style.transform = 'scale(1)';
                this.whatsappFloat.style.opacity = '1';
                isVisible = true;
            } else if (!shouldShow && isVisible) {
                this.whatsappFloat.style.transform = 'scale(0.8)';
                this.whatsappFloat.style.opacity = '0.7';
                isVisible = false;
            }
        };

        window.addEventListener('scroll', this.throttle(handleScroll, 100), { passive: true });
    }

    initWhatsAppTooltip() {
        const tooltip = this.whatsappFloat.querySelector('.whatsapp-tooltip');
        if (!tooltip) return;

        this.whatsappFloat.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(-50%) translateX(-10px)';
        });

        this.whatsappFloat.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(-50%) translateX(0)';
        });
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    initPerformanceOptimizations() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Initialize lazy loading for images
        this.initLazyLoading();
        
        // Optimize scroll events
        this.optimizeScrollEvents();
        
        // Initialize contact form handling
        this.initContactForms();
    }

    preloadCriticalResources() {
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    initLazyLoading() {
        // For future image implementation
        const images = document.querySelectorAll('img[data-src]');
        
        if (images.length === 0) return;
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    optimizeScrollEvents() {
        // Passive scroll event listeners for better performance
        const scrollElements = document.querySelectorAll('[data-scroll]');
        
        scrollElements.forEach(element => {
            element.addEventListener('scroll', (e) => {
                // Handle scroll events efficiently
            }, { passive: true });
        });
    }

    initContactForms() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        const contactLinks = document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]');
        
        // Track CTA button clicks
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = button.textContent.trim();
                this.trackEvent('cta_click', buttonText);
            });
        });
        
        // Track contact method usage
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const method = link.href.startsWith('tel:') ? 'phone' : 'email';
                this.trackEvent('contact_method', method);
            });
        });
    }

    // ===== ANALYTICS & TRACKING =====
    initAnalytics() {
        // Track page view
        this.trackEvent('page_view', 'home');
        
        // Track scroll depth
        this.trackScrollDepth();
        
        // Track time on page
        this.trackTimeOnPage();
    }

    trackScrollDepth() {
        const scrollDepthMarkers = [25, 50, 75, 90];
        const trackedDepths = new Set();
        
        const checkScrollDepth = this.throttle(() => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            scrollDepthMarkers.forEach(marker => {
                if (scrollPercent >= marker && !trackedDepths.has(marker)) {
                    trackedDepths.add(marker);
                    this.trackEvent('scroll_depth', `${marker}%`);
                }
            });
        }, 1000);
        
        window.addEventListener('scroll', checkScrollDepth, { passive: true });
    }

    trackTimeOnPage() {
        const startTime = Date.now();
        
        // Track time milestones
        const milestones = [30, 60, 120, 300]; // seconds
        const trackedMilestones = new Set();
        
        const checkTimeOnPage = () => {
            const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
            
            milestones.forEach(milestone => {
                if (timeOnPage >= milestone && !trackedMilestones.has(milestone)) {
                    trackedMilestones.add(milestone);
                    this.trackEvent('time_on_page', `${milestone}s`);
                }
            });
        };
        
        setInterval(checkTimeOnPage, 10000); // Check every 10 seconds
        
        // Track before user leaves
        window.addEventListener('beforeunload', () => {
            const finalTime = Math.floor((Date.now() - startTime) / 1000);
            this.trackEvent('session_duration', `${finalTime}s`);
        });
    }

    trackEvent(category, action, label = '') {
        // Google Analytics 4 tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label,
                'custom_map': {'dimension1': 'moving_services'}
            });
        }
        
        // Console logging for development
        console.log('📊 Event tracked:', { category, action, label });
    }

    // ===== UTILITY FUNCTIONS =====
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Show notification system
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--accent-green)' : type === 'error' ? '#dc3545' : 'var(--primary-blue)'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.closeNotification(notification);
        });
        
        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                this.closeNotification(notification);
            }, duration);
        }
        
        return notification;
    }

    closeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // ===== PUBLIC API =====
    // Methods that can be called from external scripts

    scrollToSection(sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
            this.scrollToElement(element);
        }
    }

    openWhatsApp(customMessage = '') {
        const message = customMessage || 'Hi, I need a quote for moving services';
        const phone = '919293120124';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        window.open(url, '_blank', 'noopener,noreferrer');
        this.trackEvent('whatsapp_click', 'custom_message');
    }

    getAppStatus() {
        return {
            isLoaded: this.isLoaded,
            scrollPosition: this.scrollPosition,
            mobileMenuOpen: this.mobileNav?.classList.contains('active') || false
        };
    }
}

// ===== FORM HANDLING =====
class ContactFormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form[data-contact]');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmission(e));
        });
    }

    async handleSubmission(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Here you would integrate with your backend API
            // For now, we'll simulate a successful submission
            await this.simulateSubmission(data);
            
            app.showNotification('Thank you! We\'ll contact you within 2 hours.', 'success');
            form.reset();
            app.trackEvent('form_submission', 'contact_form');
            
        } catch (error) {
            app.showNotification('Sorry, there was an error. Please try calling us directly.', 'error');
            console.error('Form submission error:', error);
            
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async simulateSubmission(data) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
    }
}

// ===== APPLICATION INITIALIZATION =====
let app;
let contactFormHandler;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    app = new MovingServicesApp();
    contactFormHandler = new ContactFormHandler();
    
    // Make app globally accessible for debugging
    window.MovingServicesApp = app;
}

// ===== EXPORT FOR MODULE SYSTEMS =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MovingServicesApp,
        ContactFormHandler,
        initializeApp
    };
}

// ===== ADDITIONAL ENHANCEMENTS =====

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && app?.mobileNav?.classList.contains('active')) {
        app.closeMobileMenu();
    }
    
    // Space or Enter on CTA buttons
    if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('cta-button')) {
        e.preventDefault();
        e.target.click();
    }
});

// Add focus management for accessibility
document.addEventListener('focusin', (e) => {
    // Add focus styles for keyboard navigation
    if (e.target.matches('a, button, input, textarea, select')) {
        e.target.style.outline = '2px solid var(--accent-green)';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    // Remove focus styles
    if (e.target.matches('a, button, input, textarea, select')) {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
    }
});

// Add print styles support
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Service Worker registration for PWA capabilities (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('🚛 Services Mover & Packers - Advanced Website System Loaded');
