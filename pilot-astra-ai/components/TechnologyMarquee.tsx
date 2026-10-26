import Image from "next/image";
import "./GrowthSections.css";

const rows = [
  [
    { name: "n8n", file: "n8n.svg", wordmark: true },
    { name: "Google", file: "google.png", wordmark: true },
    { name: "Meta", file: "meta.svg" },
    { name: "WhatsApp", file: "whatsapp.svg" },
    { name: "LinkedIn", file: "linkedin.svg" },
  ],
  [
    { name: "HubSpot", file: "hubspot.png" },
    { name: "Salesforce", file: "salesforce.ico" },
    { name: "WordPress", file: "wordpress.png" },
    { name: "Shopify", file: "shopify.png" },
    { name: "Telegram", file: "telegram.svg" },
  ],
];

export default function TechnologyMarquee() {
  return (
    <section className="astra-ecosystem" aria-labelledby="ecosystem-title">
      <div className="astra-section-inner astra-ecosystem-heading">
        <p className="astra-eyebrow"><span /> THE CONNECTED ECOSYSTEM</p>
        <h2 id="ecosystem-title">Your tools. <span>One accountable AI operating system.</span></h2>
        <p>Connect the platforms your team already uses into practical workflows — from the first enquiry to the next sales conversation.</p>
      </div>
      <div className="astra-marquees" tabIndex={0} aria-label="Technology ecosystem. Focus or hover to pause movement.">
        {rows.map((logos, row) => (
          <div className={`astra-marquee astra-marquee-${row}`} key={row}>
            <div className="astra-marquee-track">
              {[0, 1].map((copy) => (
                <ul className="astra-logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {logos.map((logo) => (
                    <li className="astra-logo" key={logo.name}>
                      <Image src={`/logos/${logo.file}`} alt={"wordmark" in logo ? logo.name : ""}
                        width={"wordmark" in logo ? 108 : 32} height={32} unoptimized
                        className={"wordmark" in logo ? "astra-logo-wordmark" : "astra-logo-icon"} />
                      {!("wordmark" in logo) && <span>{logo.name}</span>}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="astra-ecosystem-note">Platform names show ecosystem compatibility, not endorsements. Actual integrations depend on API access, permissions and agreed scope.</p>
    </section>
  );
}
