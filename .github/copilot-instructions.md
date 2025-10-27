## Quick orientation for AI coding agents

This repository is a Next.js (Pages Router) frontend for the Metalyze client. Use these notes to be productive immediately.

- Frameworks & versions (important): Next.js 16 (pages router), React 19, TypeScript 5, React Query v5, Axios, Zustand, Sass.
- Entry points:
  - App shell: `src/pages/_app.tsx` — wraps the tree with `QueryProvider` from `@shared/lib/react-query`.
  - API routes: `src/pages/api/*` (standard Next pages router API examples in `pages/api/hello.ts`).

## High-level architecture

- Pages Router UI lives under `src/pages/*` and uses shared folders for domain logic.
- Domain code is organized into `src/entities/`, `src/features/`, and `src/shared/`.
- Shared infrastructure:
  - HTTP client: `src/shared/api/http.ts` — Axios instance with `NEXT_PUBLIC_API_URL` fallback and a request interceptor that reads `localStorage.token` to set `Authorization: Bearer <token>`.
  - React Query wiring: `src/shared/lib/react-query/QueryProvider.tsx` — creates a QueryClient, provides HydrationBoundary and ReactQueryDevtools. Follow this for query hydration and client scoping.

## Typical integration patterns (follow these examples)

- Add a new domain API client under `src/shared/api/<domain>/index.ts`. Use the `api` axios instance:

  Example: `src/shared/api/product/index.ts`

  - export async functions that call `api.get('/products')`, `api.post('/products')`, etc.
  - Keep request shapes minimal; map backend responses in the same file when needed.

- Use React Query hooks in feature components with stable keys.
  - Key convention: `['<domain>', <id?>]`, e.g. `['product', productId]` for product queries.
  - Keep fetch logic in `src/shared/api/*` and call it inside `useQuery()` or `useMutation()` in components/feature code.

## Environment & run tasks

- Local API base: `process.env.NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000` in `src/shared/api/http.ts`).
- NPM scripts from `package.json`:
  - `npm run dev` — Next dev server (note: scripts include `--webpack` flag).
  - `npm run build` — build with `next build --webpack`.
  - `npm run start` — start production server.
  - `npm run lint` — runs `eslint`.

## Project-specific conventions & gotchas

- Pages Router (not App Router): code must live under `src/pages/*` for routes and API routes.
- Path aliases appear in imports (example: `@/styles/globals.scss`, `@shared/lib/react-query`). Check `tsconfig.json`/`next.config.ts` for exact mappings when adding new imports.
- React Query:
  - The `QueryProvider` is always used at the top-level. Do not create nested QueryClients unless intentionally isolating cache per subtree.
  - HydrationBoundary is present; when adding SSR/SSG data hydration, follow the provider pattern.
- Auth token read/write is client-side `localStorage` in `src/shared/api/http.ts`. Server-side code should not rely on `localStorage`.
- CSS: global styles in `src/styles/globals.scss`; components may use CSS modules under `src/styles/*.module.scss`.

## Linting & tests

- Lint: `npm run lint` (config uses ESLint + `eslint-config-next`).
- There are no explicit test scripts in `package.json`. If you add tests, include `test`/`ci` scripts and update README.

## Useful file references

- `package.json` — scripts & dependencies
- `src/pages/_app.tsx` — where `QueryProvider` is mounted
- `src/shared/lib/react-query/QueryProvider.tsx` — QueryClient/HydrationBoundary usage
- `src/shared/api/http.ts` — axios baseURL and auth interceptor
- `src/pages/api/hello.ts` — example serverless route

## When modifying code, prefer small, localized changes

- Follow existing folder structure: add new feature code under `src/features/<feature>` and domain models under `src/entities` where appropriate.
- Keep API wrappers in `src/shared/api/*` and surface only functions needed by UI.

If any of the above is unclear or you want specific guidance (tests, deployment, CI), tell me which area to expand and I'll update this file.
