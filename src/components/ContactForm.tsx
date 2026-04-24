import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "./SectionHeading";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";
import { whatsappLink, EMAIL } from "@/lib/contact";
import { toast } from "sonner";

const serviceTypes = [
  "Suporte técnico",
  "Manutenção de computador/notebook",
  "Impressora ou rede",
  "Acesso remoto",
  "Criação de site",
  "Automação de tarefas",
  "Desenvolvimento de sistema",
  "Chatbot ou IA",
  "Outro",
];

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Preencha nome e WhatsApp para continuar.");
      return;
    }
    const msg = `Olá, vim pelo site da HELPSAM!%0A%0A*Nome:* ${form.name}%0A*WhatsApp:* ${form.phone}%0A*Serviço:* ${form.service || "Não especificado"}%0A*Mensagem:* ${form.message || "-"}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    toast.success("Abrindo WhatsApp para concluir sua solicitação...");
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading eyebrow="Contato" title="Solicite seu atendimento" subtitle="Preencha o formulário ou fale diretamente pelo WhatsApp. Respondemos o mais rápido possível." />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 bg-card p-5 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-smooth">
              <div className="w-11 h-11 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-whatsapp" />
              </div>
              <div>
                <div className="font-display font-bold text-secondary">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Atendimento direto e ágil</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 bg-card p-5 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-smooth">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-bold text-secondary">E-mail</div>
                <div className="text-sm text-muted-foreground break-all">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-card p-5 rounded-2xl border border-border shadow-card">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-bold text-secondary">Localização</div>
                <div className="text-sm text-muted-foreground">Araçatuba/SP, Birigui/SP e região</div>
                <div className="text-xs text-muted-foreground mt-1">Atendimento remoto e presencial conforme disponibilidade.</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card p-6 lg:p-8 rounded-2xl border border-border shadow-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">WhatsApp</Label>
                <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="service">Tipo de serviço</Label>
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger id="service"><SelectValue placeholder="Selecione um serviço" /></SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Descreva sua necessidade..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="w-4 h-4" />
              Enviar solicitação
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
