import { SectionReveal } from "@/components/section-reveal";

export function Pricing() {
  return (
    <section id="cenik" className="section-container pt-8">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">Ceník</p>
          <h2 className="text-3xl md:text-4xl">Jednoduchá a férová cena</h2>
        </div>
      </SectionReveal>
      <SectionReveal>
        <article className="glass-card rounded-3xl p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">Všechny masáže</p>
          <p className="mt-2 text-4xl font-semibold text-[var(--primary)]">700 Kč / hodina</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
            Všechny druhy masáží mají stejnou sazbu. K dispozici jsou také dárkové poukazy
            v libovolné hodnotě.
          </p>
        </article>
      </SectionReveal>
    </section>
  );
}
