import { Wrench, MonitorCog, HardDrive, Download, Printer, Wifi, MonitorSmartphone, BookOpen } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { StackingCards } from "./StackingCards";

const services = [
  { icon: Wrench, title: "Manutenção de computadores e notebooks", text: "Diagnóstico, limpeza, correções, melhorias de desempenho e suporte técnico para computadores e notebooks." },
  { icon: MonitorCog, title: "Formatação e instalação de Windows", text: "Instalação limpa, configuração inicial, drivers, programas essenciais e otimização do equipamento." },
  { icon: HardDrive, title: "Upgrade de SSD e memória RAM", text: "Mais velocidade e desempenho para computadores e notebooks com troca de HD por SSD e expansão de memória." },
  { icon: Download, title: "Instalação de programas", text: "Configuração de softwares, ferramentas de trabalho, antivírus, pacote Office e aplicativos essenciais." },
  { icon: Printer, title: "Configuração de impressoras", text: "Instalação, compartilhamento em rede, configuração de impressão e solução de erros." },
  { icon: Wifi, title: "Redes, Wi-Fi e internet", text: "Configuração de roteadores, pontos de acesso, cabeamento, rede local e ajustes de conexão." },
  { icon: MonitorSmartphone, title: "Suporte remoto", text: "Ajuda rápida à distância para resolver problemas sem precisar de visita presencial." },
  { icon: BookOpen, title: "Consultoria em TI", text: "Orientação para melhorar equipamentos, processos, ferramentas e estrutura tecnológica do seu negócio." },
];

export const ServicesIT = () => (
  <section id="servicos" className="py-20 lg:py-28 bg-surface">
    <div className="section-container">
      <SectionHeading
        eyebrow="Serviços"
        title="Serviços de informática"
        subtitle="Resolva problemas técnicos com segurança, agilidade e profissionalismo. A HELPSAM oferece suporte para computadores, notebooks, redes, impressoras, programas e sistemas, com atendimento remoto e presencial conforme disponibilidade."
      />
      {/* Mobile: stacking cards effect; Desktop: grid */}
      <div className="md:hidden">
        <StackingCards>
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </StackingCards>
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </div>
  </section>
);
