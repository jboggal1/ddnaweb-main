"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/digital-dna", label: "Digital DNA" },
  { href: "/materials", label: "Materials" },
  { href: "/gigafactories", label: "Gigafactories" },
  { href: "/oems-end-users", label: "OEMs & End Users" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bgDark/85 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full bg-accentCyan/20 shadow-glow overflow-hidden">
            <div className="absolute inset-0 bg-[conic-gradient(from_120deg,rgba(0,224,255,0.9),rgba(38,255,171,0.4),rgba(74,155,255,0.9))] opacity-70 animate-scroll-diag-slow" />
          </div>
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-textSoft">
            C4V Digital DNA
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs text-textSoft/80 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "transition hover:text-accentCyan " +
                  (active ? "text-accentCyan" : "")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden text-textSoft/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-bgDark px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm text-textSoft/80">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "transition hover:text-accentCyan " +
                    (active ? "text-accentCyan" : "")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
