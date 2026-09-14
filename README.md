# portfolio

Personal portfolio site — [ldelvillar.vercel.app](https://ldelvillar.vercel.app).

Built with **Astro 7**, **Tailwind CSS 4**, and **TypeScript**. Bilingual (ES/EN) via JSON-based i18n: every page exists under `/es` and `/en`, and `/` redirects to `/es`. Fully static, deployed on Vercel.

## Requirements

- Node.js 22.12 or newer (Astro 7's minimum)
- pnpm — `pnpm-workspace.yaml` allows the install scripts of `sharp` (image optimization) and `esbuild`

## Commands

```sh
pnpm install        # Install dependencies
pnpm dev            # Start dev server at localhost:4321
pnpm build          # Build production site to ./dist/
pnpm preview        # Preview the production build locally
pnpm check          # Type-check (also fails if es.json is missing a key from en.json)
pnpm format         # Format everything with Prettier
pnpm format:check   # Check formatting without writing
```

## Structure

```text
src/
├── assets/
│   ├── icons/        # Inline SVG icon components (tech logos in logos/)
│   └── images/       # Profile photo + project screenshots, optimized by astro:assets
├── components/       # UI components (home/ for landing sections, layout/ for header, footer, toggles)
├── data/             # Projects, certifications, and personal details (site.ts)
├── i18n/             # Language config + en.json, es.json (must stay in sync)
├── layouts/          # Root Layout (<head>, canonical, Open Graph)
├── pages/
│   ├── [lang]/       # Home, projects, and certifications, built for /es and /en
│   ├── 404.astro
│   └── robots.txt.ts # robots.txt, generated from the site URL
├── styles/           # global.css with Tailwind @theme tokens and @font-face
└── utils/            # getTranslations()
public/
├── certifications/   # Certificate PDFs
├── fonts/            # Self-hosted Onest and Blimone
└── images/           # Open Graph image
```

Path alias: `@/` → `src/`. The site URL is set once, as `site` in `astro.config.mjs`.

## License

Code is [MIT](./LICENSE) — feel free to learn from it or reuse pieces.
Content (text in `src/i18n/`, images, personal branding) is © Lucas del Villar,
all rights reserved.
