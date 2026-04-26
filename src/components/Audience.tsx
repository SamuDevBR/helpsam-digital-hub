import { Home, Store, Building2, Briefcase } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "./SectionHeading";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const items = [
  { icon: Home, title: "Residências", text: "Suporte para computadores, notebooks, internet, impressoras e problemas de tecnologia do dia a dia." },
  { icon: Store, title: "Comércios", text: "Apoio para lojas, escritórios, prestadores de serviço e pequenos negócios." },
  { icon: Building2, title: "Pequenas empresas", text: "Soluções de TI, sistemas, automações e ferramentas para melhorar a rotina da equipe." },
  { icon: Briefcase, title: "Profissionais autônomos", text: "Tecnologia para organizar atendimentos, clientes, orçamentos, sites e processos." },
];

const Card = ({ icon: Icon, title, text }: typeof items[number]) => (
  <div className="reveal-on-scroll bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-smooth text-center h-full">
    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-blue flex items-center justify-center mb-4 shadow-button">
      <Icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.75} />
    </div>
    <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export const Audience = () => {
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: false }));

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading eyebrow="Para Quem" title="Para quem a HELPSAM atende?" />

        {/* Mobile: autoplay carousel */}
        <div className="sm:hidden">
          <Carousel opts={{ loop: true, align: "start" }} plugins={[autoplay.current]}>
            <CarouselContent>
              {items.map((it) => (
                <CarouselItem key={it.title} className="basis-[85%]">
                  <Card {...it} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => <Card key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  );
};
