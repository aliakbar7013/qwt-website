/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - ENGINEERING INSIGHTS & ADVISORIES CONTROLLER
 * Supports static technical whitepapers and dynamically injected approved/published
 * blogs from localStorage['qwt_blog_articles'].
 * Strict Guardrail: Unapproved/Pending blogs (status === 'PENDING_REVIEW' or 'DRAFT')
 * are strictly hidden from public readers until authorized in admin console.
 */

document.addEventListener('DOMContentLoaded', () => {
  initInsights();
});

function mapCategoryToKey(category) {
  const cat = (category || '').toLowerCase();
  if (cat.includes('sira') || cat.includes('elv') || cat.includes('cctv') || cat.includes('physical')) return 'sira';
  if (cat.includes('gpu') || cat.includes('ai') || cat.includes('hpc') || cat.includes('compute') || cat.includes('supercomputing')) return 'hpc';
  if (cat.includes('cyber') || cat.includes('nesa') || cat.includes('defense') || cat.includes('security')) return 'cyber';
  if (cat.includes('erp') || cat.includes('pdpl') || cat.includes('cloud') || cat.includes('sovereign') || cat.includes('vat')) return 'pdpl';
  return 'hpc';
}

function formatMarkdownToHtml(content, takeaways) {
  if (!content) return '';
  let html = '';
  const lines = content.split('\n');
  let inList = false;

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) { html += '</ul>'; inList = false; }
      return;
    }
    if (trimmed.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h4 class="text-base font-bold text-white mb-2 pt-2">${trimmed.slice(4)}</h4>`;
    } else if (trimmed.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h4 class="text-lg font-bold text-[#C9A24D] mb-3 pt-3">${trimmed.slice(3)}</h4>`;
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) { html += '<ul class="list-disc list-inside space-y-2 text-xs font-mono text-slate-300 mb-4">'; inList = true; }
      html += `<li>${trimmed.slice(2)}</li>`;
    } else if (trimmed.startsWith('> ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<div class="p-3 rounded-lg bg-[#0A0D12] border-l-2 border-[#C9A24D] text-xs font-mono text-slate-300 mb-3">${trimmed.slice(2)}</div>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p class="text-sm text-slate-300 leading-relaxed mb-4">${trimmed}</p>`;
    }
  });
  if (inList) html += '</ul>';

  if (Array.isArray(takeaways) && takeaways.length > 0) {
    html += `
      <div class="p-4 rounded-xl bg-[#0A0D12] border border-[#C9A24D]/30 text-xs font-mono text-slate-300 mt-4">
        <strong class="text-[#C9A24D] block mb-1">Architectural Takeaways:</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-300">
          ${takeaways.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  return html;
}

function initInsights() {
  const categoryFilters = document.querySelectorAll('[data-insight-category]');
  const searchInput = document.getElementById('insight-search');
  const countDisplay = document.getElementById('insight-count');
  const grid = document.getElementById('insights-article-grid') || document.querySelector('section.py-16 .grid');

  // Reader Modal elements
  const readerModal = document.getElementById('article-reader-modal');
  const readerTitle = document.getElementById('reader-modal-title');
  const readerCategory = document.getElementById('reader-modal-category');
  const readerDate = document.getElementById('reader-modal-date');
  const readerContent = document.getElementById('reader-modal-body');
  const readerClose = document.getElementById('reader-modal-close');

  const openReader = (card) => {
    if (!readerModal) return;

    const title = card.querySelector('.insight-title')?.textContent || 'Technical Advisory';
    const cat = card.querySelector('.insight-cat')?.textContent || 'Whitepaper';
    const date = card.querySelector('.insight-date')?.textContent || 'Q4 2026';
    const fullBody = card.querySelector('.full-content')?.innerHTML || card.querySelector('.insight-snippet')?.innerHTML || '';

    if (readerTitle) readerTitle.textContent = title;
    if (readerCategory) readerCategory.textContent = cat;
    if (readerDate) readerDate.textContent = date;
    if (readerContent) readerContent.innerHTML = fullBody;

    readerModal.classList.remove('hidden');
    setTimeout(() => {
      readerModal.classList.remove('opacity-0');
      readerModal.querySelector('.modal-card')?.classList.remove('scale-95');
    }, 10);
    document.body.classList.add('overflow-hidden');

    if (window.lucide) window.lucide.createIcons();
  };

  const closeReader = () => {
    if (!readerModal) return;
    readerModal.classList.add('opacity-0');
    readerModal.querySelector('.modal-card')?.classList.add('scale-95');
    setTimeout(() => {
      readerModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 250);
  };

  if (readerClose) readerClose.addEventListener('click', closeReader);
  if (readerModal) {
    readerModal.addEventListener('click', (e) => {
      if (e.target === readerModal || e.target.classList.contains('modal-backdrop')) {
        closeReader();
      }
    });
  }

  // Inject any newly approved/published blogs from localStorage
  if (grid) {
    try {
      const raw = localStorage.getItem('qwt_blog_articles');
      if (raw) {
        const articles = JSON.parse(raw);
        if (Array.isArray(articles)) {
          // Strictly PUBLISHED only (zero auto-publish for PENDING_REVIEW or DRAFT)
          const published = articles.filter(a => a && a.status === 'PUBLISHED');
          const existingTitles = new Set();
          grid.querySelectorAll('.insight-title').forEach(el => {
            existingTitles.add(el.textContent.trim().toLowerCase());
          });

          published.forEach(art => {
            const titleLower = (art.title || '').trim().toLowerCase();
            if (existingTitles.has(titleLower)) return;

            const categoryKey = mapCategoryToKey(art.category);
            const categoryBadge = (art.category || 'TECHNICAL ADVISORY').toUpperCase();
            const readTime = art.readTime || '5 MIN';
            const dateText = art.date || 'Q4 2026';
            const snippet = art.excerpt || (art.content ? art.content.slice(0, 160) + '...' : '');
            const fullHtml = formatMarkdownToHtml(art.content, art.takeaways);

            const card = document.createElement('article');
            card.setAttribute('data-insight-card', '');
            card.setAttribute('data-category', categoryKey);
            card.setAttribute('data-dynamic-blog', art.id || 'dynamic');
            card.className = 'enterprise-card rounded-2xl p-6 flex flex-col justify-between';
            card.innerHTML = `
              <div>
                <div class="flex items-center justify-between text-xs font-mono mb-3">
                  <span class="insight-cat text-[#C9A24D]">${categoryBadge}</span>
                  <span class="insight-date text-slate-500">${dateText} &bull; ${readTime.toUpperCase()}</span>
                </div>
                <h3 class="text-xl font-heading font-bold text-white mb-2 insight-title hover:text-[#C9A24D] transition-colors">
                  <a href="#" data-read-article>${art.title}</a>
                </h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4 insight-snippet">
                  ${snippet}
                </p>
                <div class="full-content hidden">
                  ${fullHtml}
                </div>
              </div>
              <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <button data-read-article class="text-[#C9A24D] hover:text-white font-bold flex items-center gap-1">
                  Read Advisory <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
                <button data-download-whitepaper="${art.slug || 'Whitepaper'}" class="text-slate-400 hover:text-white flex items-center gap-1">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i> PDF
                </button>
              </div>
            `;

            grid.prepend(card);
          });
        }
      }
    } catch (e) {
      console.warn('Insights published blogs injection error:', e);
    }
  }

  // Bind read buttons on all cards (both static and dynamically injected)
  document.querySelectorAll('[data-read-article]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('[data-insight-card]');
      if (card) openReader(card);
    });
  });

  // Bind PDF download triggers on all cards
  document.querySelectorAll('[data-download-whitepaper]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const doc = btn.getAttribute('data-download-whitepaper') || 'Technical-Paper';
      if (window.qwtToast) {
        window.qwtToast(`Whitepaper Dispatched: [${doc}.pdf]`, 'success');
      }
    });
  });

  // Re-query cards after injection for filter & search
  const cards = document.querySelectorAll('[data-insight-card]');
  let activeCategory = 'all';
  let searchQuery = '';

  const filterArticles = () => {
    let visible = 0;

    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = card.querySelector('.insight-title')?.textContent.toLowerCase() || '';
      const snippet = card.querySelector('.insight-snippet')?.textContent.toLowerCase() || '';

      const matchCategory = activeCategory === 'all' || category === activeCategory;
      const matchSearch = !searchQuery || title.includes(searchQuery) || snippet.includes(searchQuery);

      if (matchCategory && matchSearch) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (countDisplay) {
      countDisplay.textContent = visible;
    }
  };

  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => {
        b.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        b.classList.add('bg-[#0F141C]', 'text-slate-300');
      });
      btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
      btn.classList.remove('bg-[#0F141C]', 'text-slate-300');

      activeCategory = btn.getAttribute('data-insight-category');
      filterArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterArticles();
    });
  }

  // Initial filter run to set correct counter
  filterArticles();

  if (window.lucide) window.lucide.createIcons();
}
