import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Briefcase,
    role: "Subdirector Académico",
    org: "Sector Educativo",
    bullets: [
      "Resolución de irregularidades ante SEP",
      "Coordinación académica integral",
      "Atención a alumnos y padres de familia",
      "Implementación de lineamientos institucionales",
      "Supervisión administrativa",
    ],
  },
  {
    icon: GraduationCap,
    role: "Coordinador Académico",
    org: "Institución Educativa",
    bullets: [
      "Distribución de cargas académicas",
      "Supervisión de programas de estudio",
      "Planeación académica estratégica",
      "Atención institucional",
    ],
  },
  {
    icon: BookOpen,
    role: "Profesor de Informática",
    org: "Educación Media Superior",
    bullets: [
      "Diseño digital",
      "Informática general",
      "Redes",
      "Ensamble y mantenimiento de equipos",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Trayectoria" title="Experiencia académica y administrativa." description="Liderazgo, gestión y enseñanza en el sector educativo." />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />

                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 ? "" : "md:flex-row-reverse"}`}>
                    <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                      <it.icon className="size-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">{it.org}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display">{it.role}</h3>
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <ul className="glass rounded-2xl p-6 space-y-2 text-muted-foreground text-sm">
                    {it.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2">
                        <span className={`size-1.5 rounded-full bg-primary mt-2 shrink-0 ${i % 2 ? "md:order-2 md:ml-2" : ""}`} />
                        <span className="flex-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
