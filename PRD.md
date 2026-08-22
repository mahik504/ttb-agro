# Product Requirements Document (PRD): TTB Agro India Private Limited

## 1. Product & Business Overview

- **Company Name**: TTB Agro India Private Limited
- **Category**: B2B Agricultural Sourcing, Procurement, Trading, Processing & Supply Chain
- **Core Positioning**: *"Resilient Supply Chains — Connecting Origin Growers to Organised Retail"*
- **Operating Philosophy**: *"Farmer-First Procurement, Customer-First Quality"*
- **Target Audience**: Modern Trade Supermarket Chains (e.g. D-Mart), QSR & Cloud Kitchen Networks (e.g. Mani's Cafe, Thumbi), Regional Hotel & Hospitality Networks (e.g. Udupi Hotels), Industrial Food Caterers, and FPO Grower Collectives.
- **Operations Hub**: Seawoods, Nerul, Navi Mumbai – 400706 (strategically connected to JNPT Port and Western India consumer corridors).

---

## 2. Core Value Proposition & Differentiators

1. **Multi-Origin Domestic Sourcing**: Direct aggregations across Tamil Nadu (Rice, Coconut, Bananas), Karnataka (Coconut, Otto Bananas), Maharashtra (G9 Bananas, Mandi Trading), and Himachal Pradesh & J&K (Apples), bypassing speculative intermediary mandi layers.
2. **Dedicated Eurasian Import Pipelines**: Reefer maritime routes from Iran & Turkey to offset domestic off-season troughs for apples, guaranteeing continuous 365-day retail fill rates.
3. **Dual-Stage Quality Control**: 4-Gate inspection screen covering Origin Farm-Gate Screening, Transit Cold-Chain Temperature Logging, Central Laboratory Sorting (Brix, Firmness, Optical Sortexing), and Final Dispatch Dock Handover.
4. **Institutional Processing Synergy**: Integration with SP Coconut (₹80 Cr processing unit) for zero-waste value addition (culinary nuts, desiccated powder, copra, coir).
5. **₹228 Cr Parent Group Ecosystem**: Financial balance-sheet strength, working capital reserves, and logistics asset backing.

---

## 3. Information Architecture & Navigation

| Route | Page | Purpose & Core Content |
|---|---|---|
| `/` | **Home** | High-impact asymmetric hero, 4-stage supply chain visualizer, commodity matrix preview, seasonal de-risking chart, interactive sourcing map, group synergy, and institutional RFP CTA. |
| `/about` | **About Us** | Corporate overview, operating philosophy, Board of Directors (*Mr. Prakash Patil, Mr. Harshal Nikam*), governance principles, and Navi Mumbai operations hub. |
| `/commodities` | **What We Source** | In-depth B2B specifications for Rice, Pulses, Apples, Bananas, and Coconut with packaging, shelf-life, cold-chain temps, MOQs, and direct quote triggers. |
| `/supply-chain` | **Our Supply Chain** | Detailed operational breakdown of 4 stages, SP Coconut zero-waste unit, and cold-chain compliance. |
| `/network` | **Geographic Network** | Interactive domestic (5+ States) & global (Iran, Turkey) sourcing node inspector connected to Navi Mumbai Hub. |
| `/group` | **Group Ecosystem** | Breakdown of the ₹228 Cr group synergy (*Just Go Eco ₹98 Cr, SP Coconut ₹80 Cr, Just Go Project ₹25 Cr, STP Traders & TTB ₹25 Cr*) and customer sector profiles. |
| `/quality-compliance` | **Quality & Compliance** | Structured compliance cards (FSSAI, GSTIN, IEC, APEDA, ISO) without fake serial numbers, plus 4-gate QC checklists. |
| `/contact` | **Contact & RFP** | Commercial RFP engine with multi-commodity selection, volume tiers, office locator, direct commercial desk, and FAQ accordion. |
| `/privacy-policy` | **Privacy Policy** | B2B commercial inquiry data protection and compliance statement. |
| `/terms` | **Terms of Supply** | Commercial procurement terms, PO execution, and delivery SLA guidelines. |
| `/disclaimer` | **Regulatory Disclaimer** | Legal disclaimer regarding group figures and sector reference accounts. |

---

## 4. Innovation Feature: Domain-Locked B2B Agri Assistant

- **Architecture**: In-memory domain knowledge graph (`src/components/chatbot/assistantKnowledge.ts`) with fuzzy keyword mapping and contextual redirects.
- **Capabilities**:
  - Explains TTB Agro's sourcing origins, commodities, seasonal de-risking mechanisms, QC gates, group scale, and directorship.
  - Zero hallucination: strictly bounded to corporate facts with direct action links to relevant site sections.
  - Quick query chips for prospective procurement managers.

---

## 5. Non-Functional & Production Requirements

- **Lighthouse Performance Score**: Target 95–100 across Performance, Accessibility, Best Practices, and SEO.
- **Responsive Layout**: Fluid breakpoints verified across Mobile (360px, 390px, 430px), Tablet (768px), Laptop (1024px), Desktop (1280px, 1440px), and Large Desktop (1920px).
- **Accessibility**: Semantic HTML5 tags, keyboard navigation, visible focus rings, ARIA labels, and `@media (prefers-reduced-motion)` support.
- **Type Safety**: 100% strict TypeScript compilation with 0 lint or build warnings.
- **Deployment Readiness**: Pre-configured for zero-config deployment on Vercel and Cloudflare Pages with custom `.com` apex and `www` support.

---

© TTB Agro India Private Limited.
