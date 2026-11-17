/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - COMMERCIAL DOCUMENT MANAGEMENT ENGINE
 * Complete Enterprise Lifecycle for:
 * 1. Commercial Quotations & BOQ Proposals (QUO)
 * 2. Official Commercial UAE Tax Invoices (INV - 5% FTA VAT Compliant)
 * 3. Purchase Orders / Procurement Dispatches (PO)
 * 4. Delivery Notes & Proof of Delivery (DN / POD)
 */

const DEFAULT_COMMERCIAL_DOCS = [
  // 1. Official UAE Tax Invoice
  {
    id: 'QWT-INV-2026-0412',
    type: 'INVOICE',
    title: 'NVIDIA H100 SXM5 32-GPU Cluster & 800G InfiniBand Fabric',
    clientName: 'DIFC Sovereign Asset Mgmt',
    attention: 'Tariq Al-Maktoum (Head of Infrastructure)',
    email: 't.maktoum@difc-capital.ae',
    phone: '+971 4 362 7700',
    address: 'Level 18, Gate Tower 4, DIFC, Dubai, UAE',
    emirate: 'Dubai',
    clientTrn: '100294820100003',
    lpoNumber: 'DIFC-PO-8821',
    docDate: '2026-11-09',
    dueDate: '2026-12-09',
    currency: 'AED',
    domain: 'AI Compute & GPU',
    status: 'ISSUED', // DRAFT, ISSUED, PAID, PARTIAL, OVERDUE, CANCELLED
    paymentTerms: 'Net 30 Days via Direct Wire Transfer to QWT Operations Account',
    bankDetails: {
      bankName: 'First Abu Dhabi Bank (FAB)',
      accountName: 'Quad Wise Technologies FZ-LLC',
      accountNumber: '1029482019482',
      iban: 'AE21033000001029482019482',
      swift: 'FABAAEAD'
    },
    items: [
      {
        description: 'Dell PowerEdge XE9680 Rack Server (8x NVIDIA H100 80GB SXM5, Dual Intel Xeon Platinum 8480+)',
        category: 'Hardware',
        serial: 'SN-XE9680-DXB-9021, SN-XE9680-DXB-9022',
        qty: 2,
        unitPrice: 750000,
        total: 1500000
      },
      {
        description: 'NVIDIA Quantum-2 QM9700 64-Port 800Gb/s InfiniBand Spine Switch + Shielded QSFP-NDR Cabling',
        category: 'Hardware',
        serial: 'SN-QM9700-DXB-4108',
        qty: 1,
        unitPrice: 180000,
        total: 180000
      },
      {
        description: 'Sovereign AI Enclave Air-Gap Configuration, RoCE v2 Lossless Latency Tuning & On-Site Commissioning',
        category: 'Professional Services',
        serial: 'SVC-ENG-AI-L4',
        qty: 1,
        unitPrice: 170000,
        total: 170000
      }
    ],
    discountPercent: 0,
    vatPercent: 5,
    notes: 'Official Tax Invoice issued under UAE Federal Decree-Law No. (8) of 2017 on Value Added Tax. Goods delivered and installed in accordance with SIRA and UAE Sovereign Data residency standards.'
  },

  // 2. Commercial Quotation / BOQ Proposal
  {
    id: 'QWT-QUO-2026-0819',
    type: 'QUOTE',
    title: 'Tier-IV SAN Metro-Mirroring & Synchronous ActiveCluster Expansion',
    clientName: 'Dubai Electricity & Water Authority (DEWA)',
    attention: 'Eng. Hamad Al-Falasi (Director of Datacentres)',
    email: 'h.alfalasi@dewa-infra.gov.ae',
    phone: '+971 4 601 9999',
    address: 'DEWA Warsan Data Center Complex, Dubai, UAE',
    emirate: 'Dubai',
    clientTrn: '100349281000003',
    lpoNumber: 'RFP-DEWA-2026-990',
    docDate: '2026-11-10',
    dueDate: '2026-12-10', // Validity: 30 days
    currency: 'AED',
    domain: 'IT Infrastructure & Data Centre',
    status: 'CLIENT_ACCEPTED', // DRAFT, ISSUED, CLIENT_ACCEPTED, REJECTED, EXPIRED
    paymentTerms: '50% Advance with L.P.O., 40% upon Delivery & Staging, 10% upon Final SIRA Sign-off',
    items: [
      {
        description: 'Pure Storage FlashBlade //S500 (480TB Raw NVMe DirectFlash Modules, Dual 100GbE Controllers)',
        category: 'Hardware',
        serial: 'PENDING_DISPATCH',
        qty: 2,
        unitPrice: 720000,
        total: 1440000
      },
      {
        description: 'CommScope SYSTIMAX 360 Ultra-High Density OM4 Fiber Trunking (12 Racks, MPO-24 Spine)',
        category: 'Hardware',
        serial: 'LOT-CS-OM4-12R',
        qty: 1,
        unitPrice: 180000,
        total: 180000
      },
      {
        description: 'Active-Active Synchronous Metro-Replication Implementation (Warsan <-> Jebel Ali 0ms RPO SLA)',
        category: 'Professional Services',
        serial: 'SVC-METRO-CLUSTER',
        qty: 1,
        unitPrice: 140000,
        total: 140000
      },
      {
        description: '24/7 Mission-Critical Sovereign SLA Support (4-Hour On-Site Hardware Replacement, 3 Years)',
        category: 'Maintenance/SLA',
        serial: 'SLA-QWT-247-Y3',
        qty: 1,
        unitPrice: 90000,
        total: 90000
      }
    ],
    discountPercent: 0,
    vatPercent: 5,
    notes: 'Quotation valid for 30 calendar days from issue date. Pricing includes factory OEM authorization, UAE customs duties, and official SIRA/MCC compliance inspections.'
  },

  // 3. Purchase Order (Procurement Dispatch to OEM Vendor)
  {
    id: 'QWT-PO-2026-0205',
    type: 'PO',
    title: 'OEM Hardware Procurement: Dell PowerVault ME5024 SAN Storage Arrays',
    clientName: 'Dell Technologies Middle East FZ-LLC', // Vendor
    attention: 'Sovereign OEM Commercial Desk',
    email: 'oem.uae@dell.com',
    phone: '+971 4 455 0000',
    address: 'Building 12, Dubai Internet City, Dubai, UAE',
    emirate: 'Dubai',
    clientTrn: '100039281000003',
    lpoNumber: 'QWT-OEM-REQ-4481',
    docDate: '2026-11-08',
    dueDate: '2026-11-25', // Delivery Expected
    currency: 'AED',
    domain: 'IT Infrastructure & Data Centre',
    status: 'CONFIRMED', // DRAFT, SENT_TO_VENDOR, CONFIRMED, FULFILLED
    paymentTerms: '30 Days from Commercial Invoice & Verified Warehouse Receipt',
    items: [
      {
        description: 'Dell PowerVault ME5024 2U Storage Array (24x 3.84TB SAS Read Intensive SSDs, Dual 25Gb iSCSI)',
        category: 'Hardware',
        serial: 'FACTORY_PROVISION',
        qty: 4,
        unitPrice: 135000,
        total: 540000
      },
      {
        description: 'Dell ProSupport Plus with 4-Hour Onsite Mission Critical Service (3-Year Coverage)',
        category: 'Maintenance/SLA',
        serial: 'SVC-DELL-PSP-3Y',
        qty: 4,
        unitPrice: 20000,
        total: 80000
      }
    ],
    discountPercent: 0,
    vatPercent: 5,
    notes: 'Delivery strictly to QWT Secure Staging Facility (Warehouse 4B, Dubai Silicon Oasis Hub). All serial numbers must be pre-notified for SIRA compliance registration.'
  },

  // 4. Delivery Note & Proof of Delivery (POD)
  {
    id: 'QWT-DN-2026-0188',
    type: 'DELIVERY_NOTE',
    title: 'SIRA CCTV 31-Day Video Storage & Thermal Camera Deployment',
    clientName: 'ADNOC Offshore Logistics & ELV',
    attention: 'David Sterling (Offshore Terminal Manager)',
    email: 'd.sterling@adnoc-upstream.ae',
    phone: '+971 2 707 0000',
    address: 'ADNOC Marine Terminal Control Room, Das Island / Abu Dhabi Logistics Base, UAE',
    emirate: 'Abu Dhabi',
    clientTrn: '100492810000003',
    lpoNumber: 'ADNOC-LPO-99120',
    docDate: '2026-11-10',
    dueDate: '2026-11-10',
    currency: 'AED',
    domain: 'ELV & SIRA Physical Security',
    status: 'DELIVERED_SIGNED', // STAGED, IN_TRANSIT, DELIVERED_SIGNED
    paymentTerms: 'Payment Against Verified Proof of Delivery (POD)',
    deliveryDetails: {
      siteLocation: 'Control Building A, Das Island Base Operations, Abu Dhabi',
      vehiclePlate: 'Dubai Heavy Transport 48291-C',
      driverName: 'Mohammed Rashid (+971 50 882 1920)',
      packagesCount: '6 Pallets / 18 Server Cartons',
      siraInspectionPassed: true,
      receivedByName: 'David Sterling',
      receivedByTitle: 'Terminal Operations Lead',
      receivedDate: '2026-11-10 14:30 GST'
    },
    items: [
      {
        description: 'NetApp E-Series E2824 Storage Array (31-Day SIRA Certified 4K Stream Ingest, Dual 25GbE)',
        category: 'Hardware',
        serial: 'SN-NETAPP-E28-8812, SN-NETAPP-E28-8813',
        qty: 2,
        unitPrice: 195000,
        total: 390000
      },
      {
        description: 'Explosion-Proof ATEX-Certified Thermal PTZ Cameras with SHA-256 Tamper-Proof Watermarking',
        category: 'Hardware',
        serial: 'SN-CAM-EXP-01 through SN-CAM-EXP-12',
        qty: 12,
        unitPrice: 14000,
        total: 168000
      },
      {
        description: 'Schneider Electric Smart-UPS RT 10kVA On-Line Power Backup (20-Minute Full Load Runtime)',
        category: 'Hardware',
        serial: 'SN-APC-10K-9901',
        qty: 1,
        unitPrice: 62000,
        total: 62000
      }
    ],
    discountPercent: 0,
    vatPercent: 5,
    notes: 'Received above mentioned goods in perfect physical and functional condition. Hardware serial numbers verified against Dubai SIRA physical security guidelines.'
  },

  // 5. Official UAE Tax Invoice (Paid)
  {
    id: 'QWT-INV-2026-0415',
    type: 'INVOICE',
    title: 'ERPNext v15 Enterprise GCC Edition (UAE FTA 5% VAT & MOHRE WPS Payroll)',
    clientName: 'Sharjah Ports & Customs Free Zone',
    attention: 'Sultan Al-Mazrouei (Head of Operations)',
    email: 'sultan@spcfza.gov.ae',
    phone: '+971 6 528 1111',
    address: 'Customs Administrative Center, Port Khalid, Sharjah, UAE',
    emirate: 'Sharjah',
    clientTrn: '100382910300003',
    lpoNumber: 'SPCFZA-2026-104',
    docDate: '2026-11-05',
    dueDate: '2026-11-20',
    currency: 'AED',
    domain: 'ERPNext & Frappe',
    status: 'PAID',
    paymentTerms: '100% Paid via Central Bank Fund Transfer (UAE CBUAE)',
    bankDetails: {
      bankName: 'First Abu Dhabi Bank (FAB)',
      accountName: 'Quad Wise Technologies FZ-LLC',
      accountNumber: '1029482019482',
      iban: 'AE21033000001029482019482',
      swift: 'FABAAEAD'
    },
    items: [
      {
        description: 'ERPNext v15 Enterprise Sovereign Deployment (Custom GCC Localization, Unlimited User Seat License)',
        category: 'Software/License',
        serial: 'LIC-ERPNEXT-GOV-SPCFZA',
        qty: 1,
        unitPrice: 320000,
        total: 320000
      },
      {
        description: 'MOHRE SIF Wages Protection System (WPS) Integration & UAE FTA 5% XML Tax Audit File (FAF) Engine',
        category: 'Professional Services',
        serial: 'ENG-WPS-FTA-MODULE',
        qty: 1,
        unitPrice: 120000,
        total: 120000
      },
      {
        description: 'Dual-Node High Availability Air-Gapped PostgreSQL Cluster Setup with Disaster Recovery Standby',
        category: 'Professional Services',
        serial: 'ENG-POSTGRES-HA-PAIR',
        qty: 1,
        unitPrice: 80000,
        total: 80000
      }
    ],
    discountPercent: 0,
    vatPercent: 5,
    notes: 'Payment confirmed received in full. System signed off and active under Sovereign GCC regulatory SLA.'
  }
];

class QwtCommercialDocsHub {
  constructor() {
    this.STORAGE_KEY = 'qwt_commercial_docs';
    this.docs = this.loadDocs();
    this.currentDoc = null;
    this.activeFilter = 'ALL'; // ALL, QUOTE, INVOICE, PO, DELIVERY_NOTE
    this.activeStatusFilter = 'ALL';
    this.searchQuery = '';
    this.activeSubView = 'list'; // 'list' | 'editor'
    this.activeModalDocId = null;
    this.init();
  }

  loadDocs() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading commercial docs:', e);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(DEFAULT_COMMERCIAL_DOCS));
    return [...DEFAULT_COMMERCIAL_DOCS];
  }

  saveDocs() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.docs));
      this.updateMetrics();
      this.renderTable();
    } catch (e) {
      console.error('Error saving commercial docs:', e);
    }
  }

  init() {
    this.bindEvents();
    this.updateMetrics();
    this.renderTable();
  }

  bindEvents() {
    // Type Filters
    document.querySelectorAll('[data-doc-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-doc-filter');
        this.setFilter(type);
      });
    });

    // Status Filter
    const statusSelect = document.getElementById('docs-status-filter');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        this.activeStatusFilter = e.target.value;
        this.renderTable();
      });
    }

    // Search Input
    const searchInput = document.getElementById('docs-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderTable();
      });
    }

    // Modal close & print bindings
    const printClose = document.getElementById('doc-print-close');
    if (printClose) printClose.addEventListener('click', () => this.closePrintModal());

    const printTrigger = document.getElementById('doc-print-btn');
    if (printTrigger) printTrigger.addEventListener('click', () => window.print());

    const printModal = document.getElementById('doc-print-modal');
    if (printModal) {
      printModal.addEventListener('click', (e) => {
        if (e.target === printModal || e.target.classList.contains('modal-backdrop')) {
          this.closePrintModal();
        }
      });
    }
  }

  setFilter(type) {
    this.activeFilter = type;
    document.querySelectorAll('[data-doc-filter]').forEach(btn => {
      const match = btn.getAttribute('data-doc-filter') === type;
      if (match) {
        btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.remove('bg-[#0F141C]', 'text-slate-300');
      } else {
        btn.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.add('bg-[#0F141C]', 'text-slate-300');
      }
    });
    this.renderTable();
  }

  updateMetrics() {
    let totalVolume = 0;
    let quotesVal = 0;
    let quotesCount = 0;
    let unpaidInvoicesVal = 0;
    let unpaidInvoicesCount = 0;
    let deliveryCount = 0;

    this.docs.forEach(doc => {
      const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
      const discount = subtotal * ((doc.discountPercent || 0) / 100);
      const afterDiscount = subtotal - discount;
      const vat = afterDiscount * ((doc.vatPercent || 0) / 100);
      const grandTotal = afterDiscount + vat;

      totalVolume += grandTotal;

      if (doc.type === 'QUOTE') {
        quotesVal += grandTotal;
        quotesCount++;
      } else if (doc.type === 'INVOICE') {
        if (doc.status !== 'PAID') {
          unpaidInvoicesVal += grandTotal;
          unpaidInvoicesCount++;
        }
      } else if (doc.type === 'DELIVERY_NOTE' || doc.type === 'PO') {
        deliveryCount++;
      }
    });

    const elTotal = document.getElementById('docs-stat-volume');
    const elQuotes = document.getElementById('docs-stat-quotes');
    const elInvoices = document.getElementById('docs-stat-invoices');
    const elDeliveries = document.getElementById('docs-stat-deliveries');
    const badgeCount = document.getElementById('docs-badge-count');

    if (elTotal) elTotal.textContent = `AED ${(totalVolume / 1000000).toFixed(2)}M`;
    if (elQuotes) elQuotes.textContent = `AED ${(quotesVal / 1000).toFixed(0)}k (${quotesCount})`;
    if (elInvoices) elInvoices.textContent = `AED ${(unpaidInvoicesVal / 1000).toFixed(0)}k (${unpaidInvoicesCount})`;
    if (elDeliveries) elDeliveries.textContent = `${deliveryCount} Active`;
    if (badgeCount) badgeCount.textContent = `${this.docs.length} DOCS`;
  }

  renderTable() {
    const tbody = document.getElementById('docs-table-body');
    const countDisplay = document.getElementById('docs-filtered-count');
    if (!tbody) return;

    let filtered = this.docs.filter(doc => {
      const matchType = (this.activeFilter === 'ALL' || doc.type === this.activeFilter);
      const matchStatus = (this.activeStatusFilter === 'ALL' || doc.status === this.activeStatusFilter);
      const q = this.searchQuery;
      const matchSearch = !q || (
        (doc.id && doc.id.toLowerCase().includes(q)) ||
        (doc.title && doc.title.toLowerCase().includes(q)) ||
        (doc.clientName && doc.clientName.toLowerCase().includes(q)) ||
        (doc.domain && doc.domain.toLowerCase().includes(q)) ||
        doc.items.some(i => i.description && i.description.toLowerCase().includes(q))
      );
      return matchType && matchStatus && matchSearch;
    });

    if (countDisplay) countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-slate-500 font-mono text-xs">
            <i data-lucide="folder-search" class="w-8 h-8 mx-auto mb-2 text-slate-600"></i>
            No commercial documents match your criteria.
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    tbody.innerHTML = filtered.map(doc => {
      const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
      const discount = subtotal * ((doc.discountPercent || 0) / 100);
      const afterDiscount = subtotal - discount;
      const vat = afterDiscount * ((doc.vatPercent || 0) / 100);
      const grandTotal = afterDiscount + vat;

      const typeBadge = this.getTypeBadge(doc.type);
      const statusBadge = this.getStatusBadge(doc.status);

      return `
        <tr class="border-b border-slate-800/80 hover:bg-slate-800/30 transition-colors">
          <td class="py-3 px-4">
            <div class="font-mono font-bold text-xs text-white">${doc.id}</div>
            <div class="mt-1">${typeBadge}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-heading font-bold text-xs text-white truncate max-w-[220px]">${doc.clientName}</div>
            <div class="text-[11px] text-slate-400 font-mono">${doc.attention || 'Commercial Lead'} &bull; ${doc.emirate || 'UAE'}</div>
            <div class="text-[10px] text-[#C9A24D] truncate max-w-[200px] mt-0.5">${doc.title}</div>
          </td>
          <td class="py-3 px-4 font-mono text-xs">
            <div class="text-slate-300">Issued: ${doc.docDate || '2026-11-10'}</div>
            <div class="text-[10px] text-slate-500">Due/Valid: ${doc.dueDate || '30 Days'}</div>
          </td>
          <td class="py-3 px-4 font-mono text-xs text-right">
            <div class="font-bold text-white">AED ${grandTotal.toLocaleString()}</div>
            <div class="text-[10px] text-slate-500">${doc.items.length} Line Items &bull; 5% VAT</div>
          </td>
          <td class="py-3 px-4">
            ${statusBadge}
          </td>
          <td class="py-3 px-4 text-right">
            <div class="flex items-center justify-end gap-1.5 flex-wrap">
              <button onclick="window.qwtDocs.previewPrint('${doc.id}')" class="px-2.5 py-1 rounded-lg bg-[#0F141C] border border-slate-700/80 hover:border-[#C9A24D] text-[#C9A24D] hover:text-white font-mono text-xs flex items-center gap-1 transition-all" title="View & Print Official Document">
                <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                <span class="hidden xl:inline">Print / PDF</span>
              </button>
              <button onclick="window.qwtDocs.downloadDoc('${doc.id}', 'html')" class="px-2.5 py-1 rounded-lg bg-[#0F141C] border border-slate-700/80 hover:border-emerald-400 text-emerald-400 hover:text-white font-mono text-xs flex items-center gap-1 transition-all" title="Download Standalone Client-Ready A4 Document">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
                <span class="hidden xl:inline">Download</span>
              </button>
              <button onclick="window.qwtDocs.editDoc('${doc.id}')" class="px-2 py-1 rounded-lg bg-[#0F141C] border border-slate-700/80 hover:border-blue-400 text-blue-400 font-mono text-xs transition-all" title="Edit Document">
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="window.qwtDocs.openConvertModal('${doc.id}')" class="px-2 py-1 rounded-lg bg-[#0F141C] border border-slate-700/80 hover:border-emerald-400 text-emerald-400 font-mono text-xs transition-all" title="Convert to Next Lifecycle Document">
                <i data-lucide="arrow-right-left" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="window.qwtDocs.deleteDoc('${doc.id}')" class="px-2 py-1 rounded-lg bg-[#0F141C] border border-slate-700/80 hover:border-red-400 text-red-400 font-mono text-xs transition-all" title="Delete Document">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  getTypeBadge(type) {
    switch (type) {
      case 'QUOTE':
        return '<span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[9px] font-mono font-bold">QUOTATION</span>';
      case 'INVOICE':
        return '<span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[9px] font-mono font-bold">TAX INVOICE</span>';
      case 'PO':
        return '<span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[9px] font-mono font-bold">PURCHASE ORDER</span>';
      case 'DELIVERY_NOTE':
        return '<span class="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[9px] font-mono font-bold">DELIVERY NOTE</span>';
      default:
        return `<span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[9px] font-mono">${type}</span>`;
    }
  }

  getStatusBadge(status) {
    switch (status) {
      case 'ISSUED':
      case 'SENT_TO_VENDOR':
        return '<span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-mono font-bold">ISSUED</span>';
      case 'PAID':
      case 'CLIENT_ACCEPTED':
      case 'CONFIRMED':
      case 'DELIVERED_SIGNED':
        return '<span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1 w-max"><i data-lucide="check" class="w-3 h-3"></i> ' + status.replace('_', ' ') + '</span>';
      case 'OVERDUE':
      case 'REJECTED':
        return '<span class="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-mono font-bold">' + status + '</span>';
      case 'DRAFT':
      case 'STAGED':
      default:
        return '<span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-mono">DRAFT</span>';
    }
  }

  // Switch between register table and document builder
  switchView(viewName) {
    this.activeSubView = viewName;
    const registerView = document.getElementById('docs-view-register');
    const editorView = document.getElementById('docs-view-editor');
    if (!registerView || !editorView) return;

    if (viewName === 'editor') {
      registerView.classList.add('hidden');
      editorView.classList.remove('hidden');
    } else {
      registerView.classList.remove('hidden');
      editorView.classList.add('hidden');
      this.renderTable();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  // Create new blank document of a specified type
  initNewDoc(type = 'QUOTE') {
    const timestamp = Date.now().toString().slice(-4);
    const prefixes = {
      QUOTE: `QWT-QUO-2026-${timestamp}`,
      INVOICE: `QWT-INV-2026-${timestamp}`,
      PO: `QWT-PO-2026-${timestamp}`,
      DELIVERY_NOTE: `QWT-DN-2026-${timestamp}`
    };

    this.currentDoc = {
      id: prefixes[type] || `QWT-DOC-2026-${timestamp}`,
      type: type,
      title: 'New Commercial Engagement',
      clientName: '',
      attention: '',
      email: '',
      phone: '',
      address: '',
      emirate: 'Dubai',
      clientTrn: '',
      lpoNumber: '',
      docDate: new Date().toISOString().slice(0, 10),
      dueDate: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
      currency: 'AED',
      domain: 'IT Infrastructure & Data Centre',
      status: 'DRAFT',
      paymentTerms: '50% Advance with L.P.O., 50% upon Delivery Note Sign-off',
      bankDetails: {
        bankName: 'First Abu Dhabi Bank (FAB)',
        accountName: 'Quad Wise Technologies FZ-LLC',
        accountNumber: '1029482019482',
        iban: 'AE21033000001029482019482',
        swift: 'FABAAEAD'
      },
      deliveryDetails: {
        siteLocation: '',
        vehiclePlate: '',
        driverName: '',
        siraInspectionPassed: false
      },
      items: [
        {
          description: '',
          category: 'Hardware',
          serial: '',
          qty: 1,
          unitPrice: 0,
          total: 0
        }
      ],
      discountPercent: 0,
      vatPercent: 5,
      notes: ''
    };

    this.populateEditor();
    this.switchView('editor');
  }

  editDoc(id) {
    const doc = this.docs.find(d => d.id === id);
    if (!doc) return;
    this.currentDoc = JSON.parse(JSON.stringify(doc));
    this.populateEditor();
    this.switchView('editor');
  }

  populateEditor() {
    const doc = this.currentDoc;
    if (!doc) return;

    // Type Tabs
    document.querySelectorAll('[data-editor-type]').forEach(btn => {
      const match = btn.getAttribute('data-editor-type') === doc.type;
      if (match) {
        btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.remove('bg-[#0F141C]', 'text-slate-300');
      } else {
        btn.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.add('bg-[#0F141C]', 'text-slate-300');
      }
    });

    // Form fields
    document.getElementById('doc-edit-id').value = doc.id;
    document.getElementById('doc-edit-title').value = doc.title;
    document.getElementById('doc-edit-client').value = doc.clientName;
    document.getElementById('doc-edit-attention').value = doc.attention || '';
    document.getElementById('doc-edit-email').value = doc.email || '';
    document.getElementById('doc-edit-phone').value = doc.phone || '';
    document.getElementById('doc-edit-address').value = doc.address || '';
    document.getElementById('doc-edit-emirate').value = doc.emirate || 'Dubai';
    document.getElementById('doc-edit-trn').value = doc.clientTrn || '';
    document.getElementById('doc-edit-lpo').value = doc.lpoNumber || '';
    document.getElementById('doc-edit-date').value = doc.docDate;
    document.getElementById('doc-edit-due-date').value = doc.dueDate;
    document.getElementById('doc-edit-currency').value = doc.currency || 'AED';
    document.getElementById('doc-edit-domain').value = doc.domain;
    document.getElementById('doc-edit-status').value = doc.status;
    document.getElementById('doc-edit-terms').value = doc.paymentTerms || '';
    document.getElementById('doc-edit-discount').value = doc.discountPercent || 0;
    document.getElementById('doc-edit-vat').value = doc.vatPercent !== undefined ? doc.vatPercent : 5;
    document.getElementById('doc-edit-notes').value = doc.notes || '';

    // Document-specific conditional containers
    const deliveryBox = document.getElementById('editor-delivery-box');
    const bankBox = document.getElementById('editor-bank-box');

    if (deliveryBox) {
      if (doc.type === 'DELIVERY_NOTE') {
        deliveryBox.classList.remove('hidden');
        document.getElementById('doc-edit-site').value = doc.deliveryDetails?.siteLocation || '';
        document.getElementById('doc-edit-vehicle').value = doc.deliveryDetails?.vehiclePlate || '';
        document.getElementById('doc-edit-driver').value = doc.deliveryDetails?.driverName || '';
        document.getElementById('doc-edit-sira-check').checked = !!doc.deliveryDetails?.siraInspectionPassed;
      } else {
        deliveryBox.classList.add('hidden');
      }
    }

    if (bankBox) {
      if (doc.type === 'INVOICE') {
        bankBox.classList.remove('hidden');
      } else {
        bankBox.classList.add('hidden');
      }
    }

    this.renderLineItems();
    this.recalculateTotals();
  }

  setEditorDocType(type) {
    if (!this.currentDoc) return;
    this.currentDoc.type = type;

    // Auto-update prefix if still default
    const timestamp = Date.now().toString().slice(-4);
    const prefixes = {
      QUOTE: `QWT-QUO-2026-${timestamp}`,
      INVOICE: `QWT-INV-2026-${timestamp}`,
      PO: `QWT-PO-2026-${timestamp}`,
      DELIVERY_NOTE: `QWT-DN-2026-${timestamp}`
    };
    document.getElementById('doc-edit-id').value = prefixes[type];
    this.currentDoc.id = prefixes[type];

    this.populateEditor();
  }

  renderLineItems() {
    const container = document.getElementById('line-items-body');
    if (!container || !this.currentDoc) return;

    container.innerHTML = this.currentDoc.items.map((item, idx) => `
      <tr class="border-b border-slate-800/80">
        <td class="py-2.5 px-3">
          <input type="text" value="${item.description}" oninput="window.qwtDocs.updateLineItem(${idx}, 'description', this.value)" placeholder="Technical description / Model / SKU" class="w-full bg-[#0A0D12] border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C9A24D]">
          <input type="text" value="${item.serial || ''}" oninput="window.qwtDocs.updateLineItem(${idx}, 'serial', this.value)" placeholder="Serial Number(s) / Asset Tag (Optional)" class="w-full mt-1.5 bg-[#0A0D12] border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-400 focus:outline-none focus:border-[#C9A24D]">
        </td>
        <td class="py-2.5 px-3 w-36">
          <select onchange="window.qwtDocs.updateLineItem(${idx}, 'category', this.value)" class="w-full bg-[#0A0D12] border border-slate-700/80 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-[#C9A24D]">
            <option value="Hardware" ${item.category === 'Hardware' ? 'selected' : ''}>Hardware</option>
            <option value="Software/License" ${item.category === 'Software/License' ? 'selected' : ''}>Software</option>
            <option value="Professional Services" ${item.category === 'Professional Services' ? 'selected' : ''}>Services</option>
            <option value="Maintenance/SLA" ${item.category === 'Maintenance/SLA' ? 'selected' : ''}>SLA Support</option>
          </select>
        </td>
        <td class="py-2.5 px-3 w-20">
          <input type="number" min="1" value="${item.qty}" oninput="window.qwtDocs.updateLineItem(${idx}, 'qty', this.value)" class="w-full bg-[#0A0D12] border border-slate-700/80 rounded-lg px-2 py-1.5 text-xs text-white text-center font-mono focus:outline-none focus:border-[#C9A24D]">
        </td>
        <td class="py-2.5 px-3 w-32">
          <input type="number" min="0" step="any" value="${item.unitPrice}" oninput="window.qwtDocs.updateLineItem(${idx}, 'unitPrice', this.value)" class="w-full bg-[#0A0D12] border border-slate-700/80 rounded-lg px-2 py-1.5 text-xs text-white text-right font-mono focus:outline-none focus:border-[#C9A24D]">
        </td>
        <td class="py-2.5 px-3 w-32 text-right font-mono text-xs font-bold text-white">
          AED ${(item.qty * item.unitPrice).toLocaleString()}
        </td>
        <td class="py-2.5 px-3 w-12 text-center">
          <button type="button" onclick="window.qwtDocs.removeLineItem(${idx})" class="p-1.5 text-slate-500 hover:text-red-400 transition-colors" title="Delete Row">
            <i data-lucide="trash" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  addLineItem() {
    if (!this.currentDoc) return;
    this.currentDoc.items.push({
      description: '',
      category: 'Hardware',
      serial: '',
      qty: 1,
      unitPrice: 0,
      total: 0
    });
    this.renderLineItems();
    this.recalculateTotals();
  }

  removeLineItem(idx) {
    if (!this.currentDoc || this.currentDoc.items.length <= 1) {
      if (window.qwtToast) window.qwtToast('Document must contain at least 1 line item', 'warning');
      return;
    }
    this.currentDoc.items.splice(idx, 1);
    this.renderLineItems();
    this.recalculateTotals();
  }

  updateLineItem(idx, field, value) {
    if (!this.currentDoc || !this.currentDoc.items[idx]) return;
    if (field === 'qty') {
      this.currentDoc.items[idx].qty = Math.max(1, parseInt(value) || 1);
    } else if (field === 'unitPrice') {
      this.currentDoc.items[idx].unitPrice = Math.max(0, parseFloat(value) || 0);
    } else {
      this.currentDoc.items[idx][field] = value;
    }
    this.currentDoc.items[idx].total = this.currentDoc.items[idx].qty * this.currentDoc.items[idx].unitPrice;
    this.recalculateTotals();
  }

  recalculateTotals() {
    if (!this.currentDoc) return;
    const items = this.currentDoc.items;
    const subtotal = items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);

    const discountInput = parseFloat(document.getElementById('doc-edit-discount')?.value) || 0;
    const vatSelect = parseFloat(document.getElementById('doc-edit-vat')?.value);
    const vatRate = isNaN(vatSelect) ? 5 : vatSelect;

    this.currentDoc.discountPercent = discountInput;
    this.currentDoc.vatPercent = vatRate;

    const discountAmount = subtotal * (discountInput / 100);
    const taxableAmount = Math.max(0, subtotal - discountAmount);
    const vatAmount = taxableAmount * (vatRate / 100);
    const grandTotal = taxableAmount + vatAmount;

    // Update UI Elements
    const elSub = document.getElementById('calc-subtotal');
    const elDisc = document.getElementById('calc-discount');
    const elVat = document.getElementById('calc-vat');
    const elGrand = document.getElementById('calc-grand-total');
    const elWords = document.getElementById('calc-words');

    if (elSub) elSub.textContent = `AED ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elDisc) elDisc.textContent = `- AED ${discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elVat) elVat.textContent = `AED ${vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elGrand) elGrand.textContent = `AED ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elWords) elWords.textContent = this.numberToWords(Math.round(grandTotal)) + ' UAE Dirhams Only';
  }

  // Load Preset BOQ templates
  loadPreset(presetName) {
    if (!this.currentDoc) return;

    if (presetName === 'h100') {
      this.currentDoc.title = 'NVIDIA H100 SXM5 32-GPU Cluster (800G InfiniBand)';
      this.currentDoc.domain = 'AI Compute & GPU';
      this.currentDoc.items = [
        {
          description: 'Dell PowerEdge XE9680 AI Server (8x NVIDIA H100 80GB SXM5, Dual Intel Xeon Platinum 8480+)',
          category: 'Hardware',
          serial: 'SN-XE9680-POD-01',
          qty: 4,
          unitPrice: 750000,
          total: 3000000
        },
        {
          description: 'NVIDIA Quantum-2 QM9700 64-Port 800Gb/s InfiniBand Spine Switch + Shielded Cabling',
          category: 'Hardware',
          serial: 'SN-QM9700-01',
          qty: 2,
          unitPrice: 180000,
          total: 360000
        },
        {
          description: 'Sovereign AI Enclave RoCE v2 Low-Latency Tuning & Multi-Node LLM Benchmark Testing',
          category: 'Professional Services',
          serial: 'SVC-AI-DEPLOY',
          qty: 1,
          unitPrice: 150000,
          total: 150000
        }
      ];
    } else if (presetName === 'sira') {
      this.currentDoc.title = 'Dubai SIRA CCTV 31-Day Video Retention SAN Array';
      this.currentDoc.domain = 'ELV & SIRA Physical Security';
      this.currentDoc.items = [
        {
          description: 'NetApp E-Series E2824 Storage Array (RAID-6 Dual Parity, 31-Day 4K Video Stream Ingest)',
          category: 'Hardware',
          serial: 'SN-NETAPP-E28-SIRA',
          qty: 2,
          unitPrice: 195000,
          total: 390000
        },
        {
          description: 'Explosion-Proof ATEX 4K PTZ Camera Network with SHA-256 Cryptographic Watermarking',
          category: 'Hardware',
          serial: 'SN-CAM-ARRAY-01-24',
          qty: 24,
          unitPrice: 12500,
          total: 300000
        },
        {
          description: 'Dubai Police SIRA Audit Documentation, Field Inspection & Certificate Handover',
          category: 'Professional Services',
          serial: 'SVC-SIRA-AUDIT',
          qty: 1,
          unitPrice: 45000,
          total: 45000
        }
      ];
    } else if (presetName === 'cyber') {
      this.currentDoc.title = 'Fortinet 3700F NESA Sovereign Next-Gen Firewall Cluster';
      this.currentDoc.domain = 'Cyber Security';
      this.currentDoc.items = [
        {
          description: 'Fortinet FortiGate 3700F High-Availability Pair (600 Gbps Firewall Throughput, 100G QSFP28)',
          category: 'Hardware',
          serial: 'SN-FG3700F-HA1, SN-FG3700F-HA2',
          qty: 2,
          unitPrice: 280000,
          total: 560000
        },
        {
          description: 'FortiGuard Enterprise Security Protection Suite (IPS, Anti-Malware, Zero-Day Sandbox, 3-Year)',
          category: 'Software/License',
          serial: 'LIC-FG-ENT-3Y',
          qty: 2,
          unitPrice: 85000,
          total: 170000
        },
        {
          description: 'UAE PDPL & NESA Critical National Infrastructure Microsegmentation Architecture Deployment',
          category: 'Professional Services',
          serial: 'SVC-NESA-DEFENSE',
          qty: 1,
          unitPrice: 95000,
          total: 95000
        }
      ];
    }

    this.populateEditor();
    if (window.qwtToast) window.qwtToast(`Loaded BOQ Template: [${this.currentDoc.title}]`, 'success');
  }

  saveCurrentDoc() {
    if (!this.currentDoc) return;

    // Pull values from DOM with fallbacks
    const elId = document.getElementById('doc-edit-id');
    const elTitle = document.getElementById('doc-edit-title');
    const elClient = document.getElementById('doc-edit-client');
    const elAttention = document.getElementById('doc-edit-attention');
    const elEmail = document.getElementById('doc-edit-email');
    const elPhone = document.getElementById('doc-edit-phone');
    const elAddress = document.getElementById('doc-edit-address');
    const elEmirate = document.getElementById('doc-edit-emirate');
    const elTrn = document.getElementById('doc-edit-trn');
    const elLpo = document.getElementById('doc-edit-lpo');
    const elDate = document.getElementById('doc-edit-date');
    const elDueDate = document.getElementById('doc-edit-due-date');
    const elCurrency = document.getElementById('doc-edit-currency');
    const elDomain = document.getElementById('doc-edit-domain');
    const elStatus = document.getElementById('doc-edit-status');
    const elTerms = document.getElementById('doc-edit-terms');
    const elDiscount = document.getElementById('doc-edit-discount');
    const elVat = document.getElementById('doc-edit-vat');
    const elNotes = document.getElementById('doc-edit-notes');

    if (elId) this.currentDoc.id = elId.value.trim() || this.currentDoc.id;
    if (elTitle) this.currentDoc.title = elTitle.value.trim() || this.currentDoc.title || 'Commercial Engagement';
    if (elClient) this.currentDoc.clientName = elClient.value.trim() || this.currentDoc.clientName || '';
    if (elAttention) this.currentDoc.attention = elAttention.value.trim();
    if (elEmail) this.currentDoc.email = elEmail.value.trim();
    if (elPhone) this.currentDoc.phone = elPhone.value.trim();
    if (elAddress) this.currentDoc.address = elAddress.value.trim();
    if (elEmirate) this.currentDoc.emirate = elEmirate.value;
    if (elTrn) this.currentDoc.clientTrn = elTrn.value.trim();
    if (elLpo) this.currentDoc.lpoNumber = elLpo.value.trim();
    if (elDate) this.currentDoc.docDate = elDate.value || this.currentDoc.docDate;
    if (elDueDate) this.currentDoc.dueDate = elDueDate.value || this.currentDoc.dueDate;
    if (elCurrency) this.currentDoc.currency = elCurrency.value;
    if (elDomain) this.currentDoc.domain = elDomain.value;
    if (elStatus) this.currentDoc.status = elStatus.value;
    if (elTerms) this.currentDoc.paymentTerms = elTerms.value.trim();
    if (elDiscount) this.currentDoc.discountPercent = parseFloat(elDiscount.value) || 0;
    if (elVat) this.currentDoc.vatPercent = parseFloat(elVat.value) || 0;
    if (elNotes) this.currentDoc.notes = elNotes.value.trim();

    if (this.currentDoc.type === 'DELIVERY_NOTE') {
      this.currentDoc.deliveryDetails = {
        siteLocation: document.getElementById('doc-edit-site')?.value.trim() || '',
        vehiclePlate: document.getElementById('doc-edit-vehicle')?.value.trim() || '',
        driverName: document.getElementById('doc-edit-driver')?.value.trim() || '',
        siraInspectionPassed: !!document.getElementById('doc-edit-sira-check')?.checked
      };
    }

    if (!this.currentDoc.clientName) {
      if (window.qwtToast) window.qwtToast('Please enter Client / Recipient Company Name', 'error');
      document.getElementById('doc-edit-client')?.focus?.();
      return;
    }

    // Check if doc exists in list
    const existingIndex = this.docs.findIndex(d => d.id === this.currentDoc.id);
    if (existingIndex >= 0) {
      this.docs[existingIndex] = { ...this.currentDoc };
    } else {
      this.docs.unshift({ ...this.currentDoc });
    }

    this.saveDocs();
    if (window.qwtToast) window.qwtToast(`Document [${this.currentDoc.id}] Saved Successfully`, 'success');
    this.switchView('list');
  }

  deleteDoc(id) {
    if (!confirm(`Are you sure you want to delete commercial document ${id}?`)) return;
    this.docs = this.docs.filter(d => d.id !== id);
    this.saveDocs();
    if (window.qwtToast) window.qwtToast(`Deleted ${id}`, 'info');
  }

  // Lifecycle Conversion: Quote -> PO -> Delivery Note -> Tax Invoice
  openConvertModal(id) {
    const doc = this.docs.find(d => d.id === id);
    if (!doc) return;

    let targetType = 'INVOICE';
    if (doc.type === 'QUOTE') targetType = 'INVOICE';
    else if (doc.type === 'PO') targetType = 'DELIVERY_NOTE';
    else if (doc.type === 'DELIVERY_NOTE') targetType = 'INVOICE';

    const timestamp = Date.now().toString().slice(-4);
    const newPrefixes = {
      INVOICE: `QWT-INV-2026-${timestamp}`,
      PO: `QWT-PO-2026-${timestamp}`,
      DELIVERY_NOTE: `QWT-DN-2026-${timestamp}`,
      QUOTE: `QWT-QUO-2026-${timestamp}`
    };

    const confirmed = confirm(
      `Convert [${doc.id}] (${doc.type}) into a new [${targetType}]?\n\nAll items, client details, and pricing will be preserved and linked.`
    );
    if (!confirmed) return;

    const newDoc = JSON.parse(JSON.stringify(doc));
    newDoc.id = newPrefixes[targetType];
    newDoc.type = targetType;
    newDoc.status = (targetType === 'INVOICE') ? 'ISSUED' : (targetType === 'DELIVERY_NOTE' ? 'STAGED' : 'CONFIRMED');
    newDoc.docDate = new Date().toISOString().slice(0, 10);
    newDoc.lpoNumber = doc.lpoNumber || doc.id;

    this.docs.unshift(newDoc);
    this.saveDocs();

    if (window.qwtToast) {
      window.qwtToast(`Successfully converted to ${targetType}: [${newDoc.id}]`, 'success');
    }

    this.editDoc(newDoc.id);
  }

  // Convert CRM Lead into Quotation
  createFromLead(lead) {
    if (!lead) return;
    this.initNewDoc('QUOTE');
    this.currentDoc.clientName = lead.company || '';
    this.currentDoc.attention = lead.fullName || '';
    this.currentDoc.email = lead.workEmail || lead.email || '';
    this.currentDoc.phone = lead.phone || '';
    this.currentDoc.domain = lead.solution || 'IT Infrastructure & Data Centre';
    this.currentDoc.title = `Enterprise Infrastructure Proposal: ${lead.company}`;
    this.currentDoc.notes = `Created from verified CRM RFP telemetry. Client requirements: ${lead.notes || ''}`;

    this.populateEditor();
    this.switchView('editor');
    if (window.qwtToast) window.qwtToast(`Initialized Commercial Quote for [${lead.company}]`, 'info');
  }

  // Client-Ready A4 Print / PDF Preview
  previewPrint(id) {
    this.activeModalDocId = id;
    const doc = this.docs.find(d => d.id === id);
    if (!doc) return;

    const modal = document.getElementById('doc-print-modal');
    const container = document.getElementById('doc-print-content');
    if (!modal || !container) return;

    const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
    const discount = subtotal * ((doc.discountPercent || 0) / 100);
    const afterDiscount = subtotal - discount;
    const vat = afterDiscount * ((doc.vatPercent || 0) / 100);
    const grandTotal = afterDiscount + vat;

    const docTypeTitles = {
      QUOTE: 'COMMERCIAL QUOTATION / BOQ PROPOSAL',
      INVOICE: 'OFFICIAL TAX INVOICE',
      PO: 'PURCHASE ORDER (PROCUREMENT DISPATCH)',
      DELIVERY_NOTE: 'DELIVERY NOTE & PROOF OF DELIVERY (POD)'
    };

    container.innerHTML = `
      <!-- A4 Official Header -->
      <div class="pb-6 border-b-2 border-[#C9A24D] flex items-start justify-between">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <img src="assets/qwt-logo.png" alt="Quad Wise Technologies" class="w-12 h-12 rounded-xl object-contain">
            <div>
              <div class="font-heading font-extrabold text-xl tracking-tight text-slate-900">QUAD WISE TECHNOLOGIES</div>
              <div class="text-[9px] font-sans text-[#B38E3F] font-bold tracking-wider uppercase">Sovereign IT &bull; AI Compute &bull; GCC Enterprise Infrastructure</div>
            </div>
          </div>
          <div class="text-[10px] font-mono text-slate-600 space-y-0.5">
            <div>Corporate HQ: DSO High-Tech Campus, Silicon Oasis, Dubai, UAE</div>
            <div>ADGM Engineering Hub: Al Khatem Tower, Al Maryah Island, Abu Dhabi</div>
            <div>TRN (Federal Tax Authority): <strong class="text-slate-900 font-bold">100482910300003</strong> &bull; Commercial License: 48912/DSO</div>
          </div>
        </div>

        <div class="text-right">
          <div class="inline-block px-3 py-1 rounded bg-[#B38E3F]/10 border border-[#B38E3F]/40 text-[#B38E3F] font-heading font-extrabold text-sm tracking-wider uppercase mb-2">
            ${docTypeTitles[doc.type] || doc.type}
          </div>
          <div class="text-xs font-mono font-bold text-slate-900">${doc.id}</div>
          <div class="text-[10px] font-mono text-slate-500 mt-1">Date: ${doc.docDate}</div>
          <div class="text-[10px] font-mono text-slate-500">Validity / Due: ${doc.dueDate}</div>
          ${doc.lpoNumber ? `<div class="text-[10px] font-mono text-[#B38E3F] mt-1 font-bold">Ref / LPO: ${doc.lpoNumber}</div>` : ''}
        </div>
      </div>

      <!-- Recipient & Document Meta Grid -->
      <div class="grid grid-cols-2 gap-6 py-5 text-xs">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[10px] font-mono font-bold text-[#B38E3F] uppercase tracking-wider mb-2">
            ${doc.type === 'PO' ? 'VENDOR / OEM SUPPLIER:' : 'BILLED & DISPATCHED TO:'}
          </div>
          <div class="font-heading font-bold text-sm text-slate-900">${doc.clientName}</div>
          ${doc.attention ? `<div class="text-slate-700 font-mono text-xs mt-0.5">Attn: ${doc.attention}</div>` : ''}
          ${doc.address ? `<div class="text-slate-600 mt-1 text-[11px] leading-relaxed">${doc.address}</div>` : ''}
          <div class="text-[11px] font-mono text-slate-600 mt-1.5 flex items-center gap-3">
            ${doc.email ? `<span>Email: ${doc.email}</span>` : ''}
            ${doc.phone ? `<span>Tel: ${doc.phone}</span>` : ''}
          </div>
          ${doc.clientTrn ? `<div class="text-[10px] font-mono text-slate-800 mt-1 font-bold">Customer TRN: ${doc.clientTrn}</div>` : ''}
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[10px] font-mono font-bold text-[#B38E3F] uppercase tracking-wider mb-2">PROJECT / REGULATORY SCOPE:</div>
          <div class="font-heading font-bold text-sm text-slate-900">${doc.title}</div>
          <div class="text-[11px] font-mono text-slate-600 mt-1">Domain: ${doc.domain}</div>
          <div class="text-[11px] font-mono text-slate-600">Currency: ${doc.currency} &bull; SIRA/MCC Validated</div>
          <div class="mt-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 p-1.5 rounded flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> UAE Sovereign Data Residency &amp; ISO 27001 Certified
          </div>
        </div>
      </div>

      <!-- Itemized Bill of Materials (BOQ) Table -->
      <div class="border border-slate-300 rounded-xl overflow-hidden my-4">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-100 border-b border-slate-300 font-mono text-[11px] text-slate-700">
              <th class="py-2.5 px-3">#</th>
              <th class="py-2.5 px-3">TECHNICAL SPECIFICATION &amp; SERIAL TAGS</th>
              <th class="py-2.5 px-3">CATEGORY</th>
              <th class="py-2.5 px-3 text-center">QTY</th>
              <th class="py-2.5 px-3 text-right">UNIT PRICE (${doc.currency})</th>
              <th class="py-2.5 px-3 text-right">AMOUNT (${doc.currency})</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            ${doc.items.map((it, idx) => `
              <tr class="hover:bg-slate-50">
                <td class="py-2.5 px-3 font-mono text-slate-500">${idx + 1}</td>
                <td class="py-2.5 px-3">
                  <div class="font-medium text-slate-900">${it.description}</div>
                  ${it.serial ? `<div class="text-[10px] font-mono text-slate-500 mt-0.5">Serial: ${it.serial}</div>` : ''}
                </td>
                <td class="py-2.5 px-3 font-mono text-[10px] text-slate-600">${it.category}</td>
                <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-900">${it.qty}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-800">${it.unitPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td class="py-2.5 px-3 text-right font-mono font-bold text-slate-900">${(it.qty * it.unitPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Calculations & Summary -->
      <div class="grid grid-cols-2 gap-6 my-4 pt-2">
        <div class="text-xs space-y-3">
          ${doc.type === 'INVOICE' && doc.bankDetails ? `
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] font-mono space-y-1">
              <div class="font-bold text-slate-900 text-xs mb-1">OFFICIAL WIRE SETTLEMENT DETAILS (CBUAE):</div>
              <div>Bank: <strong class="text-slate-900">${doc.bankDetails.bankName}</strong></div>
              <div>Beneficiary: <strong class="text-slate-900">${doc.bankDetails.accountName}</strong></div>
              <div>IBAN: <strong class="text-slate-900">${doc.bankDetails.iban}</strong></div>
              <div>SWIFT / BIC: <strong class="text-slate-900">${doc.bankDetails.swift}</strong></div>
            </div>
          ` : ''}

          ${doc.type === 'DELIVERY_NOTE' && doc.deliveryDetails ? `
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] font-mono space-y-1">
              <div class="font-bold text-slate-900 text-xs mb-1">LOGISTICS &amp; SIRA PHYSICAL VERIFICATION:</div>
              <div>Site: <strong class="text-slate-900">${doc.deliveryDetails.siteLocation || 'Client Facility'}</strong></div>
              <div>Vehicle / Driver: <strong class="text-slate-900">${doc.deliveryDetails.vehiclePlate || 'Direct Dispatch'} &bull; ${doc.deliveryDetails.driverName || 'Authorized QWT Courier'}</strong></div>
              <div class="text-emerald-700 font-bold">SIRA Security Hardware Audit Check: PASSED &amp; VALIDATED</div>
            </div>
          ` : ''}

          <div class="text-[11px] text-slate-600 leading-relaxed font-mono">
            <strong>Terms &amp; Conditions:</strong> ${doc.paymentTerms}
          </div>
          ${doc.notes ? `<div class="text-[10px] text-slate-500 italic font-mono">${doc.notes}</div>` : ''}
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
          <div class="flex justify-between text-slate-600">
            <span>Subtotal (Net):</span>
            <span class="font-bold text-slate-900">${doc.currency} ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          ${doc.discountPercent > 0 ? `
            <div class="flex justify-between text-amber-700">
              <span>Discount (${doc.discountPercent}%):</span>
              <span>- ${doc.currency} ${discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          ` : ''}
          <div class="flex justify-between text-slate-600">
            <span>UAE FTA 5% VAT:</span>
            <span class="font-bold text-slate-900">${doc.currency} ${vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div class="pt-2 border-t border-slate-300 flex justify-between text-sm font-bold text-slate-900">
            <span>GRAND TOTAL (${doc.currency}):</span>
            <span class="text-[#B38E3F] text-base">${doc.currency} ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div class="text-[10px] text-slate-500 italic pt-1 border-t border-slate-200">
            Amount in words: ${this.numberToWords(Math.round(grandTotal))} ${doc.currency === 'AED' ? 'UAE Dirhams' : doc.currency} Only
          </div>
        </div>
      </div>

      <!-- Signatures & Official Corporate Stamp -->
      <div class="grid grid-cols-2 gap-8 pt-8 mt-6 border-t border-slate-300 text-xs font-mono">
        <div>
          <div class="text-[10px] text-slate-500 uppercase">ISSUED &amp; AUTHORIZED BY:</div>
          <div class="mt-4 font-heading font-bold text-sm text-slate-900">Eng. Tariq Al-Hashimi</div>
          <div class="text-[10px] text-slate-600">Managing Director &bull; Quad Wise Technologies</div>
          <div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B38E3F]/10 text-[#B38E3F] border border-[#B38E3F]/30 text-[9px] font-bold">
            <i data-lucide="shield-check" class="w-3 h-3"></i> QWT CORPORATE DIGITAL SEAL
          </div>
        </div>

        <div class="text-right">
          <div class="text-[10px] text-slate-500 uppercase">
            ${doc.type === 'DELIVERY_NOTE' ? 'GOODS RECEIVED &amp; ACCEPTED BY:' : 'CLIENT ACCEPTANCE &amp; CONFIRMATION:'}
          </div>
          <div class="mt-6 border-b border-dashed border-slate-400 w-48 ml-auto pb-1 text-[11px] text-slate-700 font-bold">
            ${doc.attention || 'Authorized Signatory'}
          </div>
          <div class="text-[9px] text-slate-500 mt-1">Signature, Emirates ID &amp; Corporate Stamp</div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-card')?.classList.remove('scale-95');
    }, 10);

    if (window.lucide) window.lucide.createIcons();
  }

  closePrintModal() {
    const modal = document.getElementById('doc-print-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-card')?.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }


  // ---------------------------------------------------------------------------
  // COMMERCIAL DOCUMENT DOWNLOAD & EXPORT ENGINE
  // Supports Individual Clean HTML / PDF Print, CSV Register, JSON & ZIP Bundle
  // ---------------------------------------------------------------------------

  // Download standalone document currently shown in print preview modal
  downloadCurrentModalDoc() {
    if (!this.activeModalDocId) {
      if (window.qwtToast) window.qwtToast('No active document in preview', 'warning');
      return;
    }
    this.downloadDoc(this.activeModalDocId, 'html');
  }

  // Save changes and immediately trigger client-ready document download
  saveAndDownloadDoc() {
    this.saveCurrentDoc();
    if (this.currentDoc && this.currentDoc.id) {
      this.downloadDoc(this.currentDoc.id, 'html');
      if (window.qwtToast) {
        window.qwtToast(`Prepared & Downloaded: [${this.currentDoc.id}]`, 'success');
      }
    }
  }

  // Download the document currently open in the composer
  downloadCurrentDoc(format = 'html') {
    if (!this.currentDoc) {
      if (window.qwtToast) window.qwtToast('No document loaded in composer', 'warning');
      return;
    }
    this.syncEditorInputsToCurrentDoc();
    this.downloadDoc(this.currentDoc.id, format);
  }

  // Pull active form inputs from the composer into currentDoc without committing to register
  syncEditorInputsToCurrentDoc() {
    if (!this.currentDoc) return;
    const elId = document.getElementById('doc-edit-id');
    const elTitle = document.getElementById('doc-edit-title');
    const elClient = document.getElementById('doc-edit-client');
    const elAttention = document.getElementById('doc-edit-attention');
    const elEmail = document.getElementById('doc-edit-email');
    const elPhone = document.getElementById('doc-edit-phone');
    const elAddress = document.getElementById('doc-edit-address');
    const elEmirate = document.getElementById('doc-edit-emirate');
    const elTrn = document.getElementById('doc-edit-trn');
    const elLpo = document.getElementById('doc-edit-lpo');
    const elDate = document.getElementById('doc-edit-date');
    const elDueDate = document.getElementById('doc-edit-due-date');
    const elCurrency = document.getElementById('doc-edit-currency');
    const elDomain = document.getElementById('doc-edit-domain');
    const elStatus = document.getElementById('doc-edit-status');
    const elTerms = document.getElementById('doc-edit-terms');
    const elDiscount = document.getElementById('doc-edit-discount');
    const elVat = document.getElementById('doc-edit-vat');
    const elNotes = document.getElementById('doc-edit-notes');

    if (elId) this.currentDoc.id = elId.value.trim() || this.currentDoc.id;
    if (elTitle) this.currentDoc.title = elTitle.value.trim() || this.currentDoc.title;
    if (elClient) this.currentDoc.clientName = elClient.value.trim() || this.currentDoc.clientName;
    if (elAttention) this.currentDoc.attention = elAttention.value.trim();
    if (elEmail) this.currentDoc.email = elEmail.value.trim();
    if (elPhone) this.currentDoc.phone = elPhone.value.trim();
    if (elAddress) this.currentDoc.address = elAddress.value.trim();
    if (elEmirate) this.currentDoc.emirate = elEmirate.value;
    if (elTrn) this.currentDoc.clientTrn = elTrn.value.trim();
    if (elLpo) this.currentDoc.lpoNumber = elLpo.value.trim();
    if (elDate) this.currentDoc.docDate = elDate.value;
    if (elDueDate) this.currentDoc.dueDate = elDueDate.value;
    if (elCurrency) this.currentDoc.currency = elCurrency.value;
    if (elDomain) this.currentDoc.domain = elDomain.value;
    if (elStatus) this.currentDoc.status = elStatus.value;
    if (elTerms) this.currentDoc.paymentTerms = elTerms.value.trim();
    if (elDiscount) this.currentDoc.discountPercent = parseFloat(elDiscount.value) || 0;
    if (elVat) this.currentDoc.vatPercent = parseFloat(elVat.value) || 0;
    if (elNotes) this.currentDoc.notes = elNotes.value.trim();

    if (this.currentDoc.type === 'DELIVERY_NOTE') {
      this.currentDoc.deliveryDetails = {
        siteLocation: document.getElementById('doc-edit-site')?.value.trim() || '',
        vehiclePlate: document.getElementById('doc-edit-vehicle')?.value.trim() || '',
        driverName: document.getElementById('doc-edit-driver')?.value.trim() || '',
        siraInspectionPassed: !!document.getElementById('doc-edit-sira-check')?.checked
      };
    }
  }

  // Download a single document in HTML, JSON, or CSV format
  downloadDoc(id, format = 'html') {
    let doc = this.docs.find(d => d.id === id);
    if (!doc && this.currentDoc && this.currentDoc.id === id) {
      doc = this.currentDoc;
    }
    if (!doc) {
      if (window.qwtToast) window.qwtToast(`Document [${id}] not found`, 'error');
      return;
    }

    const sanitizedClient = (doc.clientName || 'Client').replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-');
    const baseFilename = `${doc.id}-${sanitizedClient}`;

    if (format === 'html') {
      const htmlContent = this.generateStandaloneHtml(doc);
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      this.triggerDownload(blob, `${baseFilename}.html`);
      if (window.qwtToast) window.qwtToast(`Downloaded Standalone A4 Document: [${doc.id}]`, 'success');
    } else if (format === 'json') {
      const jsonContent = JSON.stringify(doc, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8' });
      this.triggerDownload(blob, `${baseFilename}.json`);
      if (window.qwtToast) window.qwtToast(`Downloaded JSON Telemetry: [${doc.id}]`, 'success');
    } else if (format === 'pdf') {
      this.previewPrint(doc.id);
      setTimeout(() => window.print(), 350);
    }
  }

  // Export full Commercial Register into an official Excel-compatible CSV audit spreadsheet
  exportCsvRegister() {
    if (!this.docs || this.docs.length === 0) {
      if (window.qwtToast) window.qwtToast('No documents to export', 'warning');
      return;
    }

    const headers = [
      'Document Ref ID',
      'Document Type',
      'Status',
      'Commercial Title',
      'Client / Recipient Company',
      'Attention Person',
      'Work Email',
      'Telephone',
      'Physical Address',
      'Emirate',
      'TRN (Federal Tax Authority)',
      'LPO / RFP Reference',
      'Document Date',
      'Due / Validity Date',
      'Currency',
      'Domain',
      'Line Items Count',
      'Subtotal (AED)',
      'Discount (%)',
      'Discount Amount (AED)',
      'UAE FTA VAT (%)',
      'VAT Amount (AED)',
      'Grand Total (AED)',
      'Payment Terms'
    ];

    const rows = this.docs.map(doc => {
      const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
      const discount = subtotal * ((doc.discountPercent || 0) / 100);
      const taxable = Math.max(0, subtotal - discount);
      const vat = taxable * ((doc.vatPercent || 0) / 100);
      const grandTotal = taxable + vat;

      return [
        doc.id,
        doc.type,
        doc.status,
        `"${(doc.title || '').replace(/"/g, '""')}"`,
        `"${(doc.clientName || '').replace(/"/g, '""')}"`,
        `"${(doc.attention || '').replace(/"/g, '""')}"`,
        doc.email || '',
        doc.phone || '',
        `"${(doc.address || '').replace(/"/g, '""')}"`,
        doc.emirate || 'Dubai',
        doc.clientTrn || '',
        doc.lpoNumber || '',
        doc.docDate || '',
        doc.dueDate || '',
        doc.currency || 'AED',
        `"${(doc.domain || '').replace(/"/g, '""')}"`,
        doc.items.length,
        subtotal.toFixed(2),
        doc.discountPercent || 0,
        discount.toFixed(2),
        doc.vatPercent || 0,
        vat.toFixed(2),
        grandTotal.toFixed(2),
        `"${(doc.paymentTerms || '').replace(/"/g, '""')}"`
      ].join(',');
    });

    const csvContent = '﻿' + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const filename = `QWT-Commercial-Register-${new Date().toISOString().slice(0, 10)}.csv`;
    this.triggerDownload(blob, filename);

    if (window.qwtToast) window.qwtToast(`Exported ${this.docs.length} documents to CSV Register`, 'success');
  }

  // Download all prepared documents in a single ZIP Archive or JSON database
  downloadAllDocs(format = 'zip') {
    if (!this.docs || this.docs.length === 0) {
      if (window.qwtToast) window.qwtToast('No commercial documents available to download', 'warning');
      return;
    }

    if (format === 'json') {
      const jsonContent = JSON.stringify(this.docs, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8' });
      const filename = `QWT-Commercial-Documents-Backup-${new Date().toISOString().slice(0, 10)}.json`;
      this.triggerDownload(blob, filename);
      if (window.qwtToast) window.qwtToast('Exported Full Commercial Database (JSON)', 'success');
      return;
    }

    if (format === 'csv') {
      this.exportCsvRegister();
      return;
    }

    // Default: ZIP Archive containing standalone HTML files for each document + CSV + JSON
    const dateStr = new Date().toISOString().slice(0, 10);
    const filesToZip = [];

    // 1. Standalone HTML files for every document
    this.docs.forEach(doc => {
      const sanitizedClient = (doc.clientName || 'Client').replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-');
      const filename = `${doc.type}/${doc.id}-${sanitizedClient}.html`;
      const html = this.generateStandaloneHtml(doc);
      filesToZip.push({ name: filename, content: html });
    });

    // 2. Commercial Register CSV
    const headers = [
      'Document Ref ID', 'Document Type', 'Status', 'Commercial Title', 'Client / Recipient Company',
      'Attention Person', 'Work Email', 'Telephone', 'Emirate', 'TRN', 'LPO Ref', 'Document Date',
      'Due Date', 'Currency', 'Grand Total (AED)'
    ];
    const csvRows = this.docs.map(doc => {
      const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
      const discount = subtotal * ((doc.discountPercent || 0) / 100);
      const vat = (subtotal - discount) * ((doc.vatPercent || 0) / 100);
      const grandTotal = subtotal - discount + vat;
      return [
        doc.id, doc.type, doc.status, `"${(doc.title || '').replace(/"/g, '""')}"`,
        `"${(doc.clientName || '').replace(/"/g, '""')}"`, `"${(doc.attention || '').replace(/"/g, '""')}"`,
        doc.email || '', doc.phone || '', doc.emirate || 'Dubai', doc.clientTrn || '',
        doc.lpoNumber || '', doc.docDate || '', doc.dueDate || '', doc.currency || 'AED',
        grandTotal.toFixed(2)
      ].join(',');
    });
    filesToZip.push({
      name: `Commercial-Register-${dateStr}.csv`,
      content: '﻿' + [headers.join(','), ...csvRows].join('\r\n')
    });

    // 3. Raw JSON Data Backup
    filesToZip.push({
      name: `commercial-documents-audit.json`,
      content: JSON.stringify(this.docs, null, 2)
    });

    // Generate ZIP in pure JavaScript using makeZip
    try {
      const zipBytes = this.makeZip(filesToZip);
      const blob = new Blob([zipBytes], { type: 'application/zip' });
      const zipFilename = `QWT-Commercial-Documents-Archive-${dateStr}.zip`;
      this.triggerDownload(blob, zipFilename);
      if (window.qwtToast) {
        window.qwtToast(`Downloaded ZIP Archive with ${this.docs.length} documents & CSV Register!`, 'success');
      }
    } catch (err) {
      console.error('Error generating ZIP:', err);
      if (window.qwtToast) window.qwtToast('Error building ZIP archive. Exporting CSV instead.', 'error');
      this.exportCsvRegister();
    }
  }

  // Trigger browser download via virtual blob URL
  triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  // Pure JavaScript ZIP file generator (Store / uncompressed mode compliant with ZIP specifications)
  makeZip(files) {
    const crcTable = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      crcTable[i] = c >>> 0;
    }

    function crc32(buf) {
      let crc = 0xFFFFFFFF;
      for (let i = 0; i < buf.length; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
      }
      return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    const textEncoder = new TextEncoder();
    const fileEntries = [];
    const localParts = [];
    let offset = 0;

    for (const f of files) {
      const nameBytes = textEncoder.encode(f.name);
      const contentBytes = (typeof f.content === 'string') ? textEncoder.encode(f.content) : f.content;
      const size = contentBytes.length;
      const crc = crc32(contentBytes);

      // Local Header (30 bytes + name)
      const localHeader = new Uint8Array(30 + nameBytes.length);
      const view = new DataView(localHeader.buffer);
      view.setUint32(0, 0x04034B50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 0, true);
      view.setUint16(8, 0, true);
      view.setUint16(10, 0x5460, true);
      view.setUint16(12, 0x5D6C, true);
      view.setUint32(14, crc, true);
      view.setUint32(18, size, true);
      view.setUint32(22, size, true);
      view.setUint16(26, nameBytes.length, true);
      view.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);

      fileEntries.push({
        nameBytes,
        size,
        crc,
        offset
      });

      localParts.push(localHeader);
      localParts.push(contentBytes);
      offset += localHeader.length + size;
    }

    const cdOffset = offset;
    const cdParts = [];

    for (const entry of fileEntries) {
      // Central Directory Header (46 bytes + name)
      const cdHeader = new Uint8Array(46 + entry.nameBytes.length);
      const view = new DataView(cdHeader.buffer);
      view.setUint32(0, 0x02014B50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 20, true);
      view.setUint16(8, 0, true);
      view.setUint16(10, 0, true);
      view.setUint16(12, 0x5460, true);
      view.setUint16(14, 0x5D6C, true);
      view.setUint32(16, entry.crc, true);
      view.setUint32(20, entry.size, true);
      view.setUint32(24, entry.size, true);
      view.setUint16(28, entry.nameBytes.length, true);
      view.setUint16(30, 0, true);
      view.setUint16(32, 0, true);
      view.setUint16(34, 0, true);
      view.setUint16(36, 0, true);
      view.setUint32(38, 0, true);
      view.setUint32(42, entry.offset, true);
      cdHeader.set(entry.nameBytes, 46);

      cdParts.push(cdHeader);
      offset += cdHeader.length;
    }

    const cdSize = offset - cdOffset;

    // End of Central Directory (22 bytes)
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);
    eocdView.setUint32(0, 0x06054B50, true);
    eocdView.setUint16(4, 0, true);
    eocdView.setUint16(6, 0, true);
    eocdView.setUint16(8, fileEntries.length, true);
    eocdView.setUint16(10, fileEntries.length, true);
    eocdView.setUint32(12, cdSize, true);
    eocdView.setUint32(16, cdOffset, true);
    eocdView.setUint16(20, 0, true);

    const allParts = [...localParts, ...cdParts, eocd];
    const totalLength = allParts.reduce((acc, p) => acc + p.length, 0);
    const out = new Uint8Array(totalLength);
    let cur = 0;
    for (const part of allParts) {
      out.set(part, cur);
      cur += part.length;
    }
    return out;
  }

  // Generate self-contained, client-ready A4 HTML document with embedded CSS & print trigger
  generateStandaloneHtml(doc) {
    const subtotal = doc.items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
    const discount = subtotal * ((doc.discountPercent || 0) / 100);
    const afterDiscount = subtotal - discount;
    const vat = afterDiscount * ((doc.vatPercent || 0) / 100);
    const grandTotal = afterDiscount + vat;

    const docTypeTitles = {
      QUOTE: 'COMMERCIAL QUOTATION / BOQ PROPOSAL',
      INVOICE: 'OFFICIAL TAX INVOICE',
      PO: 'PURCHASE ORDER (PROCUREMENT DISPATCH)',
      DELIVERY_NOTE: 'DELIVERY NOTE & PROOF OF DELIVERY (POD)'
    };

    const docTypeBadgeColor = {
      QUOTE: '#B38E3F',
      INVOICE: '#059669',
      PO: '#2563EB',
      DELIVERY_NOTE: '#7C3AED'
    }[doc.type] || '#B38E3F';

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${doc.id} - ${docTypeTitles[doc.type] || doc.type} - Quad Wise Technologies</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #0B0E14;
      color: #0F172A;
      line-height: 1.5;
      padding: 30px 15px;
    }
    .top-actions {
      max-width: 860px;
      margin: 0 auto 16px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: #151B26;
      border: 1px solid #283344;
      border-radius: 12px;
      padding: 12px 20px;
      color: #94A3B8;
      font-size: 13px;
      font-family: monospace;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      border: none;
      font-family: sans-serif;
    }
    .btn-gold {
      background: #C9A24D;
      color: #0A0D12;
      border: 1px solid #FFE494;
    }
    .btn-gold:hover { background: #E5C368; }
    .btn-outline {
      background: #1E293B;
      color: #E2E8F0;
      border: 1px solid #334155;
    }
    .btn-outline:hover { background: #334155; color: #FFFFFF; }

    .page-container {
      max-width: 860px;
      margin: 0 auto;
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 14px;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
      padding: 44px 48px;
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 22px;
      border-bottom: 3px solid #C9A24D;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      color: #0A0D12;
      letter-spacing: -0.3px;
    }
    .brand-tagline {
      font-size: 9px;
      font-weight: 800;
      color: #B38E3F;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .corp-meta {
      font-size: 10px;
      color: #475569;
      margin-top: 8px;
      line-height: 1.5;
      font-family: monospace;
    }
    .type-badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 8px;
      background: rgba(201, 162, 77, 0.12);
      border: 1px solid rgba(201, 162, 77, 0.4);
      color: ${docTypeBadgeColor};
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      text-align: right;
    }
    .doc-ref {
      font-size: 15px;
      font-weight: 800;
      font-family: monospace;
      color: #0F172A;
    }
    .doc-dates {
      font-size: 10px;
      color: #64748B;
      font-family: monospace;
      margin-top: 3px;
    }

    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 24px 0;
    }
    .meta-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px 18px;
    }
    .meta-label {
      font-size: 9px;
      font-weight: 700;
      font-family: monospace;
      color: #B38E3F;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }
    .meta-name {
      font-size: 14px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 3px;
    }
    .meta-detail {
      font-size: 11px;
      color: #475569;
      line-height: 1.6;
    }

    table.boq-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 11px;
    }
    table.boq-table th {
      background: #F1F5F9;
      color: #334155;
      font-weight: 700;
      font-family: monospace;
      text-transform: uppercase;
      font-size: 9px;
      letter-spacing: 0.5px;
      padding: 9px 12px;
      border-top: 1px solid #CBD5E1;
      border-bottom: 2px solid #CBD5E1;
      text-align: left;
    }
    table.boq-table th.text-right { text-align: right; }
    table.boq-table th.text-center { text-align: center; }
    table.boq-table td {
      padding: 10px 12px;
      border-bottom: 1px solid #E2E8F0;
      vertical-align: top;
    }
    table.boq-table td.text-right { text-align: right; }
    table.boq-table td.text-center { text-align: center; }
    .item-desc { font-weight: 600; color: #0F172A; font-size: 12px; }
    .item-sub { font-size: 10px; color: #64748B; font-family: monospace; margin-top: 2px; }

    .summary-grid {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 24px;
      margin: 20px 0;
    }
    .notes-box {
      font-size: 10px;
      color: #475569;
      line-height: 1.6;
    }
    .totals-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px 18px;
      font-size: 11px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      color: #475569;
      font-family: monospace;
    }
    .total-row.grand {
      border-top: 2px solid #CBD5E1;
      margin-top: 6px;
      padding-top: 8px;
      font-size: 13px;
      font-weight: 800;
      color: #0F172A;
    }
    .total-row.grand .amount {
      color: #B38E3F;
      font-size: 16px;
    }
    .words-row {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px dashed #CBD5E1;
      font-size: 10px;
      font-style: italic;
      color: #64748B;
    }

    .info-banner {
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 10px;
      font-family: monospace;
      color: #166534;
      margin: 16px 0;
    }
    .info-banner.purple {
      background: #FAF5FF;
      border-color: #E9D5FF;
      color: #6B21A8;
    }

    .sig-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #CBD5E1;
      font-family: monospace;
      font-size: 10px;
    }
    .sig-line {
      margin-top: 40px;
      border-top: 1px dashed #94A3B8;
      padding-top: 5px;
      color: #475569;
    }
    .seal-badge {
      display: inline-block;
      margin-top: 8px;
      padding: 3px 8px;
      background: rgba(201, 162, 77, 0.12);
      border: 1px solid rgba(201, 162, 77, 0.4);
      color: #8C6D23;
      border-radius: 6px;
      font-size: 9px;
      font-weight: 700;
    }

    @media print {
      body { background: #FFFFFF; padding: 0; color: #000000; }
      .top-actions { display: none !important; }
      .page-container { border: none; box-shadow: none; padding: 0; max-width: 100%; border-radius: 0; }
      @page { size: A4 portrait; margin: 10mm 14mm; }
    }
  </style>
</head>
<body>

  <!-- Floating Print & Actions Bar (Hidden on PDF Print) -->
  <div class="top-actions">
    <div>
      <strong>QUAD WISE TECHNOLOGIES</strong> &bull; ${doc.id}
    </div>
    <div style="display: flex; gap: 8px;">
      <button onclick="window.print()" class="btn btn-gold">
        🖨️ Print / Save as PDF (A4)
      </button>
      <button onclick="window.close()" class="btn btn-outline">
        ✕ Close
      </button>
    </div>
  </div>

  <div class="page-container">
    
    <!-- Corporate Official Header -->
    <div class="doc-header">
      <div>
        <div class="brand-title">QUAD WISE TECHNOLOGIES</div>
        <div class="brand-tagline">Innovation with Integrity &bull; Sovereign IT &bull; AI Compute &bull; GCC</div>
        <div class="corp-meta">
          <div>Corporate HQ: DSO High-Tech Campus, Silicon Oasis, Dubai, UAE</div>
          <div>ADGM Engineering Hub: Al Khatem Tower, Al Maryah Island, Abu Dhabi</div>
          <div>Federal Tax Authority TRN: <strong>100482910300003</strong></div>
        </div>
      </div>

      <div style="text-align: right;">
        <div class="type-badge">${docTypeTitles[doc.type] || doc.type}</div>
        <div class="doc-ref">${doc.id}</div>
        <div class="doc-dates">Date: ${doc.docDate || '2026-11-10'}</div>
        <div class="doc-dates">Validity / Due: ${doc.dueDate || '30 Days'}</div>
        ${doc.lpoNumber ? `<div class="doc-dates" style="color: #B38E3F; font-weight: bold;">Ref / LPO: ${doc.lpoNumber}</div>` : ''}
      </div>
    </div>

    <!-- Recipient & Document Meta -->
    <div class="meta-grid">
      <div class="meta-box">
        <div class="meta-label">${doc.type === 'PO' ? 'VENDOR / OEM SUPPLIER:' : 'BILLED &amp; DISPATCHED TO:'}</div>
        <div class="meta-name">${doc.clientName}</div>
        ${doc.attention ? `<div class="meta-detail"><strong>Attn:</strong> ${doc.attention}</div>` : ''}
        ${doc.address ? `<div class="meta-detail">${doc.address} &bull; ${doc.emirate || 'Dubai'}, UAE</div>` : ''}
        <div class="meta-detail" style="font-family: monospace; margin-top: 4px;">
          ${doc.email ? `Email: ${doc.email} &bull; ` : ''}
          ${doc.phone ? `Tel: ${doc.phone}` : ''}
        </div>
        ${doc.clientTrn ? `<div class="meta-detail" style="font-family: monospace; font-weight: bold; color: #0F172A; margin-top: 3px;">Tax TRN: ${doc.clientTrn}</div>` : ''}
      </div>

      <div class="meta-box">
        <div class="meta-label">ENGAGEMENT SPECIFICATIONS:</div>
        <div class="meta-name">${doc.title}</div>
        <div class="meta-detail">Domain: <strong>${doc.domain}</strong></div>
        <div class="meta-detail">Currency: <strong>${doc.currency}</strong> &bull; UAE FTA 5% VAT Registered</div>
        ${doc.paymentTerms ? `<div class="meta-detail" style="margin-top: 4px;"><strong>Terms:</strong> ${doc.paymentTerms}</div>` : ''}
      </div>
    </div>

    <!-- Conditional Banner: Bank Wire Info for Tax Invoices -->
    ${doc.type === 'INVOICE' ? `
      <div class="info-banner">
        <strong>CENTRAL BANK OF UAE (CBUAE) DIRECT WIRE INSTRUCTIONS:</strong><br>
        Beneficiary: Quad Wise Technologies FZ-LLC &bull; Bank: First Abu Dhabi Bank (FAB)<br>
        IBAN: <strong>AE21033000001029482019482</strong> &bull; SWIFT: <strong>FABAAEAD</strong>
      </div>
    ` : ''}

    <!-- Conditional Banner: SIRA Delivery Details for Delivery Notes -->
    ${doc.type === 'DELIVERY_NOTE' && doc.deliveryDetails ? `
      <div class="info-banner purple">
        <strong>DELIVERY NOTE &amp; SIRA PROOF OF CUSTODY (POD):</strong><br>
        Site Facility: <strong>${doc.deliveryDetails.siteLocation || 'Warsan Data Center Hall 2'}</strong> &bull;
        Vehicle Plate: <strong>${doc.deliveryDetails.vehiclePlate || 'Dubai Plate B-88219'}</strong> &bull;
        Courier / Driver: <strong>${doc.deliveryDetails.driverName || 'Rashid Al-Kaabi'}</strong><br>
        Chain of Custody: ${doc.deliveryDetails.siraInspectionPassed ? '&#10004; SIRA Physical Inspection Passed &amp; Tamper Seals Verified' : 'Standard Delivery'}
      </div>
    ` : ''}

    <!-- Itemized Bill of Materials (BOQ) Table -->
    <table class="boq-table">
      <thead>
        <tr>
          <th style="width: 32px;" class="text-center">#</th>
          <th>Description &amp; Hardware Serial Number</th>
          <th style="width: 140px;">Category</th>
          <th style="width: 50px;" class="text-center">Qty</th>
          <th style="width: 110px;" class="text-right">Unit Price (${doc.currency})</th>
          <th style="width: 120px;" class="text-right">Line Total (${doc.currency})</th>
        </tr>
      </thead>
      <tbody>
        ${doc.items.map((item, idx) => `
          <tr>
            <td class="text-center" style="color: #64748B; font-family: monospace;">${idx + 1}</td>
            <td>
              <div class="item-desc">${item.description}</div>
              ${item.serial ? `<div class="item-sub">Serial / Part: ${item.serial}</div>` : ''}
            </td>
            <td>
              <span style="font-family: monospace; font-size: 10px; color: #475569;">${item.category}</span>
            </td>
            <td class="text-center" style="font-family: monospace; font-weight: bold;">${item.qty}</td>
            <td class="text-right" style="font-family: monospace;">${item.unitPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            <td class="text-right" style="font-family: monospace; font-weight: bold;">${(item.qty * item.unitPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- Commercial Notes & Financial Totals -->
    <div class="summary-grid">
      <div class="notes-box">
        <strong>COMMERCIAL &amp; REGULATORY TERMS:</strong>
        <p style="margin-top: 4px;">${doc.notes || 'Official Commercial Document issued under UAE Federal Decree-Law No. (8) of 2017 on Value Added Tax. Goods delivered and installed in accordance with SIRA and UAE Sovereign Data residency standards.'}</p>
      </div>

      <div class="totals-box">
        <div class="total-row">
          <span>Subtotal:</span>
          <span>${doc.currency} ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
        ${doc.discountPercent > 0 ? `
          <div class="total-row" style="color: #B45309;">
            <span>Discount (${doc.discountPercent}%):</span>
            <span>- ${doc.currency} ${discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        ` : ''}
        <div class="total-row">
          <span>UAE FTA 5% VAT:</span>
          <span>${doc.currency} ${vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
        <div class="total-row grand">
          <span>GRAND TOTAL:</span>
          <span class="amount">${doc.currency} ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
        <div class="words-row">
          Amount in words: ${this.numberToWords(Math.round(grandTotal))} ${doc.currency === 'AED' ? 'UAE Dirhams' : doc.currency} Only
        </div>
      </div>
    </div>

    <!-- Official Corporate Signatures -->
    <div class="sig-grid">
      <div>
        <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">ISSUED &amp; AUTHORIZED BY:</div>
        <div style="font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 10px;">Eng. Tariq Al-Hashimi</div>
        <div style="font-size: 10px; color: #475569;">Managing Director &bull; Quad Wise Technologies</div>
        <div class="seal-badge">&#10004; QWT CORPORATE DIGITAL SEAL</div>
        <div class="sig-line">Official Signature &bull; DSO Campus, Dubai</div>
      </div>

      <div style="text-align: right;">
        <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">${doc.type === 'DELIVERY_NOTE' ? 'GOODS RECEIVED &amp; ACCEPTED BY:' : 'CLIENT ACCEPTANCE / SIGN-OFF:'}</div>
        <div style="font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 10px;">${doc.attention || doc.clientName}</div>
        <div style="font-size: 10px; color: #475569;">Authorized Commercial Signatory</div>
        <div class="sig-line" style="margin-left: auto; width: 220px;">Signature, Emirates ID &amp; Corporate Stamp</div>
      </div>
    </div>

  </div>

</body>
</html>`;
  }

  // Helper: Number to Words converter for UAE Dirhams
  numberToWords(num) {
    if (num === 0) return 'Zero';
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion'];

    const formatHundreds = (n) => {
      let str = '';
      if (n >= 100) {
        str += ones[Math.floor(n / 100)] + ' Hundred ';
        n %= 100;
      }
      if (n >= 20) {
        str += tens[Math.floor(n / 10)] + ' ';
        n %= 10;
      }
      if (n > 0) {
        str += ones[n] + ' ';
      }
      return str.trim();
    };

    let word = '';
    let scaleIdx = 0;

    while (num > 0) {
      const chunk = num % 1000;
      if (chunk !== 0) {
        const chunkWords = formatHundreds(chunk);
        word = chunkWords + (scales[scaleIdx] ? ' ' + scales[scaleIdx] + ' ' : ' ') + word;
      }
      num = Math.floor(num / 1000);
      scaleIdx++;
    }

    return word.trim();
  }
}

window.QwtCommercialDocsHub = QwtCommercialDocsHub;

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('admin-view-docs')) {
    window.qwtDocs = new QwtCommercialDocsHub();
  }
});
