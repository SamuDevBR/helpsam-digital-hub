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
  <section
    id="como-funciona"
    className="relative py-20 lg:py-28 overflow-hidden"
    style={{ backgroundColor: "#ECE5DD" }}
  >
    {/* WhatsApp-style doodle pattern */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.10] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><g fill='none' stroke='%23000' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'><circle cx='30' cy='30' r='10'/><path d='M70 25 q10 -10 20 0 t20 0'/><path d='M150 20 l10 10 -10 10 -10 -10 z'/><path d='M190 40 a14 14 0 1 0 -14 -14'/><path d='M20 90 h30'/><path d='M70 95 q15 15 30 0'/><path d='M120 80 l8 8 -8 8 -8 -8 z'/><circle cx='170' cy='95' r='8'/><path d='M195 85 q-10 15 0 30'/><path d='M30 150 q10 -15 25 -5'/><path d='M80 145 a10 10 0 1 0 -10 10'/><path d='M120 160 l-10 -10 10 -10 10 10 z'/><circle cx='160' cy='145' r='6'/><path d='M185 160 q-15 -10 -5 -25'/><path d='M40 200 q15 -10 30 0 t30 0 t30 0'/></g></svg>")`,
        backgroundSize: "220px 220px",
      }}
    />
    <div className="relative section-container">
      <SectionHeading eyebrow="Processo" title="Como funciona o atendimento" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-7 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:-translate-x-px" />
        <div className="space-y-8">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`reveal-on-scroll relative flex gap-5 lg:gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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
