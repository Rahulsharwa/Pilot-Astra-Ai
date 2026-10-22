import { LegalPage } from "@/components/SitePages";
import { pages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata('Disclaimer & Legal Information', 'Review client responsibilities, third-party costs, platform limitations and the performance disclaimer for Pilot Astra AI services.', "/disclaimer");
export default function Page() { return <LegalPage document={pages["disclaimer"]} path="/disclaimer" />; }
