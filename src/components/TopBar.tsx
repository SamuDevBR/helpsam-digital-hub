import { Zap, Headphones, BadgeDollarSign } from "lucide-react";

const items = [
  { icon: BadgeDollarSign, label: "Maior custo-benefício" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Headphones, label: "Suporte remoto e presencial" },
];

export const TopBar = () => (
  <div className="fixed top-0 inset-x-0 z-[60] text-white text-xs font-medium" style={{ backgroundColor: "#343F4D" }}>
    <div className="section-container h-8 flex items-center justify-center overflow-hidden">
      {/* Desktop: show all */}
      <div className="hidden md:flex items-center gap-8">
        {items.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-2">
            <Icon className="w-3.5 h-3.5" />
            {label}
          </span>
        ))}
      </div>
      {/* Mobile: marquee */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-[marquee_22s_linear_infinite]">
          {[...items, ...items, ...items].map(({ icon: Icon, label }, i) => (
            <span key={i} className="inline-flex items-center gap-2 shrink-0">
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
