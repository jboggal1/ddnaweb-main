import { PageHeader } from "@/components/PageHeader";

const steps = [
  {
    title: "1. Initial Discussion & NDA",
    body: "Align on material type, intended applications, and data-sharing requirements under appropriate confidentiality.",
  },
  {
    title: "2. Data Package Submission",
    body: "Suppliers submit chemical analyses, synthesis routes, quality data, and ESG information for desktop genomic screening.",
  },
  {
    title: "3. Sample Shipment & Genomic Screening",
    body: "Representative samples are sent to qualified labs for Material Genomics evaluation and baseline electrochemical tests.",
  },
  {
    title: "4. Laboratory Validation & Reporting",
    body: "Digital DNA™ generates a first-round report on genomic stability, performance potential, and risk factors.",
  },
  {
    title: "5. Pouch-Cell & Integration Pathways",
    body: "Promising materials move into larger-format testing and integration discussions with relevant OEMs and gigafactories.",
  },
];

export default function SuppliersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="Suppliers"
        title="A Science-Backed Pathway to Qualification"
        intro="Digital DNA™ offers suppliers a clear, transparent, and science-based route to material qualification. Instead of marketing claims, you move forward on the strength of your genomic and performance data."
      />

      <section className="space-y-4 text-sm text-textSoft/80">
        <p>
          By participating in the Digital DNA™ Program, suppliers gain independent validation of
          their materials, along with access to OEM and gigafactory partners seeking genomically
          qualified sources. The process is structured to respect confidentiality while creating
          enough transparency for downstream stakeholders to make confident decisions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-4">
          Supplier Journey
        </h2>
        <ol className="relative border-l border-accentCyan/30 pl-6 space-y-8 text-sm text-textSoft/80">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[14px] flex h-6 w-6 items-center justify-center rounded-full border border-accentCyan/70 bg-bgDark text-[10px] font-semibold text-accentCyan shadow-glow">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-textSoft/60 mb-3">
          Ready to Begin?
        </h2>
        <p className="text-sm text-textSoft/80 mb-4">
          If you are a cathode, anode, electrolyte, additive, or specialty-material supplier and
          would like to explore qualification, you can reach out to our team directly via the
          contact form. A structured data template and logistics guidelines will be provided.
        </p>
        <a
          href="/contact"
          className="inline-flex rounded-full bg-accentCyan px-6 py-2 text-[11px] font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
        >
          Contact the Digital DNA™ Team
        </a>
      </section>
    </div>
  );
}
