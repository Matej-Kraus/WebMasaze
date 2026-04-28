"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg rounded-3xl bg-[var(--surface)] p-8 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-main)]">
                  Rezervace masáže
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Jednoduchý formulář slouží jako ukázka. Po odeslání se nic neodesílá.
                </p>
              </div>
              <button
                type="button"
                aria-label="Zavřít modal"
                onClick={onClose}
                className="rounded-full p-2 text-[var(--text-muted)] transition hover:bg-black/5 hover:text-[var(--text-main)]"
              >
                <X size={18} />
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Jméno"
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
              />
              <textarea
                rows={4}
                placeholder="Preferovaný termín a poznámka"
                className="w-full rounded-xl border border-stone-300/70 bg-transparent px-4 py-3 text-sm outline-none ring-[var(--secondary)] transition focus:ring-2"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
                onClick={onClose}
              >
                Odeslat poptávku
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
