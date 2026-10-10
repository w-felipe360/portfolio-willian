import type { CSSProperties, ReactNode } from "react";
import type { SectionId } from "@/content/profile";

interface SectionProps {
  id: SectionId;
  title: string;
  /** rótulo curto à direita do título (ex.: "desde 2021", "4 projetos") */
  meta?: string;
  children: ReactNode;
}

/** atraso escalonado do reveal; use em filhos com data-reveal */
export function stagger(i: number): CSSProperties {
  return { "--i": Math.min(i, 6) } as CSSProperties;
}

export function Section({ id, title, meta, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line py-11 last:border-b-0 sm:py-14">
      <header data-reveal className="mb-5 flex items-baseline justify-between gap-4">
        <h2 className="text-2xl leading-[1.1] font-semibold tracking-[-0.035em] text-text sm:text-[1.625rem]">
          {title}
        </h2>
        {meta ? <span className="font-mono text-xs text-muted tabular-nums">{meta}</span> : null}
      </header>
      {children}
    </section>
  );
}
