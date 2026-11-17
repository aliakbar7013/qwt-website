/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - CONTACT FORM SUBMISSIONS CONTROLLER
 * Dedicated Admin CRM section for managing direct contact inquiries,
 * reCAPTCHA validation tracking, and client communications triage.
 */

const DEFAULT_MOCK_CONTACTS = [
  {
    id: 'QWT-CNT-882190',
    timestamp: '2026-11-10T07:15:00Z',
    fullName: 'Eng. Hamad Al-Falasi',
    workEmail: 'h.alfalasi@dewa-infra.gov.ae',
    phone: '+971 4 601 9999',
    company: 'Dubai Electricity & Water Authority (DEWA)',
    solution: 'IT Infrastructure & Data Centre',
    rackScale: '12 - 24 Racks (Data Center Hall)',
    deploymentModel: 'Strictly On-Premise (Air-Gapped Sovereign)',
    estimatedBudget: 'AED 5,000,000+ (Turnkey Enterprise)',
    fileName: 'DEWA_TierIV_MetroSAN_RFP.pdf',
    fileSize: '4.2 MB',
    notes: 'Urgent RFP tender for Tier-IV SAN expansion and dual-site synchronous ActiveCluster replication between Warsan and Jebel Ali data centres. Must include full SIRA inspection sign-off and CommScope OM4 fiber trunking.',
    siraCompliant: true,
    recaptchaVerified: true,
    status: 'NEW'
  },
  {
    id: 'QWT-CNT-749102',
    timestamp: '2026-11-09T15:40:00Z',
    fullName: 'Fatima Al-Rumaithi',
    workEmail: 'f.rumaithi@adgm-capital.ae',
    phone: '+971 2 333 8888',
    company: 'Abu Dhabi Global Market (ADGM) RegTech',
    solution: 'Cyber Security',
    rackScale: '4 - 8 Racks (Standard Enterprise Pod)',
    deploymentModel: 'Hybrid Cloud (Local UAE Data Residency)',
    estimatedBudget: 'AED 1,500,000 - 5,000,000',
    fileName: 'ADGM_Cyber_Tender_Scope.docx',
    fileSize: '1.8 MB',
    notes: 'Seeking CrowdStrike Falcon Complete EDR deployment across 850 endpoints and Palo Alto Networks 400G next-gen firewall clustering with UAE PDPL audit certification.',
    siraCompliant: true,
    recaptchaVerified: true,
    status: 'CONTACTED'
  },
  {
    id: 'QWT-CNT-621845',
    timestamp: '2026-11-08T10:20:00Z',
    fullName: 'Sultan Al-Mazrouei',
    workEmail: 'sultan@spcfza.gov.ae',
    phone: '+971 6 528 1111',
    company: 'Sharjah Ports & Customs Free Zone',
    solution: 'ERPNext & Frappe',
    rackScale: '1 - 2 Racks (Edge / Branch)',
    deploymentModel: 'Strictly On-Premise (Air-Gapped Sovereign)',
    estimatedBudget: 'AED 500,000 - 1,500,000',
    fileName: null,
    fileSize: null,
    notes: 'Migration from legacy proprietary ERP to ERPNext v15 with zero per-user licensing. Require MOHRE WPS payroll SIF file generator, UAE FTA 5% VAT filing, and Arabic RTL interface for 420 employees.',
    siraCompliant: false,
    recaptchaVerified: true,
    status: 'IN_REVIEW'
  },
  {
    id: 'QWT-CNT-519203',
    timestamp: '2026-11-07T12:05:00Z',
    fullName: 'Alexander Vance',
    workEmail: 'a.vance@emiratesnbd-wealth.com',
    phone: '+971 4 201 1234',
    company: 'Emirates NBD Wealth Management',
    solution: 'Digital Business Cards',
    rackScale: 'Fleet Suite (1,200 Executive Cards)',
    deploymentModel: 'Hybrid Cloud (Local UAE Data Residency)',
    estimatedBudget: 'AED 250,000 - 500,000',
    fileName: 'ENBD_Branding_Guidelines.pdf',
    fileSize: '3.1 MB',
    notes: 'Corporate deployment of custom laser-engraved matte black metal NFC smart business cards for private bankers, with direct Apple Wallet and Google Wallet pass distribution and Salesforce CRM contact synchronization.',
    siraCompliant: false,
    recaptchaVerified: true,
    status: 'CONTACTED'
  }
];

class ContactSubmissionsManager {
  constructor() {
    this.submissions = [];
    this.activeModalSubmission = null;
    this.init();
  }

  init() {
    this.loadSubmissions();
    this.bindDom();
    this.bindEvents();
    this.render();

    // Listen to localStorage events from other tabs (e.g. contact.html)
    window.addEventListener('storage', (e) => {
      if (e.key === 'qwt_contact_submissions') {
        this.loadSubmissions();
        this.render();
      }
    });
  }

  loadSubmissions() {
    try {
      const stored = localStorage.getItem('qwt_contact_submissions');
      if (stored) {
        this.submissions = JSON.parse(stored);
      } else {
        this.submissions = [...DEFAULT_MOCK_CONTACTS];
        this.saveSubmissions();
      }
    } catch (e) {
      console.warn('Failed to parse contact submissions:', e);
      this.submissions = [...DEFAULT_MOCK_CONTACTS];
    }
  }

  saveSubmissions() {
    try {
      localStorage.setItem('qwt_contact_submissions', JSON.stringify(this.submissions));
    } catch (e) {
      console.error('Failed to save contact submissions:', e);
    }
  }

  bindDom() {
    this.tableBody = document.getElementById('contact-sub-table-body');
    this.countAll = document.getElementById('contact-count-all');
    this.countNew = document.getElementById('contact-count-new');
    this.countVerified = document.getElementById('contact-count-verified');
    this.countSira = document.getElementById('contact-count-sira');
    this.badgeCount = document.getElementById('contact-badge-count');

    this.searchInput = document.getElementById('contact-sub-search');
    this.filterDomain = document.getElementById('contact-filter-domain');
    this.filterStatus = document.getElementById('contact-filter-status');
    this.resetBtn = document.getElementById('contact-sub-reset-btn');
    this.exportBtn = document.getElementById('contact-sub-export-btn');

    // Modal elements
    this.modal = document.getElementById('contact-detail-modal');
    this.modalClose = document.getElementById('modal-cnt-close');
    this.modalSave = document.getElementById('modal-cnt-save-btn');
    this.modalDelete = document.getElementById('modal-cnt-delete-btn');
    this.modalStatusSelect = document.getElementById('modal-cnt-status-select');
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.render());
    }
    if (this.filterDomain) {
      this.filterDomain.addEventListener('change', () => this.render());
    }
    if (this.filterStatus) {
      this.filterStatus.addEventListener('change', () => this.render());
    }
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        if (confirm('Re-seed contact submissions with verified UAE government & enterprise sample inquiries?')) {
          this.submissions = [...DEFAULT_MOCK_CONTACTS];
          this.saveSubmissions();
          this.render();
          if (window.qwtToast) window.qwtToast('Sample contact inquiries restored', 'info');
        }
      });
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener('click', () => this.exportCsv());
    }

    // Modal close & save
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }
    if (this.modalSave) {
      this.modalSave.addEventListener('click', () => {
        if (this.activeModalSubmission && this.modalStatusSelect) {
          this.updateStatus(this.activeModalSubmission.id, this.modalStatusSelect.value);
          this.closeModal();
        }
      });
    }
    if (this.modalDelete) {
      this.modalDelete.addEventListener('click', () => {
        if (this.activeModalSubmission) {
          if (confirm(`Permanently remove inquiry ${this.activeModalSubmission.id}?`)) {
            this.deleteSubmission(this.activeModalSubmission.id);
            this.closeModal();
          }
        }
      });
    }
  }

  getFiltered() {
    const q = this.searchInput ? this.searchInput.value.trim().toLowerCase() : '';
    const domain = this.filterDomain ? this.filterDomain.value : 'all';
    const status = this.filterStatus ? this.filterStatus.value : 'all';

    return this.submissions.filter(sub => {
      const matchQ = !q ||
        (sub.id && sub.id.toLowerCase().includes(q)) ||
        (sub.fullName && sub.fullName.toLowerCase().includes(q)) ||
        (sub.company && sub.company.toLowerCase().includes(q)) ||
        (sub.workEmail && sub.workEmail.toLowerCase().includes(q)) ||
        (sub.notes && sub.notes.toLowerCase().includes(q));

      const matchDomain = domain === 'all' || sub.solution === domain;
      const matchStatus = status === 'all' || sub.status === status;

      return matchQ && matchDomain && matchStatus;
    });
  }

  render() {
    this.updateKpis();

    if (!this.tableBody) return;

    const filtered = this.getFiltered();

    if (filtered.length === 0) {
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="py-12 text-center text-slate-500 font-mono text-xs">
            <i data-lucide="inbox" class="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50"></i>
            No contact submissions found matching current search &amp; filter criteria.
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    this.tableBody.innerHTML = filtered.map(sub => {
      const dateFormatted = new Date(sub.timestamp).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
      });

      // Domain tag color
      let domainBadge = '';
      if (sub.solution.includes('IT Infra')) {
        domainBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">IT Infrastructure</span>';
      } else if (sub.solution.includes('Cyber')) {
        domainBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">Cyber Security</span>';
      } else if (sub.solution.includes('Transformation')) {
        domainBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/30">Digital Trans.</span>';
      } else if (sub.solution.includes('ERPNext')) {
        domainBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">ERPNext &amp; Frappe</span>';
      } else if (sub.solution.includes('Cards')) {
        domainBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">Digital Cards</span>';
      } else {
        domainBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">${sub.solution}</span>`;
      }

      // Status badge
      let statusBadge = '';
      if (sub.status === 'NEW') {
        statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1 w-max"><span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> NEW</span>';
      } else if (sub.status === 'CONTACTED') {
        statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 w-max"><i data-lucide="check" class="w-3 h-3"></i> CONTACTED</span>';
      } else if (sub.status === 'IN_REVIEW') {
        statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 w-max"><i data-lucide="clock" class="w-3 h-3"></i> IN REVIEW</span>';
      } else {
        statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700 w-max">CLOSED</span>';
      }

      const siraBadge = sub.siraCompliant
        ? '<span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono font-bold" title="SIRA Audit Required">SIRA</span>'
        : '';

      const fileIcon = sub.fileName
        ? `<span class="text-[10px] font-mono text-[#C9A24D] flex items-center gap-1" title="${sub.fileName} (${sub.fileSize})"><i data-lucide="paperclip" class="w-3 h-3"></i> File Attached</span>`
        : '';

      return `
        <tr class="hover:bg-slate-800/30 transition-colors cursor-pointer group" onclick="window.qwtContactSubmissions.openModal('${sub.id}')">
          <td class="py-3 px-4 font-mono font-bold text-[#C9A24D] whitespace-nowrap">
            <div>${sub.id}</div>
            <div class="text-[10px] font-normal text-slate-500">${dateFormatted}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-white group-hover:text-[#C9A24D] transition-colors">${sub.fullName}</div>
            <div class="text-[11px] text-slate-400 font-mono">${sub.workEmail}</div>
            <div class="text-[10px] text-slate-500 font-mono">${sub.phone}</div>
          </td>
          <td class="py-3 px-4 font-medium text-slate-300">
            <div>${sub.company}</div>
            ${fileIcon}
          </td>
          <td class="py-3 px-4 whitespace-nowrap">
            ${domainBadge}
          </td>
          <td class="py-3 px-4 text-xs font-mono">
            <div class="text-white font-semibold">${sub.estimatedBudget}</div>
            <div class="text-[10px] text-slate-500">${sub.rackScale}</div>
          </td>
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="flex items-center gap-1.5">
              <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono flex items-center gap-1">
                <i data-lucide="shield-check" class="w-3 h-3"></i> Human Verified
              </span>
              ${siraBadge}
            </div>
          </td>
          <td class="py-3 px-4 whitespace-nowrap">
            ${statusBadge}
          </td>
          <td class="py-3 px-4 text-right whitespace-nowrap" onclick="event.stopPropagation()">
            <div class="flex items-center justify-end gap-2">
              <button onclick="window.qwtContactSubmissions.openModal('${sub.id}')" class="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors" title="View Full Scope">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
              <button onclick="window.qwtContactSubmissions.toggleStatus('${sub.id}')" class="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-[#C9A24D] hover:bg-slate-700 transition-colors" title="Cycle Status">
                <i data-lucide="check-circle" class="w-4 h-4"></i>
              </button>
              <button onclick="window.qwtContactSubmissions.deleteSubmission('${sub.id}')" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors" title="Delete">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  updateKpis() {
    const total = this.submissions.length;
    const newCount = this.submissions.filter(s => s.status === 'NEW').length;
    const siraCount = this.submissions.filter(s => s.siraCompliant).length;

    if (this.countAll) this.countAll.textContent = total;
    if (this.countNew) this.countNew.textContent = newCount;
    if (this.countSira) this.countSira.textContent = siraCount;
    if (this.countVerified) this.countVerified.textContent = '100%';

    if (this.badgeCount) {
      this.badgeCount.textContent = `${newCount} NEW`;
      if (newCount > 0) {
        this.badgeCount.className = 'px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[9px] font-mono animate-pulse';
      } else {
        this.badgeCount.className = 'px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/30 text-[9px] font-mono status-badge-inactive';
      }
    }
  }

  openModal(id) {
    const sub = this.submissions.find(s => s.id === id);
    if (!sub || !this.modal) return;

    this.activeModalSubmission = sub;

    // Populate modal fields
    const modalId = document.getElementById('modal-cnt-id');
    const modalDate = document.getElementById('modal-cnt-date');
    const modalStatusBadge = document.getElementById('modal-cnt-status-badge');
    const modalName = document.getElementById('modal-cnt-name');
    const modalCompany = document.getElementById('modal-cnt-company');
    const modalEmail = document.getElementById('modal-cnt-email');
    const modalPhone = document.getElementById('modal-cnt-phone');
    const modalDomain = document.getElementById('modal-cnt-domain');
    const modalScale = document.getElementById('modal-cnt-scale');
    const modalDeployment = document.getElementById('modal-cnt-deployment');
    const modalBudget = document.getElementById('modal-cnt-budget');
    const modalSira = document.getElementById('modal-cnt-sira');
    const modalFile = document.getElementById('modal-cnt-file');
    const modalNotes = document.getElementById('modal-cnt-notes');

    if (modalId) modalId.textContent = sub.id;
    if (modalDate) modalDate.textContent = 'Received: ' + new Date(sub.timestamp).toLocaleString();
    if (modalName) modalName.textContent = sub.fullName;
    if (modalCompany) modalCompany.textContent = sub.company;

    if (modalEmail) {
      modalEmail.href = `mailto:${sub.workEmail}`;
      const span = modalEmail.querySelector('span');
      if (span) span.textContent = sub.workEmail;
    }
    if (modalPhone) {
      modalPhone.href = `tel:${sub.phone.replace(/[^0-9+]/g, '')}`;
      const span = modalPhone.querySelector('span');
      if (span) span.textContent = sub.phone;
    }

    if (modalDomain) modalDomain.textContent = sub.solution;
    if (modalScale) modalScale.textContent = sub.rackScale || 'Standard';
    if (modalDeployment) modalDeployment.textContent = sub.deploymentModel || 'On-Premise';
    if (modalBudget) modalBudget.textContent = sub.estimatedBudget;
    if (modalSira) {
      modalSira.textContent = sub.siraCompliant ? 'Required (Official SIRA/MCC Stamped)' : 'Not Required';
      modalSira.className = sub.siraCompliant ? 'text-emerald-400 font-bold' : 'text-slate-400';
    }
    if (modalFile) {
      modalFile.textContent = sub.fileName ? `${sub.fileName} (${sub.fileSize || 'Attached'})` : 'No file attached';
      modalFile.className = sub.fileName ? 'text-[#C9A24D] font-bold' : 'text-slate-500';
    }
    if (modalNotes) modalNotes.textContent = sub.notes || 'No project notes provided.';

    if (this.modalStatusSelect) {
      this.modalStatusSelect.value = sub.status;
    }

    if (modalStatusBadge) {
      modalStatusBadge.textContent = sub.status;
      if (sub.status === 'NEW') {
        modalStatusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30';
      } else if (sub.status === 'CONTACTED') {
        modalStatusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
      } else if (sub.status === 'IN_REVIEW') {
        modalStatusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30';
      } else {
        modalStatusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700';
      }
    }

    // Open modal
    this.modal.classList.remove('hidden');
    setTimeout(() => this.modal.classList.remove('opacity-0'), 10);
    document.body.classList.add('overflow-hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.add('opacity-0');
    setTimeout(() => {
      this.modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 200);
    this.activeModalSubmission = null;
  }

  updateStatus(id, newStatus) {
    const idx = this.submissions.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.submissions[idx].status = newStatus;
      this.saveSubmissions();
      this.render();
      if (window.qwtToast) window.qwtToast(`Inquiry ${id} status: ${newStatus}`, 'success');
    }
  }

  toggleStatus(id) {
    const idx = this.submissions.findIndex(s => s.id === id);
    if (idx !== -1) {
      const order = ['NEW', 'CONTACTED', 'IN_REVIEW', 'CLOSED'];
      const current = this.submissions[idx].status;
      const nextIdx = (order.indexOf(current) + 1) % order.length;
      this.submissions[idx].status = order[nextIdx];
      this.saveSubmissions();
      this.render();
      if (window.qwtToast) window.qwtToast(`Status updated to ${order[nextIdx]}`, 'info');
    }
  }

  deleteSubmission(id) {
    this.submissions = this.submissions.filter(s => s.id !== id);
    this.saveSubmissions();
    this.render();
    if (window.qwtToast) window.qwtToast(`Inquiry ${id} deleted`, 'info');
  }

  exportCsv() {
    if (!this.submissions.length) {
      alert('No contact submissions to export.');
      return;
    }

    const headers = ['Inquiry ID', 'Date', 'Full Name', 'Email', 'Phone', 'Company', 'Solution Domain', 'Scale', 'Deployment', 'Budget', 'SIRA Required', 'reCAPTCHA Verified', 'Notes', 'Status'];
    const rows = this.submissions.map(s => [
      s.id,
      s.timestamp,
      `"${(s.fullName || '').replace(/"/g, '""')}"`,
      s.workEmail,
      s.phone,
      `"${(s.company || '').replace(/"/g, '""')}"`,
      `"${(s.solution || '').replace(/"/g, '""')}"`,
      `"${(s.rackScale || '').replace(/"/g, '""')}"`,
      `"${(s.deploymentModel || '').replace(/"/g, '""')}"`,
      `"${(s.estimatedBudget || '').replace(/"/g, '""')}"`,
      s.siraCompliant ? 'YES' : 'NO',
      s.recaptchaVerified ? 'YES' : 'NO',
      `"${(s.notes || '').replace(/"/g, '""')}"`,
      s.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `qwt_contact_submissions_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (window.qwtToast) window.qwtToast('Contact submissions CSV exported', 'success');
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.qwtContactSubmissions = new ContactSubmissionsManager();
});
