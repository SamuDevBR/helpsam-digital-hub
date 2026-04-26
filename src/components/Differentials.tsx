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
  <div
    className="reveal-on-scroll group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-1 h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-4 shadow-button">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export const Differentials = () => {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false }));

  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 0% 0%, #1f4ee0 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, #001a7a 0%, transparent 55%), linear-gradient(135deg, #0231C3 0%, #0a2db0 50%, #021a85 100%)",
      }}
    >
      {/* decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />
      {/* subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider">
            Custo-benefício
          </div>
        </div>

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
