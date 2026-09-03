# TTB Agro India Private Limited — Corporate Verification Register

This register details all public corporate claims mapped against the client's 11-slide Strategic Profile deck, along with the asset provenance register and the checklist of client-supplied items required prior to launching on the custom `.com` domain.

---

## 1. Statutory Identity & Directorship (PDF Slide 1 & 11)

| Item | Deck Evidence | Published Status | Code Source |
|---|---|---|---|
| **Legal Entity Name** | `TTB Agro India Private Limited` (Slide 1) | Fully Verified | `src/data/company.ts` |
| **Corporate Tagline** | *Resilient Supply Chains Connecting Origin Growers to Organised Retail* (Slide 1) | Fully Verified | `src/data/company.ts` |
| **Operating Philosophy** | *Farmer-First Procurement. Customer-First Quality.* (Slide 2) | Fully Verified | `src/data/company.ts` |
| **Registered Office** | `Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706` (Slide 11) | Fully Verified | `src/data/company.ts` |
| **Board of Directors** | `Mr. Prakash Patil` (Director), `Mr. Harshal Nikam` (Director) (Slide 11) | Name & Title Only | `src/data/leadership.ts` |

---

## 2. Financial Scale & Group Structure (PDF Slide 3 & 4)

| Entity | Role in Ecosystem | Revenue Contribution | Note |
|---|---|---|---|
| **Just Go Eco** | Sustainability & Execution | ₹98 Cr | Sister Entity |
| **SP Coconut** | Processing & Value-Add | ₹80 Cr | Dedicated Coconut Processing Unit |
| **Just Go Project** | Sustainability & Execution | ₹25 Cr | Sister Entity |
| **STP Traders & TTB Agro** | Trading & Procurement | ₹25 Cr (STP Traders) | Trading Engine |
| **Total Group Turnover** | **Combined Ecosystem Scale** | **₹228 Cr** | *Strictly framed as combined group turnover, not standalone TTB revenue.* |

---

## 3. Commodity Portfolio Diagnostic (PDF Slide 6)

| Produce | Category | Key Varieties / Grades | Origin Corridors | Procurement Strategy |
|---|---|---|---|---|
| **Rice** | Staples | Bulk & Processed Grades | Tamil Nadu (Pollachi, Erode) | Direct Local Aggregation |
| **Pulses** | Staples | Retail & Institutional Grades | Pan-India Mandi Corridors | General Trading |
| **Apple** | Fresh Produce | Premium Imported & Local | Iran, Turkey, Himachal Pradesh, Kashmir | Dedicated Import Channel |
| **Banana** | Fresh Produce | Otto & G9 Varieties | Tamil Nadu, Karnataka, Maharashtra | Multi-State Sourcing |
| **Coconut** | Fresh Produce | Fresh & Processed Formats | Tamil Nadu (Pollachi), Karnataka | Direct Local Aggregation |

---

## 4. Supply Chain & Quality Checkpoints (PDF Slide 8)

- **Stage 01 — Origin Aggregation**: Direct farm-gate and local aggregator procurement across southern, western, and northern belts.
- **Stage 02 — Global Supplement**: Strategic import channels from Iran & Turkey to bridge domestic off-season gaps.
- **Stage 03 — Dual-Stage QC**: Quality checks enforced at initial origin procurement and central Navi Mumbai dispatch dock prior to client handover.
- **Stage 04 — Last-Mile Dispatch**: Scheduled dispatches to organized supermarket retail, QSR/café networks, and hospitality networks.

---

## 5. Asset Provenance & Local Media Register

All photographic assets used in the application are hosted locally within `public/images/`. External CDN hotlinks are strictly prohibited.

| Filename | Produce / Subject | Dimensions & Format | Source / Provenance | License | Local Storage Path | Published Status |
|---|---|---|---|---|---|---|
| `hero.jpg` | Fresh harvest produce & market basket | 1600 × 1067 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/hero.jpg` | Verified Locally Hosted |
| `rice.jpg` | Harvested rice grains & paddy detail | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/rice.jpg` | Verified Locally Hosted |
| `pulses.jpg` | Assorted wholesale pulses & lentils | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/pulses.jpg` | Verified Locally Hosted |
| `apples.jpg` | Fresh red apples in orchard crates | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/apples.jpg` | Verified Locally Hosted |
| `bananas.jpg` | Fresh harvested G9 & Cavendish bananas | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/bananas.jpg` | Verified Locally Hosted |
| `coconuts.jpg` | Whole fresh culinary coconuts | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/coconuts.jpg` | Verified Locally Hosted |
| `supply-chain.jpg` | Logistics and commercial dispatch dock | 1200 × 800 JPEG | Unsplash Commercial Library | Commercial Open License | `public/images/supply-chain.jpg` | Verified Locally Hosted |

### Hotlink Remediation & Zero-Hotlink Audit
- **Remediation Completed (Milestone 1)**: `src/components/home/HeroSection.tsx` previously hotlinked an external CDN URL (`https://images.unsplash.com/photo-1595841696650-6f2048f32811...`). This external link was permanently purged and replaced with local `/images/hero.jpg` styled with a subtle dark overlay and luminosity blending.
- **Zero External Image Dependencies**: Grep verification across `src/` confirms 0 remaining external image links (`images.unsplash.com` = 0 occurrences).
- **Ethical Representation Policy**: Photos illustrate commodity varieties and general value-chain operations. They are not misrepresented as client-owned physical packhouses or proprietary farms. Commercial buyer accounts (e.g. D-Mart, Thumbi, Mani's Cafe, Udupi Hotels) are represented purely in text format with explicit trade disclaimers; no trademarked client logos are displayed without written authorization.

---

## 6. Client Pre-Launch Checklist

Before connecting the custom `.com` domain, the client should provide / confirm:
- [ ] Official corporate email address (currently mapped to `procurement@ttbagro.com`).
- [ ] Primary commercial phone number (currently omitted from public display to prevent placeholder numbers).
- [ ] Official high-resolution director portraits (optional; neutral monogram badges currently rendered).
- [ ] Written authorization from brand reference accounts if logo graphics are desired in the future.
- [ ] Statutory registration copies (FSSAI, GSTIN, IEC, APEDA) for internal commercial onboarding records.
