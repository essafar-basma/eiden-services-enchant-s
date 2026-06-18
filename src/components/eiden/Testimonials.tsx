import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    q: "EIDEN n'a pas livré un deck — ils ont livré un système qui tourne sans eux. Six mois plus tard, notre opération scale toujours sur la même architecture.",
    n: "Yassine B.",
    r: "CEO · Hospitalité, Agadir",
  },
  {
    q: "On a travaillé avec des cabinets de conseil. Personne n'a regardé notre business avec cette rigueur. Le diagnostic seul a payé l'engagement entier.",
    n: "Sophia M.",
    r: "Directrice générale · DMC",
  },
  {
    q: "Ils ont aligné marque, marketing et ops sur une même logique. Notre coût d'acquisition a chuté de 38 % en un trimestre.",
    n: "Karim L.",
    r: "Fondateur · E-commerce",
  },
];

const LOGOS = ["LUNJA VILLAGE", "DMC", "BO PASSAGE", "ATLAS LAB", "MAISON 21", "NORTH FOLIO"];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-beige py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 font-label text-teal text-xs">
              <span className="h-px w-10 bg-teal" />
              Témoignages
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02] text-forest text-balance">
              Les fondateurs qui nous ont fait <span className="italic text-teal">confiance.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-canvas rounded-3xl p-8 md:p-10 border border-border hover:border-teal/40 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,87,82,0.35)]"
            >
              <div className="font-display text-7xl text-teal/15 leading-none">“</div>
              <blockquote className="-mt-6 font-display text-xl md:text-2xl leading-snug text-forest text-pretty">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal to-forest grid place-items-center text-beige font-head font-bold">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-head text-sm font-semibold text-forest">{t.n}</div>
                  <div className="font-label text-[10px] text-forest/60">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 pt-12 border-t border-forest/10"
        >
          <p className="text-center font-label text-[11px] text-forest/50">
            Architectures construites pour
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-5 font-display text-lg md:text-xl text-forest/40">
            {LOGOS.map((l) => (
              <span key={l} className="tracking-wide hover:text-forest transition-colors">{l}</span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-head text-sm font-semibold uppercase tracking-[0.18em] text-beige hover:bg-teal transition"
          >
            Rejoindre cette liste
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
