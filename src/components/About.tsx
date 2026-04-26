import { SectionHeading } from "./SectionHeading";
import { Sparkles } from "lucide-react";
import officeImg from "@/assets/helpsam-office.png";

export const About = () => (
  <section id="sobre" className="py-20 lg:py-28 bg-background">
    <div className="section-container max-w-6xl">
      <SectionHeading eyebrow="Sobre" title="Sobre a HELPSAM" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-blue opacity-10 rounded-3xl blur-2xl" />
          <img
            src={officeImg}
            alt="Escritório da HELPSAM com recepção, logo na parede e estações de trabalho"
            width={1140}
            height={1410}
            loading="lazy"
            className="relative w-full h-auto rounded-2xl shadow-card-hover border border-border object-cover"
          />
        </div>

        <div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            A HELPSAM nasceu com o objetivo de tornar a tecnologia mais simples, acessível e útil para pessoas e empresas. Unimos suporte técnico, manutenção de computadores, consultoria em TI, criação de sites, desenvolvimento de sistemas, automações e inteligência artificial para ajudar clientes a resolver problemas, organizar processos e ganhar produtividade.
          </p>

          <div className="mt-8 bg-gradient-hero rounded-2xl p-7 lg:p-8 text-center shadow-glow relative overflow-hidden">
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary-foreground/30" />
            <p className="text-lg lg:text-xl font-display font-bold text-primary-foreground leading-snug">
              Da manutenção do computador à automação da sua empresa: a HELPSAM cuida da tecnologia para você focar no seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
