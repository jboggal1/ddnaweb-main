import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const genomicsLayers = [
  {
    title: "Material Fingerprinting Protocols",
    body: "Standardized measurements for chemistry, purity, morphology, and electrochemical properties.",
  },
  {
    title: "Supplier Genome Library",
    body: "A dynamic global database continuously learning from new samples and suppliers.",
  },
  {
    title: "Batch Variation Analytics",
    body: "Advanced pattern recognition that identifies variations humans or standard QC miss.",
  },
  {
    title: "Predictive AI Models",
    body: "Machine learning that forecasts material behavior in manufacturing and field performance.",
  },
];

const keyEnablers = [
  {
    title: "Rapid Supplier Qualification",
    body: "Benchmark new suppliers with scientific fingerprints, not paperwork.",
  },
  {
    title: "Predict High vs. Low Performing Batches",
    body: "Spot material outliers before they impact production lines.",
  },
  {
    title: "Sustainability Scoring",
    body: "Trace environmental and sourcing attributes through the entire supply chain.",
  },
  {
    title: "Material-Manufacturing Correlations",
    body: "Link chemical characteristics to factory behavior and process optimization.",
  },
  {
    title: "Material-Performance Correlations",
    body: "Connect raw material signatures to real-world battery performance outcomes.",
  },
];

const beneficiaries = [
  "Cathode & Anode Suppliers",
  "Mines & Refiners",
  "Chemical Companies",
  "Gigafactories",
  "Battery OEMs",
  "Research Labs",
  "Benchmarking Institutes",
  "Recycling Evaluators",
];

export default function SupplyChainGenomicsPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
            <PageHeader
                eyebrow="Supply Chain Genomics"
                title="The Material Genome of the Battery World"
                intro="Supply Chain Genomics is the foundation of Digital DNA™—a global intelligence layer that fingerprints every material, supplier, and chemistry used in the battery value chain. It reveals what materials are made of, where they came from, how they vary, and how those variations affect manufacturing and performance."
            />

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Why Material Variation Matters
                </h2>
                <p className="text-sm text-textSoft/80 mb-6">
                    Batteries don’t start in the factory—they start at the mine. Material variation is the hidden cause of performance issues that Supply Chain Genomics turns into predictive intelligence.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {["Early Capacity Fade", "Safety Risks", "Unexpected Scrap", "Line Instability", "Batch Inconsistency"].map((issue) => (
                        <div
                            key={issue}
                            className="text-center p-4 rounded-xl card-border bg-panelDark/80"
                        >
                            <div className="text-sm font-semibold text-accentCyan">{issue}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Key Enablers
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {keyEnablers.map((enabler, index) => (
                        <div
                            key={enabler.title}
                            className="rounded-xl card-border bg-panelDark/80 p-5 hover:border-accentCyan/50 transition"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accentTeal/20 border border-accentTeal/40 flex items-center justify-center">
                                    <span className="text-xs font-mono text-accentTeal">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-1">{enabler.title}</h3>
                                    <p className="text-xs text-textSoft/75">{enabler.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    The 4-Layer Scientific Infrastructure
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {genomicsLayers.map((layer, index) => (
                        <div
                            key={layer.title}
                            className="rounded-2xl card-border bg-panelDark/80 p-6"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-accentBlue/20 border border-accentBlue/40 flex items-center justify-center">
                                    <span className="text-sm font-mono text-accentBlue">{index + 1}</span>
                                </div>
                                <h3 className="text-base font-semibold text-white">{layer.title}</h3>
                            </div>
                            <p className="text-sm text-textSoft/75">{layer.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Who Benefits from Supply Chain Genomics
                </h2>
                <div className="grid gap-3 md:grid-cols-4">
                    {beneficiaries.map((beneficiary) => (
                        <div
                            key={beneficiary}
                            className="text-center p-4 rounded-xl card-border bg-panelDark/80 hover:border-accentCyan/50 transition"
                        >
                            <div className="text-sm font-semibold text-accentCyan">{beneficiary}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 text-center">
                <p className="text-sm text-textSoft/80 mb-6">
                    Ready to See Your Material Genome? Digital DNA™ turns raw materials into actionable intelligence.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-[11px]">
                    <Link
                        href="/contact"
                        className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
                    >
                        Request Material Profiling
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
                    >
                        Talk to an Expert
                    </Link>
                </div>
            </section>
        </div>
    );
}