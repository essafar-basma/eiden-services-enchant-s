import { motion } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  { n: "01", t: "Audit & Diagnostic", d: "Cartographie chirurgicale de votre opération. Nous identifions chaque fuite, chaque levier, chaque écart à fermer.", tags: ["KPIs", "Revenus", "Process"] },
  { n: "02", t: "Architecture Stratégique", d: "Le cadre maître dans lequel chaque décision s'inscrit. Positionnement, feuille de route, modèle économique.", tags: ["Vision", "Roadmap"] },
  { n: "03", t: "Optimisation Opérationnelle", d: "Nous éliminons les frictions, automatisons le répétitif et installons les systèmes qui scalent sans épuiser vos équipes.", tags: ["Process", "Automatisation"] },
  { n: "04", t: "Génération de Leads & Achat Média", d: "Funnels mesurés, créatifs testés, campagnes qui remplissent votre pipeline avec des leads que votre commerce peut signer.", tags: ["Meta", "Google", "TikTok"] },
  { n: "05", t: "Référencement Local & Digital", d: "Présence locale qui convertit, SEO technique et de contenu pour devenir l'évidence dans votre catégorie.", tags: ["SEO", "GMB"] },
  { n: "06", t: "CRM · Gestion de la Relation Client", d: "Architecture CRM, séquences, automations et reporting pour transformer chaque conversation en revenu prévisible.", tags: ["HubSpot", "Sequences"] },
  { n: "07", t: "Branding & Positionnement de Marque", d: "Identité visuelle et verbale. Pas un logo — une marque qui se reconnaît avant même d'être lue.", tags: ["Identité", "Voix", "Système"] },
  { n: "08", t: "Développement Web", d: "Sites éditoriaux rapides, plateformes sur-mesure, expériences qui chargent en moins d'une seconde et convertissent.", tags: ["Next", "Headless"] },
];

export function Services({ onCommission }: { onCommission: (service?: string) => void }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-canvas py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Editorial header — Swiss split */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 pb-10 border-b-2 border-forest">
          <div className="md:col-span-3 font-mono text-[10px] text-forest/70">
            <div>SECTION 02</div>
            <div className="mt-1">SERVICES — 08</div>
          </div>
          <h2 className="md:col-span-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-balance">
            Ce que nous <span className="font-display-wonk italic text-teal">architecturons</span>
            <span className="text-mondrian-red">.</span>
          </h2>
          <p className="md:col-span-3 font-display text-base md:text-lg text-forest/70 leading-snug text-pretty self-end">
            Huit engagements distincts. Chacun conçu comme sa propre architecture, tous reliés par la même logique.
          </p>
        </div>

        {/* Service grid — modular, Swiss */}
        <div className="grid md:grid-cols-12 gap-px bg-forest border-2 border-forest">
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            // Mondrian-style varied sizing
            const colSpan = [4, 4, 4, 6, 3, 3, 6, 6][i] ?? 4;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22,1,0.36,1] }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group relative bg-canvas p-8 md:p-10 min-h-[280px] flex flex-col cursor-pointer overflow-hidden transition-colors ${isActive ? "bg-cream" : ""}`}
                style={{ gridColumn: `span ${colSpan} / span ${colSpan}` }}
              >
                {/* number */}
                <div className="flex items-start justify-between">
                  <div className="font-mono text-xs text-forest/50">{s.n} / 08</div>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className="font-display text-2xl text-forest"
                  >+</motion.span>
                </div>

                <h3 className="mt-8 font-display font-light text-3xl md:text-4xl leading-[0.98] tracking-tight text-balance">
                  {s.t}
                </h3>

                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.7, height: "auto" }}
                  className="mt-4 text-forest/70 text-sm leading-relaxed text-pretty"
                >
                  {s.d}
                </motion.p>

                <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="font-mono text-[9px] text-forest/60 border border-forest/20 rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => onCommission(s.t)}
                    className="font-label text-[10px] text-forest hover:text-mondrian-red transition shrink-0"
                  >
                    Commander →
                  </button>
                </div>

                {/* hover accent */}
                <motion.div
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-mondrian-red"
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 items-center border-t-2 border-forest pt-10"
        >
          <p className="md:col-span-7 font-display text-2xl md:text-3xl leading-tight text-balance">
            Vous savez déjà ce dont vous avez besoin ? <span className="font-display-wonk italic text-teal">Démarrez une commission.</span>
          </p>
          <div className="md:col-span-5 md:text-right">
            <button
              onClick={() => onCommission()}
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-head text-sm font-medium text-canvas hover:bg-mondrian-red transition focus-ring"
            >
              Ouvrir le formulaire d'intake
              <span className="grid place-items-center h-7 w-7 rounded-full bg-canvas/15 transition group-hover:bg-canvas/25">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
