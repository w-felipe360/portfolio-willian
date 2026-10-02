import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { stagger } from "./Section";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";
import portrait from "@/assets/willian.webp";
export function Hero() {
  const { t, tx } = useLang();

  return (
    <section id="home" className="scroll-mt-28 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-14">
        <div>
          <h1 data-reveal style={stagger(0)} className="text-display font-semibold text-text">
            {profile.name}
          </h1>

          <p data-reveal style={stagger(1)} className="mt-5 text-lg font-medium text-text-soft sm:text-xl">
            {tx(profile.role)}
            <span className="font-normal text-muted"> · {tx(profile.location)}</span>
          </p>

          <p data-reveal style={stagger(2)} className="mt-5 max-w-[60ch] leading-[1.7] text-muted">
            {tx(profile.intro)}
          </p>

          <div data-reveal style={stagger(3)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        <div data-reveal style={stagger(2)} className="order-first w-[min(60vw,15rem)] md:order-none md:w-full">
          <div className="bezel" style={{ "--bezel-r": "1.75rem" } as React.CSSProperties}>
            <div className="bezel-core aspect-[5/6] overflow-hidden bg-surface-muted">
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
      </div>
    </section>
  );
}
