import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const suitable = ["Bolesti zad a šíje", "Svalové napětí po práci", "Regenerace po sportu", "Dlouhodobý stres a únava"];
const notSuitable = ["Akutní horečnaté stavy", "Čerstvá poranění a záněty", "Infekční onemocnění", "Nejasný zdravotní stav bez konzultace"];

export function Suitability() {
  return (
    <section className="section-container">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">Důležité informace</p>
          <h2 className="text-3xl md:text-4xl">Kdy je masáž vhodná a kdy raději počkat</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-6 md:grid-cols-2">
        <SectionReveal className="glass-card rounded-3xl p-7">
          <div className="mb-4 flex items-center gap-2 text-[var(--primary)]">
            <CheckCircle2 size={18} />
            <h3 className="text-xl">Masáž je vhodná</h3>
          </div>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {suitable.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </SectionReveal>
        <SectionReveal className="glass-card rounded-3xl p-7">
          <div className="mb-4 flex items-center gap-2 text-[var(--primary)]">
            <AlertTriangle size={18} />
            <h3 className="text-xl">Masáž není vhodná</h3>
          </div>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {notSuitable.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
