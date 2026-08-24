import type { ReactNode } from "react";
import type { SectionId } from "@/content/profile";

interface SectionProps {
  id: SectionId;
  index: string;
  title: string;
  hint?: string;
  children: ReactNode;
}

export function Section({ id, index, title, hint, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-5 sm:py-6">
      <div className="glass px-6 py-10 sm:px-9 sm:py-12">
        <header className="mb-9 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-xs text-accent" aria-hidden="true">
            {index}
          </span>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
          {hint ? <span className="font-mono text-xs text-muted">— {hint}</span> : null}
        </header>

        {children}
      </div>
    </section>
  );
}
