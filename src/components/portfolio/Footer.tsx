export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Arnulfo Pinedo Ortíz. Todos los derechos reservados.</div>
        <div className="font-mono text-xs">Hecho con React · TypeScript · Tailwind · Framer Motion</div>
      </div>
    </footer>
  );
}
