:root {
  /* Primitive Color Tokens */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);

  /* RGB versions for opacity control */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;

  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* Common style patterns */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for opacity control */
  --color-success-rgb: 33, 128, 141;
  --color-error-rgb: 192, 21, 47;
  --color-warning-rgb: 168, 75, 47;
  --color-info-rgb: 98, 108, 113;

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
    0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

/* Dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    /* RGB versions for opacity control (Dark Mode) */
    --color-gray-400-rgb: 119, 124, 124;
    --color-teal-300-rgb: 50, 184, 198;
    --color-gray-300-rgb: 167, 169, 169;
    --color-gray-200-rgb: 245, 245, 245;

    /* Background color tokens (Dark Mode) */
    --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
    --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
    --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
    --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
    --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
    --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
    --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
    --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

    /* Semantic Color Tokens (Dark Mode) */
    --color-background: var(--color-charcoal-700);
    --color-surface: var(--color-charcoal-800);
    --color-text: var(--color-gray-200);
    --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
    --color-primary: var(--color-teal-300);
    --color-primary-hover: var(--color-teal-400);
    --color-primary-active: var(--color-teal-800);
    --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
    --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
    --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
    --color-border: rgba(var(--color-gray-400-rgb), 0.3);
    --color-error: var(--color-red-400);
    --color-success: var(--color-teal-300);
    --color-warning: var(--color-orange-400);
    --color-info: var(--color-gray-300);
    --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
    --color-btn-primary-text: var(--color-slate-900);
    --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
    --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
    --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    --button-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

    /* Common style patterns - updated for dark mode */
    --focus-ring: 0 0 0 3px var(--color-focus-ring);
    --focus-outline: 2px solid var(--color-primary);
    --status-bg-opacity: 0.15;
    --status-border-opacity: 0.25;
    --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    /* RGB versions for dark mode */
    --color-success-rgb: var(--color-teal-300-rgb);
    --color-error-rgb: var(--color-red-400-rgb);
    --color-warning-rgb: var(--color-orange-400-rgb);
    --color-info-rgb: var(--color-gray-300-rgb);
  }
}

/* Data attribute for manual theme switching */
[data-color-scheme="dark"] {
  /* RGB versions for opacity control (dark mode) */
  --color-gray-400-rgb: 119, 124, 124;
  --color-teal-300-rgb: 50, 184, 198;
  --color-gray-300-rgb: 167, 169, 169;
  --color-gray-200-rgb: 245, 245, 245;

  /* Colorful background palette - Dark Mode */
  --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
  --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
  --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
  --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
  --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
  --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
  --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
  --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

  /* Semantic Color Tokens (Dark Mode) */
  --color-background: var(--color-charcoal-700);
  --color-surface: var(--color-charcoal-800);
  --color-text: var(--color-gray-200);
  --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
  --color-primary: var(--color-teal-300);
  --color-primary-hover: var(--color-teal-400);
  --color-primary-active: var(--color-teal-800);
  --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
  --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
  --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
  --color-border: rgba(var(--color-gray-400-rgb), 0.3);
  --color-error: var(--color-red-400);
  --color-success: var(--color-teal-300);
  --color-warning: var(--color-orange-400);
  --color-info: var(--color-gray-300);
  --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
  --color-btn-primary-text: var(--color-slate-900);
  --color-card-border: rgba(var(--color-gray-400-rgb), 0.15);
  --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
  --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

  /* Common style patterns - updated for dark mode */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for dark mode */
  --color-success-rgb: var(--color-teal-300-rgb);
  --color-error-rgb: var(--color-red-400-rgb);
  --color-warning-rgb: var(--color-orange-400-rgb);
  --color-info-rgb: var(--color-gray-300-rgb);
}

[data-color-scheme="light"] {
  /* RGB versions for opacity control (light mode) */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);

  /* RGB versions for light mode */
  --color-success-rgb: var(--color-teal-500-rgb);
  --color-error-rgb: var(--color-red-500-rgb);
  --color-warning-rgb: var(--color-orange-500-rgb);
  --color-info-rgb: var(--color-slate-500-rgb);
}

/* Base styles */
html {
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
}

h1 {
  font-size: var(--font-size-4xl);
}
h2 {
  font-size: var(--font-size-3xl);
}
h3 {
  font-size: var(--font-size-2xl);
}
h4 {
  font-size: var(--font-size-xl);
}
h5 {
  font-size: var(--font-size-lg);
}
h6 {
  font-size: var(--font-size-md);
}

p {
  margin: 0 0 var(--space-16) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

code,
pre {
  font-family: var(--font-family-mono);
  font-size: calc(var(--font-size-base) * 0.95);
  background-color: var(--color-secondary);
  border-radius: var(--radius-sm);
}

code {
  padding: var(--space-1) var(--space-4);
}

pre {
  padding: var(--space-16);
  margin: var(--space-16) 0;
  overflow: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background: none;
  padding: 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-standard);
  border: none;
  text-decoration: none;
  position: relative;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-btn-primary-text);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--primary:active {
  background: var(--color-primary-active);
}

.btn--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.btn--secondary:hover {
  background: var(--color-secondary-hover);
}

.btn--secondary:active {
  background: var(--color-secondary-active);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
}

.btn--lg {
  padding: var(--space-10) var(--space-20);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
}

.btn--full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: var(--space-8) var(--space-12);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  transition: border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard);
}

textarea.form-control {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}

select.form-control {
  padding: var(--space-8) var(--space-12);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: var(--select-caret-light);
  background-repeat: no-repeat;
  background-position: right var(--space-12) center;
  background-size: 16px;
  padding-right: var(--space-32);
}

/* Add a dark mode specific caret */
@media (prefers-color-scheme: dark) {
  select.form-control {
    background-image: var(--select-caret-dark);
  }
}

/* Also handle data-color-scheme */
[data-color-scheme="dark"] select.form-control {
  background-image: var(--select-caret-dark);
}

[data-color-scheme="light"] select.form-control {
  background-image: var(--select-caret-light);
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: var(--focus-outline);
}

.form-label {
  display: block;
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.form-group {
  margin-bottom: var(--space-16);
}

/* Card component */
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-card-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__body {
  padding: var(--space-16);
}

.card__header,
.card__footer {
  padding: var(--space-16);
  border-bottom: 1px solid var(--color-card-border-inner);
}

/* Status indicators - simplified with CSS variables */
.status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.status--success {
  background-color: rgba(
    var(--color-success-rgb, 33, 128, 141),
    var(--status-bg-opacity)
  );
  color: var(--color-success);
  border: 1px solid
    rgba(var(--color-success-rgb, 33, 128, 141), var(--status-border-opacity));
}

.status--error {
  background-color: rgba(
    var(--color-error-rgb, 192, 21, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-error);
  border: 1px solid
    rgba(var(--color-error-rgb, 192, 21, 47), var(--status-border-opacity));
}

.status--warning {
  background-color: rgba(
    var(--color-warning-rgb, 168, 75, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-warning);
  border: 1px solid
    rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-border-opacity));
}

.status--info {
  background-color: rgba(
    var(--color-info-rgb, 98, 108, 113),
    var(--status-bg-opacity)
  );
  color: var(--color-info);
  border: 1px solid
    rgba(var(--color-info-rgb, 98, 108, 113), var(--status-border-opacity));
}

/* Container layout */
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--space-16);
  padding-left: var(--space-16);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
  }
}
@media (min-width: 768px) {
  .container {
    max-width: var(--container-md);
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: var(--container-lg);
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-xl);
  }
}

/* Utility classes */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: var(--space-4);
}
.gap-8 {
  gap: var(--space-8);
}
.gap-16 {
  gap: var(--space-16);
}

.m-0 {
  margin: 0;
}
.mt-8 {
  margin-top: var(--space-8);
}
.mb-8 {
  margin-bottom: var(--space-8);
}
.mx-8 {
  margin-left: var(--space-8);
  margin-right: var(--space-8);
}
.my-8 {
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
}

.p-0 {
  padding: 0;
}
.py-8 {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
.px-8 {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
.py-16 {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
.px-16 {
  padding-left: var(--space-16);
  padding-right: var(--space-16);
}

.block {
  display: block;
}
.hidden {
  display: none;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:focus-visible {
  outline: var(--focus-outline);
  outline-offset: 2px;
}

/* Dark mode specifics */
[data-color-scheme="dark"] .btn--outline {
  border: 1px solid var(--color-border-secondary);
}

@font-face {
  font-family: 'FKGroteskNeue';
  src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2')
    format('woff2');
}

/* END PERPLEXITY DESIGN SYSTEM */
```css
/* ===== CSS CUSTOM PROPERTIES ===== */
:root {
  /* Brand Colors - Updated to use design system */
  --primary-blue: var(--color-primary);
  --primary-blue-dark: var(--color-primary-hover);
  --primary-blue-light: rgba(var(--color-teal-500-rgb), 0.1);
  --accent-green: var(--color-teal-300);
  --accent-green-dark: var(--color-teal-600);
  --whatsapp-green: #25D366;
  
  /* Neutral Colors - Updated to use design system */
  --white: var(--color-surface);
  --light-gray: var(--color-background);
  --medium-gray: var(--color-secondary);
  --dark-gray: var(--color-text-secondary);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-secondary);
  --background: var(--color-background);
  
  /* Shadows - Updated to use design system */
  --shadow-sm: var(--shadow-sm);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: 0 25px 50px rgba(0,0,0,0.08);
  
  /* Transitions - Updated to use design system */
  --transition-fast: var(--duration-fast) var(--ease-standard);
  --transition-medium: var(--duration-normal) var(--ease-standard);
  --transition-slow: 600ms var(--ease-standard);
  
  /* Spacing - Updated to use design system */
  --spacing-xs: var(--space-4);
  --spacing-sm: var(--space-8);
  --spacing-md: var(--space-16);
  --spacing-lg: var(--space-24);
  --spacing-xl: var(--space-32);
  --spacing-xxl: 48px;
  
  /* Typography - Updated to use design system */
  --font-primary: var(--font-family-base);
  --font-size-sm: var(--font-size-sm);
  --font-size-base: var(--font-size-base);
  --font-size-lg: var(--font-size-lg);
  --font-size-xl: var(--font-size-xl);
  --font-size-2xl: var(--font-size-2xl);
  --font-size-3xl: var(--font-size-3xl);
  --font-size-4xl: var(--font-size-4xl);
  --font-size-5xl: 48px;
  
  /* Border Radius - Updated to use design system */
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-base);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--space-16);
  --radius-full: var(--radius-full);
}

/* ===== RESET AND BASE STYLES ===== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
}

body {
  font-family: var(--font-primary);
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--background);
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* ===== LOADING SCREEN ===== */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity var(--transition-medium), visibility var(--transition-medium);
}

.loading-screen.hidden {
  opacity: 0;
  visibility: hidden;
}

.loading-content {
  text-align: center;
}

.loading-icon {
  font-size: var(--font-size-4xl);
  color: var(--primary-blue);
  animation: bounce 1s infinite;
}

.loading-text {
  margin-top: var(--spacing-md);
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0,-30px,0); }
  70% { transform: translate3d(0,-15px,0); }
  90% { transform: translate3d(0,-4px,0); }
}

/* ===== HEADER STYLES ===== */
.header {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: var(--color-surface);
  padding: var(--spacing-md) 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-medium);
}

.header.scrolled {
  background: rgba(var(--color-teal-500-rgb), 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-sm) 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  color: var(--color-surface);
}

.logo i {
  font-size: var(--font-size-2xl);
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
}

.nav-links a {
  color: var(--color-surface);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-green);
  transition: width var(--transition-fast);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--accent-green);
}

/* Contact Info */
.contact-info {
  display: none;
  gap: var(--spacing-lg);
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.contact-item a {
  color: var(--color-surface);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contact-item a:hover {
  color: var(--accent-green);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--color-surface);
  transition: all var(--transition-fast);
  transform-origin: center;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background: var(--primary-blue);
  transform: translateY(-100%);
  transition: transform var(--transition-medium);
  z-index: 999;
  box-shadow: var(--shadow-md);
}

.mobile-nav.active {
  transform: translateY(0);
}

.mobile-nav-links {
  list-style: none;
  padding: var(--spacing-lg) 0;
}

.mobile-nav-links li {
  border-bottom: 1px solid rgba(var(--color-brown-600-rgb), 0.1);
}

.mobile-nav-links a {
  display: block;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--color-surface);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: background var(--transition-fast);
}

.mobile-nav-links a:hover {
  background: var(--color-secondary);
}

.mobile-phone {
  background: var(--accent-green) !important;
  margin: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
}

.mobile-phone:hover {
  background: var(--accent-green-dark) !important;
}

/* ===== HERO SECTION ===== */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: var(--color-surface);
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)"/></svg>');
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(var(--color-teal-500-rgb), 0.1) 0%, rgba(var(--color-teal-300-rgb), 0.1) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease;
}

.hero-content h1 {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--accent-green) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xxl);
  opacity: 0.9;
  font-weight: var(--font-weight-normal);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  animation: float 2s ease-in-out infinite;
  cursor: pointer;
}

.hero-scroll-indicator i {
  font-size: var(--font-size-xl);
  color: var(--color-surface);
  opacity: 0.7;
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== BUTTON STYLES ===== */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-xl);
  text-decoration: none;
  border-radius: var(--radius-full);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-medium);
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.cta-primary {
  background: var(--accent-green);
  color: var(--color-btn-primary-text);
  box-shadow: 0 4px 15px rgba(var(--color-teal-300-rgb), 0.3);
}

.cta-primary:hover {
  background: var(--accent-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--color-teal-300-rgb), 0.4);
}

.cta-secondary {
  background: transparent;
  color: var(--color-surface);
  border: 2px solid var(--color-surface);
}

.cta-secondary:hover {
  background: var(--color-surface);
  color: var(--primary-blue);
  transform: translateY(-2px);
}

/* ===== SECTION STYLES ===== */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  color: var(--primary-blue);
  font-weight: var(--font-weight-bold);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* ===== SERVICES SECTION ===== */
.services {
  padding: 100px 0;
  background: var(--light-gray);
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, var(--primary-blue), transparent);
  opacity: 0.05;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.service-card {
  background: var(--white);
  padding: var(--spacing-xxl);
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-medium);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-card-border);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-blue) 0%, var(--accent-green) 100%);
  transform: scaleX(0);
  transition: transform var(--transition-medium);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-blue-light);
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--primary-blue-light);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-lg);
  transition: all var(--transition-medium);
}

.service-icon i {
  font-size: var(--font-size-3xl);
  color: var(--primary-blue);
  transition: all var(--transition-medium);
}

.service-card:hover .service-icon {
  background: var(--accent-green);
  transform: scale(1.1);
}

.service-card:hover .service-icon i {
  color: var(--color-surface);
  transform: scale(1.1);
}

.service-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.service-features {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.feature-tag {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

/* ===== ABOUT SECTION ===== */
.about {
  padding: 100px 0;
  background: var(--white);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  align-items: start;
}

.about-description {
  margin: var(--spacing-xl) 0;
}

.about-description p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
  line-height: 1.8;
}

.trust-badges {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  margin-top: var(--spacing-xl);
}

.badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--primary-blue-light);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-full);
  color: var(--primary-blue);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-fast);
}

.badge:hover {
  background: var(--primary-blue);
  color: var(--color-surface);
  transform: translateY(-2px);
}

.badge i {
  font-size: var(--font-size-lg);
}

.about-stats {
  background: var(--light-gray);
  padding: var(--spacing-xxl);
  border-radius: var(--radius-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-blue);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

/* ===== CONTACT SECTION ===== */
.contact {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: var(--color-surface);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="1200" height="600" fill="url(%23dots)"/></svg>');
}

.contact-title {
  color: var(--color-surface);
}

.contact .section-subtitle {
  color: rgba(var(--color-gray-200-rgb), 0.8);
}

.contact-content {
  position: relative;
  z-index: 2;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
}

.contact-item {
  text-align: center;
  padding: var(--spacing-xl);
  background: rgba(var(--color-brown-600-rgb), 0.1);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
  transition: all var(--transition-medium);
  border: 1px solid rgba(var(--color-brown-600-rgb), 0.2);
}

.contact-item:hover {
  background: rgba(var(--color-brown-600-rgb), 0.15);
  transform: translateY(-5px);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--accent-green);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-lg);
}

.contact-icon i {
  font-size: var(--font-size-2xl);
  color: var(--color-surface);
}

.contact-item h3 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xl);
}

.contact-item p a {
  color: var(--color-surface);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.contact-item p a:hover {
  color: var(--accent-green);
}

.contact-item small {
  display: block;
  margin-top: var(--spacing-sm);
  opacity: 0.8;
  font-size: var(--font-size-sm);
}

.contact-cta {
  text-align: center;
}

/* ===== WHATSAPP FLOAT BUTTON ===== */
.whatsapp-float {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 65px;
  height: 65px;
  background: var(--whatsapp-green);
  color: var(--color-surface);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  text-decoration: none;
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: all var(--transition-medium);
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 35px rgba(37, 211, 102, 0.6);
  animation: none;
}

.whatsapp-tooltip {
  position: absolute;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-primary);
  color: var(--color-surface);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-medium);
}

.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: var(--text-primary);
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* ===== FOOTER ===== */
.footer {
  background: var(--color-surface);
  color: var(--color-text);
  padding: var(--spacing-xxl) 0 var(--spacing-xl) 0;
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xxl);
  align-items: start;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
}

.footer-logo i {
  font-size: var(--font-size-2xl);
  color: var(--accent-green);
}

.footer-main p {
  opacity: 0.8;
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.footer-section h4 {
  color: var(--accent-green);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: var(--spacing-sm);
}

.footer-section ul li a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-section ul li a:hover {
  color: var(--accent-green);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  
  .contact-info {
    display: flex;
  }
  
  .mobile-menu-toggle {
    display: none;
  }
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .about-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  :root {
    --font-size-5xl: 40px;
    --font-size-4xl: var(--font-size-3xl);
    --font-size-3xl: 28px;
  }
  
  .hero-content h1 {
    font-size: var(--font-size-4xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .service-card {
    padding: var(--spacing-xl);
  }
  
  .trust-badges {
    justify-content: center;
  }
  
  .about-stats {
    grid-template-columns: 1fr 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .whatsapp-float {
    width: 55px;
    height: 55px;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    font-size: var(--font-size-xl);
  }
  
  .whatsapp-tooltip {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .hero {
    min-height: 70vh;
    padding: var(--spacing-xl) 0;
  }
  
  .hero-content h1 {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xl);
  }
  
  .hero-cta {
    gap: var(--spacing-md);
  }
  
  .cta-button {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-base);
    width: 100%;
    justify-content: center;
  }
  
  .section-title {
    font-size: var(--font-size-3xl);
  }
  
  .section-subtitle {
    font-size: var(--font-size-base);
  }
  
  .services,
  .about,
  .contact {
    padding: 60px 0;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .service-card {
    padding: var(--spacing-lg);
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .service-icon i {
    font-size: var(--font-size-2xl);
  }
  
  .about-stats {
    padding: var(--spacing-lg);
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .about-description p {
    font-size: var(--font-size-base);
  }
  
  .trust-badges {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-grid {
    gap: var(--spacing-md);
  }
  
  .contact-item {
    padding: var(--spacing-lg);
  }
  
  .whatsapp-float {
    width: 50px;
    height: 50px;
    bottom: var(--spacing-md);
    right: var(--spacing-md);
  }
  
  .header-content {
    gap: var(--spacing-md);
  }
  
  .logo {
    font-size: var(--font-size-lg);
  }
  
  .logo i {
    font-size: var(--font-size-xl);
  }
  
  .mobile-nav {
    top: 64px;
  }
}

/* ===== ANIMATIONS ===== */
.fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease forwards;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease forwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===== UTILITY CLASSES ===== */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.hidden { display: none; }
.visible { display: block; }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: var(--spacing-xs); }
.mt-2 { margin-top: var(--spacing-sm); }
.mt-3 { margin-top: var(--spacing-md); }
.mt-4 { margin-top: var(--spacing-lg); }
.mt-5 { margin-top: var(--spacing-xl); }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--spacing-xs); }
.mb-2 { margin-bottom: var(--spacing-sm); }
.mb-3 { margin-bottom: var(--spacing-md); }
.mb-4 { margin-bottom: var(--spacing-lg); }
.mb-5 { margin-bottom: var(--spacing-xl); }
```
