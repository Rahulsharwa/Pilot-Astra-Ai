import Link from "next/link";
import "./GrowthSections.css";

const services = [
  { id: "01", type: "website", title: "AI Website Development", description: "Fast, mobile-friendly, SEO-ready websites built for lead generation, product discovery, service enquiries and conversion.", label: "YOUR CONNECTED FOUNDATION", href: "/services/ai-website" },
  { id: "02", type: "sdr", title: "AI SDR Outreach", description: "Prospect research, personalized outreach and intelligent follow-ups. Give your team more time for qualified conversations.", label: "FROM FIRST TOUCH TO FOLLOW-UP", href: "/services/ai-sdr" },
  { id: "03", type: "whatsapp", title: "AI WhatsApp Bot", description: "Turn enquiries into connected conversations with lead qualification and CRM-ready customer context.", href: "/services/whatsapp-bot" },
  { id: "04", type: "social", title: "Social Media Automation", description: "One connected flow for content planning, creation, approval, scheduling and publishing.", href: "/services/social-automation" },
  { id: "05", type: "seo", title: "SEO, GEO & Blog Automation", description: "Connect search optimization, AI-search discoverability and consistent content operations.", href: "/services/seo-geo" },
  { id: "06", type: "landing", title: "Dynamic Landing Page System", description: "Create scalable product, service, category, location or offer-based landing pages without rebuilding your website every time.", href: "/services/dynamic-landing" },
  { id: "07", type: "video", title: "AI Video Content Engine", description: "AI-assisted video production and creative workflows, from an idea to a ready-to-publish asset.", href: "/services/video-engine" },
  { id: "08", type: "calling", title: "AI Calling System", description: "Connect voice-agent conversations, lead management and intelligent follow-ups.", href: "/services/ai-calling" },
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "website") return (
    <div className="astra-visual astra-network" aria-hidden="true">
      <div className="astra-orbit astra-orbit-one" /><div className="astra-orbit astra-orbit-two" />
      <svg viewBox="0 0 600 270" preserveAspectRatio="none"><path d="M100 65 Q300 65 300 135 T500 65 M90 210 Q300 210 300 135 T510 210" /><path d="M300 135 V20 M300 135 V250" /></svg>
      <span className="astra-network-core">ASTRA<span>CONNECTED GROWTH</span></span>
      <span className="astra-node astra-node-a">Website</span><span className="astra-node astra-node-b">AI agents</span>
      <span className="astra-node astra-node-c">CRM</span><span className="astra-node astra-node-d">Marketing</span>
      <i className="astra-signal" />
    </div>
  );
  if (type === "sdr") return (
    <div className="astra-visual astra-pipeline" aria-hidden="true">
      <div className="astra-glass-panel"><div className="astra-panel-heading"><span className="astra-status-dot" /> OUTREACH WORKFLOW <span>↗</span></div>
        {["Research prospects", "Personalize outreach", "Qualify & follow up"].map((text, i) => <div className="astra-pipeline-step" key={text}><b>0{i + 1}</b><span>{text}</span><i>✓</i></div>)}
        <div className="astra-pipeline-footer">Connected to your CRM <span>→</span></div>
      </div>
    </div>
  );
  if (type === "whatsapp") return (
    <div className="astra-visual astra-chat" aria-hidden="true"><div className="astra-chat-bubble">A new enquiry.<span>Captured with context.</span></div><div className="astra-chat-bubble astra-chat-response">Qualify. Route. Follow up.<i><b /><b /><b /></i></div><span className="astra-chat-link">↳ CRM handoff</span></div>
  );
  if (type === "social") return (
    <div className="astra-visual astra-calendar" aria-hidden="true"><div className="astra-calendar-top">CONTENT WORKFLOW <span>↗</span></div><div className="astra-calendar-grid">{Array.from({ length: 14 }, (_, i) => <i className={i === 3 || i === 8 || i === 11 ? "astra-calendar-active" : ""} key={i}>{i === 3 ? "✦" : i === 8 ? "✓" : i === 11 ? "↗" : ""}</i>)}</div><div className="astra-calendar-bottom">Plan <span>→</span> Approve <span>→</span> Publish</div></div>
  );
  if (type === "seo") return (
    <div className="astra-visual astra-search" aria-hidden="true"><div className="astra-search-input"><span>⌕</span> Your next customer’s question<i /></div><div className="astra-search-result"><b>Search. Discover. Connect.</b><span /><span /><span /></div><span className="astra-search-tag">SEO + GEO</span></div>
  );
  if (type === "landing") return (
    <div className="astra-visual astra-funnel" aria-hidden="true"><span>DYNAMIC PAGES</span><div className="astra-funnel-lines"><i /><i /><i /></div><div className="astra-funnel-box">Template <span>→</span> Location <span>→</span> Enquiry</div></div>
  );
  if (type === "video") return (
    <div className="astra-visual astra-video" aria-hidden="true"><div className="astra-video-screen"><span>▷</span><i /></div><div className="astra-video-timeline">{Array.from({ length: 13 }, (_, i) => <i style={{ height: `${12 + ((i * 17) % 28)}px` }} key={i} />)}</div><span className="astra-video-label">IDEA → CREATE → PUBLISH</span></div>
  );
  return (
    <div className="astra-visual astra-voice" aria-hidden="true"><div className="astra-waveform">{Array.from({ length: 23 }, (_, i) => <i style={{ height: `${14 + ((i * 19) % 64)}px`, animationDelay: `${i * -0.08}s` }} key={i} />)}</div><div className="astra-voice-route"><span>Voice agent</span><i>⇄</i><span>Your CRM</span></div></div>
  );
}

export default function GrowthServices() {
  return (
    <section className="astra-services" aria-labelledby="services-title" id="growth-systems">
      <div className="astra-section-inner">
        <div className="astra-services-heading">
          <div><p className="astra-eyebrow"><span /> OUR SOLUTIONS</p><h2 id="services-title">One Connected AI Ecosystem.<br /><span>Built Around Your Business.</span></h2></div>
          <p>From your website and lead generation to WhatsApp, CRM, content and customer follow-ups, Pilot Astra AI connects the systems that support business growth.</p>
        </div>
        <div className="astra-bento">
          {services.map((service) => (
            <article className={`astra-card astra-card-${service.type}`} key={service.id}>
              <div className="astra-card-top"><span>{service.id} /</span>{service.label && <span>{service.label}</span>}<Link prefetch={false} href={service.href} aria-label={`Explore ${service.title}`}>↗</Link></div>
              <ServiceVisual type={service.type} />
              <div className="astra-card-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
            </article>
          ))}
        </div>
        <div className="astra-services-footer"><span>Individually capable. <strong>Connected by design.</strong></span><Link prefetch={false} href="/#contact">Let’s connect your growth system <span>↗</span></Link></div>
      </div>
    </section>
  );
}
