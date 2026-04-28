import { MapPin, MessageSquare, Phone } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export function Contact() {
  return (
    <section id="kontakt" className="section-container">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">Kontakt</p>
          <h2 className="text-3xl md:text-4xl">Rádi vám pomůžeme s výběrem termínu</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal className="glass-card rounded-3xl p-7">
          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 text-[var(--primary)]" size={18} />
              <div>
                <p className="font-semibold">Telefon</p>
                <a className="text-[var(--text-muted)] transition hover:text-[var(--text-main)]" href="tel:+420776884700">
                  +420 776 884 700
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="mt-0.5 text-[var(--primary)]" size={18} />
              <div>
                <p className="font-semibold">Poznámka</p>
                <p className="text-[var(--text-muted)]">
                  Pokud nezvedám telefon, právě masíruji. Ozvu se co nejdříve, případně
                  můžete poslat SMS.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-[var(--primary)]" size={18} />
              <div>
                <p className="font-semibold">Adresa</p>
                <p className="text-[var(--text-muted)]">Masáže Eva Koldovská, Poniklá 55</p>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-stone-300/60 bg-[var(--surface)]/70 p-4 text-sm">
            <p className="font-semibold">Ordinační hodiny</p>
            <p className="mt-1 text-[var(--text-muted)]">Po-So: dle objednávek</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="tel:+420776884700" className="primary-btn px-5 py-2.5">
              Zavolat
            </a>
            <a href="sms:+420776884700" className="secondary-btn px-5 py-2.5">
              Poslat SMS
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <iframe
              title="Mapa Poniklá"
              src="https://www.google.com/maps?q=Ponikl%C3%A1&output=embed"
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionReveal>
        <SectionReveal className="glass-card rounded-3xl p-7">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Jméno
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
                placeholder="vas@email.cz"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Zpráva
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
                placeholder="Napište preferovaný termín nebo dotaz"
              />
            </div>
            <button
              type="button"
              className="primary-btn"
            >
              Odeslat zprávu
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
