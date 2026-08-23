# Design System: The Harvest Ledger

## 1. Visual World & Direction
- **Identity**: Contemporary Indian Agricultural Trading House — where authentic commodity evidence, calm editorial craft, and tangible supply movement lead the interface.
- **Tone**: Grounded, authoritative, dignified, and commercially serious. Built for commercial retail and institutional procurement executives.
- **Canvas**: Cream canvas (`#F1EBDD`) meeting deep evergreen fields (`#0A2118`), with antique gold (`#B99045`) applied like a trade-marking foil on hairlines, route traces, and key numbers.
- **Imagery**: Real, local, non-AI product and supply-chain photography with high-craft editorial crops. Never generic cards, SaaS dashboards, or neon pills.

---

## 2. Color Palette & Functional Roles

| Token Name | Value | Role |
|---|---|---|
| **Deep Evergreen** | `#0A2118` | Primary dark backdrops (Hero, Footer, Navigation surfaces) |
| **Field Green** | `#17412E` | Primary button fill, active states, dark borders |
| **Leaf Green** | `#326049` | Subdued green accents, secondary markers, subtle highlights |
| **Cream Canvas** | `#F1EBDD` | Primary light background canvas across all route pages |
| **Deep Parchment** | `#E4D7BA` | Elevated cards, input fields, and diagnostic panels |
| **Primary Ink** | `#122017` | High-contrast editorial typography and headlines |
| **Soft Ink** | `#405046` | Body text, captions, and secondary descriptions |
| **Antique Gold** | `#B99045` | Hairlines, numerals, route strokes, and subtle focus states |
| **Soft Gold** | `#D6B66E` | Hover borders, badge accents, and warm highlights |
| **Muted Brick Red** | `#8F2D2D` | Form validation and error notices only |

### Gradient Restrictions (Strictly Limited to 3 Cases):
1. Hero’s ambient deep-green / gold atmospheric wash (slow 28–36s drift).
2. Low-opacity gold bloom behind selected commodity photography.
3. Subtle dark-to-transparent image overlays for typographic legibility.
*No rainbow gradients, no gradient text fills, no shiny moving buttons.*

---

## 3. Typographic System

- **Display (H1 & Primary Headlines)**: `Fraunces`, serif, font-weight 500–600, tracking tight (`letter-spacing: -0.02em`).
- **Body & UI**: `Plus Jakarta Sans`, sans-serif, relaxed leading, max line length ~64ch.
- **Figures & Codes**: `JetBrains Mono` for ₹228 Cr turnover, registered address, coordinates, and diagnostic data.
- **Scale**:
  - Hero H1: `clamp(2.25rem, 5vw, 3.5rem)` in Fraunces.
  - Section H2: `clamp(1.75rem, 3.5vw, 2.5rem)` in Fraunces / Jakarta Semibold.
  - Small Caps Eyebrow: `10px–11px` uppercase tracking `0.15em` in Antique Gold or Soft Ink.
  - Body: `15px–16px` (`0.9375rem–1rem`), leading `1.65`.

---

## 4. Geometry & Component Tokens

- **Max Width**: 1180px–1240px container with generous breathing room.
- **Border Radius**: 0px to 8px max (sharp to slightly softened corners; never bubble pills).
- **Buttons**:
  - **Primary**: `bg-[#17412E]`, 1px gold hairline (`border-[#B99045]/40`), cream text (`#F1EBDD`), `rounded-md` (4px–6px).
  - **Secondary**: `bg-[#E4D7BA]`, ink text (`#122017`), 1px line border.
  - **Ghost / Text Link**: Underline on hover with directional arrow.
  - **Tactile**: `:active` `scale(0.98)` with 140ms ease-out.
- **Cards & Data Panels**: Deep parchment surface (`#E4D7BA`), subtle 1px border (`#122017/10`), soft natural shadow.

---

## 5. Motion Budget (Max 5 Refined Micro-Interactions)
1. **Hero Ambient Field**: 28–36s slow deep-green/gold radial drift (disabled on reduced-motion).
2. **Hero One-Time Reveal**: 400–600ms opacity + 6px translateY ease `[0.16, 1, 0.3, 1]`.
3. **Product Image Crossfade**: 200ms ease when active commodity tab changes.
4. **SVG Route Highlight**: 220ms smooth path stroke when map node or supply stage shifts.
5. **Q&A Accordion Expand**: 180ms height and opacity easing.

---

## 6. Anti-Patterns & Copy Hygiene
- **Strictly Banned**: *powerhouse, engine, architecture, excellence, institutional SLA, live workflow, zero hallucination, mission-critical, uncompromising, unmatched, 100% fill-rate, Active Gate, B2B Agri Assistant* as corporate chrome.
- **Factual Integrity**: Zero fake numbers, zero fake certificate cards, zero fake office locations.
