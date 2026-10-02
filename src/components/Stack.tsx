import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Stack() {
  const { t, tx } = useLang();

  return (
    <Section id="stack" title={t("section.stack")}>
      {/* bento assimétrico: o primeiro grupo (front-end, o mais extenso) ocupa duas colunas */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {profile.stack.map((group, i) => (
          <div
            key={group.items[0]}
            className={`rounded-xl border border-line bg-surface p-6 sm:p-7 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <h3 className="text-sm font-medium text-text">{tx(group.label)}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="tag">
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
