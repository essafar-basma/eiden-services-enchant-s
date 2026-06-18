import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import icon from "@/assets/eiden-icon.png.asset.json";

const WORDS = ["Architectes.", "Stratèges.", "Bâtisseurs."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden hero-gradient grain text-beige"
    >
      {/* floating icon */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.img
          src={icon.url}
          alt=""
          aria-hidden
          initial={{ rotate: -8, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.08 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[80vmin] max-w-[820px]"
        />
      </motion.div>

      {/* radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-teal-lt/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 pt-40 md:pt-48 pb-24 min-h-screen flex flex-col justify-between">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 font-label text-gold text-xs"
        >
          <span className="h-px w-10 bg-gold" />
          EIDEN Group · Casablanca / Agadir
        </motion.div>

        {/* headline */}
        <div className="mt-10 md:mt-0">
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-balance">
            {["Nous", "ne", "vendons", "pas", "des", "services.", ""].map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="italic text-gold inline-block"
            >
              Nous construisons des architectures.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-8 max-w-xl text-beige/75 text-lg leading-relaxed text-pretty"
          >
            Du premier diagnostic à la transformation complète — six disciplines, une seule
            architecture conçue pour faire de votre croissance une <em className="text-gold not-italic">conséquence</em>, pas un objectif.
          </motion.p>
        </div>

        {/* CTAs + ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-head text-sm font-semibold uppercase tracking-[0.18em] text-forest transition hover:bg-beige"
            >
              Réserver un diagnostic
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-label text-beige text-xs hover:text-gold transition-colors"
            >
              Voir les six disciplines
            </a>
          </div>

          <div className="flex items-center gap-3 font-label text-[11px] text-beige/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Disponible pour 3 nouveaux engagements · 2026
          </div>
        </motion.div>
      </div>

      {/* bottom marquee */}
      <div className="relative z-10 border-t border-beige/10 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-5 font-display text-2xl md:text-3xl text-beige/40 italic">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center">
              {WORDS.concat(WORDS, WORDS).map((w, i) => (
                <span key={i} className="mx-8 flex items-center gap-8">
                  {w}
                  <span className="text-gold not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
