import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";
import { ArrowUpRightIcon } from "./icons";

export function Projects() {
  const { t, tx } = useLang();

  return (
    <Section
      id="projects"
      index="04"
      title={t("section.projects")}
      hint={t("section.projects.hint")}
    >
      <ul className="divide-y divide-line border-y border-line">
        {profile.projects.map((project) => (
          <li key={project.name} className="group py-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium text-text">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{tx(project.summary)}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-[0.7rem] text-muted/80">
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
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent transition-transform group-hover:translate-x-0.5"
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
                  className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-text"
                >
                  {t("projects.repo")}
                  <ArrowUpRightIcon />
                </a>
              ) : null}

              {project.privateCode ? (
                <span className="font-mono text-xs text-muted/70">{t("projects.private")}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
