export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="mb-10">
      {eyebrow && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accentTeal mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
      {intro && (
        <p className="mt-4 max-w-3xl text-sm text-textSoft/80 sm:text-base">
          {intro}
        </p>
      )}
    </section>
  );
}
