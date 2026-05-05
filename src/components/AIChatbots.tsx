import { Bot, FileQuestion, BrainCircuit, Send, FileText, Database, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { ScrollParallax3 } from "./ScrollParallax3";

import { Button } from "@/components/ui/button";
import aiBg from "@/assets/ai-bg.jpg";

const items = [
  {
    icon: Bot,
    title: "Chatbots e atendimento automático",
    text: "Bots para atendimento inicial, dúvidas frequentes, orçamentos, captação de clientes e envio automático de mensagens, lembretes e confirmações.",
  },
  {
    icon: BrainCircuit,
    title: "Assistentes e IA para conteúdo",
    text: "Assistentes virtuais com IA para apoiar atendimentos, gerar respostas, criar textos comerciais e organizar documentos e comunicações.",
  },
  {
    icon: Database,
    title: "Sistemas e automações sob medida",
    text: "Sistemas personalizados para clientes, orçamentos, agendamentos, estoque, chamados e processos internos, com automações que aumentam a produtividade.",
  },
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(52,63,76,0.92) 0%, rgba(52,63,76,0.82) 60%, hsl(var(--background)) 100%)",
        }}
      />
    </div>

    <div className="section-container relative">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#343F4C" }}>
          IA & Chatbots
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground leading-tight mb-4 max-w-3xl mx-auto">
          Automatização, chatbots e IA
        </h2>
        <p className="text-base lg:text-lg text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-12">
          A HELPSAM cria soluções com IA para ajudar sua empresa a responder clientes, organizar informações, automatizar atendimentos e aumentar a produtividade.
        </p>
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
