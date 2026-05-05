import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode[];
  /** offset from top of viewport for the first card (px). */
  topOffset?: number;
  /** extra offset added per index so each stacked card peeks below the previous. */
  step?: number;
  /** vertical scroll distance per card — controls when the next card slides up over the previous. */
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
  step = 12,
  slotMinHeight = "55vh",
  gap = "1.25rem",
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className} style={{ display: "flex", flexDirection: "column", gap }}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{ minHeight: i === children.length - 1 ? undefined : slotMinHeight }}
          className="relative"
        >
          <div
            className="sticky"
            style={{
              top: `${topOffset + i * step}px`,
              zIndex: i + 1,
            }}
          >
            <div
              data-stack-card
              className="opacity-0 translate-y-6 transition-all duration-700 ease-out [&.is-in]:opacity-100 [&.is-in]:translate-y-0 will-change-transform"
            >
              {child}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
