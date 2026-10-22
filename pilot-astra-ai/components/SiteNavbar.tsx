import Image from "next/image";
import Link from "next/link";
import "./DreamFrameHero.css";

/** Shared markup; the homepage scroll region continues to own its theme variables. */
export default function SiteNavbar() {
  return <header className="dreamframe-nav">
    <Link prefetch={false} className="dreamframe-logo" href="/" aria-label="Pilot Astra AI home">
      <Image className="astra-brand-light" src="/brand/pilot-astra-light.svg" alt="Pilot Astra AI" width={110} height={44} priority />
      <Image className="astra-brand-dark" src="/brand/pilot-astra-dark.svg" alt="" aria-hidden="true" width={110} height={44} priority />
    </Link>
    <nav aria-label="Main navigation">
      <Link prefetch={false} href="/services">Services</Link>
      <Link prefetch={false} href="/#process">How We Work</Link>
      <Link prefetch={false} href="/work">Results</Link>
      <Link prefetch={false} href="/#contact">Contacts</Link>
      <Link prefetch={false} href="/#faq">FAQ</Link>
    </nav>
    <Link prefetch={false} className="dreamframe-contact" href="/#contact">Get in touch</Link>
  </header>;
}
