import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section, stagger } from "./Section";

export function Stack() {
  const { t, tx } = useLang();

  return (
    <Section id="stack" title={t("section.stack")}>
      {/* bento assimétrico: front-end (o grupo mais extenso) ocupa duas colunas */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {profile.stack.map((group, i) => (
          <div
            key={group.items[0]}
            data-reveal
            style={stagger(i)}
            className={`bezel ${i === 0 ? "sm:col-span-2" : ""}`}
          >
            <div className="bezel-core p-6 sm:p-7">
              <h3 className="text-sm font-medium text-text">{tx(group.label)}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
