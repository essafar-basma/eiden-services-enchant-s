import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Brief — ${form.name}${form.company ? " · " + form.company : ""}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nEntreprise: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@eiden-group.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-forest-md text-beige py-28 md:py-40 overflow-hidden grain">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 font-label text-gold text-xs">
            <span className="h-px w-10 bg-gold" />
            Contact
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
            Parlons de votre <span className="italic text-gold">projet.</span>
          </h2>
          <p className="mt-6 text-beige/75 text-lg leading-relaxed text-pretty">
            Dites-nous ce que vous construisez, transformez ou tentez de résoudre. Un membre de l'équipe EIDEN lit chaque brief personnellement et répond sous 24 heures.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          {/* Info card */}
          <div className="md:col-span-5 space-y-6">
            {[
              { I: Mail, label: "Email", v: "contact@eiden-group.com", href: "mailto:contact@eiden-group.com" },
              { I: Phone, label: "Maroc", v: "07 77 77 74 28", href: "tel:+212777777428" },
              { I: Phone, label: "US / Canada", v: "+1 613 706 9011", href: "tel:+16137069011" },
              { I: MapPin, label: "Bureau", v: "Agadir Bay, Technopole 1\nBloc B, Agadir 80000", href: "https://maps.app.goo.gl/e1PTQQJUb3kh7J48A" },
            ].map(({ I, label, v, href }, i) => (
              <motion.a
                key={label + i}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-2xl border border-beige/10 bg-beige/5 backdrop-blur p-5 hover:border-gold/40 hover:bg-beige/10 transition"
              >
                <span className="grid place-items-center h-11 w-11 rounded-full bg-gold/15 text-gold shrink-0">
                  <I className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-label text-[10px] text-gold">{label}</div>
                  <div className="font-head text-base text-beige whitespace-pre-line">{v}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={submit}
            className="md:col-span-7 rounded-3xl bg-beige p-8 md:p-10 text-forest"
          >
            <h3 className="font-display text-3xl">Envoyez votre brief</h3>
            <p className="mt-2 text-forest/60 text-sm">Réponse personnelle sous 24h.</p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <Field label="Nom" v={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" type="email" v={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <div className="md:col-span-2">
                <Field label="Entreprise" v={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              </div>
              <div className="md:col-span-2">
                <Field
                  label="Message"
                  textarea
                  v={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-head text-sm font-semibold uppercase tracking-[0.18em] text-beige hover:bg-teal transition"
            >
              {sent ? "Message ouvert dans votre client" : "Envoyer le brief"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  v,
  onChange,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  v: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "peer w-full bg-transparent border-b border-forest/20 pt-6 pb-2 text-forest font-head text-base outline-none focus:border-teal transition";
  return (
    <label className="relative block">
      <span className="absolute left-0 top-2 font-label text-[10px] text-forest/60">{label}{required && " *"}</span>
      {textarea ? (
        <textarea
          required={required}
          rows={4}
          value={v}
          onChange={(e) => onChange(e.target.value)}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={v}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </label>
  );
}
