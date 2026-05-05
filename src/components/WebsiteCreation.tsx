import { Globe, Target, Smartphone, Search, MessageCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { StackingCards } from "./StackingCards";

import siteAdvocacia from "@/assets/site-advocacia.jpg";
import siteAutomecanica from "@/assets/site-automecanica.jpg";
import siteClinica from "@/assets/site-clinica.jpg";
import siteMercado from "@/assets/site-mercado.jpg";
import siteRestaurante from "@/assets/site-restaurante.jpg";
import siteSalao from "@/assets/site-salao.jpg";
import siteImobiliaria from "@/assets/site-imobiliaria.jpg";
import siteOdonto from "@/assets/site-odonto.jpg";
import siteAcademia from "@/assets/site-academia.jpg";
import siteContabilidade from "@/assets/site-contabilidade.jpg";
import sitePetshop from "@/assets/site-petshop.jpg";
import siteModa from "@/assets/site-moda.jpg";

const items = [
  { icon: Smartphone, title: "Sites responsivos", text: "Layouts adaptados para celular, tablet e computador, com navegação simples e rápida." },
  { icon: Search, title: "SEO básico", text: "Estrutura pensada para ajudar o site a ser encontrado no Google, com títulos, descrições e conteúdo organizado." },
  { icon: MessageCircle, title: "Integração com WhatsApp", text: "Botões de contato direto para facilitar o atendimento e gerar mais oportunidades." },
];

const examples = [
  { src: siteAdvocacia, label: "Advocacia" },
  { src: siteAutomecanica, label: "Automecânica" },
  { src: siteClinica, label: "Clínica médica" },
  { src: siteMercado, label: "Mercado" },
  { src: siteRestaurante, label: "Restaurante" },
  { src: siteSalao, label: "Salão de beleza" },
  { src: siteImobiliaria, label: "Imobiliária" },
  { src: siteOdonto, label: "Odontologia" },
  { src: siteAcademia, label: "Academia" },
  { src: siteContabilidade, label: "Contabilidade" },
  { src: sitePetshop, label: "Pet shop" },
  { src: siteModa, label: "Moda" },
];

export const WebsiteCreation = () => {
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section id="sites" className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="Criação de Sites"
          title="Criação de sites profissionais"
          subtitle="Sites modernos, responsivos e otimizados para ajudar empresas, comércios, profissionais autônomos a terem presença digital com mais credibilidade, alta captação de clientes e conversão."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>

        {/* Carousel of website examples */}
        <div className="mb-12">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-5">
            Exemplos de sites que podemos criar
          </p>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent>
              {examples.map((ex) => (
                <CarouselItem
                  key={ex.label}
                  className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-smooth bg-card group">
                    <img
                      src={ex.src}
                      alt={`Exemplo de site para ${ex.label}`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                      <span className="text-primary-foreground font-display font-semibold text-sm lg:text-base">
                        Site para {ex.label}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="xl">
            <a href="#contato">
              Quero criar meu site
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
