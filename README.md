# Quad Wise Technologies (QWT.AE)

> **Innovation with Integrity**  
> Sovereign Enterprise IT Infrastructure, AI Supercomputing & Critical Communications for the UAE & GCC Region.

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-gold.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)](https://qwt.ae)
[![Compliance: UAE PDPL](https://img.shields.io/badge/Compliance-UAE%20PDPL-blue.svg)](https://qwt.ae/about.html)
[![Theme: Sovereign Dark & Executive White](https://img.shields.io/badge/UI-Dual%20Mode%20%28WCAG%20AAA%29-purple.svg)](https://qwt.ae/admin-crm.html)

---

## 🏛️ Executive Overview

**Quad Wise Technologies L.L.C-FZ (QWT.AE)** is a UAE-headquartered sovereign enterprise systems integrator operating from Dubai Silicon Oasis (DSO), DIFC, and ADGM. We architect, deploy, and support air-gapped on-premises computing clusters, high-density GPU supercomputing enclaves, critical physical security, and regulatory data protection solutions strictly under **UAE Federal Decree No. 45 (PDPL)**.

This repository houses the complete, self-contained, high-performance static web platform and internal sovereign operations console.

---

## ⚡ 5 Core Engineering Disciplines

1. **AI Supercomputing & GPU Clusters**:
   - Liquid-cooled NVIDIA H100/H200 SXM5, B200, and GB200 NVL72 architectures.
   - Dual-rail 400Gb/800Gb Quantum-2 InfiniBand and lossless RoCE v2 low-latency fabrics.
   - On-premises air-gapped Sovereign LLM training and RAG inference pipelines with zero cloud telemetry egress.

2. **Enterprise Storage & HCI Architecture**:
   - NVMe-over-Fabrics (NVMe-oF) high-throughput parallel file systems and Tier-IV hybrid SAN/NAS.
   - Metro-synchronous zero-RPO/RTO replication across Dubai, Abu Dhabi, and GCC data centers.
   - Immutable WORM storage for 31-day enterprise CCTV archival and long-term regulatory audit trails.

3. **ELV & Physical Security Infrastructure**:
   - High-density VMS surveillance and physical security enclaves.
   - Multi-biometric access control, perimeter intrusion detection, and structured fiber cabling.
   - Integrated Building Management Systems (BMS) with environmental telemetry.

4. **Cybersecurity & Sovereign SOC**:
   - Air-gapped 24/7 Security Operations Center (SOC) monitoring with automated threat hunting.
   - Micro-segmented zero-trust architecture (ZTA) and hardware security modules (HSM).
   - Penetration testing, vulnerability assessments, and UAE PDPL governance assurance.

5. **Sovereign Cloud & Regulatory Compliance**:
   - Onshore data enclave tenancy under UAE Federal Decree-Law No. 45 on Personal Data Protection.
   - In-country data sovereignty guarantees with encrypted transit and localized key management.
   - Full FTA Tax compliant accounting and commercial invoicing infrastructure.

---

## 🚀 Platform Capabilities

### 🌐 Public Enterprise Portal
- **Pixel-Perfect Responsive Engine**: Seamlessly scales from 375px mobile displays to 4K ultra-wide monitors without horizontal clipping.
- **Enterprise SEO & Meta Architecture**: Pre-rendered semantic HTML, JSON-LD Schema.org graphs, automated OpenGraph preview cards, `sitemap.xml`, and `robots.txt`.
- **High-Contrast Design System**: Custom typography with *Outfit*, *Plus Jakarta Sans*, and *JetBrains Mono*, accented with signature `#C9A24D` sovereign gold and obsidian surfaces.

### 🛡️ Sovereign Operations Console (`/admin-crm.html`)
- **Dual-Mode Theme Engine**: Instant switching between *Sovereign Dark* and *Executive White* with complete WCAG AAA contrast compliance.
- **Strict Role-Based Access Control (RBAC)**: Secure operator authentication screen (`Super Admin`, `Ops Admin`, `Triage Officer`) with isolated session storage.
- **Tender & RFP Telemetry**: Real-time BOQ pipeline ingestion, budget triage, security SLA tracking, and CSV/JSON export.
- **Dedicated Itemized RFP Dossier (`/admin-rfp-detail.html`)**: Deep-dive Bill of Quantities (BOQ) audit, verbatim scope inspection, and lifecycle status workflow (`NEW TRIAGE`, `IN AUDIT`, `OEM APPROVED`, `CLOSED / WON`).
- **Commercial Document Management Suite**: In-browser document generator for **Quotes**, **Invoices**, **Purchase Orders**, and **Delivery Notes** with automated 5% UAE FTA VAT calculations, itemized registers, standalone HTML export, and pixel-perfect A4 PDF printing.
- **Autonomous SEO Blog Studio & Publisher**: Daily 5-blog AI generation engine with strict **Sovereign Review Guardrail** (zero auto-publish to public website without manual sign-off).
- **Social Media Marketing Desk**: Caption synthesis, multi-angle generator, and live canvas preview cards for LinkedIn, Instagram, and Facebook.
- **Contact Form Triage**: Direct lead ingestion with domain classification, security domain tagging, and status management.

---

## 📁 Repository Structure

```
qwt-website/
├── index.html                   # Public Homepage & Sovereign IT Enclave Portal
├── solutions.html               # 5 Core Engineering Disciplines & Technical BOMs
├── hardware.html                # OEM Systems Catalog (Dell, HPE, Supermicro, NVIDIA)
├── case-studies.html            # Verified UAE Enterprise Deployments & Metrics
├── insights.html                # Technical Thought Leadership & Compliance Advisories
├── about.html                   # Corporate Profile, Governance & Leadership
├── contact.html                 # Procurement Desk, RFP Ingestion & Inquiries
├── admin-crm.html               # Sovereign CRM, Commercial Docs & SEO Studio
├── admin-rfp-detail.html        # Dedicated BOQ Dossier & Lifecycle Workflow
├── 404.html                     # Custom High-Availability Error Fallback Page
├── sitemap.xml                  # Search Engine XML Sitemap
├── robots.txt                   # Crawler Directives & Route Shields
├── favicon.ico / favicon.png    # High-Resolution Brand Icon Suite
├── qwt-logo.png                 # Retina Corporate Emblem
├── build.py                     # Production Build & Packaging Script
├── server.py                    # Multi-threaded Local Preview Server (Port 8080)
├── README-DEPLOYMENT.md         # Multi-cloud Deployment Guide
├── .htaccess                    # Apache / cPanel / LiteSpeed Configuration
├── _redirects / netlify.toml    # Netlify Hosting Configuration
├── vercel.json                  # Vercel Hosting Configuration
├── firebase.json                # Google Firebase Hosting Configuration
├── assets/                      # Brand assets, vectors, and imagery
├── css/
│   ├── custom.css               # Core styling, animations, and typography
│   └── admin-theme.css          # Dual-mode engine (Sovereign Dark / Executive White)
└── js/
    ├── main.js                  # Navigation, lucide icons, mobile drawer, toasts
    ├── admin-theme.js           # Theme persistence controller
    ├── admin-auth.js            # Operator session management & RBAC
    ├── admin-crm.js             # RFP telemetry pipeline & filtering
    ├── admin-commercial-docs.js # Commercial Docs (Quote, Invoice, PO, Delivery Note)
    ├── admin-contact-submissions.js # Inbound lead triage & modal inspection
    ├── admin-blog-social.js     # Autonomous blog generation & social canvas
    └── admin-channels.js        # Communication channel configuration
```

---

## 🛠️ Local Development & Preview

### 1. Run Local Server
The included multi-threaded Python server serves the site with instant cache-busting headers:

```bash
python server.py
```
Open your browser at **[http://localhost:8080](http://localhost:8080)**.

### 2. Compile Production Build
To create a clean, verified distribution package and deployment archive:

```bash
python build.py
```

The script produces:
- Output Directory: `dist/` (47 self-contained production files)
- Deployment Archive: `qwt-enterprise-production.zip`

---

## 🌐 Deployment Options

### GitHub Pages (Zero Config)
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then click **Save**.
4. The site goes live automatically with custom domain support (`qwt.ae`).

### Netlify (Drag & Drop or Git CI)
- **Drag & Drop**: Drop the `dist/` directory or `qwt-enterprise-production.zip` at [app.netlify.com/drop](https://app.netlify.com/drop).
- **Git Connect**: Point build directory to `.`, pre-configured via `netlify.toml` and `_redirects`.

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### cPanel / Apache / Shared Hosting
1. Upload and extract `qwt-enterprise-production.zip` into `public_html/`.
2. The included `.htaccess` automatically manages clean URLs, Gzip compression, and browser caching.

---

## 📄 Legal & Compliance

- **Commercial Registration**: Quad Wise Technologies L.L.C-FZ, Dubai Silicon Oasis, UAE.
- **Federal Tax Authority (FTA) TRN**: 100482910300003
- **Enterprise Physical Security**: High-Density IP Surveillance & Access Control Practice
- **Data Protection Mandate**: UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)

&copy; 2026 Quad Wise Technologies L.L.C-FZ. All Sovereign Rights Reserved.
