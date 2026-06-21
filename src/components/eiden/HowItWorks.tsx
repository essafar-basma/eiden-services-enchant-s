import { motion } from "framer-motion";

const STEPS = [
  { n: "01", t: "Vous réservez", d: "Brief court de 2 minutes. Pas de formulaire interminable, pas de pitch commercial.", tag: "2 min" },
  { n: "02", t: "Nous appelons", d: "Un associé EIDEN — pas un commercial — vous appelle sous 24 h. 30 minutes, focalisées.", tag: "24 h" },
  { n: "03", t: "Vous repartez avec une carte", d: "Diagnostic clair des fuites de votre activité. Avec ou sans engagement.", tag: "Gratuit" },
];

export function HowItWorks({ onCommission }: { onCommission: () => void }) {
  return (
    <section id="process" className="relative bg-forest text-canvas py-20 md:py-28 overflow-hidden grain">
      <div className="absolute inset-0 paper-grid opacity-[0.08]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 pb-8 border-b border-canvas/20">
          <div className="md:col-span-3 font-mono text-[10px] text-canvas/60">
            <div>SECTION 03</div>
            <div className="mt-1">PROCESS — 03 ÉTAPES</div>
          </div>
          <h2 className="md:col-span-9 font-display font-light text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Trois étapes. <span className="font-display-wonk italic text-gold">Zéro friction</span>
            <span className="text-mondrian-red">.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-canvas/15 p-7 md:p-8 hover:border-gold/60 transition"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl md:text-6xl text-gold leading-none">{s.n}</span>
                <span className="font-mono text-[10px] tracking-wider px-2 py-1 rounded-full border border-canvas/25 text-canvas/70">{s.tag}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl md:text-3xl leading-tight">{s.t}</h3>
              <p className="mt-3 text-sm text-canvas/70 leading-relaxed">{s.d}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <button onClick={onCommission} className="inline-flex items-center gap-3 rounded-full bg-canvas text-forest px-7 py-4 font-head text-sm font-medium hover:bg-gold transition focus-ring">
            Réserver mon appel gratuit
            <span className="grid place-items-center h-7 w-7 rounded-full bg-forest/10">→</span>
          </button>
          <div className="mt-3 font-mono text-[10px] text-canvas/50">Gratuit · 30 min · Sans engagement</div>
        </div>
      </div>
    </section>
  );
}
