(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const prefersContrast = window.matchMedia("(prefers-contrast: high)").matches;

  // ============================================
  // UTILITIES
  // ============================================
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const throttle = (fn, limit = 100) => {
    let inThrottle = false;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const sendAnalytics = (eventName, params = {}) => {
    const payload = { event: eventName, ...params, timestamp: Date.now() };
    if (window.gtag) {
      window.gtag("event", eventName, params);
    } else if (window.dataLayer) {
      window.dataLayer.push(payload);
    } else if (navigator.sendBeacon) {
      navigator.sendBeacon("/analytics", JSON.stringify(payload));
    } else {
      fetch("/analytics", { method: "POST", body: JSON.stringify(payload), keepalive: true }).catch(() => {});
    }
  };

  // ============================================
  // NAVIGATION
  // ============================================
  function initNav() {
    const toggle = $(".mobile-menu-toggle");
    const menu = $(".nav-menu");
    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("active");
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
      menu.classList.toggle("active");
      document.body.style.overflow = expanded ? "" : "hidden";
    });

    $$(".nav-link", menu).forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && menu.classList.contains("active")) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", e => {
      if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        const offset = window.innerWidth < 768 ? 88 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
        history.pushState(null, null, link.getAttribute("href"));
        target.focus({ preventScroll: true });
      });
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT (auto-hide on scroll down)
  // ============================================
  function initHeader() {
    const header = $(".header");
    if (!header) return;

    let lastScroll = window.scrollY;
    let ticking = false;
    const hideThreshold = 100;
    const scrollThreshold = 10;

    const onScroll = () => {
      const current = window.scrollY;
      
      if (current > hideThreshold) {
        header.classList.add("header--scrolled");
        
        if (current > lastScroll + scrollThreshold) {
          header.classList.add("header--hidden");
        } else if (current < lastScroll - scrollThreshold) {
          header.classList.remove("header--hidden");
        }
      } else {
        header.classList.remove("header--scrolled");
        header.classList.remove("header--hidden");
      }
      
      lastScroll = current;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // STAT COUNTER ANIMATION
  // ============================================
  function initStats() {
    const stats = $$(".stat-number");
    if (!stats.length || reduceMotion) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const text = el.textContent.trim();
        const target = parseInt(text.replace(/[^\d]/g, ""), 10);
        const suffix = text.replace(/[\d,]+/, "");
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1200;
        const steps = 60;
        const increment = Math.ceil(target / steps);
        const interval = duration / steps;

        const tick = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(tick);
          }
          el.textContent = current.toLocaleString() + suffix;
        }, interval);

        observer.unobserve(el);
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -50px 0px" });

    stats.forEach(el => observer.observe(el));
  }

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  function initScrollReveal() {
    if (reduceMotion) {
      $$(".reveal").forEach(el => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    $$(".reveal").forEach(el => observer.observe(el));

    // Process steps
    const processSteps = $$(".process-step");
    if (processSteps.length) {
      const processObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            processObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
      processSteps.forEach(el => processObserver.observe(el));
    }
  }

  // ============================================
  // SERVICE CARD HOVER ENHANCEMENTS
  // ============================================
  function initServiceCards() {
    if (reduceMotion) return;

    $$(".service-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)";
      });
    });
  }

  // ============================================
  // TRUCK ANIMATION
  // ============================================
  let truckInitialized = false;

  function initTruckAnimation() {
    const truck = $(".truck-animation");
    const container = $(".truck-container");
    const icons = $$(".truck-icon", truck);
    if (!truck || !container) return;

    // Disable on mobile (< 768px) - WhatsApp float covers contact actions
    if (window.innerWidth < 768) {
      if (truckInitialized) {
        container.style.animation = "none";
        truckInitialized = false;
      }
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    truckInitialized = true;

    let isPaused = false;
    let animationDuration = 25000;

    const updateDuration = () => {
      const vw = window.innerWidth;
      if (vw < 768) {
        container.style.animation = "none";
        truckInitialized = false;
        return;
      }
      if (vw >= 1200) animationDuration = 35000;
      else if (vw >= 992) animationDuration = 30000;
      else animationDuration = 28000;
      container.style.setProperty("--truck-duration", `${animationDuration}ms`);
      container.style.animation = "";
    };

    updateDuration();
    window.addEventListener("resize", throttle(updateDuration, 250));

    truck.addEventListener("mouseenter", () => {
      isPaused = true;
      container.style.animationPlayState = "paused";
    });
    truck.addEventListener("mouseleave", () => {
      isPaused = false;
      container.style.animationPlayState = "running";
    });
    truck.addEventListener("focusin", () => {
      isPaused = true;
      container.style.animationPlayState = "paused";
    });
    truck.addEventListener("focusout", () => {
      isPaused = false;
      container.style.animationPlayState = "running";
    });

    document.addEventListener("visibilitychange", () => {
      container.style.animationPlayState = document.hidden ? "paused" : "running";
    });

    icons.forEach(icon => {
      icon.addEventListener("click", () => {
        const type = icon.classList.contains("truck-icon--whatsapp") ? "whatsapp" : "call";
        if (navigator.vibrate) navigator.vibrate(20);
        sendAnalytics(`truck_${type}_click`, {
          event_category: "engagement",
          event_label: `truck_${type}`,
          transport_type: "beacon"
        });
      });
    });

    const randomOffset = Math.random() * 5000;
    container.style.animationDelay = `-${randomOffset}ms`;
  }

  // ============================================
  // WHATSAPP FLOAT BUTTON
  // ============================================
  function initWhatsAppFloat() {
    const btn = $(".whatsapp-float");
    if (!btn) return;

    let clickCount = 0;
    const maxPulseClicks = 3;

    btn.addEventListener("click", () => {
      clickCount++;
      if (clickCount >= maxPulseClicks) {
        btn.style.animation = "none";
      }

      // Haptic feedback
      if (navigator.vibrate) navigator.vibrate(30);

      // Analytics
      sendAnalytics("whatsapp_float_click", {
        event_category: "engagement",
        event_label: "whatsapp_float",
        click_count: clickCount,
        transport_type: "beacon"
      });
    });

    // Pause animation on hover/focus for accessibility
    btn.addEventListener("mouseenter", () => btn.style.animationPlayState = "paused");
    btn.addEventListener("mouseleave", () => btn.style.animationPlayState = "running");
    btn.addEventListener("focus", () => btn.style.animationPlayState = "paused");
    btn.addEventListener("blur", () => btn.style.animationPlayState = "running");
  }

  // ============================================
  // CTA TRACKING
  // ============================================
  function initCTATracking() {
    $$(".cta-button, .service-cta, .contact-link[href^='tel:'], .contact-link[href^='mailto:'], .contact-link[href*='wa.me']").forEach(el => {
      el.addEventListener("click", () => {
        const label = el.getAttribute("aria-label") || el.textContent.trim().slice(0, 50);
        sendAnalytics("cta_click", {
          event_category: "conversion",
          event_label: label,
          cta_type: el.classList.contains("cta-button") ? "primary" :
                    el.classList.contains("service-cta") ? "service" :
                    el.href.startsWith("tel:") ? "phone" :
                    el.href.startsWith("mailto:") ? "email" : "whatsapp"
        });
      });
    });
  }

  // ============================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================
  function initPerformance() {
    // Defer non-critical images
    $$("img[loading='lazy']").forEach(img => {
      if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    });

    // Preconnect to external domains
    const preconnectDomains = [
      "https://wa.me",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com"
    ];
    preconnectDomains.forEach(domain => {
      if (!$(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Service Worker registration
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
          .then(reg => console.log("[SW] Registered:", reg.scope))
          .catch(err => console.warn("[SW] Registration failed:", err));
      });
    }
  }

  // ============================================
  // ACCESSIBILITY ENHANCEMENTS
  // ============================================
  function initAccessibility() {
    // Focus trap for mobile menu
    const menu = $(".nav-menu");
    const toggle = $(".mobile-menu-toggle");
    if (menu && toggle) {
      const focusable = menu.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      menu.addEventListener("keydown", e => {
        if (e.key !== "Tab") return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }

    // Skip link enhancement
    const skipLink = $(".sr-only");
    if (skipLink) {
      skipLink.addEventListener("click", e => {
        const target = document.querySelector(skipLink.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.focus({ preventScroll: true });
          target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        }
      });
    }

    // Announce dynamic content changes
    const announcer = document.createElement("div");
    announcer.setAttribute("role", "status");
    announcer.setAttribute("aria-live", "polite");
    announcer.className = "sr-only";
    document.body.appendChild(announcer);

    window.announce = (msg) => {
      announcer.textContent = "";
      setTimeout(() => announcer.textContent = msg, 50);
    };
  }

  // ============================================
  // CONNECTION SPEED DETECTION
  // ============================================
  function initConnectionDetection() {
    if (!navigator.connection) return;

    const conn = navigator.connection;
    const isSlow = conn.saveData || conn.effectiveType === "slow-2g" || conn.effectiveType === "2g";

    if (isSlow) {
      document.documentElement.classList.add("slow-connection");
      // Reduce animation complexity
      document.documentElement.style.setProperty("--tb", "200ms");
      // Disable WhatsApp pulse
      const wa = $(".whatsapp-float");
      if (wa) wa.style.animation = "none";
      // Disable truck animation
      const truck = $(".truck-container");
      if (truck) truck.style.animation = "none";
    }

    conn.addEventListener("change", () => {
      const nowSlow = conn.saveData || conn.effectiveType === "slow-2g" || conn.effectiveType === "2g";
      document.documentElement.classList.toggle("slow-connection", nowSlow);
      const truck = $(".truck-container");
      if (truck) truck.style.animation = nowSlow ? "none" : "";
    });
  }

  // ============================================
  // ERROR BOUNDARY / REPORTING
  // ============================================
  function initErrorReporting() {
    window.addEventListener("error", e => {
      console.error("[Error]", e.message, e.filename, e.lineno, e.colno, e.error);
      sendAnalytics("js_error", {
        event_category: "error",
        event_label: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        stack: e.error?.stack
      });
    });

    window.addEventListener("unhandledrejection", e => {
      console.error("[Unhandled Rejection]", e.reason);
      sendAnalytics("unhandled_rejection", {
        event_category: "error",
        event_label: String(e.reason),
        stack: e.reason?.stack
      });
    });
  }

  // ============================================
  // INITIALIZATION ORDER
  // ============================================
  document.addEventListener("DOMContentLoaded", () => {
    // Critical path first
    initNav();
    initSmoothScroll();
    initHeader();
    initStats();
    initTruckAnimation();
    initWhatsAppFloat();
    initCTATracking();

    // Enhanced features
    initScrollReveal();
    initServiceCards();
    initAccessibility();
    initConnectionDetection();
    initPerformance();
    initErrorReporting();

    // Mark page as fully loaded
    document.documentElement.classList.add("page-loaded");
  });
})();