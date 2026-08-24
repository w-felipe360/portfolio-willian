import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Experience() {
  const { t, tx } = useLang();

  return (
    <Section
      id="experience"
      index="03"
      title={t("section.experience")}
      hint={t("section.experience.hint")}
    >
      <ol className="space-y-12">
        {profile.experience.map((job, i) => (
          <li key={`${job.company}-${i}`}>
            <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <p className="font-mono text-xs leading-6 text-muted">
                {tx(job.period)}
                {job.current ? (
                  <span className="ml-2 inline-block size-1.5 translate-y-px rounded-full bg-accent align-middle" />
                ) : null}
              </p>

              <div>
                <h3 className="text-base font-medium text-text">
                  {tx(job.role)}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted/80">{tx(job.place)}</p>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {job.bullets.map((bullet, index) => (
                    <li key={index} className="relative pl-4">
                      <span
                        className="absolute top-2.5 left-0 size-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {tx(bullet)}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[0.7rem] text-text/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
