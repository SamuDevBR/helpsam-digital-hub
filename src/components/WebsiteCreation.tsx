import { Globe, Target, Smartphone, Search, MessageCircle, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const items = [
  { icon: Globe, title: "Sites institucionais", text: "Sites profissionais para apresentar sua empresa, serviços, diferenciais e formas de contato." },
  { icon: Target, title: "Landing pages", text: "Páginas focadas em conversão para divulgar serviços, campanhas, produtos ou captação de clientes." },
  { icon: Smartphone, title: "Sites responsivos", text: "Layouts adaptados para celular, tablet e computador, com navegação simples e rápida." },
  { icon: Search, title: "SEO básico", text: "Estrutura pensada para ajudar o site a ser encontrado no Google, com títulos, descrições e conteúdo organizado." },
  { icon: MessageCircle, title: "Integração com WhatsApp", text: "Botões de contato direto para facilitar o atendimento e gerar mais oportunidades." },
];

export const WebsiteCreation = () => (
  <section id="sites" className="py-20 lg:py-28 bg-surface">
    <div className="section-container">
      <SectionHeading
        eyebrow="Criação de Sites"
        title="Criação de sites profissionais para negócios locais"
        subtitle="A HELPSAM também cria sites modernos, responsivos e otimizados para ajudar empresas, comércios e profissionais autônomos a terem presença digital com mais credibilidade."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {items.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
      <div className="text-center">
        <Button asChild variant="hero" size="xl">
          <a href={whatsappLink("Olá! Quero criar meu site com a HELPSAM.")} target="_blank" rel="noopener noreferrer">
            Quero criar meu site
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
