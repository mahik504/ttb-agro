# TTB Agro India Private Limited — Corporate Web Platform

Production-ready B2B corporate web platform for **TTB Agro India Private Limited**, engineered according to `DESIGN.md` and strictly grounded in the corporate strategic profile deck.

---

## 1. Stack & Architecture

- **Framework**: Vite + React 18 + TypeScript + React Router DOM
- **Styling**: Tailwind CSS calibrated to the Editorial Swiss Agricultural Trading House design system (`DESIGN.md`)
- **Typography**: Fraunces (Headlines) + Plus Jakarta Sans (Body) + JetBrains Mono (Figures)
- **Deployment**: Zero-config Vercel / Cloudflare Pages deployment with SPA routing and production security headers in `vercel.json`

---

## 2. Local Development & Build

### Run Development Server
```bash
npm run dev
```
Accessible at [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
```
Outputs optimized production bundle in `dist/` with strict TypeScript validation.

### Production Preview
```bash
npm run preview
```

---

## 3. Centralized Content Layer (`src/data/`)

All corporate facts, commodities, origins, leadership details, and contact coordinates are centralized in `src/data/` for straightforward client maintenance without touching UI components or CSS:

| File | Content Scope |
|---|---|
| `src/data/company.ts` | Legal name, tagline, operating philosophy, address, emails, and group turnover |
| `src/data/commodities.ts` | Diagnostic matrix for Rice, Pulses, Apples, Bananas, and Coconut |
| `src/data/network.ts` | Domestic sourcing nodes and international import corridors |
| `src/data/group.ts` | ₹228 Cr group ecosystem entities and descriptions |
| `src/data/leadership.ts` | Board of Directors and governance principles |
| `src/data/certifications.ts` | Statutory licensing architecture and dual-stage QC parameters |
| `src/data/customers.ts` | Client sectors (Organised Retail, QSR & Café, Regional Hospitality) |
| `src/data/navigation.ts` | Main navigation and footer anchor links |
| `src/data/faq.ts` | Procurement FAQs and knowledge base |
| `src/components/chatbot/assistantKnowledge.ts` | Domain-locked B2B assistant responses |

---

## 4. Contact Form Configuration

The commercial inquiry form in `src/components/contact/RfpForm.tsx` supports:
- Direct POST via Web3Forms, Formspree, or custom API endpoints using environment variables:
  - `VITE_FORM_ENDPOINT` (e.g. `https://api.web3forms.com/submit` or custom endpoint)
  - `VITE_FORM_ACCESS_KEY` (API access key)
- Automatic fallback: when no API key is present in `.env`, the form formats a structured mailto link directed to `procurement@ttbagro.com`.
- Integrated bot protection via a hidden honeypot field (`company_website`) and 8-second submission rate limiting.
- Automatic commodity pre-selection via URL query parameters (e.g. `/contact?commodity=apples`).

---

## 5. Security & Deployment

- **Security Headers**: Configured in `vercel.json` (`nosniff`, `DENY` framing, `strict-origin-when-cross-origin`, `Permissions-Policy`).
- **No Fabricated Numbers**: Placeholder licenses are clearly labeled as provided upon commercial onboarding.
- **Group Turnover Clarification**: ₹228 Cr is strictly presented as the combined group ecosystem turnover across sister entities.

---

© TTB Agro India Private Limited.
