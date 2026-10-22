# Scroll sequence integration

`components/ScrollSequenceHero.tsx` wraps the existing hero:

```tsx
import ScrollSequenceHero from "@/components/ScrollSequenceHero";

<ScrollSequenceHero>
  <ExistingHero />
</ScrollSequenceHero>
```

Keep the existing navigation outside the wrapper if it is already fixed to the viewport. Do not change its styles or content. The wrapper supplies the 400vh scroll region and sticky viewport; its canvas ignores pointer events and the unchanged hero sits above it. Sticky ancestors must not have overflow that creates a different scroll container. An opaque existing hero background will obscure the canvas: inspect the real hero before integration rather than removing its background speculatively.

The checkout currently has the default Next.js starter homepage, not the developed Pilot Astra AI hero. Consequently the homepage is untouched and the component is available at `/sequence-preview` for isolated validation. Integration and verification of the real hero's UI remain pending its source location.

The supplied `public/frames_150.zip` actually contains 250 images, 1280×720. All were extracted unchanged to `public/frames/`, and the user confirmed using all 250. The mapping is `1 + progress * 249` (rounded for display), giving frames 1, 63, 126, 188, 250 at 0/25/50/75/100%. There is no time-driven playback. The rAF loop uses a time-adjusted interpolation coefficient solely to settle toward the scroll target.

Loading starts with frame 1, prioritizes the target and its neighbors, then fetches remaining frames with concurrency 2 on mobile / 4 otherwise. Decoded images are bounded to 12 on mobile / 36 otherwise (approximately 42 / 127 MiB for these sources); evicted images may be decoded again from the browser cache when revisited. Pending loads never clear the existing canvas. Rendering and further loading pause offscreen. Failed files are excluded to avoid retry storms. Reduced motion displays frame 1 with no extended scroll region or background preloading.

Internal-browser checks passed for forward and reverse quarter points, rapid end-to-end scrolling, exact final settling, 1440×900 / 768×1024 / 390×844 viewports, DPR caps, and reduced-motion frame 1 with a viewport-height region. No console errors were observed. The actual site's navigation, CTA hit testing, readability and integration still need checking once the hero source is available.
