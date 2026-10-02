import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function About() {
  const { t, tx } = useLang();

  return (
    <Section id="about" title={t("section.about")}>
      <div className="space-y-5 leading-[1.7] text-soft">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{tx(paragraph)}</p>
        ))}
      </div>

      <h3 className="mt-12 text-sm font-medium text-text">{t("education.title")}</h3>
      <ul className="mt-3 space-y-3">
        {profile.education.map((entry) => (
          <li key={entry.school} className="flex flex-wrap items-baseline justify-between gap-x-6 text-sm">
            <span className="text-soft">
              {tx(entry.course)}, <span className="text-muted">{entry.school}</span>
            </span>
            <span className="text-muted">{entry.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
