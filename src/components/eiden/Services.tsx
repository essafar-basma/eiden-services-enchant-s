import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import svcPhoto from "@/assets/service-photo-video.jpg";
import svcMarketing from "@/assets/service-marketing.jpg";
import svcConseil from "@/assets/service-conseil.jpg";
import svcLogiciels from "@/assets/service-logiciels.jpg";

const SERVICES = [
  { n: "01", t: "Photo & Vidéo", d: "Production visuelle éditoriale   photographie, films de marque, contenus sociaux calibrés pour convertir. L'image comme actif commercial, pas comme décoration.", img: svcPhoto },
  { n: "02", t: "Marketing & Acquisition", d: "Funnels mesurés, campagnes multi-canal, achat média et créatifs testés. Nous remplissons votre pipeline avec des leads que votre commerce peut réellement signer.", img: svcMarketing },
  { n: "03", t: "Conseil & Organisation", d: "Audit, architecture stratégique et mise en ordre opérationnelle. Nous transformons le désordre invisible en système clair, mesurable et duplicable.", img: svcConseil },
  { n: "04", t: "Logiciels propriétaires", d: "Nos outils internes, disponibles en abonnement léger   CRM, tableaux de bord, automations métier. La technologie qui fait tourner nos clients, mise à votre service.", img: svcLogiciels },
];

export function Services({ onCommission }: { onCommission: (service?: string) => void }) {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section id="services" className="relative bg-canvas py-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Editorial header   Swiss split */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 pb-10 border-b-2 border-forest">
          <div className="md:col-span-3 font-mono text-[10px] text-forest/70">
            <div>SECTION 02</div>
            <div className="mt-1">SERVICES   08</div>
          </div>
          <h2 className="md:col-span-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-balance">
            Là où votre activité <span className="font-display-wonk italic text-teal">se fissure</span>
            <span className="text-mondrian-red">.</span>
          </h2>
          <p className="md:col-span-3 font-display text-base md:text-lg text-forest/70 leading-snug text-pretty self-end">
            Huit disciplines. Une seule architecture. Chaque engagement conçu pour fermer une fuite précise   et tenir dans le temps.
          </p>
        </div>

        {/* Tabs strip   horizontally scrollable pills */}
        <div role="tablist" aria-label="Services" className="-mx-5 md:mx-0 mb-10">
          <div className="flex gap-2 overflow-x-auto px-5 md:px-0 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.n}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className="relative shrink-0 overflow-hidden rounded-full border border-forest/20 px-4 py-2.5 transition-colors focus-ring"
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-tab-bg"
                      className="absolute inset-0 bg-forest"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span
                    className={`relative z-10 inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] ${
                      isActive ? "text-canvas" : "text-forest/60 hover:text-forest"
                    }`}
                  >
                    <span className={isActive ? "text-gold" : "text-forest/35"}>{s.n}</span>
                    {s.t}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content   plate image + copy */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            <div className="relative h-100 overflow-hidden border border-forest/20 bg-cream">
              <img src={current.img} alt={current.t} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                <span className="rounded-full bg-forest/70 px-2.5 py-1 text-canvas backdrop-blur-sm">Pl. {current.n}</span>
                <span className="rounded-full bg-forest/70 px-2.5 py-1 text-canvas backdrop-blur-sm">Eiden Group</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-label text-[11px] text-teal">Service {current.n} / 08</div>

              <h3 className="mt-4 font-display font-light text-3xl md:text-5xl leading-[1.03] tracking-tight text-balance">
                {current.t}
              </h3>

              <p className="mt-6 text-forest/70 text-base leading-relaxed text-pretty">
                {current.d}
              </p>

              <ul className="mt-8 space-y-2.5">
                {["Appel découverte de 30 min, sans deck", "Réponse personnelle d'un associé sous 24 h", "Diagnostic clair   que vous nous engagiez ou non"].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-forest/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => onCommission(current.t)}
                  className="group inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 font-head text-sm font-medium text-canvas transition hover:bg-mondrian-red focus-ring"
                >
                  Réserver mon appel gratuit
                  <span className="grid h-6 w-6 rounded-full bg-canvas/15 transition group-hover:bg-canvas/25">→</span>
                </button>
                <button
                  onClick={() => setActive((active + 1) % SERVICES.length)}
                  className="inline-flex items-center rounded-full border border-forest/25 px-6 py-3.5 font-head text-sm font-medium text-forest transition hover:border-forest hover:bg-cream focus-ring"
                >
                  Service suivant
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 items-center border-t-2 border-forest pt-10"
        >
          <p className="md:col-span-7 font-display text-2xl md:text-3xl leading-tight text-balance">
            En 30 minutes, nous vous dirons exactement où votre activité perd de l'argent. <span className="font-display-wonk italic text-teal">Gratuitement.</span>
          </p>
          <div className="md:col-span-5 md:text-right">
            <button
              onClick={() => onCommission()}
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-head text-sm font-medium text-canvas hover:bg-mondrian-red transition focus-ring"
            >
              Réserver mon appel découverte
              <span className="grid place-items-center h-7 w-7 rounded-full bg-canvas/15 transition group-hover:bg-canvas/25">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}