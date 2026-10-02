import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Experience() {
  const { t, tx } = useLang();

  return (
    <Section id="experience" title={t("section.experience")}>
      <ol className="border-t border-line">
        {profile.experience.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start">
              <p className="font-mono text-xs leading-6 text-muted">{tx(job.period)}</p>
              {job.current ? <span className="badge-ok">{t("experience.current")}</span> : null}
            </div>

            <div>
              <h3 className="text-base font-medium text-text">
                {tx(job.role)}
                <span className="font-normal text-muted"> · {job.company}</span>
              </h3>
              <p className="mt-0.5 font-mono text-xs text-muted">{tx(job.place)}</p>

              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-[1.7] text-text-soft marker:text-line-strong">
                {job.bullets.map((bullet, index) => (
                  <li key={index}>{tx(bullet)}</li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
