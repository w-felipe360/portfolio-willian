import type { ReactNode } from "react";
import type { SectionId } from "@/content/profile";

interface SectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line pt-16 pb-20 sm:pt-20 sm:pb-28">
      <h2 className="mb-10 text-3xl leading-[1.1] font-semibold tracking-[-0.035em] text-text sm:mb-12 sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
