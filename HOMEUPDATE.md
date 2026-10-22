# Pilot Astra AI Homepage — Content and Context

This document records the homepage content currently rendered at `/`, including copy embedded in components, data-driven cards, interactive details, forecast assumptions, navigation, contact behavior, and footer links. It is a content reference for updating the home page; it does not change the page by itself.

## Page identity and structure

- **Brand:** Pilot Astra AI — Connected Growth Systems.
- **Page:** `/` (the canonical URL is emitted only when `PILOT_ASTRA_SITE_URL` is configured).
- **Typography and design context:** Arial; a light cinematic hero with a scroll-linked image sequence that transitions into the black, blue, cyan, and ice-white homepage sections.
- **Sections in display order:**
  1. Cinematic hero
  2. Technology ecosystem marquee
  3. AI services bento grid
  4. Connected growth introduction
  5. Industries
  6. Connected growth architecture
  7. AI automation workflows
  8. Content intent strategy
  9. Forecast models
  10. Implementation timeline
  11. Deliverables
  12. Selected work
  13. Frequently asked questions
  14. Closing call to action
  15. Contact and email enquiry
  16. Footer

## 1. Cinematic hero

The existing scroll-linked canvas presents the supplied animation behind the hero. The white hero surface transitions to black as the sequence progresses.

**Headline:**

> We help B2B companies build a stable lead flow through strategy, analytics, and performance marketing

**Supporting line:**

> — focused on real business growth, not vanity metrics

**Oversized wordmark:** `PILOT ASTRA AI`

**Hero action:** `Get a Growth Audit` → `/#contact`

**Navigation:**

- Brand logo → `/`
- Services → `/services`
- How We Work → `/#process`
- Results → `/work`
- Contacts → `/#contact`
- FAQ → `/#faq`
- Get in touch → `/#contact`

The sequence uses the 250 local PNG frames in their original order and is scroll-controlled in both directions. The frames and source ZIP remain in the local workspace, excluded from Git at the user's request. A cloned copy needs the frame files supplied separately in `public/frames/` for the hero sequence to display.

## 2. Technology ecosystem marquee

**Eyebrow:** THE CONNECTED ECOSYSTEM

**Heading:** Your tools. One intelligent system.

**Supporting copy:** AI, communication, commerce and CRM — connected around your business.

The two moving rows show these platform marks:

- Row one: n8n, Google, Meta, WhatsApp, LinkedIn.
- Row two: HubSpot, Salesforce, WordPress, Shopify, Telegram.

**Qualification:** Technology ecosystem, not endorsements. Integrations are scoped to your platform, API access and business requirements.

The marquees pause when hovered or focused.

## 3. AI services bento grid

**Eyebrow:** OUR SOLUTIONS

**Heading:** One Connected AI Ecosystem. Built Around Your Business.

**Introduction:** From your website and lead generation to WhatsApp, CRM, content and customer follow-ups, Pilot Astra AI connects the systems that support business growth.

Eight cards, each linking to its service page:

1. **AI Website Development** — Fast, mobile-friendly, SEO-ready websites built for lead generation, product discovery, service enquiries and conversion. Label: YOUR CONNECTED FOUNDATION. `/services/ai-website`
2. **AI SDR Outreach** — Prospect research, personalized outreach and intelligent follow-ups. Give your team more time for qualified conversations. Label: FROM FIRST TOUCH TO FOLLOW-UP. `/services/ai-sdr`
3. **AI WhatsApp Bot** — Turn enquiries into connected conversations with lead qualification and CRM-ready customer context. `/services/whatsapp-bot`
4. **Social Media Automation** — One connected flow for content planning, creation, approval, scheduling and publishing. `/services/social-automation`
5. **SEO, GEO & Blog Automation** — Connect search optimization, AI-search discoverability and consistent content operations. `/services/seo-geo`
6. **Dynamic Landing Page System** — Create scalable product, service, category, location or offer-based landing pages without rebuilding your website every time. `/services/dynamic-landing`
7. **AI Video Content Engine** — AI-assisted video production and creative workflows, from an idea to a ready-to-publish asset. `/services/video-engine`
8. **AI Calling System** — Connect voice-agent conversations, lead management and intelligent follow-ups. `/services/ai-calling`

**Closing line:** Individually capable. Connected by design.

**Grid action:** Let’s connect your growth system → `/#contact`

## 4. Connected growth introduction

**Eyebrow:** AI AUTOMATION FOR INDIAN BUSINESSES

**Heading:** Turn enquiries, follow-ups, and content into one growth system.

**Lead:** One practical AI automation layer. Built around the way you already sell.

**Copy:** Pilot Astra AI helps industrial businesses, manufacturers, retailers, ecommerce brands and B2B service teams connect the work that creates demand with the systems that capture and convert it.

Instead of managing a website, WhatsApp inbox, CRM, outreach list and content calendar separately, your team gets one coordinated system.

**Links:**

- Explore AI Automation Services → `/services`
- See Growth Case Studies → `/work`

**Flow caption:** FROM THE FIRST TOUCHPOINT TO THE NEXT CONVERSATION

**Customer path:** Website → Enquiry capture → WhatsApp → CRM → Sales follow-up.

**Demand-connected-through labels:** AI SDR · Social Media · SEO / GEO · Content · Optional AI Calling.

## 5. Industries

**Eyebrow:** WHO IT’S FOR

**Heading:** AI Growth Systems for Modern Businesses.

**Supporting copy:** We build around how you already sell, then connect the missing pieces across every channel.

Each industry uses a native expandable disclosure:

1. **Industrial Businesses** — Factories, plants and industrial suppliers seeking digital visibility and automated enquiry handling.
2. **Manufacturing Companies** — Production-focused teams connecting lead generation, B2B outreach and technical content.
3. **Tooling & Machinery** — CNC tooling, machine services, calibration and industrial automation providers.
4. **B2B Service Providers** — Consultancies and service firms reaching procurement teams and business decision-makers.
5. **Retail Stores** — Showrooms and retail brands connecting local discovery, appointments and WhatsApp enquiries.
6. **D2C Brands** — Direct-to-consumer brands building content, social presence and connected conversion funnels.
7. **Ecommerce Businesses** — Online stores connecting product pages, SEO, abandoned-cart recovery and follow-ups.
8. **Local Businesses** — Location-based businesses reaching nearby customers through search and social.
9. **Multi-location Businesses** — Brands with multiple outlets using dynamic pages for locations, categories and offers.
10. **Founder-led Companies** — Owner-operated businesses seeking pipeline visibility and systematic growth operations.

## 6. Connected growth architecture

**Anchor:** `#systems`

**Eyebrow:** GROWTH ARCHITECTURE

**Heading:** A Connected AI Growth System for Every Customer Touchpoint.

**Supporting copy:** Your website catches demand. WhatsApp responds. CRM keeps context. Every system supports the next conversation.

The central interactive diagram initially selects **Website**. Selecting a module updates its caption, role, and handoff:

| Module | Caption | Role | Handoff |
|---|---|---|---|
| Website | The first business touchpoint | Your website and landing pages catch demand, explain the offer and capture enquiries with useful business context. | Website → Enquiry capture → WhatsApp |
| WhatsApp | Keep the conversation moving | Automated enquiry handling collects requirements, qualifies the conversation and notifies the sales team. | Enquiry → Qualification → CRM |
| CRM | Context for every lead | A shared pipeline keeps lead status, source and follow-up context visible to the team and the founder. | Lead record → Sales notification → Follow-up |
| AI SDR | Open the next B2B conversation | Targeted prospect research, personalized emails and follow-up sequences connect new outreach to CRM tracking. | Prospect → Outreach → Reply → CRM |
| Social Media | Consistency across channels | Content planning, creation, review and publishing connect your social presence to the website and WhatsApp. | Content → Discovery → Enquiry |
| SEO / GEO | Be found around buyer intent | Search-ready pages, keyword planning and blog workflows help buyers discover your offer through search and AI answers. | Buyer query → Relevant page → Next step |
| AI Calling | An optional voice layer | Optional inbound and outbound voice workflows support qualification, re-engagement and callbacks, based on the agreed scope. | Conversation → Lead context → Callback |

## 7. AI automation workflows

**Eyebrow:** WHAT WE BUILD

**Heading:** The AI Automation Workflows Behind the Growth Engine.

**Supporting copy:** Explore what goes into each workflow, what happens behind the scenes, and what your team receives.

Each disclosure shows its purpose, input, process, output, and a link. Eight service workflows are followed by the intent framework and two planning models.

1. **AI-Powered Business Website**
   - Purpose: A fast, mobile-friendly foundation for product discovery and enquiries.
   - Input: Business offer, product information and sitemap.
   - Process: Build the website, enquiry forms and search-ready page structure.
   - Output: An AI-ready website with up to 15 agreed pages.
   - Link: `/services/ai-website`
2. **Dynamic Landing Page System**
   - Purpose: Extend your website without rebuilding it for every offer.
   - Input: Product, service, category or location content.
   - Process: Configure reusable templates and a dynamic page structure.
   - Output: Pages your team can add for new products, services and locations.
   - Link: `/services/dynamic-landing`
3. **AI WhatsApp Bot**
   - Purpose: Connect the first enquiry to a practical sales follow-up.
   - Input: Website enquiries and customer requirements.
   - Process: Capture details, qualify enquiries and notify the team.
   - Output: CRM-connected lead context and follow-up workflows.
   - Link: `/services/whatsapp-bot`
4. **AI SDR Outreach System**
   - Purpose: Make targeted B2B outreach a repeatable operating process.
   - Input: Target audience, prospect sources and offer.
   - Process: Segment prospects, personalize outreach and configure follow-ups.
   - Output: Tracked replies, lead statuses and CRM handoffs.
   - Link: `/services/ai-sdr`
5. **AI Social Media Content Automation**
   - Purpose: Keep useful content moving from a plan to publication.
   - Input: Brand voice, content pillars and offers.
   - Process: Create, review, schedule and publish platform-specific content.
   - Output: A consistent content workflow linked to customer enquiries.
   - Link: `/services/social-automation`
6. **Content Intent Framework**
   - Purpose: Answer the buyer’s next question with a clear next step.
   - Input: Buyer questions, search queries and business offers.
   - Process: Map informational, commercial, transactional and navigational intent.
   - Output: A content plan aligned with discovery, consideration and action.
   - Link: `/#content-strategy`
7. **AI Video Content Engine**
   - Purpose: Turn business knowledge into repeatable short-form creative workflows.
   - Input: Product education, offers, FAQs and brand content.
   - Process: Develop video prompts and AI-assisted production workflows.
   - Output: A video content workflow for social and sales enablement.
   - Link: `/services/video-engine`
8. **SEO, GEO & Blog Automation**
   - Purpose: Connect useful content with Google and AI-search discoverability.
   - Input: Business topics, keywords and buyer intent.
   - Process: Plan keywords, structure pages, publish blogs and connect internal links.
   - Output: A repeatable search and content operating framework.
   - Link: `/services/seo-geo`
9. **AI Calling System**
   - Purpose: Add an optional voice workflow to your customer communications.
   - Input: Enquiry context, qualification rules and callback requirements.
   - Process: Configure inbound or outbound voice-agent workflows.
   - Output: Captured enquiries, qualification context and scheduled callbacks.
   - Link: `/services/ai-calling`
10. **Content Forecast Model**
    - Purpose: Plan publishing capacity before evaluating content performance.
    - Input: Posts per profile, active profiles and publishing days.
    - Process: Calculate planned monthly and six-month output.
    - Output: An illustrative content-capacity scenario, not guaranteed reach.
    - Link: `/#forecasts`
11. **AI SDR Forecast Model**
    - Purpose: Make outreach assumptions explicit before campaigns begin.
    - Input: Emails per day, working days and scenario rates.
    - Process: Model outreach volume, opens, replies and qualification.
    - Output: An illustrative planning scenario, not actual campaign results.
    - Link: `/#forecasts`

## 8. Content intent strategy

**Eyebrow:** CONTENT STRATEGY

**Heading:** Content Designed Around Real Buyer Intent.

**Supporting copy:** Answer the next question. Earn trust. Give the right person a clear next step through Google, AI search and social.

Four expandable categories with the source query examples:

### Informational — 01 / DISCOVERY

Help buyers understand the problem and the possibilities.

- What is WhatsApp automation for business?
- How to automate follow-ups for industrial enquiries?
- How does an AI SDR work for B2B sales?
- What is GEO for AI search?

### Commercial — 02 / CONSIDERATION

Help buyers compare solutions that fit their business.

- WhatsApp automation for retail business in India
- AI SDR for B2B companies in India
- Social media content automation for ecommerce
- SEO and GEO agency in India

### Transactional — 03 / ACTION

Give ready-to-act buyers a practical next step.

- Book an AI automation consultation
- Get WhatsApp bot for ecommerce store
- Hire AI SDR agency for lead generation
- Set up an AI calling system for business

### Directional / Navigational — 04 / CONNECTION

Connect people looking for your brand with the right destination.

- Pilot Astra AI
- Pilot Astra AI automation
- Pilot Astra AI website services
- Pilot Astra AI lead generation

**Links:** Explore SEO, GEO & Blog Automation → `/services/seo-geo`; Explore Social Media Automation → `/services/social-automation`.

## 9. Forecast models

**Eyebrow:** FORECAST MODELS

**Heading:** Measure the Work Before You Measure the Result.

**Supporting copy:** Adjust the inputs. See the capacity. Keep the assumptions in view.

**Notice:** Illustrative planning scenarios. These are not client results, actual campaign performance or guarantees of views, replies, leads or customers. Outcomes depend on offer and database quality, follow-up, market demand, brand trust and campaign execution.

### Content forecast

- Default inputs: 5 posts per day per profile × 6 active profiles × 30 publishing days.
- Planned output: 900 posts per month; 5,400 posts over six months.
- Illustrative view assumption: 10 views per post.
- Illustrative output: 9,000 views per month; 54,000 views over six months.
- Editable inputs: posts/day/profile, active profiles, publishing days/month.
- Note: capacity uses the selected publishing days; six-month output assumes the same output each month. View estimates assume 10 views per post and are not measured reach.
- Invalid, negative, fractional, blank, or unsafe totals do not produce estimates; publishing days are limited to 0–31.

### AI SDR forecast

- Default inputs: 500 outreach emails per day × 22 working days per month.
- Planned output: 11,000 emails per month; 66,000 emails over six months.
- Source assumptions: 45% opens and 4% replies are both calculated from total emails; 30% of replies are qualified; 12% of qualified prospects convert.
- Six-month illustrative counts: 29,700 opens; 2,640 replies; 792 qualified prospects; 95 customers (person counts rounded).
- Editable inputs: emails/day and working days/month.
- Invalid, negative, fractional, blank, or unsafe totals do not produce estimates; working days are limited to 0–31.

Every forecast is planning capacity or a scenario, never actual performance or a guarantee.

## 10. Implementation timeline

**Anchor:** `#process`

**Eyebrow:** IMPLEMENTATION

**Heading:** From Strategy to a Connected AI Growth System.

**Duration:** 45 working days — STANDARD IMPLEMENTATION MODEL.

**Schedule note:** A proposed implementation schedule, subject to project scope and agreed timelines. From discovery to training, handover and a repeatable operating rhythm.

1. **Days 1–5 — Discovery & Planning:** Understand your business, plan the sitemap and product structure, map CRM and WhatsApp flows, and define keyword and outreach requirements.
2. **Days 6–15 — Website & Infrastructure Setup:** Set up Next.js and Vercel hosting, the website frontend, dynamic structure, landing-page templates, CMS or database planning and SEO foundations.
3. **Days 16–25 — Website Pages & Dynamic System:** Build up to 15 agreed pages, dynamic product or service templates, enquiry forms, WhatsApp CTAs and responsive, search-ready layouts.
4. **Days 26–32 — WhatsApp Bot & CRM Setup:** Connect enquiry capture, the CRM pipeline, automated follow-ups, team notifications and lead-status tracking.
5. **Days 33–38 — AI Content, Blog & SEO/GEO Automation:** Build blog workflows, the keyword framework, social templates, platform-specific content, video prompts and LinkedIn newsletter structure.
6. **Days 39–43 — AI SDR Outreach Setup:** Configure audience segmentation, prospect-source workflows, email sequences, CRM connections and campaign testing.
7. **Days 44–45 — Testing, Training & Handover:** Test website, WhatsApp, CRM, email, content and dynamic pages end to end. Train your team and hand over the connected system.

## 11. Deliverables

**Eyebrow:** FINAL OUTCOME

**Heading:** What Your AI Growth System Includes.

**Supporting copy:** A connected operating system your team can understand, run and extend as the business grows.

### 01 / CORE SYSTEMS — Your connected foundation

- A modern AI-ready website
- Up to 15 agreed website pages
- Dynamic product, service or landing pages
- AI WhatsApp enquiry handling
- AI SDR outreach system
- CRM-based lead tracking
- Founder visibility into leads, campaigns and follow-ups

### 02 / SUPPORTING WORKFLOWS — Your content operating layer

- Social media content automation framework
- AI video content workflow
- LinkedIn personal, company and newsletter content system
- Blog automation
- SEO/GEO support for up to 15 keywords per month

### 03 / OPTIONAL CAPABILITY — An intelligent voice layer

- Optional AI calling system
- Qualification, re-engagement and callback workflows within the agreed scope

**Scope note:** The final package and supporting workflows are defined by the agreed scope. Optional capabilities are not automatically included.

## 12. Selected work

**Eyebrow:** SELECTED WORK

**Heading:** See How Connected Systems Work in Practice.

**Supporting copy:** See how websites, customer conversations and content connect across different business models.

Three previews link to their case-study pages. They are source-based implementation examples; their claims have not been independently verified.

1. **MANUFACTURING & INDUSTRIAL — Industrial Manufacturer Lead Engine**
   - Search-ready product pages connected to enquiry capture and a WhatsApp follow-up flow.
   - Modules: Website / WhatsApp / SEO.
   - `/work/industrial-manufacturer-lead-engine`
2. **RETAIL & MULTI-LOCATION — Retail Brand WhatsApp Automation**
   - Location-aware landing pages and a unified WhatsApp enquiry workflow for a multi-outlet retail business.
   - Modules: Dynamic pages / WhatsApp / Social.
   - `/work/retail-brand-whatsapp-automation`
3. **ECOMMERCE & D2C — D2C Ecommerce Outreach System**
   - B2B and bulk-buyer outreach combined with an automated SEO and blog content engine.
   - Modules: AI SDR / SEO / Video.
   - `/work/d2c-ecommerce-outreach-system`

**Links:** Explore Our Work → `/work`; individual cards link to the cases above.

## 13. Frequently asked questions

**Eyebrow:** QUESTIONS BUYERS ASK

**Heading:** Clear Answers Before the Strategy Call.

Five accessible disclosures:

1. **What does an AI automation agency do?** It connects marketing and sales work such as web enquiries, WhatsApp replies, CRM follow-up, outreach and content into a practical system.
2. **Can you connect website leads to WhatsApp and a CRM?** Yes. Website enquiries can be routed into WhatsApp workflows and CRM tracking.
3. **Do you work with manufacturers, retailers, and ecommerce brands?** Yes. Systems are designed for industrial, retail, ecommerce and B2B businesses.
4. **What is social media content automation?** A repeatable workflow for producing, reviewing, scheduling and publishing content.
5. **How long does a growth system take to launch?** The standard implementation plan runs for 45 working days, subject to the project scope and agreed timeline.

## 14. Closing call to action

**Eyebrow:** THE NEXT CONNECTED CHAPTER

**Heading:** Give Your Growth a System to Run On.

When every channel lives in a different place, good enquiries go quiet and good ideas stay unfinished.

Pilot Astra AI connects the website, WhatsApp, CRM, content, search and outreach layers into one calm, usable growth architecture.

Bring us the offer, the bottleneck and the ambition. We will map the next practical system around it.

**Action:** Book Your Strategy Call → `/#contact`

## 15. Contact and email enquiry

**Anchor:** `#contact`

**Eyebrow:** GET IN TOUCH

**Heading:** Book Your AI Growth Strategy Call.

**Introduction:** Drop your details and our team will connect with a personalized solution — designed for your industry, in your language.

**Aside:**

- Start with the next practical step.
- Tell us what your business offers and where the current process gets stuck.
- Approved email: `info@bharataivyapari.com`.
- Your enquiry goes through your own email application. No calendar booking is implied.

**Required fields:** Full name; Business email; Company name; Service interest; What would you like to connect?

**Actions and delivery message:** Open email draft; Copy enquiry. Your email application will open with a prepared enquiry. Please review and send it to contact our team. Nothing is submitted to a server or stored here.

The form validates required fields, prepares a URL-encoded email draft, supports a copy fallback and displays a selectable prepared-message fallback if automatic clipboard access is unavailable. Long drafts are directed to the copy fallback to avoid email-client URL limits. There is no website submission, storage, delivery confirmation, live calendar, appointment availability, or configured phone/WhatsApp contact destination.

## 16. Footer

**Brand statement:** We turn scattered marketing work into a connected system for finding demand, following up, publishing consistently and seeing what moves the pipeline.

**Email:** `info@bharataivyapari.com`

**Explore navigation:** Home `/`; Services `/services`; Work `/work`; About `/about`; Contact `/contact`; Systems `/#systems`; Process `/#process`.

**Connected systems:**

- AI Website Development `/services/ai-website`
- Dynamic Landing Page System `/services/dynamic-landing`
- AI WhatsApp Bot `/services/whatsapp-bot`
- AI SDR Outreach `/services/ai-sdr`
- Social Media Automation `/services/social-automation`
- SEO, GEO & Blog Automation `/services/seo-geo`
- AI Video Content Engine `/services/video-engine`
- AI Calling System `/services/ai-calling`

**Implementation examples:** Industrial Manufacturer Lead Engine `/work/industrial-manufacturer-lead-engine`; Retail Brand WhatsApp Automation `/work/retail-brand-whatsapp-automation`; D2C Ecommerce Outreach System `/work/d2c-ecommerce-outreach-system`.

**Legal:** Disclaimer `/disclaimer`; Privacy Policy `/privacy-policy`; Terms & Conditions `/terms`.

**Copyright:** © {current year} Pilot Astra AI™. All rights reserved. The year is generated at runtime.

## Source files and implementation references

The homepage is assembled in `pilot-astra-ai/app/page.tsx`. Its data-driven content is in `pilot-astra-ai/lib/home-content.ts`; section copy and footer live in `pilot-astra-ai/components/HomepageSections.tsx`; the hero, service bento, marquee, forecasts, architecture and enquiry form live in their corresponding files in `pilot-astra-ai/components/`. The original homepage brief and content source are `pilot-astra-ai/index.md`.

The hero frame images are intentionally excluded from Git. The local project contains all 250 images and the original approximately 193 MB ZIP. To restore the sequence in another checkout, provide the original PNGs under `pilot-astra-ai/public/frames/` with names `ezgif-frame-001.png` through `ezgif-frame-250.png`.
