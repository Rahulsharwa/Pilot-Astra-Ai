import { editorialPages } from "@/lib/editorial-content";
import { ContactPage } from "@/components/SitePages";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata(editorialPages["/contact"].heading, editorialPages["/contact"].lead, "/contact");
export default function Page() { return <ContactPage />; }
