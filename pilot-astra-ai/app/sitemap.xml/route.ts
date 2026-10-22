import { siteRoutes } from "@/lib/site-content";
import { siteOrigin } from "@/lib/site-metadata";
/** Request origin is a local/deployment fallback, never emitted as canonical metadata. */
export function GET(request: Request) {
  const origin = siteOrigin() || new URL(request.url).origin;
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${siteRoutes.map(path => `<url><loc>${new URL(path, origin).href.replaceAll("&", "&amp;")}</loc></url>`).join("")}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
