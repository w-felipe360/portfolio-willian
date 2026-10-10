import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { stagger } from "./Section";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";
import portrait from "@/assets/willian.webp";

export function Hero() {
  const { t, tx } = useLang();

  return (
    <section id="home" className="scroll-mt-28 pt-24 sm:pt-32">
      <div className="grid items-end gap-7 pb-8 md:grid-cols-[minmax(0,1fr)_12.5rem] md:gap-10 md:pb-9">
        <div>
          <h1 data-reveal style={stagger(0)} className="text-display font-semibold text-text">
            {profile.name}
          </h1>

          <p data-reveal style={stagger(1)} className="mt-3 text-[1.0625rem] font-medium text-text-soft">
            {tx(profile.role)}
            {/* no mobile a cidade desce para a própria linha em vez de quebrar no meio */}
            <span className="block font-normal text-muted sm:inline">
              <span className="hidden sm:inline" aria-hidden="true">
                {" · "}
              </span>
              {tx(profile.location)}
            </span>
          </p>

          <p data-reveal style={stagger(2)} className="mt-3 max-w-[60ch] leading-[1.65] text-muted">
            {tx(profile.intro)}
          </p>

          <div data-reveal style={stagger(3)} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#contact" className="group btn-primary">
              {t("hero.cta")}
              <span className="btn-icon" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </a>
            <a
              href={tx(profile.contact.cv)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex items-center gap-1.5 text-sm font-medium text-text-soft"
            >
              {t("hero.cv")}
              <DownloadIcon />
            </a>
          </div>
        </div>

        {/* retrato: no mobile vem antes do texto (ordem visual), no desktop à direita */}
        <div data-reveal style={stagger(2)} className="order-first w-36 md:order-none md:w-full">
          <div className="card aspect-[5/6] overflow-hidden rounded-[1.125rem] bg-surface-muted">
            <img
              src={portrait}
              alt={profile.name}
              width={660}
              height={792}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* faixa de fatos: 2×2 no mobile, uma linha no desktop, separada por fios */}
      <dl data-reveal style={stagger(4)} className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {profile.facts.map((fact, i) => (
          <div
            key={fact.label.en}
            className={`py-3.5 ${i % 2 === 1 ? "border-l border-line pl-4" : "pr-4"} ${
              i >= 2 ? "border-t border-line md:border-t-0" : ""
            } ${i === 2 ? "md:border-l md:pl-4" : ""}`}
          >
            <dt className="text-xs text-muted">{tx(fact.label)}</dt>
            <dd className="mt-0.5 text-sm font-medium text-text">{tx(fact.value)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
