import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const LocalSEO = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="section-container">
      <div className="max-w-4xl mx-auto bg-gradient-soft rounded-3xl p-8 lg:p-14 border border-border shadow-card">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-blue mx-auto mb-6 shadow-button">
          <MapPin className="w-7 h-7 text-primary-foreground" />
        </div>
        <SectionHeading title="Suporte de TI em Araçatuba, Birigui e região" />
        <div className="space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto -mt-4">
          <p>
            A HELPSAM atende clientes em Araçatuba, Birigui e região que precisam de suporte de TI, manutenção de computadores, configuração de impressoras, redes, automações, criação de sites, desenvolvimento de sistemas e soluções digitais. O atendimento pode ser remoto ou presencial, conforme disponibilidade e tipo de serviço.
          </p>
          <p>
            Nosso foco é ajudar residências, comércios, profissionais autônomos e pequenas empresas que precisam resolver problemas de tecnologia, melhorar processos, criar presença digital ou desenvolver ferramentas sob medida.
          </p>
        </div>
      </div>
    </div>
  </section>
);
