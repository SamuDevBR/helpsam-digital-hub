import { SectionHeading } from "./SectionHeading";
import { Sparkles } from "lucide-react";

export const About = () => (
  <section id="sobre" className="py-20 lg:py-28 bg-background">
    <div className="section-container max-w-4xl">
      <SectionHeading eyebrow="Sobre" title="Sobre a HELPSAM" />
      <div className="space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>
          A HELPSAM nasceu com o objetivo de tornar a tecnologia mais simples, acessível e útil para pessoas e empresas. Unimos suporte técnico, manutenção de computadores, consultoria em TI, criação de sites, desenvolvimento de sistemas, automações e inteligência artificial para ajudar clientes a resolver problemas, organizar processos e ganhar produtividade.
        </p>
        <p>
          Atendemos residências, comércios, profissionais autônomos e pequenas empresas com uma abordagem clara, profissional e personalizada. Nosso compromisso é oferecer soluções práticas, transparentes e eficientes, desde a manutenção de um computador até a criação de ferramentas digitais sob medida.
        </p>
      </div>
      <div className="mt-10 bg-gradient-hero rounded-2xl p-8 text-center shadow-glow relative overflow-hidden">
        <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary-foreground/30" />
        <p className="text-xl lg:text-2xl font-display font-bold text-primary-foreground leading-snug">
          Da manutenção do computador à automação da sua empresa: a HELPSAM cuida da tecnologia para você focar no seu negócio.
        </p>
      </div>
    </div>
  </section>
);
