import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  /** max horizontal travel in px on mobile. */
  distance?: number;
}

/**
 * Lightweight scroll-driven horizontal parallax for 3 cards.
 * Uses IntersectionObserver + a single rAF-throttled scroll handler.
 * Animates only `transform` for performance.
 *
 * Effect is mobile-only; on md+ shows a simple 3-column grid.
 */
export const ScrollParallax3 = ({ left, center, right, distance = 60 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // -1 .. 1, 0 when centered
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when section center is at viewport center, -1 entering, 1 leaving
      const center = rect.top + rect.height / 2;
      const p = (center - vh / 2) / (vh / 2 + rect.height / 2);
      setProgress(Math.max(-1, Math.min(1, p)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    if (active) {
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active]);

  // On mobile we render a vertical stack and offset left/right cards horizontally.
  // -progress so cards spread apart as section enters, recenter at middle, then close.
  const t = -progress * distance;

  return (
    <div ref={ref}>
      {/* Mobile: parallax stack */}
      <div className="md:hidden flex flex-col gap-5 will-change-transform">
        <div
          style={{ transform: `translate3d(${-t}px,0,0)` }}
          className="transition-transform duration-75 ease-out"
        >
          {left}
        </div>
        <div>{center}</div>
        <div
          style={{ transform: `translate3d(${t}px,0,0)` }}
          className="transition-transform duration-75 ease-out"
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
