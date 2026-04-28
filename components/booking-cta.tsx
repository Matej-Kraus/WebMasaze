import { SectionReveal } from "@/components/section-reveal";

export function BookingCta({ onBookingOpen }: { onBookingOpen: () => void }) {
  return (
    <section className="section-container pt-8">
      <SectionReveal className="relative overflow-hidden rounded-3xl bg-[var(--primary)] px-8 py-16 text-white md:px-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3), transparent 45%), radial-gradient(circle at 85% 70%, rgba(255,255,255,0.25), transparent 42%)",
          }}
        />
        <div className="relative">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/80">Rezervace</p>
          <h2 className="max-w-2xl text-3xl md:text-5xl">Dopřejte si odpočinek ještě dnes</h2>
          <p className="mt-4 max-w-xl text-sm text-white/90 md:text-base">
            Vyberte si termín, který vám vyhovuje, a nechte starosti chvíli stranou.
          </p>
          <button
            type="button"
            onClick={onBookingOpen}
            className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:translate-y-[-1px] hover:bg-stone-100"
          >
            Rezervovat termín
          </button>
        </div>
      </SectionReveal>
    </section>
  );
}
