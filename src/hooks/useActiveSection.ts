import { useEffect, useState } from "react";
import type { SectionId } from "@/content/profile";

/**
 * Marca a seção visível mais alta da viewport. Usa IntersectionObserver em vez
 * de listener de scroll para não recalcular layout a cada frame.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    /* seções cruzando a faixa do meio da tela, e se a página chegou ao fim */
    const inBand = new Set<Element>();
    let atBottom = false;

    const update = () => {
      /* a última seção é curta e nunca alcança a faixa do meio; no fim da página ela vence */
      const current = atBottom ? sections[sections.length - 1] : sections.find((section) => inBand.has(section));
      if (current) setActive(current.id as SectionId);
    };

    const bandObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target);
          else inBand.delete(entry.target);
        }
        update();
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((section) => bandObserver.observe(section));

    /* sentinela de 1px no fim do documento: visível = página rolada até o fim */
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.height = "1px";
    document.body.append(sentinel);

    const bottomObserver = new IntersectionObserver(([entry]) => {
      atBottom = entry.isIntersecting;
      update();
    });
    bottomObserver.observe(sentinel);

    return () => {
      bandObserver.disconnect();
      bottomObserver.disconnect();
      sentinel.remove();
    };
  }, [ids]);

  return active;
}
