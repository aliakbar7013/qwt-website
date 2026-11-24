/**
 * QUAD WISE TECHNOLOGIES - ENTERPRISE LEAD & RFP CRM PORTAL
 * Live dashboard for managing incoming BOQ quotes, RFP dispatches, and OEM authorizations
 */

document.addEventListener('DOMContentLoaded', () => {
  initCrmPortal();
});

const DEFAULT_MOCK_LEADS = [
  {
    id: 'QWT-RFP-948211',
    timestamp: '2026-11-09T14:22:00Z',
    fullName: 'Tariq Al-Maktoum',
    workEmail: 't.maktoum@difc-capital.ae',
    phone: '+971 4 362 7700',
    company: 'DIFC Sovereign Asset Mgmt',
    solution: 'AI Compute & GPU',
    slaRequirement: 'Mission-Critical 24/7 (Tier IV)',
    estimatedBudget: 'AED 1,850,000',
    siraCompliant: true,
    notes: 'Requires 4x Dell XE9680 (32x H100 SXM5) with InfiniBand NDR spine-leaf and air-gapped on-premise LLM fine-tuning enclave.',
    status: 'OEM_APPROVED'
  },
  {
    id: 'QWT-RFP-883104',
    timestamp: '2026-11-08T11:45:00Z',
    fullName: 'Dr. Mariam Al-Nuaimi',
    workEmail: 'm.nuaimi@clevelandclinicabudhabi.ae',
    phone: '+971 2 659 0000',
    company: 'Abu Dhabi Health Authority HealthTech',
    solution: 'Enterprise Storage & HCI',
    slaRequirement: 'Tier-IV 99.999%',
    estimatedBudget: 'AED 940,000',
    siraCompliant: true,
    notes: 'PACS medical imaging archive migration to Pure Storage FlashBlade //S500 with zero-downtime synchronous DR mirror.',
    status: 'IN_AUDIT'
  },
  {
    id: 'QWT-RFP-772915',
    timestamp: '2026-11-07T09:10:00Z',
    fullName: 'David Sterling',
    workEmail: 'd.sterling@adnoc-upstream.ae',
    phone: '+971 2 707 0000',
    company: 'ADNOC Offshore Logistics & ELV',
    solution: 'ELV & Physical Security',
    slaRequirement: 'Mission-Critical 24/7',
    estimatedBudget: 'AED 620,000',
    siraCompliant: true,
    notes: '31-day enterprise CCTV refresh, explosive-proof thermal camera array, and biometric turnstiles for offshore terminal.',
    status: 'NEW_TRIAGE'
  },
  {
    id: 'QWT-RFP-665120',
    timestamp: '2026-11-06T16:30:00Z',
    fullName: 'Fahad Al-Hashimi',
    workEmail: 'f.hashimi@etisalat-cloud.ae',
    phone: '+971 4 222 5555',
    company: 'e& Sovereign Cloud Infrastructure',
    solution: 'Cybersecurity & SOC',
    slaRequirement: 'Tier-IV 99.999%',
    estimatedBudget: 'AED 2,400,000',
    siraCompliant: true,
    notes: 'Fortinet FortiGate 3000F multi-tenant cluster with post-quantum key exchange and sovereign security governance validation.',
    status: 'OEM_APPROVED'
  }
];

function initCrmPortal() {
  const tableBody = document.getElementById('crm-table-body');
  const countAll = document.getElementById('crm-count-all');
  const countNew = document.getElementById('crm-count-new');
  const countApproved = document.getElementById('crm-count-approved');
  const searchInput = document.getElementById('crm-search');
  const statusFilter = document.getElementById('crm-filter-status');
  const exportBtn = document.getElementById('crm-export-btn');
  const clearBtn = document.getElementById('crm-clear-btn');

  // Load from localStorage or use defaults
  let leads = [];
  try {
    const stored = localStorage.getItem('qwt_crm_leads');
    if (stored) {
      leads = JSON.parse(stored);
    } else {
      leads = [...DEFAULT_MOCK_LEADS];
      localStorage.setItem('qwt_crm_leads', JSON.stringify(leads));
    }
  } catch (e) {
    leads = [...DEFAULT_MOCK_LEADS];
  }

  const renderLeads = () => {
    if (!tableBody) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const filter = statusFilter ? statusFilter.value : 'all';

    const filtered = leads.filter(l => {
      const matchQuery = !query || 
        l.company.toLowerCase().includes(query) || 
        l.fullName.toLowerCase().includes(query) || 
        l.id.toLowerCase().includes(query) || 
        l.solution.toLowerCase().includes(query);
      const matchStatus = filter === 'all' || l.status === filter;
      return matchQuery && matchStatus;
    });

    // Update counters
    if (countAll) countAll.textContent = leads.length;
    if (countNew) countNew.textContent = leads.filter(l => l.status === 'NEW_TRIAGE').length;
    if (countApproved) countApproved.textContent = leads.filter(l => l.status === 'OEM_APPROVED').length;

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-12 text-slate-500 font-mono text-sm">
            <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
            No RFPs matching the active filter criteria.
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    tableBody.innerHTML = filtered.map(lead => {
      const statusBadge = lead.status === 'OEM_APPROVED' 
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">OEM APPROVED</span>`
        : lead.status === 'IN_AUDIT'
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-[#C9A24D]/10 text-[#C9A24D] border border-[#C9A24D]/30">IN AUDIT</span>`
        : `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">NEW TRIAGE</span>`;

      return `
        <tr class="border-b border-slate-800/60 hover:bg-slate-800/20 transition-colors">
          <td class="py-3 px-4 font-mono text-xs font-semibold text-[#C9A24D]">${lead.id}</td>
          <td class="py-3 px-4">
            <div class="text-sm font-semibold text-white">${lead.company}</div>
            <div class="text-xs text-slate-400">${lead.fullName} &bull; ${lead.workEmail}</div>
          </td>
          <td class="py-3 px-4 text-xs text-slate-300 font-medium">${lead.solution}</td>
          <td class="py-3 px-4 font-mono text-xs text-slate-200">${lead.estimatedBudget}</td>
          <td class="py-3 px-4">
            ${lead.siraCompliant 
              ? `<span class="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> SEC REQ</span>` 
              : `<span class="text-[11px] text-slate-500 font-mono">Standard</span>`}
          </td>
          <td class="py-3 px-4">${statusBadge}</td>
          <td class="py-3 px-4 text-right">
            <div class="flex items-center justify-end gap-1.5">
              <a href="admin-rfp-detail.html?id=${encodeURIComponent(lead.id)}" class="btn-gold px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-black flex items-center gap-1 transition-all hover:scale-105 shadow-sm" title="View Full BOQ Telemetry Dossier Page">
                <i data-lucide="file-text" class="w-3 h-3 text-black"></i>
                <span>Inspect BOQ</span>
              </a>
              <button onclick="window.prepareQuoteFromLead('${lead.id}')" class="px-2.5 py-1 rounded-lg bg-[#0A0D12] border border-slate-700 hover:border-[#C9A24D] hover:text-[#C9A24D] text-slate-300 text-xs font-mono transition-all flex items-center gap-1" title="Generate Quotation">
                <i data-lucide="receipt" class="w-3 h-3 text-[#C9A24D]"></i>
                <span class="hidden sm:inline">Quote</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  };

  if (searchInput) searchInput.addEventListener('input', renderLeads);
  if (statusFilter) statusFilter.addEventListener('change', renderLeads);

  // Export CSV
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const csv = [
        ['RFP ID', 'Timestamp', 'Company', 'Contact', 'Email', 'Phone', 'Domain', 'Budget', 'Security Spec', 'Status', 'Notes'],
        ...leads.map(l => [
          l.id, l.timestamp, `"${l.company}"`, `"${l.fullName}"`, l.workEmail, l.phone, `"${l.solution}"`, `"${l.estimatedBudget}"`, l.siraCompliant ? 'YES' : 'NO', l.status, `"${(l.notes||'').replace(/"/g, '""')}"`
        ])
      ].map(row => row.join(',')).join('\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `QWT-Enterprise-RFPs-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();

      if (window.qwtToast) window.qwtToast('Enterprise CSV Audit Log Exported', 'success');
    });
  }

  // Clear / Reset demo leads
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Reset CRM to pristine Dubai & Abu Dhabi demonstration RFPs?')) {
        leads = [...DEFAULT_MOCK_LEADS];
        localStorage.setItem('qwt_crm_leads', JSON.stringify(leads));
        renderLeads();
        if (window.qwtToast) window.qwtToast('Lead database re-seeded', 'info');
      }
    });
  }

  // Lead detail inspect modal
  window.prepareQuoteFromLead = (id) => {
    const lead = leads.find(l => l.id === id);
    if (!lead) return;
    if (window.switchAdminMainTab) {
      window.switchAdminMainTab('docs');
    }
    if (window.qwtDocs && window.qwtDocs.createFromLead) {
      window.qwtDocs.createFromLead(lead);
    }
  };

  window.viewLeadDetails = (id) => {
    window.location.href = `admin-rfp-detail.html?id=${encodeURIComponent(id)}`;
  };

  // Master Admin Section Tab Switching
  const adminTabs = [
    { id: 'crm', tabId: 'admin-tab-crm', viewId: 'admin-view-crm' },
    { id: 'contact', tabId: 'admin-tab-contact', viewId: 'admin-view-contact' },
    { id: 'docs', tabId: 'admin-tab-docs', viewId: 'admin-view-docs' },
    { id: 'blog', tabId: 'admin-tab-blog', viewId: 'admin-view-blog' },
    { id: 'channels', tabId: 'admin-tab-channels', viewId: 'admin-view-channels' },
    { id: 'users', tabId: 'admin-tab-users', viewId: 'admin-view-users' }
  ];

  window.switchAdminMainTab = (targetId) => {
    adminTabs.forEach(item => {
      const btn = document.getElementById(item.tabId);
      const view = document.getElementById(item.viewId);
      const isActive = (item.id === targetId);

      if (view) {
        if (isActive) {
          view.classList.remove('hidden');
        } else {
          view.classList.add('hidden');
        }
      }

      if (btn) {
        if (isActive) {
          btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'shadow-lg', 'shadow-[#C9A24D]/20');
          btn.classList.remove('bg-[#0F141C]', 'border', 'border-slate-700/80', 'text-slate-300');
        } else {
          btn.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'shadow-lg', 'shadow-[#C9A24D]/20');
          btn.classList.add('bg-[#0F141C]', 'border', 'border-slate-700/80', 'text-slate-300');
        }
      }
    });

    if (targetId === 'docs' && window.qwtDocs?.renderTable) {
      window.qwtDocs.renderTable();
      window.qwtDocs.updateMetrics();
    } else if (targetId === 'blog' && window.qwtStudio?.renderQueueTable) {
      window.qwtStudio.renderQueueTable();
    } else if (targetId === 'channels' && window.qwtChannels?.updateLivePreview) {
      window.qwtChannels.updateLivePreview();
    } else if (targetId === 'contact' && window.qwtContacts?.renderTable) {
      window.qwtContacts.renderTable();
    } else if (targetId === 'users' && window.qwtAuth?.renderUsersTable) {
      window.qwtAuth.renderUsersTable();
    }

    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };

  adminTabs.forEach(item => {
    const btn = document.getElementById(item.tabId);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.switchAdminMainTab(item.id);
      });
    }
  });

  renderLeads();

  // Handle action parameter (e.g. quote_from_lead)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'quote_from_lead') {
    const leadId = urlParams.get('leadId');
    setTimeout(() => {
      if (window.switchAdminMainTab) {
        window.switchAdminMainTab('docs');
      }
      if (leadId && window.prepareQuoteFromLead) {
        window.prepareQuoteFromLead(leadId);
      }
    }, 200);
  }
}
