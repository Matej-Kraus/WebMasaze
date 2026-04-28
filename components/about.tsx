import { SectionReveal } from "@/components/section-reveal";

export function About() {
  return (
    <section id="o-nas" className="section-container pt-0">
      <SectionReveal className="glass-card grid gap-8 rounded-3xl p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">O nás</p>
          <h2 className="text-3xl md:text-4xl">Profesionální přístup, lidská péče</h2>
          <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
            Jmenuji se Jan Novotný a masážím se věnuji více než 10 let. Každému klientovi
            naslouchám a pečlivě volím techniky tak, aby terapie měla skutečný efekt.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Věřím v kombinaci odbornosti, respektu a příjemné atmosféry. Díky tomu se klienti
            vracejí nejen kvůli úlevě od bolesti, ale i kvůli pocitu klidu a důvěry.
          </p>
        </div>
        <div
          className="min-h-72 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
      </SectionReveal>
    </section>
  );
}
