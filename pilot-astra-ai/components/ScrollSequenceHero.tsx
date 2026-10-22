"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./ScrollSequenceHero.css";

const FRAME_COUNT = 250;
const frameUrl = (frame: number) =>
  `/frames/ezgif-frame-${String(frame).padStart(3, "0")}.png`;

/** Wrap the existing hero without changing its contents or styling.
 * Ancestors must allow vertical overflow for sticky positioning to work.
 */
export default function ScrollSequenceHero({ children, navigation }: { children?: ReactNode; navigation?: ReactNode }) {
  const regionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const region = regionRef.current;
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!region || !viewport || !canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const images = new Map<number, HTMLImageElement>();
    const pending = new Map<number, HTMLImageElement>();
    const attempted = new Set<number>();
    const failed = new Set<number>();
    let disposed = false;
    let raf = 0;
    let active = true;
    let current = 1;
    let target = 1;
    let lastDrawn = 0;
    let dirty = true;
    let width = 1;
    let height = 1;
    let previousTime = 0;
    let loading = 0;
    let firstReady = false;
    let reduced = motion.matches;
    let previousTheme = "";

    const measure = () => {
      const bounds = region.getBoundingClientRect();
      const distance = Math.max(1, region.offsetHeight - viewport.offsetHeight);
      const progress = Math.max(0, Math.min(1, -bounds.top / distance));
      // Theme follows the same DOM progress as the frame sequence. No second
      // scroll listener, animation loop, or time-based theme tween is needed.
      const transition = Math.max(0, Math.min(1, (progress - 0.7) / 0.3));
      const theme = reduced
        ? (bounds.bottom <= viewport.offsetHeight * 0.65 ? 1 : 0)
        : transition * transition * (3 - 2 * transition);
      const themeKey = theme.toFixed(4);
      if (themeKey !== previousTheme) {
        previousTheme = themeKey;
        const surface = Math.round(255 * (1 - theme));
        // Keep functional text contrasting at the gray midpoint rather than
        // interpolating it into the same gray as its background.
        const ink = surface >= 121 ? "#050b18" : "#f4f8ff";
        region.style.setProperty("--hero-theme", themeKey);
        region.style.setProperty("--hero-surface", `rgb(${surface} ${surface} ${surface})`);
        region.style.setProperty("--hero-surface-rgb", `${surface} ${surface} ${surface}`);
        region.style.setProperty("--hero-ink", ink);
        region.dataset.theme = theme === 1 ? "dark" : theme === 0 ? "light" : "transition";
      }
      target = reduced ? 1 : 1 + progress * (FRAME_COUNT - 1);
      region.dataset.targetFrame = String(Math.round(target));
    };

    const trimCache = () => {
      // 1280×720 RGBA frames use ~3.5 MiB each. Bound decoded memory,
      // retaining the displayed frame and those closest to the current target.
      const limit = mobile.matches ? 12 : 36;
      const farthest = [...images.keys()].sort(
        (a, b) => Math.abs(b - target) - Math.abs(a - target),
      );
      for (const index of farthest) {
        if (images.size <= limit) break;
        if (index !== lastDrawn && index !== Math.round(target)) images.delete(index);
      }
    };

    const draw = () => {
      const desired = Math.round(current);
      let selected = 0;
      let distance = Infinity;
      for (const index of images.keys()) {
        if (Math.abs(index - desired) < distance) {
          distance = Math.abs(index - desired);
          selected = index;
        }
      }
      if (!selected || (!dirty && selected === lastDrawn)) return;
      // Out-of-order loads must not move the picture farther from the target.
      if (!dirty && lastDrawn && Math.abs(lastDrawn - desired) < distance) return;
      const image = images.get(selected)!;
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const w = image.naturalWidth * scale;
      const h = image.naturalHeight * scale;
      context.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
      lastDrawn = selected;
      dirty = false;
      region.dataset.displayedFrame = String(selected);
    };

    const nextFrame = () => {
      const center = Math.round(target);
      const desired = [center];
      const radius = mobile.matches ? 4 : 12;
      for (let offset = 1; offset <= radius; offset++) {
        desired.push(center + offset, center - offset);
      }
      for (const index of desired) {
        if (index >= 1 && index <= FRAME_COUNT && !images.has(index) &&
            !pending.has(index) && !failed.has(index)) return index;
      }
      // Fetch every source once in the background; evicted decoded images
      // can subsequently be restored from the browser's HTTP cache.
      for (let index = 1; index <= FRAME_COUNT; index++) {
        if (!attempted.has(index)) return index;
      }
      return 0;
    };

    const pump = () => {
      if (disposed || !active || reduced || !firstReady) return;
      const concurrency = mobile.matches ? 2 : 4;
      while (loading < concurrency) {
        const index = nextFrame();
        if (!index) break;
        load(index);
      }
    };

    const load = (index: number) => {
      const image = new window.Image();
      image.decoding = "async";
      image.fetchPriority = index === Math.round(target) ? "high" : "low";
      attempted.add(index);
      pending.set(index, image);
      loading++;
      let settled = false;
      const finish = (success: boolean) => {
        if (settled || disposed) return;
        settled = true;
        loading--;
        pending.delete(index);
        image.onload = null;
        image.onerror = null;
        if (success) {
          images.set(index, image);
          if (index === 1) firstReady = true;
          draw();
          trimCache();
        } else {
          failed.add(index);
          // A missing first frame must not prevent the remaining sequence loading.
          if (index === 1) firstReady = true;
        }
        pump();
      };
      image.onload = () => {
        image.decode().then(() => finish(true), () => finish(image.naturalWidth > 0));
      };
      image.onerror = () => finish(false);
      image.src = frameUrl(index);
    };

    const resize = () => {
      const rect = viewport.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.5 : 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      measure();
      dirty = true;
      draw();
      trimCache();
    };

    const tick = (time: number) => {
      raf = 0;
      if (disposed || !active || document.hidden) return;
      measure();
      const elapsed = Math.min(64, previousTime ? time - previousTime : 16.67);
      previousTime = time;
      current = reduced ? 1 : current + (target - current) * (1 - Math.exp(-elapsed / 65));
      if (Math.abs(target - current) < 0.01) current = target;
      draw();
      pump();
      if (!reduced) raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf && active && !document.hidden && !disposed) {
        previousTime = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const onScroll = () => { measure(); start(); };
    const onMotion = () => {
      reduced = motion.matches;
      current = reduced ? 1 : current;
      measure();
      if (reduced && !images.has(1) && !pending.has(1)) load(1);
      resize();
      start();
    };
    const onVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else start();
    };
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) start();
      else { cancelAnimationFrame(raf); raf = 0; }
    });
    const resizeObserver = new ResizeObserver(resize);
    observer.observe(region);
    resizeObserver.observe(viewport);
    resizeObserver.observe(region);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);
    mobile.addEventListener("change", resize);
    resize();
    load(1);
    start();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
      mobile.removeEventListener("change", resize);
      for (const image of pending.values()) {
        image.onload = null;
        image.onerror = null;
        image.src = "";
      }
      pending.clear();
      images.clear();
    };
  }, []);

  return (
    <section ref={regionRef} className="scroll-sequence-region" data-scroll-sequence>
      {navigation}
      <div ref={viewportRef} className="scroll-sequence-viewport">
        <canvas ref={canvasRef} className="scroll-sequence-canvas" aria-hidden="true" />
        <div className="scroll-sequence-content">{children}</div>
      </div>
    </section>
  );
}
