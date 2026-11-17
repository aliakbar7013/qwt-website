/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - ADMIN MENU MINIMIZER
 * Enables the left-aligned navigation menu options to be minimizable/collapsible.
 * Preserves user preference in localStorage and supports smooth expand/collapse.
 */

class QwtMenuMinimizer {
  constructor() {
    this.STORAGE_KEY = 'qwt_admin_menu_minimized';
    this.isMinimized = false;
    this.init();
  }

  init() {
    try {
      this.isMinimized = localStorage.getItem(this.STORAGE_KEY) === 'true';
    } catch (e) {
      this.isMinimized = false;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.applyState(false));
    } else {
      this.applyState(false);
    }

    // Close compact dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const compact = document.getElementById('desktop-nav-compact');
      const dropdown = document.getElementById('compact-menu-dropdown');
      if (compact && dropdown && !compact.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const dropdown = document.getElementById('compact-menu-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
      }
    });
  }

  applyState(showToast = true) {
    const navLinks = document.getElementById('desktop-nav-links');
    const navCompact = document.getElementById('desktop-nav-compact');
    const minBtn = document.getElementById('nav-minimize-btn');
    const minIcon = document.getElementById('nav-minimize-icon');

    if (this.isMinimized) {
      document.documentElement.classList.add('nav-minimized');
      if (navLinks) navLinks.classList.add('hidden');
      if (navCompact) navCompact.classList.remove('hidden');

      if (minBtn) {
        minBtn.setAttribute('aria-expanded', 'false');
        minBtn.setAttribute('title', 'Expand navigation menu options');
        minBtn.setAttribute('aria-label', 'Expand navigation menu options');
      }
      if (minIcon) {
        minIcon.setAttribute('data-lucide', 'panel-left-open');
      }
    } else {
      document.documentElement.classList.remove('nav-minimized');
      if (navLinks) navLinks.classList.remove('hidden');
      if (navCompact) {
        navCompact.classList.add('hidden');
        const dropdown = document.getElementById('compact-menu-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
      }

      if (minBtn) {
        minBtn.setAttribute('aria-expanded', 'true');
        minBtn.setAttribute('title', 'Minimize navigation menu options');
        minBtn.setAttribute('aria-label', 'Minimize navigation menu options');
      }
      if (minIcon) {
        minIcon.setAttribute('data-lucide', 'panel-left-close');
      }
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    if (showToast && window.qwtToast) {
      window.qwtToast(this.isMinimized ? 'Navigation Menu Minimized' : 'Navigation Menu Expanded', 'info');
    }
  }

  toggle() {
    this.isMinimized = !this.isMinimized;
    try {
      localStorage.setItem(this.STORAGE_KEY, this.isMinimized ? 'true' : 'false');
    } catch (e) {
      console.warn('Could not persist menu state:', e);
    }
    this.applyState(true);
  }

  toggleDropdown() {
    const dropdown = document.getElementById('compact-menu-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }
}

// Global initialization
window.qwtMenuMinimizer = new QwtMenuMinimizer();
