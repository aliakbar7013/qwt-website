/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - SOCIAL & CONTACT CHANNELS MANAGER
 * Real-time channel configuration, live component preview, and site-wide sync bus
 */

(function () {
  const STORAGE_KEY = 'qwt_channels_settings';

  const DEFAULT_SETTINGS = {
    linkedin: {
      enabled: true,
      url: 'https://linkedin.com/company/quadwise-technologies',
      label: 'LinkedIn Corporate'
    },
    email: {
      enabled: true,
      address: 'contact@qwt.ae',
      label: 'contact@qwt.ae'
    },
    whatsapp: {
      enabled: true,
      phone: '+971 4 288 9488',
      url: 'https://wa.me/97142889488',
      label: 'WhatsApp Instant Desk'
    }
  };

  class ChannelsManager {
    constructor() {
      this.settings = this.loadSettings();
      this.init();
    }

    loadSettings() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Failed to load channel settings from localStorage:', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    }

    saveSettings() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
        window.dispatchEvent(new Event('qwt-channels-updated'));
        this.updateLastSavedTimestamp();
        if (window.qwtToast) {
          window.qwtToast('Channel endpoints successfully saved & deployed across all pages!', 'success');
        }
      } catch (e) {
        console.error('Failed to save channel settings:', e);
        if (window.qwtToast) {
          window.qwtToast('Error saving channel endpoints.', 'error');
        }
      }
    }

    resetDefaults() {
      this.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      this.saveSettings();
      this.populateForm();
      this.updateLivePreview();
      if (window.qwtToast) {
        window.qwtToast('Channel endpoints reset to corporate defaults.', 'info');
      }
    }

    init() {
      this.cacheDom();
      this.bindEvents();
      this.populateForm();
      this.updateLivePreview();
    }

    cacheDom() {
      // Inputs
      this.inputLinkedinUrl = document.getElementById('channel-linkedin-url');
      this.inputLinkedinLabel = document.getElementById('channel-linkedin-label');
      this.toggleLinkedin = document.getElementById('channel-linkedin-enable');
      this.testLinkedin = document.getElementById('channel-linkedin-test');

      this.inputEmailAddress = document.getElementById('channel-email-address');
      this.inputEmailLabel = document.getElementById('channel-email-label');
      this.toggleEmail = document.getElementById('channel-email-enable');
      this.testEmail = document.getElementById('channel-email-test');

      this.inputWhatsappPhone = document.getElementById('channel-whatsapp-phone');
      this.inputWhatsappUrl = document.getElementById('channel-whatsapp-url');
      this.toggleWhatsapp = document.getElementById('channel-whatsapp-enable');
      this.testWhatsapp = document.getElementById('channel-whatsapp-test');

      // Actions
      this.btnSave = document.getElementById('channels-save-btn');
      this.btnReset = document.getElementById('channels-reset-btn');
      this.lastSavedLabel = document.getElementById('channels-last-saved');

      // Preview Elements
      this.previewLinkedin = document.getElementById('preview-linkedin-btn');
      this.previewEmail = document.getElementById('preview-email-btn');
      this.previewWhatsapp = document.getElementById('preview-whatsapp-btn');

      this.summaryLinkedinUrl = document.getElementById('summary-linkedin-url');
      this.summaryEmailAddr = document.getElementById('summary-email-addr');
      this.summaryWhatsappNum = document.getElementById('summary-whatsapp-num');
    }

    bindEvents() {
      if (this.btnSave) {
        this.btnSave.addEventListener('click', () => {
          this.readFormValues();
          this.saveSettings();
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.resetDefaults();
        });
      }

      // Live update on input
      const inputs = [
        this.inputLinkedinUrl, this.inputLinkedinLabel, this.toggleLinkedin,
        this.inputEmailAddress, this.inputEmailLabel, this.toggleEmail,
        this.inputWhatsappPhone, this.inputWhatsappUrl, this.toggleWhatsapp
      ];

      inputs.forEach(el => {
        if (!el) return;
        const evt = el.type === 'checkbox' ? 'change' : 'input';
        el.addEventListener(evt, () => {
          this.readFormValues();
          this.updateLivePreview();
        });
      });

      // Automatically format WhatsApp URL when phone is modified
      if (this.inputWhatsappPhone && this.inputWhatsappUrl) {
        this.inputWhatsappPhone.addEventListener('blur', () => {
          const rawDigits = this.inputWhatsappPhone.value.replace(/[^0-9]/g, '');
          if (rawDigits && !this.inputWhatsappUrl.value) {
            this.inputWhatsappUrl.value = `https://wa.me/${rawDigits}`;
            this.readFormValues();
            this.updateLivePreview();
          }
        });
      }
    }

    populateForm() {
      if (!this.inputLinkedinUrl) return;

      // LinkedIn
      this.inputLinkedinUrl.value = this.settings.linkedin.url || '';
      this.inputLinkedinLabel.value = this.settings.linkedin.label || '';
      this.toggleLinkedin.checked = this.settings.linkedin.enabled !== false;

      // Email
      this.inputEmailAddress.value = this.settings.email.address || '';
      this.inputEmailLabel.value = this.settings.email.label || '';
      this.toggleEmail.checked = this.settings.email.enabled !== false;

      // WhatsApp
      this.inputWhatsappPhone.value = this.settings.whatsapp.phone || '';
      this.inputWhatsappUrl.value = this.settings.whatsapp.url || '';
      this.toggleWhatsapp.checked = this.settings.whatsapp.enabled !== false;

      this.updateTestLinks();
    }

    readFormValues() {
      this.settings.linkedin = {
        enabled: this.toggleLinkedin ? this.toggleLinkedin.checked : true,
        url: this.inputLinkedinUrl ? this.inputLinkedinUrl.value.trim() : '',
        label: this.inputLinkedinLabel ? this.inputLinkedinLabel.value.trim() : 'LinkedIn Corporate'
      };

      this.settings.email = {
        enabled: this.toggleEmail ? this.toggleEmail.checked : true,
        address: this.inputEmailAddress ? this.inputEmailAddress.value.trim() : 'contact@qwt.ae',
        label: this.inputEmailLabel ? this.inputEmailLabel.value.trim() : 'contact@qwt.ae'
      };

      const waPhone = this.inputWhatsappPhone ? this.inputWhatsappPhone.value.trim() : '+971 4 288 9488';
      let waUrl = this.inputWhatsappUrl ? this.inputWhatsappUrl.value.trim() : '';
      if (!waUrl && waPhone) {
        waUrl = `https://wa.me/${waPhone.replace(/[^0-9]/g, '')}`;
      }

      this.settings.whatsapp = {
        enabled: this.toggleWhatsapp ? this.toggleWhatsapp.checked : true,
        phone: waPhone,
        url: waUrl,
        label: 'WhatsApp Instant Desk'
      };

      this.updateTestLinks();
    }

    updateTestLinks() {
      if (this.testLinkedin) {
        this.testLinkedin.href = this.settings.linkedin.url || 'https://linkedin.com';
      }
      if (this.testEmail) {
        this.testEmail.href = `mailto:${this.settings.email.address}`;
      }
      if (this.testWhatsapp) {
        this.testWhatsapp.href = this.settings.whatsapp.url || `https://wa.me/${this.settings.whatsapp.phone.replace(/[^0-9]/g, '')}`;
      }
    }

    updateLivePreview() {
      // 1. LinkedIn Preview
      if (this.previewLinkedin) {
        if (this.settings.linkedin.enabled) {
          this.previewLinkedin.style.opacity = '1';
          this.previewLinkedin.style.pointerEvents = 'auto';
          this.previewLinkedin.href = this.settings.linkedin.url || 'https://linkedin.com';
          this.previewLinkedin.title = this.settings.linkedin.label || 'LinkedIn Corporate';
          if (this.summaryLinkedinUrl) {
            this.summaryLinkedinUrl.textContent = this.settings.linkedin.url || 'https://linkedin.com';
            this.summaryLinkedinUrl.classList.remove('line-through', 'text-slate-600');
            this.summaryLinkedinUrl.classList.add('text-[#C9A24D]');
          }
        } else {
          this.previewLinkedin.style.opacity = '0.3';
          this.previewLinkedin.style.pointerEvents = 'none';
          if (this.summaryLinkedinUrl) {
            this.summaryLinkedinUrl.textContent = '(Disabled / Hidden)';
            this.summaryLinkedinUrl.classList.add('line-through', 'text-slate-600');
            this.summaryLinkedinUrl.classList.remove('text-[#C9A24D]');
          }
        }
      }

      // 2. Email Preview
      if (this.previewEmail) {
        if (this.settings.email.enabled) {
          this.previewEmail.style.opacity = '1';
          this.previewEmail.style.pointerEvents = 'auto';
          this.previewEmail.href = `mailto:${this.settings.email.address}`;
          this.previewEmail.title = `Email ${this.settings.email.address}`;
          if (this.summaryEmailAddr) {
            this.summaryEmailAddr.textContent = this.settings.email.address;
            this.summaryEmailAddr.classList.remove('line-through', 'text-slate-600');
            this.summaryEmailAddr.classList.add('text-white');
          }
        } else {
          this.previewEmail.style.opacity = '0.3';
          this.previewEmail.style.pointerEvents = 'none';
          if (this.summaryEmailAddr) {
            this.summaryEmailAddr.textContent = '(Disabled / Hidden)';
            this.summaryEmailAddr.classList.add('line-through', 'text-slate-600');
            this.summaryEmailAddr.classList.remove('text-white');
          }
        }
      }

      // 3. WhatsApp Preview
      if (this.previewWhatsapp) {
        if (this.settings.whatsapp.enabled) {
          this.previewWhatsapp.style.opacity = '1';
          this.previewWhatsapp.style.pointerEvents = 'auto';
          this.previewWhatsapp.href = this.settings.whatsapp.url || `https://wa.me/${this.settings.whatsapp.phone.replace(/[^0-9]/g, '')}`;
          this.previewWhatsapp.title = this.settings.whatsapp.label || 'WhatsApp Instant Desk';
          if (this.summaryWhatsappNum) {
            this.summaryWhatsappNum.textContent = this.settings.whatsapp.phone;
            this.summaryWhatsappNum.classList.remove('line-through', 'text-slate-600');
            this.summaryWhatsappNum.classList.add('text-emerald-400');
          }
        } else {
          this.previewWhatsapp.style.opacity = '0.3';
          this.previewWhatsapp.style.pointerEvents = 'none';
          if (this.summaryWhatsappNum) {
            this.summaryWhatsappNum.textContent = '(Disabled / Hidden)';
            this.summaryWhatsappNum.classList.add('line-through', 'text-slate-600');
            this.summaryWhatsappNum.classList.remove('text-emerald-400');
          }
        }
      }

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    updateLastSavedTimestamp() {
      if (this.lastSavedLabel) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        this.lastSavedLabel.textContent = `Last Synced: Today at ${timeStr}`;
      }
    }
  }

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    window.qwtChannelsAdmin = new ChannelsManager();
  });
})();
