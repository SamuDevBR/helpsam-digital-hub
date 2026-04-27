import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

export const faqs = [
  { q: "A HELPSAM faz manutenção de computadores?", a: "Sim. A HELPSAM realiza manutenção de computadores e notebooks, incluindo diagnóstico, limpeza, correções, formatação, instalação de programas, upgrade de SSD e memória RAM." },
  { q: "A HELPSAM atende em Araçatuba e Birigui?", a: "Sim. A HELPSAM atende Araçatuba, Birigui e região, com suporte remoto e atendimento presencial conforme disponibilidade e tipo de serviço." },
  { q: "O atendimento pode ser remoto?", a: "Sim. Muitos problemas podem ser resolvidos por suporte remoto, dependendo do tipo de solicitação." },
  { q: "A HELPSAM atende empresas?", a: "Sim. Atendemos comércios, profissionais autônomos e pequenas empresas que precisam de suporte de TI, automações, sistemas personalizados, criação de sites, chatbots e soluções digitais." },
  { q: "A HELPSAM desenvolve sistemas personalizados?", a: "Sim. Criamos sistemas simples usando código, no-code ou low-code, sob medida para controle de clientes, orçamentos, agendamentos, estoque, chamados, relatórios e processos internos." },
  { q: "A HELPSAM cria sites?", a: "Sim. Criamos sites institucionais, landing pages e páginas profissionais para empresas, comércios e profissionais autônomos que desejam melhorar sua presença digital." },
  { q: "Vocês criam chatbots?", a: "Sim. Desenvolvemos chatbots para atendimento inicial, orçamentos, perguntas frequentes, captação de clientes e organização de solicitações." },
  { q: "A HELPSAM trabalha com inteligência artificial?", a: "Sim. Criamos soluções com IA para apoiar atendimento, geração de textos, organização de informações, análise de dados e automação de tarefas." },
];

export const FAQ = () => (
  <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl pointer-events-none" />

    <div className="section-container max-w-3xl relative">
      <div className="[&_h2]:!text-primary-foreground [&_p]:!text-primary-foreground/80">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="reveal-on-scroll bg-card border border-border rounded-2xl px-5 shadow-card">
            <AccordionTrigger className="text-left font-display font-semibold text-secondary hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
