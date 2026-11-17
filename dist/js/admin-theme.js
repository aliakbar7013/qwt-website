/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - ADMIN THEME CONTROLLER
 * Manages dual-mode switching between Sovereign Dark ("Current Mode") and Executive White ("White Mode").
 * Persists user preference to localStorage and updates interface state dynamically.
 */

class QwtAdminThemeManager {
  constructor() {
    this.STORAGE_KEY = 'qwt_admin_theme';
    this.currentTheme = this.getStoredTheme();
    this.init();
  }

  getStoredTheme() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return (stored === 'white' || stored === 'light') ? 'white' : 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  init() {
    // Apply immediately to prevent any visual delay
    this.applyTheme(this.currentTheme, false);

    // Sync UI elements once DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.syncButtons());
    } else {
      this.syncButtons();
    }

    // Sync with other open tabs
    window.addEventListener('storage', (e) => {
      if (e.key === this.STORAGE_KEY && e.newValue) {
        const newTheme = (e.newValue === 'white' || e.newValue === 'light') ? 'white' : 'dark';
        if (newTheme !== this.currentTheme) {
          this.applyTheme(newTheme, false);
          this.syncButtons();
        }
      }
    });
  }

  applyTheme(theme, showFeedback = true) {
    this.currentTheme = theme;
    const isWhite = (theme === 'white');

    if (isWhite) {
      document.documentElement.classList.add('theme-white');
      document.documentElement.setAttribute('data-admin-theme', 'white');
    } else {
      document.documentElement.classList.remove('theme-white');
      document.documentElement.setAttribute('data-admin-theme', 'dark');
    }

    // Update browser color-scheme meta for native scrollbars and controls
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = isWhite ? 'light' : 'dark';
    }

    // Persist to storage
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e);
    }

    this.syncButtons();

    // Re-render Lucide icons if available
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('qwt-theme-changed', {
      detail: { theme: this.currentTheme }
    }));

    if (showFeedback && window.qwtToast) {
      const label = isWhite ? 'White Mode Activated' : 'Current Dark Mode Activated';
      window.qwtToast(label, 'success');
    }
  }

  syncButtons() {
    const isWhite = (this.currentTheme === 'white');

    // Desktop Buttons
    const btnDark = document.getElementById('theme-btn-dark');
    const btnWhite = document.getElementById('theme-btn-white');

    if (btnDark && btnWhite) {
      if (isWhite) {
        btnWhite.setAttribute('aria-pressed', 'true');
        btnDark.setAttribute('aria-pressed', 'false');
      } else {
        btnDark.setAttribute('aria-pressed', 'true');
        btnWhite.setAttribute('aria-pressed', 'false');
      }
    }

    // Mobile Drawer Buttons
    const mobileBtnDark = document.getElementById('mobile-theme-btn-dark');
    const mobileBtnWhite = document.getElementById('mobile-theme-btn-white');

    if (mobileBtnDark && mobileBtnWhite) {
      if (isWhite) {
        mobileBtnWhite.setAttribute('aria-pressed', 'true');
        mobileBtnDark.setAttribute('aria-pressed', 'false');
      } else {
        mobileBtnDark.setAttribute('aria-pressed', 'true');
        mobileBtnWhite.setAttribute('aria-pressed', 'false');
      }
    }

    // Login Screen Buttons
    const loginBtnDark = document.getElementById('login-theme-btn-dark');
    const loginBtnWhite = document.getElementById('login-theme-btn-white');

    if (loginBtnDark && loginBtnWhite) {
      if (isWhite) {
        loginBtnWhite.setAttribute('aria-pressed', 'true');
        loginBtnDark.setAttribute('aria-pressed', 'false');
      } else {
        loginBtnDark.setAttribute('aria-pressed', 'true');
        loginBtnWhite.setAttribute('aria-pressed', 'false');
      }
    }
  }

  setTheme(theme) {
    const target = (theme === 'white' || theme === 'light') ? 'white' : 'dark';
    this.applyTheme(target, true);
  }

  toggle() {
    const next = (this.currentTheme === 'white') ? 'dark' : 'white';
    this.setTheme(next);
  }

  getTheme() {
    return this.currentTheme;
  }
}

// Global initialization
window.qwtAdminTheme = new QwtAdminThemeManager();
