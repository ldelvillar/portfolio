---
description: Real architectural review of this Astro portfolio, grounded in the actual code
argument-hint: '[structure|i18n|rendering|seo|assets|maintainability]'
---

# Architecture Review

Act as a senior frontend architect specialized in Astro, static sites, and technical SEO. Perform a REAL architectural review of this codebase based on the actual code — not generic best practices.

If `$ARGUMENTS` names a section (structure, i18n, rendering, seo, assets, maintainability), review ONLY that section. Otherwise, run all sections in the order below.

BEFORE YOU START:

- Read `AGENTS.md` (repo root), then explore the actual files in each area before judging it — read the key modules, don't assume. `README.md` exists but is a short public-facing overview; `AGENTS.md` is the authoritative one.
- Treat the conventions documented in `AGENTS.md` as ground truth. For each relevant one, assess whether the code adheres or has drifted, and call out drift explicitly.
- Do NOT recommend changes that contradict an intentional, documented convention (static output with no SSR, no framework components — client interactivity via `<script>` tags in `.astro` files, no `tailwind.config.*` — Tailwind 4 theme tokens in `@theme` inside `src/styles/global.css`, `src/assets/` holding inline SVG _components_ rather than managed image files, `@/` → `src/` path alias, translations as `src/i18n/{en,es}.json` consumed through `getTranslations(lang)`) unless you can show the convention itself causes a concrete problem.

RULES:

- No finding without a concrete reason and a reference to a real file/module. If you can't point to the exact file/pattern, don't claim it.
- If something is well-designed, say so — don't invent problems.
- Every criticism states: (1) the problem, (2) why it matters, (3) the real impact on maintenance or on search/user experience, (4) the simplest reasonable fix.
- Be pragmatic. This is a one-person personal portfolio with 3 routes × 2 languages, not an enterprise app or a content business. Calibrate severity accordingly and avoid overengineering. SEO matters here for being found by recruiters and for link previews — not for ranking a content catalogue.
- `pnpm build` plus `pnpm check` (astro check) are the correctness gates; `pnpm format:check` covers style. There is no test runner — do not file findings that amount to "add a test suite" unless you can tie it to a concrete, recurring breakage.

PROJECT SHAPE:

- `src/pages/[lang]/{index,certifications,projects}.astro` → every route is static, duplicated per language by `getStaticPaths()`; `src/pages/404.astro` sits outside `[lang]`
- `src/i18n/{config.ts,en.json,es.json}` + `src/utils/getTranslations.ts` → `t` is passed down as a prop to every component that renders text
- `src/data/{certifications.ts,projects.ts}` → typed data modules (`Cert`/`CERTS`); certification titles are hardcoded in `CERTS`, descriptions live in the i18n JSON under `certifications.items[cert.id]`
- `src/components/` → UI, with home-page sections in `src/components/home/` and `layout/{Header,Footer}.astro`; no `<ClientRouter />`, so every navigation is a full page load
- `src/layouts/Layout.astro` → the single shell; drives `<head>`, canonical, OG/Twitter tags
- `src/assets/icons/` → inline SVG Astro components (tech logos in `icons/logos/`); `src/assets/images/` → raster images, imported so `<Image>` optimizes them; `public/` keeps only files that need a fixed URL: the OG image in `public/images/`, fonts in `public/fonts/`, certification PDFs in `public/certifications/`
- Deployed static to Vercel (`vercel.json`); `site` and the `/` → `/es` redirect are in `astro.config.mjs`

---

## 1. STRUCTURE

Scope: folder boundaries, where shared constants live, config duplication across `astro.config.mjs` / `vercel.json` / `src/layouts/Layout.astro`, the `@/` alias in `tsconfig.json`, what `src/data/*.ts` is allowed to import.
Red flags: the same constant defined in two places and free to drift (site URL, redirects, supported languages), data modules importing `.astro` components and so coupling data to presentation, shared values that have no home because there is no `src/config/`, `README.md` and `AGENTS.md` disagreeing.

## 2. I18N & DATA MODEL — `src/i18n/` + `src/data/`

Scope: how `t` reaches components, the `Lang` type and the default-language fallback in `Layout.astro`, key parity between `en.json` and `es.json`, the `CERTS[].id` → `certifications.items[cert.id]` linkage, what is typed versus what is trusted.
Red flags: translation keys present in one JSON file and missing in the other (nothing enforces the parity `AGENTS.md` requires), `getTranslations` handing back an untyped dynamic import so every `t.*` access is unchecked, ids in `src/data/` with no matching i18n entry (or the reverse) failing silently at render time, user-facing strings hardcoded in components instead of the JSON, dead or commented-out entries in the data modules.

## 3. RENDERING & COMPONENTS

Scope: the `getStaticPaths()` duplication across the three `[lang]` routes, component boundaries and reuse in `src/components/`, page length and whether sections belong in extracted components, the inline theme script in `ThemeToggle.astro`, and components that exist but are never rendered.
Red flags: leftover view-transition code (`astro:after-swap` / `astro:page-load` listeners, `transition:*` directives) that can never fire without a `<ClientRouter />`, components that no page imports (`pnpm build` skips them, so only `pnpm check` notices when they break), a theme script placed so it flashes the wrong theme before paint, the same language array repeated in every route instead of derived from `SUPPORTED_LANGUAGES`, near-identical markup across pages that should be one component, page files long enough that the structure is hard to follow.

## 4. SEO & METADATA

Scope: the `<head>` block in `src/layouts/Layout.astro` (title, description, canonical, OG, Twitter), the sitemap from `@astrojs/sitemap`, `public/robots.txt`, and how the bilingual routes are presented to crawlers.
Red flags: no `hreflang` alternate links even though every page exists in both `es` and `en` (the main i18n SEO gap), canonical/OG URLs built from a hardcoded base instead of `Astro.site`, no structured data at all (a portfolio is a natural fit for `Person`/`WebSite` JSON-LD), an OG image whose real dimensions contradict `summary_large_image`, per-page titles and descriptions that are not actually distinct, sitemap entries that ignore the language split.

## 5. ASSETS & PERFORMANCE

Scope: the `src/assets/images/` versus `public/` boundary and what `<Image>` from `astro:assets` actually receives, self-hosted fonts in `public/fonts/` and their `@font-face` declarations in `global.css`, the cost of the third-party client libraries (`atropos` in `TechStack.astro`), and overall CSS/JS weight.
Red flags: `<Image>` given a `public/` string path, which skips Astro's optimization pipeline entirely even though `sharp` is enabled — check whether these should be imported assets instead, a whole animation library imported for a handful of effects, no `preload` for the fonts that render above the fold, layout shift from images without intrinsic dimensions, render-blocking or unused CSS.
Classify each finding as: current problem, future risk, or premature optimization.

## 6. MAINTAINABILITY

Scope: consistency and readability, how much work it is to add one certification or project, whether `AGENTS.md` still matches reality, type safety at the i18n and data boundaries, deployment reproducibility.
Red flags: adding a single piece of content requiring coordinated edits in several unrelated files, `AGENTS.md` describing behavior the code no longer has, copy-paste between the three `[lang]` routes, loose typing around translations and data ids, formatting or convention drift that Prettier does not catch.

---

OUTPUT FORMAT

Start with a 2–3 sentence overall assessment of the codebase's architectural health, then the sections.

For each section:

### [SECTION NAME]

✅ Good — what is genuinely well-designed and should not change.

⚠️ Could be improved — for each finding: Problem / Why it matters / Real impact / Recommended fix / Severity (Low|Medium|High).

Be concise and technical. Reference concrete files or modules. Report at most the ~5 highest-value findings per section; omit trivia and nits. Place each finding in the section where it fits best and cross-reference rather than repeating it.

## Priorities

The 3–5 highest-value improvements, ordered by impact, effort, and risk reduction. For each: expected benefit, implementation complexity, and whether it is urgent or optional.
