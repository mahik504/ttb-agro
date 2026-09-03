# TTB AGRO — PRODUCTION DEPLOYMENT VERIFICATION

**Date / Timestamp:** 2026-09-03 21:28 IST  
**Verified Production URL:** [https://ttb-agro-deploy.vercel.app](https://ttb-agro-deploy.vercel.app)  
**Deployment ID:** `dpl_GNP5UPZCyBG1ww8dJza1M7z4Z4gf`  
**Git HEAD SHA (Local & Remote Master):** `43a62820358897ea4f932f9bf2a49265fefb396b`  
**GitHub Repository:** `https://github.com/mahik504/ttb-agro`  
**Hosting Provider:** Vercel (Edge Network & Serverless Functions)  
**Verification Framework:** Playwright E2E (`tests/e2e/production_verify.spec.ts`)

---

## 1. Verified Route Status Matrix

All routes were verified live via automated Playwright headless Chromium against `https://ttb-agro-deploy.vercel.app`:

| Route Path | HTTP Code | Main DOM Mount | Uncaught JS Errors | Visual Theme Applied |
|---|---|---|---|---|
| `/` (Homepage) | `200 OK` | Yes (`<main>`) | `0` | Harvest Ledger (A+C Hybrid) |
| `/about` (Corporate Profile) | `200 OK` | Yes (`<main>`) | `0` | Fraunces + Jakarta + JetBrains |
| `/commodities` (Sourcing Portfolio) | `200 OK` | Yes (`<main>`) | `0` | Staples & Fresh Produce Ledger |
| `/network` (Trade Corridors) | `200 OK` | Yes (`<main>`) | `0` | Interactive SVG Trade Map |
| `/supply-chain` (4-Stage Workflow) | `200 OK` | Yes (`<main>`) | `0` | Logistics Banner + SP Coconut Unit |
| `/compliance` (Dual-Stage QC) | `200 OK` | Yes (`<main>`) | `0` | Origin & Dispatch Inspection Gates |
| `/quality-compliance` (Alias) | `200 OK` | Yes (`<main>`) | `0` | Route Alias Verified |
| `/group` (Group Ecosystem) | `200 OK` | Yes (`<main>`) | `0` | ₹228 Cr Tabular Ledger |
| `/contact` (Commercial RFP Desk) | `200 OK` | Yes (`<main>`) | `0` | Reactive RFP Form + FAQ Accordion |

---

## 2. Serverless API Endpoint Verification

- **Endpoint:** `POST https://ttb-agro-deploy.vercel.app/api/inquiry`
- **Method Restrictions:** `GET` request returns `HTTP 405 Method Not Allowed`.
- **Spam Mitigation:** Submissions with honeypot field (`company_website`) return immediate `HTTP 200 { success: true, note: 'Processed' }` without email dispatch.
- **Validation:** Missing contact fields return `HTTP 400 Bad Request`.
- **Local / Unconfigured Fallback:** Gracefully handled client-side with pre-formatted `mailto:` client activation.

---

## 3. Production HTML & Font Asset Integrity

- **Typography Stacks Loaded:**
  - `Fraunces` (Editorial Display Serif)
  - `Plus Jakarta Sans` (UI Sans)
  - `JetBrains Mono` (Technical Figures & Ledger Codes)
- **Purged Fonts:** Grep across built assets confirms `0` references to `Inter` and `0` references to `Space Grotesk`.
- **Security Headers (Verified via curl.exe):**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

---

## 4. Verification Verdict

**STATUS: VERIFIED & CONFIRMED LIVE IN PRODUCTION.**  
The live deployment serves the exact, complete multi-route A+C Hybrid redesign, backed by 10/10 passing smoke tests on the production domain.
