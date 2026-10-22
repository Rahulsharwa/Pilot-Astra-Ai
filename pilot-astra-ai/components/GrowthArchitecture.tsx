"use client";

import { useState } from "react";
import { architecture } from "@/lib/home-content";

export default function GrowthArchitecture() {
  const [selected, setSelected] = useState(0);
  const selectedModule = architecture[selected];
  return (
    <div className="pa-architecture">
      <div className="pa-system-map">
        <div className="pa-system-orbit" aria-hidden="true" /><div className="pa-system-orbit pa-system-orbit-outer" aria-hidden="true" />
        <div className="pa-system-center"><span className="pa-star" aria-hidden="true">✦</span><strong>PILOT ASTRA AI</strong><small>CONNECTED GROWTH ENGINE</small></div>
        <div className="pa-module-buttons" aria-label="Explore the growth architecture">
          {architecture.map((item, index) => <button type="button" key={item.name} aria-pressed={selected === index} aria-controls="architecture-detail" onClick={() => setSelected(index)}><span>{item.symbol}</span>{item.name}<i aria-hidden="true">↗</i></button>)}
        </div>
      </div>
      <div className="pa-system-detail" id="architecture-detail" aria-live="polite" aria-atomic="true">
        <p className="pa-kicker">{selectedModule.symbol} / {selectedModule.name}</p><h3>{selectedModule.caption}</h3><p>{selectedModule.detail}</p><div className="pa-handoff"><span>THE HANDOFF</span><p>{selectedModule.handoff}</p></div>
      </div>
    </div>
  );
}
