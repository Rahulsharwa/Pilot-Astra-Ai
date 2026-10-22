import source from "./site-content.json";
export type Inline = { text: string; href?: string };
export type ContentBlock = { type: string; content?: Inline[]; items?: Inline[][] };
export type SourceSection = { title: string; blocks: ContentBlock[] };
export type SourceDocument = { title: string; intro: ContentBlock[]; sections: SourceSection[] };
export const services = source.services;
export const caseStudies = source.cases;
export const pages = source.pages as Record<keyof typeof source.pages, SourceDocument>;
export const siteRoutes = ["/", "/about", "/services", "/work", "/contact", ...services.map(s => `/services/${s.slug}`), ...caseStudies.map(s => `/work/${s.slug}`), "/privacy-policy", "/terms", "/disclaimer"];
