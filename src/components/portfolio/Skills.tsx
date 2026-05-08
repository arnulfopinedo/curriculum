import { motion } from "framer-motion";
import { Code, Server, Network, Printer, Wifi, HardDrive, Monitor, Cable } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const webSkills = [
  { name: "HTML / CSS / SASS", level: 95 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 78 },
  { name: "WordPress / Shopify", level: 92 },
  { name: "Bootstrap / Tailwind", level: 90 },
  { name: "Git / GitHub", level: 85 },
  { name: "APIs / Axios", level: 82 },
];

const webStack = ["HTML", "CSS (SASS)", "Bootstrap", "PHP", "WordPress", "Mobirise", "Shopify", "Moodle", "GitHub", "JavaScript", "jQuery", "Axios", "Node", "TypeScript", "React", "Creación de páginas web", "Administración de hosting"];

const support = [
  { icon: HardDrive, title: "Armado y reparación", desc: "Equipos de cómputo y mantenimiento preventivo." },
  { icon: Server, title: "Instalación de UPS", desc: "Respaldo eléctrico y protección de equipos." },
  { icon: Cable, title: "Cableado estructurado", desc: "Redes LAN y diseño de infraestructura." },
  { icon: Wifi, title: "Redes inalámbricas", desc: "Access Points y configuración de cobertura." },
  { icon: Monitor, title: "DVR / CCTV", desc: "Configuración de videovigilancia y monitoreo." },
  { icon: Printer, title: "Impresoras y plotters", desc: "Multifuncionales, plotters y configuración." },
];

function Bar({ name, level, i }: { name: string; level: number; i: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
          className="h-full bg-gradient-primary rounded-full shadow-glow"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Habilidades técnicas" title="Stack completo: del código al cable." description="Desarrollo web moderno, infraestructura y soporte de extremo a extremo." />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Web dev */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Code className="size-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">Desarrollo Web</h3>
                <p className="text-sm text-muted-foreground">Frontend y backend</p>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {webStack.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-muted-foreground border border-white/5">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-3xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Network className="size-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">Soporte Técnico</h3>
                <p className="text-sm text-muted-foreground">Infraestructura, redes y hardware</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {support.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl p-4 bg-white/[0.03] border border-white/5 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
                >
                  <s.icon className="size-5 text-primary mb-2" />
                  <div className="text-sm font-semibold text-foreground">{s.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-xs text-muted-foreground">
              + TeamViewer · Smartboard · Proyectores · Multifuncionales
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
