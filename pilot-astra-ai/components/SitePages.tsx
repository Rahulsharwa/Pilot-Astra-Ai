import { editorialPages } from "@/lib/editorial-content";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteNavbar from "./SiteNavbar";
import { HomepageFooter } from "./HomepageSections";
import HomepageMotion from "./HomepageMotion";
import EnquiryForm from "./EnquiryForm";
import ServiceCalculator from "./ServiceCalculator";
import { services, caseStudies, pages, type Inline, type ContentBlock, type SourceDocument } from "@/lib/site-content";
import { workflows } from "@/lib/home-content";
import "./SitePages.css";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="site-dark"><SiteNavbar /><main id="top" className="site-main">{children}</main><HomepageFooter /><HomepageMotion /></div>;
}
export function Breadcrumbs({ items }: { items: { title: string; href?: string }[] }) {
  return <nav className="site-breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{items.map(item => <li key={item.title}>{item.href ? <Link href={item.href}>{item.title}</Link> : <span aria-current="page">{item.title}</span>}</li>)}</ol></nav>;
}
export function PageHero({ label, title, description, children }: { label: string; title: string; description?: string; children?: ReactNode }) {
  return <header className="site-hero"><p className="site-eyebrow"><span />{label}</p><h1>{title}</h1>{description && <p className="site-hero-description">{description}</p>}{children}</header>;
}
function InlineContent({ content }: { content: Inline[] }) {
  return <>{content.map((item, i) => item.href ? item.href.startsWith("/") || item.href.startsWith("#") ? <Link prefetch={false} key={i} href={item.href}>{item.text}</Link> : <a key={i} href={item.href} rel={item.href.startsWith("https:") ? "noopener noreferrer" : undefined}>{item.text}</a> : <span key={i}>{item.text}</span>)}</>;
}
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return <>{blocks.map((block, i) => {
    if (block.type === "ul" || block.type === "ol") {
      const Tag = block.type;
      return <Tag key={i}>{block.items?.map((item, j) => <li key={j}><InlineContent content={item} /></li>)}</Tag>;
    }
    if (block.type === "h3") return <h3 key={i}><InlineContent content={block.content || []} /></h3>;
    return <p key={i}><InlineContent content={block.content || []} /></p>;
  })}</>;
}
export function StrategyCTA({ title = "Let’s build your growth system", copy = "Share your bottleneck and existing systems. We can discuss scoped implementation, human review and an appropriate delivery model through email.", label = "Discuss your growth system" }: { title?: string; copy?: string; label?: string }) {
  return <section className="site-strategy" data-home-reveal><p className="site-eyebrow">THE NEXT STEP</p><h2>{title}</h2><p>{copy}</p><Link prefetch={false} className="pa-button pa-button-blue" href="/contact">{label} <span aria-hidden="true">↗</span></Link></section>;
}
export function ServiceCards({ exclude }: { exclude?: string }) {
  return <div className="site-service-grid">{services.filter(s => s.slug !== exclude).map(service => {
    const index = services.indexOf(service);
    const description = service.description;
    return <article className="site-service-card" key={service.slug}><span className="site-card-index">0{index + 1} / CONNECTED SYSTEMS</span><div className="site-card-orbit" aria-hidden="true"><span /><i /><b>{String(index + 1).padStart(2,"0")}</b></div><h2><Link prefetch={false} href={`/services/${service.slug}`}>{service.name}<span aria-hidden="true">↗</span></Link></h2><p>{description}</p></article>;
  })}</div>;
}
export function ServicesIndex() {
  return <SiteShell><Breadcrumbs items={[{ title: "Services" }]} /><PageHero label="OUR CONNECTED SYSTEMS" title={editorialPages["/services"].heading} description={editorialPages["/services"].lead} /><ServiceCards /><StrategyCTA /></SiteShell>;
}
function WorkflowDiagram({ slug, name }: { slug: string; name: string }) {
  const workflow = workflows.find(w => w.href === `/services/${slug}`);
  if (!workflow) return null;
  return <figure className="site-workflow"><figcaption>{name} / CONNECTED WORKFLOW</figcaption><ol>{[["INPUT", workflow.input], ["PROCESS", workflow.process], ["OUTPUT", workflow.output]].map(([label, text], i) => <li key={label}><span>0{i + 1} / {label}</span><p>{text}</p><i aria-hidden="true">→</i></li>)}</ol></figure>;
}
export function ServiceDetail({ service }: { service: typeof services[number] }) {
  return <SiteShell><Breadcrumbs items={[{ title: "Services", href: "/services" }, { title: service.name }]} /><PageHero label={`CONNECTED SYSTEM / ${service.name}`} title={service.title} description={service.description}><div className="site-hero-actions"><Link prefetch={false} href="/contact" className="pa-button pa-button-blue">Discuss this system <span aria-hidden="true">↗</span></Link><Link href="#roi-calculator" className="site-text-link">Explore the planning model ↓</Link></div></PageHero>
    <WorkflowDiagram slug={service.slug} name={service.name} />
    <section className="site-section site-editorial" data-home-reveal><p className="site-eyebrow">THE FOUNDATION</p><h2>What is {service.name}?</h2><p className="site-lead">{service.definition}</p></section>
    <div className="site-two-column"><section className="site-panel" data-home-reveal><p className="site-eyebrow">01 / THE BUSINESS PROBLEM</p><h2>What problems does {service.name} solve?</h2><ul>{service.problems.map(item => <li key={item}>{item}</li>)}</ul></section><section className="site-panel" data-home-reveal><p className="site-eyebrow">02 / THE SYSTEM</p><h2>What does {service.name} include?</h2><ul>{service.includes.map(item => <li key={item}>{item}</li>)}</ul></section></div>
    <section className="site-fit"><p className="site-eyebrow">BEST FIT</p><p>{service.bestFit}</p></section>
    <ServiceCalculator name={service.name} defaults={service.defaults} rates={service.rates} disclaimer={service.calculatorDisclaimer} />
    <section className="site-section site-editorial" data-home-reveal><p className="site-eyebrow">COST MODEL</p><h2>Implementation and recurring operations are separately scoped</h2><p>Custom scope, documented proposal, recurring support as agreed. Confirm implementation fees, monitoring coverage, approvals, subscriptions and additional workflows before engagement.</p><p className="site-note">APIs, tokens, hosting and third-party subscriptions may be separate. An automated workflow system is not an equivalent replacement for an internal team. <Link href="/#cost-options">See the transparent planning illustration.</Link></p></section>
    <section className="site-section"><p className="site-eyebrow">IMPLEMENTATION</p><h2>How is {service.name} delivered?</h2><p>A proposed 45-working-day delivery model, subject to scope and agreement.</p><ol className="site-delivery">{service.delivery.map((step, i) => <li key={step} data-home-reveal><span>0{i + 1}</span><p>{step}</p></li>)}</ol><Link href="/#process" className="site-text-link">See the seven-stage implementation plan ↗</Link></section>
    <section className="site-section site-faq"><p className="site-eyebrow">CLEAR ANSWERS</p><h2>Frequently asked questions</h2>{service.faq.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</section>
    <section className="site-section"><p className="site-eyebrow">BUILD THE CONNECTIONS</p><h2>Services that work well with {service.name}</h2><p>Connect this service with the website, WhatsApp, CRM, outreach, content, and search layers in your growth system.</p><div className="site-related">{services.filter(s => s.slug !== service.slug).map(s => <Link prefetch={false} key={s.slug} href={`/services/${s.slug}`}>{s.name} <span aria-hidden="true">↗</span></Link>)}</div></section>
    <aside className="site-note">Implementation uses agreed inputs, approved platform access and human review. Your team owns business decisions and permissions; operational responsibility and handover are contractual. <Link href="/#delivery-models">Compare delivery models</Link>. <Link href="/work">Explore source-based workflow examples</Link>.</aside><StrategyCTA title="Map the next practical workflow" />
  </SiteShell>;
}
const evidenceNote = "Illustrative implementation examples / source-based scenarios. These explain workflow design, not independently verified customer results. Customer identities and supporting performance evidence are not supplied.";
export function WorkIndex() {
  return <SiteShell><Breadcrumbs items={[{ title: "Work" }]} /><PageHero label="SELECTED WORK / CONNECTED SYSTEMS" title={editorialPages["/work"].heading} description={editorialPages["/work"].lead} /><aside className="site-note site-evidence">{evidenceNote}</aside><div className="site-work-list">{caseStudies.map((study, i) => <article key={study.slug} className="site-case-preview" data-home-reveal><div className="site-case-graphic" aria-hidden="true"><span>0{i + 1}</span><div className="site-case-line" /><p>{study.services.map(s => s.title).join(" / ")}</p></div><div><p className="site-eyebrow">{study.category}</p><h2><Link prefetch={false} href={`/work/${study.slug}`}>{study.title} <span aria-hidden="true">↗</span></Link></h2><p>{study.description}</p><p className="site-note"><strong>Source-described workflow:</strong> {study.outcomes}</p><Link prefetch={false} href={`/work/${study.slug}`} className="site-text-link">Read the implementation example ↗</Link></div></article>)}</div><StrategyCTA /></SiteShell>;
}
export function CaseDetail({ study }: { study: typeof caseStudies[number] }) {
  return <SiteShell><Breadcrumbs items={[{ title: "Work", href: "/work" }, { title: "Implementation example" }]} /><PageHero label={study.category} title={study.title} description={study.description} /><p className="site-byline">{study.byline}</p><aside className="site-note site-evidence">{evidenceNote}</aside><div className="site-related">{study.services.map(s => <Link prefetch={false} key={s.href} href={s.href}>{s.title} ↗</Link>)}</div><section className="site-case-outcomes"><p className="site-eyebrow">SOURCE-DESCRIBED WORKFLOW GOALS</p><ul>{study.outcomes.split(" · ").map(item => <li key={item}>{item}</li>)}</ul></section>{study.sections.map((section, i) => <section className="site-section site-editorial" key={section.title} data-home-reveal><p className="site-eyebrow">0{i+1} / {['THE CHALLENGE', 'THE APPROACH', 'THE OUTCOME'][i]}</p><h2>{section.title}</h2><ContentBlocks blocks={section.blocks as ContentBlock[]} /></section>)}<StrategyCTA title="Want a growth system like this?" copy="Book a strategy call and we’ll map the engine for your business." /></SiteShell>;
}
export function AboutPage() {
  const page = pages.about;
  return <SiteShell><Breadcrumbs items={[{ title: "About" }]} /><PageHero label="ABOUT PILOT ASTRA AI" title={editorialPages["/about"].heading} description={editorialPages["/about"].lead} /><div className="site-capacity"><ContentBlocks blocks={page.intro.slice(1)} /><p className="site-note">Source package capacities and proposed schedule; final deliverables depend on scope and agreement. These are not performance guarantees.</p></div>{page.sections.slice(0,-1).map((section, i) => <section className="site-section site-editorial" key={section.title} data-home-reveal><p className="site-eyebrow">0{i+1} / THE CONNECTED BUSINESS</p><h2>{section.title}</h2>{section.title === "What the engine includes" ? <div className="site-related">{services.map(s => <Link prefetch={false} key={s.slug} href={`/services/${s.slug}`}>{s.name} ↗</Link>)}</div> : <ContentBlocks blocks={section.blocks} />}</section>)}<StrategyCTA title={page.sections.at(-1)?.title} copy={page.sections.at(-1)?.blocks[0]?.content?.map(c => c.text).join("")} label="Book a Strategy Call" /></SiteShell>;
}
export function ContactPage() {
  return <SiteShell><Breadcrumbs items={[{ title: "Contact" }]} /><PageHero label="GET IN TOUCH" title={editorialPages["/contact"].heading} description={editorialPages["/contact"].lead} /><div className="pa-contact-layout site-contact"><aside className="site-contact-aside"><p className="site-eyebrow">ONE PRACTICAL NEXT STEP</p><h2>Start with your business. Connect the right system.</h2><a className="site-text-link" href="mailto:info@bharataivyapari.com">info@bharataivyapari.com ↗</a><p>Share your current offer, the enquiry flow and the bottleneck you want to solve. A strategy call can be arranged through email; no appointment is booked here.</p><Link href="/privacy-policy" className="site-text-link">Read the privacy policy ↗</Link></aside><EnquiryForm /></div></SiteShell>;
}
export function LegalPage({ document, path }: { document: SourceDocument; path: string }) {
  return <SiteShell><Breadcrumbs items={[{ title: document.title }]} /><PageHero label="LEGAL / PILOT ASTRA AI" title={document.title} /><article className="site-legal"><ContentBlocks blocks={document.intro} />{path === "/privacy-policy" && <aside className="site-note site-evidence"><strong>Implementation note:</strong> The policy below is the supplied June 2025 text and requires owner review. The current enquiry interface prepares a draft in your email application; it does not submit information to a website server or store it here. The source policy describes additional collection fields and CRM storage.</aside>}<nav aria-label="On this page" className="site-legal-toc">{document.sections.map((section, i) => <a key={section.title} href={`#legal-${i}`}>{section.title}</a>)}</nav>{document.sections.map((section, i) => <section className="site-section" id={`legal-${i}`} key={section.title}><h2>{section.title}</h2><ContentBlocks blocks={section.blocks} /></section>)}</article></SiteShell>;
}
