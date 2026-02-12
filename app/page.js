import Link from "next/link";
import { HeroBadgeStrip } from "@/components/HeroBadgeStrip";

const pillarCards = [
  {
    title: "Material Genomics",
    body: "Deep chemical, structural, and electrochemical fingerprints for critical battery materials.",
    href: "/materials#material-genomics",
  },
  {
    title: "Genomic Thread™",
    body: "A continuous data lineage connecting mine, material, process, cell, pack, and field behavior.",
    href: "/digital-dna#genomic-thread",
  },
  {
    title: "Battery Genomic Intelligence",
    body: "Predictive models for safety, lifetime, and performance across EV and BESS applications.",
    href: "/digital-dna#battery-genomic-intel",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 lg:px-8 lg:pt-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accentTeal mb-3">
            Genomics-Based Battery Intelligence
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Battery Intelligence
            <br />
            Built from the Genome Up
          </h1>
          <p className="mt-5 max-w-xl text-sm text-textSoft/80 sm:text-base">
            Digital DNA™ connects more than twelve years of Material Genomics with manufacturing and
            field data to build chemistry- and form-factor–aware models that extend battery life,
            predict safety risks, and optimize total cost of ownership.
          </p>

          <HeroBadgeStrip />

          <div className="mt-7 flex flex-wrap gap-4 text-[11px]">
            <Link
              href="/digital-dna"
              className="rounded-full bg-accentCyan px-6 py-2 font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
            >
              Explore Digital DNA™
            </Link>
            <Link
              href="/materials"
              className="rounded-full border border-accentCyan/60 px-6 py-2 font-semibold uppercase tracking-wide text-accentCyan hover:bg-accentCyan/10 transition"
            >
              See Material Genomics
            </Link>
          </div>
        </div>

        <div className="relative h-80 rounded-3xl card-border bg-panelDark/80 overflow-hidden">
          {/* This block is visually acting like an image/graphic. If you later have actual artwork, you can replace this div with an <Image> component. */}
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
                Mine → Material → Electrode → Cell → Pack → EV / BESS. One continuous, searchable data
                spine powering safety, performance, and lifetime decisions.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[10px]">
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentCyan">↑ Lifetime</p>
                <p className="text-textSoft/70">Chemistry-aware degradation models</p>
              </div>
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentTeal">↓ Risk</p>
                <p className="text-textSoft/70">Fire prediction from material traits</p>
              </div>
              <div className="rounded-xl bg-bgDark/70 border border-white/10 px-3 py-2">
                <p className="font-mono text-accentBlue">↓ TCO</p>
                <p className="text-textSoft/70">Duty-cycle tuned optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Three Layers of Digital DNA™
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillarCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl card-border bg-panelDark/80 p-6 hover:border-accentCyan/70 hover:shadow-glow transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-accentCyan mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-textSoft/75">{card.body}</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-accentCyan/80">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Where Digital DNA™ Creates Impact
        </h2>
        <div className="grid gap-4 md:grid-cols-4 text-sm">
          {[
            "Gigafactories",
            "EV OEMs",
            "BESS OEMs",
            "Suppliers & Upstream Materials",
          ].map((label) => (
            <div
              key={label}
              className="rounded-xl card-border bg-panelDark/70 px-4 py-3 text-textSoft/80"
            >
              {label}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
