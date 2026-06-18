import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/eiden/Nav";
import { Hero } from "@/components/eiden/Hero";
import { About } from "@/components/eiden/About";
import { Services } from "@/components/eiden/Services";
import { Testimonials } from "@/components/eiden/Testimonials";
import { Contact } from "@/components/eiden/Contact";
import { Footer } from "@/components/eiden/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EIDEN Group — Services · L'architecture qui fait grandir votre entreprise" },
      {
        name: "description",
        content:
          "EIDEN Group conçoit le système qui fait grandir votre entreprise : audit, stratégie, opérations, IA, marketing et revenus. Réservez votre diagnostic.",
      },
      { property: "og:title", content: "EIDEN Group — Services" },
      {
        property: "og:description",
        content: "Six disciplines. Une architecture. Réservez votre diagnostic avec EIDEN Group.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-canvas text-forest font-body">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
