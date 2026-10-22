import { siteOrigin } from "@/lib/site-metadata";
export function GET(request: Request) {
  const origin = siteOrigin() || new URL(request.url).origin;
  return new Response(`User-agent: *\nAllow: /\nDisallow: /sequence-preview\nSitemap: ${origin}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
