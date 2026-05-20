import { motion } from "framer-motion";
import { Code, Network } from "lucide-react";
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

const webCategories: { title: string; items: string[] }[] = [
  {
    title: "Inteligencia Artificial",
    items: ["Claude", "Claude Code", "ChatGPT", "Lovable"],
  },
  {
    title: "Páginas Web",
    items: ["HTML", "CSS", "JavaScript", "AJAX", "APIs", "PHP", "Bootstrap", "Arquitectura CSS", "SASS", "Git & GitHub", "React", "Node.js", "TypeScript", "WordPress", "Mobirise", "Shopify", "Moodle", "jQuery", "Axios", "Creación de páginas web", "Administración de hosting"],
  },
  {
    title: "Bases de Datos",
    items: ["MySQL", "SQL Server"],
  },
  {
    title: "Infraestructura",
    items: ["Redes Cisco", "Cajeros ATM", "Soporte remoto", "Office"],
  },
];


const support = [
  "Armado, instalación y reparación de equipos de cómputo",
  "Instalación de UPS",
  "Configuración de touch screen",
  "Configuración de grabadoras DVR",
  "Configuración de TeamViewer (control remoto sobre equipos de cómputo)",
  "Instalación de software a cajeros automáticos",
  "Configuración de cajero automático (red, impresora, lectora, dispensador)",
  "Mantenimiento preventivo y correctivo a equipos de cómputo y cajeros automáticos",
  "Atención de tickets (computadoras, multifuncionales, internet, access point, usuarios)",
  "Instalación de smartboard",
  "Instalación de proyectores",
  "Instalación de red LAN (planeación, cableado, nodos, switch, módem, red inalámbrica)",
  "Instalación y configuración de impresoras, escáneres, multifuncionales y plotters",
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
            <div className="mt-2 space-y-5">
              {webCategories.map((cat) => (
                <div key={cat.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                    <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-primary font-mono drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                      {cat.title}
                    </h4>
                    <span className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-foreground border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
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
            <div className="flex flex-wrap gap-2">
              {support.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-foreground hover:border-primary/40 hover:bg-white/[0.06] transition-all"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
