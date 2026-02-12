import { PageHeader } from "@/components/PageHeader";
import { RoleToggle } from "@/components/RoleToggle";

export default function OEMsEndUsersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="OEMs & End Users"
        title="Genomic Models for EV and BESS Platforms"
        intro="Digital DNA™ helps OEMs and operators extend battery life, improve performance, reduce total cost of ownership, and predict fire risk before it manifests in the field. The same genomic foundation supports both EV and BESS applications."
      />

      <section className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] items-start">
        <div className="space-y-6 text-sm text-textSoft/80">
          <p>
            For EV manufacturers and BESS OEMs, Digital DNA™ turns raw test data into genomically
            grounded insight. Chemistries, form factors, and usage profiles are no longer treated as
            generic—they are modeled according to how their genomes respond to stress, temperature,
            cycling patterns, and long calendar life.
          </p>
          <p>
            Fire prediction and life prediction draw from the same upstream reality: the underlying
            material genome. Digital DNA™ can flag combinations of material traits and duty cycles
            that are more likely to generate gas, trigger runaway reactions, or create excessive
            degradation under fast charging or high-load events.
          </p>
        </div>

        <RoleToggle />
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">End Users · EV Fleets</h3>
          <p className="text-sm text-textSoft/80">
            Fleet operators, logistics companies, and mobility providers can benefit from genomic
            insights without needing to manage models themselves. Digital DNA™ can support OEMs and
            platform providers in designing batteries that retain performance longer and reduce
            downtime, directly improving total cost of ownership for fleet customers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">End Users · Utilities & Developers</h3>
          <p className="text-sm text-textSoft/80">
            Utilities, IPPs, and project developers gain higher confidence that storage assets will
            meet contractual obligations. Genomics-tuned models reduce uncertainty in long-term
            degradation, making it easier to structure financing, warranties, and service agreements
            with less risk.
          </p>
        </div>
      </section>
    </div>
  );
}
