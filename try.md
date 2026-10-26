web application/stitch/projects/16287201829143867755/screens/78a3054dcff04da9aee6f65093845408
# SHAZA Fragrances — Tailwind CSS v4 Unified Root Style File (`src/styles/main.css`)

This is the exact, comprehensive root stylesheet for **SHAZA Fragrances** configured for **Tailwind CSS v4** (`@import "tailwindcss";` and `@theme`).

It is built directly from the exact inline CSS properties, hex values, utility classes, and custom variables used throughout all the SHAZA Fragrances screen codebases (including `Home`, `Product Details`, `Cart`, `Checkout`, `Sign In / Register`, and all `Patron Dossier /profile` screens).

---

## 1. Complete Root Stylesheet (`src/styles/main.css`)

```css
@import "tailwindcss";

/* ==========================================================================
   SHAZA FRAGRANCES — HAUTE PARFUMERIE & NOCTURNE EMERALD
   Tailwind CSS v4 Native Root Configuration
   ========================================================================== */

/* 1. Classical French & Modern Typeface Imports */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

/* 2. Tailwind v4 @theme Directives
   Directly generates utilities:
   bg-surface-*, text-gold-*, bg-emerald-*, font-serif, tracking-luxury, etc.
*/
@theme {
  /* Typography Stacks */
  --font-serif: "EB Garamond", Garamond, Cormorant Garamond, Didot, Georgia, serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-cinzel: "Cinzel", "EB Garamond", serif;
  --font-display: "EB Garamond", "Playfair Display", Georgia, serif;

  /* Surface / Emerald Spectrum (Exact hex codes used across all screen templates) */
  --color-surface-obsidian: #01110d;
  --color-surface-lowest: #01110d;
  --color-surface: #041712;
  --color-surface-dim: #041712;
  --color-surface-low: #0b1f1a;
  --color-surface-container: #102822;
  --color-surface-high: #193830;
  --color-surface-highest: #20433a;
  --color-surface-bright: #2a5246;

  /* Emerald Semantic Aliases matching screen code */
  --color-emerald-deep: #041712;
  --color-emerald-card: #0b1f1a;
  --color-emerald-container: #102822;
  --color-emerald-hover: #193830;
  --color-emerald-border: rgba(212, 175, 55, 0.2);
  --color-emerald-border-bright: rgba(42, 82, 70, 0.6);

  /* Gold / Champagne Accents & CTA Colors */
  --color-primary: #d4af37;
  --color-primary-hover: #e5c158;
  --color-primary-active: #b8962c;
  --color-primary-muted: #8f7422;
  --color-primary-container: rgba(212, 175, 55, 0.12);
  --color-primary-border: rgba(212, 175, 55, 0.25);

  --color-gold: #d4af37;
  --color-gold-hover: #e5c158;
  --color-gold-active: #b8962c;
  --color-gold-muted: #8f7422;
  --color-gold-subtle: rgba(212, 175, 55, 0.12);
  --color-gold-border: rgba(212, 175, 55, 0.25);

  /* Content & Typography Colors */
  --color-content-primary: #f5f4ef;
  --color-content-secondary: #c2c9c5;
  --color-content-muted: #798b84;

  --color-ivory: #f5f4ef;
  --color-silver-sage: #c2c9c5;
  --color-archival-slate: #798b84;

  /* Functional Status Colors */
  --color-status-success: #34d399;
  --color-status-warning: #fbbf24;
  --color-status-danger: #f87171;

  /* Haute Horlogerie Letter Spacing */
  --letter-spacing-eyebrow: 0.25em;
  --letter-spacing-luxury: 0.2em;
  --letter-spacing-ultra: 0.3em;
  --letter-spacing-widest: 0.25em;

  /* Restrained Architectural Border Radii */
  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;

  /* Shadows & Atmospheric Depth */
  --shadow-gold-glow: 0 0 25px -5px rgba(212, 175, 55, 0.25);
  --shadow-gold-button: 0 0 20px -5px rgba(212, 175, 55, 0.35);
  --shadow-emerald-deep: 0 20px 40px -15px rgba(1, 17, 13, 0.7);
  --shadow-card-ambient: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

/* 3. Global CSS Custom Properties (:root)
   These match the exact CSS variables and arbitary Tailwind values:
   e.g. bg-[#041712], text-[#d4af37], border-[#d4af37]/20, bg-[#102822], bg-[#0b1f1a]
*/
:root {
  /* Surfaces & Canvas */
  --shaza-bg-obsidian: #01110d;
  --shaza-bg-surface: #041712;
  --shaza-bg-surface-low: #0b1f1a;
  --shaza-bg-surface-container: #102822;
  --shaza-bg-surface-container-high: #193830;
  --shaza-bg-surface-bright: #2a5246;

  /* Brand Golds */
  --shaza-gold-primary: #d4af37;
  --shaza-gold-hover: #e5c158;
  --shaza-gold-active: #b8962c;
  --shaza-gold-muted: #8f7422;
  --shaza-gold-subtle: rgba(212, 175, 55, 0.12);
  --shaza-gold-border: rgba(212, 175, 55, 0.25);
  --shaza-gold-glow: rgba(212, 175, 55, 0.2);

  /* Typography Colors */
  --shaza-text-primary: #f5f4ef;
  --shaza-text-secondary: #c2c9c5;
  --shaza-text-muted: #798b84;
  --shaza-text-gold: #d4af37;

  /* Borders & Hairlines */
  --shaza-border-subtle: rgba(255, 255, 255, 0.08);
  --shaza-border-gold: rgba(212, 175, 55, 0.25);
  --shaza-border-gold-focus: #d4af37;

  /* Radii */
  --shaza-radius: 2px;
}

/* 4. Document-Level Reset & Baseline Styles */
html {
  color-scheme: dark;
  scroll-behavior: smooth;
  background-color: var(--shaza-bg-surface);
}

body {
  background-color: #041712;
  color: #f5f4ef;
  font-family: var(--font-sans);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Editorial Gold Selection Tint */
::selection {
  background-color: rgba(212, 175, 55, 0.3);
  color: #f5f4ef;
}

/* Custom Haute Parfumerie Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #01110d;
}
::-webkit-scrollbar-thumb {
  background: #193830;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d4af37;
}

/* ==========================================================================
   5. Utility Classes Matching Screen Code
   ========================================================================== */
@utility border-gold-hairline {
  border-color: rgba(212, 175, 55, 0.25);
}

@utility tracking-eyebrow {
  letter-spacing: 0.25em;
}

@utility tracking-luxury {
  letter-spacing: 0.2em;
}

@utility glow-gold {
  box-shadow: 0 0 25px -5px rgba(212, 175, 55, 0.25);
}

@utility glow-gold-button {
  box-shadow: 0 0 20px -5px rgba(212, 175, 55, 0.35);
}

@utility emerald-gradient {
  background: radial-gradient(circle at 50% 20%, rgba(42, 82, 70, 0.25) 0%, rgba(4, 23, 18, 0.95) 75%, #01110d 100%);
}

@utility emerald-card-gradient {
  background: linear-gradient(180deg, #102822 0%, #0b1f1a 100%);
}
```

---

## 2. Direct Value Mapping: Screen Code vs Tailwind v4 Utilities

Here is how the arbitrary classes in the screen HTML map directly to your Tailwind v4 utility tokens:

| Screen Code Element | Raw Screen Value | Tailwind v4 Utility Class | CSS Custom Property |
| :--- | :--- | :--- | :--- |
| **Page Canvas / Body** | `bg-[#041712]` | `bg-surface` or `bg-emerald-deep` | `var(--shaza-bg-surface)` |
| **Top Banner / Footer** | `bg-[#01110d]` | `bg-surface-lowest` | `var(--shaza-bg-obsidian)` |
| **Inner Card / Subpanel** | `bg-[#0b1f1a]` | `bg-surface-low` or `bg-emerald-card` | `var(--shaza-bg-surface-low)` |
| **Sidebar / Main Card** | `bg-[#102822]` | `bg-surface-container` | `var(--shaza-bg-surface-container)` |
| **Card / Row Hover** | `hover:bg-[#193830]` | `hover:bg-surface-high` | `var(--shaza-bg-surface-container-high)` |
| **Primary Gold CTA** | `bg-[#d4af37]` | `bg-primary` or `bg-gold` | `var(--shaza-gold-primary)` |
| **Gold Button Hover** | `hover:bg-[#e5c158]` | `hover:bg-primary-hover` | `var(--shaza-gold-hover)` |
| **Active Gold Pressed** | `active:bg-[#b8962c]` | `active:bg-primary-active` | `var(--shaza-gold-active)` |
| **Gold Subtle Container**| `bg-[#d4af37]/12` | `bg-primary-container` | `var(--shaza-gold-subtle)` |
| **Gold Hairline Border**| `border-[#d4af37]/25` | `border-primary-border` | `var(--shaza-gold-border)` |
| **Subtle Divider** | `border-white/[0.06]` | `border-white/6` | `var(--shaza-border-subtle)` |
| **Warm Ivory Headings** | `text-[#f5f4ef]` | `text-content-primary` or `text-ivory` | `var(--shaza-text-primary)` |
| **Silver-Sage Text** | `text-[#c2c9c5]` | `text-content-secondary` | `var(--shaza-text-secondary)` |
| **Archival Slate Text** | `text-[#798b84]` | `text-content-muted` | `var(--shaza-text-muted)` |
| **Editorial Serif** | `font-serif` | `font-serif` (EB Garamond) | `var(--font-serif)` |
| **Overline Eyebrows** | `tracking-[0.25em]` | `tracking-eyebrow` | `var(--letter-spacing-eyebrow)` |
| **Luxury Sub-headers** | `tracking-[0.2em]` | `tracking-luxury` | `var(--letter-spacing-luxury)` |
| **Button Glow** | `shadow-[0_0_20px_-5px_...]` | `shadow-gold-button` or `glow-gold-button`| `--shadow-gold-button` |

---

## 3. How to Install and Run in Your Project

### Next.js (App Router or Pages Router) with PostCSS
1. Install:
   ```bash
   npm install tailwindcss @tailwindcss/postcss postcss
   ```
2. In `postcss.config.mjs`:
   ```javascript
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
     },
   };
   ```
3. Import `main.css` in `app/layout.tsx` or `pages/_app.tsx`:
   ```typescript
   import '@/styles/main.css';
   ```

### Vite + React
1. Install:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
2. In `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite';
   import tailwindcss from '@tailwindcss/vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [tailwindcss(), react()],
   });
   ```
3. Import `main.css` in `src/main.tsx`:
   ```typescript
   import './styles/main.css';
   ```
