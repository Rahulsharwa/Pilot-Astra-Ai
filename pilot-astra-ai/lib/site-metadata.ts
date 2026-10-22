import type { Metadata } from "next";
export function siteOrigin() {
  const configured = process.env.PILOT_ASTRA_SITE_URL;
  if (!configured) return undefined;
  const url = new URL(configured);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) throw new Error("PILOT_ASTRA_SITE_URL must be a valid HTTP(S) deployment origin.");
  return url.origin;
}
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const origin = siteOrigin();
  return { title: `${title} | Pilot Astra AI`, description,
    alternates: origin ? { canonical: new URL(path, origin).href } : undefined,
    openGraph: { title: `${title} | Pilot Astra AI`, description, type: "website", siteName: "Pilot Astra AI", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pilot Astra AI — Connected Growth Systems" }], ...(origin ? { url: new URL(path, origin).href } : {}) },
    twitter: { card: "summary_large_image", title: `${title} | Pilot Astra AI`, description, images: ["/opengraph-image"] },
  };
}
