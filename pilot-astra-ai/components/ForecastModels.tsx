"use client";

import { useState } from "react";
import { contentForecast, outreachForecast } from "@/lib/planning.mjs";
const format = (number: number | undefined) => number === undefined ? "—" : number.toLocaleString("en-IN");

function Result({ label, value, primary = false }: { label: string; value?: number; primary?: boolean }) {
  return <div className={primary ? "pa-result pa-result-primary" : "pa-result"}><span>{label}</span><strong>{format(value)}</strong></div>;
}
export default function ForecastModels() {
  const [content, setContent] = useState({ posts: "5", profiles: "6", days: "30" });
  const [sdr, setSdr] = useState({ emails: "500", days: "22" });
  const publishing = contentForecast(content.posts, content.profiles, content.days);
  const outreach = outreachForecast(sdr.emails, sdr.days);
  return (
    <div className="pa-forecasts">
      <article className="pa-forecast-panel">
        <div className="pa-panel-top"><span>01 / CONTENT FORECAST</span><span className="pa-model-badge">PLANNING MODEL</span></div><h3>Consistency, quantified.</h3><p className="pa-muted">Explore publishing capacity across your active content profiles.</p>
        <div className="pa-model-inputs">
          <label htmlFor="posts">Posts / day / profile<input id="posts" type="number" min="0" step="1" required value={content.posts} onChange={e => setContent({ ...content, posts: e.target.value })} aria-describedby="content-model-note" /></label>
          <label htmlFor="profiles">Active profiles<input id="profiles" type="number" min="0" step="1" required value={content.profiles} onChange={e => setContent({ ...content, profiles: e.target.value })} aria-describedby="content-model-note" /></label>
          <label htmlFor="publishing-days">Publishing days / month<input id="publishing-days" type="number" min="0" max="31" step="1" required value={content.days} onChange={e => setContent({ ...content, days: e.target.value })} aria-describedby="content-model-note" /></label>
        </div>
        <div className="pa-model-results" aria-live="polite" aria-atomic="true"><Result label="Planned posts / month" value={publishing?.monthly} primary /><Result label="Planned posts / 6 months" value={publishing?.sixMonths} /><Result label="Illustrative views / month" value={publishing?.monthlyViews} /><Result label="Illustrative views / 6 months" value={publishing?.sixMonthViews} /></div>
        {!publishing && <p className="pa-form-error" role="status">Use non-negative whole numbers within a calculable range; days per month must be 0–31.</p>}
        <p className="pa-model-note" id="content-model-note">Capacity assumes the publishing days entered. View scenarios assume 10 views per post and six months of the same output. These are planning assumptions, not measured reach.</p>
      </article>
      <article className="pa-forecast-panel">
        <div className="pa-panel-top"><span>02 / AI SDR FORECAST</span><span className="pa-model-badge">PLANNING MODEL</span></div><h3>Make every assumption visible.</h3><p className="pa-muted">Model the work behind a repeatable outreach operation.</p>
        <div className="pa-model-inputs pa-model-inputs-two">
          <label htmlFor="emails">Outreach emails / day<input id="emails" type="number" min="0" step="1" required value={sdr.emails} onChange={e => setSdr({ ...sdr, emails: e.target.value })} aria-describedby="sdr-model-note" /></label>
          <label htmlFor="working-days">Working days / month<input id="working-days" type="number" min="0" max="31" step="1" required value={sdr.days} onChange={e => setSdr({ ...sdr, days: e.target.value })} aria-describedby="sdr-model-note" /></label>
        </div>
        <div className="pa-model-results" aria-live="polite" aria-atomic="true"><Result label="Planned emails / month" value={outreach?.monthly} primary /><Result label="Planned emails / 6 months" value={outreach?.sixMonths} /><Result label="Illustrative opens / 6 months" value={outreach?.opens} /><Result label="Illustrative replies / 6 months" value={outreach?.replies} /><Result label="Illustrative qualified prospects" value={outreach?.qualified} /><Result label="Illustrative customers" value={outreach?.customers} /></div>
        {!outreach && <p className="pa-form-error" role="status">Use non-negative whole numbers within a calculable range; days per month must be 0–31.</p>}
        <p className="pa-model-note" id="sdr-model-note">Six-month scenario: 45% opens and 4% replies both use total emails as their base. Qualification is 30% of replies; conversion is 12% of qualified prospects. Counts are rounded.</p>
      </article>
    </div>
  );
}
