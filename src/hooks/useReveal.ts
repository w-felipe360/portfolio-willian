import { useEffect } from "react";

/**
 * Entrada suave dos blocos marcados com `data-reveal`.
 * Um único IntersectionObserver para a página toda; cada elemento é
 * desobservado assim que aparece, então depois da primeira passada não sobra
 * trabalho nenhum durante o scroll. Com prefers-reduced-motion o estado
 * escondido nem é ligado.
 */
export function useReveal(deps: readonly unknown[] = []) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"));
    if (targets.length === 0) return;

    root.classList.add("reveal-on");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
