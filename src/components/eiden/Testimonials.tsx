import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    q: "EIDEN n'a pas livré un deck — ils ont livré un système qui tourne sans eux. Six mois plus tard, l'opération scale toujours sur la même architecture.",
    n: "Yassine B.", r: "CEO · Hospitalité, Agadir", c: "bg-forest text-canvas",
  },
  {
    q: "Personne n'a regardé notre business avec cette rigueur. Le diagnostic seul a payé l'engagement entier.",
    n: "Sophia M.", r: "Directrice générale · DMC", c: "bg-mondrian-yellow text-forest",
  },
  {
    q: "Marque, marketing et ops alignés sur une seule logique. Coût d'acquisition −38 % en un trimestre.",
    n: "Karim L.", r: "Fondateur · E-commerce", c: "bg-canvas text-forest border border-forest/15",
  },
];

const LOGOS = ["LUNJA", "DMC", "BO PASSAGE", "ATLAS LAB", "MAISON 21", "NORTH FOLIO"];

export function Testimonials({ onCommission }: { onCommission: () => void }) {
  return (
    <section id="testimonials" className="relative bg-beige py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16 pb-10 border-b-2 border-forest">
          <div className="md:col-span-3 font-mono text-[10px] text-forest/70">
            <div>SECTION 03</div>
            <div className="mt-1">TÉMOIGNAGES</div>
          </div>
          <h2 className="md:col-span-9 font-display font-light text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Les fondateurs qui nous ont fait <span className="font-display-wonk italic text-teal">confiance</span>
            <span className="text-mondrian-red">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              className={`md:col-span-4 rounded-2xl p-8 md:p-10 flex flex-col min-h-[340px] ${t.c}`}
            >
              <div className="font-display text-6xl leading-none opacity-30">"</div>
              <blockquote className="-mt-4 font-display text-xl md:text-2xl leading-snug text-pretty">
                {t.q}
              </blockquote>
              <figcaption className="mt-auto pt-8 flex items-center gap-3 border-t border-current/15">
                <div className="h-9 w-9 rounded-full bg-current/15 grid place-items-center font-display font-semibold">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-head text-sm font-semibold">{t.n}</div>
                  <div className="font-mono text-[10px] opacity-70">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* logo strip */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="mt-20 pt-10 border-t border-forest/15"
        >
          <p className="font-mono text-[10px] text-forest/60 mb-6">ARCHITECTURES BÂTIES POUR</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 font-display text-2xl md:text-3xl text-forest/40">
            {LOGOS.map((l) => <span key={l} className="hover:text-forest transition">{l}</span>)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <button
            onClick={onCommission}
            className="group inline-flex items-center gap-3 rounded-full bg-forest text-canvas px-7 py-4 font-head text-sm font-medium hover:bg-mondrian-red transition focus-ring"
          >
            Rejoindre cette liste
            <span className="grid place-items-center h-7 w-7 rounded-full bg-canvas/15 group-hover:bg-canvas/25 transition">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
