import { MessageCircle, Search, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: MessageCircle, title: "Você entra em contato", text: "Fale pelo WhatsApp e explique sua necessidade." },
  { icon: Search, title: "Entendemos o problema", text: "Avaliamos se é suporte técnico, manutenção, acesso remoto, criação de site, automação, sistema ou solução com IA." },
  { icon: FileText, title: "Enviamos uma orientação ou orçamento", text: "Você recebe uma proposta clara antes da execução." },
  { icon: Wrench, title: "Realizamos o atendimento", text: "O serviço pode ser remoto, presencial ou desenvolvido sob demanda." },
  { icon: CheckCircle2, title: "Entregamos a solução", text: "Você recebe a solução pronta, com explicação e suporte inicial." },
];

export const HowItWorks = () => (
  <section id="como-funciona" className="py-20 lg:py-28 bg-surface">
    <div className="section-container">
      <SectionHeading eyebrow="Processo" title="Como funciona o atendimento" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-7 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:-translate-x-px" />
        <div className="space-y-8">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`relative flex gap-5 lg:gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2 flex lg:justify-end">
                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-blue flex items-center justify-center text-primary-foreground font-display font-extrabold shadow-glow shrink-0 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="lg:w-1/2 bg-card rounded-2xl p-5 lg:p-6 border border-border shadow-card flex-1">
                <div className="text-xs font-bold text-primary mb-1">ETAPA {i + 1}</div>
                <h3 className="font-display font-bold text-lg text-secondary mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
