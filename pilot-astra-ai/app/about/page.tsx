import { editorialPages } from "@/lib/editorial-content";
import { AboutPage } from "@/components/SitePages";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata(editorialPages["/about"].heading, editorialPages["/about"].lead, "/about");
export default function Page() { return <AboutPage />; }
