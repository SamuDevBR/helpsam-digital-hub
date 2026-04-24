import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export const FinalCTA = () => (
  <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
    />
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />

    <div className="section-container relative text-center max-w-3xl">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground leading-tight mb-5">
        Precisa de suporte ou quer automatizar sua empresa?
      </h2>
      <p className="text-lg text-primary-foreground/85 leading-relaxed mb-10">
        Fale agora com a HELPSAM e descubra como a tecnologia pode facilitar sua rotina, melhorar seu atendimento e tornar seus processos mais eficientes.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild variant="whatsapp" size="xl">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </Button>
        <Button asChild variant="outlineLight" size="xl">
          <a href="#servicos">
            Ver serviços
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
