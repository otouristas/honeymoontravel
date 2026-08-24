# myHoneymoon.travel

Next.js rebuild of [myhoneymoon.travel](https://www.myhoneymoon.travel) — luxury honeymoon planning in Greece.

The site replaces a WordPress brochure with a typed destination authority graph: seven regions, thirty-seven island pages, seven itineraries, six guides, eight comparisons and seven audience pages, each with unique copy, JSON-LD and an answer-first section for AI and featured-snippet extraction.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Content as typed TypeScript modules — no CMS, no runtime database
- Self-hosted Broadsheet / Addington CF / Blackstone fonts
- Deployed on Netlify via the OpenNext adapter

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Structure

- `src/content/` — the content registries. `islands/` is split by region; `regions.ts`, `itineraries.ts`, `guides.ts`, `compares.ts`, `audiences.ts`, `experiences.ts`, `journal.ts`, `stories.ts`, `quiz.ts`, `faq.ts`, `seasonality.ts` and `map.ts` are the rest. `planner.ts` holds the Angeliki entity used by every `Person` schema.
- `src/lib/` — `paths.ts` (canonical URLs), `seo.ts` (`buildMetadata`, hreflang), `schema.ts` (JSON-LD builders), `geo.ts` (map projection).
- `src/components/templates/` — one template per content type.
- `src/components/ui/` — the shared primitives (`PageHero`, `AnswerBlock`, `FaqList`, `DayRibbon`, `MagazineSpread`, `IslandAtlas`, `ProofWall`, `Breadcrumbs`, `AuthorByline`, `JsonLd`).
- `src/app/` — explicit App Router segments. There is no catch-all router; legacy WordPress URLs are handled by permanent redirects in `next.config.ts`.

## Adding a destination

1. Add the record to the relevant file in `src/content/islands/`, filling every field on the `Island` type — the type deliberately requires the answer block, bases, stay types, a sample arc, pairings, logistics and 5–8 FAQs so thin pages cannot be shipped.
2. Add its coordinates to `ISLAND_COORDS` in `src/content/map.ts` so it appears on the atlas.
3. Nothing else. The route, sitemap entry, breadcrumbs and JSON-LD are all derived from the registry.

## Deploying to Netlify

Netlify detects Next.js and applies its OpenNext adapter automatically — the adapter is deliberately **not** pinned in `package.json` so it keeps pace with Next releases.

1. Connect this repository to a new Netlify site.
2. Netlify reads `netlify.toml`: build command `npm run build`, publish directory `.next`, Node 22.
3. Point the domain at the site and deploy.

Deploy previews and branch deploys set `NEXT_PUBLIC_NOINDEX=1`, which makes `src/app/robots.ts` serve a blanket `Disallow: /` so previews never compete with the production domain in search results.

### Environment variables

All optional. Without them the enquiry form still works, falling back to a prefilled `mailto:` handoff.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends enquiries by email instead of the `mailto:` fallback |
| `ENQUIRY_TO` | Destination inbox (defaults to `SITE.email`) |
| `ENQUIRY_FROM` | Verified sender address on your Resend domain |

## Search, answer engines and AI visibility

- Every route sets a unique title, description, canonical and Open Graph image through `buildMetadata()`.
- JSON-LD is emitted as a single `@graph` per page: `TravelAgency` + `Person` + `WebSite` sitewide, plus `TouristDestination`, `TouristTrip`, `Article`, `Review`, `FAQPage` and `BreadcrumbList` per template.
- Island, region, guide and comparison pages open with a question-shaped H2 and an answer of forty words or fewer, which is what answer engines quote.
- `sitemap.ts` is generated from the content registries using each record's real `updatedAt`, with hero images attached.
- Greek parity is declared in `GREEK_PARITY` in `src/lib/seo.ts`. Only add a path there once a genuine Greek page exists — a thin machine translation is worse than no alternate.

## What this repo cannot do

Ranking also depends on signals that do not live in a codebase: the Google Business Profile, consistent name/address/phone, reviews, video, and press mentions. `/press` exists so those signals have somewhere to land, and lists the off-site checklist.
