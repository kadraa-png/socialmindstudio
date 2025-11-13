# Repository Guidelines

## Project Structure & Module Organization
The app follows the Next.js App Router layout. `app/page.tsx` hosts the landing experience, while `app/layout.tsx` wires shared providers, metadata, and global styles from `app/globals.css`. Place reusable UI in `app/(components)/` or a sibling folder to keep routing clean. Static assets (logos, Open Graph images, etc.) belong in `public/` and are served verbatim. Configuration lives at the root: `tsconfig.json` for path aliases and strictness, `eslint.config.mjs` for lint rules, and `postcss.config.mjs` for Tailwind 4’s pipeline.

## Build, Test, and Development Commands
- `npm run dev` – launches Next.js in watch mode on `http://localhost:3000`.
- `npm run build` – produces the production bundle (`.next/`) and surfaces type and lint errors.
- `npm run start` – serves the previously built bundle; use this when validating deployment parity.
- `npm run lint` – runs ESLint with the Next.js shareable config; treat failures as blockers.

## Coding Style & Naming Conventions
Write all React files in TypeScript (`.tsx`) using functional components and hooks. Prefer descriptive PascalCase for components (`HeroBanner.tsx`) and camelCase for helpers. Keep files small; co-locate component-specific styles using Tailwind utility classes declared in `globals.css`. Run `npm run lint` before pushing—ESLint enforces import ordering, React 19 rules, and TypeScript best practices. Use 2-space indentation to match the existing files.

## Testing Guidelines
Unit and integration tests should live under `tests/` or beside the module as `*.test.tsx`. We recommend Vitest + React Testing Library for component logic and Playwright for smoke E2E coverage; configure them to run against the built app to catch routing regressions. Target meaningful coverage of critical flows (hero render, navigation, data hooks). Name tests after the feature (`hero-section.test.tsx`) and ensure they run in CI before merging.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat: add hero animation`, `fix: correct meta tags`) so release notes can be generated automatically later. Keep commits scoped and include rationale in the body when touching multiple layers. Pull requests should describe the change, list testing performed (`npm run lint`, manual browser checks), and link to any tracking issue. Add screenshots or recordings when adjusting UI, and wait for at least one approval before merging.

## Security & Configuration Tips
Secrets belong in `.env.local`, never in Git. Use the `NEXT_PUBLIC_` prefix only for values safe to expose in the browser. When integrating external APIs, add minimal scopes and document required keys in the README’s configuration section.
