import { Workflow, Database, LayoutDashboard, FileSpreadsheet, Boxes, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const items = [
  { icon: Workflow, title: "Automação de tarefas", text: "Automatize tarefas repetitivas como envio de mensagens, preenchimento de planilhas, geração de relatórios, lembretes e organização de dados." },
  { icon: Database, title: "Sistemas personalizados", text: "Desenvolvemos sistemas simples e práticos para controle de clientes, orçamentos, agendamentos, estoque, chamados e processos internos." },
  { icon: LayoutDashboard, title: "Painéis administrativos", text: "Criação de dashboards e painéis para visualizar informações importantes do seu negócio de forma clara." },
  { icon: FileSpreadsheet, title: "Integração com planilhas", text: "Transforme planilhas em ferramentas mais organizadas, automatizadas e fáceis de usar." },
  { icon: Boxes, title: "Soluções no-code e low-code", text: "Criamos soluções práticas usando ferramentas modernas para acelerar processos e reduzir custos." },
];

export const Automation = () => (
  <section id="automacoes" className="py-20 lg:py-28 bg-background">
    <div className="section-container">
      <SectionHeading
        eyebrow="Automações & Sistemas"
        title="Automação e desenvolvimento de sistemas para empresas"
        subtitle="Se sua empresa ainda depende de processos manuais, planilhas bagunçadas ou mensagens repetitivas, a HELPSAM pode criar soluções digitais para economizar tempo, reduzir erros e organizar sua operação."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {items.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
      <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center shadow-glow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="relative">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-6">
            Transforme processos manuais em soluções digitais inteligentes.
          </h3>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink("Olá! Quero automatizar minha empresa com a HELPSAM.")} target="_blank" rel="noopener noreferrer">
              Quero automatizar minha empresa
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
