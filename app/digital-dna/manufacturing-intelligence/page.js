import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const keyBenefits = [
  { metric: "Higher Yield", detail: "Reduce scrap through predictive adjustments" },
  { metric: "Lower Costs", detail: "Optimize processes and energy usage" },
  { metric: "Faster Scaling", detail: "Accelerate production ramp-up with data-driven recipes" },
];

const targetAudiences = [
  "Gigafactories",
  "Battery OEMs",
  "Automotive Manufacturers",
  "Material Producers",
  "Research Organizations",
];

export default function ManufacturingIntelligencePage() {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
            <PageHeader
                eyebrow="Manufacturing Intelligence"
                title="The Digital Operating System for Battery Production"
                intro="Manufacturing Intelligence is the operational core of Digital DNA™. Formerly known as DFOS and now reimagined as part of the Digital DNA™ platform, this workstream transforms battery manufacturing into a predictive, self-learning system. It connects machines, materials, processes, and people into a single intelligence layer that continuously improves yield, quality, and efficiency."
            />

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Manufacturing Process Intelligence Flow
                </h2>
                <div className="rounded-3xl border border-accentBlue/30 bg-panelDark/70 p-6 text-xs text-textSoft/80">
                    <p className="font-mono uppercase tracking-[0.25em] text-accentBlue mb-3">
                        POWDER IN → ELECTRODE → CELL → MODULE → PACK → QUALITY OUT
                    </p>
                    <p>
                        At each stage, Manufacturing Intelligence captures real-time data, applies predictive analytics, and optimizes processes for maximum yield and quality.
                    </p>
                </div>
            </section>

            <section className="mt-16 grid gap-8 md:grid-cols-2">
                <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Upstream Integration</h3>
                    <p className="text-sm text-textSoft/80">
                        Manufacturing Intelligence connects directly with Supply Chain Genomics to understand how material variations impact production processes, enabling proactive recipe adjustments and quality predictions.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Downstream Optimization</h3>
                    <p className="text-sm text-textSoft/80">
                        Feeds performance data into Workstream 3 for comprehensive analytics, creating a closed-loop system that continuously improves battery design, manufacturing, and field reliability.
                    </p>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Key Operational Benefits
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {keyBenefits.map((benefit) => (
                        <div
                            key={benefit.metric}
                            className="text-center p-6 rounded-2xl card-border bg-panelDark/80"
                        >
                            <div className="text-lg font-bold text-accentBlue mb-2">{benefit.metric.split(' ')[0]}</div>
                            <div className="text-sm font-semibold text-white mb-1">{benefit.metric}</div>
                            <div className="text-xs text-textSoft/70">{benefit.detail}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Built for the Battery Ecosystem
                </h2>
                <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                    {targetAudiences.map((audience) => (
                        <div
                            key={audience}
                            className="text-center p-4 rounded-xl card-border bg-panelDark/80 hover:border-accentBlue/50 transition"
                        >
                            <div className="text-sm font-semibold text-accentBlue">{audience}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 text-center">
                <p className="text-sm text-textSoft/80 mb-6">
                    Build Smarter Factories with Digital DNA™. Manufacturing Intelligence turns battery production into a predictive, self-optimizing system—starting at the Gigafactory and expanding across the entire value chain.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-[11px]">
                    <Link
                        href="/contact"
                        className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
                    >
                        Explore the Gigafactory Module
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
                    >
                        Start a Pilot Deployment
                    </Link>
                </div>
            </section>
        </div>
    );
}