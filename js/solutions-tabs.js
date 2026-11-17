/**
 * QUAD WISE TECHNOLOGIES - SOLUTIONS TAB CONTROLLER
 * Dynamic tab switcher, spec table filtering, and direct quote triggers
 */

document.addEventListener('DOMContentLoaded', () => {
  initSolutionsTabs();
});

function initSolutionsTabs() {
  const tabs = document.querySelectorAll('[data-solution-tab]');
  const panes = document.querySelectorAll('[data-solution-pane]');

  if (!tabs.length || !panes.length) return;

  const switchTab = (targetId) => {
    if (!targetId) targetId = 'it-infrastructure';

    // Update tab buttons - strictly ensure ONLY ONE active tab at any time
    tabs.forEach(tab => {
      const isTarget = tab.getAttribute('data-solution-tab') === targetId;
      if (isTarget) {
        tab.classList.add('active', 'bg-[#C9A24D]', 'text-[#0A0D12]', 'border-[#C9A24D]', 'font-bold');
        tab.classList.remove('bg-[#0F141C]', 'text-slate-300', 'border-slate-800');
      } else {
        tab.classList.remove('active', 'bg-[#C9A24D]', 'text-[#0A0D12]', 'border-[#C9A24D]', 'font-bold');
        tab.classList.add('bg-[#0F141C]', 'text-slate-300', 'border-slate-800');
      }
    });

    // Update panes with smooth transition
    panes.forEach(pane => {
      const isTarget = pane.getAttribute('data-solution-pane') === targetId;
      if (isTarget) {
        pane.classList.remove('hidden');
        setTimeout(() => {
          pane.classList.remove('opacity-0', 'translate-y-2');
        }, 10);
      } else {
        pane.classList.add('opacity-0', 'translate-y-2');
        pane.classList.add('hidden');
      }
    });

    // Keep URL hash synchronized without jumping
    try {
      if (window.location.hash.replace('#', '') !== targetId) {
        history.replaceState(null, null, `#${targetId}`);
      }
    } catch(e) {}

    // Immediately update header navigation underline & active indicator
    if (typeof window.initActiveNav === 'function') {
      window.initActiveNav();
    }

    // Re-initialize any dynamic icons inside newly visible pane
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // Expose globally for header links & external navigators
  window.qwtSwitchTab = switchTab;

  // Tab click listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('data-solution-tab');
      switchTab(targetId);
    });
  });

  // Handle URL hash on load and on hash change
  const handleHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.querySelector(`[data-solution-tab="${hash}"]`)) {
      switchTab(hash);
      const tabEl = document.querySelector(`[data-solution-tab="${hash}"]`);
      if (tabEl) {
        tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    } else {
      switchTab('it-infrastructure');
    }
  };

  handleHash();
  window.addEventListener('hashchange', handleHash);
  window.addEventListener('popstate', handleHash);
}
