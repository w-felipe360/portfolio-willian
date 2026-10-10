import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function About() {
  const { t, tx } = useLang();

  return (
    <Section id="about" title={t("section.about")} meta={t("meta.about")}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-10">
        <div className="max-w-[60ch] space-y-2.5 leading-[1.65] text-text-soft">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{tx(paragraph)}</p>
          ))}
        </div>

        <div>
          <h3 className="text-[0.8125rem] font-medium text-muted">{t("education.title")}</h3>
          <ul className="mt-3 space-y-3 text-sm">
            {profile.education.map((entry) => (
              <li key={entry.school}>
                <p>
                  <span className="font-medium text-text">{entry.school}</span>{" "}
                  <span className="font-mono text-xs text-muted tabular-nums">{entry.period}</span>
                </p>
                <p className="text-muted">{tx(entry.course)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
