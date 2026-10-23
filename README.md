# City of Saugatuck — Website

Rebuild of [saugatuckcity.com](https://www.saugatuckcity.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) + React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix, Nova preset) + lucide-react icons
- react-hook-form + zod for forms and validation
- next-themes (light/dark), sonner (toasts), date-fns
- ESLint + Prettier (with Tailwind class sorting)
- pnpm

## Getting started

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Script           | What it does                          |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start the dev server                  |
| `pnpm build`     | Production build                      |
| `pnpm start`     | Serve the production build            |
| `pnpm lint`      | Run ESLint (`lint:fix` to auto-fix)   |
| `pnpm typecheck` | Generate route types and run `tsc`    |
| `pnpm format`    | Format with Prettier (`format:check`) |

## Adding UI components

```bash
pnpm dlx shadcn@latest add <component>
```

## Structure

```
src/
  app/                 routes, layouts, globals.css (theme tokens)
  components/ui/       shadcn/ui components
  components/providers theme, tooltip and toast providers
  config/site.ts       site name, contact info, metadata defaults
  hooks/               shared React hooks
  lib/utils.ts         cn() helper
```
