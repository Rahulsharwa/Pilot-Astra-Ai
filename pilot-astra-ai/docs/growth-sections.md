# Connected growth sections

The `/sequence-preview` page renders `TechnologyMarquee` and `GrowthServices` immediately after the existing hero. Neither hero component nor its stylesheet nor the canvas sequence implementation was edited.

The bento reference mentioned in the supplied brief was not attached. The implementation uses an asymmetric 12-column grid: 7/5, 4/4/4, and 5/3/4 card spans; two columns on tablets and one on phones. Exact reference matching remains contingent on receiving that image.

Services use the descriptions supplied in the request and the local service markdown sources. Dynamic Landing Pages is retained within AI Website Development. External detail links use the existing Bharat AI Vyapari service routes; paid advertising links to the contact page because no dedicated existing route was supplied.

The technology rows show ten brands as an illustrative ecosystem, with a visible statement that this is not endorsement and integration scope depends on platform access. They do not assert partnership or customer relationships. Asset source URLs and notes are recorded in `docs/logo-assets.json`. Assets are local, preserve aspect ratios and receive a reversible CSS grayscale treatment. n8n uses its official SVG geometry with a neutral monochrome fill. No third-party runtime image requests are needed.

The duplicated equal-width logo groups translate by exactly half the track width, in opposing directions at different speeds. Hover or keyboard focus pauses both tracks. Reduced motion stops decorative animations, hides duplicate groups and wraps all logos into static rows. Graphics are decorative HTML/SVG/CSS with no dependencies or additional client components.

Validation: production build and ESLint passed. Internal-browser checks at 1440px, 768px and 390px confirmed eight cards, no horizontal page overflow, correct card spans and no clipped card contents. All logo assets loaded. Reduced-motion checks confirmed all new animations disabled and all original logos visible. Hero file checksums matched before/after.
