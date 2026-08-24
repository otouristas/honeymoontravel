# myHoneymoon.travel

Next.js migration of [myhoneymoon.travel](https://www.myhoneymoon.travel) — luxury honeymoon planning in Greece.

## Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS v4
- Content exported from WordPress via Novamira MCP

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/content/` — site config, destinations, WordPress content records
- `src/components/` — page templates and UI
- `src/app/` — routes (homepage + catch-all for WP slug parity)

## Pages

All 18 WordPress pages, 4 blog posts, 5 destination regions, quiz flow, contact form, sitemap, and robots.txt.
