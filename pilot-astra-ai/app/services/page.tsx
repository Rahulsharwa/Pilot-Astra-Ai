import { editorialPages } from "@/lib/editorial-content";
import { ServicesIndex } from "@/components/SitePages";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata(editorialPages["/services"].heading, editorialPages["/services"].lead, "/services");
export default function Page() { return <ServicesIndex />; }
