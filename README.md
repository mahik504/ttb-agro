# TTB Agro India Private Limited — Corporate Web Platform

> **Production-Ready B2B Agricultural Procurement, Trading & Supply Chain Web Application**

Built for **TTB Agro India Private Limited** to showcase their multi-origin agricultural sourcing networks, Eurasian import corridors, dual-stage quality control gates, group ecosystem synergy (₹228 Cr), and institutional commercial SLAs.

---

## 🌟 Key Features & Innovations

- **100% Sourced from Strategic Deck**: Every claim, region (TN, KA, MH, HP/J&K, Iran, Turkey), commodity (Rice, Pulses, Apples, Bananas, Coconut), group turnover figure (₹228 Cr across sister entities), and director profile is strictly aligned with the corporate profile.
- **Domain-Locked B2B Agri Assistant**: Built-in intelligent assistant that answers buyer questions regarding origins, seasonal availability, QC gates, group scale, and RFPs with zero hallucination.
- **Interactive Supply-Chain Journey**: 4-Stage visualizer from origin aggregation to last-mile dock delivery.
- **Seasonal De-risking Matrix**: Visual 12-month supply-balancing model showing how domestic harvests (HP & J&K) pair with Eurasian reefer imports (Iran & Turkey) for 365-day continuity.
- **Geographic Sourcing Map**: Interactive domestic and international node inspector connecting to the Navi Mumbai Operations Hub.
- **Structured Compliance Vault**: Clean architectural cards for FSSAI, GSTIN, IEC, APEDA, and ISO standards without fabricating fake registration numbers.
- **B2B Procurement RFP Engine**: Real-time validated commercial inquiry engine capturing buyer categories, volume tiers, and multi-commodity requirements.
- **Decoupled Data Architecture (`src/data/`)**: All corporate facts, phone numbers, addresses, commodities, certificates, and team members can be updated by editing simple TypeScript data files.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Vite + React 18 + TypeScript |
| **Styling** | Tailwind CSS + Custom `Forest Canopy` Palette |
| **Icons** | Lucide React |
| **Routing** | React Router DOM (v6/v7) with ScrollToTop |
| **Typography** | Plus Jakarta Sans, Outfit, JetBrains Mono |
| **SEO & Schema** | Structured Organization & LocalBusiness JSON-LD, Sitemap, Robots.txt |

---

## 🚀 Quick Start & Development

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Typecheck & Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture & Data Management

```
c:\projects\TTB Agro\
├── public/                     # Static assets, SVG Favicon, Robots.txt, Sitemap.xml
├── src/
│   ├── components/
│   │   ├── chatbot/            # Domain-locked B2B Agri Assistant
│   │   ├── compliance/         # Structured Certificate Cards & QC Protocols
│   │   ├── contact/            # Commercial RFP Form Engine
│   │   ├── home/               # Interactive Homepage Visualizers & Sections
│   │   ├── layout/             # Sticky Navbar, Corporate Footer, Page Headers
│   │   └── ui/                 # Reusable Design System Atoms (Button, Card, Badge)
│   ├── data/                   # 🔑 SINGLE SOURCE OF TRUTH (Centralized Content)
│   │   ├── company.ts          # Addresses, Phones, Philosophy, Group Metrics
│   │   ├── commodities.ts      # Specs, MOQs, Origins, Sourcing Strategies
│   │   ├── network.ts          # Domestic & International Sourcing Nodes
│   │   ├── group.ts            # Sister Entities & ₹228 Cr Breakdown
│   │   ├── leadership.ts       # Board of Directors & Governance
│   │   ├── certifications.ts   # Statutory Compliance Cards & QC Gates
│   │   ├── customers.ts        # Target Buyer Profiles & References
│   │   ├── navigation.ts       # Route Definitions
│   │   └── faq.ts              # Institutional Procurement FAQs
│   ├── pages/                  # All 11 Route Pages
│   ├── types/                  # Type Definitions
│   ├── App.tsx                 # Router & State Orchestrator
│   └── index.css               # Design System Utilities & Transitions
├── CONTENT_VERIFICATION.md     # 📋 Checklist for client verification before launch
├── DEPLOYMENT.md               # 🌐 Step-by-step custom domain deployment guide
└── PRD.md                      # 📄 Full Product Requirements Document
```

---

## 📄 Client Deliverables Included

1. [CONTENT_VERIFICATION.md](file:///c:/projects/TTB%20Agro/CONTENT_VERIFICATION.md): Verification checklist for legal/statutory items.
2. [DEPLOYMENT.md](file:///c:/projects/TTB%20Agro/DEPLOYMENT.md): Deployment guide for Vercel, Cloudflare Pages, and custom `.com` domains.
3. [PRD.md](file:///c:/projects/TTB%20Agro/PRD.md): Complete Product Requirements Document.

© TTB Agro India Private Limited.
