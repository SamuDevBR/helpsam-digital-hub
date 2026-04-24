import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Wrench, Laptop, Globe, Code2, Bot, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-gradient-soft">
      {/* Decorative tech grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-shimmer-badge">
              <Sparkles className="w-4 h-4 animate-sparkle text-primary" />
              Suporte humano. Soluções inteligentes.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] text-secondary mb-6">
              Suporte de TI em <span className="text-gradient">Araçatuba e região</span> para sua casa ou negócio.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              A Helpsam oferece suporte técnico, manutenção e soluções de computadores no geral, criação de sites, desenvolvimento de sistemas e automações com IA. Soluções para tudo e todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild variant="hero" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Solicitar atendimento
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="hover-scale transition-all hover:shadow-card-hover hover:border-primary hover:text-primary">
                <a href="#servicos">Conhecer soluções</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Atendimento remoto e presencial em Araçatuba, Birigui e região, conforme disponibilidade.
            </p>
          </div>

          {/* Visual: floating service cards */}
          <div className="relative h-[480px] lg:h-[560px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-blue rounded-[2rem] opacity-10 blur-2xl" />
            <div className="absolute inset-6 bg-gradient-hero rounded-[2rem] shadow-glow overflow-hidden">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)`,
                  backgroundSize: "40px 40px, 60px 60px",
                }}
              />
            </div>

            <FloatCard className="top-4 left-2 animate-float" icon={<Wrench />} label="Suporte Técnico" />
            <FloatCard className="top-20 right-0 animate-float" style={{ animationDelay: "0.5s" }} icon={<Laptop />} label="Manutenção de Computadores" />
            <FloatCard className="top-1/2 -left-4 animate-float" style={{ animationDelay: "1s" }} icon={<Globe />} label="Criação de Sites" />
            <FloatCard className="bottom-24 right-2 animate-float" style={{ animationDelay: "1.5s" }} icon={<Code2 />} label="Sistemas Personalizados" />
            <FloatCard className="bottom-4 left-8 animate-float" style={{ animationDelay: "2s" }} icon={<Bot />} label="Chatbots" />
            <FloatCard className="top-1/3 right-8 animate-float" style={{ animationDelay: "2.5s" }} icon={<Sparkles />} label="Automação com IA" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatCard = ({
  icon, label, className = "", style,
}: { icon: React.ReactNode; label: string; className?: string; style?: React.CSSProperties }) => (
  <div
    style={style}
    className={`absolute bg-card/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card-hover flex items-center gap-2.5 border border-white/40 ${className}`}
  >
    <div className="w-9 h-9 rounded-lg bg-gradient-blue flex items-center justify-center text-primary-foreground [&_svg]:w-4 [&_svg]:h-4">
      {icon}
    </div>
    <span className="text-sm font-semibold text-secondary whitespace-nowrap">{label}</span>
  </div>
);
