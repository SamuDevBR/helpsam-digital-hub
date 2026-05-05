import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode[];
  /** offset from top of viewport for the first card (px). */
  topOffset?: number;
  /** extra offset added per index so each stacked card can peek below the previous. */
  step?: number;
  /** kept for compatibility; the stack now uses the cards' natural height for tighter overlap. */
  slotMinHeight?: string;
  /** initial spacing between cards (so card 2 already peeks below card 1 before scrolling). */
  gap?: string;
  className?: string;
}

/**
 * Stacking cards effect:
 * - Each card fades in as it enters the viewport.
 * - Cards are sticky at the top with progressive offsets, so as the user scrolls
 *   the next card rises from below and overlaps the previous one (deck of cards).
 *
 * Pure CSS sticky + a tiny IntersectionObserver for the fade-in.
 */
export const StackingCards = ({
  children,
  topOffset = 88,
  step = 0,
  gap = "0.75rem",
  className = "",
}: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>("[data-stack-card]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className} style={{ display: "flex", flexDirection: "column", gap }}>
      {children.map((child, i) => (
        <div
          key={i}
          data-stack-card
          className="sticky opacity-0 transition-opacity duration-500 ease-out [&.is-in]:opacity-100 [&_.reveal-on-scroll]:!opacity-100 [&_.reveal-on-scroll]:!translate-y-0"
          style={{
            top: `${topOffset + i * step}px`,
            zIndex: i + 1,
            willChange: "opacity",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
