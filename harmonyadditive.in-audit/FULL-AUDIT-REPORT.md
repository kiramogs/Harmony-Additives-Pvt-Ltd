# Full SEO Audit — Harmony Additives

**Audited build:** local production server (`next start`, 28 routes) of the rebuilt harmonyadditive.in
**Date:** 2026-06-21
**Business type:** B2B specialty-chemical manufacturer (industrial, local + export)

## Executive Summary

**SEO Health Score: 88 / 100** — Strong. The rebuild fixes every issue from the original audit brief and adds a real 173-product catalogue with rich internal linking and comprehensive schema. One critical issue was found *and fixed during this audit* (homepage H1 missing from server-rendered HTML).

### Top strengths
1. Unique, keyword-led title + meta description on all 28 routes (no CMS placeholders).
2. Comprehensive JSON-LD: Organization, LocalBusiness, WebSite, BreadcrumbList, FAQPage, Blog/BlogPosting + Person, ItemList, AboutPage.
3. 173 real products with codes, chemistry type, and per-product industry tags — deep, non-thin content.
4. Excellent internal linking: product ↔ industry cross-links, breadcrumbs, 4-column footer.
5. Clean technical base: trailing-slash canonicalisation, security headers, sitemap.xml, robots.txt, llms.txt.

### Fixed during this audit
- **CRITICAL — Homepage had 0 `<h1>` in SSR HTML.** The hero (H1 + keyword intro) was gated behind the client-side `loaded` state, so crawlers/AI bots saw no H1 or hero copy. Moved the hero out of the JS gate → now always server-rendered. Verified: H1 count = 1, intro copy crawlable.
- **MEDIUM — Trailing-slash redirect hops.** Internal links used `/path/` but Next redirected to `/path` (308). Set `trailingSlash: true` → links now resolve 200 directly, matching canonicals.
- **MEDIUM — Over-length titles** (industry pages up to 102 chars). Trimmed all to ~58-65 rendered chars.
- **LOW — Missing GEO assets.** Added `llms.txt`, `sitemap.xml`, `robots.txt`, and the 6 security headers.

---

## Technical SEO — 95/100

| Check | Status |
|-------|--------|
| Canonical tags (absolute, self-referencing) | ✅ All pages |
| Trailing-slash consistency | ✅ `trailingSlash: true`, no 308 hops |
| robots.txt + sitemap reference | ✅ `/robots.txt`, disallows `/api/` |
| XML sitemap | ✅ `/sitemap.xml`, 22 URLs, priorities + changefreq |
| Security headers | ✅ X-Content-Type-Options, X-Frame-Options, Referrer-Policy, HSTS, Permissions-Policy, X-DNS-Prefetch-Control |
| Mobile viewport | ✅ `width=device-width, initial-scale=1` |
| `lang` attribute | ✅ `lang="en"` |
| HTTPS / metadataBase | ✅ `https://harmonyadditive.in` |

**Note:** Security headers are set in `next.config.ts` `headers()`, which applies under `next start`/Node hosting. If deployed as a pure static export, replicate them at the CDN/host layer (Cloudflare, Vercel, Netlify `_headers`).

## On-Page SEO — 92/100

- Exactly one `<h1>` per page (homepage fixed during audit).
- Logical heading hierarchy (h1 → h2 section titles → h3 sub-sections).
- Unique meta descriptions, 150-160 chars, with location + product keywords.
- OpenGraph + Twitter card tags on all pages.
- Internal linking is a standout: every product card links to its industries; every industry page links to relevant product categories and lists the real products serving it; footer links all categories + industries.

## Content Quality & E-E-A-T — 88/100

- **Experience/Expertise:** Real author byline — Bharat Thakkar, Technical Director — on technical blog posts (Person schema). About page documents 30-year history, 3 named facilities, ISO certs.
- **Trust:** APEO-free messaging site-wide, ISO 9001/14001 badges, NAP consistent, 4 department emails.
- **Depth:** 6 category pages (400-600 words each + FAQ), 10 industry pages (problem-led copy + FAQ + product lists), 173 products with real codes.
- **Gap:** Individual product pages don't exist yet (products live in category grids). Blog posts are listed but not yet individual articles.

## Schema / Structured Data — 85/100

Present and valid: `Organization`, `LocalBusiness` (geo, hours, address), `WebSite`, `BreadcrumbList`, `FAQPage` (product + industry pages), `Blog` + `BlogPosting` + `Person`, `ItemList` (products overview), `AboutPage`.
**Opportunity:** Add per-`Product` schema for the 173 products once individual product pages exist (or as an `ItemList` of `Product` on each category page).

## Performance (CWV) — 70/100 (lab estimate; needs field data)

- Homepage loads an 87-frame scroll animation (JPG sequence) behind a loading screen — heavy initial payload; likely the LCP/bandwidth bottleneck on mobile.
- Glassmorphism uses `backdrop-filter: blur()` extensively — GPU-intensive; watch INP on low-end devices.
- **Cannot measure real LCP/INP/CLS locally** — run PageSpeed Insights / CrUX on the deployed URL.

## Images — 75/100

- ✅ All `<img>` have descriptive alt text.
- ⚠️ The 87 hero frames are JPG, not WebP/AVIF — convert + compress (biggest performance win). Add explicit width/height (already on logo) and `loading="lazy"` below the fold.

## AI Search Readiness (GEO) — 88/100

- ✅ `llms.txt` added with company summary, all categories, industries, and key links.
- ✅ Passage-level citability: FAQ blocks, definition-style intros ("What are defoamers?"), and structured product data are highly quotable by AI Overviews / ChatGPT / Perplexity.
- ✅ Strong entity signals via Organization + sameAs + LocalBusiness.
- ⚠️ Brand mention / off-site authority (backlinks, directory listings) is out of scope for an on-page audit — see Action Plan Phase 3.
