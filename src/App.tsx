import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { English } from "@/components/portfolio/English";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingContact } from "@/components/portfolio/FloatingContact";
import { Toaster } from "@/components/ui/sonner";
import { useAnalytics } from "@/hooks/use-analytics";

export default function App() {
  useAnalytics();
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
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <Toaster />
    </div>
  );
}
