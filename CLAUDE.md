# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint:** `npm run lint` (ESLint with typescript-eslint, react-hooks, react-refresh)
- **Preview production build:** `npm run preview`

No test framework is configured.

## Architecture

Two-route marketing landing page for "olly" nutrition supplements (Indian market, ₹ pricing). Built with React 19 + TypeScript + Vite + `react-router-dom`. No state management library, no CSS framework. The two routes share a brand but deliberately use different visual systems — treat them as two different papers on the same desk.

### Shopify integration

E-commerce is powered by the Shopify Storefront API via `shopify-buy` SDK. The integration has three layers:

- **`src/lib/shopify.ts`** — SDK client, normalized types (`ShopifyProduct`, `ShopifyVariant`, `CartLineItem`), checkout CRUD helpers, `isProductBuyable()`, `formatPrice()`.
- **`src/context/CartContext.tsx`** + **`src/context/cartContextDef.ts`** — Cart state via `useReducer` (items, checkout ID/URL, open/close). `CartProvider` wraps `<Routes>` in `App.tsx`. Checkout ID persists in `localStorage` and rehydrates on mount.
- **`src/hooks/useShopifyProduct.ts`** — Fetches a product by handle, caches in a module-level `Map`. Returns `{ product, isLoading, error }`.
- **`src/hooks/useCart.ts`** — Exposes `addToCart`, `removeFromCart`, `updateQuantity`, `toggleCart`, `itemCount`, `subtotal`.

**Cart drawer** (`src/components/CartDrawer.tsx` + `src/styles/cart.css`) renders outside both page wrappers in `App.tsx`, themed via `data-theme="kids"|"adults"` based on current route. Checkout button is an `<a>` to Shopify's hosted checkout URL.

**Kids page** fetches product by handle `kids-daily-multivitamin-gummy`. CTA components (`Hero`, `Products`, `CallToAction`, `MobileCta`) accept optional Shopify props — when a variant ID is available, buttons call `addToCart`; otherwise they fall back to `<a href="#subscribe">` anchor links with hardcoded prices.

**Adults page** fetches product by handle `complete-multivitamin`. Uses `isProductBuyable()` to conditionally render buy buttons vs. the existing Supabase waitlist form. When all variants have inventory = 0, `isBuyable` is false and the page stays in waitlist mode. Setting inventory > 0 in Shopify Admin auto-switches to buy mode — no code deploy needed.

### Routing

`src/main.tsx` wraps `<App />` in `<BrowserRouter>`. `src/App.tsx` is a thin `<Routes>` wrapper mapping `/` → `AdultsPage` and `/kids` → `KidsPage`. Both page components live in `src/pages/`. When deploying to a static host (Netlify / Vercel / GH Pages), a SPA fallback is required so every path serves `index.html`.

### Page structure — Kids (`/kids`)

`src/pages/KidsPage.tsx` renders `Header`, then a `<main>` with (in order): `Hero`, `PressLogos`, `Problem`, `Products`, `Ingredients`, `SocialProof`, `HowItWorks`, `Faq`, `CallToAction`, `EmailCapture`. After `<main>` come `Footer` and four floating/overlay components: `MobileCta`, `WhatsAppButton`, `BackToTop`, `CookieConsent`. Each section is a standalone component in `src/components/` (flat — no `kids/` subdir). Skip-link target: `#main-content`.

### Page structure — Adults (`/`)

`src/pages/AdultsPage.tsx` wraps everything in `<div className="adults-page">` and renders `Nav`, then a `<main>` with (in order): `Hero`, `DataStrip`, `FormsSection`, `ProductHero`, `JarGallery`, `ComparisonTable`, `TrustArchitecture`, `JournalSection`, then Phase 10 `WaitlistCTA` (pending endpoint URL). After `<main>` comes adults `Footer` plus the shared floating components (`WhatsAppButton`, `BackToTop`, `CookieConsent`), re-skinned via descendant selectors. All adults-only components live in `src/components/adults/`; the adults illustrations are in `src/components/adults/illustrations/` and are ported pixel-accurately from `olly-adults-wireframe.html`. Skip-link target: `#adults-main`.

Both pages run an identical `IntersectionObserver` in `useEffect` that adds `.reveal` to every `<main>` child except the first and toggles `.visible` as it scrolls into view — this is the single scroll-reveal mechanism, so new sections inherit it automatically by virtue of living inside `<main>`.

### Styling approach

Kids styles live in `src/index.css` with design tokens on `:root`. Adults styles live in `src/styles/adults.css`, imported once from `AdultsPage.tsx`. **Every selector in `adults.css` is prefixed with `.adults-page`** (including tokens like `--paper`, `--forest`, `--sage`, and the editorial font stack) so the two pages never collide — kids `.container` is 1200px/16px, adults `.container` is 1320px/48px, and both coexist. Do not move adults tokens to `:root` and do not touch kids components when editing adults surfaces. Responsive breakpoints: kids uses 1100/900/768, adults uses a single 900px breakpoint.

### Fonts

- **Inter**, **Poppins**, **Source Serif 4**, **JetBrains Mono**: loaded from Google Fonts via a single `<link>` in `index.html`. Source Serif 4 uses variable opsz (8–60pt) and full weight range (300–700 + italic).
- **Fictional Trial**: custom variable font loaded via `@font-face` from `/fonts/FictionalTrial-Variable.ttf`. **Kids only** — do not use on the adults page.

Kids font stacks (in `src/index.css`): `--font-sans` (Inter), `--font-display` (Poppins), `--font-headline` (Fictional Trial). Adults font stacks (in `src/styles/adults.css`, scoped under `.adults-page`): `--font-editorial` (Source Serif 4), `--font-mono` (JetBrains Mono), `--font-body` (Inter 300/400/500/600).

### Static assets

All images and SVGs are in `public/` and referenced via absolute paths (e.g., `/hero-desktop.png`). Desktop/mobile image variants use `<picture>` with `<source media="...">` for responsive swapping.

### TypeScript

Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`. Target ES2022, bundler module resolution.
