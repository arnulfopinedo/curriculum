import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { English } from "@/components/portfolio/English";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingContact } from "@/components/portfolio/FloatingContact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arnulfo Pinedo Ortíz · Ingeniero en Sistemas & Desarrollador Web" },
      { name: "description", content: "Maestro en Sistemas Computacionales. Desarrollador Web Full Stack, especialista en soporte técnico, infraestructura y liderazgo académico. Disponible para nuevas oportunidades." },
      { name: "keywords", content: "Arnulfo Pinedo, Ingeniero en Sistemas, Desarrollador Web, React Developer, Full Stack, Soporte Técnico, IT Support, Sistemas Computacionales, México" },
      { property: "og:title", content: "Arnulfo Pinedo Ortíz · Portafolio Profesional" },
      { property: "og:description", content: "Ingeniero y Maestro en Sistemas Computacionales. Desarrollo web, infraestructura y liderazgo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <English />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <Toaster />
    </div>
  );
}
