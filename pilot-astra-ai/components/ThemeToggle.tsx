"use client";
import { useEffect, useSyncExternalStore } from "react";
const key = "pilot-astra-theme";
function subscribe(callback: () => void) {
  const storage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) {
      document.documentElement.dataset.siteTheme = event.newValue === "light" ? "light" : "dark";
      callback();
    }
  };
  window.addEventListener("storage", storage);
  window.addEventListener("site-theme-change", callback);
  return () => { window.removeEventListener("storage", storage); window.removeEventListener("site-theme-change", callback); };
}
export default function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, () => document.documentElement.dataset.siteTheme === "light", () => false);
  useEffect(() => {
    const header = document.querySelector(".dreamframe-nav");
    const hero = document.querySelector(".scroll-sequence-region");
    if (!header || !hero) return;
    const observer = new IntersectionObserver(([entry]) => header.classList.toggle("site-nav-posthero", entry.boundingClientRect.bottom <= 0));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  function toggle() {
    const value = light ? "dark" : "light";
    document.documentElement.dataset.siteTheme = value;
    try { localStorage.setItem(key, value); } catch { /* Preference still works in memory. */ }
    window.dispatchEvent(new Event("site-theme-change"));
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label={light ? "Switch to dark theme" : "Switch to light theme"} aria-pressed={light} title={light ? "Switch to dark theme" : "Switch to light theme"}>
    <svg className="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
    <svg className="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>
  </button>;
}
