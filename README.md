# The Last Man in Narvik

A narrative web experience telling the story of resistance in occupied Norway during World War II. Follow Erik Solberg, a fisherman's son turned soldier, through ten chapters of survival, resistance, and the personal cost of war.

## About

This project presents a chapter-based narrative set during the Battles of Narvik and the subsequent occupation of Norway. The story explores themes of resistance, occupation, and survival through the eyes of a Norwegian soldier who becomes part of the local resistance movement.

## Built With

- [Astro](https://astro.build) - Static site generator
- Content Collections - Type-safe chapter management
- Custom fonts: Playfair Display, Lora, DM Sans
- SEO optimization with schema markup

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── content/
│   │   └── chapters/   # 10 markdown chapters (01-10)
│   ├── layouts/
│   │   ├── Layout.astro        # Base layout
│   │   └── ChapterLayout.astro # Chapter-specific layout
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   └── chapters/
│   │       └── [slug].astro    # Dynamic chapter routes
│   ├── styles/
│   │   └── global.css  # Global styles
│   ├── config.ts       # Site configuration
│   └── content.config.ts # Content collection schema
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command                | Action                                     |
| :--------------------- | :----------------------------------------- |
| `pnpm install`              | Install dependencies                       |
| `pnpm dev`                  | Start local dev server at `localhost:4321` |
| `pnpm build`                | Build production site to `./dist/`         |
| `pnpm preview`              | Preview build locally before deploying     |
| `pnpm format`               | Format code with Prettier                  |
| `pnpm lint`                 | Lint and auto-fix with ESLint              |
| `pnpm exec lefthook install` | Install git hooks (run after cloning)      |

## Chapter Structure

Each chapter is a markdown file with frontmatter containing:

- `title` - Chapter title
- `order` - Chapter number (1-10)
- `description` - Brief chapter summary
- `epigraph` - Opening quote (optional)
- `epigraphAuthor` - Quote attribution (optional)

## Site Configuration

Edit `src/config.ts` to update site metadata:

- Site URL
- Base URL
- Site title
- Site description

## License

[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE)
