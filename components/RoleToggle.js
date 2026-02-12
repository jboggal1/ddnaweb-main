"use client";

import { useState } from "react";

const content = {
  ev: {
    title: "EV OEMs & Fleets",
    bullets: [
      "Range and power retention modeling for real-world duty cycles.",
      "Identification of chemistries more tolerant of frequent fast charging.",
      "Predictive fire-risk flags tied to material instability and gas formation.",
      "Warranty and residual-value modeling based on genomic behavior."
    ]
  },
  bess: {
    title: "BESS OEMs & Operators",
    bullets: [
      "Forecasts of capacity and efficiency over 10–20 years of operation.",
      "Genomic insight into chemistries best suited for site-specific duty profiles.",
      "Thermal behavior maps to inform enclosure, HVAC, and protection strategies.",
      "Risk scoring for extreme events based on upstream genomic traits."
    ]
  }
};

export function RoleToggle() {
  const [mode, setMode] = useState("ev");
  const active = content[mode];

  return (
    <div className="rounded-2xl card-border bg-panelDark/80 p-6">
      <div className="inline-flex rounded-full bg-bgDark/80 border border-white/10 p-1 text-[11px] mb-4">
        <button
          type="button"
          onClick={() => setMode("ev")}
          className={
            "px-3 py-1 rounded-full transition " +
            (mode === "ev"
              ? "bg-accentCyan text-bgDark font-semibold"
              : "text-textSoft/70 hover:text-accentCyan")
          }
        >
          EV
        </button>
        <button
          type="button"
          onClick={() => setMode("bess")}
          className={
            "px-3 py-1 rounded-full transition " +
            (mode === "bess"
              ? "bg-accentCyan text-bgDark font-semibold"
              : "text-textSoft/70 hover:text-accentCyan")
          }
        >
          BESS
        </button>
      </div>

      <h3 className="text-sm font-semibold text-white mb-2">{active.title}</h3>
      <ul className="list-disc pl-5 text-sm text-textSoft/80 space-y-1">
        {active.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
