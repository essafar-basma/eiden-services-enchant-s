import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { Nav } from "@/components/eiden/Nav";
import { Hero } from "@/components/eiden/Hero";
import { About } from "@/components/eiden/About";
import { Services } from "@/components/eiden/Services";
import { Testimonials } from "@/components/eiden/Testimonials";
import { Contact } from "@/components/eiden/Contact";
import { Footer } from "@/components/eiden/Footer";
import { CommissionModal } from "@/components/eiden/CommissionModal";
import { ChatWidget } from "@/components/eiden/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EIDEN Services — Architectes de croissance · Audit, Stratégie, Branding, Web" },
      { name: "description", content: "EIDEN Group conçoit l'architecture qui fait grandir votre entreprise. Huit disciplines, une commission : audit, stratégie, leads, SEO, CRM, branding, web." },
      { property: "og:title", content: "EIDEN Services — Architectes de croissance" },
      { property: "og:description", content: "Huit disciplines. Une architecture. Démarrez une commission." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>(undefined);

  const start = useCallback((s?: string) => { setService(s); setOpen(true); }, []);

  return (
    <main className="bg-canvas text-forest font-body">
      <Nav onCommission={() => start()} />
      <Hero onCommission={() => start()} />
      <About onCommission={() => start()} />
      <Services onCommission={start} />
      <Testimonials onCommission={() => start()} />
      <Contact onCommission={() => start()} />
      <Footer />
      <CommissionModal open={open} onClose={() => setOpen(false)} initialService={service} />
      <ChatWidget onCommission={() => start()} />
    </main>
  );
}
