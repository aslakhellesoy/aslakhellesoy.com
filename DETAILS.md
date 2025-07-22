## Project Overview

This project is built using **Astro**, a modern static site builder designed for fast performance and flexibility. Astro enables you to build content-rich, SEO-friendly websites using an island architecture and supports multiple JavaScript frameworks for components.

### Key Features

- **Static Site Generation (SSG):** Pages are rendered at build time for maximum speed.
- **Component Islands:** Only interactive components hydrate on the client, minimizing JavaScript sent to users.
- **Framework-Agnostic:** Integrates with React, Vue, Svelte, and Solid components.
- **Markdown & MDX Support:** Content can be written in Markdown, easily enhanced with custom components.

## Project Structure

| Folder/File         | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `/src`              | Source code: pages, layouts, components, styles.    |
| `/public`           | Static assets served directly (images, fonts, etc). |
| `/astro.config.mjs` | Configuration for Astro project.                    |
| `/package.json`     | Project dependencies, scripts, and metadata.        |
| `/node_modules`     | Installed npm packages (auto-generated).            |

Common subfolders:
- `/src/pages`: All routes (each `.astro`, `.md`, `.mdx` file = one page).
- `/src/components`: Reusable UI pieces, can be written in `.astro` plus frameworks.

## Build & Development

- **Development**:  
  ```bash
  npm run dev
  ```
  Launches local dev server (usually at http://localhost:4321).

- **Production Build**:  
  ```bash
  npm run build
  ```
  Outputs the statically rendered site to `/dist`.

- **Preview Production Build**:  
  ```bash
  npm run preview
  ```

## Configuration

- All configuration is managed in `astro.config.mjs`.
  - Customize site metadata (base URL, sitemap).
  - Add integrations (e.g., Tailwind CSS, React, MDX).

**Example integration setup (Tailwind):**
```js
import tailwind from "@astrojs/tailwind";
export default {
  integrations: [tailwind()],
};
```

## Content & Data

- **Markdown/MDX**:  
  Content-rich pages go in `/src/pages` with `.md` or `.mdx` extensions.
- **Astro Collections**:  
  Astro supports typed content collections, accessible via the Content API.

## Deployment

- Can deploy to any static host:
  - **Vercel, Netlify, GitHub Pages**: Most recommended for seamless integration.
  - Output in `/dist` is fully static HTML, CSS, and assets.

## Coding Conventions

- **Astro components**: Use `.astro` files for site structure and most UI.
- **JS/TS components**: Use for interactivity only when needed. Keep as islands.
- **CSS**: Use global styles (`/src/styles` or `global.css`), with Tailwind or other processors as desired.
- **Prefer Markdown** for blog posts or documentation.

## Key Dependencies

- `astro`: Core static site builder.
- `@astrojs/*` integrations: Framework support, add-ons, and adapters.
- Additional: Your choice of CSS frameworks (Tailwind, Sass), and optionally React, Vue, Svelte, etc.

## Working With This Project

- Add new pages by creating files in `/src/pages` (e.g., `about.astro`, `blog.md`).
- Add components to `/src/components` and import where needed.
- Update configuration and dependencies in `astro.config.mjs` and `package.json`.

## References

Consult the [Astro documentation] for more advanced usage, content collections, API routes, or plugin setup.