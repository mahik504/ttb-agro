# Design System: TTB Agro India Private Limited

## 1. Visual Atmosphere & Philosophy
- **Identity**: Editorial Swiss Agricultural Trading House (inspired by global commodity leaders: Olam Agri, Louis Dreyfus Company).
- **Mood**: Dignified, grounded, calm, and institutional. Replaces generic startup gradients, neon pills, and card overload with high-craft editorial typography, refined hairlines, and muted natural surfaces.
- **Atmosphere**: Deep forest canvas with a slow, hypnotic CSS mesh wash (two subtle radial drifts at ≤0.18 opacity, 28–40s cycle). Zero particles, zero 3D canvas, zero noise clutter.
- **Reduced Motion**: Automatically pauses ambient mesh wash and replaces dynamic transitions with instant or gentle opacity fades.

## 2. Calibrated Color Palette

| Token Name | CSS Variable | Hex / Value | Functional Role |
|---|---|---|---|
| **Paper Canvas** | `--paper` | `#F4EFE4` | Primary light page background surface |
| **Elevated Surface** | `--paper-2` | `#FBF7EE` | Cards, table rows, and input surfaces |
| **Ink Text** | `--ink` | `#0E1C14` | Primary high-contrast typography |
| **Ink Soft** | `--ink-soft` | `#3D4A42` | Subtitles, body prose, and secondary metadata |
| **Field Green** | `--field` | `#1A3C2C` | Primary button fill, navigation accents |
| **Field Deep** | `--field-deep` | `#0B1E15` | Hero backdrop, dark header bands, footer |
| **Leaf Green** | `--leaf` | `#2D5A43` | Active link states, icons, subtle highlights |
| **Harvest Gold** | `--gold` | `#C4A35A` | Hairlines, numerals, small caps, badge borders |
| **Gold Deep** | `--gold-deep` | `#8C7033` | Gold hover states and borders |
| **Border Line** | `--line` | `rgba(14, 28, 20, 0.10)` | Structural dividers on light paper |
| **Gold Line** | `--line-gold` | `rgba(196, 163, 90, 0.40)` | Focus states and decorative accents |
| **Danger Red** | `--danger` | `#8F2D2D` | Form validation and error alerts |

**Strictly Banned Colors**: Neon green (`#22C55E`), neon orange/amber fills, purple/blue glows, rainbow gradient text fills, and dark pure blacks (`#000000`).

## 3. Typographic Architecture
- **Display (H1 & Key Ceremonial Headers)**: `Fraunces`, serif, font-weight 500–600, track-tight (`letter-spacing: -0.02em`).
- **Interface & Body Text**: `Plus Jakarta Sans`, sans-serif, relaxed leading, max line length ~62ch.
- **Monospace Figures & Codes**: `JetBrains Mono` for turnover figures (`₹228 Cr`), coordinates, and formal addresses.
- **Hierarchy**:
  - H1 (Hero): `clamp(2.25rem, 5vw, 3.75rem)` in Fraunces, track-tight.
  - H2 (Section Titles): `clamp(1.75rem, 3.5vw, 2.5rem)` in Fraunces / Jakarta Semibold.
  - Eyebrows / Kickers: Small caps, uppercase tracking (`letter-spacing: 0.1em`), harvest gold or muted ink.
  - Body: `1rem` (16px) or `0.875rem` (14px) with relaxed `leading-relaxed`.

## 4. Component Behaviors & Geometry
- **Buttons**:
  - **Primary**: `bg-field` (`#1A3C2C`), 1px gold hairline (`border-[#C4A35A]/50`), cream text (`#FBF7EE`), `rounded` (4px–6px, never bubbly pills).
  - **Secondary**: `bg-paper-2` (`#FBF7EE`), ink text (`#0E1C14`), 1px line border.
  - **Ghost**: Transparent, underline on hover.
  - **Tactile State**: `:active` `scale(0.98)` with 140ms ease-out transition. Focus ring in 2px Harvest Gold.
- **Cards**:
  - Used sparingly for commodities and group entities. Flat paper surfaces with 1px border (`--line`), crisp corners (4px–8px radius), and soft natural shadow (never heavy SaaS drop shadows).
- **Form Inputs**:
  - Crisp light borders, floating labels removed, focus border in Harvest Gold. Includes honeypot field and validation feedback.
- **Badges**:
  - Restrained hairlines, uppercase 10px tracking, no bright neon fills.

## 5. Layout & Spatial Composition
- **Page Containment**: Maximum width 1160px–1200px centered.
- **Hero Structure**: Centered ceremonial composition on `Field Deep` (`#0B1E15`), with single primary CTA, gold journey path, and trust strip.
- **Interior Headers**: Left-aligned, concise, bounded under a thin gold rule (no repeating full-bleed marketing clutter).
- **Mobile / Tablet Responsiveness**: Clean single-column collapse under 768px, seamless drawer navigation across all tablet viewports (768px–1023px).

## 6. Motion Budget (Max 5 Allowed Micro-Interactions)
1. **Hero Ambient Wash**: 28–40s slow radial drift (GPU-accelerated, disabled when `prefers-reduced-motion: reduce`).
2. **Button Press**: 140ms `scale(0.98)` tactile response.
3. **Route Entry**: 200ms opacity + 8px translateY reveal.
4. **Supply Journey Step Shift**: 220ms smooth tab swap.
5. **FAQ Accordion Expand**: 200ms height and opacity easing.

## 7. Anti-Patterns & Copy Hygiene
- **Banned Clichés**: *powerhouse, engine, engineered, architecture, excellence, institutional SLA, live workflow, zero hallucination, mission-critical, uncompromising, unmatched, 100% fill-rate, Active Gate, B2B Agri Assistant* as corporate chrome.
- **Factual Restraint**: PDF facts win every fight. No fabricated certificate numbers, no invented crop varieties, no logo files without written authorisation, no XXXX phone numbers rendered on screen.
