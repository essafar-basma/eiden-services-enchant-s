import icon from "@/assets/eiden-icon.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-forest text-beige/70 border-t border-beige/10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={icon.url} alt="EIDEN" className="h-8 w-8 invert opacity-80" />
          <div>
            <div className="font-display text-lg text-beige">EIDEN<span className="text-gold">.</span> Group</div>
            <div className="font-label text-[10px] text-beige/50">Architects of growth</div>
          </div>
        </div>
        <div className="font-label text-[11px] text-beige/50 text-center">
          © {new Date().getFullYear()} EIDEN Group · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
