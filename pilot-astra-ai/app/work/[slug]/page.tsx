import { notFound } from "next/navigation";
import { CaseDetail } from "@/components/SitePages";
import { caseStudies } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
export const ensureStatic = "navigation";
export function generateStaticParams() { return caseStudies.map(study => ({ slug: study.slug })); }
export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  if (!study) notFound();
  return pageMetadata(study.title, study.description, `/work/${slug}`);
}
export default async function Page({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  if (!study) notFound();
  return <CaseDetail study={study} />;
}
