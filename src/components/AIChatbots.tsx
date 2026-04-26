import { Bot, FileQuestion, BrainCircuit, Send, FileText, Database, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import aiBg from "@/assets/ai-bg.jpg";

const items = [
  { icon: Bot, title: "Chatbots para atendimento inicial", text: "Responda dúvidas frequentes, colete informações e direcione clientes de forma automática." },
  { icon: FileQuestion, title: "Bots para orçamentos", text: "Receba solicitações de orçamento com perguntas organizadas e respostas padronizadas." },
  { icon: BrainCircuit, title: "Assistente virtual com IA", text: "Crie um assistente para apoiar atendimentos, gerar respostas e organizar informações." },
  { icon: Send, title: "Automação de mensagens", text: "Envie lembretes, confirmações, notificações e respostas automáticas." },
  { icon: FileText, title: "IA para textos e documentos", text: "Use inteligência artificial para criar textos comerciais, organizar documentos e padronizar comunicações." },
  { icon: Database, title: "Sistemas personalizados", text: "Desenvolvemos sistemas simples e práticos para controle de clientes, orçamentos, agendamentos, estoque, chamados e processos internos." },
];

export const AIChatbots = () => (
  <section id="ia" className="relative py-20 lg:py-28 bg-background overflow-hidden">
    {/* Stylish AI background behind the heading */}
    <div className="absolute top-0 left-0 right-0 h-[480px] lg:h-[520px] pointer-events-none">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aiBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/70 to-background" />
    </div>

    <div className="section-container relative">
      <div className="text-center text-primary-foreground [&_*]:!text-primary-foreground">
        <SectionHeading
          eyebrow="IA & Chatbots"
          title="Automatização, chatbots e IA"
          subtitle="A HELPSAM cria soluções com IA para ajudar sua empresa a responder clientes, organizar informações, automatizar atendimentos e aumentar a produtividade."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {items.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
      <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center shadow-glow relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-6">
            Mais agilidade no atendimento, menos tarefas repetitivas e mais tempo para focar no crescimento do seu negócio.
          </h3>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="xl">
              <a href="#contato">
                <span className="sm:hidden">Automatizar empresa</span>
                <span className="hidden sm:inline">Quero automatizar minha empresa</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
