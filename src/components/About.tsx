import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function About() {
  const { t, tx } = useLang();

  return (
    <Section id="about" title={t("section.about")}>
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div className="max-w-[62ch] space-y-5 leading-[1.7] text-text-soft">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{tx(paragraph)}</p>
          ))}
        </div>

        <div className="space-y-10">
          <dl className="border-t border-line">
            {profile.numbers.map((item) => (
              <div
                key={item.value}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3"
              >
                <dt className="text-sm text-muted">{tx(item.label)}</dt>
                <dd className="font-mono text-sm text-text tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="text-sm font-medium text-text">{t("education.title")}</h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((entry) => (
                <li key={entry.school}>
                  <p className="text-sm font-medium text-text-soft">{entry.school}</p>
                  <p className="text-sm text-muted">{tx(entry.course)}</p>
                  <p className="font-mono text-xs text-muted">{entry.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
