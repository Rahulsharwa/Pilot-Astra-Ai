import type { Metadata } from "next";
import DreamFrameHero from "@/components/DreamFrameHero";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import GrowthServices from "@/components/GrowthServices";
import HomepageMotion from "@/components/HomepageMotion";
import { ConnectedIntroduction, IndustryShowcase, ArchitectureSection, WorkflowShowcase, ContentStrategy, ForecastSection, ImplementationTimeline, DeliverablesSection, SelectedWork, FAQSection, FinalCallToAction, ContactSection, HomepageFooter } from "@/components/HomepageSections";

export const metadata: Metadata = {
  alternates: process.env.PILOT_ASTRA_SITE_URL
    ? { canonical: new URL("/", process.env.PILOT_ASTRA_SITE_URL).href }
    : undefined,
};

export default function Home() {
  return (
    <>
      <main id="top">
        <DreamFrameHero />
        <TechnologyMarquee />
        <GrowthServices />
        <ConnectedIntroduction />
        <IndustryShowcase />
        <ArchitectureSection />
        <WorkflowShowcase />
        <ContentStrategy />
        <ForecastSection />
        <ImplementationTimeline />
        <DeliverablesSection />
        <SelectedWork />
        <FAQSection />
        <FinalCallToAction />
        <ContactSection />
      </main>
      <HomepageFooter />
      <HomepageMotion />
    </>
  );
}
