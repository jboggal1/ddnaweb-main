import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="About C4V Digital"
        title="From Material Science to Genomic Intelligence"
        intro="C4V Digital is the intelligence arm of C4V, created to make battery decisions traceable, predictable, and scientifically grounded. We combine more than a decade of material-science research with modern data infrastructure to support gigafactories, OEMs, suppliers, and end users."
      />

      <section className="space-y-6 text-sm text-textSoft/80">
        <p>
          The Digital DNA™ platform was born from a simple observation: battery failures almost never
          start at the pack, and they rarely start at the manufacturing line. They start at the level
          of chemistry, impurities, and microstructure—long before a material ever reaches an
          electrode coating line. Digital DNA™ formalizes this upstream reality into a structured,
          genomics-based data system.
        </p>
        <p>
          Over more than twelve years, C4V built a library of Material Genomics spanning cathode
          chemistries, anode systems, electrolytes, additives, and specialty materials. Each entry
          captures chemical, structural, and electrochemical traits under realistic use conditions.
          This library is the foundation for the Genomic Thread™: a continuous data spine connecting
          mines, refinement routes, manufacturing processes, and real-world field deployments.
        </p>
        <p>
          Today, C4V Digital works with partners across multiple regions to bring this genomic
          intelligence into gigafactories, EV platforms, BESS projects, and upstream supply chains.
          Our goal is not just to analyze data, but to make data deeply meaningful by tying it back
          to first principles of material behavior.
        </p>
      </section>
    </div>
  );
}
