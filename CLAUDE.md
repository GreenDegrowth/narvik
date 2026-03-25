# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
npm run format    # Prettier (astro, organize-imports, packagejson plugins)
```

There are no tests. CI runs `npm run build` on Node 22.x and 24.x.

Lefthook runs Prettier automatically on staged files at `pre-commit`. Run `npm run format` to format manually.

## Architecture

Static Astro site. One content collection (`src/content/chapters/`) of markdown files with frontmatter: `title`, `order` (1–10), and optional `description`, `epigraph`, `epigraphAuthor`. The dynamic route `src/pages/chapters/[slug].astro` renders each chapter via `ChapterLayout.astro`.

**JSON-LD structured data** is injected via native `<script type="application/ld+json" set:html={...}>` tags — no third-party schema library.

## Design System

All colours, spacing, and typography are CSS custom properties defined in `src/styles/global.css` `:root`. Every component uses `var(--*)` — colour changes only require updating the tokens. Current palette is a warm dark theme (dark brownish-black background, cream text, amber accent).

Font stack: Lora Variable (prose), Playfair Display Variable (headings/drop cap), DM Sans Variable (UI). Loaded via `@fontsource-variable/*` packages.

## Code Style

- No inline or block comments unless functionally required
- Always use curly braces for `if`/`else` blocks
- Prettier enforces: 100-char width, double quotes, LF line endings, trailing commas (ES5)
