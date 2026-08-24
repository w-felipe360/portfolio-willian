import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Stack() {
  const { t, tx } = useLang();

  return (
    <Section id="stack" index="02" title={t("section.stack")} hint={t("section.stack.hint")}>
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {profile.stack.map((group) => (
          <div key={group.items[0]}>
            <h3 className="font-mono text-xs tracking-wide text-accent uppercase">
              {tx(group.label)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
