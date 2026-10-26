# UPDATE.md — Pilot Astra AI: SEO Content Rebuild + Safe Global Theme Toggle

**Status:** Updated implementation brief for Codex; not a record of deployed or modified website code  
**Research date:** 23 October 2026  
**Brand:** Pilot Astra AI — Connected Growth Systems  
**Old brand / content migration reference:** Bharat AI Vyapari  
**Repository:** Existing Next.js application; inspect the local workspace before changing any file  
**Inputs:** `sitemap.md`, `index.md`, all supplied `about.md`, service, work, contact and legal Markdown files; current homepage content/context file; new managed-AI business-model brief; supplied **“Anatomy of a High-Converting Alternatives Page”** screenshot.

> **Updated execution directive (highest priority):** Audit the existing Next.js repository and read all supplied Markdown sources. **Treat the existing hero as read-only: do not change its text, image sequence, 250 frames, canvas, scroll behavior, overlays, layout, typography, colors, navigation positions, CTAs, or animation code.** Keep the existing marquee motion and Bento Grid geometry unchanged. Rewrite SEO/editorial content **only below the hero** and on the other routes; add the decision sections when needed, without duplicating existing sections. **One narrowly authorized UI addition:** place a compact, accessible light/dark theme-toggle icon in the existing homepage header, without moving or restyling other header elements. It must switch the post-hero homepage and the other 18 routes between complete readable light and dark themes. Preserve the original white-to-black hero animation transition exactly in the default dark mode. See §0A before touching theme code. Maintain the working site throughout.

---

## 0. What is protected vs what can change

| Existing feature | Non-negotiable protection | Permitted adjustment |
|---|---|---|
| White-themed cinematic hero, including text | **Read-only:** keep original headline, supporting copy, wordmark, logo, CTA, spacing, canvas, overlays, backgrounds and animation | **No hero content or design edits**. Place the new positioning in the first appropriate post-hero content section and in SEO metadata |
| 250-frame sticky HTML5 canvas | Preserve all `ezgif-frame-001.png` through `ezgif-frame-250.png`, source ZIP, file naming, scroll progression, reverse playback, interpolation, preloading and DPR code | **None** except fixing independently verified bugs with a separately recorded patch |
| White-to-black hero transition | Keep original 250-frame visuals, scroll thresholds, timing, interpolation, and dark landing in **default mode** | For optional light mode only, add a **separate post-hero handoff** to the light content surface; never modify the hero itself |
| Navigation | Preserve labels, positions, spacing, font, existing logo/CTA, responsive behavior and hover effects | Correct destinations; **add exactly one small sun/moon toggle button** in an available header action slot; adapt header contrast by theme without a duplicate navbar |
| Two-row marquee | Preserve logo assets, directions, seamless looping, speed, fade masks, spacing and pause behavior | Update surrounding copy only; no carousel redesign |
| Services Bento | Preserve asymmetrical grid, cards, proportions, corners, visual effects and interactions | Rewrite card descriptions/SEO headings; keep all eight original service URLs |
| Architecture / timelines / calculators / FAQ | Reuse components and their interactions | Rewrite accessible labels/copy; add modules or evidence-based comparisons where needed |
| Brand styling | Arial and approved blue/cyan palette; no pink/orange/gold redesign | Default **Dark:** post-hero pure black; optional **Light:** post-hero white/ice-white; theme all cards, typography, dividers, CTAs, inputs and footer coherently using semantic CSS variables |
| Approved contact behavior | `info@bharataivyapari.com`; email-draft preparation, copy fallback, no backend | Rewrite prompts and privacy text; never claim form submission or received enquiries |
| Other Markdown pages | Keep current routes and legal obligations | Rework their editorial content and on-page SEO from source, not fabricated capabilities |

**Safety workflow:** Inspect `git status`, make a recoverable checkpoint without losing local work, inventory all components and tests, edit existing data/copy modules rather than replacing templates, verify the protected UI with screenshots before and after. Do not create a second homepage or alter `/sequence-preview` behavior beyond an existing safe redirect to `/`.

### Explicit change permissions (order of precedence)

1. **Never touch:** hero component internals, hero copy, scroll-canvas renderer, frame assets, hero CSS/selectors, existing marquee/carousel animation loops and timing, existing Bento geometry, hero/background video imagery.
2. **Minimal safe edits:** below-hero section copy/data; search metadata; navigation hrefs; accessible forms and calculators (preserving their behavior); semantic theme tokens for areas **outside the hero**.
3. **Allowed additions:** two decision-making sections (if not already present), and **one** theme-toggle icon button in the existing header using the current header component and available action slot.
4. **Not allowed:** global `filter: invert()`, globally overriding `body`, canvas or hero colors, inserting a second navbar, changing sticky hero height, touching `requestAnimationFrame` for hero, regenerating frames, replacing logo assets, changing marquee scroll direction/speed or rebuilding layouts to achieve light mode.
5. **When conflict arises:** Keep hero and marquee visually identical, keep original user-facing copy there, and relocate any proposed headline/SEO copy to a new or existing section below the hero. If adding the toggle would require disruptive header reflow, implement a minimal positioned header action only after measuring widths at mobile sizes; document the placement and verify screenshots.

---

## 0A. NEW REQUIRED FEATURE — Site-wide Dark ↔ Light Theme Toggle (hero protected)

### User requirement and precise scope

- **Default state:** preserve the *current* first-visit experience: an **unchanged white cinematic hero** that animates into the existing black/dark content region. The homepage after the hero and all inner pages remain in the existing **Dark** theme by default.
- **Light state:** a small icon in the **top homepage header** toggles the site's *themeable surfaces* to a coherent white/ice-white **Light** theme: all sections **after the hero**, footer, all 18 non-home routes, service cards, work cards, legal articles, diagrams, tables, calculators, forms and accessible controls. The **hero itself remains an intentional read-only exception** in both states: no recolor, no swap, no new overlay, no frame changes, no scroll-length edits.
- **Returning from Light to Dark:** restoring Dark restores the existing black post-hero site without reloading, changing content, resetting section state, or restarting the image sequence.
- **Header icon:** add one compact sun/moon toggle as an end-of-navigation action beside the existing actions, without changing their labels, order, layout, height, spacing, logos or CTAs. Choose sun/moon icon direction and accessible label unambiguously; do not use an additional text button or settings drawer.
- **Persistence:** store only the user-selected preference (`pilot-astra-theme = 'dark' | 'light'`) in `localStorage` if available. Initial fallback is `dark` to preserve the already approved experience. Do not infer that the system's dark-mode setting should override that project default; system preference may be a fallback only if the team explicitly changes the product requirement later. No server/user tracking is needed.
- **Cross-page continuity:** switching theme in the homepage header should persist while navigating from `/` to `/about`, `/services`, service details, `/work`, `/contact`, `/privacy-policy`, `/terms`, and `/disclaimer`. The shared site header on those routes may reuse the same small icon so visitors can change back without visiting `/`; this does **not** authorize changing the homepage hero markup.

### Color tokens (semantic variables; values are design starting points)

| Token | Dark mode — current after-hero default | Light mode — new theme |
|---|---|---|
| `--page-bg` | `#000000` | `#FFFFFF` |
| `--surface` | `#050B18` | `#F4F8FF` |
| `--surface-raised` | `#0B1B35` | `#FFFFFF` |
| `--text-primary` | `#F4F8FF` | `#050B18` |
| `--text-secondary` | accessible muted ice/gray | accessible muted navy/gray |
| `--line-subtle` | translucent ice-white | translucent navy |
| `--accent` | `#126BFF` | `#126BFF` |
| `--accent-glow` | subtle `#00D9FF` | very restrained `#126BFF`/cyan wash |
| `--form-bg` | dark surface | white/light surface |

Keep both themes within the approved blue/cyan/white/navy palette. **No pink, gold or lavender rebrand.** Choose contrast-checked text and focus colors instead of copying low-opacity dark-mode styling into light mode. No automatic inversion or hue rotation of images, brand marks, charts or canvas. Keep the selected route's semantic HTML and SEO copy identical in either mode.

### Safe implementation architecture — Next.js (no new packages)

1. **Inspect before coding:** locate `app/layout.tsx`, the currently working header component, global CSS tokens, `app/page.tsx`, the hero's CSS and the 16-section tree. Identify which CSS variables apply to the hero versus ordinary page content. Make a diff inventory and screenshot baseline.
2. **Theme ownership:** create/reuse a tiny `ThemeProvider`/hook (client-side preference only). Apply `data-site-theme="dark|light"` to a **themeable layout/region**, not indiscriminately to every element if global selectors would reach the protected hero. Scope theme variables to a site-content wrapper and inner-page shells; explicitly exclude the hero rendering subtree. The provider may store state globally, but visual styles must not leak into the hero.
3. **Hydration and flash prevention:** set the preference before first visible themeable paint using an existing hydration-safe mechanism or a tiny in-head bootstrap if necessary. Default consistently to `dark` for SSR/fallback, and synchronize the stored value before first paint to avoid light/dark flashing. Guard reads for browsers where storage is blocked. Do not change hero mounting order or defer first frame to initialize the theme.
4. **Toggle control:** semantic `<button type="button">`, clear accessible name (`Switch to light theme` when dark, `Switch to dark theme` when light), `aria-pressed` with documented meaning (for example `true` = light active), visible keyboard focus ring, at least ~40×40px tap target, a restrained sun/moon SVG/Lucide icon already available in the repo. Icon-only, no new top-nav text. Respect existing navbar breakpoint and CTA area.
5. **Centralized tokens:** theme the section wrappers, **not each card individually with hardcoded backgrounds**. Convert only post-hero and subpage CSS to semantic variables, retaining class names, grid dimensions, rounded corners, font family, animation durations and component structure. Ensure tables, outlines, logos, marquees, expanded native `<details>`, SVG labels, calculators, buttons, error states and footer have full light-mode contrast. If a logo lacks a readable light variant, use an approved existing variant or contrast-supporting container, not a newly designed logo.
6. **Transitions:** a fast tasteful `background-color`, `color`, `border-color` transition (approximately 180–300 ms) is allowed for **themeable sections and header colors** when switching themes. Disable for `prefers-reduced-motion`. **Never add transitions to the hero canvas**, its frames, the 250-frame engine or marquee transforms.
7. **Cross-tab behavior:** if simple, listen for `storage` events to synchronize preference between open tabs; remove listeners on unmount. Keep the theme choice out of URLs and metadata.
8. **Accessible fallback:** with JavaScript unavailable or localStorage inaccessible, all routes should still render a complete readable default-dark page (and the original hero). No blank sections or content gated by theme initialization.

### Scroll handoff conflict — preserve original hero, do not repaint frames

The existing hero's **250 source frames progress from a light scene toward a dark/black end**. Therefore an unchanged hero cannot simultaneously finish fully white simply because the website is set to Light. Resolve the conflict deliberately:

- In **Dark** mode, the hero reaches black and the next section begins pure black **exactly as it does now**. Do not change the existing transition, sticky duration, canvas or frame index logic.
- In **Light** mode, the hero still finishes with its **original** black/dark frames. Immediately **after the hero boundary**, gently hand off from the frame-end black to an ice-white/white surface **within the existing next-section background layer**, using a conditional soft top-to-bottom color gradient or mask that occupies the opening portion of that section and does not move content or alter carousel tracks. Once the handoff finishes, the rest of the selected light-theme site is white/ice-white. If a spacer is necessary, it may be an absolutely positioned decorative surface only; do **not** add scroll height or modify the protected hero wrapper.
- A conditional gradient is **not** permission to cover the hero or change carousel opacity, motion, speed or layout. Do not use crossfade between image-sequence frames or edit the animation. Preserve scrolled mid-position when the user toggles the theme.
- The header's contrast should follow the **currently visible surface** (white hero vs dark default content vs light content), not merely the stored site theme. Use the existing boundary/observer information where possible, with minimal isolated logic; no new competing smooth-scroll engine.

### Regression scenarios required before approval

| Situation | Dark selection | Light selection |
|---|---|---|
| Fresh load at top of homepage | Original white hero, original dark logo/nav and 250-frame first image | **Exactly the same hero**; icon indicates selected Light, but hero remains untouched |
| Midway through hero | Original image sequence and scroll mapping | Identical frames, mapping, interpolation and UI positions |
| End of hero into Section 02 | Original seamless dark landing and black marquee region | Hero ends unchanged; gentle *post-hero* dark-to-light handoff, then light marquee/background with unchanged logo-track motion |
| Bento, workflows, diagrams, forecast and forms | Existing dark styling | Full light cards, backgrounds, borders, typography, icons, focus and inputs; no loss of interactivity |
| Detail/legal/contact pages | Complete dark experience | Complete light experience; consistent selected preference |
| Browser refresh and internal navigation | Dark persists | Light persists, without visible flash |
| Switch while scrolled deep | No jumping, animations untouched | No jumping, content preserved, no scroll reset |
| Reduced-motion or no JS | Readable page; existing hero fallbacks remain | Theme switching avoids decorative tween; content still available; no-JS falls back to dark |

### Theme-toggle definition of done

- One and only one **small icon control per visible shared header**, accessible and keyboard operable.
- Default visit retains the original white-hero → black-site experience.
- Light mode genuinely switches all non-hero page surfaces, not just text color or a background at `<body>`.
- The new button does not resize, relocate or obscure the original logo, navbar items or CTA at 375px, 430px, tablet or desktop widths.
- No hero/canvas changes, no frame file changes, no changes to marquee/carousel movement, no additional packages, no new backend, no hydration errors, no FOUC and no broken anchor scrolling.
- Verify with before/after screenshot diffs at the **same scroll position** in both modes; test click/tap, Enter/Space and cross-route persistence.

---

## 1. Screenshot research — what the reference actually teaches

The uploaded screenshot is a **competitor-alternatives article structure**, *not* a template that should be copied verbatim into a homepage. It contains ten numbered elements:

1. **Find competitors and keywords** — choose 5–10 genuine alternatives, check user intent and relevance.
2. **Optimize basics** — concise URL, accurate title, H1 and meta description.
3. **Problem-focused introduction** — explain why the visitor is exploring alternatives in 2–3 useful sentences.
4. **TL;DR comparison table** — explain who each option is for, main differences and supporting links.
5. **Feature your product first** — explain fit, benefits, scope, limitations and a realistic CTA.
6. **Back up claims** — original testing, screenshots, public methodology, documented evidence; never fake metrics.
7. **Compare against the competitor** — provide concrete, traceable differences, not generic superiority claims.
8. **Review all other alternatives fairly** — strengths, weaknesses, appropriate buyers and trade-offs.
9. **Answer buying questions** — price, ownership, integrations, migration, service levels and handover.
10. **Finish with recommendations and a CTA** — help the reader decide, then offer the next step.

### Apply it to Pilot Astra AI correctly

**On homepage:** use a problem-first introduction, a compact **two-delivery-model comparison**, an honest cost/scoping table, evidence/methodology, decision FAQs, and a clear consultation CTA. **Do not turn the homepage into a keyword-stuffed “Best Agencies” list.**

**On dedicated editorial comparison pages (proposed later, not part of current sitemap):** use all ten steps, including attributed alternatives, an upfront disclosure that Pilot Astra AI authored the guide, dated pricing citations, links to competitor primary sources, nuanced recommendations and a documented methodology. Do not describe competitors as objectively “top-ranking,” better/worse, or cheapest without independent measurable evidence.

---

## 2. Competitor research and keyword coverage (public evidence, not confirmed ranks)

**Important evidence standard:** These are **observed public pages and phrases they visibly target** on the research date. Search visibility is not proof of an exact Google position, impressions, search volume, traffic, conversions, or keyword difficulty. **Do not put invented ranking numbers into the website.** To establish true ranking by India/device/location, obtain a dated export from Google Search Console (for our own pages) and a properly configured Ahrefs/Semrush/SE Ranking/Mangools or SERP tracking export (for competitors) with query, country, device, timestamp, URL, position, and source.

| Provider | Public page / primary source | SEO theme evident from page | How Pilot Astra AI can differentiate (strategy, not a comparative performance claim) |
|---|---|---|---|
| Neogen Media | https://neogenmedia.com/services/ai-automation | “AI automation agency & services in India”, voice, WhatsApp, n8n, CRM routing | Managed continuity, documented handoffs, human oversight and deployment choices |
| Innovatrix Infotech | https://www.innovatrixinfotech.com/services/ai-automation-agency-india | “AI automation agency in India”, n8n, Make, WhatsApp, AI chatbots | Explain integration + ongoing managed operations and ownership arrangements |
| BrainStream Technolabs | https://brainstreamtechnolabs.com/ | Custom AI, business automation, CRM/ERP, ecommerce software | Explain growth-system coordination across prospecting + sales + content |
| Automyze | https://www.automyze.in/ | AI operations consulting, AI sales/support/operations systems | Specify who supervises, manages exceptions and documents the workflows |
| TripleDart | https://www.wetripledart.com/generative-engine-optimization-services | GEO/AEO, AI-search visibility, entities, schema and citation tracking | GEO for industrial/retail/D2C buyer questions and integration to enquiry journeys |
| PROHED | https://www.prohed.com/services/generative-engine-optimization-services-php | GEO agency, conversational FAQs, optimized answer content | Transparent inputs and evidence of the steps performed; no guaranteed AI citations |
| Pepper Content | https://www.pepper.inc/blog/geo-agencies-india/ | GEO agency comparison, distinct India-vs-global buyer fit | Helpful, honest industry-specific content versus undifferentiated top-10 lists |
| SalesAladin | https://salesaladin.com/lead-generation-in-india/ | India B2B lead generation, outbound, appointment setting | AI SDR + CRM handoff + human review in a broader growth system |
| Leadle | https://www.leadlehq.com/post/best-b2b-lead-generation-agencies-2026 | B2B lead-generation agency comparisons | Dedicated AI SDR workflow explanations and actual qualification definitions |
| Caller Digital | https://caller.digital/blog/top-10-voice-ai-agents-india-2026 | Voice AI agents and India-specific use cases | Present AI calling as a *scoped optional layer* linked with CRM and WhatsApp |
| Groweon | https://www.groweon.com/blog/best-ai-calling-agents-sales-teams-india/ | AI calling with CRM integration; comparison content | Present voice, lead context and callbacks as integrated operations |

**Competitive gap is a hypothesis:** “Managed AI ecosystem,” “one accountable partner,” and “on-site AI engineer backed by a team” appear promising differentiators in this selection. **Do not call them uncontested or unique without a complete market audit.** Any on-site staffing claim must be subject to actual fulfillment capacity, location, contract, supervision and support terms.

**Primary SEO guidance:** Google Search Central, https://developers.google.com/search/docs/fundamentals/creating-helpful-content and https://developers.google.com/search/docs/fundamentals/seo-starter-guide — write original useful information with descriptive titles/headings and crawlable internal links, not mass-generated near-duplicates. FAQ rich-result appearance is restricted for most non-government/non-health sites; FAQs remain useful to readers but **do not promise FAQ snippets**: https://developers.google.com/search/blog/2023/08/howto-faq-changes.

### Keyword tiers and landing-page ownership

| Tier | Target query / cluster | Search intent | Primary page | Note |
|---|---|---|---|---|
| P0 | **AI automation agency India**, AI automation services India | Commercial | `/` and `/services` (distinct angles) | Homepage brand + integrated offering, services index details |
| P0 | **Managed AI services**, managed AI automation India, managed AI ecosystem | Commercial | Homepage service-model section; eventual dedicated `/solutions/managed-ai-services` | Distinct headline and implementation detail; new route is proposed, not live |
| P0 | **AI SDR agency**, AI SDR for B2B, B2B outreach automation | Commercial | `/services/ai-sdr` | Sales ops, compliance, CRM handoff; no guaranteed replies |
| P0 | **AI WhatsApp bot India**, WhatsApp enquiry automation CRM | Commercial | `/services/whatsapp-bot` | Industry links for manufacturing, retail, ecommerce |
| P0 | **GEO agency India**, GEO/AEO services, AI search optimization | Commercial | `/services/seo-geo` | Explain SEO vs AEO vs GEO; evidence/citation methodology |
| P1 | **AI calling system**, AI voice agents India | Commercial | `/services/ai-calling` | Optional, human escalation, consent/telephony scope |
| P1 | **On-site AI engineer**, dedicated AI automation engineer | Commercial | Homepage two-model section; eventual `/solutions/on-site-ai-engineer` | Availability depends on confirmed operational capability |
| P1 | **n8n agency India**, n8n business automation | Commercial | `/services` and relevant workflow passages | Only claim n8n integration when provided in the agreed stack |
| P1 | **AI website development India**, lead-generation website | Commercial | `/services/ai-website` | Website → enquiry → CRM |
| P1 | Dynamic landing pages for multi-location business | Commercial | `/services/dynamic-landing` | Scalable location/product/category pages |
| P1 | Social media automation agency India | Commercial | `/services/social-automation` | Channel permissions and publishing approvals |
| P1 | AI video content automation for business | Commercial | `/services/video-engine` | AI-assisted workflows, not guaranteed views |
| P2 | AI automation agency vs in-house team | Comparison | **Proposed** `/compare/ai-automation-vs-in-house-team` | Distinguish role coverage, costs, risk and management |
| P2 | Best AI automation agencies in India / alternatives | Alternatives | **Proposed** `/alternatives/ai-automation-agencies-india` | Use ten-point screenshot structure, disclose editorial bias |
| P2 | AI SDR alternatives / AI SDR agency vs tools | Alternatives | **Proposed** `/alternatives/ai-sdr-options` | Honest implementation and DIY comparisons |
| P2 | AI WhatsApp automation for manufacturers / retailers / ecommerce | Commercial long-tail | Existing service pages + **proposed** detailed industry pages | Do not make thin programmatic duplicates |

**Keyword measurement handoff for Codex/SEO lead:** For each candidate query capture `[keyword, location, device, date, estimated volume, intent, ranking URLs, our URL, position, source]`. If unavailable, set `rank/volume/difficulty: unverified` — never guess. Separate keyword targeting from actual ranking reports.

---

## 3. Official positioning and claim guardrails

### Proposed primary positioning

**Pilot Astra AI — Your AI Team. Without Building an AI Department.**  
**Descriptor:** Managed AI automation for sales, marketing, customer engagement and business operations.  
**Supporting:** A connected system of AI agents, human oversight, documented processes, CRM integration and ongoing support, delivered through a scoped managed-services engagement or an agreed on-site engineering model.  
**Short promise:** **One connected system. One accountable partner. Human oversight.**

### Two delivery models from the new supplied brief

| | Model A — Dedicated On-Site AI Engineer | Model B — Fully Managed AI Services |
|---|---|---|
| Who it serves | Businesses that need close in-person implementation and daily operational coordination | Businesses that prefer central implementation and managed ongoing workflows |
| Delivery | Engineer at business premises, backed by remote technical architecture/escalation | Managed team handles scoped architecture, integration, monitoring and improvement |
| Included by scope | Workflow documentation, training, reporting, escalations, clear assigned responsibilities | AI SDR, website/CRM, WhatsApp, social, SEO/GEO/AEO, content, support as agreed |
| Responsibility | Shared operational arrangements defined in contract | Central managed execution; business supplies approvals and priorities |
| Pricing | Separately quoted by location, responsibilities and support level | One-time implementation plus scoped ongoing managed service |
| Limitations | Staffing availability, hours and scope must be confirmed | New workflows and tool subscriptions may incur additional cost |

**Do not imply Model A is universally available until confirmed by management.** The supplied new brief describes an offer, not verified deployment history. Keep it conditional and quote-based.

### Costs and data integrity

- New source brief's **illustrative** year-one setup: `$10,000 + ($500 × 12) = $16,000`.
- Illustrative year two: `$500 × 12 = $6,000`, **assuming the same scope and fees**; one-time setup not repeated.
- Year-two annual spend is `$10,000 / $16,000 = 62.5%` lower **than year-one spend in this specific illustration**. **NOT** a verified 62.5% cost saving versus hiring, and **NOT** a promise that total lifetime spending or subscriptions will decline.
- Indicative salaries in the supplied brief: BDM ₹13–20L (+commission), content writer ₹5–8L, social manager ₹8–12L, graphic designer ₹3–6L, SEO manager ₹6–12L, AI specialist ₹18–22L; summing yields **₹53–80 LPA** salary-budget *illustration*, excluding tools, taxes, commissions and employer costs. **Not validated salary-market averages.**
- Package bands from the supplied brief (unapproved for public posting without a commercial check): **SME $5,000 setup / $500 monthly; Growth $10,000–$15,000 setup / $700–$1,000 monthly; Enterprise $20,000–$25,000 setup / from $1,000 monthly.** Mark **indicative, subject to scope**, or show “Custom proposal” until approved.
- Never claim “replaces 45 employees,” “guaranteed revenue,” “100% autonomous,” “all systems belong to you,” “guaranteed Google/AI rankings,” or universal compliance. Make only supportable *function coverage* and contract-qualified ownership statements.
- Existing homepage forecast (900 planned posts/mo, 11,000 outreach emails/mo, views/replies/conversion projections) remains an **editable illustrative scenario**. Do not market capacity as achieved results. Preserve denominator logic and input validation.
- The only **approved contact destination** for current implementation: `info@bharataivyapari.com`. New brief's historical old-brand website, email or phone in footer are **not** approval to change current destination. No server form, calendar booking, CRM endpoint or new domain without confirmed integration.

---

## 4. HOME PAGE — proposed rewritten content & component placements

**Read actual current implementation first** (`app/page.tsx`, `lib/home-content.ts`, `components/HomepageSections.tsx`, hero, cards, forecast, footer). Below is the **post-hero replacement editorial copy and structure**. Preserve component shape, class names, hooks, animations, layout, marquees and canvas. Do **not** rewrite or move the hero, its text or assets. The homepage must retain one semantic `<main>` and its existing hero H1. Apply the optional theme to content sections as documented in §0A.

### SECTION 01 — Existing cinematic hero (**READ-ONLY; DO NOT TOUCH ANYTHING INSIDE**)

- **Keep the existing H1 word-for-word:** `We help B2B companies build a stable lead flow through strategy, analytics, and performance marketing`.
- **Keep the supporting line word-for-word:** `— focused on real business growth, not vanity metrics`.
- **Keep the existing oversized wordmark:** `PILOT ASTRA AI`, its typography, size, tracking and placement.
- **Keep existing CTA:** `Get a Growth Audit` → `/#contact`; do not change labels, size, shapes, colors, click behavior or positions.
- **No new hero eyebrow, microline or overlay.** Do not add the new headline or marketing copy here.
- **No edits to any of the 250 frames**, ZIP, canvas renderer, interpolation, sticky wrapper, image CSS, scroll thresholds, lighting, character, animations, carousel timings, page height, or hero layout.
- **SEO change:** place `Your AI Team. Without Building an AI Department.` as an **H2 in the first appropriate post-hero section** (Section 04 or the new Model section); use it as optional metadata copy where helpful. Retain exactly one homepage H1, the original hero H1.
- **Only header exception:** a small theme toggle icon, placed in the existing header action area as specified in §0A. No other header edits.

### SECTION 02 — Existing technology ecosystem marquee (NO MOTION CHANGES)

- **Eyebrow:** `THE CONNECTED ECOSYSTEM`
- **H2:** `Your tools. One accountable AI operating system.`
- **Body:** `Connect the platforms your team already uses into practical workflows — from the first enquiry to the next sales conversation.`
- **Keep original logos, two opposing directions, spacing, speeds and edge masks.**
- **Disclaimer:** `Platform names show ecosystem compatibility, not endorsements. Actual integrations depend on API access, permissions and agreed scope.`

### SECTION 03 — Existing services Bento Grid (SAME LAYOUT, UPDATED COPY)

- **Eyebrow:** `AI AUTOMATION SERVICES`
- **H2:** `One Connected AI Ecosystem. Built Around Your Business.`
- **Lead:** `Individual tools solve tasks. Connected workflows help your team manage enquiries, content, outreach and customer context together.`
- **Eight cards and approved routes (keep design and card count):**
  1. **AI Website Development** (`/services/ai-website`) — `Lead-ready websites that explain your offer, capture enquiries and connect to agreed CRM workflows.`
  2. **AI SDR Outreach** (`/services/ai-sdr`) — `Prospect research, personalized outreach, follow-up sequences and CRM handoffs, with human review.`
  3. **AI WhatsApp Bot** (`/services/whatsapp-bot`) — `Turn inbound enquiries into structured conversations, qualification and team notifications.`
  4. **Social Media Automation** (`/services/social-automation`) — `Plan, create, review and publish consistent content across approved channels.`
  5. **SEO, GEO & Blog Automation** (`/services/seo-geo`) — `Structure useful search content, clarify buyer intent and support discoverability in Google and AI search.`
  6. **Dynamic Landing Page System** (`/services/dynamic-landing`) — `Create reusable location, product, category and offer pages without rebuilding the entire website.`
  7. **AI Video Content Engine** (`/services/video-engine`) — `Create repeatable AI-assisted product, education and campaign video workflows.`
  8. **AI Calling System** (`/services/ai-calling`) — `An optional voice layer for qualification, callbacks and lead-context updates.`
- **Closing:** `Individually useful. Connected by design.`
- **CTA:** `Map My AI Growth System` → `/#contact`.

### SECTION 04 — Connected growth introduction (REWRITE — early problem-first value)

- **Eyebrow:** `MANAGED AI AUTOMATION FOR INDIAN BUSINESSES`
- **H2 (new positioning stays below the hero):** `Your AI Team. Without Building an AI Department.`
- **Problem-first supporting statement (bold lead or H3, not another H1):** `Your biggest problem isn't another tool. It's another disconnected process.`
- **Lead:** `A website captures interest. WhatsApp replies. A CRM records context. But who makes sure the handoffs work when your team is busy?`
- **Body:** `Pilot Astra AI designs, documents, connects and helps manage the approved systems behind business growth. Manufacturers, retail teams, ecommerce brands and B2B service companies can start with one workflow and expand into a coordinated operating system.`
- **Keep existing flow visualization:** `Website → Enquiry → WhatsApp → CRM → Sales Follow-up`; demand sources `AI SDR · Social · SEO/GEO · Content · Optional AI Calling`.
- **CTA:** `Explore AI Automation Services` `/services`; `See Work Examples` `/work`.
- **Small neutral disclosure:** `Integration capabilities and handover responsibilities depend on the agreed stack and scope.`

### NEW SECTION 04A — Two delivery models (ADD AFTER 04; decision-critical)

- **Eyebrow:** `TWO WAYS TO WORK WITH US`
- **H2:** `An AI engineer on-site. Or an entire managed AI operation.`
- **TL;DR:** `Choose closer on-premises coordination or centrally managed delivery; both are supported by scoped technical implementation, documentation and human oversight.`
- **Comparison:** show the Model A vs Model B table from §3 as an accessible **two-card desktop comparison** and stacked mobile view. Do not misrepresent staffing availability, fees or SLAs.
- **Model A subheading:** `Dedicated On-Site AI Engineer`.
- **Model A copy:** `For businesses that want someone working alongside their team at their premises, a dedicated engineer can support agreed automations with architecture, escalation and documentation from the wider delivery team. Availability and responsibilities are confirmed by proposal.`
- **Model B subheading:** `Fully Managed AI Services`.
- **Model B copy:** `We design, implement, monitor and help improve your scoped AI workflows, while your people stay in control of approvals, business priorities and exceptions.`
- **CTA:** `Discuss My Delivery Model` → `/#contact`.

### SECTION 05 — Industries (REWRITE INTRO, PRESERVE 10 CARDS)

- **Eyebrow:** `INDUSTRIES WE SERVE`
- **H2:** `Connected AI workflows for the way your industry sells.`
- **Intro:** `A manufacturer's quotation cycle is different from a retailer's store enquiry or an ecommerce buyer's repeat order. The systems must reflect those differences.`
- **Keep 10 existing industry native disclosures** and source-supported descriptions: Industrial Businesses, Manufacturing Companies, Tooling & Machinery, B2B Service Providers, Retail Stores, D2C Brands, Ecommerce Businesses, Local Businesses, Multi-location Businesses, Founder-led Companies.
- **Within each existing disclosure**, add a one-sentence *workflow example* only if it follows from the source; never imply an actual client result (e.g., `Industrial: product inquiry → qualification → quotation follow-up`).

### SECTION 06 — Growth architecture `#systems` (REWRITE COPY, KEEP INTERACTION)

- **Eyebrow:** `GROWTH ARCHITECTURE`
- **H2:** `From first touch to follow-up, without losing the context.`
- **Copy:** `A connected system makes ownership visible: which channel created the enquiry, what the customer asked, who should respond and which follow-up is due.`
- **Keep seven interactive modules**: Website (default), WhatsApp, CRM, AI SDR, Social Media, SEO/GEO, Optional AI Calling. Keep existing module buttons/selection and handoff updates.
- **Add one explanatory line for human review:** `Your team retains decisions, access permissions and business approvals.`

### SECTION 07 — Eight service workflows (PRESERVE DISCLOSURE UI)

- **Eyebrow:** `HOW THE AI ENGINE WORKS`
- **H2:** `Built, documented and connected — not another software login.`
- **Copy:** `Each workflow has an input, an automated process, a business handoff and a clearly assigned reviewer.`
- Keep eight existing service workflow entries, intent framework and two scenario-model entries; preserve purpose → input → process → output → link and actual service routes. Update each explanation to distinguish *agent executes*, *human checks* and *team owns* only when supported by agreed scope.
- **Optional short line:** `AI handles eligible repetitive tasks; people supervise exceptions and customer-sensitive decisions.`

### SECTION 08 — Content intent strategy (PRESERVE FOUR CARDS)

- **Eyebrow:** `SEO · GEO · AEO CONTENT STRATEGY`
- **H2:** `Answer the buyer's question. Then connect the next step.`
- **Intro:** `Useful search content doesn't stop at visibility. It helps industrial and retail buyers understand problems, compare solutions, ask for a quote and continue the conversation.`
- Preserve four categories and source examples: Informational, Commercial, Transactional, Navigational. Add AEO explanations only with grounded implementation details; SEO, GEO and AEO are related but not interchangeable.
- **CTA:** `See SEO, GEO & Blog Automation` `/services/seo-geo`.

### SECTION 09 — Forecast models (KEEP CALCULATORS AND MATH)

- **Eyebrow:** `CAPACITY PLANNING — NOT PERFORMANCE PROMISES`
- **H2:** `Make assumptions visible before measuring outcomes.`
- **Intro:** `See illustrative publishing and outreach volumes based on editable inputs. Real reach, replies and revenue depend on market conditions, offer, data quality and execution.`
- **Content defaults:** `5 posts/day/profile × 6 profiles × 30 days = 900 posts/month`, 5,400 in six months; `10 assumed views/post` → 9,000 and 54,000 illustrative views.
- **SDR defaults:** `500 emails/day × 22 days = 11,000 emails/month`, 66,000 in six months. Six-month 45% opens = 29,700; 4% replies = 2,640; 30% of replies qualified = 792; 12% of those convert = about 95. Preserve source denominators and rounding.
- Explicitly validate nonnegative safe whole-number capacity inputs. No lead/sales guarantees or made-up cost savings.

### NEW SECTION 09A — Cost and operational options (ADD AFTER FORECASTS)

- **Eyebrow:** `COST TRANSPARENCY`
- **H2:** `Compare ongoing managed AI costs with building an internal capability.`
- **Two separate views, never misleadingly combined:**
  - **Illustrative Year 1 vs Year 2:** `$10,000 setup + $500 × 12 = $16,000` vs `$6,000` next year *if same scope and monthly rate, no repeat setup*. Label 62.5% lower **year-two billed amount vs year one in this example only**.
  - **Indicative in-house roles:** show transparent roles and **₹53–80L annual salary-budget scenario**, acknowledging this is a collection of roles, not the same exact deliverable as a managed workflow system. Don't describe as market average or guaranteed headcount replacement.
- **Explain omitted costs:** APIs/tokens, hosting, subscriptions, integrations, taxes, additional scope, employer on-costs, on-site staff costs.
- **Link to consultation**, not an unconfirmed contract checkout. Use an accessible HTML table, not text baked into a graphic.
- **Pricing table:** Optional separate SME/Growth/Enterprise indicative ranges from §3 **only after business approval**. Otherwise show `Custom scope, documented proposal, recurring support as agreed`.

### SECTION 10 — Implementation timeline `#process` (PRESERVE ALL 7 STEPS)

- **Eyebrow:** `IMPLEMENTATION & HANDOVER`
- **H2:** `From discovery to a managed operating rhythm.`
- **Lead:** `A standard 45-working-day example maps requirements, infrastructure, website/CRM workflows, content systems, outreach testing and handover. Actual durations depend on the scope and dependencies.`
- **Keep exact existing day ranges and details:** 1–5 Discovery; 6–15 Infrastructure; 16–25 Website & Dynamic Pages; 26–32 WhatsApp & CRM; 33–38 Content/SEO/GEO; 39–43 SDR; 44–45 Testing/Training/Handover.
- Add a short note distinguishing **one-time implementation stages** from **ongoing managed services**.

### SECTION 11 — Deliverables (PRESERVE CORE/SUPPORTING/OPTIONAL)

- **Eyebrow:** `WHAT YOUR TEAM GETS`
- **H2:** `Systems your business can understand, operate and improve.`
- **Core:** AI-ready website (up to 15 agreed pages where included), dynamic pages, enquiry/WhatsApp systems, AI SDR, CRM tracking, reporting visibility.
- **Supporting:** Social content and approval workflows, video assistance, LinkedIn content, blogs and scoped SEO/GEO support.
- **Optional:** AI calling and on-site engineer deployment, separately scoped.
- **Ownership and trust microsection within this existing section:** `Where supported by the architecture and agreement, deploy in customer-controlled infrastructure with documented access, exports, ownership terms and clear security responsibilities.` No blanket promise of ownership or compliance.

### SECTION 12 — Selected Work (KEEP THREE CARDS)

- **Eyebrow:** `IMPLEMENTATION EXAMPLES`
- **H2:** `What connected workflows can look like in practice.`
- Retain all three source-based examples and exact links:
  - Industrial Manufacturer Lead Engine `/work/industrial-manufacturer-lead-engine`
  - Retail Brand WhatsApp Automation `/work/retail-brand-whatsapp-automation`
  - D2C Ecommerce Outreach System `/work/d2c-ecommerce-outreach-system`
- Describe **systems and workflow design** only, and label `Illustrative implementation example / source-based scenario` until independently verified case studies, names, screenshots or metrics exist.

### SECTION 13 — FAQ `#faq` (EXPAND WITH DECISION-READY QUESTIONS)

- **Eyebrow:** `QUESTIONS FOUNDERS ASK`
- **H2:** `Straight answers before you choose an AI operating model.`
- Keep existing FAQ component and five existing source topics. Where sourced, add (without duplicate thin items):
  1. **Do I need to hire an internal AI team?** `Not necessarily. Compare a scoped fully managed engagement with an on-site engineer supported by the wider team.`
  2. **What exactly will you manage?** `Only the workflows and coverage agreed in the proposal; new systems need assessment.`
  3. **Will the setup fee recur each year?** `Not for the same one-time implementation; managed fees and third-party expenses still apply.`
  4. **Can the system run in our environment?** `Where architecture and agreement allow; define access, data and handover contractually.`
  5. **Does AI guarantee lead volume, rankings or sales?** `No. Execution can be made more consistent; outcomes depend on business and market factors.`
  6. **Who checks AI output?** `Document approval, escalation and operational responsibilities for the contracted workflows.`
  7. **Do you work with manufacturers, retail and ecommerce?** `Yes, these are documented focus segments.`
  8. **How long does implementation take?** `45 working days is the standard example, not a universal promise.`
- Keep clean native `<details>` disclosures; ensure no inaccessible content hidden by JS. **No promise of Google FAQ rich results.**

### SECTION 14 — Closing CTA (REWRITE EDITORIAL COPY)

- **Eyebrow:** `YOUR NEXT CONNECTED CHAPTER`
- **H2:** `You started a business to grow it — not to chase ten disconnected tools.`
- **Body:** `Bring us your sales process, existing systems and the bottlenecks slowing your team down. We'll map which workflows can be automated, which need human review and whether managed delivery or an on-site engineer makes sense.`
- **CTA:** `Book an AI Strategy Conversation` → `/#contact`.
- **Secondary:** `Explore Our Services` → `/services`.

### SECTION 15 — Contact `#contact` (PRESERVE EMAIL-ONLY BEHAVIOR)

- **Eyebrow:** `GET IN TOUCH`
- **H2:** `Plan a connected AI system for your business.`
- **Lead:** `Tell us what your business does, which channels you currently use, and where enquiries or operations get stuck.`
- **Required fields unchanged:** Name, business email, company, service interest, enquiry.
- **New valid service-interest choices**, if the existing select allows: Managed AI Services / On-Site AI Engineer Enquiry / AI Website / AI SDR / WhatsApp / SEO-GEO / Social Automation / AI Calling / Other.
- **CTA remains:** `Open email draft` to `info@bharataivyapari.com`; require visitor to review/send in their own mail client. Keep copy fallback. Do not display `Submitted`, `Sent`, or imply a booking/calendar/CRM integration.

### SECTION 16 — Footer (PRESERVE LINK GROUPS)

- **Brand line:** `Pilot Astra AI — Connected Growth Systems. One connected system for business enquiries, AI-assisted outreach, customer conversations and managed operations.`
- Retain all main, service, work and legal routes from `sitemap.md`; preserve official brand assets and existing dark footer style.
- Email: `info@bharataivyapari.com`; dynamic year. Do not move to the old brief's other footer contacts without explicit confirmation.

**Recommended final structure:** keep the 16 existing *numbered* section shells and their interactive logic; add only two optional compact decision sections (04A model comparison and 09A economics) or embed these as subsections within 04 and 09. Preserve pre-existing order and spacing. **Theme switching is infrastructure/UI state, not a new content section; it does not add a new hero or scroll chapter.**

---

## 5. SITE-WIDE REWRITE BLUEPRINT (all 19 existing routes)

**Scope:** rewrite business/editorial website copy in the current brand style, subject to each file's exact content. **Never erase legal disclosures**, overwrite verified facts or invent new products. Keep all current route paths. Respect source content, render crawlable server-side HTML; if Markdown is embedded as HTML, sanitize/compile using existing safe tooling rather than exposing untrusted `dangerouslySetInnerHTML` without review.

| Route | Primary keyword / intent | Page-specific H1 proposal | Needed decision content / internal link |
|---|---|---|---|
| `/` | AI automation agency India; managed AI services | **Keep current hero H1 unchanged**; target new positioning via Section 04 H2 and metadata | Clear value, eight services, model choice and cost transparency |
| `/about` | Pilot Astra AI; managed AI company | AI Systems, Human Oversight, Clear Accountability | Credible delivery approach, ownership/handover, documented expertise only |
| `/services` | AI automation services India | Connected AI Automation Services for Growing Businesses | Eight approved services, segmentation by business problem, model choice |
| `/work` | AI automation implementation examples | Explore Connected AI Automation Workflows | Clearly distinguish example from verified customer result |
| `/contact` | AI automation consultation India | Discuss Your Business Automation Requirements | Email draft only; industry and service selection |
| `/services/ai-website` | AI website development India | AI Website Development That Connects Enquiries to Sales Workflows | Website → enquiry → CRM; genuine page scope and example |
| `/services/dynamic-landing` | dynamic landing page system | Dynamic Landing Pages for Products, Locations and Offers | Examples of scalable templates; technical scope; canonical rules |
| `/services/whatsapp-bot` | AI WhatsApp bot India; WhatsApp CRM automation | AI WhatsApp Automation for Enquiries and CRM Follow-Ups | Qualification, permissions, CRM handoff; links to website/CRM |
| `/services/ai-sdr` | AI SDR agency India; B2B outreach automation | AI SDR Outreach for B2B Prospecting and Follow-Ups | ICP sourcing, human review, contact rules, reply/CRM handoff |
| `/services/social-automation` | social media automation agency India | Social Media Automation With Human Review and CRM Handoffs | Platforms by permission; review/publication workflows |
| `/services/seo-geo` | GEO agency India; SEO GEO AEO services | SEO, GEO & AEO Services for Search and AI Discoverability | Clear definitions; examples; no ranking/citation guarantees |
| `/services/video-engine` | AI video content automation | AI Video Content Workflows for Business Marketing | Brief → script → review → asset; no engagement guarantees |
| `/services/ai-calling` | AI calling system India; AI voice agents | AI Calling Systems Connected to Enquiry and CRM Workflows | Optional service, human fallback, permissions, telecom scope |
| `/work/industrial-manufacturer-lead-engine` | industrial lead automation example | Industrial Lead Capture and Follow-Up Workflow | Source-based system architecture, not unverified outcomes |
| `/work/retail-brand-whatsapp-automation` | retail WhatsApp automation example | Multi-Location Retail WhatsApp Enquiry Workflow | Store/location routing and handoff, attributed as example |
| `/work/d2c-ecommerce-outreach-system` | ecommerce B2B outreach example | D2C Ecommerce Outreach and Content Workflow | B2B bulk buyer prospecting + content example; limits |
| `/privacy-policy` | brand privacy policy | Privacy Policy | **Do not SEO-marketing rewrite legal promises.** Review controller, data use, retention and contact correctness |
| `/terms` | brand terms | Terms & Conditions | Preserve current legal substance; flag entity/contract name for counsel |
| `/disclaimer` | automation results disclaimer | Disclaimer | Preserve risk/forecast/disclaimer language; legal review |

### Universal commercial page format (adapted from screenshot without forcing listicles)

1. **User-search-aligned meta title, description, H1 and clean URL.** Exactly one visible H1 per route.
2. **2–3 sentence problem-first introduction.** State the user pain and what the page will explain.
3. **TL;DR answer card or compact comparison table** where buyer choice warrants it.
4. **Offer / workflow** explained in inputs → AI/human operations → output → handoff format.
5. **Capabilities and exact scope** — distinguish included/optional/conditional.
6. **Evidence and implementation** — screenshots, workflow diagram, documents, methodology or source-backed example, only when real.
7. **Buyer decision support** — managed vs in-house vs tool-only trade-offs where relevant, not strawman comparisons.
8. **Risk/limitations and FAQ** — APIs, approval, compliance, ownership, costs, training and handover.
9. **Related services, industry routes and case examples** with genuine internal links.
10. **Honest next-step CTA** that opens the current email-draft or leads to contact.

### Handling comparisons and alternatives (proposed future editorial routes)

The screenshot's full 10-step anatomy belongs on verified comparison content, *not* on generic home/service pages. Plan but do not publish automatically:

- `/compare/ai-automation-vs-in-house-team` — Year 1/Year 2 illustration, recurring staffing economics, transparent feature-fit matrix, scope caveats.
- `/alternatives/ai-automation-agencies-india` — real India-relevant firms selected by published evidence; fair review of every option; explicit publisher bias.
- `/alternatives/ai-sdr-options` — outsourced SDR vs managed AI SDR vs DIY tools, operational responsibilities, compliance and fit.
- `/compare/managed-ai-services-vs-on-site-engineer` — suitability, management overhead, support, location and separate quotes.

Before enabling any extra routes: obtain approval for the editorial list, fact-check all dates/prices, ensure originality, check legal/trademark issues, and give each page a genuinely distinct purpose. Do not automatically produce city×service keyword-spam pages.

---

## 6. Metadata, linking and structured data

**Homepage metadata draft (proposed):**

- **Title:** `AI Automation Agency India | Managed AI Services — Pilot Astra AI`
- **Meta description:** `Pilot Astra AI builds managed AI systems for B2B outreach, WhatsApp, CRM, websites, SEO/GEO and operations. Explore managed or on-site engineer options.`
- **H1:** preserve existing hero text exactly: `We help B2B companies build a stable lead flow through strategy, analytics, and performance marketing`. Place `Your AI Team. Without Building an AI Department.` as H2 in Section 04 or the new Model section. Do not create a second H1.
- **OG title:** `Pilot Astra AI — Managed AI Automation for Business Growth`
- **OG description:** `Connected AI systems, human oversight and two scoped delivery models for business sales, marketing and operations.`
- **OG image:** existing approved branded local share preview, no stock screenshot.
- **Canonical:** **do not add a new canonical domain** unless `PILOT_ASTRA_SITE_URL` is verified/configured; don't canonicalize new brand to `bharataivyapari.com`.

**SEO technical checklist:**

- Read `sitemap.md` and audit all **19 existing routes**. No invented or broken internal links.
- Unique, factual `title`, `description`, H1, named anchors and responsive breadcrumbs where appropriate.
- Ensure headings, comparison tables, answers and evidence are **server-rendered semantic HTML**, not baked into canvas images.
- Add factual `Organization`/`WebSite` schema only with real official names, URL and contact data; `Service` descriptions only when accurate; `BreadcrumbList` for real nested routes.
- Do not use self-serving review stars or false rating schema. Do not expect `FAQPage` markup to produce visible rich results for this commercial site.
- Optimize internal links: homepage → eight services and two delivery models (same-page until approved routes), services → relevant examples, FAQ → service/contact, work → applicable services.
- For alternatives articles, cite competitor primary pages, label table data “public information checked [date]”, include method, transparent publisher conflict of interest and update log.
- Meta keyword tags are not needed; target phrases naturally in important headings, descriptive copy, image alt text and anchor text.
- Robots, sitemap, OG, responsive testing and accessibility remain required; do not promise indexing or rankings.

### Internal CTA routing

`Get a Growth Audit`, `Book an AI Strategy Conversation`, `Discuss My Delivery Model`, `Map My AI Growth System` → `/#contact`  
`Services` / product exploration → `/services` or respective `/services/...`  
`How We Work` → `/#process`  
`Systems` → `/#systems`  
`Results / Work` → `/work`  
`FAQs` → `/#faq`  
`Contact` → `/contact` and `/#contact` as existing design specifies.

---

## 7. Implementation steps for Codex

**Do the following in order; this is an implementation instruction, not a request to produce only a proposal.**

1. **Audit:** Inspect working Next.js repository, `package.json`, page routes, current 16-section homepage component tree, 250-frame hero, CSS, content tables and all 19 Markdown sources. Read both the current homepage content/context and new managed-AI positioning brief. Write an inventory and diff plan. Capture baseline screenshots at hero start, mid-animation, frame end, first marquee and Bento, plus inner pages.
2. **Backup:** Save a Git checkpoint/branch or reversible patch while retaining all uncommitted changes. No destructive resets.
3. **Content model:** Define a centralized typed `site-content` layer carrying `eyebrow`, `heading`, `lead`, `body`, `bullets`, `faq`, `cta`, `seo`, `evidence` and `sourceFile`. Reuse original `lib/home-content.ts` and page modules when possible. Leave styling/component markup intact.
4. **Homepage rewrite:** Replace editorial content and metadata in **post-hero** sections only. Insert two-model and cost-comparison content as compatible sections if necessary. Keep the existing hero H1 unchanged and exactly one semantic `<main>`. Keep all 250 frames, hero appearance, navigation layout (except one icon), marquees and Bento geometry untouched.
5. **Across-site:** Rewrite 18 additional page copies according to the keyword-to-route map and universal template, sourcing from their respective Markdown files; keep legal pages' substance unchanged and flag anything requiring legal approval.
6. **Source integrity:** Track new copy provenance. Distinguish existing verified offering, proposed delivery model, illustrative scenario, tentative pricing, and unverified competitor information. Never invent citations, customers, ROI, salaries or endorsements.
7. **Components/theme:** Add accessible semantic comparison/cost tables if needed; implement the §0A small sun/moon control and scoped persistent theme provider. Convert **non-hero** colors to semantic Dark/Light tokens without restyling or rebuilding animations. Keep all existing calculators and input checks. No new packages/dependencies unless critical and approved. Reuse CSS tokens and native `<details>`.
8. **Metadata:** Set unique route metadata and internal links. Keep canonical disabled until the real domain is configured. Preserve existing email-draft-only form behavior.
9. **QA:** Verify root + 18 routes, anchors, link targets, SEO source content, **default dark vs selected light theme across all routes, header toggle keyboard behavior, persistence, initial flash, and conditional post-hero handoff**, 250-frame forward/reverse motion, marquees (both directions), mobile layouts, focus order, reduced motion, performance and animation smoothness.
10. **Checks:** Run lint, TypeScript and Next.js production build; browser-inspect both themes if available. Capture 375px, 430px, 768px, 1440px screenshots of the unchanged hero and affected sections at matching scroll positions. Confirm theme preference persists after refresh and navigation; test initial paint, icon keyboard operation, contrast, reduced-motion and the hero handoff. Report deviations. If blocked, give exact unverified items instead of “all passed”.

### Hard acceptance criteria

- [ ] No changes to any of the 250 image files, ZIP, image-sequence renderer, hero HTML/content, hero CSS or scroll/RAF engine.
- [ ] Hero content, H1, layout, 3D subject, CTA, canvas, 250 frames and original scroll visuals are pixel-identical before/after. The lone permitted header change is the isolated toggle icon.
- [ ] Marquee asset list, directions, speeds and looping behavior unchanged.
- [ ] Eight Bento service cards still use exact original URLs and visual layout.
- [ ] Homepage problem/value proposition + *two* delivery models are clearly explained.
- [ ] Example cost table has correct $16,000 → $6,000 arithmetic, visible assumptions and non-equivalence to hiring.
- [ ] All existing source-based sector, workflow, timeline, calculator, evidence and FAQ content remains present.
- [ ] No promotional claims from unverified cost, client, rankings, employee replacement or citations.
- [ ] All 19 original routes remain navigable and indexable as appropriate.
- [ ] Contact continues to open an encoded email draft; no misleading success feedback; form validation and all inputs remain readable in both themes.
- [ ] No invented phone/domain, data ownership promises or guaranteed rankings.
- [ ] Default Dark retains Arial and pure-black post-hero sections; Light switches the complete post-hero site and all detail routes to accessible white/ice-white with the same blue/cyan palette and identical geometry.
- [ ] Every protected component visually regression-tested; existing tests and production build pass (or blockers precisely stated).

### Mandatory light/dark test matrix (record pass/fail)

- [ ] Initial visit without preference: existing white hero and post-hero Dark; no flash.
- [ ] At top/middle/end of the 250-frame hero: all rendered frames and character positions unchanged, Dark or Light selected.
- [ ] Toggle using click, tap, Enter and Space; control has a visible focus ring and accurate accessible label/state.
- [ ] Light mode: logo marquee, Bento, industries, diagrams, disclosures, calculators, timelines, tables, service pages, work pages, contact and legal copy all have coherent light surfaces and accessible contrast.
- [ ] Dark mode: same content and layout, existing black surfaces, all motion unchanged.
- [ ] Toggle while scrolled: no jump to top, no reset of open FAQs/calculator inputs, no hero animation restart, no content disappearance.
- [ ] Refresh and navigate to another route: user preference persists with no obvious wrong-theme flash.
- [ ] Light mode after scroll animation: original black final hero frames, then smooth **post-hero** handoff to white without a visible hard seam or duplicated transition layer.
- [ ] Reduced motion: no optional transition animation; all original content and interactions remain usable.
- [ ] No backend calls, added dependencies, body-filter hacks, duplicate header components or accidental sticky/canvas stacking changes.

### Final report format

Report (1) source files reviewed, (2) current vs rewritten content map, (3) actual pages/files changed, (4) SEO page/title/keyword map, (5) new sections and rationale, (6) component preservation and screenshot comparison, (7) arithmetic/interaction tests, (8) competitor data that remains unverified, (9) missing client-proof/legal approvals, and (10) remaining blockers. Do not claim deployed or live without a deployment result.

---

## 8. Research reference URLs and freshness

- Neogen AI automation: https://neogenmedia.com/services/ai-automation
- Innovatrix India automation: https://www.innovatrixinfotech.com/services/ai-automation-agency-india
- BrainStream services: https://brainstreamtechnolabs.com/
- Automyze: https://www.automyze.in/
- TripleDart GEO: https://www.wetripledart.com/generative-engine-optimization-services
- PROHED GEO: https://www.prohed.com/services/generative-engine-optimization-services-php
- Pepper GEO agency analysis: https://www.pepper.inc/blog/geo-agencies-india/
- SalesAladin India lead-generation: https://salesaladin.com/lead-generation-in-india/
- Leadle B2B agency list: https://www.leadlehq.com/post/best-b2b-lead-generation-agencies-2026
- Caller Digital voice agents: https://caller.digital/blog/top-10-voice-ai-agents-india-2026
- Groweon voice-agent comparison: https://www.groweon.com/blog/best-ai-calling-agents-sales-teams-india/
- Google helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google SEO basics: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google FAQ rich-results limits: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies

**Research limitations:** A sampled public-web comparison, **not** a comprehensive SEO rank-tracker export. Terms/website content may change. Recheck before publishing public competitor-specific claims. Source-positioning and prices in the user-supplied new brief are **client-provided proposals/illustrations**, not externally verified published Pilot Astra AI contracts. The original Markdown documents remain authoritative for actual existing service scope and legal wording.

---

## Codex final command

**Read `UPDATE.md` and every project Markdown source. First make a non-destructive baseline; then implement evidence-based post-hero and inner-page copy/SEO changes and, if useful, the two decision sections. Never modify the hero's existing content, 250-frame animation, assets, canvas, visuals, motion or scroll parameters. Add only one compact accessible header icon for global Dark ↔ Light preferences; preserve Dark as the default existing white-hero-to-black experience. Theme all post-hero sections and all 18 inner routes with semantic tokens, keeping the hero read-only; in Light mode add a separate gentle boundary handoff after the unchanged dark final frame. Keep marquee animation and Bento geometry untouched. Test 19 routes, both themes, reduced motion, first-paint persistence, keyboard operation, carousel motion, forward/reverse hero playback, calculations and email-draft behavior; report changed files, screenshot diffs, SEO decisions and outstanding verification. Do not publish unsupported claims or fake competitor ranking data.**
