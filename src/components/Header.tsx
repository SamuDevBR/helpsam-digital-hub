import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/helpsam-logo.png";
import { whatsappLink } from "@/lib/contact";

interface HeaderProps {
  onRemoteAccess: () => void;
}

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços de TI", href: "#servicos" },
  { label: "Acesso Remoto", href: "#acesso-remoto", action: "remote" as const },
  { label: "IA e Chatbots", href: "#ia" },
  { label: "Criação de Sites", href: "#sites" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Header = ({ onRemoteAccess }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, item: typeof navItems[number]) => {
    if (item.action === "remote") {
      e.preventDefault();
      setOpen(false);
      onRemoteAccess();
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-8 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Logo da HELPSAM" className="h-10 lg:h-12 w-auto" />
        </a>

        <nav className="hidden xl:flex items-center gap-1" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-md whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-background border-t border-border shadow-card-hover">
          <nav className="section-container py-4 flex flex-col" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                className="py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-4 sm:hidden">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
