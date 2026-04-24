import logo from "@/assets/helpsam-logo.png";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { EMAIL, whatsappLink } from "@/lib/contact";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços de TI", href: "#servicos" },
  { label: "Automações e Sistemas", href: "#automacoes" },
  { label: "Criação de Sites", href: "#sites" },
  { label: "IA e Chatbots", href: "#ia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
    <div className="section-container">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        <div className="lg:col-span-5">
          <div className="bg-white/95 inline-block p-2 rounded-xl mb-4">
            <img src={logo} alt="Logo da HELPSAM" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-secondary-foreground/75 leading-relaxed max-w-md">
            Suporte de TI, manutenção de computadores, criação de sites, automações, sistemas, chatbots e soluções com inteligência artificial.
          </p>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-secondary-foreground/75 hover:text-primary-glow transition-smooth">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-secondary-foreground/85 hover:text-primary-glow transition-smooth">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 text-secondary-foreground/85 hover:text-primary-glow transition-smooth break-all">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-secondary-foreground/75">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Araçatuba/SP, Birigui/SP e região<br /><span className="text-xs">Remoto e presencial conforme disponibilidade.</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 text-center text-xs text-secondary-foreground/60">
        © 2026 HELPSAM. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);
