import { PageHeader } from "@/components/PageHeader";

const benefits = [
  {
    title: "Higher Yield & Lower Scrap",
    body: "Align material genomic traits with process windows for mixing, coating, calendering, and formation to stabilize yield and reduce rejects.",
  },
  {
    title: "Faster Ramp-Up",
    body: "Use genomic insights and historical process data to define starting recipes for new lines and chemistries, reducing trial-and-error during commissioning.",
  },
  {
    title: "Predictive Safety in Production",
    body: "Detect combinations of material and process conditions that correlate with micro-cracks, residual moisture, or unstable SEI formation before they reach the field.",
  },
  {
    title: "End-to-End Traceability",
    body: "Track each electrode, cell, and pack back to material genomes, batches, process histories, and QC events for warranty and regulatory needs.",
  },
];

export default function GigafactoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="Gigafactories"
        title="Genomic Intelligence for GWh-Scale Manufacturing"
        intro="Digital DNA™ connects Material Genomics with real-time factory data to help gigafactories run as intelligent, self-improving systems. Instead of optimizing processes in isolation, every decision is informed by how materials behave at the atomic level."
      />

      <section className="space-y-4 text-sm text-textSoft/80">
        <p>
          Traditional gigafactory optimization focuses on OEE, throughput, and defect rates. Digital
          DNA™ adds a missing dimension: the intrinsic genomic tendencies of the materials themselves.
          When the factory understands which materials are sensitive to calendering pressure, drying
          conditions, or formation protocols, it can tune recipes proactively and avoid systemic
          problems.
        </p>
        <p>
          Digital DNA™ integrates with modern Digital Factory Operating Systems and MES environments,
          bringing genomic context into dashboards, alerts, and optimization workflows. The result is
          a plant that not only sees a deviation, but understands why certain materials respond to it
          the way they do.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Operational Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl card-border bg-panelDark/80 p-6">
              <h3 className="text-sm font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-textSoft/80">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Upstream Manufacturing</h3>
          <p className="text-sm text-textSoft/80">
            Cathode, anode, and electrolyte plants can feed Material Genomics directly into factory
            control strategies. For example, cathode batches with known particle-size distributions
            and lattice traits can trigger tailored milling, coating, and calendering profiles. This
            reduces instability when those materials reach cell factories.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Downstream Assembly</h3>
          <p className="text-sm text-textSoft/80">
            EV, bus, truck, and BESS pack lines can consume Digital DNA™ outputs to align module and
            pack designs with expected genomic behavior. Fields such as maximum recommended C-rates,
            preferred temperature envelopes, and degradation modes can inform design guidelines and
            software limits.
          </p>
        </div>
      </section>
    </div>
  );
}
