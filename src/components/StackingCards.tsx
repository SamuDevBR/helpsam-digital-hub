import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
  /** offset from top of viewport for the first card (px). */
  topOffset?: number;
  /** extra offset added per index so each stacked card peeks below the previous. */
  step?: number;
  /** vertical space between cards while scrolling — controls when the next card slides over. */
  slotMinHeight?: string;
  className?: string;
}

/**
 * Mobile-friendly stacking-cards effect using only `position: sticky` + `z-index`.
 * Each card "sticks" near the top of the viewport while the next one scrolls
 * up and overlaps it, creating a clean stacked-deck animation.
 *
 * No JS, no scroll listeners → great performance on mobile.
 */
export const StackingCards = ({
  children,
  topOffset = 96,
  step = 14,
  slotMinHeight = "78vh",
  className = "",
}: Props) => (
  <div className={className}>
    {children.map((child, i) => (
      <div
        key={i}
        style={{ minHeight: slotMinHeight }}
        className="relative flex items-start justify-center"
      >
        <div
          className="sticky w-full transition-transform duration-300 ease-out"
          style={{
            top: `${topOffset + i * step}px`,
            zIndex: i + 1,
          }}
        >
          <div className="rounded-2xl bg-card shadow-card-hover">
            {child}
          </div>
        </div>
      </div>
    ))}
  </div>
);
