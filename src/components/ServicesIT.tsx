import { Wrench, MonitorCog, HardDrive, Download, Printer, Wifi, MonitorSmartphone, BookOpen } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { StackingCards } from "./StackingCards";
import imgManutencao from "@/assets/service-manutencao.jpg";
import imgWindows from "@/assets/service-windows.jpg";
import imgUpgrade from "@/assets/service-upgrade.jpg";
import imgProgramas from "@/assets/service-programas.jpg";
import imgImpressora from "@/assets/service-impressora.jpg";
import imgRede from "@/assets/service-rede.jpg";
import imgRemoto from "@/assets/service-remoto.jpg";
import imgConsultoria from "@/assets/service-consultoria.jpg";

const services = [
  { icon: Wrench, title: "Manutenção de computadores e notebooks", text: "Diagnóstico, limpeza, correções, melhorias de desempenho e suporte técnico para computadores e notebooks.", image: imgManutencao },
  { icon: MonitorCog, title: "Formatação e instalação de Windows", text: "Instalação limpa, configuração inicial, drivers, programas essenciais e otimização do equipamento.", image: imgWindows },
  { icon: HardDrive, title: "Upgrade de SSD e memória RAM", text: "Mais velocidade e desempenho para computadores e notebooks com troca de HD por SSD e expansão de memória.", image: imgUpgrade },
  { icon: Download, title: "Instalação de programas", text: "Configuração de softwares, ferramentas de trabalho, antivírus, pacote Office e aplicativos essenciais.", image: imgProgramas },
  { icon: Printer, title: "Configuração de impressoras", text: "Instalação, compartilhamento em rede, configuração de impressão e solução de erros.", image: imgImpressora },
  { icon: Wifi, title: "Redes, Wi-Fi e internet", text: "Configuração de roteadores, pontos de acesso, cabeamento, rede local e ajustes de conexão.", image: imgRede },
  { icon: MonitorSmartphone, title: "Suporte remoto", text: "Ajuda rápida à distância para resolver problemas sem precisar de visita presencial.", image: imgRemoto },
  { icon: BookOpen, title: "Consultoria em TI", text: "Orientação para melhorar equipamentos, processos, ferramentas e estrutura tecnológica do seu negócio.", image: imgConsultoria },
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
