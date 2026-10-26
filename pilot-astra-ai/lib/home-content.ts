export const serviceLinks = [
  { title: "AI Website Development", href: "/services/ai-website" },
  { title: "Dynamic Landing Page System", href: "/services/dynamic-landing" },
  { title: "AI WhatsApp Bot", href: "/services/whatsapp-bot" },
  { title: "AI SDR Outreach", href: "/services/ai-sdr" },
  { title: "Social Media Automation", href: "/services/social-automation" },
  { title: "SEO, GEO & Blog Automation", href: "/services/seo-geo" },
  { title: "AI Video Content Engine", href: "/services/video-engine" },
  { title: "AI Calling System", href: "/services/ai-calling" },
];

export const industries = [
  ["Industrial Businesses", "Factories, plants and industrial suppliers seeking digital visibility and automated enquiry handling.", "01"],
  ["Manufacturing Companies", "Production-focused teams connecting lead generation, B2B outreach and technical content.", "02"],
  ["Tooling & Machinery", "CNC tooling, machine services, calibration and industrial automation providers.", "03"],
  ["B2B Service Providers", "Consultancies and service firms reaching procurement teams and business decision-makers.", "04"],
  ["Retail Stores", "Showrooms and retail brands connecting local discovery, appointments and WhatsApp enquiries.", "05"],
  ["D2C Brands", "Direct-to-consumer brands building content, social presence and connected conversion funnels.", "06"],
  ["Ecommerce Businesses", "Online stores connecting product pages, SEO, abandoned-cart recovery and follow-ups.", "07"],
  ["Local Businesses", "Location-based businesses reaching nearby customers through search and social.", "08"],
  ["Multi-location Businesses", "Brands with multiple outlets using dynamic pages for locations, categories and offers.", "09"],
  ["Founder-led Companies", "Owner-operated businesses seeking pipeline visibility and systematic growth operations.", "10"],
];

export const architecture = [
  { name: "Website", caption: "The first business touchpoint", detail: "Your website and landing pages catch demand, explain the offer and capture enquiries with useful business context.", handoff: "Website → Enquiry capture → WhatsApp", symbol: "01" },
  { name: "WhatsApp", caption: "Keep the conversation moving", detail: "Automated enquiry handling collects requirements, qualifies the conversation and notifies the sales team.", handoff: "Enquiry → Qualification → CRM", symbol: "02" },
  { name: "CRM", caption: "Context for every lead", detail: "A shared pipeline keeps lead status, source and follow-up context visible to the team and the founder.", handoff: "Lead record → Sales notification → Follow-up", symbol: "03" },
  { name: "AI SDR", caption: "Open the next B2B conversation", detail: "Targeted prospect research, personalized emails and follow-up sequences connect new outreach to CRM tracking.", handoff: "Prospect → Outreach → Reply → CRM", symbol: "04" },
  { name: "Social Media", caption: "Consistency across channels", detail: "Content planning, creation, review and publishing connect your social presence to the website and WhatsApp.", handoff: "Content → Discovery → Enquiry", symbol: "05" },
  { name: "SEO / GEO", caption: "Be found around buyer intent", detail: "Search-ready pages, keyword planning and blog workflows help buyers discover your offer through search and AI answers.", handoff: "Buyer query → Relevant page → Next step", symbol: "06" },
  { name: "AI Calling", caption: "An optional voice layer", detail: "Optional inbound and outbound voice workflows support qualification, re-engagement and callbacks, based on the agreed scope.", handoff: "Conversation → Lead context → Callback", symbol: "07" },
];

export const workflows = [
  { title: "AI-Powered Business Website", purpose: "A fast, mobile-friendly foundation for product discovery and enquiries.", input: "Business offer, product information and sitemap", process: "Build the website, enquiry forms and search-ready page structure", output: "An AI-ready website with up to 15 agreed pages", href: "/services/ai-website" },
  { title: "Dynamic Landing Page System", purpose: "Extend your website without rebuilding it for every offer.", input: "Product, service, category or location content", process: "Configure reusable templates and a dynamic page structure", output: "Pages your team can add for new products, services and locations", href: "/services/dynamic-landing" },
  { title: "AI WhatsApp Bot", purpose: "Connect the first enquiry to a practical sales follow-up.", input: "Website enquiries and customer requirements", process: "Capture details, qualify enquiries and notify the team", output: "CRM-connected lead context and follow-up workflows", href: "/services/whatsapp-bot" },
  { title: "AI SDR Outreach System", purpose: "Make targeted B2B outreach a repeatable operating process.", input: "Target audience, prospect sources and offer", process: "Segment prospects, personalize outreach and configure follow-ups", output: "Tracked replies, lead statuses and CRM handoffs", href: "/services/ai-sdr" },
  { title: "AI Social Media Content Automation", purpose: "Keep useful content moving from a plan to publication.", input: "Brand voice, content pillars and offers", process: "Create, review, schedule and publish platform-specific content", output: "A consistent content workflow linked to customer enquiries", href: "/services/social-automation" },
  { title: "Content Intent Framework", purpose: "Answer the buyer’s next question with a clear next step.", input: "Buyer questions, search queries and business offers", process: "Map informational, commercial, transactional and navigational intent", output: "A content plan aligned with discovery, consideration and action", href: "/#content-strategy" },
  { title: "AI Video Content Engine", purpose: "Turn business knowledge into repeatable short-form creative workflows.", input: "Product education, offers, FAQs and brand content", process: "Develop video prompts and AI-assisted production workflows", output: "A video content workflow for social and sales enablement", href: "/services/video-engine" },
  { title: "SEO, GEO & Blog Automation", purpose: "Connect useful content with Google and AI-search discoverability.", input: "Business topics, keywords and buyer intent", process: "Plan keywords, structure pages, publish blogs and connect internal links", output: "A repeatable search and content operating framework", href: "/services/seo-geo" },
  { title: "AI Calling System", purpose: "Add an optional voice workflow to your customer communications.", input: "Enquiry context, qualification rules and callback requirements", process: "Configure inbound or outbound voice-agent workflows", output: "Captured enquiries, qualification context and scheduled callbacks", href: "/services/ai-calling" },
  { title: "Content Forecast Model", purpose: "Plan publishing capacity before evaluating content performance.", input: "Posts per profile, active profiles and publishing days", process: "Calculate planned monthly and six-month output", output: "An illustrative content-capacity scenario, not guaranteed reach", href: "/#forecasts" },
  { title: "AI SDR Forecast Model", purpose: "Make outreach assumptions explicit before campaigns begin.", input: "Emails per day, working days and scenario rates", process: "Model outreach volume, opens, replies and qualification", output: "An illustrative planning scenario, not actual campaign results", href: "/#forecasts" },
];

export const intentCategories = [
  { title: "Informational", purpose: "Help buyers understand the problem and the possibilities.", stage: "01 / DISCOVERY", queries: ["What is WhatsApp automation for business?", "How to automate follow-ups for industrial enquiries?", "How does an AI SDR work for B2B sales?", "What is GEO for AI search?"] },
  { title: "Commercial", purpose: "Help buyers compare solutions that fit their business.", stage: "02 / CONSIDERATION", queries: ["WhatsApp automation for retail business in India", "AI SDR for B2B companies in India", "Social media content automation for ecommerce", "SEO and GEO agency in India"] },
  { title: "Transactional", purpose: "Give ready-to-act buyers a practical next step.", stage: "03 / ACTION", queries: ["Book an AI automation consultation", "Get WhatsApp bot for ecommerce store", "Hire AI SDR agency for lead generation", "Set up an AI calling system for business"] },
  { title: "Directional / Navigational", purpose: "Connect people looking for your brand with the right destination.", stage: "04 / CONNECTION", queries: ["Pilot Astra AI", "Pilot Astra AI automation", "Pilot Astra AI website services", "Pilot Astra AI lead generation"] },
];

export const implementation = [
  { days: "Days 1–5", title: "Discovery & Planning", detail: "Understand your business, plan the sitemap and product structure, map CRM and WhatsApp flows, and define keyword and outreach requirements." },
  { days: "Days 6–15", title: "Website & Infrastructure Setup", detail: "Set up Next.js and Vercel hosting, the website frontend, dynamic structure, landing-page templates, CMS or database planning and SEO foundations." },
  { days: "Days 16–25", title: "Website Pages & Dynamic System", detail: "Build up to 15 agreed pages, dynamic product or service templates, enquiry forms, WhatsApp CTAs and responsive, search-ready layouts." },
  { days: "Days 26–32", title: "WhatsApp Bot & CRM Setup", detail: "Connect enquiry capture, the CRM pipeline, automated follow-ups, team notifications and lead-status tracking." },
  { days: "Days 33–38", title: "AI Content, Blog & SEO/GEO Automation", detail: "Build blog workflows, the keyword framework, social templates, platform-specific content, video prompts and LinkedIn newsletter structure." },
  { days: "Days 39–43", title: "AI SDR Outreach Setup", detail: "Configure audience segmentation, prospect-source workflows, email sequences, CRM connections and campaign testing." },
  { days: "Days 44–45", title: "Testing, Training & Handover", detail: "Test website, WhatsApp, CRM, email, content and dynamic pages end to end. Train your team and hand over the connected system." },
];

export const deliverables = [
  { group: "01 / CORE SYSTEMS", title: "Your connected foundation", items: ["A modern AI-ready website", "Up to 15 agreed website pages", "Dynamic product, service or landing pages", "AI WhatsApp enquiry handling", "AI SDR outreach system", "CRM-based lead tracking", "Founder visibility into leads, campaigns and follow-ups"] },
  { group: "02 / SUPPORTING WORKFLOWS", title: "Your content operating layer", items: ["Social media content automation framework", "AI video content workflow", "LinkedIn personal, company and newsletter content system", "Blog automation", "SEO/GEO support for up to 15 keywords per month"] },
  { group: "03 / OPTIONAL CAPABILITY", title: "An intelligent voice layer", items: ["Optional AI calling system", "Qualification, re-engagement and callback workflows within the agreed scope"] },
];

export const workExamples = [
  { category: "MANUFACTURING & INDUSTRIAL", title: "Industrial Manufacturer Lead Engine", description: "Search-ready product pages connected to enquiry capture and a WhatsApp follow-up flow.", modules: "Website / WhatsApp / SEO", href: "/work/industrial-manufacturer-lead-engine" },
  { category: "RETAIL & MULTI-LOCATION", title: "Retail Brand WhatsApp Automation", description: "Location-aware landing pages and a unified WhatsApp enquiry workflow for a multi-outlet retail business.", modules: "Dynamic pages / WhatsApp / Social", href: "/work/retail-brand-whatsapp-automation" },
  { category: "ECOMMERCE & D2C", title: "D2C Ecommerce Outreach System", description: "B2B and bulk-buyer outreach combined with an automated SEO and blog content engine.", modules: "AI SDR / SEO / Video", href: "/work/d2c-ecommerce-outreach-system" },
];

export const faqs = [
  ["What does an AI automation agency do?", "It connects marketing and sales work such as web enquiries, WhatsApp replies, CRM follow-up, outreach and content into a practical system."],
  ["Can you connect website leads to WhatsApp and a CRM?", "Yes. Website enquiries can be routed into WhatsApp workflows and CRM tracking."],
  ["Do you work with manufacturers, retailers, and ecommerce brands?", "Yes. Systems are designed for industrial, retail, ecommerce and B2B businesses."],
  ["What is social media content automation?", "A repeatable workflow for producing, reviewing, scheduling and publishing content."],
  ["How long does a growth system take to launch?", "The standard implementation plan runs for 45 working days, subject to the project scope and agreed timeline."],
// Decision FAQs sourced from UPDATED.md §4; original five topics retained.
  ["Do I need to hire an internal AI team?", "Not necessarily. Compare a scoped fully managed engagement with a conditional on-site engineer supported by the wider delivery team. Availability and responsibilities require a proposal."],
  ["What exactly will you manage?", "Only workflows and coverage agreed in the proposal. New systems need assessment. Approval, escalation and operational responsibilities are documented for the contracted workflows."],
  ["Will the setup fee recur each year?", "The illustration assumes the same one-time implementation is not charged again. Managed fees, third-party expenses and additional scope still apply; the agreement governs actual fees."],
  ["Can the system run in our environment?", "Where architecture and agreement allow. Access, security responsibilities, data, exports, ownership and handover must be defined contractually."],
  ["Does AI guarantee lead volume, rankings or sales?", "No. Outcomes depend on business and market factors. People review customer-sensitive decisions and exceptions according to the agreed workflow."]
];
