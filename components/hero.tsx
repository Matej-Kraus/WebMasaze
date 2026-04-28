"use client";

import { motion } from "framer-motion";

export function Hero({ onBookingOpen }: { onBookingOpen: () => void }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(20,16,12,0.62), rgba(20,16,12,0.3)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="section-container relative min-h-[74vh] py-28">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 inline-block rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-stone-100 backdrop-blur-md">
            Masáže Eva Koldovská
          </p>
          <h1 className="text-4xl leading-tight text-white md:text-6xl">
            Dopřejte svému tělu i mysli zasloužený odpočinek
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-100/90 md:text-lg">
            Každá masáž je vždy individuálně upravena tak, aby přesně vyhovovala
            potřebám vašeho těla a přinesla dlouhodobou úlevu.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onBookingOpen}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:translate-y-[-2px] hover:bg-stone-100"
            >
              Objednat masáž
            </button>
            <a
              href="#sluzby"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Zobrazit služby
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
