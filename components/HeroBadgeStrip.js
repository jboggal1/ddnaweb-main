export function HeroBadgeStrip() {
  const items = [
    { label: "12+ years", sub: "Material Genomics" },
    { label: "Mine → EV/BESS", sub: "Genomic Thread™" },
    { label: "Safety & TCO", sub: "Battery Genomic Intelligence" }
  ];
  return (
    <div className="mt-6 flex flex-wrap gap-3 text-[10px]">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-full border border-white/10 bg-panelDark/80 px-3 py-2 flex flex-col justify-center"
        >
          <span className="font-semibold text-accentCyan uppercase tracking-wide">
            {item.label}
          </span>
          <span className="text-[9px] text-textSoft/70 uppercase tracking-wide">
            {item.sub}
          </span>
        </div>
      ))}
    </div>
  );
}
