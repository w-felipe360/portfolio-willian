import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Experience() {
  const { t, tx } = useLang();
  /* ano de início da experiência mais antiga, tirado do próprio período */
  const firstYear = profile.experience.at(-1)?.period.en.match(/\d{4}/)?.[0];

  return (
    <Section
      id="experience"
      title={t("section.experience")}
      meta={firstYear ? `${firstYear} — ${t("meta.experience")}` : undefined}
    >
      <ol className="border-b border-line">
        {profile.experience.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            className="grid gap-1.5 border-t border-line py-[1.125rem] sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6"
          >
            <div className="flex flex-wrap content-start items-center gap-2">
              <p className="font-mono text-xs leading-6 text-muted">{tx(job.period)}</p>
              {job.current ? <span className="badge-ok">{t("experience.current")}</span> : null}
            </div>

            <div>
              <h3 className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-text">
                {tx(job.role)}
                <span className="font-normal text-muted"> · {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{tx(job.place)}</p>

              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-[1.65] text-text-soft marker:text-line-strong">
                {job.bullets.map((bullet, index) => (
                  <li key={index}>{tx(bullet)}</li>
                ))}
              </ul>

              <ul className="mt-2.5 flex flex-wrap gap-1.5">
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
