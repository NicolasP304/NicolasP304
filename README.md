# Nicolas Papageorgiou Portfolio

This portfolio now runs on **Next.js + TypeScript + Tailwind CSS** with static export for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages deployment

Deployment is automated via GitHub Actions in:

- `.github/workflows/deploy-pages.yml`

The workflow builds and publishes the `out/` directory on pushes to `main`.

## Notes

- Static assets are served from `public/assets`.
- `next.config.ts` handles GitHub Pages base path automatically for project repositories.
