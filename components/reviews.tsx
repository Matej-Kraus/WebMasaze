import { Star } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const reviews = [
  {
    name: "Jana Vačková",
    meta: "Google recenze",
    time: "pravidelná klientka",
    text: "Masáž mohu jen a jen doporučit. Chodím pravidelně, po masáži se cítím o 20 let mladší. Příjemné prostředí, příjemná masérka. Nemám co vytknout. Ráda se tam vracím.",
  },
  {
    name: "Dagmar Danihelková",
    meta: "1 recenze",
    time: "před 2 lety",
    text: "Na masáž k Evičce jsem šla na doporučení kamarádky. Jsem moc ráda a chodím pravidelně. Příjemné prostředí, velice vřelý přístup. Masáž vždy přizpůsobí mým problémům a vždy pomůže. Masáž u Evičky mohu jen doporučit.",
  },
  {
    name: "Radka Jindřišková",
    meta: "2 recenze",
    time: "před 2 lety",
    text: "Evička je úžasná, masáž mi vždy pomůže od všech bolestí. Když si se mnou nevěděla rady, odkázala mě na další maséry, kteří se danou problematikou zabývají. Svým laskavým přístupem a prostředím mi pomáhá i po psychické stránce. Mohu jen doporučit.",
  },
];

export function Reviews() {
  return (
    <section id="recenze" className="section-container pt-8">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">Recenze</p>
          <h2 className="text-3xl md:text-4xl">Co o nás říkají klientky</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <SectionReveal key={review.name}>
            <article className="glass-card h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-1 text-[var(--primary)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                &bdquo;{review.text}&ldquo;
              </p>
              <div className="mt-5 border-t border-stone-200/70 pt-4">
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  {review.meta} - {review.time}
                </p>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
      <SectionReveal className="mt-6">
        <a
          href="https://www.google.com/search?q=Mas%C3%A1%C5%BEe+Relax+Ponikl%C3%A1+recenze"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          Zobrazit recenze na Google
        </a>
      </SectionReveal>
    </section>
  );
}
