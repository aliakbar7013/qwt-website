/**
 * QUAD WISE TECHNOLOGIES - CASE STUDIES FILTER & DEEP-DIVE MODAL
 */

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudies();
});

function initCaseStudies() {
  const filterBtns = document.querySelectorAll('[data-cs-filter]');
  const cards = document.querySelectorAll('[data-cs-card]');

  // Sector filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-cs-filter');

      filterBtns.forEach(b => {
        b.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        b.classList.add('bg-[#0F141C]', 'text-slate-300');
      });
      btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
      btn.classList.remove('bg-[#0F141C]', 'text-slate-300');

      cards.forEach(card => {
        const sector = card.getAttribute('data-cs-sector');
        if (filter === 'all' || sector === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Deep Dive Modal
  const modal = document.getElementById('cs-detail-modal');
  const modalContent = document.getElementById('cs-modal-body');
  const closeBtn = document.getElementById('cs-modal-close');

  if (!modal || !modalContent) return;

  const openModal = (card) => {
    const title = card.querySelector('.cs-title')?.textContent || 'UAE Enterprise Deployment';
    const client = card.querySelector('.cs-client')?.textContent || 'Regulated Enterprise';
    const sector = card.querySelector('.cs-sector-badge')?.textContent || 'Government';
    const challenge = card.getAttribute('data-challenge') || 'High latency and uncertified legacy infrastructure.';
    const solution = card.getAttribute('data-solution') || 'De-coupled spine-leaf network with all-flash NVMe-oF and SIRA VMS compliance.';
    const boq = JSON.parse(card.getAttribute('data-boq') || '[]');
    const metrics = JSON.parse(card.getAttribute('data-metrics') || '[]');

    modalContent.innerHTML = `
      <div class="space-y-6">
        <div class="border-b border-slate-800 pb-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 rounded bg-[#C9A24D]/10 text-[#C9A24D] border border-[#C9A24D]/30 text-xs font-mono">${sector}</span>
            <span class="text-xs text-slate-400 font-mono">CLIENT CONFIDENTIAL: ${client}</span>
          </div>
          <h2 class="text-2xl font-bold font-heading text-white">${title}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-[#0F141C] border border-red-500/20">
            <h4 class="text-xs font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
              <i data-lucide="alert-triangle" class="w-4 h-4 text-red-400"></i> The Strategic Challenge
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed">${challenge}</p>
          </div>
          <div class="p-4 rounded-xl bg-[#0F141C] border border-[#10B981]/30">
            <h4 class="text-xs font-mono uppercase tracking-wider text-[#10B981] mb-2 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-4 h-4 text-[#10B981]"></i> The QWT Architectural Solution
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed">${solution}</p>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#C9A24D] mb-3 flex items-center gap-1.5">
            <i data-lucide="layers" class="w-4 h-4 text-[#C9A24D]"></i> Deployed OEM Bill of Materials (BOQ)
          </h4>
          <div class="p-4 rounded-xl bg-[#0A0D12] border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            ${boq.map(item => `
              <div class="flex items-start gap-2">
                <span class="text-[#C9A24D]">▶</span>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <i data-lucide="bar-chart-2" class="w-4 h-4 text-slate-400"></i> Verified Audit Deliverables
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${metrics.map(m => `
              <div class="p-3 rounded-lg bg-[#0F141C] border border-slate-800 text-center">
                <div class="text-xl font-bold font-mono text-[#C9A24D]">${m.value}</div>
                <div class="text-[11px] text-slate-400 mt-1">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
          <span class="text-xs text-slate-500 font-mono">AUDITED BY SIRA & ADGM REGULATORY PANELS</span>
          <button data-open-quote data-quote-category="Enterprise Infrastructure" class="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold inline-flex items-center gap-2">
            <i data-lucide="file-text" class="w-4 h-4 text-black"></i> Replicate This Architecture
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-card')?.classList.remove('scale-95');
    }, 10);
    document.body.classList.add('overflow-hidden');

    if (window.lucide) window.lucide.createIcons();

    // Re-bind quote button inside modal
    modalContent.querySelector('[data-open-quote]')?.addEventListener('click', () => {
      closeModal();
      document.querySelector('#quote-modal')?.classList.remove('hidden');
    });
  };

  const closeModal = () => {
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-card')?.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 250);
  };

  document.querySelectorAll('[data-open-cs-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('[data-cs-card]');
      if (card) openModal(card);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });
}
