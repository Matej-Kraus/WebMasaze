import { Check } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const benefits = [
  "Individuální přístup",
  "Klidné prostředí",
  "Zkušenosti",
  "Kvalitní techniky",
];

export function Benefits() {
  return (
    <section id="benefity" className="section-container">
      <SectionReveal>
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            Proč si vybrat nás
          </p>
          <h2 className="text-3xl md:text-4xl">Detaily, které vytvářejí skutečný rozdíl</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-5 md:grid-cols-2">
        {benefits.map((benefit) => (
          <SectionReveal key={benefit}>
            <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <span className="rounded-full bg-[var(--secondary)]/25 p-2 text-[var(--primary)]">
                <Check size={18} />
              </span>
              <p className="text-base font-medium">{benefit}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
