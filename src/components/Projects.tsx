import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Projects() {
  const { t, tx } = useLang();

  return (
    <Section id="projects" title={t("section.projects")}>
      <ul className="space-y-14">
        {profile.projects.map((project) => (
          <li key={project.name}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl text-text sm:text-[1.75rem]">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="text-sm text-muted">{project.year}</span>
            </div>

            <p className="mt-3 text-[0.9375rem] leading-[1.7] text-soft">{tx(project.summary)}</p>
            <p className="mt-3 text-sm text-muted">{project.tags.join(", ")}</p>

            <p className="mt-4 flex flex-wrap gap-x-5 text-sm">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="link">
                  {t("projects.live")}
                </a>
              ) : null}
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link">
                  {t("projects.repo")}
                </a>
              ) : null}
              {project.privateCode ? <span className="text-muted">{t("projects.private")}</span> : null}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
