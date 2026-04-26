import { Zap, Headphones, Settings2, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const items = [
  { icon: Zap, title: "Atendimento rápido", text: "Soluções práticas para problemas de tecnologia no dia a dia." },
  { icon: Headphones, title: "Suporte remoto e presencial", text: "Atendimento flexível para residências, comércios e pequenas empresas." },
  { icon: Settings2, title: "Soluções sob medida", text: "Criamos ferramentas digitais conforme a necessidade do seu negócio." },
  { icon: MessageSquareText, title: "Tecnologia com clareza", text: "Explicamos cada etapa de forma simples, objetiva e transparente." },
];

const Card = ({ icon: Icon, title, text }: typeof items[number]) => (
  <div className="reveal-on-scroll group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-1 h-full">
    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-blue transition-smooth">
      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
    </div>
    <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export const Differentials = () => {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false }));

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="section-container">
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
