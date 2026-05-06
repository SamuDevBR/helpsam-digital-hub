import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}

export const ServiceCard = ({ icon: Icon, title, text, image, imageAlt }: Props) => (
  <div className="reveal-on-scroll group relative bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-1 overflow-hidden flex flex-col">
    {image && (
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-accent">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          width={800}
          height={500}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
    )}
    <div className="relative p-6">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-blue opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-smooth" />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-blue transition-smooth">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" strokeWidth={1.75} />
        </div>
        <h3 className="font-display font-bold text-lg text-secondary mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
);
