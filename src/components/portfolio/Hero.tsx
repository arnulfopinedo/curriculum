import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";
import cvPdf from "@/assets/cv-arnulfo-pinedo.pdf?url";

const titles = [
  "Maestro en Sistemas Computacionales",
];

function useTyping(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const techs = ["React", "TypeScript", "Node.js", "WordPress", "Shopify", "SQL", "Redes", "IA"];

export function Hero() {
  const typed = useTyping(titles);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-20 -left-20 size-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevas oportunidades
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Arnulfo <br />
            <span className="text-gradient-primary">Pinedo Ortíz</span>
          </h1>
          <div className="mt-6 text-xl sm:text-2xl text-muted-foreground font-mono min-h-[2.5rem]">
            <span className="cursor-blink">{typed}</span>
          </div>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            <Sparkles className="inline size-4 text-primary mr-1" />
            Profesional en Tecnologías de la Información con más de <span className="text-foreground font-medium">15 años de experiencia</span> en soporte técnico, desarrollo web, administración de sistemas y gestión académica. Especialista en mantenimiento preventivo y correctivo, desarrollo de aplicaciones web, infraestructura de redes y atención a usuarios. Capacidad comprobada para coordinar equipos y resolver problemas críticos en entornos productivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] active:scale-95 transition-transform">
              <Mail className="size-4" /> Contactar
            </a>
            <a href={cvPdf} download="CV-Arnulfo-Pinedo.pdf" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/10 font-medium transition-all">
              <Download className="size-4" /> Descargar CV
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-30 blur-2xl animate-float" />
            <div className="relative glass-strong rounded-[2rem] p-3 shadow-elegant glow-ring">
              <img
                src={profile}
                alt="Arnulfo Pinedo Ortíz - Ingeniero en Sistemas"
                width={768} height={960}
                className="w-72 sm:w-80 lg:w-full max-w-sm aspect-[4/5] object-cover rounded-[1.5rem]"
              />
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-card">
                <div className="text-2xl font-bold text-gradient-primary">15+</div>
                <div className="text-xs text-muted-foreground">Años en TI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
