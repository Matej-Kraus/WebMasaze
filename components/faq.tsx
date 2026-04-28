import { SectionReveal } from "@/components/section-reveal";

const faqItems = [
  {
    question: "Jak dlouho předem je ideální se objednat?",
    answer: "Nejčastěji stačí 2-5 dní předem. Pokud je volno, lze i dříve.",
  },
  {
    question: "Co si mám vzít s sebou?",
    answer: "Stačí pohodlné oblečení. Vše ostatní je připraveno na místě.",
  },
  {
    question: "Jak probíhá první návštěva?",
    answer: "Krátce probereme váš stav, cíle a nastavíme vhodnou intenzitu masáže.",
  },
  {
    question: "Jaké jsou možnosti zrušení termínu?",
    answer: "Termín lze bez problému přesunout, ideálně alespoň 24 hodin předem.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-container pt-8">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">FAQ</p>
          <h2 className="text-3xl md:text-4xl">Nejčastější otázky před první návštěvou</h2>
        </div>
      </SectionReveal>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <SectionReveal key={item.question} className="glass-card rounded-2xl p-6">
            <h3 className="text-lg">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.answer}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
