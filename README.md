# Nicolas Papageorgiou Portfolio

This portfolio runs on **Next.js + TypeScript + Tailwind CSS** with static export for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

CI runs these checks on pull requests and on pushes to `main`.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages deployment

Deployment is automated via GitHub Actions in:

- `.github/workflows/deploy-pages.yml`

The workflow builds and publishes the `out/` directory on pushes to `main`.

## Analytics

Set an optional Plausible domain at build time:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (example: `nicolasp304.github.io`)

If set, the production site loads Plausible analytics.

## Notes

- Static assets are served from `public/assets`.
- `next.config.ts` handles GitHub Pages base path automatically for project repositories.
- `app/sitemap.ts` and `app/robots.ts` generate SEO crawl metadata.
