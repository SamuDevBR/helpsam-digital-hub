import { Zap, Headphones, BadgeDollarSign } from "lucide-react";

const items = [
  { icon: BadgeDollarSign, label: "Maior custo-benefício" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Headphones, label: "Suporte remoto e presencial" },
];

export const TopBar = () => {
  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] text-white text-xs font-medium overflow-hidden"
      style={{ backgroundColor: "#343F4D" }}
    >
      <div className="section-container h-8 flex items-center justify-center overflow-hidden">
        {/* Desktop: static, fixed */}
        <div className="hidden md:flex items-center gap-8">
          {items.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2">
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </div>
        {/* Mobile: infinite marquee. Two identical tracks side-by-side; translate the wrapper by -50% for a seamless loop. */}
        <div className="md:hidden w-full overflow-hidden">
          <div className="flex w-max animate-[marquee_12s_linear_infinite]">
            {[0, 1].map((track) => (
              <div key={track} className="flex shrink-0" aria-hidden={track === 1}>
                {items.map(({ icon: Icon, label }) => (
                  <span
                    key={`${track}-${label}`}
                    className="inline-flex items-center gap-2 shrink-0 px-5 whitespace-nowrap"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
