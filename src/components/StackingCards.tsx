import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
  /** offset from top of viewport for the first card (px). */
  topOffset?: number;
  /** extra offset added per index so cards stack with a small reveal of the previous. */
  step?: number;
  /** min height of each slot — controls how much scroll between cards. */
  slotMinHeight?: string;
  className?: string;
}

/**
 * Mobile-friendly stacking-cards effect using only `position: sticky` + `z-index`.
 * No JS, no scroll listeners → great performance on mobile.
 */
export const StackingCards = ({
  children,
  topOffset = 88,
  step = 10,
  slotMinHeight = "240px",
  className = "",
}: Props) => (
  <div className={className}>
    {children.map((child, i) => (
      <div key={i} style={{ minHeight: slotMinHeight }} className="relative">
        <div
          className="sticky"
          style={{ top: `${topOffset + i * step}px`, zIndex: i + 1 }}
        >
          {child}
        </div>
      </div>
    ))}
  </div>
);
