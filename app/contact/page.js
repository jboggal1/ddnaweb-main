import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="Contact"
        title="Talk to the Digital DNA™ Team"
        intro="Whether you are a supplier, OEM, gigafactory operator, or end user, our team can help you understand how genomics-based intelligence fits into your roadmap."
      />

      <section className="grid gap-8 md:grid-cols-2 text-sm">
        <div>
          <h2 className="text-sm font-semibold text-white mb-2">How We Engage</h2>
          <p className="text-textSoft/80 mb-3">
            We typically begin with a short discovery discussion to understand your role in the value
            chain and your priorities around lifetime, safety, and cost of ownership. From there, we
            can outline the most relevant Digital DNA™ tools and data products for your team.
          </p>
          <p className="text-textSoft/80">
            If you prefer, you can also request a focused session on Material Genomics, Gigafactory
            integration, or EV/BESS lifetime modeling.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-textSoft/70 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-panelDark/70 px-3 py-2 text-sm text-white outline-none focus:border-accentCyan/70"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-textSoft/70 mb-1">
              Organization
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-panelDark/70 px-3 py-2 text-sm text-white outline-none focus:border-accentCyan/70"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-textSoft/70 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/10 bg-panelDark/70 px-3 py-2 text-sm text-white outline-none focus:border-accentCyan/70"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-textSoft/70 mb-1">
              Area of Interest
            </label>
            <select className="w-full rounded-lg border border-white/10 bg-panelDark/70 px-3 py-2 text-sm text-white outline-none focus:border-accentCyan/70">
              <option>Supplier / Material Qualification</option>
              <option>Gigafactory Integration</option>
              <option>EV OEM</option>
              <option>BESS / Grid</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-textSoft/70 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-panelDark/70 px-3 py-2 text-sm text-white outline-none focus:border-accentCyan/70"
            />
          </div>
          <button
            type="button"
            className="rounded-full bg-accentCyan px-6 py-2 text-[11px] font-semibold uppercase tracking-wide text-bgDark shadow-glow hover:bg-accentBlue transition"
          >
            Submit (non-functional demo)
          </button>
          <p className="text-[11px] text-textSoft/60">
            This demo form does not send data. Your development team can connect it to your preferred
            CRM or email system.
          </p>
        </form>
      </section>
    </div>
  );
}
