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
      <Heading number="04" label="AI AUTOMATION FOR INDIAN BUSINESSES" title={<span id="intro-title">Turn enquiries, follow-ups,<br />and content into <em>one growth system.</em></span>} />
      <div className="pa-intro-body" data-home-reveal><p className="pa-large-copy">One practical AI automation layer.<br /><span>Built around the way you already sell.</span></p><div><p>Pilot Astra AI helps industrial businesses, manufacturers, retailers, ecommerce brands and B2B service teams connect the work that creates demand with the systems that capture and convert it.</p><p>Instead of managing a website, WhatsApp inbox, CRM, outreach list and content calendar separately, your team gets one coordinated system.</p><div className="pa-inline-links"><Link prefetch={false} href="/services">Explore AI Automation Services <span>↗</span></Link><Link prefetch={false} href="/work">See Growth Case Studies <span>↗</span></Link></div></div></div>
      <figure className="pa-enquiry-flow" data-home-reveal><figcaption>FROM THE FIRST TOUCHPOINT TO THE NEXT CONVERSATION</figcaption><ol>{["Website", "Enquiry capture", "WhatsApp", "CRM", "Sales follow-up"].map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong><i aria-hidden="true">→</i></li>)}</ol><div className="pa-flow-inputs"><span>DEMAND CONNECTED THROUGH</span>{["AI SDR", "Social Media", "SEO / GEO", "Content", "Optional AI Calling"].map(item => <b key={item}>{item}</b>)}</div></figure>
    </div></section>
  );
}

export function IndustryShowcase() {
  return (
    <section className="pa-section pa-industry-section" id="industries"><div className="pa-container">
      <Heading number="05" label="WHO IT’S FOR" title={<>AI Growth Systems<br />for <em>Modern Businesses.</em></>}><p>We build around how you already sell, then connect the missing pieces across every channel.</p></Heading>
      <div className="pa-industry-list" data-home-reveal>{industries.map(([title, description, number]) => <details className="pa-industry" key={number}><summary><span>{number}</span><h3>{title}</h3><i aria-hidden="true">+</i></summary><p>{description}</p></details>)}</div>
    </div></section>
  );
}

export function ArchitectureSection() {
  return (
    <section className="pa-section" id="systems"><div className="pa-container">
      <Heading number="06" label="GROWTH ARCHITECTURE" title={<>A Connected AI Growth System<br />for <em>Every Customer Touchpoint.</em></>}><p>Your website catches demand. WhatsApp responds. CRM keeps context. Every system supports the next conversation.</p></Heading>
      <div data-home-reveal><GrowthArchitecture /></div>
    </div></section>
  );
}

export function WorkflowShowcase() {
  return (
    <section className="pa-section pa-workflow-section" id="workflows"><div className="pa-container">
      <Heading number="07" label="WHAT WE BUILD" title={<>The AI Automation Workflows<br /><em>Behind the Growth Engine.</em></>}><p>Explore what goes into each workflow, what happens behind the scenes, and what your team receives.</p></Heading>
      <div className="pa-workflow-list" data-home-reveal>{workflows.map((workflow, i) => <details className="pa-workflow" key={workflow.title}><summary><span>{String(i + 1).padStart(2, "0")}</span><h3>{workflow.title}</h3><i aria-hidden="true">+</i></summary><div className="pa-workflow-content"><p>{workflow.purpose}</p><div className="pa-workflow-stages">{[["INPUT", workflow.input], ["PROCESS", workflow.process], ["OUTPUT", workflow.output]].map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}</div><Link prefetch={false} href={workflow.href}>Explore this workflow <span>↗</span></Link></div></details>)}</div>
    </div></section>
  );
}

export function ContentStrategy() {
  return (
    <section className="pa-section" id="content-strategy"><div className="pa-container">
      <Heading number="08" label="CONTENT STRATEGY" title={<>Content Designed Around<br /><em>Real Buyer Intent.</em></>}><p>Answer the next question. Earn trust. Give the right person a clear next step through Google, AI search and social.</p></Heading>
      <div className="pa-intent-grid" data-home-reveal>{intentCategories.map(category => <details className="pa-intent-card" key={category.title}><summary><span className="pa-kicker">{category.stage}</span><h3>{category.title}</h3><p>{category.purpose}</p><span className="pa-intent-expand">Explore buyer queries <i aria-hidden="true">+</i></span></summary><ul>{category.queries.map(query => <li key={query}>{query}</li>)}</ul></details>)}</div>
      <div className="pa-inline-links pa-section-links"><Link prefetch={false} href="/services/seo-geo">Explore SEO, GEO & Blog Automation <span>↗</span></Link><Link prefetch={false} href="/services/social-automation">Explore Social Media Automation <span>↗</span></Link></div>
    </div></section>
  );
}

export function ForecastSection() {
  return (
    <section className="pa-section" id="forecasts"><div className="pa-container">
      <Heading number="09" label="FORECAST MODELS" title={<>Measure the Work<br /><em>Before You Measure the Result.</em></>}><p>Adjust the inputs. See the capacity. Keep the assumptions in view.</p></Heading>
      <div className="pa-forecast-disclaimer"><span aria-hidden="true">↗</span><p><strong>Illustrative planning scenarios.</strong> These are not client results, actual campaign performance or guarantees of views, replies, leads or customers. Outcomes depend on offer and database quality, follow-up, market demand, brand trust and campaign execution.</p></div>
      <div data-home-reveal><ForecastModels /></div>
    </div></section>
  );
}

export function ImplementationTimeline() {
  return (
    <section className="pa-section pa-process-section" id="process"><div className="pa-container pa-process-layout">
      <div className="pa-process-intro"><Heading number="10" label="IMPLEMENTATION" title={<>From Strategy to a<br /><em>Connected AI Growth System.</em></>} /><div className="pa-day-count"><strong>45</strong><span>WORKING DAYS<br />STANDARD IMPLEMENTATION MODEL</span></div><p>A proposed implementation schedule, subject to project scope and agreed timelines. From discovery to training, handover and a repeatable operating rhythm.</p></div>
      <ol className="pa-timeline">{implementation.map((stage, i) => <li key={stage.days} data-home-reveal><span className="pa-timeline-marker">{String(i + 1).padStart(2, "0")}</span><div><p className="pa-kicker">{stage.days}</p><h3>{stage.title}</h3><p>{stage.detail}</p></div></li>)}</ol>
    </div></section>
  );
}

export function DeliverablesSection() {
  return (
    <section className="pa-section" id="deliverables"><div className="pa-container">
      <Heading number="11" label="FINAL OUTCOME" title={<>What Your AI<br /><em>Growth System Includes.</em></>}><p>A connected operating system your team can understand, run and extend as the business grows.</p></Heading>
      <div className="pa-deliverables" data-home-reveal>{deliverables.map(group => <article className="pa-deliverable" key={group.group}><p className="pa-kicker">{group.group}</p><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></article>)}</div>
      <p className="pa-section-note">The final package and supporting workflows are defined by the agreed scope. Optional capabilities are not automatically included.</p>
    </div></section>
  );
}

export function SelectedWork() {
  return (
    <section className="pa-section" id="selected-work"><div className="pa-container">
      <Heading number="12" label="SELECTED WORK" title={<>See How Connected Systems<br /><em>Work in Practice.</em></>}><p>See how websites, customer conversations and content connect across different business models.</p></Heading>
      <div className="pa-work-grid" data-home-reveal>{workExamples.map((work, i) => <article className="pa-work-card" key={work.href}><div className={`pa-work-visual pa-work-visual-${i}`} aria-hidden="true"><div className="pa-blueprint-grid" /><span>{["INDUSTRIAL", "RETAIL", "D2C"][i]}</span><div className="pa-blueprint-path"><i /><i /><i /></div></div><div className="pa-work-card-body"><p className="pa-kicker">{work.category}</p><h3><Link prefetch={false} href={work.href}>{work.title}<span aria-hidden="true">↗</span></Link></h3><p>{work.description}</p><span className="pa-work-modules">{work.modules}</span></div></article>)}</div>
      <div className="pa-work-footer"><p>Explore the systems and workflows behind each implementation example.</p><Link prefetch={false} href="/work">Explore Our Work <span>↗</span></Link></div>
    </div></section>
  );
}

export function FAQSection() {
  return (
    <section className="pa-section" id="faq"><div className="pa-container pa-faq-layout">
      <Heading number="13" label="QUESTIONS BUYERS ASK" title={<>Clear Answers<br /><em>Before the Strategy Call.</em></>} />
      <div className="pa-faq-list" data-home-reveal>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="pa-section pa-closing" aria-labelledby="closing-title"><div className="pa-container" data-home-reveal><p className="astra-eyebrow"><span /> THE NEXT CONNECTED CHAPTER</p><h2 id="closing-title">Give Your Growth<br /><em>a System to Run On.</em></h2><div className="pa-closing-copy"><p>When every channel lives in a different place, good enquiries go quiet and good ideas stay unfinished.</p><p>Pilot Astra AI connects the website, WhatsApp, CRM, content, search and outreach layers into one calm, usable growth architecture.</p><p>Bring us the offer, the bottleneck and the ambition. We will map the next practical system around it.</p></div><Link prefetch={false} className="pa-button pa-button-blue" href="/#contact">Book Your Strategy Call <span>↗</span></Link></div></section>
  );
}

export function ContactSection() {
  return (
    <section className="pa-section pa-contact-section" id="contact"><div className="pa-container">
      <Heading number="15" label="GET IN TOUCH" title={<>Book Your AI<br /><em>Growth Strategy Call.</em></>}><p>Drop your details and our team will connect with a personalized solution — designed for your industry, in your language.</p></Heading>
      <div className="pa-contact-layout"><div className="pa-contact-aside"><span className="pa-star" aria-hidden="true">✦</span><h3>Start with the<br />next practical step.</h3><p>Tell us what your business offers and where the current process gets stuck.</p><a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com <span>↗</span></a><p className="pa-model-note">Your enquiry goes through your own email application. No calendar booking is implied.</p></div><EnquiryForm /></div>
    </div></section>
  );
}

export async function HomepageFooter() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();
  return (
    <footer className="pa-footer"><div className="pa-container"><div className="pa-footer-top"><div className="pa-footer-brand"><Link prefetch={false} href="/" aria-label="Pilot Astra AI home"><Image src="/brand/pilot-astra-dark.svg" alt="Pilot Astra AI" width={160} height={80} /></Link><p>We turn scattered marketing work into a connected system for finding demand, following up, publishing consistently and seeing what moves the pipeline.</p><a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com</a></div><nav aria-label="Footer navigation"><p className="pa-kicker">EXPLORE</p>{[["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"], ["Systems", "/#systems"], ["Process", "/#process"]].map(([label, href]) => <Link prefetch={false} key={href} href={href}>{label}</Link>)}</nav><nav aria-label="Footer services"><p className="pa-kicker">CONNECTED SYSTEMS</p>{serviceLinks.map(service => <Link prefetch={false} key={service.href} href={service.href}>{service.title}</Link>)}</nav></div><nav className="pa-footer-cases" aria-label="Footer implementation examples">{workExamples.map(work => <Link prefetch={false} key={work.href} href={work.href}>{work.title} ↗</Link>)}</nav><div className="pa-footer-bottom"><small>© {year} Pilot Astra AI™. All rights reserved.</small><nav aria-label="Legal"><Link prefetch={false} href="/disclaimer">Disclaimer</Link><Link prefetch={false} href="/privacy-policy">Privacy Policy</Link><Link prefetch={false} href="/terms">Terms & Conditions</Link></nav><Link prefetch={false} href="/#top">Back to top ↑</Link></div></div></footer>
  );
}
