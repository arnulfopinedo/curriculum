import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, title: "Panel Administrativo Empresarial", desc: "Dashboard interno con métricas en tiempo real, gestión de usuarios y reportes.", tags: ["React", "TypeScript", "Node.js"], category: "Web" },
  { img: p2, title: "Landing Page E-commerce", desc: "Sitio rápido y administrable con integración de catálogo y pasarela de pago.", tags: ["Shopify", "JavaScript", "UI/UX"], category: "Web" },
  { img: p3, title: "Sistema de Gestión Académica", desc: "Plataforma para coordinación, cargas académicas y atención a alumnos.", tags: ["WordPress", "PHP", "SQL"], category: "Sistemas" },
  { img: p4, title: "Infraestructura de Red Institucional", desc: "Diseño de cableado estructurado, AP, DVR y soporte a 100+ usuarios.", tags: ["Redes", "Soporte", "Hardware"], category: "Soporte" },
  { img: p1, title: "Automatización con IA", desc: "Flujos de trabajo automatizados con generación de contenido vía IA.", tags: ["Claude", "Gemini", "Node.js"], category: "Automatización" },
  { img: p2, title: "Sitio Corporativo Responsivo", desc: "Diseño moderno mobile-first con CMS administrable.", tags: ["WordPress", "CSS", "SEO"], category: "Web" },
];

const filters = ["Todos", "Web", "Sistemas", "Soporte", "Automatización"];

export function Projects() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Portafolio" title="Proyectos seleccionados." description="Una muestra representativa del tipo de soluciones que entrego." />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-strong rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img src={p.img} alt={p.title} loading="lazy" width={1200} height={800}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-strong text-[10px] font-mono uppercase tracking-wider">{p.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-medium hover:shadow-glow transition-all">
                      <ExternalLink className="size-3.5" /> Demo
                    </a>
                    <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-medium hover:bg-white/10 transition-all">
                      <Github className="size-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
