"use client";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#recenze", label: "Recenze" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar({ onBookingOpen }: { onBookingOpen: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
          Masáže Eva Koldovská
        </a>
        <nav className="hidden items-center gap-6 md:flex">
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
          <a
            href="tel:+420776884700"
            className="hidden text-sm font-medium text-[var(--text-main)] lg:block"
          >
            +420 776 884 700
          </a>
          <button
            type="button"
            onClick={onBookingOpen}
            className="primary-btn px-4 py-2"
          >
            Objednat masáž
          </button>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pb-4 text-sm md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-stone-300/70 px-3 py-1.5 text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
