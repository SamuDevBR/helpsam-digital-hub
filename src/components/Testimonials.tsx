import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  { name: "Silvana Borges", text: "Atendimento rápido, explicou tudo com clareza e resolveu o problema do meu computador." },
  { name: "Gabriel Batista", text: "Precisávamos organizar melhor alguns processos e recebemos uma solução simples e prática." },
  { name: "Jhonatan Silva", text: "O suporte remoto ajudou bastante e evitou que a equipe ficasse parada." },
  { name: "Caio Santos", text: "Gostei da atenção e da forma como as opções foram explicadas antes do serviço." },
  { name: "Regina Florencio", text: "A configuração da impressora e da rede ficou funcionando corretamente." },
  { name: "Ronaldo Alves", text: "A HELPSAM ajudou a transformar uma rotina manual em algo mais organizado." },
  { name: "Marli Rodrigues", text: "Profissionais atenciosos e que entendem do que estão falando. Recomendo." },
  { name: "Wagner Soares", text: "Resolveram a lentidão do meu notebook em pouco tempo, ficou como novo." },
  { name: "Rafael Oliveira", text: "Implantaram um chatbot que agilizou muito o atendimento dos meus clientes." },
  { name: "Maria Helena", text: "Site novo ficou lindo e fácil de mexer. Já comecei a receber contatos pelo formulário." },
  { name: "Ricardo Martinelli", text: "Suporte de TI confiável, sempre que precisei tive retorno rápido." },
  { name: "Marcelo Owen", text: "Trabalho sério e transparente, explicaram cada etapa antes de executar." },
  { name: "José Magalhães", text: "Resolveram um problema de rede que vinha me incomodando há semanas." },
  { name: "Ryan Gustavo", text: "Atendimento humano e técnico ao mesmo tempo. Muito satisfeito com o resultado." },
  { name: "Aline Zanquetta", text: "A automação que fizeram economizou horas do meu dia a dia." },
  { name: "Janaina Pascoal", text: "Excelente custo-benefício e entrega no prazo combinado." },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const visible = [0, 1, 2].map((o) => testimonials[(index + o) % testimonials.length]);

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading eyebrow="Depoimentos" title="Depoimentos" />
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <article key={`${index}-${i}`} className="bg-card rounded-2xl p-6 border border-border shadow-card animate-fade-up">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-primary/20 mb-2" />
                <p className="text-foreground/90 leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Cliente HELPSAM</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              aria-label="Anterior"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-smooth ${i === index ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
