import { ClipboardCheck, MessageCircle, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const steps = [
  {
    title: "1. Objednání",
    text: "Vyberete termín telefonicky, e-mailem nebo přes formulář.",
    icon: ClipboardCheck,
  },
  {
    title: "2. Krátká konzultace",
    text: "Společně probereme vaše potřeby, zdravotní stav a cíl masáže.",
    icon: MessageCircle,
  },
  {
    title: "3. Samotná masáž",
    text: "Péče je vždy individuální, s důrazem na komfort a účinek.",
    icon: Sparkles,
  },
];

export function Process() {
  return (
    <section id="prubeh" className="section-container muted-section rounded-3xl">
      <SectionReveal>
        <div className="mb-8 max-w-2xl px-2">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            Jak probíhá návštěva
          </p>
          <h2 className="text-3xl md:text-4xl">Jednoduše, klidně a bez stresu</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }) => (
          <SectionReveal key={title}>
            <article className="glass-card h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-[var(--secondary)]/25 p-3 text-[var(--primary)]">
                <Icon size={20} />
              </div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{text}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
