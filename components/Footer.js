import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-bgDark/95 mt-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-textSoft/60 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {year} C4V Digital DNA™. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-accentCyan transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-accentCyan transition">
            Terms
          </Link>
          <span className="text-[10px] uppercase tracking-wide text-textSoft/40">
            Genomics-Based Battery Intelligence
          </span>
        </div>
      </div>
    </footer>
  );
}
