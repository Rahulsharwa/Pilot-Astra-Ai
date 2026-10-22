"use client";

import { useEffect } from "react";
export default function HomepageMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = document.querySelectorAll("[data-home-reveal]");
    const connect = () => {
      observer?.disconnect();
      if (media.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) { entry.target.classList.add("pa-revealed"); observer?.unobserve(entry.target); }
        }
      }, { threshold: .08 });
      elements.forEach(element => observer?.observe(element));
    };
    connect(); media.addEventListener("change", connect);
    return () => { observer?.disconnect(); media.removeEventListener("change", connect); };
  }, []);
  return null;
}
