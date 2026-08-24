import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function About() {
  const { t, tx } = useLang();

  return (
    <Section id="about" index="01" title={t("section.about")} hint={t("section.about.hint")}>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-[0.975rem] leading-relaxed text-muted">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{tx(paragraph)}</p>
          ))}
        </div>

        <div className="space-y-8">
          <dl className="space-y-4">
            {profile.numbers.map((item) => (
              <div key={item.value} className="flex items-baseline gap-3">
                <dt className="font-mono text-xl text-text tabular-nums">{item.value}</dt>
                <dd className="text-sm text-muted">{tx(item.label)}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="font-mono text-xs tracking-wide text-accent uppercase">
              {t("education.title")}
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((entry) => (
                <li key={entry.school}>
                  <p className="text-sm font-medium text-text">{entry.school}</p>
                  <p className="text-sm text-muted">{tx(entry.course)}</p>
                  <p className="font-mono text-xs text-muted/80">{entry.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
