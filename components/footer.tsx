export function Footer() {
  return (
    <footer className="border-t border-stone-200/70 py-8 pb-24 md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-[var(--text-muted)] md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Masáže Eva Koldovská. Všechna práva vyhrazena.</p>
        <p>Vytvořeno s důrazem na klid, kvalitu a detail.</p>
      </div>
    </footer>
  );
}
