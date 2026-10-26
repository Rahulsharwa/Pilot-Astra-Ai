import { deliveryModels, salaryScenario } from "@/lib/editorial-content";
import Link from "next/link";
import Image from "next/image";
import { cacheLife } from "next/cache";
import type { ReactNode } from "react";
import GrowthArchitecture from "./GrowthArchitecture";
import ForecastModels from "./ForecastModels";
import EnquiryForm from "./EnquiryForm";
import { industries, workflows, intentCategories, implementation, deliverables, workExamples, faqs, serviceLinks } from "@/lib/home-content";
import "./Homepage.css";

function Heading({ number, label, title, children }: { number: string; label: string; title: ReactNode; children?: ReactNode }) {
  return <div className="pa-section-heading" data-home-reveal><div className="pa-section-meta"><p className="astra-eyebrow"><span />{label}</p><span>{number} / PILOT ASTRA AI</span></div><div className="pa-heading-row"><h2>{title}</h2>{children && <div className="pa-heading-copy">{children}</div>}</div></div>;
}

export function ConnectedIntroduction() {
  return (
    <section className="pa-section pa-introduction" id="introduction" aria-labelledby="intro-title"><div className="pa-container">
      <Heading number="04" label="MANAGED AI AUTOMATION FOR INDIAN BUSINESSES" title={<span id="intro-title">Your AI Team.<br /><em>Without Building an AI Department.</em></span>} />
      <div className="pa-intro-body" data-home-reveal><p className="pa-large-copy">Your biggest problem isn’t another tool.<br /><span>It’s another disconnected process.</span></p><div><p>A website captures interest. WhatsApp replies. A CRM records context. But who makes sure the handoffs work when your team is busy?</p><p>Pilot Astra AI designs, documents, connects and helps manage the approved systems behind business growth. Manufacturers, retail teams, ecommerce brands and B2B service companies can start with one workflow and expand into a coordinated operating system.</p><div className="pa-inline-links"><Link prefetch={false} href="/services">Explore AI Automation Services <span>↗</span></Link><Link prefetch={false} href="/work">See Work Examples <span>↗</span></Link></div></div></div>
      <figure className="pa-enquiry-flow" data-home-reveal><figcaption>FROM THE FIRST TOUCHPOINT TO THE NEXT CONVERSATION</figcaption><ol>{["Website", "Enquiry capture", "WhatsApp", "CRM", "Sales follow-up"].map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong><i aria-hidden="true">→</i></li>)}</ol><div className="pa-flow-inputs"><span>DEMAND CONNECTED THROUGH</span>{["AI SDR", "Social Media", "SEO / GEO", "Content", "Optional AI Calling"].map(item => <b key={item}>{item}</b>)}</div></figure>
    </div></section>
  );
}

export function IndustryShowcase() {
  return (
    <section className="pa-section pa-industry-section" id="industries"><div className="pa-container">
      <Heading number="05" label="INDUSTRIES WE SERVE" title={<>Connected AI workflows for<br /><em>the way your industry sells.</em></>}><p>A manufacturer’s quotation cycle is different from a retailer’s store enquiry or an ecommerce buyer’s repeat order. The systems must reflect those differences.</p></Heading>
      <div className="pa-industry-list" data-home-reveal>{industries.map(([title, description, number]) => <details className="pa-industry" key={number}><summary><span>{number}</span><h3>{title}</h3><i aria-hidden="true">+</i></summary><p>{description}</p></details>)}</div>
    </div></section>
  );
}

export function ArchitectureSection() {
  return (
    <section className="pa-section" id="systems"><div className="pa-container">
      <Heading number="06" label="GROWTH ARCHITECTURE" title={<>From first touch to follow-up,<br /><em>without losing the context.</em></>}><p>A connected system makes ownership visible: which channel created the enquiry, what the customer asked, who should respond and which follow-up is due.</p></Heading>
      <div data-home-reveal><GrowthArchitecture /></div><p className="pa-section-note">Your team retains decisions, access permissions and business approvals.</p>
    </div></section>
  );
}

export function WorkflowShowcase() {
  return (
    <section className="pa-section pa-workflow-section" id="workflows"><div className="pa-container">
      <Heading number="07" label="HOW THE AI ENGINE WORKS" title={<>Built, documented and connected —<br /><em>not another software login.</em></>}><p>Each workflow has an input, an automated process, a business handoff and a clearly assigned reviewer.</p></Heading>
      <div className="pa-workflow-list" data-home-reveal>{workflows.map((workflow, i) => <details className="pa-workflow" key={workflow.title}><summary><span>{String(i + 1).padStart(2, "0")}</span><h3>{workflow.title}</h3><i aria-hidden="true">+</i></summary><div className="pa-workflow-content"><p>{workflow.purpose}</p><div className="pa-workflow-stages">{[["INPUT", workflow.input], ["PROCESS", workflow.process], ["OUTPUT", workflow.output]].map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}</div><Link prefetch={false} href={workflow.href}>Explore this workflow <span>↗</span></Link></div></details>)}</div>
    </div></section>
  );
}

export function ContentStrategy() {
  return (
    <section className="pa-section" id="content-strategy"><div className="pa-container">
      <Heading number="08" label="SEO · GEO · AEO CONTENT STRATEGY" title={<>Answer the buyer’s question.<br /><em>Then connect the next step.</em></>}><p>Useful search content helps industrial and retail buyers understand problems, compare solutions, ask for a quote and continue the conversation. SEO structures search-ready pages; GEO supports AI discoverability; AEO organizes clear answers to specific questions. None guarantees rankings or citations.</p></Heading>
      <div className="pa-intent-grid" data-home-reveal>{intentCategories.map(category => <details className="pa-intent-card" key={category.title}><summary><span className="pa-kicker">{category.stage}</span><h3>{category.title}</h3><p>{category.purpose}</p><span className="pa-intent-expand">Explore buyer queries <i aria-hidden="true">+</i></span></summary><ul>{category.queries.map(query => <li key={query}>{query}</li>)}</ul></details>)}</div>
      <div className="pa-inline-links pa-section-links"><Link prefetch={false} href="/services/seo-geo">Explore SEO, GEO & Blog Automation <span>↗</span></Link><Link prefetch={false} href="/services/social-automation">Explore Social Media Automation <span>↗</span></Link></div>
    </div></section>
  );
}

export function ForecastSection() {
  return (
    <section className="pa-section" id="forecasts"><div className="pa-container">
      <Heading number="09" label="CAPACITY PLANNING — NOT PERFORMANCE PROMISES" title={<>Make assumptions visible<br /><em>before measuring outcomes.</em></>}><p>See illustrative publishing and outreach volumes based on editable inputs. Real reach, replies and revenue depend on market conditions, offer, data quality and execution.</p></Heading>
      <div className="pa-forecast-disclaimer"><span aria-hidden="true">↗</span><p><strong>Illustrative planning scenarios.</strong> These are not client results, actual campaign performance or guarantees of views, replies, leads or customers. Outcomes depend on offer and database quality, follow-up, market demand, brand trust and campaign execution.</p></div>
      <div data-home-reveal><ForecastModels /></div>
    </div></section>
  );
}

export function ImplementationTimeline() {
  return (
    <section className="pa-section pa-process-section" id="process"><div className="pa-container pa-process-layout">
      <div className="pa-process-intro"><Heading number="10" label="IMPLEMENTATION & HANDOVER" title={<>From discovery to a<br /><em>managed operating rhythm.</em></>} /><div className="pa-day-count"><strong>45</strong><span>WORKING DAYS<br />STANDARD IMPLEMENTATION MODEL</span></div><p>A standard 45-working-day example maps requirements, infrastructure, website/CRM workflows, content systems, outreach testing and handover. Actual durations depend on scope and dependencies. These implementation stages are separate from ongoing managed services.</p></div>
      <ol className="pa-timeline">{implementation.map((stage, i) => <li key={stage.days} data-home-reveal><span className="pa-timeline-marker">{String(i + 1).padStart(2, "0")}</span><div><p className="pa-kicker">{stage.days}</p><h3>{stage.title}</h3><p>{stage.detail}</p></div></li>)}</ol>
    </div></section>
  );
}

export function DeliverablesSection() {
  return (
    <section className="pa-section" id="deliverables"><div className="pa-container">
      <Heading number="11" label="WHAT YOUR TEAM GETS" title={<>Systems your business can<br /><em>understand, operate and improve.</em></>}><p>A connected operating system your team can understand, run and extend as the business grows.</p></Heading>
      <div className="pa-deliverables" data-home-reveal>{deliverables.map(group => <article className="pa-deliverable" key={group.group}><p className="pa-kicker">{group.group}</p><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></article>)}</div>
      <p className="pa-section-note">The final package and supporting workflows are defined by the agreed scope. AI calling and on-site engineering are separately scoped options. Where supported by the architecture and agreement, deploy in customer-controlled infrastructure with documented access, exports, ownership terms and clear security responsibilities.</p>
    </div></section>
  );
}

export function SelectedWork() {
  return (
    <section className="pa-section" id="selected-work"><div className="pa-container">
      <Heading number="12" label="IMPLEMENTATION EXAMPLES" title={<>What connected workflows<br /><em>can look like in practice.</em></>}><p>Source-based implementation scenarios illustrate workflow design. They are not independently verified customer results.</p></Heading>
      <div className="pa-work-grid" data-home-reveal>{workExamples.map((work, i) => <article className="pa-work-card" key={work.href}><div className={`pa-work-visual pa-work-visual-${i}`} aria-hidden="true"><div className="pa-blueprint-grid" /><span>{["INDUSTRIAL", "RETAIL", "D2C"][i]}</span><div className="pa-blueprint-path"><i /><i /><i /></div></div><div className="pa-work-card-body"><p className="pa-kicker">{work.category}</p><h3><Link prefetch={false} href={work.href}>{work.title}<span aria-hidden="true">↗</span></Link></h3><p>{work.description}</p><span className="pa-work-modules">{work.modules}</span></div></article>)}</div>
      <div className="pa-work-footer"><p>Explore the systems and workflows behind each implementation example.</p><Link prefetch={false} href="/work">Explore Our Work <span>↗</span></Link></div>
    </div></section>
  );
}

export function FAQSection() {
  return (
    <section className="pa-section" id="faq"><div className="pa-container pa-faq-layout">
      <Heading number="13" label="QUESTIONS FOUNDERS ASK" title={<>Straight answers before you<br /><em>choose an AI operating model.</em></>} />
      <div className="pa-faq-list" data-home-reveal>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="pa-section pa-closing" aria-labelledby="closing-title"><div className="pa-container" data-home-reveal><p className="astra-eyebrow"><span /> YOUR NEXT CONNECTED CHAPTER</p><h2 id="closing-title">You started a business to grow it —<br /><em>not to chase ten disconnected tools.</em></h2><div className="pa-closing-copy"><p>Bring us your sales process, existing systems and the bottlenecks slowing your team down.</p><p>We’ll map which workflows can be automated, which need human review and whether managed delivery or an on-site engineer makes sense.</p><p>Start with a scoped conversation about your next practical system.</p></div><Link prefetch={false} className="pa-button pa-button-blue" href="/#contact">Book an AI Strategy Conversation <span>↗</span></Link></div></section>
  );
}

export function ContactSection() {
  return (
    <section className="pa-section pa-contact-section" id="contact"><div className="pa-container">
      <Heading number="15" label="GET IN TOUCH" title={<>Plan a connected AI system<br /><em>for your business.</em></>}><p>Tell us what your business does, which channels you currently use, and where enquiries or operations get stuck.</p></Heading>
      <div className="pa-contact-layout"><div className="pa-contact-aside"><span className="pa-star" aria-hidden="true">✦</span><h3>Start with the<br />next practical step.</h3><p>Tell us what your business offers and where the current process gets stuck.</p><a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com <span>↗</span></a><p className="pa-model-note">Your enquiry goes through your own email application. No calendar booking is implied.</p></div><EnquiryForm /></div>
    </div></section>
  );
}

export async function HomepageFooter() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();
  return (
    <footer className="pa-footer"><div className="pa-container"><div className="pa-footer-top"><div className="pa-footer-brand"><Link prefetch={false} href="/" aria-label="Pilot Astra AI home"><Image className="footer-logo-dark" src="/brand/pilot-astra-dark.svg" alt="Pilot Astra AI" width={160} height={80} /><Image className="footer-logo-light" src="/brand/pilot-astra-light.svg" alt="" aria-hidden="true" width={160} height={80} /></Link><p>Pilot Astra AI — Connected Growth Systems. One connected system for business enquiries, AI-assisted outreach, customer conversations and managed operations.</p><a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com</a></div><nav aria-label="Footer navigation"><p className="pa-kicker">EXPLORE</p>{[["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"], ["Systems", "/#systems"], ["Process", "/#process"]].map(([label, href]) => <Link prefetch={false} key={href} href={href}>{label}</Link>)}</nav><nav aria-label="Footer services"><p className="pa-kicker">CONNECTED SYSTEMS</p>{serviceLinks.map(service => <Link prefetch={false} key={service.href} href={service.href}>{service.title}</Link>)}</nav></div><nav className="pa-footer-cases" aria-label="Footer implementation examples">{workExamples.map(work => <Link prefetch={false} key={work.href} href={work.href}>{work.title} ↗</Link>)}</nav><div className="pa-footer-bottom"><small>© {year} Pilot Astra AI™. All rights reserved.</small><nav aria-label="Legal"><Link prefetch={false} href="/disclaimer">Disclaimer</Link><Link prefetch={false} href="/privacy-policy">Privacy Policy</Link><Link prefetch={false} href="/terms">Terms & Conditions</Link></nav><Link prefetch={false} href="/#top">Back to top ↑</Link></div></div></footer>
  );
}

export function DeliveryModels() {
  return <section className="pa-section" id="delivery-models"><div className="pa-container"><Heading number="04A" label="TWO WAYS TO WORK WITH US" title={<>An AI engineer on-site.<br /><em>Or an entire managed AI operation.</em></>}><p>Choose closer on-premises coordination or centrally managed delivery, with scoped technical implementation, documentation and human oversight.</p></Heading><div className="pa-decision-grid">{deliveryModels.map(model => <article className="pa-decision-card" key={model.heading}><p className="pa-kicker">{model.eyebrow}</p><h3>{model.heading}</h3><p>{model.lead}</p><dl>{model.details.map(([label,detail]) => <div key={label}><dt><strong>{label}</strong></dt><dd>{detail}</dd></div>)}</dl></article>)}</div><div className="pa-inline-links"><Link href="/#contact">Discuss My Delivery Model ↗</Link></div></div></section>;
}
export function CostComparison() {
  return <section className="pa-section" id="cost-options"><div className="pa-container"><Heading number="09A" label="COST TRANSPARENCY" title={<>Compare ongoing managed AI costs<br /><em>with building an internal capability.</em></>}><p>Custom scope, documented proposal, recurring support as agreed. The figures below are client-provided illustrations, not current quotes or validated salary averages.</p></Heading><div className="pa-table-wrap"><table className="pa-cost-table"><caption>Illustrative billed amounts in USD — same scope and monthly rate, without repeat setup</caption><thead><tr><th scope="col">Period</th><th scope="col">Assumptions</th><th scope="col">Illustrative amount</th></tr></thead><tbody><tr><th scope="row">Year 1</th><td>$10,000 setup + $500 × 12 months</td><td>$16,000</td></tr><tr><th scope="row">Year 2</th><td>$500 × 12 months; no repeat setup</td><td>$6,000</td></tr></tbody></table></div><p className="pa-section-note">62.5% lower year-two billed amount versus year one in this example only. This is not a saving versus hiring or a guarantee that total costs decline.</p><div className="pa-table-wrap"><table className="pa-cost-table"><caption>Separate in-house salary-budget illustration — INR lakh per year, not an equivalent managed-service deliverable</caption><thead><tr><th scope="col">Role</th><th scope="col">Illustrative annual salary budget</th></tr></thead><tbody>{salaryScenario.map(([role,budget]) => <tr key={role}><th scope="row">{role}</th><td>{budget}</td></tr>)}<tr><th scope="row">Total scenario</th><td>₹53–80 lakh</td></tr></tbody></table></div><p className="pa-section-note">Excludes APIs/tokens, hosting, subscriptions, integrations, taxes, additional scope, commissions, employer on-costs and on-site staffing costs. Different responsibilities and currencies are shown separately; managed workflows do not replace an equivalent internal team. Final fees require a scoped proposal.</p><div className="pa-inline-links"><Link href="/#contact">Discuss scope and operating costs ↗</Link></div></div></section>;
}
