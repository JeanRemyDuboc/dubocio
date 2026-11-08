# Copilot instructions for dubocio

## Project overview
This repository is a small Astro site for a personal blog and portfolio. The app is primarily static content: MDX pages under `src/pages/`, shared layouts under `src/layouts/`, reusable UI in `src/components/`, global styles in `src/styles/base.css`, and images/assets in `src/images/`.

The site is deployed to GitHub Pages via `.github/workflows/deploy.yml` and uses Astro + MDX + Tailwind.

## Build, test, and lint commands
- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Run the site locally in preview mode: `npm run preview`
- Production validation/build: `npm run build`
  - This script runs `astro check` and then `astro build`
- Astro CLI access: `npm run astro -- --help`

There is no dedicated `lint` or `test` script in `package.json`, and there is no single-test runner configured for this project. For focused validation after editing Astro/MDX files, prefer `npx astro check` or `npm run build`.

## High-level architecture
- `astro.config.mjs` is the source of truth for Astro configuration.
  - `site: 'https://duboc.io'`
  - `integrations: [mdx(), tailwind()]`
  - Markdown/Shiki highlighting is enabled for code blocks
- `src/pages/` contains page routes and blog content.
  - Top-level pages like `index.mdx`, `about.mdx`, `now.mdx`
  - Blog entries live under `src/pages/blog/*.mdx`
  - `blog.astro` generates the article index by reading blog frontmatter with `Astro.glob(...)`
- `src/layouts/` contains the page shell and blog-specific wrappers.
  - `Layout.astro` and `PageLayout.astro` provide the shared site chrome (`Header`, `Nav`, `Footer`, `base.css`)
  - `BlogLayout.astro` adds article title/date markup and the per-post structure
- `src/components/` contains reusable UI blocks such as `Header.astro`, `Nav.astro`, and `Footer.astro`
- `src/styles/base.css` is the styling entry point and contains the Tailwind layers plus custom selectors for content blocks (`content h1`, `content p`, `blockquote`, etc.)
- `src/pages/rss.xml.js` generates the site's RSS feed

## Key conventions
- Prefer MDX and frontmatter for content-heavy pages and blog posts. Typical article frontmatter includes `layout`, `title`, and `pubDate`.
- When creating or editing a blog post, keep the route structure and frontmatter pattern consistent with existing posts in `src/pages/blog/`.
- Use the existing layout hierarchy instead of introducing ad hoc wrappers. For example, blog posts should use `layout: ../../layouts/BlogLayout.astro` and not bypass the shared shell.
- Styling is primarily Tailwind utility classes plus a small custom stylesheet in `src/styles/base.css`; follow the existing light-blue palette and centered content width patterns.
- Keep content static and markdown-driven. This repo does not appear to use client-side state management or a component framework beyond Astro.
- When adding new images, prefer `src/images/` and reference them relative to the Markdown file or page as already used in the existing MDX posts.
- Deployment is GitHub Pages oriented; do not assume a custom runtime server is present.

## Editing guidance
- Use existing page and layout patterns before inventing new abstractions.
- When changing site-wide structure, prefer updates in the shared layout/components rather than duplicating markup across pages.
- Keep blog and page content human-authored and readable in MDX; use frontmatter for metadata rather than adding separate data files unless the existing pattern requires it.

## Relevant project references
- `README.md` documents the standard Astro commands and confirms the project is an Astro starter adapted for a personal site.
- `package.json` is the source for the available scripts and dependencies.
- `.github/workflows/deploy.yml` shows the deployment flow to GitHub Pages.
