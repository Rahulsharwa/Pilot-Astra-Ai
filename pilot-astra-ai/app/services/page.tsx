import { ServicesIndex } from "@/components/SitePages";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata('AI Automation Services', 'Explore eight connected services: AI websites, landing pages, WhatsApp bots, AI SDR, social automation, SEO/GEO, video and optional calling.', "/services");
export default function Page() { return <ServicesIndex />; }
