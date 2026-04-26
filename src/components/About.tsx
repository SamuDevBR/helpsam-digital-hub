import { SectionHeading } from "./SectionHeading";
import { Sparkles, Home, Store, Building2, Briefcase } from "lucide-react";
import officeImg from "@/assets/helpsam-office.png";

const audience = [
  { icon: Home, title: "Residências", text: "Suporte para computadores, notebooks, internet, impressoras e problemas do dia a dia." },
  { icon: Store, title: "Comércios", text: "Apoio para lojas, escritórios, prestadores de serviço e pequenos negócios." },
  { icon: Building2, title: "Pequenas empresas", text: "Soluções de TI, sistemas, automações e ferramentas para a rotina da equipe." },
  { icon: Briefcase, title: "Profissionais autônomos", text: "Tecnologia para organizar atendimentos, clientes, orçamentos e processos." },
];

export const About = () => (
  <section id="sobre" className="py-20 lg:py-28 bg-background">
    <div className="section-container max-w-6xl">
      {/* Mobile: keep heading on top */}
      <div className="lg:hidden">
        <SectionHeading eyebrow="Sobre" title="Sobre a HELPSAM" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
          {/* Desktop: heading next to image, above text */}
          <div className="hidden lg:block mb-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Sobre
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-secondary leading-tight">
              Sobre a HELPSAM
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-blue rounded-full" />
          </div>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            A HELPSAM nasceu com o objetivo de tornar a tecnologia mais simples, acessível e útil para pessoas e empresas.
          </p>

          <div className="mt-6 bg-gradient-hero rounded-2xl p-6 lg:p-7 text-center shadow-glow relative overflow-hidden">
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary-foreground/30" />
            <p className="text-base lg:text-lg font-display font-bold text-primary-foreground leading-snug">
              Da manutenção do computador à automação da sua empresa: a HELPSAM cuida da tecnologia para você focar no seu negócio.
            </p>
          </div>

          {/* Audience cards beside the photo */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {audience.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal-on-scroll bg-card rounded-xl p-4 border border-border shadow-card hover:shadow-card-hover transition-smooth"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mb-3 shadow-button">
                  <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-sm text-secondary mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
