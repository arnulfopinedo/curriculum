import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Formación" },
  { href: "#english", label: "Inglés" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${scrolled ? "glass-strong shadow-elegant" : ""}`}>
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Code2 className="size-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold tracking-tight">APO<span className="text-primary">.</span></span>
          </a>
          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all">
            Hablemos
          </a>
          <button onClick={() => setOpen(v => !v)} className="lg:hidden size-10 grid place-items-center rounded-xl glass" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-4 shadow-elegant"
            >
              <ul className="flex flex-col gap-1">
                {links.map(l => (
                  <li key={l.href}>
                    <a onClick={() => setOpen(false)} href={l.href} className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">{l.label}</a>
                  </li>
                ))}
                <li className="pt-2">
                  <a onClick={() => setOpen(false)} href="#contact" className="block text-center px-4 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium">Hablemos</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
