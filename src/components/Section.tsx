import type { ReactNode } from "react";
import type { SectionId } from "@/content/profile";

interface SectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

/* rótulo à esquerda, conteúdo à direita: a página se lê como um documento */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="grid scroll-mt-20 gap-6 border-t border-line pt-10 pb-20 md:grid-cols-[11rem_1fr] md:gap-10 md:pb-28"
    >
      <h2 className="display text-xl text-text md:text-lg">{title}</h2>
      <div className="max-w-[40rem]">{children}</div>
    </section>
  );
}
