# SEO Action Plan — Harmony Additives

Priorities after the audit. Items marked ✅ DONE were fixed during this session.

## Phase 1 — Critical (done this session)
- ✅ Homepage `<h1>` + hero intro now server-rendered (was JS-gated → invisible to crawlers/AI).
- ✅ `trailingSlash: true` — eliminated 308 redirect hops; links match canonicals.
- ✅ Added security headers, `sitemap.xml`, `robots.txt`, `llms.txt`.
- ✅ Trimmed over-length `<title>` tags to ~58-65 chars.

## Phase 2 — High impact (Weeks 1-2)
1. **Image optimization (biggest CWV win).** Convert the 87 hero JPG frames to WebP/AVIF and compress; consider reducing frame count or resolution tiers for mobile. Target LCP < 2.5s mobile.
2. **Measure real Core Web Vitals.** Run PageSpeed Insights + CrUX on the deployed domain; tune `backdrop-filter` usage if INP is poor on low-end mobiles.
3. **Deploy + submit.** Verify Google Search Console + Bing Webmaster, submit `sitemap.xml`, request indexing of the 18 priority URLs.
4. **Confirm headers in production.** If hosting as static export, replicate the 6 security headers at the CDN/host layer.

## Phase 3 — Content & authority (Month 2)
1. **Individual product pages** for top sellers (start with top 10-15 by search demand) with per-`Product` schema (sku = product code, brand, manufacturer, category) — unlocks the long-tail.
2. **Individual blog articles** (`/blog/[slug]/`) with full body, `Article` schema, author bio, and internal links to products. Migrate the 15 listed posts.
3. **Off-site signals:** IndiaMART / TradeIndia / Justdial listings, trade-association directories (IPMA, ICC), Paint India 2026 exhibitor link — NAP must match the LocalBusiness schema exactly.
4. **Google Business Profile** — claim/optimize for "chemical additive manufacturer Mumbai" local pack.

## Phase 4 — Monitoring (ongoing)
- Track the top 20 commercial keywords (defoamer manufacturer India, wetting agent for paint, etc.).
- Watch GSC for queries ranking 8-15 ("almost there" wins).
- Re-run this audit after deploy to capture real field CWV.

## Notes for the dev
- Product data is generated from `scripts/product-info.csv` via `node scripts/gen-products.mjs` → `src/data/products.ts`. Update the CSV and re-run to change the catalogue.
- All 173 products are APEO-free; per-industry counts in `industries.ts` match the real product DB exactly (119 paint, 96 inks, 48 paper, …).
