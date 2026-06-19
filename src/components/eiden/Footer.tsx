import icon from "@/assets/eiden-icon.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-canvas text-forest border-t-2 border-forest">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-md bg-forest">
            <img src={icon.url} alt="" className="h-7 w-7" style={{ filter: "brightness(0) invert(0.93) sepia(0.3) saturate(2)" }} />
          </span>
          <div>
            <div className="font-display text-xl">EIDEN<span className="text-mondrian-red">.</span> Group</div>
            <div className="font-mono text-[10px] text-forest/60">ARCHITECTES DE CROISSANCE</div>
          </div>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-6 font-mono text-[10px] text-forest/70">
          <div>
            <div className="text-forest mb-2">NAVIGATION</div>
            <a href="#about" className="block py-1 hover:text-forest">À propos</a>
            <a href="#services" className="block py-1 hover:text-forest">Services</a>
            <a href="#testimonials" className="block py-1 hover:text-forest">Témoignages</a>
            <a href="#contact" className="block py-1 hover:text-forest">Contact</a>
          </div>
          <div>
            <div className="text-forest mb-2">BUREAUX</div>
            <div>Casablanca</div>
            <div>Agadir</div>
            <div>Montréal</div>
          </div>
        </div>

        <div className="md:col-span-3 font-mono text-[10px] text-forest/60 md:text-right">
          <div>© {new Date().getFullYear()} EIDEN GROUP</div>
          <div className="mt-1">TOUS DROITS RÉSERVÉS</div>
          <div className="mt-3 inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            FIG. № 001 — ED. 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
