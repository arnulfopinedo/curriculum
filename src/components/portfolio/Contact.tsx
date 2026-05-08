import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, Send, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensaje enviado", { description: "Te responderé a la brevedad. ¡Gracias!" });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Contacto" title="Trabajemos juntos." description="Estoy listo para aportar soluciones tecnológicas de alto impacto a tu empresa." />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, label: "Correo", value: "arnulfo.pinedo@email.com", href: "mailto:arnulfo.pinedo@email.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "Conversemos por WhatsApp", href: "https://wa.me/520000000000" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/arnulfo-pinedo-ortíz-7451a6166/", href: "https://www.linkedin.com/in/arnulfo-pinedo-ort%C3%ADz-7451a6166/" },
              
              { icon: MapPin, label: "Ubicación", value: "México · Disponible remoto" },
            ].map(c => (
              <a key={c.label} href={c.href ?? "#"} className="flex items-center gap-4 glass-strong rounded-2xl p-4 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all">
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8 shadow-elegant space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Nombre</label>
                <input required name="name" className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Correo</label>
                <input required type="email" name="email" className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="tu@empresa.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Asunto</label>
              <input required name="subject" className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="Proyecto, oportunidad, consultoría…" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea required name="message" rows={5} className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none" placeholder="Cuéntame qué necesitas…" />
            </div>
            <button disabled={sending} type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.01] active:scale-95 disabled:opacity-60 transition-all">
              <Send className="size-4" /> {sending ? "Enviando…" : "Enviar mensaje"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
