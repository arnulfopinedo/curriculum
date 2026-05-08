import { motion } from "framer-motion";
import { Globe, Languages, Plane, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function English() {
  const progress = 33; // Module 1 of 3
  return (
    <section id="english" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Idiomas" title="Preparándome para oportunidades globales." />

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden glass-strong rounded-3xl p-8 md:p-12 shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 size-72 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 size-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono mb-4">
                <Globe className="size-3.5 text-primary" /> En curso · Activo
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Aprendiendo <span className="text-gradient-primary">Inglés</span> para conectar con el mundo.
              </h3>
              <p className="mt-4 text-muted-foreground text-lg">
                Actualmente estudiando en <span className="text-foreground font-semibold">Instituto Inglés Individual</span>.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Languages className="size-4 text-primary" /> Módulo 1 de 3
              </div>

              <div className="mt-8">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Progreso del programa</span>
                  <span className="font-mono text-primary">{progress}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${progress}%` }} viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-primary rounded-full shadow-glow"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="glass rounded-lg p-2 border border-primary/40 text-foreground">Módulo 1</div>
                  <div className="glass rounded-lg p-2 text-muted-foreground">Módulo 2</div>
                  <div className="glass rounded-lg p-2 text-muted-foreground">Módulo 3</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-2xl p-5 flex items-start gap-3">
                <Plane className="size-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Preparándome para oportunidades globales.</div>
                  <div className="text-sm text-muted-foreground mt-1">Listo para colaboración remota internacional.</div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-3">
                <TrendingUp className="size-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">En constante crecimiento profesional.</div>
                  <div className="text-sm text-muted-foreground mt-1">Aprendizaje continuo como filosofía de carrera.</div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-3">
                <Globe className="size-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Comunicación técnica clara.</div>
                  <div className="text-sm text-muted-foreground mt-1">Documentación y colaboración con equipos diversos.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
