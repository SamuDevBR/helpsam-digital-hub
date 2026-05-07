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
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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

          <div className="flex justify-center mt-10">
            <a
              href="https://g.page/r/CRHVlfuQFg4pEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#3367d6] transition-smooth"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Nos avalie no Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
