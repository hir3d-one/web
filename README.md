# Hir3d Web

The public marketing and portfolio site for Hir3d, including the product
overview, pricing, contact, and legal pages.

The original Hir3d domain is no longer active. The current site is
[hir3d-web.vercel.app](https://hir3d-web.vercel.app), with calls to action
pointing to the Vercel-hosted Hir3d applications.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 3 and Radix UI
- pnpm 11

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

The development server runs at [localhost:3002](http://localhost:3002).
`NEXT_PUBLIC_IFRAMELY_API_KEY` is optional and only enables rich link embeds.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local Turbopack development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript without emitting files |

## Deployment

The repository is linked to the `hir3d-web` Vercel project and deploys from the
repository root with Node.js 22 and pnpm 11. Vercel supplies
`VERCEL_PROJECT_PRODUCTION_URL` automatically in deployed environments.
