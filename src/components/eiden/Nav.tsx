import { motion } from "framer-motion";
import logo from "@/assets/eiden-logo.png.asset.json";
import icon from "@/assets/eiden-icon.png.asset.json";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src={icon.url} alt="EIDEN" className="h-9 w-9 invert opacity-90" />
          <span className="font-display text-xl text-beige tracking-tight hidden sm:block">
            EIDEN
            <span className="text-gold">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 font-label text-[11px] text-beige/80">
          <a href="#about" className="hover:text-gold transition-colors">À propos</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-gold transition-colors">Témoignages</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur px-5 py-2.5 font-head text-xs font-medium uppercase tracking-[0.18em] text-beige transition hover:bg-gold hover:text-forest"
        >
          Réserver
          <span className="inline-block transition group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  );
}

export { logo };
