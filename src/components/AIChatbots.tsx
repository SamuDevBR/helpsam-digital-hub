import { Bot, FileQuestion, BrainCircuit, Send, FileText, Database, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Bot, title: "Chatbots para atendimento inicial", text: "Responda dúvidas frequentes, colete informações e direcione clientes de forma automática." },
  { icon: FileQuestion, title: "Bots para orçamentos", text: "Receba solicitações de orçamento com perguntas organizadas e respostas padronizadas." },
  { icon: BrainCircuit, title: "Assistente virtual com IA", text: "Crie um assistente para apoiar atendimentos, gerar respostas e organizar informações." },
  { icon: Send, title: "Automação de mensagens", text: "Envie lembretes, confirmações, notificações e respostas automáticas." },
  { icon: FileText, title: "IA para textos e documentos", text: "Use inteligência artificial para criar textos comerciais, organizar documentos e padronizar comunicações." },
  { icon: Database, title: "Sistemas personalizados", text: "Desenvolvemos sistemas simples e práticos para controle de clientes, orçamentos, agendamentos, estoque, chamados e processos internos." },
];

export const AIChatbots = () => (
  <section id="ia" className="py-20 lg:py-28 bg-background">
    <div className="section-container">
      <SectionHeading
        eyebrow="IA & Chatbots"
        title="Chatbots e Inteligência Artificial para melhorar seu atendimento"
        subtitle="A HELPSAM cria soluções com IA para ajudar sua empresa a responder clientes, organizar informações, automatizar atendimentos e aumentar a produtividade."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {items.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
      <p className="text-center text-lg lg:text-xl font-display font-semibold text-secondary max-w-3xl mx-auto leading-relaxed mb-10">
        Mais agilidade no atendimento, menos tarefas repetitivas e mais tempo para focar no crescimento do seu negócio.
      </p>
      <div className="flex justify-center">
        <Button asChild variant="hero" size="xl">
          <a href="#contato">
            <span className="sm:hidden">Automatizar empresa</span>
            <span className="hidden sm:inline">Quero automatizar minha empresa</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
