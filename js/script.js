// Optimized JavaScript for Services Mover & Packers Website

// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.menu-btn');
    
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 70; // Fixed header height
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if it's open
                const mobileMenu = document.getElementById('mobileMenu');
                const menuBtn = document.querySelector('.menu-btn');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 123, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
        header.style.backdropFilter = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    
    // Check if click is outside menu and menu button
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !nav.contains(e.target)) {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// WhatsApp Button Analytics (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track WhatsApp clicks for analytics
            console.log('WhatsApp button clicked');
            
            // Google Analytics tracking (if available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'contact',
                    'event_label': 'whatsapp'
                });
            }
        });
    });
});

// Phone Button Analytics (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track phone clicks for analytics
            console.log('Phone button clicked');
            
            // Google Analytics tracking (if available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'contact',
                    'event_label': 'phone'
                });
            }
        });
    });
});

// Simple form validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    return isValid;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Services Mover & Packers website loaded successfully');
    
    // Add loading class removal after page loads
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});
