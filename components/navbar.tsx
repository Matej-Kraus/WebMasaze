"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#o-nas", label: "O nás" },
  { href: "#benefity", label: "Benefity" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar({ onBookingOpen }: { onBookingOpen: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
          Masáže Poniklá
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Přepnout téma"
            onClick={toggleTheme}
            className="rounded-full border border-stone-300/60 p-2 text-[var(--text-muted)] transition hover:border-stone-400/80 hover:text-[var(--text-main)]"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={onBookingOpen}
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Objednat masáž
          </button>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-6 pb-4 text-sm md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-full border border-stone-300/70 px-3 py-1 text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
