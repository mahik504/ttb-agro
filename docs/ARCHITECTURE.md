# TTB Agro India Private Limited — Architecture & Technical Blueprint

This document details the architectural foundation, data modeling, styling system, routing structure, and component hierarchy of the **TTB Agro India Private Limited** web platform.

---

## 1. System Overview & Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Build & Runtime** | Vite 6 + React 18 + TypeScript | Instant HMR, strict type safety, zero runtime overhead. |
| **Routing** | React Router DOM v6 | Single Page Application (SPA) file-less client routing with route-to-top scroll management. |
| **Styling & Tokens** | Tailwind CSS + CSS Variables | *The Harvest Ledger* design system with custom palette, micro-interactions, and hardware-accelerated ambient mesh wash. |
| **Typography** | Fraunces (Headlines) + Plus Jakarta Sans (Body) + JetBrains Mono (Metrics) | Google Fonts preconnect with fallback serif/sans stacks. |
| **Icons** | Lucide React | Clean, tree-shakeable SVG line icons. |
| **Backend Functions** | Vercel Serverless Functions (`/api/inquiry.ts`) | Server-side validation, honeypot spam filtering, and secure email dispatch. |

---

## 2. Directory & Component Structure

```
TTB Agro/
├── api/                           # Serverless Functions (Vercel / Cloudflare)
│   └── inquiry.ts                 # Server-side RFP processing & mail dispatch
├── docs/                          # Architecture & Compliance Documentation
│   ├── ARCHITECTURE.md            # Technical architecture (this document)
│   ├── CONTENT_VERIFICATION.md    # PDF fact register & launch verification
│   ├── ASSET_SOURCES.md           # Image provenance & commercial licenses
│   └── DEPLOYMENT.md              # Deployment guide (Vercel / Custom domain)
├── public/                        # Static Assets
│   ├── favicon.svg                # Brand icon
│   ├── og-image.svg               # OpenGraph preview card
│   ├── robots.txt                 # Search engine directives
│   ├── sitemap.xml                # SEO sitemap
│   └── images/                    # Local, licensed product photography
│       ├── apples.jpg
│       ├── bananas.jpg
│       ├── coconuts.jpg
│       ├── hero.jpg
│       ├── pulses.jpg
│       ├── rice.jpg
│       └── supply-chain.jpg
├── src/
│   ├── components/                # Modular UI Components
│   │   ├── contact/
│   │   │   └── RfpForm.tsx        # B2B Procurement RFP form with dual-mode dispatch
│   │   ├── home/
│   │   │   ├── GroupEcosystemSection.tsx   # ₹228 Cr group portfolio data panel
│   │   │   ├── HeroSection.tsx             # Editorial photographic hero
│   │   │   ├── HomeCtaSection.tsx          # Commercial inquiry close
│   │   │   ├── NetworkMapSection.tsx       # Geographic node inspector
│   │   │   ├── SeasonalDeriskingSection.tsx # Two-wave qualitative sourcing model
│   │   │   ├── SourcingMatrixPreview.tsx   # Interactive commodity selector
│   │   │   ├── SupplyChainVisualizer.tsx   # 4-stage supply chain route
│   │   │   └── ValuePillarsSection.tsx     # Three core commercial pillars
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Corporate footer with address & disclosures
│   │   │   ├── Navbar.tsx         # Responsive navbar with mobile drawer
│   │   │   └── PageHeader.tsx     # Reusable subpage header with breadcrumbs
│   │   └── ui/
│   │       ├── Badge.tsx          # Monospace tag / status badge
│   │       ├── Button.tsx         # Tactile primary / secondary / outline buttons
│   │       ├── Card.tsx           # Bordered / elevated container card
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
│   ├── pages/                     # Route Views
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
│   │   └── index.ts               # Core TypeScript interfaces
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

## 3. Data Flow & Separation of Concerns

1. **Centralized Data Layer (`src/data/`)**:
   - All factual business information (company names, figures, addresses, commodity varieties, sourcing origins, leadership, FAQs) is isolated in `src/data/`.
   - UI components consume data exclusively through typed imports, enabling copy and fact updates without touching layout logic or CSS.

2. **Form Submission Engine (`src/components/contact/RfpForm.tsx`)**:
   - **Client Validation**: Required fields, valid email structure, commodity selection verification.
   - **Bot Protection**: Hidden honeypot field (`company_website`) silently discards automated submissions.
   - **Rate Limiting**: 8-second client-side throttle prevents duplicate requests.
   - **Secure Serverless Dispatch**: Attempts `POST /api/inquiry` to execute email transmission via server environment variables.
   - **Dependable Fallback**: If unconfigured, generates a structured `mailto:` link with pre-filled parameters, preserving all user inputs so no inquiry is ever lost.

3. **Security Headers (`vercel.json`)**:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
   - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
