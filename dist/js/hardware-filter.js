/**
 * QUAD WISE TECHNOLOGIES - HARDWARE CATALOG FILTER ENGINE
 * Dynamic multi-category and OEM partner filtering with instant datasheet preview
 */

document.addEventListener('DOMContentLoaded', () => {
  initHardwareCatalog();
});

function initHardwareCatalog() {
  const categoryFilters = document.querySelectorAll('[data-hw-category]');
  const oemFilters = document.querySelectorAll('[data-hw-oem]');
  const searchInput = document.getElementById('hw-search-input');
  const items = document.querySelectorAll('[data-hw-card]');
  const countDisplay = document.getElementById('hw-visible-count');
  const emptyState = document.getElementById('hw-empty-state');

  let activeCategory = 'all';
  let activeOem = 'all';
  let searchQuery = '';

  const filterCards = () => {
    let visibleCount = 0;

    items.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardOem = card.getAttribute('data-oem') || '';
      const cardTitle = card.querySelector('.hw-title')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.hw-desc')?.textContent.toLowerCase() || '';
      const cardSpecs = card.querySelector('.hw-specs')?.textContent.toLowerCase() || '';

      const matchCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchOem = activeOem === 'all' || cardOem === activeOem;
      const matchSearch = !searchQuery || 
        cardTitle.includes(searchQuery) || 
        cardDesc.includes(searchQuery) || 
        cardSpecs.includes(searchQuery);

      if (matchCategory && matchOem && matchSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (countDisplay) {
      countDisplay.textContent = visibleCount;
    }

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  // Category filter handlers
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => {
        b.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        b.classList.add('bg-[#0F141C]', 'text-slate-300');
      });
      btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
      btn.classList.remove('bg-[#0F141C]', 'text-slate-300');

      activeCategory = btn.getAttribute('data-hw-category');
      filterCards();
    });
  });

  // OEM Partner filter handlers
  oemFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      oemFilters.forEach(b => {
        b.classList.remove('border-[#C9A24D]', 'text-[#C9A24D]');
        b.classList.add('border-slate-800', 'text-slate-400');
      });
      btn.classList.add('border-[#C9A24D]', 'text-[#C9A24D]');
      btn.classList.remove('border-slate-800', 'text-slate-400');

      activeOem = btn.getAttribute('data-hw-oem');
      filterCards();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  // Datasheet download simulator
  document.querySelectorAll('[data-download-spec]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const model = btn.getAttribute('data-download-spec') || 'Hardware-Spec';
      if (window.qwtToast) {
        window.qwtToast(`OEM Technical Datasheet Generated: [${model}.pdf]`, 'success');
      }
    });
  });
}
