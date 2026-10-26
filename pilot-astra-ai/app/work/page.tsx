import { editorialPages } from "@/lib/editorial-content";
import { WorkIndex } from "@/components/SitePages";
import { pageMetadata } from "@/lib/site-metadata";
export const metadata = pageMetadata(editorialPages["/work"].heading, editorialPages["/work"].lead, "/work");
export default function Page() { return <WorkIndex />; }
