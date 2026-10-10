import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Stack() {
  const { t, tx } = useLang();

  return (
    <Section id="stack" title={t("section.stack")} meta={`${profile.stack.length} ${t("meta.stack")}`}>
      {/* tabela de linhas: área à esquerda, tecnologias à direita */}
      <dl className="border-b border-line">
        {profile.stack.map((group) => (
          <div
            key={group.items[0]}
            className="grid gap-2 border-t border-line py-3 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:items-baseline"
          >
            <dt className="text-sm font-medium text-text">{tx(group.label)}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
