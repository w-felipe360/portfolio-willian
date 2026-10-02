import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Experience() {
  const { t, tx } = useLang();

  return (
    <Section id="experience" title={t("section.experience")}>
      <ol className="space-y-14">
        {profile.experience.map((job, i) => (
          <li key={`${job.company}-${i}`}>
            <p className={`text-sm ${job.current ? "text-ok" : "text-muted"}`}>{tx(job.period)}</p>
            <h3 className="display mt-1 text-xl text-text">{tx(job.role)}</h3>
            <p className="text-sm text-muted">
              {job.company}, {tx(job.place)}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-4 text-[0.9375rem] leading-[1.7] text-soft marker:text-muted">
              {job.bullets.map((bullet, index) => (
                <li key={index}>{tx(bullet)}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-muted">{job.tags.join(", ")}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
