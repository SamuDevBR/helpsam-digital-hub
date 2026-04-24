import { useEffect } from "react";

/**
 * Adds the `is-visible` class to elements with `reveal-on-scroll`
 * when they enter the viewport. Also reveals elements that are
 * already in view on mount, and watches for elements added later.
 */
export const useReveal = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal-on-scroll")
        .forEach((el) => el.classList.add("is-visible"));
    };

    if (prefersReduced) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );

    const observed = new WeakSet<Element>();
    const observe = (el: Element) => {
      if (observed.has(el)) return;
      observed.add(el);
      io.observe(el);
    };

    // Initial pass
    document.querySelectorAll(".reveal-on-scroll").forEach(observe);

    // Watch for elements added later (e.g. testimonials carousel re-renders)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList?.contains("reveal-on-scroll")) observe(node);
          node.querySelectorAll?.(".reveal-on-scroll").forEach(observe);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: if anything is still hidden after 1.5s (e.g. observer
    // never fired because element is taller than viewport), reveal it.
    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal-on-scroll:not(.is-visible)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("is-visible");
          }
        });
    }, 1500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
};
