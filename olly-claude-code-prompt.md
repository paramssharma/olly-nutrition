# What to type in Claude Code — Olly Adults Landing Page

Open Claude Code from the root of your existing Olly web project, attach `olly-adults-wireframe.html` to the session (drag it in or reference it by path), then paste the prompt below exactly as it is.

---

## Copy-paste this into Claude Code

I'm building the **adults landing page** for **Olly**, an Indian D2C supplement brand. Olly already has a **kids landing page** built in this codebase at `app/kids/page.tsx` (or wherever the kids route lives — please locate it first). The kids page uses warm cream backgrounds, terracotta accents, rounded cards, friendly illustrations, and a playful display serif. **The adults page needs to feel visually distinct from the kids page while clearly coming from the same brand family.** Think: same brand, two moods — kids is a kitchen table, adults is a study room.

The reference wireframe is `olly-adults-wireframe.html`, attached to this session. Read it in full before writing any code. It contains the final HTML structure, the final copy, the color palette, the typography, the inline SVG illustrations, and the image placeholders for photography. Your job is to port it to the existing Next.js codebase — not to redesign it.

### STEP 0 — Inventory the existing codebase before you build anything

Before you write a single line of new code, run a complete inventory of what already exists in this repo. I want you to reuse as much as possible and build as little as possible.

Specifically, do these reads and report back what you find:

1. **List the full file tree** for `app/`, `components/`, `lib/`, and `styles/` (or wherever shared code lives). Note what exists.
2. **Read `app/layout.tsx`** in full. Note which fonts are already loaded via `next/font/google`, what CSS variables they expose, and what global background/text colors are set on `<html>` / `<body>`.
3. **Read `tailwind.config.ts`** in full. Note every color token, font family, spacing extension, and any custom utilities already registered.
4. **Read the kids landing page** (`app/kids/page.tsx` or equivalent) in full. Note which components it imports and from where.
5. **Read every component the kids page imports** from `components/`. For each one, note whether it's generic (reusable) or kids-specific (not reusable). Look for: Button primitives, form inputs, container wrappers, navigation shell, footer, SEO/meta helpers, icon components, utility hooks.
6. **Read `lib/`** contents. Note any utility functions, constants, or type definitions that already exist.

When you're done, report back to me with a structured summary in this format:

```
EXISTING CODEBASE INVENTORY

Fonts already loaded:
- [font name] → CSS var [--font-name] → [used where]

Tailwind tokens already defined:
- Colors: [list]
- Fonts: [list]
- Other: [list]

Components that exist and are reusable for adults:
- [ComponentName] at [path] — [why reusable]

Components that exist but are kids-specific (don't reuse):
- [ComponentName] at [path] — [why kids-only]

Shared utilities I'll use:
- [function/type] at [path]

What I need to ADD to tailwind.config.ts for adults:
- [new tokens]

What I need to ADD to app/layout.tsx for adults:
- [new fonts, new globals]
```

Do not proceed to step 1 until I approve this inventory. If you find that some kids-specific component is almost reusable but needs a variant prop (e.g., a Button that could take a `variant="editorial"` for the adults look), propose that as a refactor — but do not implement it until I approve.

### The reuse rule

**Reuse aggressively. Build only what's new.**

- If the kids page already has a generic `<Container>` or `<Section>` wrapper, import it and use it. Don't create a parallel one.
- If the kids page has a `<Button>` component, check if you can extend it with a new variant (e.g., `variant="primary-editorial"`) instead of writing a second button from scratch.
- If Tailwind already has `sage`, `cream`, or `forest` tokens registered (likely, because the brand memory mentions these colors), reuse the exact same token names. Add only the adults-specific tokens that don't already exist (`paper`, `paper-deep`, `paper-card`, `forest-mid`, `sage-pale`).
- If `app/layout.tsx` already loads `Inter` and `JetBrains Mono`, do not re-load them — just add Source Serif 4 to the existing next/font configuration alongside what's there.
- The `SiteFooter` may be a candidate for sharing between adults and kids. If the kids footer has content that makes sense for adults too (links, legal, FSSAI badge), extract it into a shared `components/shared/SiteFooter.tsx` that takes props for the variant. Otherwise, build a dedicated adults footer.

**The one thing you must NOT reuse: the kids page's display serif.**

The kids page currently uses `Instrument Serif` (or a similar warm, calligraphic display serif). That font feels too soft and playful for the adults page — it carries the warmth we want on the kids side. The adults page uses **Source Serif 4** instead, which is a cleaner, more scientific editorial serif — the kind you'd find in a research journal or a book. Both fonts will coexist in the codebase; the kids page keeps its serif, the adults page gets a new one.

Add Source Serif 4 to `app/layout.tsx` via `next/font/google`:

```ts
import { Source_Serif_4 } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
});
```

Then add `sourceSerif.variable` to the `<html>` class list alongside the existing fonts. In `tailwind.config.ts`, add it to `fontFamily`:

```ts
fontFamily: {
  // existing kids serif stays untouched, e.g.:
  // serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
  editorial: ['var(--font-source-serif)', 'Georgia', 'serif'],
  // sans: ['var(--font-inter)', ...], // already exists
  // mono: ['var(--font-jetbrains-mono)', ...], // already exists
}
```

On the adults page, every place the wireframe uses the serif, use `font-editorial` in Tailwind. Never use the kids `font-serif` class on the adults page.

### Design direction — adults, light theme

The adults page is inspired by **seed.com**. It is light, editorial, and scientific. Specific moves:

- **Warm paper cream background** — `#F5F0E6` as the primary surface, `#EDE7D9` as the alternating deeper paper for "The Science of Forms," "The Jar," and "Trust Architecture" sections. This is cooler and more archival than the kids page cream. The two pages should feel like two different papers on the same desk.
- **Deep forest as ink** — all text and primary illustration work is `#1F2E27`, a near-black forest green.
- **Sage accent used sparingly** — `#4A6B55` (mid forest) for italic emphasis words in headlines, and `#7EA88C` / `#B8CBB0` for the "Us" column in comparison tables, active molecule illustrations, and the final CTA highlight. Nothing else is colored.
- **Typography stack**:
  - **Source Serif 4** for the wordmark, all headlines, product names, prices, and emphasized italic phrases. Weights 300–700, with italic. Tight letter-spacing (−0.02em). Low line-height (0.96–1.02). Headlines are large — the hero clamps between 56px and 104px.
  - **Inter** (weight 300) for body copy.
  - **JetBrains Mono** (10–11px, uppercase, letter-spacing 0.12–0.14em) for every eyebrow label, section number, product code, data label, figure caption, and timestamp. This is the "scientific journal" metadata voice and it appears everywhere.
- **Scientific nomenclature** — the product is **Olly DV-01**, not "Complete Multivitamin." The wordmark has a superscript `DV` tag. Every section is numbered `§ 01 — The Science of Forms`, `§ 02 — The Product`, up through `§ 07 — Founding Members`. Do not rename anything. Do not drop the section numbering.
- **Hairline rules, flat surfaces** — every divider is 1px at 12% forest. No drop shadows. No gradients except one subtle radial glow behind the hero jar illustration. No rounded cards except the pill-shaped CTA buttons.
- **Generous whitespace** — 140–160px section padding on desktop, 1320px max-width container, 48px side padding.

### Illustrations — port these exactly as React components

The wireframe contains inline SVG illustrations that you must port as React components. Do not replace them with icon library components, do not simplify them, do not substitute stock illustrations. These are brand assets.

1. **`<HeroJar />`** — the amber glass jar in the hero. Line-drawn jar with cap, QR code square on the cap, "Olly" wordmark baked into the label in Source Serif 4, "DV · 01" in JetBrains Mono, italic "Complete Multivitamin" subtitle, visible capsule forms at the top of the jar.
2. **`<MoleculeB12 />`, `<MoleculeFolate />`, `<MoleculeMagnesium />`** — three paired molecular diagrams for "The Science of Forms." Each component renders both forms side by side (the inferior form in muted forest, the active form in sage). Corrin ring with Co atom for B12, pteridine ring system for folate, Mg with glycine chains for magnesium.
3. **`<CapsuleCrossSection />`** — vertical capsule with dashed split line, colored beadlets inside, label lines pointing outward to ingredient names in JetBrains Mono.
4. **Four data visualizations** inline in `<DataStrip />` — horizontal bar fill for 47% MTHFR, row of X marks for 0/12 brands, pie slice for 4% absorption, ascending bar chart for 3–5× cost.
5. **Four trust icons** inline in `<TrustArchitecture />` — QR code grid, atomic structure with Co center, document with badge, two-figure advisory silhouettes.
6. **`<JournalFigureDNA />`, `<JournalFigureSynergy />`, `<JournalFigureAbsorption />`** — three abstract editorial illustrations at the top of each journal article card.

Every SVG must be pixel-accurate to the wireframe.

### Image placeholders — for real photography later

The "§ 03 — The Object" section has three dashed-border placeholder boxes for jar photography. Each placeholder has descriptive text inside telling the photographer what to shoot. **Preserve these placeholders as-is** in a `<JarGallery />` component — dashed borders, monospace labels, the description text inside. Do not replace them with stock photos, gradients, or rendered 3D mockups. When I have real product photography, I will swap these out for `<Image>` components myself.

### Technical requirements

- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS. Use whatever the existing repo already uses — don't change build tooling.
- **Page location**: the adults page is the site's **homepage**. It lives at `app/page.tsx`. The kids page stays wherever it currently lives.
- **Components**: create `components/landing/adults/` and put each section in its own file. Reuse shared components from wherever they live; only create new files for things that don't already exist.
- **Responsive**: breakpoint at 900px. Below 900px, all multi-column grids collapse to single column, nav links hide behind a menu button, hero padding shrinks to 60px/80px, container side padding drops to 24px. On 375px wide, the comparison table must not horizontally overflow — wrap it in `overflow-x-auto` and let it scroll horizontally rather than restructuring it.
- **Accessibility**: semantic HTML with one `<h1>` (the hero), proper heading hierarchy, focus-visible states on every interactive element, associated labels on form inputs (can be sr-only for the waitlist email).
- **Waitlist form**: POSTs to `/api/waitlist` with `{ email }`. Create the route at `app/api/waitlist/route.ts` as a stub returning `{ ok: true, count: 247 }`. On success, replace the form with "You're in. Check your email." On error, show an inline error. Validate email client-side before submitting.
- **Founding member counter**: hardcode "247 / 500 Founding Members" with a `// TODO: fetch from /api/waitlist/count` comment.

### Content — locked

Every word of copy in the wireframe is final. Do not rewrite headlines, do not "improve" the data points (47% MTHFR, 0/12 Indian brands, 4% oxide absorption, 3–5× cost differential), do not change the comparison table grades, do not rename the product, do not touch the three journal article titles, do not soften the founding member language. The section numbers (§ 01 through § 07) are part of the design. If you think a line of copy could be better, add a `// COPY SUGGESTION:` comment at the top of the relevant component — I'll review after the build works.

### What this page is NOT — the split from kids must be obvious

- Not warm-cream-with-terracotta (kids).
- Not rounded cards with shadows (kids).
- Not Instrument Serif or any warm calligraphic display serif (kids — feels too soft for adults).
- Not friendly micro-copy, emoji, or stickers.
- Not character illustrations, cartoons, or mascots.
- Not a dark theme — I decided against it. This is light and editorial.
- Not centered-everything — most sections are left-aligned with right-side whitespace. Only the final CTA is centered.

### Build process — follow this order and show output at each step

1. **STEP 0 — Inventory.** Report the existing codebase summary per the format above. Wait for my approval.
2. **Tailwind + fonts setup.** Propose the diff for `tailwind.config.ts` and `app/layout.tsx`. Show me before applying. Wait for approval.
3. **Nav + Hero** together, with `<HeroJar />` as a separate component. Screenshot and share.
4. **DataStrip** with four inline visualizations. Screenshot.
5. **FormsSection** with `<MoleculeB12 />`, `<MoleculeFolate />`, `<MoleculeMagnesium />`. Screenshot.
6. **ProductHero** with `<CapsuleCrossSection />`. Screenshot.
7. **JarGallery** with the three dashed-border photography placeholders. Screenshot.
8. **ComparisonTable** with mobile horizontal scroll. Screenshot.
9. **TrustArchitecture** with the four inline SVG icons. Screenshot.
10. **JournalSection** with the three figure components. Screenshot.
11. **WaitlistCTA** with form, submit state machine, API stub. Screenshot.
12. **SiteFooter** — reuse the existing one if possible, otherwise build fresh. Screenshot.
13. **Assemble** in `app/page.tsx`. Full-page screenshot at 1440px desktop and 375px mobile. Share both.
14. **Append** a section to the project README explaining the two-page design split: adults page uses paper cream + Source Serif 4 + deep forest + scientific illustrations, kids page uses warm cream + Instrument Serif + terracotta + character illustrations. One paragraph.

### Critical constraints

- **Do not drift.** The wireframe is the spec. If you want to improve something, ask first.
- **Do not touch the kids page or any kids-specific component.** If you need to refactor a shared component, ask first.
- **Do not replace SVG illustrations** with icon library components. They are brand assets.
- **Reuse before rebuilding.** If you catch yourself writing something that already exists in the repo, stop and import it instead.
- **If shadcn components don't match the aesthetic,** write custom components. Don't force the design to fit shadcn defaults.

Ready when you are. Start with **Step 0 — inventory the existing codebase** and report back.
