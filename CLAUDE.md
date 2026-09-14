# CLAUDE.md

## Verification

No test suite. After changes, run `pnpm check` (astro check) and `pnpm format`.

## Architecture

Astro portfolio site deployed at `https://ldelvillar.vercel.app`. That URL lives only in `site` in `astro.config.mjs` — read it through `Astro.site`. Personal details (name, email, GitHub, LinkedIn) live in `src/data/site.ts`.

### i18n

Every page and component that renders text receives a `t` prop from `getTranslations(lang)`, typed as `Translations` (the shape of `en.json`); declare it as `interface Props { t: Translations }`. Both JSON files must stay in sync — add/remove keys in both; `pnpm check` fails if `es.json` is missing a key from `en.json`.

`src/i18n/config.ts` holds the language list (`SUPPORTED_LANGUAGES`, `Lang`) and `DEFAULT_LANG`. `[lang]` routes build their paths with `getStaticPaths() { return langStaticPaths(); }`; type `lang` props as `Lang`, never `string`.

`src/data/certifications.ts` is the single source of truth for certification data (the `CERTS` array), including the `title`, which is the official English name and isn't translated; the translated descriptions live in the i18n JSON under `certifications.items[cert.id].desc`. `Cert.id` and `Project.id` are typed as keys of their i18n `items`, so an id without a translation fails `pnpm check`.

### Theming

Dark mode is class-based (`dark` on `<html>`). Tailwind 4 is configured in `src/styles/global.css` using `@theme` (not `tailwind.config.*`). The primary color token is `--color-primary` (different values for light/dark). Use `text-primary` etc. in markup.

Theme preference is stored in `localStorage` under the key `theme` and applied by an inline script in `ThemeToggle.astro`.

### Key patterns

- **Client interactivity**: `<script>` tags inside `.astro` files — no framework components
- **Images**: raster images live in `src/assets/images/` and are imported (`import img from '@/assets/images/x.webp'`) so `<Image>` optimizes them; a string path to `public/` skips optimization. `public/` is only for files that need a fixed URL (OG image, fonts, PDFs). SVG icons are `.astro` components in `src/assets/icons/`.
- **No view transitions**: there is no `<ClientRouter />`, so navigation is a full page load. Theme survives it because the inline script in `ThemeToggle.astro` re-reads `localStorage` on every load.
