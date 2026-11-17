/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - CORE CLIENT ENGINE
 * Global navigation, modals, toasts, telemetry persistence, and Lucide init
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initQuoteModal();
  initHeaderScroll();
  initActiveNav();
  initLucideIcons();
  initGlobalToasts();
  initPageTransitions();
  initScrollProgress();
  initScrollReveal();
  initCardSpotlights();
  initTelemetryCounters();
  initFaqAccordion();
  initChannelsSync();
});

/* --------------------------------------------------------------------------
   LUCIDE ICONS INITIALIZATION
   -------------------------------------------------------------------------- */
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   STICKY HEADER SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-2xl', 'shadow-black/70', 'bg-[#0A0D14]/95');
      header.classList.remove('bg-[#0A0D12]/90');
    } else {
      header.classList.remove('shadow-2xl', 'shadow-black/70', 'bg-[#0A0D14]/95');
      header.classList.add('bg-[#0A0D12]/90');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   ACTIVE NAV LINK HIGHLIGHTING
   -------------------------------------------------------------------------- */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentHash = window.location.hash.replace('#', '');
  
  // Normalize solutions tab / hash mapping
  let normalizedHash = currentHash;
  if (currentPath === 'solutions.html') {
    if (!currentHash) {
      normalizedHash = 'it-infrastructure';
    } else if (currentHash === 'erpnext-frappe' || currentHash === 'digital-business-cards') {
      normalizedHash = 'digital-transformation';
    }
  }

  // Clean desktop header links
  const desktopLinks = document.querySelectorAll('#main-header nav a.nav-link');
  desktopLinks.forEach(link => {
    const rawHref = link.getAttribute('href') || '';
    const [linkPath, linkHash] = rawHref.split('#');
    const isExactPath = linkPath === currentPath || (currentPath === '' && linkPath === 'index.html');

    let isActive = false;
    if (currentPath === 'solutions.html') {
      if (linkPath === 'solutions.html') {
        isActive = (linkHash === normalizedHash);
      }
    } else {
      isActive = isExactPath && (!linkHash || (currentHash && linkHash === currentHash));
    }

    // Remove any legacy indicator spans
    const legacy = link.querySelectorAll('.nav-indicator, .nav-dot');
    legacy.forEach(el => el.remove());

    if (isActive) {
      link.classList.add('active', 'is-active', 'text-[#C9A24D]', 'font-semibold', 'border-[#C9A24D]');
      link.classList.remove('text-slate-300', 'border-transparent');
    } else {
      link.classList.remove('active', 'is-active', 'text-[#C9A24D]', 'font-semibold', 'border-[#C9A24D]');
      link.classList.add('text-slate-300', 'border-transparent');
    }
  });

  // Mobile drawer links
  const mobileLinks = document.querySelectorAll('#mobile-drawer nav a');
  mobileLinks.forEach(link => {
    const rawHref = link.getAttribute('href') || '';
    const [linkPath, linkHash] = rawHref.split('#');
    const isExactPath = linkPath === currentPath || (currentPath === '' && linkPath === 'index.html');

    let isActive = false;
    if (currentPath === 'solutions.html') {
      if (linkPath === 'solutions.html') {
        isActive = (linkHash === currentHash) || (linkHash === normalizedHash);
      }
    } else {
      isActive = isExactPath && (!linkHash || (currentHash && linkHash === currentHash));
    }

    if (isActive) {
      link.classList.add('text-[#C9A24D]', 'bg-slate-800/60', 'font-semibold');
      link.classList.remove('text-slate-300');
    } else {
      link.classList.remove('text-[#C9A24D]', 'bg-slate-800/60', 'font-semibold');
      link.classList.add('text-slate-300');
    }
  });
}

// Global hook & reactive hash listener
window.initActiveNav = initActiveNav;
window.addEventListener('hashchange', initActiveNav);
window.addEventListener('popstate', initActiveNav);

// Immediate click handler for header nav links pointing to solutions hashes
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-header a[href*="solutions.html#"], #main-header a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const rawHref = link.getAttribute('href') || '';
      const [linkPath, linkHash] = rawHref.split('#');
      if (linkHash && (currentPath === 'solutions.html' || linkPath === 'solutions.html')) {
        if (currentPath === 'solutions.html') {
          // On solutions.html, switch tab directly without page jump
          if (window.qwtSwitchTab) {
            e.preventDefault();
            window.qwtSwitchTab(linkHash);
            initActiveNav();
            // Scroll to solution section smoothly
            const targetEl = document.getElementById(linkHash) || document.querySelector(`[data-solution-pane="${linkHash}"]`);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      }
    });
  });
});

/* --------------------------------------------------------------------------
   RESPONSIVE MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');

  if (!menuBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  window.closeMobileMenu = closeDrawer;

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close when pressing ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
}

/* --------------------------------------------------------------------------
   UNIVERSAL QUOTE / RFP MODAL
   -------------------------------------------------------------------------- */
function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-open-quote]');
  const closeButtons = modal.querySelectorAll('[data-close-quote]');
  const form = document.getElementById('modal-quote-form');
  const modalSuccess = document.getElementById('modal-quote-success');

  const openModal = (category = '') => {
    modal.classList.remove('hidden');
    modal.scrollTop = 0;
    const card = modal.querySelector('.modal-card');
    if (card) card.scrollTop = 0;

    setTimeout(() => {
      modal.classList.remove('opacity-0');
      card?.classList.remove('scale-95');
    }, 10);
    document.body.classList.add('overflow-hidden');

    if (category) {
      const select = modal.querySelector('select[name="solution_category"]');
      if (select) select.value = category;
    }
    initLucideIcons();
  };

  const closeModal = () => {
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-card')?.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      if (form) {
        form.classList.remove('hidden');
        if (modalSuccess) modalSuccess.classList.add('hidden');
        form.reset();
      }
    }, 250);
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-quote-category') || '';
      openModal(category);
    });
  });

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2">
          <svg class="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Authorizing OEM Channel...
        </span>
      `;

      // Collect data for CRM persistence
      const formData = new FormData(form);
      const lead = {
        id: 'QWT-RFP-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString(),
        fullName: formData.get('fullName') || 'Enterprise Client',
        workEmail: formData.get('workEmail') || 'rfp@client.ae',
        phone: formData.get('phone') || '+971 50 000 0000',
        company: formData.get('company') || 'Undisclosed UAE Entity',
        solution: formData.get('solution_category') || 'Enterprise Infrastructure',
        slaRequirement: formData.get('slaRequirement') || 'Mission-Critical 24/7',
        estimatedBudget: formData.get('estimatedBudget') || 'AED 250,000 - 500,000',
        siraCompliant: formData.get('siraCompliant') === 'on',
        notes: formData.get('notes') || 'Standard quote request initiated via web portal.',
        status: 'NEW_TRIAGE'
      };

      // Save to localStorage so admin-crm.html can display it immediately
      try {
        const existingLeads = JSON.parse(localStorage.getItem('qwt_crm_leads') || '[]');
        existingLeads.unshift(lead);
        localStorage.setItem('qwt_crm_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('Storage quota or error:', err);
      }

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (form && modalSuccess) {
          form.classList.add('hidden');
          modalSuccess.classList.remove('hidden');
          const refCodeElem = document.getElementById('modal-ref-code');
          if (refCodeElem) refCodeElem.textContent = lead.id;
          initLucideIcons();
        }
        showToast(`Engineering Ticket Generated: ${lead.id}`, 'success');
      }, 900);
    });
  }
}

/* --------------------------------------------------------------------------
   GLOBAL TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.getElementById('qwt-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'qwt-toast-container';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `admin-toast pointer-events-auto transform transition-all duration-300 translate-y-3 opacity-0 flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md shadow-2xl text-xs font-mono ${
    type === 'success' 
      ? 'bg-[#0F141C]/95 border-[#10B981]/50 text-white shadow-[#10B981]/10' 
      : 'bg-[#0F141C]/95 border-[#C9A24D]/50 text-white shadow-[#C9A24D]/10'
  }`;

  const iconName = type === 'success' ? 'check-circle-2' : 'info';
  const iconColor = type === 'success' ? 'text-[#10B981]' : 'text-[#C9A24D]';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor} shrink-0 toast-icon"></i>
    <div class="flex-1 font-medium toast-message">${message}</div>
    <button class="text-slate-400 hover:text-white shrink-0 ml-2 toast-close">&times;</button>
  `;

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  }, 10);

  const removeToast = () => {
    toast.classList.add('translate-y-3', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  };

  toast.querySelector('button').addEventListener('click', removeToast);
  setTimeout(removeToast, 4500);
}

function initGlobalToasts() {
  window.qwtToast = showToast;
}

/* --------------------------------------------------------------------------
   PAGE TRANSITION CONTROLLER (Smooth moving between pages)
   -------------------------------------------------------------------------- */
function initPageTransitions() {
  // Ensure top laser progress bar exists
  let progressBar = document.getElementById('page-scroll-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'page-scroll-progress';
    document.body.appendChild(progressBar);
  }

  // Smooth entrance transition on page load
  document.body.classList.remove('page-is-exiting', 'page-is-entering');
  if (progressBar) progressBar.classList.remove('is-navigating');

  // Handle browser back/forward and bfcache restore smoothly
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-is-exiting');
    if (progressBar) progressBar.classList.remove('is-navigating');
  });
}

/* --------------------------------------------------------------------------
   SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('page-scroll-progress');
  if (!progressBar) return;

  const updateProgress = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  // Select candidate elements: major sections, cards, feature blocks
  const candidates = document.querySelectorAll(
    'section > div, .enterprise-card, [data-arch-tab], footer .grid > div'
  );

  if (!('IntersectionObserver' in window)) {
    candidates.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  candidates.forEach(el => {
    // Avoid re-animating interactive radar / sovereign matrix hero banner
    if (el.querySelector('.animate-orbit-slow, #radarCanvas, .animate-pulse-sla')) return;

    el.classList.add('scroll-reveal');
    
    // Add staggered delay for grid items
    const parentGrid = el.closest('.grid');
    if (parentGrid) {
      const siblings = Array.from(parentGrid.children);
      const siblingIndex = siblings.indexOf(el);
      if (siblingIndex > 0) {
        el.style.transitionDelay = `${Math.min(siblingIndex * 70, 420)}ms`;
      }
    }

    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   CARD SPOTLIGHT HOVER EFFECT
   -------------------------------------------------------------------------- */
function initCardSpotlights() {
  const cards = document.querySelectorAll('.enterprise-card, .glass-panel, [data-open-quote]');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   TELEMETRY NUMBER COUNTER ANIMATIONS
   -------------------------------------------------------------------------- */
function initTelemetryCounters() {
  const metricValues = document.querySelectorAll(
    '.font-heading.text-2xl, .font-heading.text-3xl, .font-heading.text-4xl, .font-mono.text-3xl, .font-mono.text-4xl'
  );

  if (!('IntersectionObserver' in window)) return;
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.innerText.trim();
        
        // Match numbers like 15+, 450+, 99.999%, 800 Gbps, 2.4 PB, <8 min
        const match = text.match(/^([<~]?)([0-9]+(?:\.[0-9]+)?)(.*)$/);
        if (match) {
          const prefix = match[1];
          const targetNum = parseFloat(match[2]);
          const suffix = match[3];
          const isFloat = match[2].includes('.');
          const decimals = isFloat ? match[2].split('.')[1].length : 0;
          
          let startNum = 0;
          const duration = 1200;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = (startNum + (targetNum - startNum) * easeProgress);
            
            el.innerText = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.innerText = text; // Ensure exact final string
            }
          };
          
          requestAnimationFrame(updateCounter);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  metricValues.forEach(m => observer.observe(m));
}

/* --------------------------------------------------------------------------
   INTERACTIVE FAQ ACCORDION ENGINE
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const toggles = document.querySelectorAll('[data-faq-toggle]');
  if (!toggles.length) return;

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.faq-item');
      if (!parent) return;

      const content = parent.querySelector('.faq-content');
      const icon = toggle.querySelector('.faq-icon');
      const isExpanded = parent.classList.contains('active');

      // Close other accordions in the same group
      const group = parent.closest('.faq-group');
      if (group) {
        group.querySelectorAll('.faq-item.active').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
            item.classList.remove('border-[#C9A24D]/50', 'bg-[#111827]');
            item.classList.add('border-slate-800/80', 'bg-[#0F141C]');
            const c = item.querySelector('.faq-content');
            const i = item.querySelector('.faq-icon');
            const btn = item.querySelector('[data-faq-toggle]');
            if (c) c.classList.add('hidden');
            if (i) i.classList.remove('rotate-180', 'text-[#C9A24D]');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isExpanded) {
        parent.classList.remove('active');
        parent.classList.remove('border-[#C9A24D]/50', 'bg-[#111827]');
        parent.classList.add('border-slate-800/80', 'bg-[#0F141C]');
        if (content) content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180', 'text-[#C9A24D]');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        parent.classList.add('active');
        parent.classList.add('border-[#C9A24D]/50', 'bg-[#111827]');
        parent.classList.remove('border-slate-800/80', 'bg-[#0F141C]');
        if (content) content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180', 'text-[#C9A24D]');
        toggle.setAttribute('aria-expanded', 'true');
      }

      if (window.lucide) window.lucide.createIcons();
    });
  });
}

/* --------------------------------------------------------------------------
   GLOBAL CHANNELS & SOCIAL LINKS SYNC (Managed from Admin Panel)
   -------------------------------------------------------------------------- */
const QWT_DEFAULT_CHANNELS = {
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

function initChannelsSync() {
  function applyChannels() {
    let channels = QWT_DEFAULT_CHANNELS;
    try {
      const stored = localStorage.getItem('qwt_channels_settings');
      if (stored) {
        channels = Object.assign({}, QWT_DEFAULT_CHANNELS, JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Channels settings parse fallback:', e);
    }

    // 1. LinkedIn in footers
    document.querySelectorAll('a[href*="linkedin.com"], a[title*="LinkedIn"]').forEach(el => {
      if (channels.linkedin && channels.linkedin.enabled !== false) {
        el.style.display = '';
        el.href = channels.linkedin.url || 'https://linkedin.com';
        el.title = channels.linkedin.label || 'LinkedIn Corporate';
      } else {
        el.style.display = 'none';
      }
    });

    // 2. Email in footers, headers, contact elements
    document.querySelectorAll('a[href^="mailto:"], a[title*="Email"]').forEach(el => {
      if (channels.email && channels.email.enabled !== false) {
        el.style.display = '';
        const emailAddr = channels.email.address || 'contact@qwt.ae';
        el.href = `mailto:${emailAddr}`;
        el.title = `Email ${emailAddr}`;
        if (el.textContent.includes('@')) {
          el.textContent = emailAddr;
        }
      } else {
        el.style.display = 'none';
      }
    });

    // 3. WhatsApp in footers, contact cards, and floating button
    document.querySelectorAll('a[href*="wa.me"], a[title*="WhatsApp"]').forEach(el => {
      if (channels.whatsapp && channels.whatsapp.enabled !== false) {
        el.style.display = '';
        const waUrl = channels.whatsapp.url || `https://wa.me/${(channels.whatsapp.phone || '97142889488').replace(/[^0-9]/g, '')}`;
        el.href = waUrl;
        el.title = channels.whatsapp.label || 'WhatsApp Instant Desk';
      } else {
        el.style.display = 'none';
      }
    });

    // Floating WhatsApp Button
    const floatingBtn = document.getElementById('floating-whatsapp-btn');
    if (floatingBtn) {
      if (channels.whatsapp && channels.whatsapp.enabled !== false) {
        floatingBtn.style.display = '';
        floatingBtn.href = channels.whatsapp.url || `https://wa.me/${(channels.whatsapp.phone || '97142889488').replace(/[^0-9]/g, '')}`;
      } else {
        floatingBtn.style.display = 'none';
      }
    }
  }

  // Initial apply
  applyChannels();

  // Listen for storage changes across tabs or window events
  window.addEventListener('storage', (e) => {
    if (e.key === 'qwt_channels_settings') applyChannels();
  });
  window.addEventListener('qwt-channels-updated', applyChannels);
}
