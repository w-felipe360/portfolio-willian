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

  return (
    <Section id="projects" title={t("section.projects")}>
      {/* bento: projeto mais recente em destaque, os demais lado a lado */}
      <ul className="grid gap-4 md:grid-cols-2">
        {profile.projects.map((project, i) => (
          <li
            key={project.name}
            data-reveal
            style={{ ...stagger(i), ...brandVars(project.brand) }}
            className={`bezel ${project.brand ? "project-brand" : ""} ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="bezel-core project-core bezel-lift group flex flex-col p-6 sm:p-8">
              <div className="flex min-w-0 items-center gap-3.5">
                {project.brand ? (
                  <span className={`project-logo ${project.brand.padded ? "project-logo-padded" : ""}`} aria-hidden="true">
                    <img src={project.brand.logo} alt="" width={40} height={40} />
                  </span>
                ) : null}
                <div className="min-w-0">
                  <h3
                    className={`font-semibold tracking-[-0.03em] [overflow-wrap:anywhere] text-text ${
                      i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    }`}
                  >
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

              <p className="mt-4 max-w-[62ch] text-sm leading-[1.7] text-text-soft">{tx(project.summary)}</p>

              {/* rodapé preso embaixo: links alinhados entre cards de alturas diferentes */}
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="grow" />

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text"
                  >
                    {t("projects.live")}
                    <span
                      className="project-arrow inline-flex size-7 items-center justify-center rounded-full transition-transform duration-400 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-px"
                      aria-hidden="true"
                    >
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-center gap-1 text-sm text-muted hover:text-text"
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
