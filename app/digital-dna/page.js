import Link from "next/link";

export default function DigitalDNAPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 lg:px-8 lg:pt-16">
      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Digital DNA for Modern Manufacturing
          </h1>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accentTeal mb-3">
            Revolutionize Your Factory Operations
          </p>
          <p className="mt-5 max-w-xl text-sm text-textSoft/80 sm:text-base">
            Digital DNA is the next-generation Manufacturing Execution System (MES) that connects machines, processes, and people—transforming raw data into actionable intelligence. Designed to be the Digital DNA of your manufacturing ecosystem, Digital DNA bridges the gap between shop-floor operations and enterprise systems, creating a seamless digital thread across production, quality, and performance.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
            >
              Download Overview
            </Link>
          </div>
        </div>

        <div className="relative h-80 rounded-3xl card-border bg-panelDark/80 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(0,224,255,0.35),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(38,255,171,0.3),transparent_55%)] animate-pulse-soft" />
          <div className="absolute -right-10 -bottom-20 h-64 w-64 rounded-full border border-accentCyan/30" />
          <div className="absolute -right-4 -bottom-10 h-40 w-40 rounded-full border border-accentTeal/40" />
          <div className="absolute left-6 top-10 h-32 w-32 rounded-full border border-accentBlue/30 animate-float-soft" />

          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-textSoft/60 mb-2">
                LIVE GENOMIC THREAD™
              </p>
              <p className="text-xs text-textSoft/90">
                Materials → Manufacturing → Performance. One continuous intelligence loop powering predictive battery manufacturing.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[10px]">
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentCyan">↑ Efficiency</p>
                <p className="text-textSoft/70">Real-time process optimization</p>
              </div>
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentTeal">↓ Waste</p>
                <p className="text-textSoft/70">Predictive quality control</p>
              </div>
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentBlue">↓ Downtime</p>
                <p className="text-textSoft/70">AI-driven maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          VISION
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
        <p className="text-sm text-textSoft/80 mb-6">
          A world where every battery is predictable, traceable, and intelligent. The battery industry is evolving faster than the digital infrastructure that supports it. Digital DNA™ bridges that gap by building the first global battery intelligence standard—from mining companies to Gigafactories to OEMs.
        </p>
        <p className="text-sm text-textSoft/80 mb-6">Our long-term vision includes:</p>
        <ul className="list-disc list-inside text-sm text-textSoft/80 space-y-2 mb-6">
          <li>A universal battery genome library</li>
          <li>The world's first cross-facility process intelligence network</li>
          <li>Real-time global benchmarking of materials & production</li>
          <li>Predictive safety identification early in manufacturing</li>
          <li>A living AI model that learns from every cell ever tested</li>
        </ul>
        <p className="text-sm text-textSoft/80 italic">Transforming how the world builds and understands batteries.</p>
      </section>

      {/* What We Do Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          WHAT WE DO
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-4">One Intelligence Engine for the Entire Battery Value Chain</h3>
        <p className="text-sm text-textSoft/80 mb-8">
          Digital DNA™ unifies material fingerprints, factory behavior, and battery performance data into the industry's first cross-domain intelligence model. Predict performance before production. Reduce scrap at its source. Drive safer, higher-yield batteries.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Supply Chain Genomics */}
          <div className="rounded-2xl card-border bg-panelDark/80 p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Supply Chain Genomics</h4>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accentTeal mb-3">The Material Genome of the Battery World</p>
            <ul className="text-sm text-textSoft/80 space-y-1 mb-4">
              <li>• Global material fingerprint library</li>
              <li>• Chemistry & supplier variation insights</li>
              <li>• Mine-to-machine traceability</li>
              <li>• Batch performance prediction</li>
            </ul>
            <Link href="/digital-dna/supply-chain" className="text-[11px] font-semibold uppercase tracking-wide text-accentCyan hover:text-accentCyan/80 transition">
              → Learn More
            </Link>
          </div>

          {/* Manufacturing Intelligence */}
          <div className="rounded-2xl card-border bg-panelDark/80 p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Manufacturing Intelligence</h4>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accentTeal mb-3">Our First Product: The Gigafactory Module</p>
            <p className="text-sm text-textSoft/80 mb-4">
              Powder/RM IN → Pack OUT intelligence. Real-time data, MES-grade traceability, inline quality predictions, and cross-vendor integration—purpose-built for high-volume Gigafactories.
            </p>
            <p className="text-sm text-textSoft/80 mb-4">Future Modules: Cathode plants • Anode plants • OEM lines • R&D & pilot labs • Recycling</p>
            <Link href="/digital-dna/manufacturing-intelligence" className="text-[11px] font-semibold uppercase tracking-wide text-accentCyan hover:text-accentCyan/80 transition">
              → Explore Manufacturing
            </Link>
          </div>

          {/* Battery Performance & Predictive Analytics */}
          <div className="rounded-2xl card-border bg-panelDark/80 p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Battery Performance & Predictive Analytics</h4>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accentTeal mb-3">The Living Phenotype Engine</p>
            <ul className="text-sm text-textSoft/80 space-y-1 mb-4">
              <li>• Battery health, SOH, and RUL tracking</li>
              <li>• Safety & thermal-risk early warnings</li>
              <li>• Digital twins of cells → packs</li>
              <li>• Material-to-performance correlation models</li>
            </ul>
            <Link href="/digital-dna/performance" className="text-[11px] font-semibold uppercase tracking-wide text-accentCyan hover:text-accentCyan/80 transition">
              → Discover Performance
            </Link>
          </div>
        </div>
      </section>

      {/* Why "Digital DNA"? Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Why "Digital DNA"?
        </h2>
        <p className="text-sm text-textSoft/80 mb-6">
          Just as DNA defines the blueprint of life, Digital DNA defines the digital blueprint of your factory. It captures every process, parameter, and performance metric, creating a living system that adapts, learns, and evolves with your operations.
        </p>
        <ul className="list-disc list-inside text-sm text-textSoft/80 space-y-2">
          <li>Unify data from machines, people, and systems</li>
          <li>Enable traceability from raw materials to finished goods</li>
          <li>Ensure continuous improvement through analytics and AI</li>
        </ul>
      </section>

      {/* Co-Creation & Customization Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Co-Creation & Customization
        </h2>
        <p className="text-sm text-textSoft/80">
          Digital DNA offers a co-creation model, allowing manufacturers to build digital workflows tailored to their products and processes. Our engineers work hand-in-hand with your team to ensure that the MES mirrors your production DNA—accurately, securely, and intelligently.
        </p>
      </section>

      {/* Business Impact Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Business Impact
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl card-border bg-panelDark/70 p-4 text-center">
            <p className="text-2xl font-bold text-accentCyan mb-2">25%</p>
            <p className="text-sm text-textSoft/80">improvement in Overall Equipment Effectiveness (OEE)</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4 text-center">
            <p className="text-2xl font-bold text-accentTeal mb-2">30%</p>
            <p className="text-sm text-textSoft/80">reduction in process downtime</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4 text-center">
            <p className="text-2xl font-bold text-accentBlue mb-2">40%</p>
            <p className="text-sm text-textSoft/80">faster root cause identification</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4 text-center">
            <p className="text-2xl font-bold text-white mb-2">100%</p>
            <p className="text-sm text-textSoft/80">digital traceability from material to shipment</p>
          </div>
        </div>
      </section>

      {/* How It All Connects Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          HOW IT ALL CONNECTS
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-4">The First End-to-End Battery Intelligence Loop</h3>
        <p className="text-sm text-textSoft/80 mb-6">
          Materials (WS1) → Manufacturing (WS2) → Performance (WS3) → AI Feedback Loop that continuously improves recipes, processes, and outcomes.
        </p>
        <p className="text-sm text-textSoft/80 italic">
          The result? A global "truth model" for predictive battery manufacturing.
        </p>
      </section>

      {/* Who We Serve Section */}
      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          WHO WE SERVE
        </h2>
        <p className="text-sm text-textSoft/80 mb-6">Purpose-built intelligence for:</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• Material suppliers & refiners</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• Gigafactories & battery OEMs</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• Automotive OEMs</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• Energy storage providers</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• R&D and pilot labs</p>
          </div>
          <div className="rounded-xl card-border bg-panelDark/70 p-4">
            <p className="text-sm text-textSoft/80">• Recycling and circular-economy partners</p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="mt-16 text-center">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          The Future of Manufacturing Is Here
        </h2>
        <p className="text-sm text-textSoft/80 mb-6 max-w-2xl mx-auto">
          With Digital DNA, your factory becomes smarter, faster, and more connected—a living digital organism that evolves with every data point. Experience Digital DNA. Transform your factory into a self-optimizing ecosystem.
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-[11px]">
          <Link
            href="/contact"
            className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
          >
            Contact Us for a Demo
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
          >
            Pilot Collaboration
          </Link>
        </div>
      </section>
    </div>
  );
}
