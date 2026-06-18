import { motion } from "framer-motion";
import icon from "@/assets/eiden-icon.png.asset.json";

const STATS = [
  { k: "06", l: "Disciplines\nintégrées" },
  { k: "24h", l: "Réponse\npersonnelle" },
  { k: "3", l: "Continents\nactifs" },
  { k: "100%", l: "Engagements\nmesurés" },
];

export function About() {
  return (
    <section id="about" className="relative bg-canvas py-28 md:py-40 overflow-hidden">
      <div className="absolute -right-40 top-20 w-[600px] h-[600px] rounded-full bg-beige/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 font-label text-teal text-xs">
              <span className="h-px w-10 bg-teal" />
              À propos · EIDEN Group
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02] text-forest">
              Quand la structure est juste, la <span className="italic text-teal">croissance</span> devient une conséquence.
            </h2>
            <img
              src={icon.url}
              alt=""
              aria-hidden
              className="mt-10 w-32 opacity-30"
              style={{ filter: "brightness(0.4) sepia(0.5)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 md:pt-10"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug text-forest/90 text-pretty">
              Nous avons fondé EIDEN sur une conviction : les entreprises qui durent ne sont pas les plus bruyantes — ce sont les <em className="text-teal">plus cohérentes</em>.
            </p>
            <p className="mt-6 text-forest/70 text-lg leading-relaxed text-pretty">
              Avant de produire un seul livrable, nous concevons le système qui le porte. Marque, marché, modèle commercial — tout se connecte. Ce qui en résulte n'est pas de l'activité, c'est une cohérence qui compose dans le temps.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="bg-canvas p-6"
                >
                  <div className="font-display text-4xl text-teal">{s.k}</div>
                  <div className="mt-2 font-label text-[10px] text-forest/60 whitespace-pre-line">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-3 font-head text-sm font-semibold uppercase tracking-[0.18em] text-forest border-b-2 border-teal pb-2 hover:gap-5 transition-all"
            >
              Parlons de votre architecture
              <span className="text-teal transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
