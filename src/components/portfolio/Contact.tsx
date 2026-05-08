import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Contacto" title="Trabajemos juntos." description="Estoy listo para aportar soluciones tecnológicas de alto impacto a tu empresa." />

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl space-y-3"
        >
          {[
            { icon: Mail, label: "Correo", value: "arnulfo.angel2017@gmail.com", href: "mailto:arnulfo.angel2017@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", value: "Conversemos por WhatsApp", href: "https://wa.me/528712510009" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/arnulfo-pinedo-ortíz-7451a6166/", href: "https://www.linkedin.com/in/arnulfo-pinedo-ort%C3%ADz-7451a6166/" },
            { icon: MapPin, label: "Ubicación", value: "Torreón Coahuila, México - Disponible remoto" },
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
      </div>
    </section>
  );
}
