# Pilot Astra AI

A complete 19-page Next.js website for Connected Growth Systems, built from the supplied local Markdown sources. The homepage retains its developed hero, all 250 original PNG frames, canvas engine, marquee, bento and white-to-black transition.

## Run and verify

- `npm run dev` — local development at `/`.
- `npm run lint` — ESLint.
- `npm run build` — production build and generated route types.
- `npx tsc --noEmit` — standalone TypeScript check after route type generation.
- `node --test tests/*.test.mjs` — planning, service scenario and enquiry-encoding tests.
- `npm start` — production server after a build.

`/sequence-preview` redirects to `/`. The homepage has 15 sections plus its footer. All 18 additional sitemap destinations are implemented, including eight service detail pages and three case studies. Unknown service and work slugs return 404.

## Source content and shared components

`lib/home-content.ts` holds the homepage content. `scripts/extract-site-content.py` extracts the other supplied HTML-in-Markdown documents into explicit page fields in `lib/site-content.json`; run `python3 scripts/extract-site-content.py` after intentional source updates. The site renders safe React text, lists, links and disclosures rather than injecting source HTML. Obsolete source service URLs are normalized to the sitemap routes.

`components/SiteNavbar.tsx` shares the original navigation markup between the hero and interior pages. `HomepageFooter` is reused everywhere. `SitePages.tsx` and `SitePages.css` provide the editorial page system; small client components handle the existing homepage interactions, enquiry preparation and service scenarios. No dependencies or backend services were added.

Service calculators retain each source's inputs, example budget and lift percentages. The source supplies no executable formula: the visible formula explanation states the implementation assumption that quality lift also changes conversion rate. Scenario outputs are illustrative gross-revenue planning, not measured results, profit, guarantees or price quotes. Source-reported case outcomes are explicitly distinguished from independently verified evidence.

## Enquiries

Both contact interfaces prepare a draft addressed to `info@bharataivyapari.com`. They do not send or store enquiries or submit information to a website server. Visitors review and send from their own email application. Copy and manual-selection fallbacks are included. Long drafts use the copy fallback to avoid email-client URL limits. No phone number, live calendar, WhatsApp contact destination or CRM endpoint is configured.

## Deployment configuration

After confirming the production origin, set `PILOT_ASTRA_SITE_URL` to its absolute HTTP(S) origin **before building**. This supplies canonical and social-preview URL metadata for every page. Without it, canonical URLs remain omitted; Next.js warns and uses a local origin for absolute social-preview URLs. Do not publish without configuring the confirmed origin.

`/sitemap.xml` lists the actual 19 routes. `/robots.txt` advertises it and excludes the redundant preview URL. These endpoints use the configured origin, or the current request origin for local preview; the request fallback does not create canonical metadata.

The June 2025 privacy policy and terms need owner review before publication. Their source obligations remain intact. In particular, the privacy policy describes additional collection fields and third-party storage that differ from the current email-draft-only interface; the privacy page displays an implementation note. Source calendar snapshots are not represented as live availability, and source VSL placeholders are not presented as videos.

See `docs/full-site-delivery.md` for the A–F completion report, route inventory, changed files and evidence. `output/full-site/` contains responsive audits, source checks and visual screenshots. The earlier homepage-only report is historical and is superseded by the full-site report.

## Animation asset distribution

The 250 PNG animation frames and their approximately 193 MB source ZIP are intentionally excluded from Git. Existing local copies remain unchanged. After cloning, supply the original frames separately in `public/frames/`, named `ezgif-frame-001.png` through `ezgif-frame-250.png`, before previewing or deploying the animated hero. The browser uses the extracted PNG files, not the ZIP. The source ZIP is too large for a regular GitHub file; no lossy recompression or animation-engine change was made.
