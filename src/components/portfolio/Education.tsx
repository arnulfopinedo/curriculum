import { motion } from "framer-motion";
import { Award, GraduationCap, BookCheck, Sparkles, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const degrees = [
  {
    icon: Award,
    title: "Maestría en Sistemas Computacionales",
    school: "Instituto Tecnológico de la Laguna",
    period: "2015 — 2018",
  },
  {
    icon: GraduationCap,
    title: "Ingeniería en Sistemas Computacionales",
    school: "Instituto Tecnológico Superior de Lerdo",
    period: "2002 — 2007",
  },
];

const courses = [
  {
    icon: Sparkles,
    title: "Dominio de Inteligencia Artificial",
    school: "Coursiv",
    tags: ["Stable Diffusion", "DeepSeek", "Claude", "Gemini", "Jasper AI"],
    highlight: true,
  },
  {
    icon: BookCheck,
    title: "Desarrollador Full Stack Java",
    school: "EBAC",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid", "SASS", "Bootstrap", "JavaScript", "AJAX", "APIs", "Node.js", "TypeScript", "React", "Git", "GitHub"],
  },
  {
    icon: Database,
    title: "SQL Server 2005",
    school: "NIIT",
    tags: ["SQL", "Bases de datos", "Consultas avanzadas"],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Formación" title="Académica y educación continua." description="Formación formal sólida y aprendizaje constante en tecnologías emergentes." />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Degrees timeline */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-muted-foreground">Formación académica</h3>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
              {degrees.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.625rem] top-1 size-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  <div className="glass-strong rounded-2xl p-6 shadow-card hover:shadow-glow transition-all">
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                        <d.icon className="size-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-primary mb-1">{d.period}</div>
                        <h4 className="font-bold font-display text-lg leading-tight">{d.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{d.school}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-muted-foreground">Educación continua</h3>
            <div className="space-y-4">
              {courses.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl p-6 transition-all hover:-translate-y-1 ${c.highlight ? "glass-strong border-primary/40 shadow-glow" : "glass shadow-card"}`}
                >
                  {c.highlight && (
                    <span className="absolute -top-2 right-4 px-2.5 py-0.5 rounded-full bg-gradient-primary text-[10px] font-mono uppercase tracking-wider text-primary-foreground">
                      Nuevo
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                      <c.icon className="size-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold font-display text-lg leading-tight">{c.title}</h4>
                      <p className="text-sm text-muted-foreground">{c.school}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.tags.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-muted-foreground border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
