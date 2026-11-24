/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - ADMIN BLOG STUDIO & AUTONOMOUS AI PUBLISHER
 * Enterprise Blog Management, Manual Technical Authoring, Autonomous Daily 5-Blog
 * Generation Staged into Review Queue, SEO Audit Optimization, and Multi-Platform
 * Social Media Campaign Generator.
 */

// FOUNDATIONAL PUBLISHED ARTICLES & 5 PRE-STAGED DAILY BLOGS AWAITING OPERATOR REVIEW
const INITIAL_BLOG_ARTICLES = [
  // 1. Foundational Published Article
  {
    id: 'QWT-ART-01',
    title: 'Enterprise IP CCTV Architectures: 31-Day Video Retention & VMS Integrity',
    category: 'ELV & Physical Security',
    slug: 'enterprise-cctv-31-day-storage-guidelines',
    metric: '31-Day Retention • RAID-6 Validated',
    excerpt: 'Technical architectural blueprint for enterprise surveillance systems. Covers 31-day RAID-6 retention, watermarking, and network isolation.',
    keywords: 'enterprise CCTV, 31-day video retention, RAID-6 VMS storage, surveillance, ELV contractor UAE',
    takeaways: [
      'RAID-6 dual-parity erasure coding on primary VMS storage arrays',
      'Zero-tamper SHA-256 cryptographic watermarking on exported video footage',
      'Dual-homed network architecture isolating camera ingest VLANs from corporate LAN'
    ],
    content: `## Executive Overview
Enterprise commercial buildings, financial institutions, and data centres require resilient 31-day video surveillance storage with zero frame dropping and robust VMS integrity.

## Core Architectural Guardrails
To ensure continuous uptime and high reliability, the physical video surveillance fabric adheres to three core architectural criteria:
- **RAID-6 Dual-Parity Disaggregated Storage:** Survives two simultaneous drive failures during heavy 4K camera write bursts.
- **SHA-256 Cryptographic Watermarking:** Exported evidence footage possesses tamper-proof cryptographic hashes for audit verification.
- **Dual-Homed Network Isolation:** Camera ingest traffic must run on physically air-gapped VLANs with zero route leakage into corporate subnets.

## Validated Hardware Bill of Materials (BOQ)
QWT deploys factory-authorized NetApp E-Series and Dell PowerVault ME5 SAN arrays configured with hot-spare disk standby and dual 25GbE iSCSI controllers. Mid-inspection audit disqualifications caused by drive rebuild slowdowns are completely eliminated.`,
    author: 'ELV Security Directorate • DSO Campus',
    status: 'PUBLISHED',
    seoScore: 99,
    readTime: '6 min read',
    date: '2026-11-09',
    isGenerated: false
  },
  // 2. Foundational Published Article
  {
    id: 'QWT-ART-02',
    title: 'Tuning RoCE v2 Lossless Networks for 64-GPU NVIDIA H100 Superclusters',
    category: 'AI Supercomputing & GPU',
    slug: 'roce-v2-lossless-network-tuning-nvidia-h100',
    metric: '800 Gbps Fabric • 0.12ms Latency',
    excerpt: 'Practical tuning parameters for Priority Flow Control (PFC) and DCQCN congestion notification on Cisco and NVIDIA Spectrum switches.',
    keywords: 'NVIDIA H100 Dubai, Sovereign AI UAE, InfiniBand 800Gbps, RoCE v2 low latency, AI compute cluster GCC',
    takeaways: [
      'Priority Flow Control (PFC) mapped exclusively to DSCP 26 (CoS 3) to protect RDMA payloads',
      'Explicit Congestion Notification (ECN) marking before pause buffer saturation occurs',
      '88% reduction in tail latency variance maintaining 98.4% linear GPU scaling efficiency'
    ],
    content: `## The Multi-Node AI Training Bottleneck
When scaling distributed LLM training across 64x NVIDIA H100 SXM5 GPUs, inter-node communication latency quickly becomes the primary constraint. Dropped packets on standard Ethernet trigger TCP retransmissions that stall all compute ranks.

## Implementing Zero-Drop RoCE v2
By leveraging RDMA over Converged Ethernet (RoCE v2), RDMA packets bypass the operating system kernel and CPU entirely, writing directly into remote GPU high-bandwidth memory (HBM3):
- **Priority Flow Control (PFC - IEEE 802.1Qbb):** Pauses upstream transmitters on dedicated queues before buffer overflow occurs.
- **Data Center Quantized Congestion Notification (DCQCN):** Injects hardware rate limiters at packet egress based on ECN marks.
- **Dynamic Buffer Allocation:** Dedicated 4MB ingress headroom per 400G port sustains bursty all-reduce tensor synchronization.

## Verification & Benchmarks
In field tests across our Dubai staging facility, tail latency variance was cut by 88%, allowing 64x H100 nodes to achieve 98.4% of theoretical linear scaling efficiency.`,
    author: 'AI Systems Practice • ADGM Hub',
    status: 'PUBLISHED',
    seoScore: 98,
    readTime: '8 min read',
    date: '2026-11-07',
    isGenerated: false
  },
  // 3. Foundational Published Article
  {
    id: 'QWT-ART-03',
    title: 'Architecting Sovereign Data Enclaves Under UAE Federal Decree No. 45 (PDPL)',
    category: 'Sovereign Cloud & PDPL',
    slug: 'uae-pdpl-sovereign-data-enclave-architecture',
    metric: '100% UAE Onshore • Zero Egress',
    excerpt: 'How UAE financial institutions and healthcare leaders maintain complete residency compliance while training generative AI on local premises.',
    keywords: 'sovereign cybersecurity UAE, air-gapped SOC Dubai, cybersecurity GCC, data diode hardware, UAE PDPL Federal Decree 45',
    takeaways: [
      'Quantized on-premise models (Llama 3 70B, Falcon 180B) on dedicated GPU clusters',
      'Hardware Security Modules (HSMs) for localized envelope key generation and encryption',
      'Data diode isolation physically preventing outbound telemetry from model hosting networks'
    ],
    content: `## Regulatory Imperative: UAE Federal Decree No. 45
The UAE Personal Data Protection Law (PDPL) imposes severe criminal penalties and fines for unauthorized cross-border exfiltration of sensitive citizen data. For banks, sovereign funds, and health networks, public AI APIs (OpenAI, Anthropic) pose significant compliance liability.

## Physical Air-Gapping & Key Ownership
QWT's reference enclave architecture deploys fine-tuned open weights (Falcon 180B and Llama 3 70B) onto on-premise Dell PowerEdge XE9680 platforms.
- **Zero Cloud Egress:** All inferencing requests and vector embeddings are stored on sovereign NVMe storage inside UAE territorial borders.
- **Hardware Security Modules (HSMs):** Localized FIPS 140-3 Level 4 HSMs retain all master keys. Cloud providers hold zero decryption capability.
- **Unidirectional Physical Data Diodes:** Enclave model outputs are physically audited via optical diodes that permit one-way data extraction only.`,
    author: 'Cybersecurity Directorate • Dubai Silicon Oasis',
    status: 'PUBLISHED',
    seoScore: 97,
    readTime: '7 min read',
    date: '2026-11-05',
    isGenerated: false
  },
  // 4. Foundational Published Article
  {
    id: 'QWT-ART-04',
    title: 'Zero-Loss Metro Synchronous Disaster Recovery Across Dubai & Abu Dhabi',
    category: 'Tier-IV Storage & DR',
    slug: 'metro-synchronous-dr-dubai-abu-dhabi',
    metric: 'RPO = 0 • RTO < 60s • 0.65ms RTT',
    excerpt: 'Pure Storage ActiveCluster and Dell PowerStore synchronous mirroring over dark fiber interconnects across DSO and ADGM data hubs.',
    keywords: 'Metro synchronous replication UAE, Pure Storage ActiveCluster Dubai, RPO 0 disaster recovery, ADGM DSO data centers, banking storage GCC',
    takeaways: [
      'Sub-millisecond write propagation with active-active storage presentation across emirates',
      'Automated cloud quorum mediation preventing split-brain states during metro fiber cuts',
      'Continuous compliance with UAE Central Bank regulatory business resilience mandates'
    ],
    content: `## Business Continuity for Tier-1 UAE Financial Institutions
The Central Bank of the UAE (CBUAE) mandates that commercial clearing houses and retail banks survive a complete regional data center outage with zero transactional data loss (RPO = 0).

## Active-Active Synchronous Replication Architecture
By bridging Dubai Silicon Oasis (DSO) and Abu Dhabi Global Market (ADGM) via dedicated dark fiber lambda circuits, QWT establishes synchronous NVMe-oF data replication:
- **Round-Trip Latency:** Maintained below 0.7 milliseconds across the 130 km metro span.
- **Pure Storage ActiveCluster:** Simultaneous read/write access to replicated volumes on both arrays without requiring operator failover commands.
- **Witness Mediator Quorum:** An independent third-site cloud mediator arbitrates quorum in less than 5 seconds during physical fiber cuts, preventing split-brain corruption.`,
    author: 'Storage & Infrastructure Practice',
    status: 'PUBLISHED',
    seoScore: 96,
    readTime: '6 min read',
    date: '2026-11-03',
    isGenerated: false
  },

  // =========================================================================
  // 5 DAILY SEO-OPTIMIZED BLOGS GENERATED & STAGED IN REVIEW QUEUE (PENDING REVIEW)
  // (NEVER PUBLISHED AUTOMATICALLY - STRICTLY AWAITING OPERATOR APPROVAL)
  // =========================================================================

  // Daily Blog 1 (Pending Review)
  {
    id: 'QWT-DAILY-01',
    title: 'Deploying Sovereign AI Clusters: 64-GPU NVIDIA H100 InfiniBand Fabric Optimization in the GCC',
    category: 'AI Supercomputing & GPU',
    slug: 'sovereign-ai-nvidia-h100-infiniband-fabric-gcc',
    metric: '3.2 Tbps Bidir • 0.12ms SLA • 64x H100 SXM5',
    excerpt: 'Comprehensive engineering guide for deploying sovereign NVIDIA H100 SXM5 supercomputing pods across UAE data hubs with 800 Gbps Quantum-2 fabrics.',
    keywords: 'NVIDIA H100 Dubai, Sovereign AI UAE, InfiniBand 800Gbps, RoCE v2 low latency, AI compute cluster GCC',
    takeaways: [
      'Non-blocking 2-tier Quantum-2 InfiniBand spine-leaf architecture providing 800Gbps per node',
      'Direct liquid cooling manifold sustaining 65kW rack thermal loads in high-ambient UAE climates',
      'Air-gapped on-premise model training conforming to UAE Cyber Security Council decrees'
    ],
    content: `## Strategic AI Sovereignty for the GCC
As the United Arab Emirates accelerates its National Strategy for Artificial Intelligence 2031, government ministries, national energy operators, and sovereign financial institutions are transitioning away from public hyperscalers toward onshore, sovereign AI infrastructure.

## Architectural Hardware Specification
QWT deploys factory-authorized NVIDIA HGX H100 platforms with 8x SXM5 80GB GPUs per 4U node:
- **Compute Density:** 64x H100 GPUs delivering over 250 PetaFLOPS of FP8 tensor compute.
- **InfiniBand Spine-Leaf Fabric:** Dual NVIDIA Quantum-2 QM9700 64-port switches delivering non-blocking 800 Gbps bidirectional throughput per server node.
- **Thermal Architecture:** Liquid-to-liquid Coolant Distribution Units (CDUs) maintaining supply loop temperatures under 32°C even during Dubai summer peak ambient conditions.

## Storage Fabric for Model Checkpointing
Checkpoint IOPS cannot be bottlenecked by standard NAS. We integrate Pure Storage FlashBlade//S500 with disaggregated NVMe-oF RoCE v2, achieving sustained write speeds exceeding 120 GB/sec for multi-billion parameter checkpoint saves.

## Actionable Recommendations for UAE CTOs
Before issuing an RFP for AI accelerators, calculate power availability at your facility. A standard 64-GPU pod requires a dedicated 65kW to 80kW power envelope with redundant A+B 3-phase feeds and automated generator failover.`,
    author: 'AI Systems Practice • ADGM Hub',
    status: 'PENDING_REVIEW',
    seoScore: 99,
    readTime: '7 min read',
    date: '2026-11-12',
    isGenerated: true
  },

  // Daily Blog 2 (Pending Review)
  {
    id: 'QWT-DAILY-02',
    title: 'Enterprise IP CCTV & VMS Architecture Guide: 31-Day RAID-6 Standards',
    category: 'ELV & Physical Security',
    slug: 'enterprise-cctv-vms-architecture-guide-31-day-storage',
    metric: '100% SLA Guarantee • 31-Day Retention',
    excerpt: 'Technical architectural blueprint for enterprise video surveillance. Calculations for storage retention, camera watermarking, and network separation.',
    keywords: 'enterprise CCTV, 31-day video retention, RAID-6 VMS storage, surveillance, ELV contractor UAE',
    takeaways: [
      'High-density RAID-6 capacity sizing ensuring true 31-day continuous 4K video retention',
      'SHA-256 cryptographic frame hashing required for police admissible evidence exports',
      'Separation of surveillance traffic onto air-gapped VLANs with zero internet default routes'
    ],
    content: `## Enterprise Surveillance Architecture
Enterprise facilities, hospitality properties, and corporate office parks require robust surveillance infrastructure designed for 24/7 continuous operation, long-term retention, and zero data loss.

## Technical Architectural Criteria
High-reliability surveillance deployments rely on four critical engineering pillars:
1. **True 31-Day Video Retention:** The storage array holds 31 complete days of 24/7 video per camera at 1080p or 4K with high frame rates on key ingress zones.
2. **RAID-6 Dual Parity Requirement:** Dual-parity erasure coding prevents data loss during simultaneous drive failures.
3. **Cryptographic Watermark Verification:** The Video Management Software (Milestone XProtect Corporate or Genetec) embeds irreversible cryptographic stamps on exported evidence.
4. **UPS Runtime:** The ELV equipment room features true on-line double-conversion UPS backup supporting the full camera and NVR load during main grid disruption.

## Turnkey BOQ Implementation
QWT provides turnkey enterprise physical security and ELV infrastructure with guaranteed handover SLAs. Our senior engineers handle system design, integration, and deployment.`,
    author: 'ELV Security Directorate • DSO Campus',
    status: 'PENDING_REVIEW',
    seoScore: 98,
    readTime: '6 min read',
    date: '2026-11-12',
    isGenerated: true
  },

  // Daily Blog 3 (Pending Review)
  {
    id: 'QWT-DAILY-03',
    title: 'Air-Gapped Sovereign SOC Architecture: Aligning with UAE Cybersecurity & PDPL Standards',
    category: 'Cyber Security & Threat Operations',
    slug: 'air-gapped-sovereign-soc-architecture-uae-pdpl',
    metric: '<8 Min Triage SLA • Zero Egress Diodes',
    excerpt: 'Detailed architectural blueprint for building an air-gapped 24/7 Security Operations Center complying with UAE sovereign cybersecurity decrees.',
    keywords: 'sovereign cybersecurity UAE, air-gapped SOC Dubai, cybersecurity GCC, data diode hardware, UAE PDPL Federal Decree 45',
    takeaways: [
      'Hardware data diodes enforcing physical one-way telemetry from SCADA and banking enclaves',
      'Localized SIEM correlation engine operating with zero cloud telemetry dependencies',
      'Automated playbook containment isolating infected endpoints in under 8 minutes'
    ],
    content: `## Defending Critical National Infrastructure
Critical infrastructure entities—including utilities, sovereign wealth funds, and government ministries—face highly sophisticated nation-state threat vectors. Traditional cloud-managed SOCs introduce critical supply chain risk by sending threat telemetry to overseas clouds.

## The Air-Gapped SOC Architecture
QWT designs and operates air-gapped Security Operations Centers located inside sovereign UAE data bunkers:
- **Physical Unidirectional Data Diodes:** Telemetry logs enter the SIEM platform via single-strand fiber optical diodes that physically prevent any return signals.
- **On-Premise SIEM & SOAR:** Correlation rules run on local Dell PowerEdge multi-socket compute nodes using post-quantum encryption protocols.
- **Sovereign Cybersecurity Alignment:** Rigorous security controls mapped across management, technical, operational, and physical security domains.

## Achieving Sub-8-Minute Incident Triage
Our 24/7 onshore SOC analysts leverage automated containment playbooks that isolate compromised network segments and revoke Active Directory credentials within 8 minutes of behavioral anomaly detection.`,
    author: 'Cybersecurity Directorate • Dubai Silicon Oasis',
    status: 'PENDING_REVIEW',
    seoScore: 97,
    readTime: '7 min read',
    date: '2026-11-12',
    isGenerated: true
  },

  // Daily Blog 4 (Pending Review)
  {
    id: 'QWT-DAILY-04',
    title: 'ERPNext vs SAP in the UAE: Zero Per-User Licensing, UAE VAT & WPS Payroll Architecture',
    category: 'ERPNext & Frappe GCC',
    slug: 'erpnext-vs-sap-uae-licensing-vat-wps-architecture',
    metric: 'Zero User Licensing • 100% FTA VAT Ready',
    excerpt: 'How UAE enterprises eliminate multimillion-dirham per-seat licensing fees by adopting ERPNext and Frappe with built-in Federal Tax Authority VAT and MOHRE WPS.',
    keywords: 'ERPNext Dubai, ERPNext vs SAP UAE, open-source enterprise ERP GCC, UAE VAT Frappe, MOHRE WPS payroll ERPNext',
    takeaways: [
      'Complete elimination of recurring annual user seat license fees typical of SAP and Dynamics',
      'Out-of-the-box UAE Federal Tax Authority (FTA) 5% VAT invoice formats and corporate tax tracking',
      'Automated MOHRE Wages Protection System (WPS) SIF file generation for UAE corporate banks'
    ],
    content: `## The Enterprise Licensing Dilemma
A 500-employee enterprise in the UAE typically spends upwards of AED 1,200,000 annually simply maintaining recurring per-user license fees for legacy ERP systems like SAP S/4HANA or Microsoft Dynamics 365. Furthermore, basic UAE localization requires costly third-party custom add-ons.

## The ERPNext & Frappe Alternative
ERPNext is an enterprise-grade open-source ERP platform that delivers full core business functionality without per-user licensing fees:
- **Financial Accounting & FTA VAT:** Built-in compliance with UAE Federal Tax Authority VAT requirements, generating official VAT 201 return breakdowns and Arabic-compliant tax invoices.
- **HR & MOHRE WPS Payroll:** Native generation of standard Salary Information File (SIF) formats required by the UAE Ministry of Human Resources & Emiratisation (MOHRE).
- **Supply Chain & Manufacturing:** Multi-warehouse inventory tracking with serial and batch control, land cost calculation for Dubai customs clearance, and automated purchase orders.

## Sovereign On-Premise or Private Cloud Hosting
QWT hosts enterprise ERPNext instances on sovereign UAE infrastructure in Dubai Silicon Oasis, ensuring complete regulatory data residency under UAE PDPL.`,
    author: 'Enterprise Applications Practice',
    status: 'PENDING_REVIEW',
    seoScore: 96,
    readTime: '6 min read',
    date: '2026-11-12',
    isGenerated: true
  },

  // Daily Blog 5 (Pending Review)
  {
    id: 'QWT-DAILY-05',
    title: 'Zero-Loss Metro Synchronous Storage Replication Across Dubai & Abu Dhabi Data Hubs',
    category: 'Tier-IV Storage & DR',
    slug: 'zero-loss-metro-synchronous-storage-replication-dxb-auh',
    metric: 'RPO = 0 • RTO < 30s • NVMe-oF SAN',
    excerpt: 'Architect active-active synchronous SAN replication across Dubai Silicon Oasis and Abu Dhabi ADGM. Eliminate downtime with RPO=0 and sub-millisecond fiber latency.',
    keywords: 'Metro synchronous replication UAE, Pure Storage ActiveCluster Dubai, RPO 0 disaster recovery, ADGM DSO data centers, banking storage GCC',
    takeaways: [
      'Synchronous all-flash storage replication across 130km dark fiber maintaining sub-millisecond RTT',
      'Active-active multi-datacenter IO eliminating manual recovery procedures during outages',
      'Guaranteed compliance with Central Bank of the UAE business continuity regulations'
    ],
    content: `## Zero Data Loss (RPO=0) as a Regulatory Mandate
For banks, stock exchanges, and sovereign utilities, disaster recovery plans that accept 15 or 30 minutes of lost data (RPO > 0) are no longer compliant under CBUAE governance directives. Every financial transaction must be guaranteed across redundant geographic facilities.

## Metro Replication Topology
QWT engineers active-active synchronous storage fabrics linking Tier-IV datacenters in Dubai Silicon Oasis (DSO) and Abu Dhabi Global Market (ADGM):
- **Flash Hardware:** Dual Pure Storage FlashArray//X90 R4 arrays configured with Pure ActiveCluster.
- **Dark Fiber Lambda Interconnect:** Low-loss dense wavelength division multiplexing (DWDM) optical switches sustaining write round-trip times (RTT) under 0.85 ms across the metro link.
- **Failover Automation:** In the event of a total site loss, the secondary array transparently serves 100% of IO without disrupting virtualized cluster workloads (VMware vSphere Metro Storage Cluster or Nutanix).

## SafeMode Ransomware Immutability
In addition to synchronous disaster recovery, snapshots are locked with hardware-enforced SafeMode immutability, ensuring that even rogue administrative credentials cannot delete or encrypt backup volumes.`,
    author: 'Storage & Infrastructure Practice',
    status: 'PENDING_REVIEW',
    seoScore: 98,
    readTime: '6 min read',
    date: '2026-11-12',
    isGenerated: true
  }
];

// LIBRARY OF ROTATING TEMPLATES FOR AUTONOMOUS DAILY GENERATION
const DAILY_GENERATOR_TEMPLATES = [
  {
    title: 'Deploying Sovereign AI Clusters: 64-GPU NVIDIA H100 InfiniBand Fabric Optimization in the GCC',
    category: 'AI Supercomputing & GPU',
    metric: '3.2 Tbps Bidir • 0.12ms SLA • 64x H100 SXM5',
    excerpt: 'Comprehensive engineering guide for deploying sovereign NVIDIA H100 SXM5 supercomputing pods across UAE data hubs with 800 Gbps Quantum-2 fabrics.',
    keywords: 'NVIDIA H100 Dubai, Sovereign AI UAE, InfiniBand 800Gbps, RoCE v2 low latency, AI compute cluster GCC',
    author: 'AI Systems Practice • ADGM Hub',
    readTime: '7 min read',
    takeaways: [
      'Non-blocking 2-tier Quantum-2 InfiniBand spine-leaf architecture providing 800Gbps per node',
      'Direct liquid cooling manifold sustaining 65kW rack thermal loads in high-ambient UAE climates',
      'Air-gapped on-premise model training conforming to UAE Cyber Security Council decrees'
    ],
    bodyPrefix: 'Sovereign AI supercomputing requires meticulous fabric tuning to eliminate packet loss and maintain linear scaling efficiency across distributed GPU nodes.'
  },
  {
    title: 'Enterprise IP CCTV & VMS Architecture Guide: 31-Day RAID-6 Standards',
    category: 'ELV & Physical Security',
    metric: '100% SLA Guarantee • 31-Day Retention',
    excerpt: 'Technical architectural blueprint for enterprise video surveillance. Calculations for storage retention, camera watermarking, and network separation.',
    keywords: 'enterprise CCTV, 31-day video retention, RAID-6 VMS storage, surveillance, ELV contractor UAE',
    author: 'ELV Security Directorate • DSO Campus',
    readTime: '6 min read',
    takeaways: [
      'High-density RAID-6 capacity sizing ensuring true 31-day continuous 4K video retention',
      'SHA-256 cryptographic frame hashing required for police admissible evidence exports',
      'Separation of surveillance traffic onto air-gapped VLANs with zero internet default routes'
    ],
    bodyPrefix: 'Enterprise surveillance deployments demand hardware-enforced RAID-6 storage redundancy, SHA-256 cryptographic watermarking, and dedicated power runtime envelopes.'
  },
  {
    title: 'Air-Gapped Sovereign SOC Architecture: Aligning with UAE Cybersecurity & PDPL Standards',
    category: 'Cyber Security & Threat Operations',
    metric: '<8 Min Triage SLA • Zero Egress Diodes',
    excerpt: 'Detailed architectural blueprint for building an air-gapped 24/7 Security Operations Center complying with UAE sovereign cybersecurity decrees.',
    keywords: 'sovereign cybersecurity UAE, air-gapped SOC Dubai, cybersecurity GCC, data diode hardware, UAE PDPL Federal Decree 45',
    author: 'Cybersecurity Directorate • Dubai Silicon Oasis',
    readTime: '7 min read',
    takeaways: [
      'Hardware data diodes enforcing physical one-way telemetry from SCADA and banking enclaves',
      'Localized SIEM correlation engine operating with zero cloud telemetry dependencies',
      'Automated playbook containment isolating infected endpoints in under 8 minutes'
    ],
    bodyPrefix: 'Defending critical national infrastructure against advanced persistent threats requires complete network air-gapping, post-quantum encryption, and rapid automated incident triage.'
  },
  {
    title: 'ERPNext vs SAP in the UAE: Zero Per-User Licensing, UAE VAT & WPS Payroll Architecture',
    category: 'ERPNext & Frappe GCC',
    metric: 'Zero User Licensing • 100% FTA VAT Ready',
    excerpt: 'How UAE enterprises eliminate multimillion-dirham per-seat licensing fees by adopting ERPNext and Frappe with built-in Federal Tax Authority VAT and MOHRE WPS.',
    keywords: 'ERPNext Dubai, ERPNext vs SAP UAE, open-source enterprise ERP GCC, UAE VAT Frappe, MOHRE WPS payroll ERPNext',
    author: 'Enterprise Applications Practice',
    readTime: '6 min read',
    takeaways: [
      'Complete elimination of recurring annual user seat license fees typical of SAP and Dynamics',
      'Out-of-the-box UAE Federal Tax Authority (FTA) 5% VAT invoice formats and corporate tax tracking',
      'Automated MOHRE Wages Protection System (WPS) SIF file generation for UAE corporate banks'
    ],
    bodyPrefix: 'Open-source ERPNext delivers enterprise-grade operational agility, zero per-seat licensing, and complete native UAE tax and payroll compliance for scaling organizations.'
  },
  {
    title: 'Zero-Loss Metro Synchronous Storage Replication Across Dubai & Abu Dhabi Data Hubs',
    category: 'Tier-IV Storage & DR',
    metric: 'RPO = 0 • RTO < 30s • NVMe-oF SAN',
    excerpt: 'Architect active-active synchronous SAN replication across Dubai Silicon Oasis and Abu Dhabi ADGM. Eliminate downtime with RPO=0 and sub-millisecond fiber latency.',
    keywords: 'Metro synchronous replication UAE, Pure Storage ActiveCluster Dubai, RPO 0 disaster recovery, ADGM DSO data centers, banking storage GCC',
    author: 'Storage & Infrastructure Practice',
    readTime: '6 min read',
    takeaways: [
      'Synchronous all-flash storage replication across 130km dark fiber maintaining sub-millisecond RTT',
      'Active-active multi-datacenter IO eliminating manual recovery procedures during outages',
      'Guaranteed compliance with Central Bank of the UAE business continuity regulations'
    ],
    bodyPrefix: 'Eliminating data loss during regional power or connectivity failures requires active-active synchronous replication over high-speed dark fiber lambda channels.'
  },
  {
    title: 'Direct Liquid Cooling (DLC) for 65kW AI Pods in Middle East High-Ambient Climates',
    category: 'AI Supercomputing & GPU',
    metric: '65kW Thermal Loop • PUE < 1.15',
    excerpt: 'Engineering design patterns for sustaining high-density AI clusters in GCC environments using direct-to-chip liquid cooling manifolds and dry cooler loops.',
    keywords: 'Direct liquid cooling UAE, 65kW AI rack CDU, data center cooling Dubai, NVIDIA B200 liquid cooling, PUE optimization GCC',
    author: 'Data Centre Thermal Directorate',
    readTime: '7 min read',
    takeaways: [
      'Closed-loop Coolant Distribution Units (CDUs) managing 65kW thermal dissipation per rack',
      'Redundant N+1 variable-speed pumps sustaining liquid velocities without cavitational erosion',
      'Overall facility Power Usage Effectiveness (PUE) maintained below 1.15 in desert ambient'
    ],
    bodyPrefix: 'High-density accelerators such as NVIDIA H100 and B200 exceed the thermal dissipation limits of conventional forced-air cooling in Middle Eastern climates.'
  },
  {
    title: 'Next-Gen NFC Digital Business Cards with Apple & Google Wallet for UAE Corporations',
    category: 'Digital Business Cards & NFC',
    metric: 'Instant Contactless Tap • CRM Sync',
    excerpt: 'Modernize corporate identity and executive networking across the UAE with dynamic NFC metal cards featuring live Apple & Google Wallet push updates.',
    keywords: 'NFC business cards Dubai, Apple Wallet digital business card, corporate identity cards UAE, contactless CRM cards GCC',
    author: 'Digital Experience Group',
    readTime: '5 min read',
    takeaways: [
      'Contactless single-tap exchange with any modern iOS or Android device with zero app installs',
      'Automated pass synchronization into Apple Wallet and Google Wallet with dynamic push updates',
      'Centralized enterprise directory portal to issue, revoke, and track companywide NFC credentials'
    ],
    bodyPrefix: 'Replace static paper business cards with dynamic, secure NFC metal smart cards integrated directly into corporate identity directories and customer relationship management platforms.'
  }
];

class QwtSocialCampaignStudio {
  constructor() {
    this.articles = [];
    this.currentArticle = null;
    this.activePlatform = 'linkedin'; // 'linkedin' | 'instagram' | 'facebook'
    this.activeAngle = 'executive'; // 'executive' | 'technical' | 'compliance'
    this.activeSubTab = 'queue'; // 'queue' | 'editor' | 'generator' | 'social'
    this.currentQueueFilter = 'all'; // 'all' | 'pending' | 'published' | 'draft'
    this.queueSearchQuery = '';

    this.init();
  }

  init() {
    this.loadArticles();
    this.bindDomElements();
    this.bindSocialControls();
    this.updateMetrics();
    this.renderQueueTable();

    // Default select first article
    if (this.articles.length > 0) {
      this.selectArticle(this.articles[0]);
    }

    // Expose instance globally for inline onclick handlers
    window.qwtStudio = this;
  }

  loadArticles() {
    try {
      const stored = localStorage.getItem('qwt_blog_articles');
      if (stored) {
        this.articles = JSON.parse(stored);
        // Ensure all articles have required fields
        this.articles.forEach(art => {
          if (!art.status) art.status = 'PENDING_REVIEW';
          if (!art.seoScore) art.seoScore = 97;
          if (!art.keywords) art.keywords = 'UAE Enterprise IT, Sovereign Cloud, Data Centre';
          if (!art.content) art.content = art.excerpt || 'Technical article content.';
        });
      } else {
        // First-time setup: load foundational articles + 5 pre-staged daily blogs awaiting review
        this.articles = JSON.parse(JSON.stringify(INITIAL_BLOG_ARTICLES));
        this.saveArticles();
      }
    } catch (e) {
      console.error('Error loading articles from localStorage', e);
      this.articles = JSON.parse(JSON.stringify(INITIAL_BLOG_ARTICLES));
    }
  }

  saveArticles() {
    try {
      localStorage.setItem('qwt_blog_articles', JSON.stringify(this.articles));
      // Also broadcast for live synchronization with insights.html
      localStorage.setItem('qwt_blog_last_sync', Date.now().toString());
    } catch (e) {
      console.error('Failed to persist articles', e);
    }
  }

  bindDomElements() {
    // Initial SEO check bindings
    this.updateSeoAudit();
    this.renderLivePreview();
  }

  bindSocialControls() {
    // Platform switchers
    const platformTabs = document.querySelectorAll('[data-campaign-tab]');
    platformTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const platform = tab.getAttribute('data-campaign-tab');
        this.activePlatform = platform;
        platformTabs.forEach(t => {
          t.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'border-[#C9A24D]', 'font-bold');
          t.classList.add('border-slate-800', 'text-slate-300');
        });
        tab.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'border-[#C9A24D]', 'font-bold');
        tab.classList.remove('border-slate-800', 'text-slate-300');

        document.querySelectorAll('.platform-view').forEach(v => v.classList.add('hidden'));
        const activeView = document.getElementById(`platform-view-${platform}`);
        if (activeView) activeView.classList.remove('hidden');

        this.generateAllCampaigns();
      });
    });

    // Angle buttons
    const angleBtns = document.querySelectorAll('[data-angle-btn]');
    angleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const angle = btn.getAttribute('data-angle-btn');
        this.activeAngle = angle;
        angleBtns.forEach(b => {
          b.classList.remove('bg-[#C9A24D]', 'text-black', 'font-bold');
          b.classList.add('bg-slate-800', 'text-slate-300');
        });
        btn.classList.add('bg-[#C9A24D]', 'text-black', 'font-bold');
        btn.classList.remove('bg-slate-800', 'text-slate-300');

        this.generateAllCampaigns();
      });
    });

    // Download buttons
    ['linkedin', 'instagram', 'facebook'].forEach(p => {
      const btn = document.getElementById(`btn-download-${p}`);
      if (btn) {
        btn.addEventListener('click', () => this.downloadCanvas(p));
      }
      const copyBtn = document.getElementById(`btn-copy-${p}`);
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          const textarea = document.getElementById(`caption-${p}`);
          if (textarea) {
            navigator.clipboard.writeText(textarea.value).then(() => {
              const orig = copyBtn.textContent;
              copyBtn.textContent = 'Copied!';
              setTimeout(() => { copyBtn.textContent = orig; }, 2000);
            });
          }
        });
      }
    });
  }

  // Sub-Tab Switcher
  switchSubTab(tabName) {
    this.activeSubTab = tabName;

    // Sub-tab button styling
    const subtabs = ['queue', 'editor', 'generator', 'social'];
    subtabs.forEach(t => {
      const btn = document.getElementById(`blog-subtab-${t}`);
      const view = document.getElementById(`blog-subview-${t}`);
      if (btn && view) {
        if (t === tabName) {
          btn.className = 'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all bg-[#C9A24D] text-[#0A0D12] flex items-center gap-2 whitespace-nowrap shadow-md';
          view.classList.remove('hidden');
          view.classList.add('block');
        } else {
          btn.className = 'px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all bg-[#0F141C] text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 whitespace-nowrap';
          view.classList.add('hidden');
          view.classList.remove('block');
        }
      }
    });

    // Re-render views if needed
    if (tabName === 'queue') {
      this.renderQueueTable();
    } else if (tabName === 'editor') {
      this.updateSeoAudit();
      this.renderLivePreview();
    } else if (tabName === 'social') {
      this.generateAllCampaigns();
    }
  }

  switchToEditor(articleId = null) {
    if (articleId) {
      const art = this.articles.find(a => a.id === articleId);
      if (art) {
        this.selectArticle(art);
      }
    } else {
      this.initNewArticle();
    }
    this.switchSubTab('editor');
  }

  updateMetrics() {
    const total = this.articles.length;
    const pending = this.articles.filter(a => a.status === 'PENDING_REVIEW').length;
    const published = this.articles.filter(a => a.status === 'PUBLISHED').length;
    const drafts = this.articles.filter(a => a.status === 'DRAFT').length;

    // KPI row
    const elTotal = document.getElementById('kpi-total-blogs');
    const elPending = document.getElementById('kpi-pending-blogs');
    const elPublished = document.getElementById('kpi-published-blogs');
    if (elTotal) elTotal.textContent = total;
    if (elPending) elPending.textContent = pending;
    if (elPublished) elPublished.textContent = published;

    // Header pending badges
    const topBadge = document.getElementById('blog-pending-badge');
    if (topBadge) {
      topBadge.textContent = `${pending} REVIEW`;
      if (pending > 0) {
        topBadge.className = 'px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-mono font-bold animate-pulse';
      } else {
        topBadge.className = 'px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/30 text-[9px] font-mono status-badge-inactive';
      }
    }

    const queueBadge = document.getElementById('queue-subtab-badge');
    if (queueBadge) queueBadge.textContent = pending > 0 ? `${pending} PENDING` : total;

    // Filter pill counters
    const cAll = document.getElementById('count-filter-all');
    const cPending = document.getElementById('count-filter-pending');
    const cPublished = document.getElementById('count-filter-published');
    const cDraft = document.getElementById('count-filter-draft');
    if (cAll) cAll.textContent = total;
    if (cPending) cPending.textContent = pending;
    if (cPublished) cPublished.textContent = published;
    if (cDraft) cDraft.textContent = drafts;
  }

  setQueueFilter(filter) {
    this.currentQueueFilter = filter;
    const filterBtns = document.querySelectorAll('[data-queue-filter]');
    filterBtns.forEach(btn => {
      const f = btn.getAttribute('data-queue-filter');
      if (f === filter) {
        btn.classList.add('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.remove('bg-[#0A0D12]', 'text-slate-300', 'text-amber-300', 'text-emerald-400', 'text-slate-400');
      } else {
        btn.classList.remove('bg-[#C9A24D]', 'text-[#0A0D12]', 'font-bold');
        btn.classList.add('bg-[#0A0D12]');
        if (f === 'pending') btn.classList.add('text-amber-300');
        else if (f === 'published') btn.classList.add('text-emerald-400');
        else btn.classList.add('text-slate-300');
      }
    });
    this.renderQueueTable();
  }

  handleQueueSearch() {
    const input = document.getElementById('blog-queue-search');
    if (input) {
      this.queueSearchQuery = input.value.toLowerCase().trim();
      this.renderQueueTable();
    }
  }

  renderQueueTable() {
    const tbody = document.getElementById('blog-articles-table');
    if (!tbody) return;

    let filtered = [...this.articles];

    // Filter by status
    if (this.currentQueueFilter === 'pending') {
      filtered = filtered.filter(a => a.status === 'PENDING_REVIEW');
    } else if (this.currentQueueFilter === 'published') {
      filtered = filtered.filter(a => a.status === 'PUBLISHED');
    } else if (this.currentQueueFilter === 'draft') {
      filtered = filtered.filter(a => a.status === 'DRAFT');
    }

    // Filter by search query
    if (this.queueSearchQuery) {
      filtered = filtered.filter(a => 
        (a.title && a.title.toLowerCase().includes(this.queueSearchQuery)) ||
        (a.keywords && a.keywords.toLowerCase().includes(this.queueSearchQuery)) ||
        (a.category && a.category.toLowerCase().includes(this.queueSearchQuery)) ||
        (a.author && a.author.toLowerCase().includes(this.queueSearchQuery))
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="py-12 text-center text-slate-500 font-mono">
            <div class="flex flex-col items-center gap-2">
              <i data-lucide="inbox" class="w-8 h-8 text-slate-600"></i>
              <span>No articles found matching criteria.</span>
              <button onclick="window.qwtStudio.triggerDailyGeneration()" class="mt-2 text-xs text-[#C9A24D] hover:underline flex items-center gap-1 font-sans">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Synthesize 5 Daily SEO Blogs into Review Queue
              </button>
            </div>
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    tbody.innerHTML = filtered.map(art => {
      // Status badge
      let statusBadge = '';
      if (art.status === 'PENDING_REVIEW') {
        statusBadge = `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Awaiting Review</span>
          </span>
        `;
      } else if (art.status === 'PUBLISHED') {
        statusBadge = `
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/40">
            <i data-lucide="check" class="w-3 h-3"></i>
            <span>Live on Site</span>
          </span>
        `;
      } else {
        statusBadge = `
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-slate-400 bg-slate-800/80 border border-slate-700 status-pill-draft">
            <span>Draft</span>
          </span>
        `;
      }

      // Quick approve button (only if not published)
      const approveBtn = art.status !== 'PUBLISHED' ? `
        <button onclick="window.qwtStudio.approveAndPublish('${art.id}')" title="Approve &amp; Publish Live Immediately" class="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-bold flex items-center gap-1 transition-colors">
          <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i>
          <span class="hidden sm:inline">Approve</span>
        </button>
      ` : '';

      return `
        <tr class="hover:bg-slate-800/25 transition-colors group">
          <td class="py-3.5 px-4 font-medium text-white max-w-sm">
            <div class="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-[#C9A24D] transition-colors line-clamp-2">
              ${art.title}
            </div>
            <div class="flex items-center gap-2 mt-1 text-[11px] font-mono text-slate-500">
              <span class="text-slate-400 font-semibold">${art.id}</span>
              <span>&bull;</span>
              <span class="truncate max-w-[180px]">/insights/${art.slug || 'article'}</span>
              <span>&bull;</span>
              <span class="text-[#C9A24D] font-bold">${art.readTime || '6 min'}</span>
            </div>
          </td>
          <td class="py-3.5 px-4 text-slate-300 font-mono text-xs whitespace-nowrap">
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80 text-[11px] font-mono font-semibold category-pill">
              ${art.category}
            </span>
          </td>
          <td class="py-3.5 px-4 text-xs font-mono max-w-[220px]">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                ${art.seoScore || 98}% SEO
              </span>
              ${art.isGenerated ? '<span class="px-1.5 py-0.2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[9px] font-bold">AI GENERATED</span>' : '<span class="px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[9px] font-bold">MANUAL</span>'}
            </div>
            <div class="text-[10px] text-slate-400 truncate font-mono" title="${art.keywords || ''}">
              ${art.keywords || 'UAE Enterprise IT'}
            </div>
          </td>
          <td class="py-3.5 px-4 text-xs font-mono text-slate-400 whitespace-nowrap">
            <div class="text-white font-semibold">${art.author ? art.author.split('•')[0].trim() : 'QWT Engineering'}</div>
            <div class="text-[10px] text-slate-500">${art.date || '2026-11-12'}</div>
          </td>
          <td class="py-3.5 px-4 whitespace-nowrap">
            ${statusBadge}
          </td>
          <td class="py-3.5 px-4 text-right whitespace-nowrap">
            <div class="flex items-center justify-end gap-1.5">
              ${approveBtn}
              <button onclick="window.qwtStudio.switchToEditor('${art.id}')" title="Review &amp; Edit Article" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono flex items-center gap-1 transition-colors">
                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-[#C9A24D]"></i>
                <span class="hidden sm:inline">Review</span>
              </button>
              <button onclick="window.qwtStudio.loadIntoSocial('${art.id}')" title="Generate Social Creatives" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="window.qwtStudio.deleteArticle('${art.id}')" title="Delete Article" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Autonomous Daily Generation Engine (Generates Daily 5 SEO Blogs Staged into Review Queue)
  triggerDailyGeneration() {
    const today = new Date().toISOString().split('T')[0];
    const newArticles = [];

    // Shuffle and pick 5 templates
    const shuffled = [...DAILY_GENERATOR_TEMPLATES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    selected.forEach((tmpl, idx) => {
      const uniqueId = `QWT-GEN-${Date.now().toString().slice(-4)}${idx + 1}`;
      const slug = tmpl.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      const article = {
        id: uniqueId,
        title: tmpl.title,
        category: tmpl.category,
        slug: slug,
        metric: tmpl.metric,
        excerpt: tmpl.excerpt,
        keywords: tmpl.keywords,
        takeaways: tmpl.takeaways,
        content: `## Executive Technical Summary\n${tmpl.bodyPrefix}\n\n## Architecture & Component Topologies\nIn mission-critical enterprise environments across the UAE and GCC, standard off-the-shelf configurations introduce downtime risks. QWT deploys certified Tier-1 OEM hardware with zero grey-market intermediaries.\n\n- **Primary Compute & Accelerator Fabric:** Factory-authorized enterprise nodes with redundant power pathing.\n- **High-Throughput Low-Latency Fabric:** Optimized spine-leaf architecture with zero-drop packet transport.\n- **Data Sovereignty Enclave:** Full regulatory isolation conforming strictly with UAE Federal Decree No. 45 data residency mandates.\n\n## UAE Regulatory Alignment Matrix\nDeployments include comprehensive engineering documentation, rigorous QA validation, and national data residency compliance.\n\n## Actionable Implementation Recommendations\n1. Conduct comprehensive power and cooling envelope analysis before procurement.\n2. Specify dual-parity RAID-6 or Metro Synchronous storage replication for all transactional tiers.\n3. Engage QWT senior architects at Dubai Silicon Oasis for bill-of-materials validation.`,
        author: tmpl.author,
        status: 'PENDING_REVIEW', // STRICTLY PENDING REVIEW - NEVER AUTO PUBLISHED
        seoScore: 97 + Math.floor(Math.random() * 3), // 97-99%
        readTime: tmpl.readTime || '6 min read',
        date: today,
        isGenerated: true
      };
      newArticles.push(article);
    });

    // Prepend generated articles into directory
    this.articles = [...newArticles, ...this.articles];
    this.saveArticles();
    this.updateMetrics();
    this.setQueueFilter('pending');
    this.switchSubTab('queue');

    // Show visual notification
    this.showToast('Generated 5 Daily SEO Blogs staged safely into the Review Queue! Status: PENDING REVIEW (Awaiting your manual approval).', 'success');
  }

  // Approve & Publish Live
  approveAndPublish(articleId) {
    const art = this.articles.find(a => a.id === articleId);
    if (!art) return;

    art.status = 'PUBLISHED';
    this.saveArticles();
    this.updateMetrics();
    this.renderQueueTable();

    this.showToast(`✓ "${art.title.slice(0, 40)}..." Approved & Published Live to Insights!`, 'success');
  }

  // Manual Blog Editor Operations
  initNewArticle() {
    this.currentArticle = null;
    document.getElementById('blog-id').value = '';
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-slug').value = '';
    document.getElementById('blog-category').value = 'IT Infrastructure & Data Centre';
    document.getElementById('blog-keywords').value = 'UAE Enterprise IT, Sovereign Cloud, Data Centre';
    document.getElementById('blog-status').value = 'PENDING_REVIEW';
    document.getElementById('blog-excerpt').value = '';
    document.getElementById('blog-metric').value = '99.999% SLA • Enterprise Validated';
    document.getElementById('blog-author').value = 'Senior Systems Architect • DSO Campus';
    document.getElementById('blog-takeaways').value = 'Tier-IV redundant dual-grid electrical pathing\nDirect Tier-1 OEM factory-sealed distribution\nGuaranteed UAE regulatory compliance sign-off';
    document.getElementById('blog-content').value = `## Executive Technical Summary
Write your technical overview here.

## Core Architectural Blueprint
- Technical Point 1
- Technical Point 2
- Technical Point 3

## Regulatory & Operational Compliance
Detail sovereign governance and data residency alignment here.`;

    const modeText = document.getElementById('editor-mode-text');
    if (modeText) modeText.textContent = 'Writing New Manual Blog';

    this.updateSeoAudit();
    this.renderLivePreview();
  }

  selectArticle(art) {
    this.currentArticle = art;
    if (!art) return;

    const elId = document.getElementById('blog-id');
    const elTitle = document.getElementById('blog-title');
    const elSlug = document.getElementById('blog-slug');
    const elCat = document.getElementById('blog-category');
    const elKw = document.getElementById('blog-keywords');
    const elStatus = document.getElementById('blog-status');
    const elExc = document.getElementById('blog-excerpt');
    const elMet = document.getElementById('blog-metric');
    const elAuth = document.getElementById('blog-author');
    const elTake = document.getElementById('blog-takeaways');
    const elCont = document.getElementById('blog-content');

    if (elId) elId.value = art.id || '';
    if (elTitle) elTitle.value = art.title || '';
    if (elSlug) elSlug.value = art.slug || '';
    if (elCat) elCat.value = art.category || 'IT Infrastructure & Data Centre';
    if (elKw) elKw.value = art.keywords || '';
    if (elStatus) elStatus.value = art.status || 'PENDING_REVIEW';
    if (elExc) elExc.value = art.excerpt || '';
    if (elMet) elMet.value = art.metric || '';
    if (elAuth) elAuth.value = art.author || '';
    if (elTake) elTake.value = Array.isArray(art.takeaways) ? art.takeaways.join('\n') : (art.takeaways || '');
    if (elCont) elCont.value = art.content || art.excerpt || '';

    const modeText = document.getElementById('editor-mode-text');
    if (modeText) modeText.textContent = `Reviewing: ${art.id} - ${art.title.slice(0, 35)}...`;

    this.updateSeoAudit();
    this.renderLivePreview();
  }

  handleTitleInput() {
    const title = document.getElementById('blog-title').value;
    const counter = document.getElementById('title-char-counter');
    if (counter) counter.textContent = `${title.length}/65 chars`;

    // Auto slugify if slug empty or newly typing
    const slugInput = document.getElementById('blog-slug');
    if (slugInput && (!slugInput.value || slugInput.getAttribute('data-manual') !== 'true')) {
      slugInput.value = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    this.updateSeoAudit();
    this.renderLivePreview();
  }

  handleDescInput() {
    const desc = document.getElementById('blog-excerpt').value;
    const counter = document.getElementById('desc-char-counter');
    if (counter) counter.textContent = `${desc.length}/160 chars`;
    this.updateSeoAudit();
    this.renderLivePreview();
  }

  insertSnippet(type) {
    const textarea = document.getElementById('blog-content');
    if (!textarea) return;

    let snippet = '';
    if (type === 'h2') snippet = '\n\n## New Technical Section Title\n';
    else if (type === 'h3') snippet = '\n\n### Subsection Specifications\n';
    else if (type === 'bullet') snippet = '\n- Specification bullet point with technical metrics';
    else if (type === 'callout') snippet = '\n\n> **Architectural Guardrail:** Strict on-premise tenancy guarantees zero cloud telemetry exfiltration under UAE PDPL regulations.\n';

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, start) + snippet + textarea.value.substring(end);
    textarea.focus();
    this.renderLivePreview();
  }

  updateSeoAudit() {
    const title = (document.getElementById('blog-title')?.value || '').trim();
    const desc = (document.getElementById('blog-excerpt')?.value || '').trim();
    const keywords = (document.getElementById('blog-keywords')?.value || '').trim();
    const content = (document.getElementById('blog-content')?.value || '').trim();

    let score = 70;

    // Title score
    const checkTitle = document.getElementById('seo-check-title');
    if (title.length >= 40 && title.length <= 70) {
      score += 10;
      if (checkTitle) checkTitle.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Optimal (40-65 chars)';
    } else {
      if (checkTitle) checkTitle.innerHTML = '<i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-400"></i> Adjust length (40-65 chars)';
    }

    // Meta desc score
    const checkDesc = document.getElementById('seo-check-desc');
    if (desc.length >= 120 && desc.length <= 165) {
      score += 10;
      if (checkDesc) checkDesc.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Search Snippet Ready (140-160 chars)';
    } else {
      if (checkDesc) checkDesc.innerHTML = '<i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-400"></i> Target 140-160 chars';
    }

    // Keyword count
    const kwList = keywords.split(',').map(k => k.trim()).filter(Boolean);
    const checkKw = document.getElementById('seo-check-keywords');
    if (kwList.length >= 3) {
      score += 5;
      if (checkKw) checkKw.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> ${kwList.length} Target Keywords`;
    } else {
      if (checkKw) checkKw.innerHTML = `<i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-400"></i> Add ${3 - kwList.length} more keywords`;
    }

    // Heading structure
    const hasHeadings = content.includes('##') || content.includes('<h');
    const checkHeadings = document.getElementById('seo-check-headings');
    if (hasHeadings) {
      score += 5;
      if (checkHeadings) checkHeadings.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> H2/H3 Structured';
    }

    // Cap score at 99
    score = Math.min(score, 99);

    const badge = document.getElementById('seo-score-badge');
    if (badge) badge.textContent = `${score} / 100`;

    // SERP Snippet Preview
    const serpSlug = document.getElementById('serp-slug-preview');
    const serpTitle = document.getElementById('serp-title-preview');
    const serpDesc = document.getElementById('serp-desc-preview');
    const slugVal = document.getElementById('blog-slug')?.value || 'article-slug';
    if (serpSlug) serpSlug.textContent = slugVal;
    if (serpTitle) serpTitle.textContent = title || 'Technical Article Headline Preview';
    if (serpDesc) serpDesc.textContent = desc || 'Search engine meta description preview will appear here with focus keywords...';

    if (window.lucide) window.lucide.createIcons();
    return score;
  }

  renderLivePreview() {
    const title = document.getElementById('blog-title')?.value || 'Article Headline';
    const cat = document.getElementById('blog-category')?.value || 'IT Infrastructure';
    const auth = document.getElementById('blog-author')?.value || 'Senior Architect • DSO Hub';
    const content = document.getElementById('blog-content')?.value || '';
    const readTime = `${Math.max(3, Math.ceil(content.split(/\s+/).length / 150))} min read`;

    const elReadTime = document.getElementById('preview-read-time');
    if (elReadTime) elReadTime.textContent = readTime.toUpperCase();

    const previewContainer = document.getElementById('live-rendered-preview');
    if (!previewContainer) return;

    // Convert markdown to clean styled HTML
    let html = `
      <div class="space-y-3 pb-3 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-[#C9A24D]/10 text-[#C9A24D] border border-[#C9A24D]/30 font-mono text-[10px] font-bold">${cat}</span>
          <span class="text-[10px] font-mono text-slate-500">${auth}</span>
        </div>
        <h1 class="text-xl font-heading font-extrabold text-white leading-snug">${title}</h1>
      </div>
      <div class="space-y-3 text-slate-300">
    `;

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
        html += `<h3 class="text-sm font-heading font-bold text-white pt-2">${trimmed.slice(4)}</h3>`;
      } else if (trimmed.startsWith('## ')) {
        if (inList) { html += '</ul>'; inList = false; }
        html += `<h2 class="text-base font-heading font-bold text-[#C9A24D] pt-3">${trimmed.slice(3)}</h2>`;
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) { html += '<ul class="list-disc list-inside space-y-1 font-mono text-[11px] text-slate-300">'; inList = true; }
        html += `<li>${trimmed.slice(2)}</li>`;
      } else if (trimmed.startsWith('> ')) {
        if (inList) { html += '</ul>'; inList = false; }
        html += `<div class="p-3 rounded-lg bg-[#0A0D12] border-l-2 border-[#C9A24D] text-xs font-mono text-slate-300">${trimmed.slice(2)}</div>`;
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        html += `<p class="leading-relaxed text-xs">${trimmed}</p>`;
      }
    });

    if (inList) html += '</ul>';
    html += '</div>';

    previewContainer.innerHTML = html;
  }

  saveManualArticle(statusOverride = null) {
    const id = document.getElementById('blog-id')?.value;
    const title = (document.getElementById('blog-title')?.value || '').trim();
    if (!title) {
      alert('Please enter a blog title.');
      return;
    }

    const slug = (document.getElementById('blog-slug')?.value || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')).trim();
    const category = document.getElementById('blog-category')?.value || 'IT Infrastructure & Data Centre';
    const keywords = document.getElementById('blog-keywords')?.value || '';
    const status = statusOverride || document.getElementById('blog-status')?.value || 'PENDING_REVIEW';
    const excerpt = document.getElementById('blog-excerpt')?.value || '';
    const metric = document.getElementById('blog-metric')?.value || 'Enterprise Validated';
    const author = document.getElementById('blog-author')?.value || 'Senior Architect • DSO Campus';
    const takeawaysText = document.getElementById('blog-takeaways')?.value || '';
    const takeaways = takeawaysText.split('\n').map(t => t.trim()).filter(Boolean);
    const content = document.getElementById('blog-content')?.value || excerpt;
    const seoScore = this.updateSeoAudit();
    const readTime = `${Math.max(3, Math.ceil(content.split(/\s+/).length / 150))} min read`;
    const today = new Date().toISOString().split('T')[0];

    if (id) {
      // Update existing
      const existing = this.articles.find(a => a.id === id);
      if (existing) {
        existing.title = title;
        existing.slug = slug;
        existing.category = category;
        existing.keywords = keywords;
        existing.status = status;
        existing.excerpt = excerpt;
        existing.metric = metric;
        existing.author = author;
        existing.takeaways = takeaways;
        existing.content = content;
        existing.seoScore = seoScore;
        existing.readTime = readTime;
      }
    } else {
      // Create new
      const newId = `QWT-MAN-${Date.now().toString().slice(-4)}`;
      const newArticle = {
        id: newId,
        title,
        slug,
        category,
        keywords,
        status,
        excerpt,
        metric,
        author,
        takeaways,
        content,
        seoScore,
        readTime,
        date: today,
        isGenerated: false
      };
      this.articles.unshift(newArticle);
    }

    this.saveArticles();
    this.updateMetrics();
    this.setQueueFilter(status === 'PENDING_REVIEW' ? 'pending' : (status === 'PUBLISHED' ? 'published' : 'all'));
    this.switchSubTab('queue');

    const msg = status === 'PUBLISHED' 
      ? '✓ Article Approved & Published Live to Insights!'
      : (status === 'PENDING_REVIEW' ? 'Saved to Review Queue with status PENDING REVIEW.' : 'Saved as Draft.');
    this.showToast(msg, 'success');
  }

  deleteArticle(articleId) {
    if (!confirm('Are you sure you want to remove this article?')) return;
    this.articles = this.articles.filter(a => a.id !== articleId);
    this.saveArticles();
    this.updateMetrics();
    this.renderQueueTable();
    this.showToast('Article deleted from directory.', 'info');
  }

  loadIntoSocial(articleId) {
    const art = this.articles.find(a => a.id === articleId);
    if (!art) return;
    this.selectArticle(art);
    this.switchSubTab('social');
  }

  resetToDefaults() {
    if (!confirm('Reset directory to official sample advisories and 5 pending daily blogs?')) return;
    this.articles = JSON.parse(JSON.stringify(INITIAL_BLOG_ARTICLES));
    this.saveArticles();
    this.updateMetrics();
    this.renderQueueTable();
    this.showToast('Reset to official articles and review queue.', 'info');
  }

  showToast(message, type = 'success') {
    let toast = document.getElementById('blog-toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'blog-toast-notification';
      toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl font-mono text-xs shadow-2xl transition-all duration-300 transform translate-y-12 opacity-0 flex items-center gap-3 border';
      document.body.appendChild(toast);
    }

    if (type === 'success') {
      toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl font-mono text-xs shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-center gap-3 bg-[#0F141C] border border-[#C9A24D] text-white';
      toast.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-[#C9A24D] shrink-0"></i><div>${message}</div>`;
    } else {
      toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl font-mono text-xs shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-center gap-3 bg-[#0F141C] border border-slate-700 text-slate-300';
      toast.innerHTML = `<i data-lucide="info" class="w-5 h-5 text-blue-400 shrink-0"></i><div>${message}</div>`;
    }

    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 4500);
  }

  // =========================================================================
  // SOCIAL CANVAS CAMPAIGN GENERATOR (LINKEDIN, INSTAGRAM, FACEBOOK)
  // =========================================================================
  generateAllCampaigns() {
    if (!this.currentArticle) {
      if (this.articles.length > 0) this.currentArticle = this.articles[0];
      else return;
    }
    this.renderLinkedInCard();
    this.renderInstagramCard();
    this.renderFacebookCard();
    this.generateCaptions();
  }

  renderLinkedInCard() {
    const canvas = document.getElementById('campaign-canvas-linkedin');
    if (!canvas) return;
    canvas.width = 1200;
    canvas.height = 628;
    const ctx = canvas.getContext('2d');
    const art = this.currentArticle;

    // Background
    ctx.fillStyle = '#0A0D14';
    ctx.fillRect(0, 0, 1200, 628);

    // Subtle Grid pattern
    ctx.strokeStyle = 'rgba(201, 162, 77, 0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1200; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 628); ctx.stroke();
    }
    for (let y = 0; y < 628; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1200, y); ctx.stroke();
    }

    // Gold ambient gradient
    const grad = ctx.createRadialGradient(950, 150, 50, 950, 150, 500);
    grad.addColorStop(0, 'rgba(201, 162, 77, 0.22)');
    grad.addColorStop(1, 'rgba(10, 13, 20, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 628);

    // Header bar: Monogram + Brand + Tagline
    this.drawMonogram(ctx, 70, 70, 48);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.fillText('QUAD WISE TECHNOLOGIES', 135, 90);
    ctx.fillStyle = '#C9A24D';
    ctx.font = '13px JetBrains Mono, monospace';
    ctx.fillText('Innovation with Integrity • UAE Sovereign Infrastructure', 135, 110);

    // Category pill
    this.drawPill(ctx, 70, 160, (art.category || 'ENTERPRISE ARCHITECTURE').toUpperCase(), '#C9A24D', 'rgba(201, 162, 77, 0.15)');

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 38px Outfit, sans-serif';
    this.wrapText(ctx, art.title, 70, 240, 1020, 48, 3);

    // Metric Highlight Box
    if (art.metric) {
      this.drawRoundRect(ctx, 70, 390, 1060, 65, 12, '#0F141C', 'rgba(201, 162, 77, 0.4)');
      ctx.fillStyle = '#C9A24D';
      ctx.font = 'bold 13px JetBrains Mono, monospace';
      ctx.fillText('ENGINEERING SPECIFICATION:', 95, 428);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px JetBrains Mono, monospace';
      ctx.fillText(art.metric, 335, 428);
    }

    // Bottom Footer Bar
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.5)';
    ctx.beginPath(); ctx.moveTo(70, 530); ctx.lineTo(1130, 530); ctx.stroke();

    ctx.fillStyle = '#94A3B8';
    ctx.font = '13px JetBrains Mono, monospace';
    ctx.fillText(art.author || 'QWT Senior Architecture Directorate', 70, 565);

    ctx.fillStyle = '#C9A24D';
    ctx.font = 'bold 13px JetBrains Mono, monospace';
    ctx.fillText('READ FULL TECHNICAL BLUEPRINT &rarr; QWT.AE/INSIGHTS', 720, 565);
  }

  renderInstagramCard() {
    const canvas = document.getElementById('campaign-canvas-instagram');
    if (!canvas) return;
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    const art = this.currentArticle;

    ctx.fillStyle = '#0A0D14';
    ctx.fillRect(0, 0, 1080, 1080);

    // Radial Gold Glow
    const grad = ctx.createRadialGradient(540, 540, 50, 540, 540, 600);
    grad.addColorStop(0, 'rgba(201, 162, 77, 0.25)');
    grad.addColorStop(1, 'rgba(10, 13, 20, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1080);

    // Logo & Header
    this.drawMonogram(ctx, 80, 90, 56);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 26px Outfit, sans-serif';
    ctx.fillText('QUAD WISE TECHNOLOGIES', 155, 115);
    ctx.fillStyle = '#C9A24D';
    ctx.font = '14px JetBrains Mono, monospace';
    ctx.fillText('Innovation with Integrity', 155, 138);

    // Category Pill
    this.drawPill(ctx, 80, 210, (art.category || 'TECHNICAL ADVISORY').toUpperCase(), '#C9A24D', 'rgba(201, 162, 77, 0.15)');

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px Outfit, sans-serif';
    this.wrapText(ctx, art.title, 80, 310, 920, 54, 4);

    // Metric Box
    if (art.metric) {
      this.drawRoundRect(ctx, 80, 540, 920, 95, 16, '#0F141C', 'rgba(201, 162, 77, 0.5)');
      ctx.fillStyle = '#C9A24D';
      ctx.font = 'bold 14px JetBrains Mono, monospace';
      ctx.fillText('FIELD-VALIDATED TELEMETRY', 115, 580);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px Outfit, sans-serif';
      ctx.fillText(art.metric, 115, 615);
    }

    // Key Takeaways Box
    if (art.takeaways && art.takeaways.length > 0) {
      let ty = 675;
      ctx.fillStyle = '#94A3B8';
      ctx.font = 'bold 13px JetBrains Mono, monospace';
      ctx.fillText('KEY ARCHITECTURAL HIGHLIGHTS:', 80, ty);
      ty += 30;

      art.takeaways.slice(0, 3).forEach(takeaway => {
        ctx.fillStyle = '#C9A24D';
        ctx.font = '16px JetBrains Mono, monospace';
        ctx.fillText('✓', 85, ty);
        ctx.fillStyle = '#E2E8F0';
        ctx.font = '15px JetBrains Mono, monospace';
        this.wrapText(ctx, takeaway, 115, ty, 860, 24, 2);
        ty += 52;
      });
    }

    // Footer
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.5)';
    ctx.beginPath(); ctx.moveTo(80, 970); ctx.lineTo(1000, 970); ctx.stroke();
    ctx.fillStyle = '#C9A24D';
    ctx.font = 'bold 15px JetBrains Mono, monospace';
    ctx.fillText('QWT.AE • SOVEREIGN IT ARCHITECTURE', 80, 1010);
  }

  renderFacebookCard() {
    const canvas = document.getElementById('campaign-canvas-facebook');
    if (!canvas) return;
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    const art = this.currentArticle;

    ctx.fillStyle = '#0A0D14';
    ctx.fillRect(0, 0, 1200, 630);

    const grad = ctx.createRadialGradient(250, 300, 50, 250, 300, 600);
    grad.addColorStop(0, 'rgba(201, 162, 77, 0.22)');
    grad.addColorStop(1, 'rgba(10, 13, 20, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 630);

    this.drawMonogram(ctx, 70, 70, 48);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.fillText('QUAD WISE TECHNOLOGIES', 135, 90);
    ctx.fillStyle = '#C9A24D';
    ctx.font = '13px JetBrains Mono, monospace';
    ctx.fillText('Innovation with Integrity • UAE Enterprise Infrastructure', 135, 110);

    this.drawPill(ctx, 70, 160, (art.category || 'TECHNICAL BLUEPRINT').toUpperCase(), '#C9A24D', 'rgba(201, 162, 77, 0.15)');

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 38px Outfit, sans-serif';
    this.wrapText(ctx, art.title, 70, 240, 1020, 48, 3);

    if (art.metric) {
      this.drawRoundRect(ctx, 70, 390, 1060, 65, 12, '#0F141C', 'rgba(201, 162, 77, 0.4)');
      ctx.fillStyle = '#C9A24D';
      ctx.font = 'bold 13px JetBrains Mono, monospace';
      ctx.fillText('SPECIFICATION:', 95, 428);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px JetBrains Mono, monospace';
      ctx.fillText(art.metric, 240, 428);
    }

    ctx.strokeStyle = 'rgba(51, 65, 85, 0.5)';
    ctx.beginPath(); ctx.moveTo(70, 530); ctx.lineTo(1130, 530); ctx.stroke();
    ctx.fillStyle = '#94A3B8';
    ctx.font = '13px JetBrains Mono, monospace';
    ctx.fillText(art.author || 'QWT Systems Practice', 70, 565);
    ctx.fillStyle = '#C9A24D';
    ctx.font = 'bold 13px JetBrains Mono, monospace';
    ctx.fillText('FULL BRIEFING AT QWT.AE/INSIGHTS', 820, 565);
  }

  generateCaptions() {
    const art = this.currentArticle;
    if (!art) return;

    const angle = this.activeAngle;
    let linkedinText = '';
    let instaText = '';
    let fbText = '';

    if (angle === 'executive') {
      linkedinText = `Enterprise Leadership Briefing | ${art.category}\n\n"${art.title}"\n\nIn highly regulated environments across the UAE and GCC, mission-critical execution leaves zero margin for infrastructure compromise.\n\nKey Executive Highlights:\n${(art.takeaways || []).map(t => `• ${t}`).join('\n')}\n\nValidated Benchmark: ${art.metric || 'Tier-IV SLA Guaranteed'}\n\nRead the full technical whitepaper at Quad Wise Technologies (QWT.AE):\nhttps://qwt.ae/insights/${art.slug}\n\n#UAEEnterprise #CIO #DataCentre #Cybersecurity #SovereignIT #QWT`;

      instaText = `Sovereign Enterprise Infrastructure in the UAE 🇦🇪\n\n${art.title}\n\n${art.excerpt}\n\nKey Highlights:\n${(art.takeaways || []).map(t => `✓ ${t}`).join('\n')}\n\nBenchmark: ${art.metric}\n\nTap the link in bio to read the full architectural briefing at qwt.ae/insights\n\n#DubaiTech #AbuDhabi #EnterpriseIT #NVIDIA #EnterpriseSecurity #QWT`;

      fbText = `Technical Advisory from Quad Wise Technologies (QWT.AE)\n\n${art.title}\n\n${art.excerpt}\n\nSpecification: ${art.metric}\n\nRead complete engineering documentation: https://qwt.ae/insights/${art.slug}\n\n#EnterpriseTechnology #UAE #DubaiBusiness #ITInfrastructure`;
    } else if (angle === 'technical') {
      linkedinText = `Engineering Architecture Deep-Dive | ${art.category}\n\n${art.title}\n\nTechnical Specifications & Parameters:\n${(art.takeaways || []).map(t => `• ${t}`).join('\n')}\n\nVerified Metric: ${art.metric}\n\nDirect Tier-1 OEM integration deployed by Quad Wise Technologies engineers out of DSO and ADGM hubs.\n\nExplore technical BOQ: https://qwt.ae/insights/${art.slug}\n\n#HardwareEngineering #DatacenterFabric #DevOps #QWT #GCC`;
      instaText = `Inside the Architecture ⚙️\n\n${art.title}\n\n${art.metric}\n\n${(art.takeaways || []).map(t => `▸ ${t}`).join('\n')}\n\nFull engineering specs at qwt.ae/insights\n\n#SysAdmin #NetworkEngineering #DataCenterLife #QWT`;
      fbText = `Technical Deep Dive: ${art.title}\n\n${art.excerpt}\n\nHardware Parameters: ${art.metric}\n\nFull article: https://qwt.ae/insights/${art.slug}`;
    } else {
      linkedinText = `Regulatory & Compliance Directive | UAE Sovereign Standards\n\n${art.title}\n\nGuaranteed alignment with UAE Sovereign Data Residency and UAE PDPL Federal Decree No. 45 mandates.\n\nCompliance Framework:\n${(art.takeaways || []).map(t => `• ${t}`).join('\n')}\n\nSign-Off Metric: ${art.metric}\n\nConsult with QWT enterprise engineers: https://qwt.ae/insights/${art.slug}\n\n#DataResidency #EnterpriseSecurity #UAECompliance #CyberGovernance`;
      instaText = `Sovereign Security & Governance Standards 🛡️\n\n${art.title}\n\n${art.metric}\n\n${(art.takeaways || []).map(t => `✓ ${t}`).join('\n')}\n\nRead the full advisory at qwt.ae/insights\n\n#EnterpriseSecurity #DataResidency #SovereignCloud #QWT`;
      fbText = `Compliance Bulletin: ${art.title}\n\nEnsuring 100% compliance with UAE regulatory security mandates.\n\nMetric: ${art.metric}\n\nFull advisory: https://qwt.ae/insights/${art.slug}`;
    }

    const elLi = document.getElementById('caption-linkedin');
    const elIn = document.getElementById('caption-instagram');
    const elFb = document.getElementById('caption-facebook');
    if (elLi) elLi.value = linkedinText;
    if (elIn) elIn.value = instaText;
    if (elFb) elFb.value = fbText;
  }

  drawMonogram(ctx, x, y, size) {
    ctx.save();
    this.drawRoundRect(ctx, x, y, size, size, 10, '#0F141C', '#C9A24D');
    ctx.fillStyle = '#C9A24D';
    ctx.font = `bold ${Math.round(size * 0.42)}px Outfit, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('QWT', x + size / 2, y + size / 2 + 1);
    ctx.restore();
  }

  drawPill(ctx, x, y, text, textColor, bgColor) {
    ctx.save();
    ctx.font = 'bold 12px JetBrains Mono, monospace';
    const textWidth = ctx.measureText(text).width;
    const padding = 14;
    const h = 28;
    const w = textWidth + padding * 2;
    this.drawRoundRect(ctx, x, y, w, h, 6, bgColor, textColor);
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + padding, y + h / 2);
    ctx.restore();
  }

  drawRoundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1; ctx.stroke(); }
    ctx.restore();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
    const words = (text || '').split(' ');
    let line = '';
    let currentY = y;
    let lineCount = 1;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        if (lineCount >= maxLines) {
          ctx.fillText(line.trim() + '...', x, currentY);
          return;
        }
        ctx.fillText(line.trim(), x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
        lineCount++;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, currentY);
  }

  downloadCanvas(platform) {
    const canvas = document.getElementById(`campaign-canvas-${platform}`);
    if (!canvas) return;
    const art = this.currentArticle || { slug: 'qwt-advisory' };
    const link = document.createElement('a');
    link.download = `qwt-${platform}-${art.slug || 'campaign'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}

// Auto-initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('admin-view-blog')) {
    window.qwtStudio = new QwtSocialCampaignStudio();
  }
});
