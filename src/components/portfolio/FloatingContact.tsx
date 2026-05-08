import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <a
      href="https://wa.me/520000000000"
      target="_blank" rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 size-14 rounded-full bg-gradient-primary grid place-items-center shadow-glow hover:scale-110 active:scale-95 transition-transform"
    >
      <MessageCircle className="size-6 text-primary-foreground" />
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    </a>
  );
}
