# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint:** `npm run lint` (ESLint with typescript-eslint, react-hooks, react-refresh)
- **Preview production build:** `npm run preview`

No test framework is configured.

## Architecture

Single-page marketing landing page for "olly" pediatric nutrition supplements (Indian market, ₹ pricing). Built with React 19 + TypeScript + Vite. No routing, no state management library, no CSS framework.

### Page structure

`App.tsx` renders sections in order: Header → Hero → Approach → Products → SocialProof → HowItWorks → CtaBanner → Footer. Each section is a standalone component in `src/components/`.

### Styling approach

All styles live in a single `src/index.css` file using plain CSS with CSS custom properties (design tokens defined in `:root`). Components use class names that map directly to sections in `index.css` — there are no CSS modules or styled-components. Responsive breakpoints: 1100px, 900px, 768px.

### Fonts

- **Inter** and **Poppins**: loaded from Google Fonts via `index.html`
- **Fictional Trial**: custom variable font loaded via `@font-face` from `/fonts/FictionalTrial-Variable.ttf`

Three CSS font stacks: `--font-sans` (Inter), `--font-display` (Poppins), `--font-headline` (Fictional Trial).

### Static assets

All images and SVGs are in `public/` and referenced via absolute paths (e.g., `/hero-desktop.png`). Desktop/mobile image variants use `<picture>` with `<source media="...">` for responsive swapping.

### TypeScript

Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`. Target ES2022, bundler module resolution.
