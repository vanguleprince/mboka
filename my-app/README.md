This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Architecture prete pour le back-end

Le projet inclut maintenant une couche d'integration API avec fallback local pour ne pas casser le front pendant la migration.

- Types metier partages: `lib/types/artist.ts`
- Donnees locales (fallback): `lib/artistTracklists.ts`
- Configuration d'environnement: `lib/config/env.ts`
- Client HTTP centralise: `lib/http/api-client.ts`
- Service metier: `lib/services/artist-tracklist.service.ts`
- Endpoints internes: `app/api/tracklists/all/route.ts`, `app/api/tracklists/[slug]/route.ts`

## Variable d'environnement

Copiez `.env.example` vers `.env.local` puis renseignez:

- `MBOKA_API_BASE_URL=https://votre-api.com`

Si la variable est vide, l'application utilise automatiquement les donnees locales.

## Contrat API attendu

Le service essaie d'appeler ces routes sur votre back-end:

- `GET /artists/tracklists`
- `GET /artists/:slug/tracklist`

Structure JSON attendue pour une tracklist:

- `slug`: `bogo | c2b | flacko | keurma`
- `name`: string
- `cover`: string
- `tracks`: array de `{ title: string, duration: string, src?: string, link?: string }`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
