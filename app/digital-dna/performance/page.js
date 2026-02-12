import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const performanceCapabilities = [
  {
    title: "Real-World Behavior Capture",
    body: "Continuously monitors cycling, temperature, capacity fade, and thermal responses to build comprehensive performance profiles.",
  },
  {
    title: "Predictive Analytics Engine",
    body: "Forecasts state of health, remaining useful life, and degradation trajectories before visible failures occur.",
  },
  {
    title: "Safety Early-Warning System",
    body: "Detects subtle thermal and electrical signatures that precede safety events, enabling proactive mitigation.",
  },
  {
    title: "Closed-Loop Intelligence",
    body: "Connects performance data back to material genomics and manufacturing processes for continuous improvement.",
  },
  {
    title: "Digital Twin Simulation",
    body: "Creates virtual models of cells, modules, and packs for testing under various conditions without physical prototypes.",
  },
  {
    title: "Cross-Application Benchmarking",
    body: "Compares performance across chemistries, form factors, and use cases to accelerate innovation and reduce risk.",
  },
];

const keyBenefits = [
  { metric: "Earlier Risk Detection", detail: "Identify issues before they escalate" },
  { metric: "Extended Battery Life", detail: "Optimize for longevity and reliability" },
  { metric: "Reduced Field Failures", detail: "Predict and prevent performance drops" },
];

export default function BatteryPerformancePage() {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
            <PageHeader
                eyebrow="Battery Performance & Predictive Analytics"
                title="The Living Phenotype Engine"
                intro="Battery Performance & Predictive Analytics reveals the true behavior of batteries across their lifecycle. As the third pillar of Digital DNA™, this workstream captures performance in labs, diagnostics, vehicles, and real-world systems, transforming reactive monitoring into proactive intelligence."
            />

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Core Capabilities
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {performanceCapabilities.map((cap, index) => (
                        <div
                            key={cap.title}
                            className="rounded-xl card-border bg-panelDark/80 p-5 hover:border-accentCyan/50 transition"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accentCyan/20 border border-accentCyan/40 flex items-center justify-center">
                                    <span className="text-xs font-mono text-accentCyan">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-1">{cap.title}</h3>
                                    <p className="text-xs text-textSoft/75">{cap.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <div className="rounded-3xl card-border bg-panelDark/70 p-8">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
                        The Performance Intelligence Loop
                    </h2>
                    <div className="text-center mb-6">
                        <p className="text-sm text-textSoft/80 mb-4">
                            Digital DNA™ creates a continuous learning cycle: Materials → Manufacturing → Performance → Back to Materials
                        </p>
                        <div className="flex justify-center items-center space-x-4 text-xs text-textSoft/70">
                            <span className="px-3 py-1 rounded-full bg-accentTeal/20 text-accentTeal">Material Genomics</span>
                            <span className="text-accentCyan">→</span>
                            <span className="px-3 py-1 rounded-full bg-accentBlue/20 text-accentBlue">Manufacturing Intelligence</span>
                            <span className="text-accentCyan">→</span>
                            <span className="px-3 py-1 rounded-full bg-accentCyan/20 text-accentCyan">Performance Analytics</span>
                            <span className="text-accentCyan">→</span>
                            <span className="px-3 py-1 rounded-full bg-accentTeal/20 text-accentTeal">Continuous Improvement</span>
                        </div>
                    </div>
                    <p className="text-sm text-textSoft/80 text-center">
                        This closed-loop system transforms battery development from reactive to predictive, improving with every battery produced and deployed.
                    </p>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-6">
                    Key Benefits
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {keyBenefits.map((benefit) => (
                        <div
                            key={benefit.metric}
                            className="text-center p-6 rounded-2xl card-border bg-panelDark/80"
                        >
                            <div className="text-lg font-bold text-accentCyan mb-2">{benefit.metric.split(' ')[0]}</div>
                            <div className="text-sm font-semibold text-white mb-1">{benefit.metric}</div>
                            <div className="text-xs text-textSoft/70">{benefit.detail}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 text-center">
                <p className="text-sm text-textSoft/80 mb-6">
                    See the Battery Before It Fails. With Digital DNA™, performance is predicted, understood, and optimized in advance—not discovered after deployment.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-[11px]">
                    <Link
                        href="/contact"
                        className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
                    >
                        Explore Performance Intelligence
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
                    >
                        Talk to a Battery Expert
                    </Link>
                </div>
            </section>
        </div>
    );
}

