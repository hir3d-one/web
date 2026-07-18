# Hir3d Web

Public marketing and portfolio site for Hir3d — product overview, pricing, contact, and legal pages.

The original Hir3d domain is inactive. Live site: [hir3d-web.vercel.app](https://hir3d-web.vercel.app). CTAs point at the Vercel-hosted Hir3d apps.

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

Dev server: [localhost:3002](http://localhost:3002). `NEXT_PUBLIC_IFRAMELY_API_KEY` is optional (rich link embeds).

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Turbopack development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript (`tsc --noEmit`) |

## Deployment

Linked to the `hir3d-web` Vercel project; deploys from the repo root with Node.js 22 and pnpm 11. `VERCEL_PROJECT_PRODUCTION_URL` is set automatically in deployed environments.

## Related repositories

| Repo | Role |
| --- | --- |
| [hir3d-one/app](https://github.com/hir3d-one/app) | Recruiter dashboard |
| [hir3d-one/upload](https://github.com/hir3d-one/upload) | Candidate CV upload portal |
| [hir3d-one/cli](https://github.com/hir3d-one/cli) | Dev CLI for ingestion and search |

## License

MIT — see [LICENSE](./LICENSE).
