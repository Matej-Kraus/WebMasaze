import { HeartPulse, Sparkles, Activity, Leaf } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  {
    title: "Klasická masáž",
    description:
      "Tradiční technika pro uvolnění svalů, zlepšení prokrvení a celkové fyzické pohody.",
    price: "od 850 Kč / 60 min",
    icon: HeartPulse,
  },
  {
    title: "Sportovní masáž",
    description:
      "Intenzivnější péče zaměřená na aktivní klienty, regeneraci po sportu a prevenci přetížení.",
    price: "od 950 Kč / 60 min",
    icon: Activity,
  },
  {
    title: "Relaxační masáž",
    description:
      "Jemná, uklidňující masáž proti stresu, která navozuje hluboký klid a mentální rovnováhu.",
    price: "od 900 Kč / 60 min",
    icon: Sparkles,
  },
  {
    title: "Regenerační masáž",
    description:
      "Cílená péče pro unavené tělo s důrazem na obnovu vitality a dlouhodobou regeneraci.",
    price: "od 980 Kč / 60 min",
    icon: Leaf,
  },
];

export function Services() {
  return (
    <section id="sluzby" className="section-container">
      <SectionReveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            Služby
          </p>
          <h2 className="text-3xl md:text-4xl">Masáže přizpůsobené vašim potřebám</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ icon: Icon, title, description, price }) => (
          <SectionReveal key={title}>
            <article className="glass-card h-full rounded-3xl p-7 transition duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-2xl bg-[var(--secondary)]/20 p-3 text-[var(--primary)]">
                <Icon size={24} />
              </div>
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {description}
              </p>
              <p className="mt-5 text-sm font-semibold text-[var(--primary)]">{price}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
