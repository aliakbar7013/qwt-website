# QUAD WISE TECHNOLOGIES (QWT.AE) - PRODUCTION DEPLOYMENT GUIDE

This distribution package is fully self-contained, statically pre-rendered, SEO-optimized, and ready for instant deployment across any global or sovereign cloud hosting provider.

---

## 📦 Distribution Inventory

- **Production Root**: `dist/`
- **Compressed Package**: `qwt-enterprise-production.zip`
- **Pages**:
  - `index.html` - Enterprise Sovereign IT & AI Supercomputing Portal
  - `solutions.html` - The 5 Authorized Engineering Disciplines
  - `hardware.html` - High-Density OEM Hardware & Systems Catalog
  - `case-studies.html` - UAE Sovereign Deployments & Benchmark Dossiers
  - `insights.html` - Technical Thought Leadership & PDPL Bulletins
  - `about.html` - Corporate Profile, UAE Enclaves, SIRA/MCC Accreditations
  - `contact.html` - Sovereign Procurement Desk & RFP Telemetry Ingestion
  - `admin-crm.html` - Sovereign CRM, Invoicing Suite & SEO AI Publisher
  - `admin-rfp-detail.html` - Dedicated Itemized BOQ Dossier & Lifecycle Workflow
  - `404.html` - Custom High-Availability Error Fallback Page
- **SEO & Compliance**:
  - `sitemap.xml` - Search Engine XML Sitemap with Image Metadata
  - `robots.txt` - Search Crawler Directives & Private Route Shields
  - `favicon.ico`, `favicon.png`, `qwt-logo.png` - Retina Icon Suite
- **Hosting Pre-Configurations Included**:
  - `.htaccess` - Apache / LiteSpeed / cPanel (Clean URLs, Gzip, Security Headers)
  - `netlify.toml` & `_redirects` - Netlify Hosting
  - `vercel.json` - Vercel Hosting
  - `firebase.json` - Google Firebase Hosting

---

## 🚀 Deployment Options

### Option 1: Netlify (Instant Drag & Drop - Recommended for Zero Config)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop either the `dist` folder or `qwt-enterprise-production.zip`.
3. Your site is live instantly with HTTPS, clean URLs, and HTTP/3 support.

### Option 2: cPanel / Apache / LiteSpeed / Shared Hosting
1. Log into your cPanel or server file manager.
2. Navigate to `public_html/`.
3. Upload and extract `qwt-enterprise-production.zip` directly into `public_html/`.
4. The included `.htaccess` automatically manages clean URLs, Gzip compression, and browser caching.

### Option 3: Vercel CLI
```bash
npm install -g vercel
cd dist
vercel --prod
```

### Option 4: Cloudflare Pages
1. In the Cloudflare Dashboard, go to **Pages** > **Create a project**.
2. Select **Direct Upload**.
3. Upload `qwt-enterprise-production.zip` or the `dist/` directory.

### Option 5: Nginx Web Server
Add the following block to your Nginx `sites-available/qwt.ae`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name qwt.ae www.qwt.ae;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name qwt.ae www.qwt.ae;

    root /var/www/qwt-enterprise/dist;
    index index.html;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Clean URLs & Fallbacks
    location / {
        try_files $uri $uri.html $uri/ /404.html;
    }

    location = /deployments {
        return 301 /case-studies.html;
    }

    # Static Asset Caching
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    error_page 404 /404.html;
}
```

### Option 6: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting # Select existing project
firebase deploy --only hosting
```

---

## 🔒 Enterprise Security & Verification
- All telemetry and CRM lead submissions operate autonomously on client-side encrypted local storage (`localStorage`) with full export capabilities to CSV and JSON.
- Commercial Invoicing Suite generates standalone offline client-ready documents with A4 PDF Print and HTML Download support.
- Fully compliant with UAE Federal Decree No. 45 (PDPL) and Dubai SIRA/MCC requirements.
