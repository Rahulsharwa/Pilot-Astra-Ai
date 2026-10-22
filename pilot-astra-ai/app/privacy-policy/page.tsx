import { LegalPage } from "@/components/SitePages";
import { pages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata('Privacy Policy', 'Read the supplied Pilot Astra AI privacy policy covering enquiry information, use, storage and contact details.', "/privacy-policy");
export default function Page() { return <LegalPage document={pages["privacy-policy"]} path="/privacy-policy" />; }
