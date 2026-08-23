# TTB Agro — Antigravity implementation plan

**Copy this entire file into Google Antigravity with `C:\projects\TTB Agro` open. Do not start a new repo.**

First line to run:

> Open `C:\projects\TTB Agro`. Read `C:\Users\Asus\Downloads\TTB_Agro_Strategic_Profile.pdf` (11 image slides; no text layer). Write `DESIGN.md` from Phase 1 of this packet. Inspect `http://localhost:3000` and `/contact`. Then execute Phases 1–12 in order. Stack is **Vite + React 18 + TypeScript + React Router + Tailwind**. It is **not** Next.js. Do not scaffold a new project.

---

## 0. Who wrote this and what was actually inspected

This packet was written after a live inspection on the author’s Windows machine. Previous cloud briefs that assumed Next.js, invented “NTFT”, or guessed the look **are wrong**. Use this file only.

Inspected on 23 Aug 2026:

| Source | Path / URL | Result |
|---|---|---|
| Repo | `C:\projects\TTB Agro` | Vite React SPA. 11 routes. Data in `src/data/`. |
| Live site | `http://localhost:3000` (Vite `server.port: 3000`) | Homepage, `/contact`, `/quality-compliance`, `/commodities#fresh-produce` clicked through with Playwright. |
| PDF | `C:\Users\Asus\Downloads\TTB_Agro_Strategic_Profile.pdf` | 11 pages, **image-only** (Gemini Notebook watermark). Rendered and read page by page. |
| Contact form | Playwright submit | UI shows “B2B RFP Received Successfully”. **Zero mail/network request.** `resourceDelta: 0`. |

Do **not** change the website’s information architecture or page list. Improve `DESIGN.md`, colour, type, hero, buttons, motion, copy hygiene, PDF-fact alignment, form delivery, and security.

---

## 1. Hard locks (do not wander)

1. Keep **Vite + React + React Router + Tailwind**. Do not migrate to Next.js, Remix, or a new CSS framework.
2. Keep every existing route: `/` `/about` `/commodities` `/supply-chain` `/network` `/group` `/quality-compliance` `/contact` `/privacy-policy` `/terms` `/disclaimer` plus 404.
3. Keep `/contact`. Make the form actually send mail.
4. **One** `DESIGN.md` for the whole site. No second palette, no chatbot skin that breaks the system.
5. PDF wins every fact fight. If a number, variety, license, email, phone, MOQ, temperature, or SLA is **not** on the 11 slides, remove it from the public UI or mark it as *indicative — confirm with the desk*.
6. `₹228 Cr` is **combined group turnover**, never TTB Agro’s own revenue.
7. Buyer names as **text**. **No logos** (D-Mart, Thumbi, Mani’s Cafe, Udupi Hotels) unless the client sends written authorisation plus files.
8. No fake FSSAI / GSTIN / IEC / APEDA / ISO numbers. No “Verified License on File” theatre. No `27XXXXX0000X1Z5` on a live page.
9. Chatbot **already exists**. Keep it. Do not add a second bot. Do not auto-open. Shrink it. Answers only from frozen FAQ/PDF facts; else send people to `/contact`.
10. No Three.js, no 3D globe, no particles, no Mapbox unless a token already exists in `.env` (it does not). Atmosphere = CSS light wash only.
11. `framer-motion` is in `package.json` and **unused**. Either use it for the 4 allowed motions in Phase 1, or remove the dependency. Do not add GSAP + Framer + React Bits together.
12. Do not add `Co-authored-by: Cursor`. Author stays MAHI if you commit (only if the human asks).
13. Do not invent a backend framework. Form = Formspree **or** Web3Forms **or** Resend via a tiny Vercel serverless function. Pick **one**.
14. After you finish, stop. Do not add a blog, login, CMS, or shop.

---

## 2. What the current site actually is

A usable first draft of a B2B agri trading brochure. It already has the right pages and the right story spine. It looks like a generic “forest SaaS” template: too many cards, too many pills, gradient headlines, Sparkles icons, a fake “Live” ping, Unsplash photos, and copy that overclaims.

**Keep the skeleton. Replace the clothes.**

| Layer | Current |
|---|---|
| App | `src/App.tsx` — React Router, Navbar, Footer, floating Agri Assistant |
| Tokens | `tailwind.config.js` forest / agri / earth / sand / amberGold + `src/index.css` |
| Type | Plus Jakarta Sans + JetBrains Mono (`index.html` Google Fonts). Outfit is named in Tailwind and **not loaded**. |
| Hero | Asymmetric 7/5 split. Left: philosophy pill + gradient H1 + 3 CTAs. Right: “Live Procurement Workflow” card stack. |
| Home sections | Hero → 4-stage visualizer (cards) → 5 commodity cards → seasonal chart → node list “map” → group 4 cards → 3 pillars → CTA |
| Contact | RFP form + mailto + Google Maps iframe + FAQ. Form `setTimeout` fake success. |
| Chatbot | `AgriAssistantModal` + keyword FAQ in `assistantKnowledge.ts`. FAB always visible. |
| Data | `src/data/*.ts` — this is the client-edit surface. Preserve it. |

### Real bugs found in the live app

| Severity | Bug | Evidence |
|---|---|---|
| Blocker | Contact form does not email. Success is a 800ms timeout. | `src/components/contact/RfpForm.tsx`. Playwright: success copy appeared, **no POST**. Form `method=get`, inputs have **no `name`**. |
| High | Tablet nav broken (768–1023px). Desktop links are `lg:flex`, hamburger is `md:hidden`. Between md and lg there is **no page menu**. | `Navbar.tsx`. Playwright at 768px: only “B2B Assistant” + “Partner With Us”. |
| High | Footer hashes 404 in place: `/commodities#fresh-produce`, `/commodities#staples`, `/supply-chain#qc-protocols`. Those ids do not exist. Commodity ids are `rice` `pulses` `apples` `bananas` `coconut`. | Playwright opened `/commodities#fresh-produce` — no matching element. |
| High | `/commodities?commodity=` / `href={`/contact?commodity=...`}` is ignored. RfpForm never reads the query string. | `CommoditiesPage.tsx` vs `RfpForm.tsx` |
| High | Quality page claims “Verified Regulatory Compliance”, badges “Active Group License” / “Verified Entity”, GSTIN `27XXXXX0000X1Z5`, “100% Lot Screened”. PDF has **zero** certificates. | Live `/quality-compliance` |
| Medium | Chatbot action links use `<a href>` (full reload), not React Router `Link`. | `AgriAssistantModal.tsx` |
| Medium | `og-image.jpg` referenced in `index.html`, file **missing** from `public/`. | Only `favicon.svg`, `robots.txt`, `sitemap.xml` |
| Medium | Unsplash hotlinks for all 5 commodities. Looks stock, leaks requests, can break. | `commodities.ts` `imageUrl` |
| Low | Breadcrumbs use `<a href>` not `Link` (reload). | `PageHeader.tsx` |
| Low | `framer-motion` installed, never imported. Outfit font named, never loaded. | `package.json`, `index.html` |

---

## 3. PDF fact register (source of truth)

PDF: `C:\Users\Asus\Downloads\TTB_Agro_Strategic_Profile.pdf` — 11 slides, no extractable text. Copy it into `docs/` **only if the client wants it in the repo**; do not commit if the repo is public.

Treat the deck as the only authorised commercial story. Status legend:

- **Keep** — on the PDF, already on the site, wording OK
- **Reword** — on the PDF, site overclaims or invents extra
- **Remove from public UI** — not on the PDF
- **Client must supply** — needed to launch, not in the PDF

### Slide 1 — Cover

| Claim | Status |
|---|---|
| Legal name: TTB Agro India Private Limited | Keep |
| Line: Resilient Supply Chains Connecting Origin Growers to Organised Retail | Keep. Drop the extra em-dash poetry if you tighten the hero. Do not invent a new slogan. |

### Slide 2 — Philosophy

| Claim | Status |
|---|---|
| Farmer-First Procurement. Customer-First Quality. | Keep (site uses a comma; PDF uses two sentences. Either is fine.) |
| Sourcing with Integrity — growers across India and overseas origins; fair value; transparent practices | Keep, shorter |
| Delivering with Precision — retail chains, hospitality, institutional buyers; consistent quality and volume | Keep, shorter |

### Slide 3 — Group turnover

| Claim | Status |
|---|---|
| ₹228 Cr **Total Group Turnover** | Keep. Always “group” / “combined ecosystem”. |
| Just Go Eco ₹98 Cr | Keep |
| SP Coconut ₹80 Cr | Keep |
| Just Go Project ₹25 Cr | Keep |
| STP Traders ₹25 Cr | Keep. Do **not** present ₹25 Cr as TTB Agro’s standalone turnover. Slide 4 groups “TTB Agro & STP Traders” as the trading engine; the donut labels the ₹25 Cr slice **STP Traders**. Caption: *TTB Agro operates alongside these sister entities.* |

### Slide 4 — Ecosystem loop

| Claim | Status |
|---|---|
| Trading & Procurement = TTB Agro & STP Traders. Staples: rice and pulses. Fresh: apples and bananas. | Keep |
| Processing & Value-Add = SP Coconut. Fresh coconuts into value-added formats, zero waste, higher margins. | Keep. Do **not** invent “100,000+ nuts daily” (not on PDF; currently on `/supply-chain`). |
| Sustainability & Execution = Just Go Eco & Just Go Project. Eco-friendly practices across group operations. | Keep. Site copy about “eco-packaging, circular economy, coir, bio-carbon” is extra — cut unless the client confirms. |

### Slide 5 — Geographic network

| Node | Product | Status |
|---|---|---|
| Navi Mumbai | Headquarters | Keep |
| Iran & Turkey | Premium imported apples | Keep |
| Himachal Pradesh & J&K | Local apples | Keep |
| Maharashtra | G9 bananas | Keep |
| Karnataka — Mysore, Hosur, Chitradurga | Coconuts & Otto bananas | Keep those town names; they are on the PDF |
| Tamil Nadu — Pollachi, Erode | Rice, coconuts, bananas | Keep those town names |

**Remove or do not lead with** towns the PDF does not name: Thanjavur, Tirunelveli, Jalgaon, Solapur, Theni, Shimla, Kinnaur, Sopore, Shopian, Madhya Pradesh as a pulses origin. “Pan-India” for pulses is enough.

JNPT / Nhava Sheva is a reasonable Navi Mumbai inference, not a PDF line. You may say “Western India port corridor” or keep JNPT only as a quiet logistics note, not a branded claim.

### Slide 6 — Commodity matrix (this is the product table)

| Produce | Category | Key varieties & grades (PDF) | Origin | Strategy |
|---|---|---|---|---|
| Rice | Staples | Bulk & processed grades | Tamil Nadu | Direct local aggregation |
| Pulses | Staples | Retail & institutional | Pan-India | General trading |
| Apple | Fresh | Premium imported & local | Iran, Turkey, Himachal Pradesh, Kashmir | Dedicated import channel |
| Banana | Fresh | Otto & G9 | Tamil Nadu, Karnataka, Maharashtra | Multi-state sourcing |
| Coconut | Fresh | Fresh & processed | Tamil Nadu, Karnataka | Direct local aggregation |

**Not on the PDF** (currently invented in `commodities.ts`): Sona Masoori, Ponni, Toor/Chana/Moong/Urad as a catalogue, Red Delicious / Royal Gala / Fuji as a catalogue, Robusta / Red Banana, exact kg pack sizes, shelf-life months, MOQs in MT, cold-chain °C, moisture <14%, Brix, ethylene colour stages, “under 24 hours farm-to-dispatch”.

Rule: public commodity pages show **PDF columns only**. Optional “indicative handling notes” behind a line: *Specifications are confirmed on each purchase order.* If the client later sends a spec sheet, put numbers in `src/data/commodities.ts`.

### Slide 7 — Seasonal de-risking

Qualitative: domestic peaks and off-season dips; Iran/Turkey imports + multi-state sourcing fill the troughs; “year-round availability for retail partners”; neutralize seasonal price volatility.

**Remove:** “Guaranteed Continuous Fill Rate: 100%”, fake monthly % bars presented as measured data, “Combined 100% SLA”. You may keep a **schematic** two-wave diagram labelled as a model, not as telemetry.

### Slide 8 — Supply chain (four steps — keep this journey)

1. Origin aggregation — farmer groups and local aggregators in TN, KA, MH, HP, J&K  
2. Global supplement — dedicated import channels from Iran and Turkey for domestic off-season dips  
3. Dual-stage QC — checks at **procurement** and **dispatch**  
4. Last-mile dispatch — organised retail, food service, institutional buyers  

**Reword:** site’s four “QC gates” with IoT loggers, 0.5% rejection, barcode e-POD, “Active Gate”, “100% Lot Screened”. PDF only authorises **two** QC moments. You may keep a four-**step journey** (aggregation → import → QC → dispatch) but QC copy must stay dual-stage, not a fake lab SOP.

### Slide 9 — Buyer segments (names, not logos)

| Segment | Focus (PDF) | Names on the slide |
|---|---|---|
| Organised retail | Large-scale, consistent volume | D-Mart |
| QSR & café networks | Premium quality, steady daily supply | Thumbi, Mani’s Cafe |
| Regional hospitality | Bulk institutional food service | Udupi Hotels; “regional retail partners” |

Show as **text**. Disclaimer stays. No logo files.

### Slide 10 — Three pillars (keep)

1. Financial scale — backed by an established group with ₹228 Cr+ combined turnover  
2. Agile reach — local roots across India + strategic imports for year-round supply  
3. Market trust — staples and fresh produce; trusted by retail and hospitality  

Drop the footer line “Enterprise SLA Guarantee” (not on PDF).

### Slide 11 — Leadership and office

| Item | PDF | Site |
|---|---|---|
| Mr. Prakash Patil, Director | Yes | Keep name + title only. Cut invented “Strategic Sourcing…” bios unless the client writes them. |
| Mr. Harshal Nikam, Director | Yes | Same |
| Photos | Grey silhouettes | Keep monograms / empty frames. Do not generate fake portraits. |
| Address | Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706 | Keep exact |

### Not on any slide — do not publish as fact

- Phone numbers (`+91 22 4800 XXXX` is amateur and is already in `company.ts` — **do not render it**)
- Emails `procurement@ttbagro.com`, `rfp@ttbagro.com`, `operations@ttbagro.com` (usable as **placeholders** until the client confirms; do not invent more)
- Working hours, “24/7 cold-chain monitoring”
- CIN, PAN, TAN, FSSAI, GSTIN, IEC, APEDA, ISO 9001/22000
- “Live procurement workflow”
- Chatbot as an “engine”
- Domain `ttbagro.com` as if it already resolves (canonical URL is fine once they buy it)

---

## 4. What it looks like today (so you do not guess)

**Desktop homepage:** dark forest header, green radial-dot grid, left-aligned H1 with green→gold gradient fill, three competing CTAs, a right-hand stacked “workflow” card with a blinking green dot that pretends to be live. Metrics row of four mini-cards. Then the rest of the page is **card grid after card grid**. Navbar has **eight** text links plus Assistant plus Partner. Utility bar repeats ₹228 Cr. Floating pill “B2B Agri Assistant” with Sparkles.

**Contact:** same dark page header template (“COMMERCIAL DESK & RFP ENGINE”), form in a white card, invented emails, Google Map of Seawoods. Submitting the form lies.

**Quality:** the most dangerous page. It looks like a certificate vault. It is empty of real numbers and full of “verified” language.

**Tone problem:** every heading is “Institutional / Engineered / Architecture / Excellence / Powerhouse”. That is AI slop. A sales buyer wants calm, specific, short.

Target after this pass: a **trading house** site (Olam Agri / Louis Dreyfus class), not a startup landing page. Photography, paper, ink, one gold line, one button.

---

## 5. DESIGN.md you will write (one file, whole site)

Create `DESIGN.md` at the repo root **before** restyling components. Then restyle `tailwind.config.js`, `src/index.css`, `index.html` fonts, `Button`, `Card`, `Badge`, `SectionHeading`, `Navbar`, `Footer`, `PageHeader`, then pages. Tint everything to this document. Do not invent a second theme.

### Visual world

**Editorial swiss agri-house.** Paper, ink, field green, a little gold. Centered ceremonial hero. Quiet interior. Not bento, not glassmorphism, not neo, not purple SaaS, not Inter-on-white dashboard.

References to **study, not copy**:

| Role | URL |
|---|---|
| Agri story / photography | https://www.olamagri.com/ |
| Corporate trading house | https://www.ldc.com/ and https://www.ldc.com/in/en/ldc-in-india/ |
| Motion restraint | https://neplen.com/works/classact — duration and ease only, not their brand |
| Type craft | https://rsms.me/inter/ is a **lesson in spacing**, not the font you will use |
| Extra principles | https://www.golden-agri.com/ · ITC Agri business page |

Do not clone their layouts. Steal: full-bleed crop photography, few words, one CTA, almost no cards.

### Atmosphere

A slow **CSS mesh wash** on dark surfaces (hero, page headers, footer, final CTA): two large radial gradients (forest and gold) drifting 28–40s, opposite phase, opacity ≤ 0.18. No particles. No 3D. `@media (prefers-reduced-motion: reduce)` freezes the wash on the last keyframe.

### Colour (replace the current token soup)

Keep the `forest` name if you want less churn, but **stop using bright `agri-400` greens and filled amber CTAs**. Gold is a hairline and a rare numeral, not a button fill.

```
--paper:        #F4EFE4    /* page background */
--paper-2:      #FBF7EE    /* elevated surface */
--ink:          #0E1C14    /* primary text / dark surfaces */
--ink-soft:     #3D4A42    /* body on paper */
--field:        #1A3C2C    /* primary button, nav dark */
--field-deep:   #0B1E15    /* hero / footer */
--leaf:         #2D5A43    /* links, icons */
--gold:         #C4A35A    /* hairlines, small caps, figures */
--gold-deep:    #8C7033
--line:         rgba(14, 28, 20, 0.10)
--line-gold:    rgba(196, 163, 90, 0.40)
--danger:       #8F2D2D
```

Banned: `#22C55E` lime, purple, neon, `bg-clip-text` rainbow headings, blue “import” badges, blinking live dots.

### Type

- **Display (H1 only):** Fraunces (wght 500–600), slight optical size. Ceremonial, not costume.
- **UI / body:** Plus Jakarta Sans (already loaded). Keep it. Do **not** switch the whole site to Inter.
- **Figures:** JetBrains Mono for ₹228 Cr and addresses only.
- Load Fraunces in `index.html` next to Jakarta. Remove the unused Outfit mention in `tailwind.config.js` or actually load it — do not leave a dead family name.
- Body max ~62ch. Headlines: tracking tight, not `font-extrabold` on every line. Stop stacking a Badge + eyebrow + H1 + gradient span + subtitle on every page.

### Layout

- Max width 1120–1200px. Page padding 24 / 40 / 64.
- **Hero is centered**, not 7/5. Interior pages: left-aligned titles under a thin gold rule, not a repeated full-bleed marketing header for every route. You may keep a shorter dark band, but it must not clone the homepage hero.
- Home: fewer sections. If two sections say the same thing, merge them.
- Cards: allowed for commodities and group entities. **Not** for every paragraph. Prefer rules, lists, and a journey line.

### Buttons (one system)

| Kind | Look | Use |
|---|---|---|
| Primary | `field` fill, 1px gold hairline, cream label, radius 4px (not 12px pills) | One per view. Default label: **Discuss procurement requirements** → `/contact` |
| Secondary | paper fill, ink label, 1px `line` | Secondary only |
| Ghost | transparent, gold or cream underline on hover | Nav, footer |

States: hover 120ms background; `:active` `scale(0.98)` 140ms; focus-visible 2px gold offset. Disabled 40% opacity. Never `transition: all`.

Kill variant `amber` as a primary CTA. Gold is not a fill.

### Motion budget (Emil gate — max 5)

1. Hero wash 28–40s (rare, delight). Reduced-motion: off.  
2. Button press 140ms.  
3. Page content enter 200ms opacity + 8px translateY on route change.  
4. Supply-journey step change 220ms.  
5. FAQ accordion height + opacity 200ms.

Reject: typewriter, count-up, ping, sparkle, marquee, mouse-follower, 3D globe, Lottie everywhere, chatbot bounce.

### Anti-slop copy list (delete or rewrite)

Ban on the public site: *powerhouse, engine, engineerd, architecture, excellence, institutional SLA, live workflow, zero hallucination, mission-critical, uncompromising, unmatched, 100% fill-rate, Active Gate, B2B Agri Assistant* as chrome, Sparkles icons, PHILOSOPHY pills.

Replace CTA “Partner With Us” / “Submit Institutional RFP” with **Discuss procurement requirements** (primary) and **View what we source** (secondary).

---

## 6. Hero and homepage (the wow, without new pages)

### Hero

- Full viewport (min 88vh) dark `field-deep`.
- Slow green/gold wash (Phase 1).
- Optional: one **local** photograph of produce or a farm-to-shelf crop in the lower third, masked with a gradient. Prefer files in `public/images/` from the client or licensed stills. **Stop Unsplash URLs.** If no real photo yet, a typographic hero on the wash is more honest than stock rice bowls.
- Centered:
  - Small gold kicker: `TTB Agro India Private Limited`
  - H1 (Fraunces): `Resilient supply chains from origin growers to organised retail.`
  - One sentence, max 22 words, from slide 2 (integrity + precision). No “bridges farm-gate aggregations…” paragraph.
  - **One** primary button: Discuss procurement requirements → `/contact`
  - Optional text link: Our supply journey → `/supply-chain` (not a second filled button)
- Under the CTA, a **thin gold line** with four words: `Origin → QC → Dispatch → Retail` (not a card stack).
- Trust strip: `₹228 Cr group` · `Navi Mumbai` · `Rice, pulses, apples, bananas, coconut` — no fake “Live”.

Delete the right-column “Live Procurement Workflow” card from the hero. The four steps already exist lower on the page and on `/supply-chain`.

### Rest of home (keep order, reduce chrome)

1. Journey (existing visualizer) — tabs OK; remove “Institutional Buyer Guarantee” nested cards and “Active Gate”.  
2. Five commodities — table or 5-up with origin + strategy pills from slide 6, not Unsplash cards with MOQ.  
3. Seasonal model — schematic, labelled as a model.  
4. Network — honest schematic or labelled list mapping to Navi Mumbai. Do not call a button list a “map” unless you draw a simple SVG of India. SVG first. No Mapbox.  
5. Group — four entities + ₹228 Cr. Donut optional; a quiet figure is enough.  
6. Three pillars — typographic, not three hover-lift cards with “SLA Guarantee”.  
7. Close CTA — same primary button, address, mailto **if client confirmed email**.

---

## 7. Chatbot (it already exists — quiet it)

Do **not** delete unless the client says so. Do **not** add LLM APIs.

- Remove the always-on FAB label “B2B Agri Assistant” / Sparkles. Use a small field-coloured button, bottom-right, **icon + “Ask TTB”**, no auto-open.
- Navbar duplicate “B2B Assistant” — keep at most **one** entry point (FAB **or** nav, not both plus hero plus CTA).
- Knowledge: freeze to PDF + `faq.ts`. Fallback: “I can only answer what’s on this site. For volumes and pricing, use the contact form.”
- Use React Router `Link` for in-site actions, then `onClose`.
- Do not claim “zero hallucination” or “engine”.

---

## 8. Contact form (must actually email)

`RfpForm.tsx` today: validate → `setTimeout(800)` → fake success. Inputs have no `name`. Method GET to `/contact`.

**Do this:**

1. Add `name` attributes.  
2. Honeypot field `company_website` (hidden). If filled, fake-success and do not send.  
3. POST to **one** provider:
   - **Web3Forms** or **Formspree** (simplest for Vite), key in `.env` as `VITE_FORM_ACCESS_KEY` / `VITE_FORM_ENDPOINT`, **never** committed.  
   - Or a single Vercel serverless function that uses Resend.  
4. On real 2xx: success state. On failure: show error, keep the data, offer `mailto:` fallback using `companyInfo.contact.salesEmail`.  
5. Do not say “desk received your requirement” unless mail left the browser.  
6. Read `?commodity=` from the URL and pre-check that commodity.  
7. Default selected commodities: **none** (today Apples + Bananas are pre-ticked).  
8. Rate-limit: disable submit 8s after a try; provider-side limit as well.

Client inbox: until they confirm, send to the email they give you. Keep `src/data/company.ts` as the single place for that string.

---

## 9. Security and launch hygiene (this is their own site)

Static Vite brochure. Biggest risks are **lying**, **XSS from the form**, **leaked keys**, and **looking hacked because of fake certificates**.

- `.env` + `.gitignore`. No keys in `src/`.  
- Form: honeypot, length limits, email regex, no `dangerouslySetInnerHTML` on user text. Provider spam filter on.  
- `vercel.json`: SPA rewrite **and** security headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. CSP: default-src self; images self + Google Maps if you keep the embed; fonts Google or self-host. Drop Unsplash from CSP by dropping Unsplash.  
- Maps iframe: keep `loading=lazy`, or replace with a static OpenStreetMap / Google Maps **link** if CSP is easier.  
- `sourcemap: false` already. Keep it.  
- Remove placeholder GSTIN and XXXX phones from any render path.  
- No `console.log` of form payloads.  
- Dependencies: `npm audit` on the lockfile; remove unused `framer-motion` if you do not use it.  
- `og-image.jpg`: generate one simple branded still into `public/` or remove the meta tags.  
- Canonical `https://ttbagro.com` only after the client owns the domain.  
- Do not add auth, admin, or file upload.

This is not a pentest. Do not claim the site “cannot be hacked”. Claim: no secrets in the client, form is validated, headers are on, we do not publish fake licenses.

---

## 10. How the client changes phone, email, copy later

Do **not** build a CMS. Tell them (and put this in README, replacing the emoji README):

| Change | File |
|---|---|
| Legal name, tagline, address, emails, phones, hours | `src/data/company.ts` |
| Commodities | `src/data/commodities.ts` |
| Map nodes | `src/data/network.ts` |
| Group companies and ₹ figures | `src/data/group.ts` |
| Directors | `src/data/leadership.ts` |
| Certificate numbers (only when they send PDFs) | `src/data/certifications.ts` |
| Buyer names | `src/data/customers.ts` |
| Nav labels | `src/data/navigation.ts` |
| FAQ + chatbot answers | `src/data/faq.ts` and `src/components/chatbot/assistantKnowledge.ts` (keep them in sync) |
| Form destination | `.env` (`VITE_FORM_*`) |
| Logo / photos | `public/images/` then point paths from data files |

**Launch rule:** empty string or `null` for phone/email **hides** the row. Never show `XXXX`.

After a data edit: `npm run build` must pass.

---

## 11. Phases (order, do not skip)

### Phase 0 — Orient (30 min)

Open the folder. Run `npm run dev` if needed (`localhost:3000`). Open the PDF from Downloads. Read `src/data/*`, `App.tsx`, `HeroSection.tsx`, `RfpForm.tsx`, `Navbar.tsx`, `certifications.ts`. Confirm you will not create a new app.

### Phase 1 — DESIGN.md + tokens

Write `DESIGN.md` exactly as section 5. Update `tailwind.config.js` and `src/index.css` CSS variables. Load Fraunces. Fix focus rings to gold/field. Keep reduced-motion.

### Phase 2 — Primitives

Restyle `Button`, `Card`, `Badge`, `SectionHeading`, `PageHeader`. One primary button style everywhere. Kill amber-as-primary. Kill pill soup. Interior page headers: shorter, no gradient text.

### Phase 3 — Shell

Navbar: fix the **md–lg gap** (hamburger until `lg`, or links from `md`). Fewer competing CTAs. Footer: fix hash targets (`#fresh-produce` / `#staples` / `#qc-protocols` or change hrefs to real ids). Use `Link` in breadcrumbs. Quiet the assistant entry point.

### Phase 4 — Hero + home

Centered hero, wash, one CTA, gold journey line. Remove live ping and workflow card. Restyle remaining home sections to DESIGN.md. Merge duplicate copy.

### Phase 5 — Facts vs PDF

Edit `src/data/*` and page copy using section 3. Strip invented specs, fake %, 100k nuts, 0.5% rejections, 100% lot screened, “Live”, certificate numbers. Directors = name + Director. Group caption correct. Quality page becomes an **empty architecture**: “Certificates are shared with buyers during vendor onboarding” + dual-stage QC in two columns matching slide 8. No ISO card unless they send a certificate.

### Phase 6 — Commodities + network + supply chain

Five commodities only. Strategy labels from slide 6. Local images or typographic tiles. Network: SVG or labelled list to Navi Mumbai. Supply chain: four-step journey, dual-stage QC wording.

### Phase 7 — Contact + mail

Real POST. Query param commodity. Honeypot. Honest errors. Confirm emails with the client; hide unconfirmed ones.

### Phase 8 — Chatbot

Shrink, one entry, FAQ-only, Router links.

### Phase 9 — Security headers + SEO assets

`vercel.json` headers. Add or drop `og-image`. Self-host or keep Google Fonts with preconnect (already there). Remove Unsplash.

### Phase 10 — Copy pass

Read every route. Delete leftover slop. Legal pages: keep, shorten, stop claiming “secured corporate databases” if there is no database — say inquiries are emailed to the desk and stored in their mailbox.

### Phase 11 — QA

`npm run typecheck` and `npm run build`. Click every nav item, footer link, button, 404, FAQ, form success **and** failure (disconnect network). Keyboard tab. 360 / 768 / 1024 / 1440. `prefers-reduced-motion`. Tablet menu must work.

### Phase 12 — Stop

Update `CONTENT_VERIFICATION.md` so it matches reality (what is still waiting on the client). Update README without emoji spam. Do not add features.

---

## 12. Definition of done

- [ ] `DESIGN.md` exists and every page uses it  
- [ ] Hero is centered, one primary CTA, no fake live widget  
- [ ] Same buttons, type, gold hairline on all routes  
- [ ] PDF fact register respected; ₹228 Cr is group-only  
- [ ] No logo files; buyer names as text + disclaimer  
- [ ] Quality page does not show fake numbers or “verified license”  
- [ ] Form sends a real message to the configured inbox  
- [ ] Navbar works at 768px  
- [ ] Footer anchors land on real ids  
- [ ] Chatbot quiet, no auto-open, no second palette  
- [ ] No Unsplash; no `XXXX` phones on screen  
- [ ] `npm run build` clean  
- [ ] Reduced-motion turns off the wash  

**90+ look** only when the client supplies: real photos, authorised logos (optional), real certificate scans, a working inbox, and a real phone. Until then do not fake them.

---

## 13. Out of scope

New framework, new IA, blog, login, multilingual, payment, live GPS fleet, Mapbox, Three.js, generated director photos, extra commodities, a second chatbot, n8n, a CMS.

---

## 14. First reply Antigravity should send the human

Confirm: app root `C:\projects\TTB Agro`, PDF readable, localhost:3000 up, stack Vite not Next, Phase 0 done, starting Phase 1 `DESIGN.md`.
