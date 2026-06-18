import { motion } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  {
    n: "01",
    t: "Audit & Diagnostic",
    d: "Nous cartographions chaque faille, chaque fuite, chaque levier négligé — et vous montrons exactement où agir en premier.",
    tags: ["Architecture KPI", "Analyse revenus", "Cartographie des écarts"],
  },
  {
    n: "02",
    t: "Architecture Stratégique",
    d: "Pas un conseil. Un plan d'architecte. Nous construisons le cadre stratégique dans lequel toutes vos décisions s'inscrivent.",
    tags: ["Positionnement marché", "Feuille de route", "Cadres de décision"],
  },
  {
    n: "03",
    t: "Optimisation Opérationnelle",
    d: "Nous éliminons le gaspillage, automatisons le répétitif, et installons les systèmes qui font scaler sans épuiser vos équipes.",
    tags: ["Processus", "Automatisation", "Qualité"],
  },
  {
    n: "04",
    t: "Technologie & IA",
    d: "Nous identifions où la technologie crée un vrai levier — puis nous la déployons avec précision. Une opération plus intelligente, comprise par vos équipes.",
    tags: ["Workflows IA", "Intégration", "Stack d'automatisation"],
  },
  {
    n: "05",
    t: "Marketing & Croissance",
    d: "Nous construisons le moteur de croissance complet — positionnement, contenu, campagnes — relié à des résultats que votre DAF peut lire.",
    tags: ["Positionnement", "Performance", "Architecture éditoriale"],
  },
  {
    n: "06",
    t: "Lead Gen & Revenue Ops",
    d: "Nous concevons les systèmes qui remplissent votre funnel, convertissent les prospects et scalent ce qui marche.",
    tags: ["Lead generation", "Architecture CRM", "Revenue ops"],
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-forest text-beige py-28 md:py-40 overflow-hidden grain">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(var(--beige) 1px, transparent 1px), linear-gradient(90deg, var(--beige) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 font-label text-gold text-xs">
              <span className="h-px w-10 bg-gold" />
              Nos services · Six disciplines
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Ce que nous <span className="italic text-gold">architecturons.</span>
            </h2>
          </div>
          <p className="max-w-md text-beige/70 leading-relaxed text-pretty">
            Du premier diagnostic à la transformation complète — six engagements distincts, chacun conçu comme sa propre architecture.
          </p>
        </div>

        {/* Stack rows */}
        <div className="border-t border-beige/15">
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                onMouseEnter={() => setActive(i)}
                className="group relative border-b border-beige/15 cursor-pointer"
              >
                <motion.div
                  initial={false}
                  animate={{ backgroundColor: isActive ? "var(--teal)" : "rgba(0,0,0,0)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                />
                <div className="relative grid grid-cols-12 gap-6 items-center py-8 md:py-10 px-2 md:px-6">
                  <div className="col-span-2 md:col-span-1 font-label text-gold text-xs">{s.n}</div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-display text-2xl md:text-4xl leading-tight">{s.t}</h3>
                  </div>
                  <div className="col-span-12 md:col-span-5 text-beige/75 leading-relaxed text-sm md:text-base">
                    {s.d}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="font-label text-[10px] text-gold/90 border border-gold/30 rounded-full px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-label text-[11px] text-beige hover:text-gold transition-colors"
                    >
                      Discuter <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-28 relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-teal/40 to-forest p-10 md:p-16"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="font-label text-gold text-xs">Chaque engagement commence par un diagnostic</p>
              <h3 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-balance">
                Avant de prescrire, nous <span className="italic text-gold">comprenons.</span>
              </h3>
              <p className="mt-4 text-beige/75 max-w-xl text-pretty">
                Réservez une session de découverte et repartez avec une image plus claire de votre entreprise — qu'on travaille ensemble ensuite, ou non.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-head text-sm font-semibold uppercase tracking-[0.18em] text-forest hover:bg-beige transition"
              >
                Réserver
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
