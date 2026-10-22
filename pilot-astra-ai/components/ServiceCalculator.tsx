"use client";
import { useState } from "react";
import { serviceScenario } from "@/lib/service-planning.mjs";
const number = (value: number) => value.toLocaleString("en-IN", { maximumFractionDigits: 1 });
const rupees = (value: number) => value.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export default function ServiceCalculator({ name, defaults, rates, disclaimer }: { name: string; defaults: number[]; rates: number[]; disclaimer: string }) {
  const [values, setValues] = useState(defaults.map(String));
  const result = serviceScenario(values, rates);
  const labels = ["Monthly visitors / leads", "Current conversion rate (%)", "Average deal / order value (₹)", "Monthly service budget (₹)"];
  return <section className="site-section site-calculator" id="roi-calculator" aria-labelledby="roi-title">
    <p className="site-eyebrow">ILLUSTRATIVE PLANNING / ROI CALCULATOR</p><h2 id="roi-title">Estimate what {name} could add</h2>
    <p>Change the starting inputs to explore a monthly scenario. These are planning assumptions, not actual results, a service quote, or a guarantee.</p>
    <div className="site-calculator-grid"><div className="site-calculator-inputs">{labels.map((label, i) => <label key={label} htmlFor={`scenario-${i}`}>{label}<input id={`scenario-${i}`} type="number" min={i === 3 ? "0.01" : "0"} max={i === 1 ? "100" : undefined} step={i === 0 ? "1" : "any"} value={values[i]} aria-invalid={!result} onChange={e => setValues(current => current.map((v, j) => j === i ? e.target.value : v))} /></label>)}</div>
      <div className="site-results" aria-live="polite" aria-atomic="true">{result ? <>{[["Baseline conversions / month", number(result.baseline)], ["Scenario conversions / month", number(result.conversions)], ["Additional conversions / month", number(result.added)], ["Illustrative added revenue / month", rupees(result.addedRevenue)], ["Added revenue less monthly budget", rupees(result.net)], ["Illustrative net ROI on monthly budget", `${number(result.roi)}%`]].map(([label, output]) => <div key={label}><span>{label}</span><strong>{output}</strong></div>)}</> : <p role="alert">Enter valid, non-negative values. Monthly volume must be a whole number, conversion rate must be 0–100%, and budget must be greater than zero. Use smaller values if the result exceeds safe precision.</p>}</div>
    </div>
    <p className="site-assumptions"><strong>Source assumptions:</strong> Traffic lift {rates[0]}% · Conversion lift {rates[1]}% · Quality lift {rates[2]}%. All are relative lifts.</p>
    <details className="site-formula"><summary>How this illustrative model works</summary><p>The source specifies inputs and lift rates without a calculation formula. This implementation treats quality lift as an additional relative change to conversion rate.</p><p>Baseline conversions = volume × conversion rate. Scenario conversions = volume × (1 + traffic lift) × min(100%, conversion rate × (1 + conversion lift) × (1 + quality lift)). Added revenue = additional conversions × average value. Net ROI = (added revenue − monthly budget) ÷ monthly budget × 100.</p><p>Values use unrounded calculations; displayed conversions are rounded to one decimal. Revenue is modelled gross revenue, not profit. Setup fees, third-party costs, margin and taxes are excluded. Budgets are source example inputs, not quoted prices.</p></details><p className="site-note">{disclaimer}</p>
  </section>;
}
