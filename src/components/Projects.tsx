import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";
import { ArrowUpRightIcon } from "./icons";

export function Projects() {
  const { t, tx } = useLang();

  return (
    <Section id="projects" title={t("section.projects")}>
      {/* bento: projeto mais recente em destaque, os demais lado a lado */}
      <ul className="grid gap-3 md:grid-cols-2">
        {profile.projects.map((project, i) => (
          <li
            key={project.name}
            className={`flex flex-col rounded-xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-hover sm:p-8 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className={`font-semibold tracking-[-0.03em] text-text ${
                  i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                }`}
              >
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="font-mono text-xs text-muted tabular-nums">{project.year}</span>
            </div>

            <p className="mt-3 max-w-[62ch] text-sm leading-[1.7] text-text-soft">
              {tx(project.summary)}
            </p>

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
                  className="text-link inline-flex items-center gap-1 text-sm font-medium text-text"
                >
                  {t("projects.live")}
                  <ArrowUpRightIcon />
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
                  <ArrowUpRightIcon />
                </a>
              ) : null}

              {project.privateCode ? (
                <span className="font-mono text-xs text-muted">{t("projects.private")}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
