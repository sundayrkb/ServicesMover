// ServicesMover — minimal responsive script

document.addEventListener('DOMContentLoaded', () => {
  initResponsiveNavigation();
  initSmoothScrolling();
  initHeaderScrollEffect();
  initServiceCardAnimations();
  initContactCTA();
  initWhatsAppFloat();
  initSkipLink();
});

// Mobile hamburger menu
function initResponsiveNavigation() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !open);
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = open ? '' : 'hidden';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('active')) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// Native smooth scroll (scrollBehavior: smooth works everywhere now)
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = window.innerWidth < 768 ? 70 : 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      history.pushState(null, null, anchor.getAttribute('href'));
    });
  });
}

// Header scroll effect via CSS class toggle
function initHeaderScrollEffect() {
  const header = document.querySelector('.header');
  if (!header) return;

  let ticking = false, lastY = 0;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.pageYOffset;
        const down = y > lastY;
        const mobile = window.innerWidth < 768;

        if (mobile && Math.abs(y - lastY) > 10) {
          header.classList.toggle('header--hidden', down && y > 100);
        }
        header.classList.toggle('header--scrolled', y > 50);
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Service card fade-in via IntersectionObserver
function initServiceCardAnimations() {
  const cards = document.querySelectorAll('.service-card');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = Array.from(cards).indexOf(e.target);
        setTimeout(() => {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }, i * 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  cards.forEach(c => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(30px)';
    c.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(c);
  });
}

// CTA click: haptic feedback on tel: links (mobile)
function initContactCTA() {
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (/tel:/.test(btn.href) && 'vibrate' in navigator) navigator.vibrate(50);
    });
  });
}

// WhatsApp float: single gtag event
function initWhatsAppFloat() {
  const btn = document.querySelector('.whatsapp-float');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if ('vibrate' in navigator) navigator.vibrate(50);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'whatsapp_button',
        value: 1,
        transport_type: 'beacon'
      });
    }
  }, { passive: true });
}

// Skip link focus
function initSkipLink() {
  const skip = document.querySelector('a[href="#main"]');
  if (!skip) return;
  skip.addEventListener('click', e => {
    e.preventDefault();
    const main = document.querySelector('#main');
    if (main) { main.focus(); main.scrollIntoView({ behavior: 'smooth' }); }
  });
}