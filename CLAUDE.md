# CLAUDE.md

## Verification

No test suite. After changes, run `pnpm check` (astro check) and `pnpm format`.

## Architecture

Astro portfolio site deployed at `https://ldelvillar.vercel.app`.

### i18n

Every page and component that renders text receives a `t` prop from `getTranslations(lang)`, which dynamically imports `src/i18n/{lang}.json`. Both JSON files must stay in sync — add/remove keys in both.

`src/data/certifications.ts` is the single source of truth for certification data (the `CERTS` array); the matching titles and descriptions live in the i18n JSON under `certifications.items[cert.id]`.

### Theming

Dark mode is class-based (`dark` on `<html>`). Tailwind 4 is configured in `src/styles/global.css` using `@theme` (not `tailwind.config.*`). The primary color token is `--color-primary` (different values for light/dark). Use `text-primary` etc. in markup.

Theme preference is stored in `localStorage` under the key `theme` and applied by an inline script in `ThemeToggle.astro`.

### Key patterns

- **Client interactivity**: `<script>` tags inside `.astro` files — no framework components
- **No view transitions**: there is no `<ClientRouter />`, so navigation is a full page load. Theme survives it because the inline script in `ThemeToggle.astro` re-reads `localStorage` on every load.
