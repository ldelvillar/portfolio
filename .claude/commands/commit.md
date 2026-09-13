---
description: Write a conventional commit message for the staged changes
---

# Commit

Analyze the staged changes and write a conventional commit message for this portfolio site.

## Instructions

1. Run `git diff --staged` to review what's staged.
2. If nothing is staged, run `git diff HEAD` to check unstaged changes, then tell the user to stage what they want committed and stop.
3. Identify the **primary intent** of the changes — don't describe every file touched, describe what the change accomplishes.
4. Write a commit message following the format below.
5. Run `git commit -m "<message>"` — do not ask for confirmation unless the changes are ambiguous or span multiple unrelated concerns (in which case, flag this and suggest splitting).

## Commit Message Format

For a simple, short, or single-concern change, write a **title only** — no body, no bullets:

```text
<type>(<scope>): <short description>
```

Only add a body when the title genuinely can't carry the substance (multiple
non-obvious changes, or context the diff won't reveal):

```text
<type>(<scope>): <short description>

- <bullet 1>
- <bullet 2>
- <bullet 3>
```

When you do add a body, use **short bullet points** (≤3, each a single line).
Do **not** write prose paragraphs explaining motivation at length; the title
names the intent, the bullets name what changed. When in doubt, prefer a
title-only commit.

**Types** (full Conventional Commits / Angular set):

- `feat` — new feature or behaviour
- `fix` — bug fix
- `perf` — performance improvement with no behaviour change
- `refactor` — restructuring with no behaviour change
- `build` — build system or external dependencies (`package.json`, `pnpm-lock.yaml`, `astro.config.mjs`)
- `chore` — tooling or maintenance that doesn't fit another type, including `.claude/`
- `style` — formatting only (Prettier)
- `docs` — documentation only (`README.md`, `CLAUDE.md`)
- `revert` — reverts a previous commit

**Scopes for this project** (taken from the existing history — prefer them over inventing new ones):

- `i18n` — `src/i18n/{en,es}.json`, `src/i18n/config.ts`, `src/utils/getTranslations.ts`, the `[lang]` routing and `LanguageToggle.astro`
- `seo` — the `<head>` block in `src/layouts/Layout.astro` (meta, canonical, Open Graph/Twitter), the sitemap, `public/robots.txt`, redirects. Older commits used `og` for Open Graph fixes; use `seo` going forward
- `ui` — shared components (`src/components/*.astro`, `src/components/layout/`), `ThemeToggle.astro`, `src/styles/global.css`, icons in `src/assets/`, and home sections without their own scope (Hero, About, Contact)
- `projects` — `src/data/projects.ts`, `ProjectCard.astro`, the Projects section, the `/[lang]/projects` page, project screenshots in `public/images/`
- `certifications` — `src/data/certifications.ts`, the Certifications section, the `/[lang]/certifications` page, PDFs in `public/certifications/`
- `experience` — the Experience section
- `techstack` — the TechStack section and tech logos in `src/assets/logos/` (always lowercase — history has both spellings)
- `config` — `astro.config.mjs`, `tsconfig.json`, `.prettierrc`, `vercel.json`, `pnpm-workspace.yaml` (older `tsconfig` commits belong here)
- `deps` — dependency bumps

## Rules

- Keep the title under 72 characters.
- Use the imperative mood: "add hreflang links" not "added hreflang links".
- Do not mention file names in the title unless the file name _is_ the feature.
- Do not include the scope if the change is truly cross-cutting.
- The site copy is bilingual — commit messages stay in English, but don't "correct" the Spanish or English copy in the diff.
- If the diff touches `src/i18n/en.json` or `src/i18n/es.json`, compare their key sets: a key added, removed, or renamed in one must match in the other. Nothing enforces this parity, so warn the user if they diverge.
- If the diff adds an entry to `CERTS` in `src/data/certifications.ts`, its `id` needs a matching `certifications.items[id]` in both JSON files, and any `pdfUrl` must point to a file that exists under `public/certifications/`. Warn if either is missing.
- If the diff touches `.astro` or `.ts` files, run `pnpm check` before committing. Warn the user about errors in staged files; errors in files outside the diff predate the change — mention them, but don't block on them.
- If the diff touches `astro.config.mjs`, `package.json`, or `pnpm-lock.yaml`, run `pnpm build` before committing and warn the user if it fails.
- Never commit a `.env` file — if one is staged, warn the user immediately and do not proceed.
