"use client";

export function MobileStickyCta({ onBookingOpen }: { onBookingOpen: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200/70 bg-[var(--background)]/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a href="tel:+420776884700" className="secondary-btn w-full px-4 py-2.5 text-center">
          Zavolat
        </a>
        <button type="button" onClick={onBookingOpen} className="primary-btn w-full px-4 py-2.5">
          Objednat
        </button>
      </div>
    </div>
  );
}
