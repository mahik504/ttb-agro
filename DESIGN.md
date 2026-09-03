# Design System: The Harvest Ledger (A + C Hybrid)

## 1. Art Direction & Visual Foundation
The TTB Agro corporate B2B interface is rooted in an **A + C Hybrid** art direction:
- **Direction A (Heritage Trading House)**: Authoritative corporate editorial craft, deep evergreen and cream neutrals, high-contrast serif typography (`Fraunces`), asymmetric layout storytelling, and tangible supply chain evidence.
- **Direction C (Global Supply Intelligence)**: Data-rich procurement intelligence, structured ledger tables, technical monospace figures (`JetBrains Mono`), and restrained interactive global trade cartography.

The interface communicates institutional scale, statutory credibility, and trade precision to commercial retail supermarket buyers, QSR procurement heads, and institutional food-service networks.

---

## 2. Locked Design Tokens

### The Harvest Ledger Color Matrix
All tokens are defined in `tailwind.config.js` and exposed via `:root` CSS custom variables in `src/index.css`:

| Token Group | Shade / Scale | Hex Value | CSS Variable | Functional Role |
|---|---|---|---|---|
| **evergreen** | `950` (DEFAULT) | `#0A2118` | `--evergreen-950` | Primary dark backdrops (Hero, Footer, Navbar) |
| | `900` | `#0F2D22` | `--evergreen-900` | Elevated dark ledger cards and containers |
| | `800` | `#14382B` | `--evergreen-800` | Dark surface borders and subtle hover fills |
| **field** | `900` (DEFAULT) | `#17412E` | `--field-900` | Primary action button fills, active navigation states |
| | `800` | `#215A40` | `--field-800` | Hover state for primary buttons and field tags |
| | `700` | `#2C7352` | `--field-700` | Active highlights and secondary badges |
| **leaf** | `800` (DEFAULT) | `#326049` | `--leaf-800` | Deep botanical accents, origin markers |
| | `700` | `#3E785C` | `--leaf-700` | Mid botanical indicators |
| | `600` | `#4A906F` | `--leaf-600` | Vibrant agricultural telemetry |
| **cream** | `50` | `#FBF9F4` | `--cream-50` | Ultra-light paper background tint |
| | `100` (DEFAULT) | `#F1EBDD` | `--cream-100` | Primary light page canvas across all routes |
| | `200` | `#E8DEC9` | `--cream-200` | Warm parchment card fills |
| **parchment** | `100` (DEFAULT) | `#E4D7BA` | `--parchment-100` | Elevated diagnostic panels, inputs, secondary buttons |
| | `200` | `#D5C49F` | `--parchment-200` | Deep ledger boundaries, table striping |
| | `300` | `#C6B184` | `--parchment-300` | High-contrast parchment borders |
| **ink** | `950` | `#0B130E` | `--ink-950` | Pitch black typography, high-impact numbers |
| | `900` (DEFAULT) | `#122017` | `--ink-900` | Primary editorial body and headline color |
| | `800` | `#1A2F22` | `--ink-800` | Subdued secondary text |
| | `soft` | `#405046` | `--ink-soft` | Captions, metadata, disclaimers |
| **gold** | `400` | `#C8A359` | `--gold-400` | Light antique gold hover borders |
| | `500` (DEFAULT) | `#B99045` | `--gold-500` | Primary trade hairline foil, numerals, route strokes |
| | `600` | `#A47D36` | `--gold-600` | Deep burnished gold accents |
| **paper** | `50` (DEFAULT) | `#FBF9F4` | `--paper-50` | Pure ledger paper ground |
| | `100` | `#F5F1E8` | `--paper-100` | Textured paper ground |
| **danger** | `DEFAULT` | `#8F2D2D` | `--danger` | Form validation and compliance alerts only |

---

## 3. Typographic System & Strict Lock

Typography is strictly locked to three complementary typefaces:

1. **Display Serif — `Fraunces`**:
   - Usage: Primary headlines (`h1` through `h3`), section titles, hero statement, editorial pull quotes.
   - Weights: `500` (Medium), `600` (SemiBold).
   - Letter Spacing: Tight (`-0.02em` to `-0.04em`).
   - Fallback: `Georgia, serif`.

2. **Body & UI Sans — `Plus Jakarta Sans`**:
   - Usage: Body copy, navigation links, form inputs, buttons, tooltips.
   - Weights: `400` (Regular), `500` (Medium), `600` (SemiBold).
   - Line Height: Relaxed (`1.6` to `1.75`), maximum line length ~64ch.
   - Fallback: `system-ui, sans-serif`.

3. **Technical Monospace — `JetBrains Mono`**:
   - Usage: Financial scales (₹228 Cr turnover), QC telemetry, geographic coordinates, trade corridor codes, status badges, timestamps.
   - Weights: `400` (Regular), `500` (Medium).
   - Tracking: Uppercase with wide tracking (`0.12em` to `0.18em`).
   - Fallback: `monospace`.

### 🚫 Typography Purge & Anti-Default Rule
- **Space Grotesk** and **Inter** are completely purged from `index.html`, `src/index.css`, and `tailwind.config.js`.
- No component may import or specify Space Grotesk or Inter.

---

## 4. Grid, Geometry & Component Architecture

### Layout Grid
- **Container**: Max width `1180px–1280px` (`max-w-7xl` with `px-6 sm:px-8 lg:px-12`).
- **Asymmetric Composition**: Avoid repetitive 3-column card monotony. Use 7:5 or 8:4 column splits, full-bleed imagery bands, and staggered narrative blocks.
- **Whitespace**: Deliberate generous vertical padding (`py-16` to `py-24` on desktop) creating an unhurried, institutional reading pace.

### Geometry & Borders
- **Border Radius**: Sharp to slightly softened corners only (`rounded-none` or `rounded-sm` / `rounded-md` 2px–6px max).
- **Hairlines**: 1px gold/parchment hairlines (`border-gold-500/25` or `border-parchment-200/30`, `.ledger-hairline`).
- **Badges**: Crisp rectangular structured badges (`rounded-none`, 1px gold/parchment border). Strictly NO bubble/pill badges (`rounded-full`).

### Buttons & Interactive Controls
- **Primary Button**: Filled with `bg-field-900` (`#17412E`), bordered by 1px gold hairline (`border-gold-500/40`), text `text-cream-100`, tactile active feedback (`:active scale(0.98)`).
- **Secondary Button**: Filled with `bg-parchment-100` (`#E4D7BA`), text `text-ink-900`, 1px line border.
- **Text Link**: Underline on hover with directional arrow in `gold-500`.

---

## 5. Motion Budget & Guidelines

Motion is restrained, calm, and physical (max 5 micro-interactions across the platform):
1. **Hero Atmospheric Wash**: 28–36s slow deep-green/gold radial drift in CSS (`.harvest-light-field`), disabled on reduced motion.
2. **Hero Editorial Reveal**: 500–700ms opacity + 15–25px translateY with cubic-bezier `[0.16, 1, 0.3, 1]`.
3. **Lenis Smooth Scroll**: Inertial smooth scrolling for desktop browsers, providing calm weight to page traversal.
4. **GSAP Micro-Interactions**: Scroll-triggered hairlines, count-up metric rolls, and supply node reveals.
5. **Interactive Network Cartography**: Restrained Canvas/SVG coordinate nodes and arcs connecting origin hubs to Navi Mumbai.

### Accessibility: Reduced Motion
- `@media (prefers-reduced-motion: reduce)` is enforced globally in `src/index.css`.
- All CSS animations and transitions collapse to instantaneous (0.01ms).
- Lenis smooth scrolling disables automatically when reduced motion is preferred.

---

## 6. Anti-Slop & Cliché Banishment Rules

The following generic AI / SaaS tropes are strictly prohibited in code and design:
1. **NO Glassmorphism**: `.glass-panel` and `.dark-glass-panel` are permanently eliminated. Use solid, high-contrast surfaces (`bg-evergreen-950`, `bg-evergreen-900/90`, `bg-cream-100`, `bg-parchment-100`).
2. **NO Text Gradients**: `.text-gradient` and rainbow text fills are banned. Use high-contrast ink or warm gold typography.
3. **NO Neon Glowing Orbs**: `blur-3xl` glowing spheres and pseudo-cosmic gradients are banned.
4. **NO Bubble Pill Badges**: `rounded-full` pill tags are banned in favor of structured architectural rectangles.
5. **NO External CDN Image Hotlinks**: All images must be hosted locally in `public/images/` with documented provenance in `docs/CONTENT_VERIFICATION.md`.
6. **NO Corporate Hype Buzzwords**: Banned terms include *powerhouse, engine, mission-critical, unmatched, zero hallucination, live workflow, institutional SLA*. Use grounded commercial trade vocabulary: *procurement, origin aggregation, dual-stage QC, trade corridors, retail network dispatch*.
7. **NO Fabricated Claims**: ₹228 Cr is strictly the combined group turnover. Registered office is Seawoods, Navi Mumbai. Directors are Mr. Prakash Patil & Mr. Harshal Nikam.

---

## 7. Asset Provenance & Standards
All photographic assets must adhere to the standards registered in `docs/CONTENT_VERIFICATION.md`:
- Stored locally in `public/images/`.
- Commercial Open License verified.
- Editorial crops and color grading calibrated to The Harvest Ledger palette.
