import { PageHeader } from "@/components/PageHeader";

const posts = [
  {
    title: "Material Genomics and the Future of Battery Qualification",
    tag: "Materials",
    readTime: "7 min read",
  },
  {
    title: "Using Genomic Thread™ to Trace Field Failures Back to Chemistry",
    tag: "Safety",
    readTime: "6 min read",
  },
  {
    title: "EV Range Stability: Why Upstream Genomics Matters",
    tag: "EV",
    readTime: "5 min read",
  },
  {
    title: "BESS Lifetime Modeling with Genomics-Aware Inputs",
    tag: "BESS",
    readTime: "8 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-8 lg:pt-16">
      <PageHeader
        eyebrow="Insights"
        title="Research, Perspectives, and Applied Genomics"
        intro="The Insights section collects articles, briefs, and commentary on how genomics-based intelligence is reshaping safety, performance, and economics across the battery value chain."
      />

      <section className="mt-6">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl card-border bg-panelDark/80 p-5 hover:border-accentCyan/60 hover:shadow-glow transition"
            >
              <p className="text-[11px] uppercase tracking-wide text-accentCyan mb-1">
                {post.tag}
              </p>
              <h2 className="text-sm font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-[11px] text-textSoft/70">{post.readTime}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
