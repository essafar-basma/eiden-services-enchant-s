import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact({ onCommission }: { onCommission: () => void }) {
  return (
    <section id="contact" className="relative bg-forest text-canvas py-24 md:py-36 overflow-hidden grain">
      <div className="absolute inset-0 paper-grid opacity-[0.06]" />
      <div className="absolute top-0 left-0 h-2 w-1/4 bg-mondrian-yellow" />
      <div className="absolute top-0 left-1/4 w-2 h-1/3 bg-mondrian-red" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16 pb-10 border-b-2 border-canvas/20">
          <div className="md:col-span-3 font-mono text-[10px] text-canvas/70">
            <div>SECTION 04</div>
            <div className="mt-1">CONTACT</div>
          </div>
          <h2 className="md:col-span-9 font-display font-light text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] tracking-[-0.03em] text-balance">
            Parlons de votre <span className="font-display-wonk italic text-gold">projet</span>
            <span className="text-mondrian-red">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-3">
            {[
              { I: Mail, label: "EMAIL", v: "contact@eiden-group.com", href: "mailto:contact@eiden-group.com" },
              { I: Phone, label: "MAROC", v: "+212 7 77 77 74 28", href: "tel:+212777777428" },
              { I: Phone, label: "CANADA", v: "+1 613 706 9011", href: "tel:+16137069011" },
              { I: MapPin, label: "BUREAU", v: "Agadir Bay · Technopole 1", href: "https://maps.app.goo.gl/e1PTQQJUb3kh7J48A" },
            ].map(({ I, label, v, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-canvas/15 p-5 hover:border-gold/60 hover:bg-canvas/5 transition"
              >
                <span className="grid place-items-center h-11 w-11 rounded-full bg-canvas/10 group-hover:bg-gold group-hover:text-forest transition">
                  <I className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-gold">{label}</div>
                  <div className="font-head text-base">{v}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Big CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="md:col-span-7 rounded-3xl bg-canvas text-forest p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-full w-2 bg-mondrian-red" />
            <div className="font-mono text-[10px] text-forest/60 mb-4">FORMULAIRE PRINCIPAL</div>
            <h3 className="font-display font-light text-4xl md:text-5xl leading-[0.95] tracking-tight text-balance">
              Ouvrez une <span className="font-display-wonk italic text-teal">commission</span>.
            </h3>
            <p className="mt-5 text-forest/70 max-w-md leading-relaxed">
              Trois étapes. Deux minutes. Une réponse personnelle d'un associé sous 24 heures ouvrables.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-forest/70">
              {["Choisissez vos disciplines","Définissez budget et horizon","Envoyez votre brief"].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-forest text-canvas font-mono text-[10px]">{i+1}</span>
                  {s}
                </li>
              ))}
            </ul>

            <button
              onClick={onCommission}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-forest text-canvas px-7 py-4 font-head text-sm font-medium hover:bg-mondrian-red transition focus-ring"
            >
              Démarrer maintenant
              <span className="grid place-items-center h-7 w-7 rounded-full bg-canvas/15 group-hover:bg-canvas/25 transition">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
