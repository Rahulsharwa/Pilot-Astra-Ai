import { LegalPage } from "@/components/SitePages";
import { pages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata('Terms & Conditions', 'Read Pilot Astra AI service terms, client obligations, third-party costs and limitations of liability.', "/terms");
export default function Page() { return <LegalPage document={pages["terms"]} path="/terms" />; }
