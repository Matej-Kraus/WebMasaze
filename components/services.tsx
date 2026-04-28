import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  "Klasická masáž",
  "Masáž zad a šíje",
  "Masáž nohou a chodidel",
  "Masáž rukou",
  "Masáž hýždí",
  "Masáž zad, šíje a nohou",
  "Dornova metoda",
  "Měkké techniky",
  "Breussova masáž",
  "Indická masáž hlavy",
  "Baňkování",
];

export function Services() {
  return (
    <section id="sluzby" className="section-container">
      <SectionReveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            Služby
          </p>
          <h2 className="text-3xl md:text-4xl">Typy masáží a technik</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Výběr technik se vždy přizpůsobuje aktuálním potřebám klienta.
          </p>
        </div>
      </SectionReveal>
      <SectionReveal>
        <article className="glass-card rounded-3xl p-7 md:p-9">
          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200/70 bg-[var(--surface)]/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Ceník</p>
              <p className="mt-1 text-xl font-semibold text-[var(--primary)]">700 Kč / hodina</p>
            </div>
            <div className="rounded-2xl border border-stone-200/70 bg-[var(--surface)]/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Provozní doba</p>
              <p className="mt-1 text-sm font-medium">Po-So dle objednávek</p>
            </div>
            <div className="rounded-2xl border border-stone-200/70 bg-[var(--surface)]/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Dárkové poukazy</p>
              <p className="mt-1 text-sm font-medium">Libovolná hodnota</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-2 rounded-xl border border-stone-200/60 p-3">
                <CheckCircle2 size={16} className="mt-0.5 text-[var(--primary)]" />
                <p className="text-sm">{service}</p>
              </div>
            ))}
          </div>
        </article>
      </SectionReveal>
    </section>
  );
}
