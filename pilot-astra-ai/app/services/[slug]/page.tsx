import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/SitePages";
import { services } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
export const ensureStatic = "navigation";
export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return pageMetadata(service.title, service.description, `/services/${slug}`);
}
export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
