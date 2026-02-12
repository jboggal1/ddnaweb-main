import { PageHeader } from "@/components/PageHeader";

const categories = [
  {
    title: "Cathode Genomics",
    body: "Evaluation of lattice stability, transition-metal behavior, oxygen release tendencies, and long-term structural evolution under cycling.",
  },
  {
    title: "Anode Genomics",
    body: "Mapping SEI formation, lithiation homogeneity, impurity-driven side reactions, and microstructural stability for graphite, silicon blends, and advanced carbons.",
  },
  {
    title: "Electrolytes & Additives",
    body: "Understanding solvent systems, salt chemistry, and additive interactions that govern conductivity, interfacial stability, and thermal decomposition.",
  },
  {
    title: "Specialty Materials",
    body: "Binders, conductive additives, coatings, and separators evaluated for interface compatibility, mechanical robustness, and aging behavior.",
  },
];

export default function MaterialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="Supply Chain & Materials"
        title="Material Genomics Across the Battery Value Chain"
        intro="Digital DNA™ evaluates materials from mine to module using Material Genomics and Genomic Thread™ traceability. The goal is simple: understand how each material behaves today and how it will behave ten years from now."
      />

      <section id="material-genomics" className="space-y-4 text-sm text-textSoft/80">
        <p>
          Material Genomics captures the chemical, structural, and electrochemical traits that define
          how a material will behave under realistic manufacturing and field conditions. Rather than
          treating materials as static datasheet entries, Digital DNA™ treats them as dynamic systems
          whose behavior is governed by crystal structure, defects, surface chemistry, and reaction
          pathways.
        </p>
        <p>
          This approach makes it possible to detect instabilities and performance limits early—
          identifying, for example, cathodes prone to oxygen release, anodes susceptible to rapid SEI
          growth, or electrolyte systems with narrow thermal windows. That insight feeds directly
          into qualification, sourcing, and design decisions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Genomic Evaluation by Material Class
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-2xl card-border bg-panelDark/80 p-6">
              <h3 className="text-sm font-semibold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-textSoft/80">{cat.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Genomic Thread™ Across the Supply Chain
        </h2>
        <p className="text-sm text-textSoft/80 mb-4">
          The Genomic Thread™ binds supply-chain events into a single narrative. For each material
          and batch, Digital DNA™ records mining origin, refinement routes, synthesis conditions,
          batch identifiers, and downstream manufacturing usage. When combined with genomic data, this
          enables scientific traceability rather than simple logistics tracking.
        </p>
        <div className="rounded-3xl border border-accentCyan/30 bg-panelDark/70 p-6 text-xs text-textSoft/80">
          <p className="font-mono uppercase tracking-[0.25em] text-accentCyan mb-3">
            MINE → REFINEMENT → ACTIVE MATERIAL → ELECTRODE → CELL → PACK → FIELD
          </p>
          <p>
            At each stage, Digital DNA™ can attach performance metrics, process parameters, and
            quality signals back to the underlying material genome, enabling advanced root-cause
            analysis and predictive modeling.
          </p>
        </div>
      </section>
    </div>
  );
}
