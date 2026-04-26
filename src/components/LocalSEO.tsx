import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const LocalSEO = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="section-container">
      <div className="max-w-5xl mx-auto bg-gradient-soft rounded-3xl p-8 lg:p-14 border border-border shadow-card">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-blue mx-auto mb-6 shadow-button">
          <MapPin className="w-7 h-7 text-primary-foreground" />
        </div>
        <SectionHeading title="Suporte de TI em Araçatuba, Birigui e região" />

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto -mt-4 mb-10">
          Nosso foco é ajudar residências, comércios, profissionais autônomos e pequenas empresas que precisam resolver problemas de tecnologia, melhorar processos, criar presença digital ou desenvolver ferramentas sob medida.
        </p>

        <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/9] lg:aspect-[21/9]">
          <iframe
            title="Mapa da região de Araçatuba"
            src="https://www.google.com/maps?q=Ara%C3%A7atuba,+SP&output=embed&z=10"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);
