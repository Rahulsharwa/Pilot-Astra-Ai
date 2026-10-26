import type { Metadata } from "next";
import DreamFrameHero from "@/components/DreamFrameHero";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import GrowthServices from "@/components/GrowthServices";
import HomepageMotion from "@/components/HomepageMotion";
import { DeliveryModels, CostComparison, ConnectedIntroduction, IndustryShowcase, ArchitectureSection, WorkflowShowcase, ContentStrategy, ForecastSection, ImplementationTimeline, DeliverablesSection, SelectedWork, FAQSection, FinalCallToAction, ContactSection, HomepageFooter } from "@/components/HomepageSections";

export const metadata: Metadata = {
  title: "AI Automation Agency India | Managed AI Services — Pilot Astra AI",
  description: "Pilot Astra AI builds managed AI systems for B2B outreach, WhatsApp, CRM, websites, SEO/GEO and operations. Explore managed or on-site engineer options.",
  openGraph: { title: "Pilot Astra AI — Managed AI Automation for Business Growth", description: "Connected AI systems, human oversight and two scoped delivery models for business sales, marketing and operations.", images: ["/opengraph-image"] },
  alternates: process.env.PILOT_ASTRA_SITE_URL
    ? { canonical: new URL("/", process.env.PILOT_ASTRA_SITE_URL).href }
    : undefined,
};

export default function Home() {
  return (
    <>
      <main id="top">
        <DreamFrameHero />
        <div className="site-theme">
        <TechnologyMarquee />
        <GrowthServices />
        <ConnectedIntroduction />
        <DeliveryModels />
        <IndustryShowcase />
        <ArchitectureSection />
        <WorkflowShowcase />
        <ContentStrategy />
        <ForecastSection />
        <CostComparison />
        <ImplementationTimeline />
        <DeliverablesSection />
        <SelectedWork />
        <FAQSection />
        <FinalCallToAction />
        <ContactSection />
        </div>
      </main>
      <HomepageFooter />
      <HomepageMotion />
    </>
  );
}
