import SiteNavbar from "./SiteNavbar";
import Link from "next/link";
import ScrollSequenceHero from "./ScrollSequenceHero";
import "./DreamFrameHero.css";

export default function DreamFrameHero() {
  return (
    <ScrollSequenceHero navigation={<SiteNavbar />}>
      <div className="dreamframe-hero">

        <div className="dreamframe-copy">
          <h1>
            <span>We help B2B companies</span>{" "}
            <span>build a stable lead flow through</span>{" "}
            <span>strategy, analytics, and</span>{" "}
            <span>performance marketing</span>
          </h1>
          <p>— focused on real business growth,<br />not vanity metrics</p>
        </div>
        <div className="dreamframe-wordmark" aria-label="Pilot Astra AI">PILOT ASTRA AI</div>
        <Link prefetch={false} className="dreamframe-audit" href="/#contact">Get a Growth Audit</Link>
      </div>
    </ScrollSequenceHero>
  );
}
