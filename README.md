# TTB Agro India Private Limited — Corporate Web Platform

Production-ready B2B agricultural procurement and supply chain web platform for **TTB Agro India Private Limited**, engineered according to *The Harvest Ledger* design system and strictly grounded in the corporate strategic profile deck.

---

## 🌾 1. Business Context & Strategic Overview

- **Legal Entity**: `TTB Agro India Private Limited`
- **Positioning**: *"Resilient Supply Chains Connecting Origin Growers to Organised Retail"*
- **Operating Philosophy**: *"Farmer-First Procurement. Customer-First Quality."*
- **Group Scale**: Part of a diversified **₹228 Cr Combined Group Turnover** (*Just Go Eco ₹98 Cr, SP Coconut ₹80 Cr, Just Go Project ₹25 Cr, STP Traders ₹25 Cr*).
- **Core Operations**:
  - Direct domestic agricultural aggregation across **Tamil Nadu** (Rice, Coconuts, Bananas), **Karnataka** (Coconuts, Otto Bananas), **Maharashtra** (G9 Bananas, Mandi trading), and **Himachal Pradesh & Kashmir** (Apples).
  - Dedicated Eurasian import corridors from **Iran** and **Turkey** to bridge domestic off-season availability gaps for modern retail.
  - Zero-waste value addition through dedicated industrial coconut processing unit (**SP Coconut**).
  - **Dual-Stage Quality Control**: Enforced at origin procurement screening and central Navi Mumbai dispatch hub prior to client handover.
- **Headquarters / Operations Hub**:
  - `Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706`

---

## 🛠️ 2. Technology Stack

- **Core Framework**: [Vite 6](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/) (SPA with scroll restoration)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS Custom Properties
- **Design Direction**: *The Harvest Ledger* (Editorial Swiss Agricultural Trading House)
- **Typography**: `Fraunces` (Headlines) + `Plus Jakarta Sans` (UI / Body) + `JetBrains Mono` (Figures & Codes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Serverless API**: Vercel Serverless Functions (`/api/inquiry.ts`) for secure backend email dispatch
- **Hosting / Deploy**: Vercel / Cloudflare Pages ready with custom security headers in `vercel.json`

---

## 📁 3. Project Architecture & Directory Structure

```
TTB Agro/
├── api/                           # Serverless Functions
│   └── inquiry.ts                 # Server-side RFP processing & email dispatch
├── docs/                          # Architecture & Compliance Documentation
│   ├── ARCHITECTURE.md            # Detailed technical blueprint & component tree
│   ├── CONTENT_VERIFICATION.md    # Fact register & client pre-launch checklist
│   ├── ASSET_SOURCES.md           # Image provenance & commercial open licenses
│   └── DEPLOYMENT.md              # Vercel & custom domain setup guide
├── public/                        # Static Assets
│   ├── favicon.svg                # Brand icon
│   ├── og-image.svg               # OpenGraph preview card
│   ├── robots.txt                 # Search engine directives
│   ├── sitemap.xml                # SEO sitemap
│   └── images/                    # Locally hosted, licensed product photography
│       ├── apples.jpg             # Orchard apple crates
│       ├── bananas.jpg            # G9 & Cavendish bananas
│       ├── coconuts.jpg           # Fresh whole coconuts
│       ├── hero.jpg               # Harvest produce banner
│       ├── pulses.jpg             # Wholesale pulses & lentils
│       ├── rice.jpg               # Rice grains in sack detail
│       └── supply-chain.jpg       # Logistics & dock dispatch
├── src/
│   ├── components/                # Modular UI Components
│   │   ├── contact/
│   │   │   └── RfpForm.tsx        # RFP form with honeypot & dual-mode dispatch
│   │   ├── home/                  # Homepage editorial modules
│   │   │   ├── GroupEcosystemSection.tsx   # ₹228 Cr group portfolio data panel
│   │   │   ├── HeroSection.tsx             # Photographic editorial hero
│   │   │   ├── HomeCtaSection.tsx          # Commercial close with Google Maps link
│   │   │   ├── NetworkMapSection.tsx       # Geographic sourcing node inspector
│   │   │   ├── SeasonalDeriskingSection.tsx # Two-wave qualitative sourcing model
│   │   │   ├── SourcingMatrixPreview.tsx   # Interactive commodity selector
│   │   │   ├── SupplyChainVisualizer.tsx   # 4-stage supply chain route
│   │   │   └── ValuePillarsSection.tsx     # The TTB Advantage pillars
│   │   ├── layout/                # Shell & navigation
│   │   │   ├── Footer.tsx         # Corporate footer with address & disclosures
│   │   │   ├── Navbar.tsx         # Responsive navbar with mobile drawer
│   │   │   └── PageHeader.tsx     # Reusable subpage header with breadcrumbs
│   │   └── ui/                    # UI primitives
│   │       ├── Badge.tsx          # Tag / status badge
│   │       ├── Button.tsx         # Tactile primary / secondary buttons
│   │       ├── Card.tsx           # Bordered container card
│   │       └── SectionHeading.tsx # Editorial H2 heading with gold eyebrow
│   ├── data/                      # Centralized Data Layer (Fact-Locked)
│   │   ├── commodities.ts         # Diagnostic matrix for 5 core commodities
│   │   ├── company.ts             # Corporate coordinates, philosophy, metrics
│   │   ├── customers.ts           # Customer sectors & text references
│   │   ├── faq.ts                 # 8 fact-safe Procurement Q&A items
│   │   ├── group.ts               # 4 sister entities & ₹228 Cr group turnover
│   │   ├── leadership.ts          # Board of Directors & governance
│   │   ├── navigation.ts          # Navigation links & footer menus
│   │   ├── network.ts             # Domestic origins & Eurasian import nodes
│   │   └── qcProtocols.ts         # Dual-stage QC inspection protocols
│   ├── pages/                     # 12 Complete Route Views
│   │   ├── AboutPage.tsx          # Corporate profile, philosophy & leadership
│   │   ├── CommoditiesPage.tsx    # Full commodity portfolio specifications
│   │   ├── CompliancePage.tsx     # Quality at procurement & dispatch
│   │   ├── ContactPage.tsx        # Procurement desk, RFP form & Q&A
│   │   ├── DisclaimerPage.tsx     # Group scale & brand reference disclosures
│   │   ├── GroupPage.tsx          # ₹228 Cr group ecosystem & customer sectors
│   │   ├── HomePage.tsx           # Primary landing experience
│   │   ├── NetworkPage.tsx        # Geographic sourcing corridors & seasonality
│   │   ├── NotFoundPage.tsx       # 404 handler
│   │   ├── PrivacyPolicyPage.tsx  # Commercial data privacy policy
│   │   ├── SupplyChainPage.tsx    # 4-stage supply route & SP Coconut unit
│   │   └── TermsPage.tsx          # Commercial terms of supply
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── App.tsx                    # Route tree & scroll restoration
│   ├── index.css                  # Global styles, variables & light field
│   └── main.tsx                   # DOM entrypoint
├── .env.example                   # Environment variable template
├── .gitignore                     # Git ignore rules
├── DESIGN.md                      # "The Harvest Ledger" design system guide
├── index.html                     # HTML5 shell, preconnect fonts, JSON-LD schema
├── package.json                   # Dependencies & build scripts
├── tailwind.config.js             # Token extensions & font families
├── tsconfig.json                  # Strict TypeScript configuration
├── vercel.json                    # SPA rewrites & security headers
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🎨 4. Design System Tokens (*The Harvest Ledger*)

Documented fully in [`DESIGN.md`](./DESIGN.md):

| Color Token | Hex Code | Functional Application |
|---|---|---|
| **Deep Evergreen** | `#0A2118` | Primary dark backdrops (Hero, Footer, Navigation) |
| **Field Green** | `#17412E` | Primary button fill, active states, dark borders |
| **Leaf Green** | `#326049` | Subdued green accents, domestic harvest curve |
| **Cream Canvas** | `#F1EBDD` | Primary light background canvas across all pages |
| **Deep Parchment** | `#E4D7BA` | Elevated cards, input fields, diagnostic panels |
| **Primary Ink** | `#122017` | High-contrast editorial typography and headlines |
| **Soft Ink** | `#405046` | Body text, captions, secondary descriptions |
| **Antique Gold** | `#B99045` | Hairlines, numerals, route strokes, focus states |
| **Muted Brick Red** | `#8F2D2D` | Form validation and error notices only |

---

## 🚀 5. Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Accessible at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```
Outputs optimized production bundle in `dist/` with zero TypeScript or lint errors.

### Production Preview
```bash
npm run preview
```

---

## 🔒 6. Security, Privacy & Integrity Standards

- **Zero-Fabrication Rule**: No fake phone numbers, no placeholder GST/FSSAI certificates, and no unverified offices.
- **Server-Side Email Handling**: Private email provider API keys (`RESEND_API_KEY`) are processed server-side via `/api/inquiry.ts`, never exposed in client JavaScript.
- **Form Anti-Spam**: Hidden honeypot field (`company_website`) and 8-second client rate limiting.
- **Headers in [`vercel.json`](./vercel.json)**: `nosniff`, `DENY` framing, `strict-origin-when-cross-origin`, `Permissions-Policy`, and HSTS.

---

## 📖 7. Additional Documentation

- [Detailed Technical Architecture (`docs/ARCHITECTURE.md`)](./docs/ARCHITECTURE.md)
- [Corporate Fact Register & Pre-Launch Checklist (`docs/CONTENT_VERIFICATION.md`)](./docs/CONTENT_VERIFICATION.md)
- [Photographic Asset Sources & Provenance (`docs/ASSET_SOURCES.md`)](./docs/ASSET_SOURCES.md)
- [Production Deployment Guide (`docs/DEPLOYMENT.md`)](./docs/DEPLOYMENT.md)
- [Design System Specification (`DESIGN.md`)](./DESIGN.md)

---

© TTB Agro India Private Limited. All rights reserved.
