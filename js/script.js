// ServicesMover — minimal responsive script

document.addEventListener('DOMContentLoaded', () => {
  initResponsiveNavigation();
  initSmoothScrolling();
});

// Mobile hamburger menu
function initResponsiveNavigation() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !open);
    menu.classList.toggle('active');
    document.body.style.overflow = open ? '' : 'hidden';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('active')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Native smooth scroll with header offset
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