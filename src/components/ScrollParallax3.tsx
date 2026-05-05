import { useEffect, useRef, ReactNode } from "react";

interface Props {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

/**
 * Mobile slide-in for 3 cards:
 *  - left card: slides in from the right (→ ←)
 *  - center card: slides in from the left (← →)
 *  - right card: slides in from the right (→ ←)
 *
 * Uses IntersectionObserver to trigger CSS transforms — no scroll listeners.
 */
export const ScrollParallax3 = ({ left, center, right }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = wrapRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>("[data-slide]");
    if (reduce) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef}>
      {/* Mobile: slide-in stack */}
      <div className="md:hidden flex flex-col gap-5 overflow-hidden">
        <div
          data-slide
          className="opacity-0 translate-x-16 transition-all duration-700 ease-out [&.is-in]:opacity-100 [&.is-in]:translate-x-0 will-change-transform"
        >
          {left}
        </div>
        <div
          data-slide
          className="opacity-0 -translate-x-16 transition-all duration-700 ease-out [&.is-in]:opacity-100 [&.is-in]:translate-x-0 will-change-transform"
        >
          {center}
        </div>
        <div
          data-slide
          className="opacity-0 translate-x-16 transition-all duration-700 ease-out [&.is-in]:opacity-100 [&.is-in]:translate-x-0 will-change-transform"
        >
          {right}
        </div>
      </div>
      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {left}
        {center}
        {right}
      </div>
    </div>
  );
};
