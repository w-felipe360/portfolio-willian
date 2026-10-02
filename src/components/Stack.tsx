import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Stack() {
  const { t, tx } = useLang();

  return (
    <Section id="stack" title={t("section.stack")}>
      <dl className="space-y-5">
        {profile.stack.map((group) => (
          <div key={group.items[0]} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium text-text">{tx(group.label)}</dt>
            <dd className="text-sm leading-[1.7] text-soft">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
