interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4`}>
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-secondary leading-tight mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);
