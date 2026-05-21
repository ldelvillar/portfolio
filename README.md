# portfolio

Personal portfolio site — [ldelvillar.vercel.app](https://ldelvillar.vercel.app).

Built with **Astro 6**, **Tailwind CSS 4**, and **TypeScript**. Bilingual (ES/EN) via JSON-based i18n.

## Commands

```sh
pnpm install   # Install dependencies
pnpm dev       # Start dev server at localhost:4321
pnpm build     # Build production site to ./dist/
pnpm preview   # Preview the production build locally
```

## Structure

```text
src/
├── assets/        # Inline SVG icons + tech logos
├── components/    # UI components (home/ for landing sections, layout/ for shell)
├── data/          # Single source of truth for projects, certifications
├── i18n/          # en.json, es.json (must stay in sync)
├── layouts/       # Root Layout
├── pages/[lang]/  # /es and /en routes
└── styles/        # global.css with Tailwind @theme tokens
```

Path alias: `@/` → `src/`.
