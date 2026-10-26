# Website theme audit and repair

Completed 24 October 2026 against the existing application. Browser verification used only the Codex internal browser, with the final production build served at `http://localhost:3001`. No deployment, commit or push was performed.

## A. Root causes and repairs

1. **A global black background defeated light mode.** `Homepage.css` applied `#top { background:#000 }` to every inner-page main landmark because those pages also use `id="top"`. The light palette correctly made their text dark, leaving dark text on black. The rule now excludes `.site-main`, preserving the original homepage surface while allowing inner pages to use their theme background.
2. **Colors were mapped by their original hex values rather than their roles.** The previous `--tone-*` substitution treated the same color as a heading, border, glow and shadow. Pale text, navy gradient stops and unsuitable outlines survived in the wrong theme. Shared content styles now use semantic surface, primary/secondary text, border, link, accent and shadow roles.
3. **The theme had no coordinated color interpolation.** Registered inherited color properties now interpolate over 600ms with `ease-in-out`. This also covers gradient stops and glass surfaces. Logo and theme-icon opacity transitions use the same duration. No theme transition animates width, height, padding, spacing or positioning. Reduced-motion requests disable these transitions.
4. **The footer had only the dark-background logo.** Both approved local SVG variants now occupy the same existing 160×80 area and crossfade according to the selected theme. Neither SVG was edited.
5. **The homepage header lost a specificity tie below the hero.** The original navigation color selector could override the post-hero theme selector. A narrowly scoped shared-header selector fixes the conflict. The existing section-boundary mechanism and original hero scroll colors remain in control in their respective regions.
6. **Supporting UI needed role-specific treatment.** Form values, placeholders, native options, disabled states, active links, clipped text gradients and supplied white technology wordmarks now have explicit readable colors or supporting surfaces. This adds no content or geometry.

The existing root theme state, pre-hydration bootstrap, local-storage persistence and theme toggle behavior were retained. There is no competing page-level theme state, full-screen switching overlay, inversion filter, new dependency or animation library.

## B. Files modified

Compared with the recoverable pre-repair source archive, application changes in this repair are limited to:

| File | Change |
|---|---|
| `components/SiteTheme.css` | Semantic palettes, inherited color transitions, logo/icon states, header selector, form and interactive-state readability |
| `components/Homepage.css` | Scoped black background and semantic colors for homepage content |
| `components/GrowthSections.css` | Semantic colors for service cards and ecosystem supporting surfaces |
| `components/SitePages.css` | Semantic colors and properly scoped page typography selectors |
| `components/HomepageSections.tsx` | Second approved footer logo variant in the existing logo space |

Added QA sources: `scripts/theme-dom-audit.mjs`, `tests/theme-contract.test.mjs`, this report and the files under `output/theme-repair/`.

Other modified/untracked files shown by Git belong to the earlier homepage/SEO/theme work and were preserved. This repair did not rewrite business copy, alter page metadata, change the provider/bootstrap or edit the animation components.

Recoverable checkpoint: Git ref `refs/checkpoints/theme-repair-baseline`, commit `20713f451b54dc9e0f21c695223d795780fa0f13`. The ignored `backups/theme-repair-source.tar.gz` also preserves source files that were untracked at checkpoint time. See `backups/theme-repair-checkpoint.txt` at repository root.

## C. Route audit matrix

Every row was visually inspected in both themes at desktop 1440×900, laptop 1280×800, tablet 768×1024 and mobile 390×844. Full-page captures were inspected using section contact sheets and responsive top/middle/footer sheets. Expanded interactive sections were inspected separately.

“Readability pass” means settled themeable content passed the DOM contrast probe and visual inspection. The protected hero and other limitations in section G are explicitly excluded from a blanket accessibility claim.

| Route | Dark | Light | Header/logo | Responsive | Readability |
|---|---|---|---|---|---|
| `/` | Pass | Pass | Pass | Pass | Pass* |
| `/about` | Pass | Pass | Pass | Pass | Pass |
| `/services` | Pass | Pass | Pass | Pass | Pass |
| `/work` | Pass | Pass | Pass | Pass | Pass |
| `/contact` | Pass | Pass | Pass | Pass | Pass |
| `/services/ai-website` | Pass | Pass | Pass | Pass | Pass |
| `/services/dynamic-landing` | Pass | Pass | Pass | Pass | Pass |
| `/services/whatsapp-bot` | Pass | Pass | Pass | Pass | Pass |
| `/services/ai-sdr` | Pass | Pass | Pass | Pass | Pass |
| `/services/social-automation` | Pass | Pass | Pass | Pass | Pass |
| `/services/seo-geo` | Pass | Pass | Pass | Pass | Pass |
| `/services/video-engine` | Pass | Pass | Pass | Pass | Pass |
| `/services/ai-calling` | Pass | Pass | Pass | Pass | Pass |
| `/work/industrial-manufacturer-lead-engine` | Pass | Pass | Pass | Pass | Pass |
| `/work/retail-brand-whatsapp-automation` | Pass | Pass | Pass | Pass | Pass |
| `/work/d2c-ecommerce-outreach-system` | Pass | Pass | Pass | Pass | Pass |
| `/privacy-policy` | Pass | Pass | Pass | Pass | Pass |
| `/terms` | Pass | Pass | Pass | Pass | Pass |
| `/disclaimer` | Pass | Pass | Pass | Pass | Pass |

`/sequence-preview` was also opened in the internal browser and redirected to `/`.

## D. Screenshots and machine-readable evidence

- [Complete screenshot index](../output/theme-repair/screenshots.md): **152 before/after pairs, 304 full-page images**.
- [CSV manifest](../output/theme-repair/screenshot-manifest.csv): route, viewport, theme and corresponding file paths.
- [Representative light-mode comparison](../output/theme-repair/comparison-ai-sdr-light.png).
- [All-page DOM audit](../output/theme-repair/after-audit.json): actual text colors, contrast estimates, sections, headings, images and header rectangles.
- [Final preservation and geometry summary](../output/theme-repair/final-summary.json).
- [Homepage expanded dark](../output/theme-repair/after/home-expanded-dark.png) and [light](../output/theme-repair/after/home-expanded-light.png).
- [Expanded SDR page dark](../output/theme-repair/after/services-ai-sdr-expanded-dark.png) and [light](../output/theme-repair/after/services-ai-sdr-expanded-light.png). Equivalent expanded captures exist for all eight services.
- [Keyboard focus and hover](../output/theme-repair/after/focus-hover-light.png).
- [Empty enquiry validation](../output/theme-repair/after/enquiry-empty-validation.png).

Full-page files use `before/<route>-<size>-<theme>.png` and `after/<route>-<size>-<theme>.png`, with `/` represented by `home` and nested route slashes replaced by hyphens. No screenshots were placed in production assets.

## E. Hero and layout preservation

SHA-256 verification compared all **257 protected files** against the before manifest: **zero changes**. This covers all 250 PNG frames, the source ZIP, both hero components and their styles, the renderer, the marquee component and the service-grid component. See [protected manifest](../output/theme-repair/protected-before.json) and [final summary](../output/theme-repair/final-summary.json).

Actual forward/reverse browser playback settled at these observed scroll positions:

| Scroll Y | Target | Displayed | Direction |
|---|---|---|---|
| 0 | 1 | 1 | Initial |
| 1200 | 112 | 112 | Forward |
| 3000 | 250 | 250 | Forward/end |
| 1300 | 121 | 121 | Reverse |

See [playback evidence](../output/theme-repair/hero-playback.json). The original white-to-dark progression remains intact. In light mode the existing 95px handoff after the protected region now blends into white without adding scroll height.

All **152 page heights** match their baseline. All recorded baseline section bounds match after repair, including every desktop section. No audit case has horizontal overflow; each page has exactly one H1 and one main landmark. Footer logo dimensions and header layout remain unchanged.

Six of eight initial hero viewport image comparisons are pixel-identical. Desktop-light differs by at most 3/255 in a small wordmark rasterization region; laptop-dark differs by at most 5/255 within an 8×8 patch. Mean per-channel differences are below 0.00023/255. These tiny capture differences are recorded rather than claimed as exact pixel identity; protected source and geometry are unchanged. Both tablet and mobile theme captures are pixel-identical.

## F. Technical and interaction verification

| Check | Actual result |
|---|---|
| ESLint | Pass, exit 0 |
| TypeScript `tsc --noEmit` | Pass, exit 0 |
| Node regression tests | 10 passed, 0 failed |
| Production `next build` | Pass; final production server runs on port 3001 |
| `git diff --check` | Pass |
| Themeable settled text | 0 probe failures across 152 cases |
| Palette contract | Primary/secondary text and links meet 4.5:1 across the three base surfaces; meaningful base boundaries meet 3:1; blue-button white labels exceed 4.5:1 |
| Theme persistence | 38 refresh checks: all 19 routes in each theme retained the expected selection and header/logo state |
| Theme transitions | Browser reports color-property and opacity transitions of 600ms; no layout-property transitions |
| Reduced motion | Browser emulation: computed transition duration 0s and no active CSS transitions after switching |
| JavaScript disabled | Browser reload retains readable server-rendered dark content and H1 |
| Service interactions | All eight calculators edited; four FAQs and formula opened per service; switching both themes retained values, results, open states and scroll |
| Homepage interactions | 35 disclosures retained; selected AI SDR architecture module, calculator edits and enquiry fields survived theme changes |
| Invalid calculator input | Negative value produces validation and unavailable output; corrected value restores output |
| Keyboard | Theme button reached by Tab; Enter and Space switch it; visible 3px focus outline |
| CTA hover | Browser hover confirmed readable white label and darker blue hover surface |
| Enquiry | Empty Copy action focuses invalid required name; populated Copy succeeds with truthful status; no email sent |
| Runtime/assets | Final 19-route sweep: no loaded broken images, resource status ≥400 or localhost console errors observed |

Evidence: [build log](../output/theme-repair/build.log), [checks log](../output/theme-repair/checks.log), [service interactions](../output/theme-repair/service-interactions.json), [homepage interactions](../output/theme-repair/homepage-interactions.json), [refresh checks](../output/theme-repair/refresh-persistence.json), [transition sample](../output/theme-repair/transition-sample.json), [asset checks](../output/theme-repair/asset-checks.json), [additional browser checks](../output/theme-repair/additional-checks.json).

The 10 tests cover forecast denominators, edited/invalid capacity, email encoding, service scenario arithmetic, semantic palette contrast, unresolved variables, scoped backgrounds and transition contracts. Browser verification supplies the route/interaction evidence; these are not substitutes for each other.

## G. Remaining issues and limits

- **Protected hero CTA contrast:** the existing white label on orange `#f56818` is below 4.5:1 for normal text. It was deliberately preserved under the explicit hero-protection rule. This is a known accessibility exception, so the whole site is not claimed to be WCAG-certified.
- **Contrast scope:** the DOM probe models alpha-composited surfaces and gradient endpoints and was combined with manual visual inspection. It is not a complete WCAG audit, screen-reader certification, image-background pixel sampler, or proof of contrast at every intermediate color-transition frame. Settled themes are the reported pass condition. No text-opacity fade was introduced.
- **Blocked storage:** persistence denial was not simulated because the internal browser does not support the required pre-document injection command. Existing storage try/catch handling was inspected; this scenario is not reported as browser-tested.
- **Browser/device scope:** responsive checks used the internal browser's four viewport sizes, not physical mobile hardware or separate Safari/Firefox installations. No external browser was used.
- **Initial loading:** refresh persistence, bootstrap inspection and absence of hydration errors were checked. There is no filmstrip-level proof against a single-frame initial flash under every network/CPU condition.
- **Lazy assets:** the final asset sweep checks loaded resources and complete images. Offscreen lazy images can be pending at the initial DOM sample; pending is not a failed request. Visual screenshot inspection covers their eventual presentation.
- **Production domain:** no confirmed deployment domain was supplied. The existing build warning about `metadataBase` using localhost remains; no canonical or production origin was invented.
- No new content, business claim, API, backend, dependency or legal-copy change was introduced. No email was transmitted. Existing uncommitted work and ignored animation assets remain in place.
