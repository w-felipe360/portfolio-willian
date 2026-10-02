import type { CSSProperties, ReactNode } from "react";
import type { SectionId } from "@/content/profile";

interface SectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

/** atraso escalonado do reveal; use em filhos com data-reveal */
export function stagger(i: number): CSSProperties {
  return { "--i": Math.min(i, 6) } as CSSProperties;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-20 sm:py-28">
      <h2
        data-reveal
        className="mb-10 text-3xl leading-[1.1] font-semibold tracking-[-0.035em] text-text sm:mb-14 sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
