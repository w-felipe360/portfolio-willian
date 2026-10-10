import type { CSSProperties } from "react";
import type { ProjectBrand } from "@/content/profile";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section, stagger } from "./Section";
import { ArrowUpRightIcon } from "./icons";

/* cores do projeto viram variáveis locais do card; o CSS decide a intensidade por tema */
function brandVars(brand?: ProjectBrand): CSSProperties | undefined {
  if (!brand) return undefined;
  return { "--p-soft": brand.soft, "--p-ink": brand.ink, "--p-tint": brand.tint } as CSSProperties;
}

export function Projects() {
  const { t, tx } = useLang();
  const { projects } = profile;
  /* grade 2×2 uniforme; se a contagem for ímpar, o último ocupa a linha inteira */
  const isLastAlone = (i: number) => i === projects.length - 1 && i % 2 === 0;

  return (
    <Section id="projects" title={t("section.projects")} meta={`${projects.length} ${t("meta.projects")}`}>
      <ul className="grid gap-3 md:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={project.name}
            data-reveal
            style={{ ...stagger(i), ...brandVars(project.brand) }}
            className={`card card-lift flex flex-col gap-2.5 p-[1.125rem] ${project.brand ? "project-brand" : ""} ${
              isLastAlone(i) ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex min-w-0 items-center gap-3">
              {project.brand ? (
                <span className={`project-logo ${project.brand.padded ? "project-logo-padded" : ""}`} aria-hidden="true">
                  <img src={project.brand.logo} alt="" width={36} height={36} />
                </span>
              ) : null}
              <div className="min-w-0">
                <h3 className="text-lg leading-tight font-semibold tracking-[-0.03em] [overflow-wrap:anywhere] text-text">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-text-soft">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="font-mono text-xs text-muted tabular-nums">{project.year}</p>
              </div>
            </div>

            <p className="max-w-[62ch] text-sm leading-[1.6] text-text-soft">{tx(project.summary)}</p>

            {/* rodapé preso embaixo: links alinhados entre cards de alturas diferentes */}
            <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5 pt-1">
              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[0.8125rem] font-medium text-accent"
                  >
                    {t("projects.live")}
                    <ArrowUpRightIcon className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-[0.8125rem] text-muted hover:text-text"
                  >
                    {t("projects.repo")}
                  </a>
                ) : null}

                {project.privateCode ? (
                  <span className="font-mono text-xs text-muted">{t("projects.private")}</span>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
