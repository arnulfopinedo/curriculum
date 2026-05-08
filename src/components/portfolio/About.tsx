import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Users, Lightbulb, Target, Rocket, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const traits = [
  { icon: Rocket, label: "Proactivo" },
  { icon: Target, label: "Orientado a resultados" },
  { icon: Lightbulb, label: "Creativo" },
  { icon: Users, label: "Líder colaborativo" },
  { icon: Wrench, label: "Resolutivo" },
  { icon: Brain, label: "Aprendizaje continuo" },
];

const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 25, suffix: "+", label: "Tecnologías dominadas" },
  { value: 8, suffix: "", label: "Áreas de experiencia" },
  { value: 50, suffix: "+", label: "Proyectos realizados" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1400, t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setVal(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Sobre mí" title="Tecnología, liderazgo y resultados." />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Soy <span className="text-foreground font-semibold">Maestro en Sistemas Computacionales</span> con más de una década combinando desarrollo web, infraestructura tecnológica y liderazgo de equipos académicos.
            </p>
            <p>
              He construido sitios web, gestionado redes, configurado servidores, atendido a usuarios y dirigido áreas académicas en instituciones educativas. Disfruto convertir problemas complejos en soluciones elegantes y mantenibles.
            </p>
            <p>
              Hoy trabajo con <span className="text-primary font-medium">React, TypeScript, Node.js, WordPress, Shopify</span> y herramientas de IA, siempre buscando aportar valor real al negocio y a las personas.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-3 flex items-center gap-2"
                >
                  <t.icon className="size-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl font-bold font-display text-gradient-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
