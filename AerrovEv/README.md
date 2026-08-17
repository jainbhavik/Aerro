# AERRO EV

Premium launch landing page for **AERRO EV** — next-generation electric mobility in India.

**Domain:** [aerroev.in](https://aerroev.in)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel-ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |

## Project Structure

```
src/
  app/                  # Routes + SEO (robots, sitemap)
  components/
    brand/              # Logo mark
    layout/             # Navbar, Footer
    sections/           # Landing sections
    ui/                 # Reusable primitives
    vehicles/           # Silhouettes + showcase
  hooks/
  lib/
public/brand/logo.jpeg   # Official AERRO wordmark
public/favicon.jpeg      # Official AERRO mark (favicon / icons)
```

## Future Routes (scaffolded)

- `/products`
- `/dealers`
- `/about`
- `/contact`
- `/blog`
- `/test-ride`
- `/finance`

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set production domain to `aerroev.in`
4. Deploy

No environment variables are required for the launch page.
