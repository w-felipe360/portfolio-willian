import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { DownloadIcon } from "./icons";
import portrait from "@/assets/willian.webp";

export function Hero() {
  const { t, tx } = useLang();

  return (
    <section id="home" className="scroll-mt-20 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-14">
        <div>
          <h1 className="text-display font-semibold text-text">{profile.name}</h1>

          <p className="mt-5 text-lg font-medium text-text-soft sm:text-xl">{tx(profile.role)}</p>

          <p className="mt-5 max-w-[60ch] leading-[1.7] text-muted">{tx(profile.intro)}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="badge-ok">
              <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
              {tx(profile.available)}
            </span>
            <span className="font-mono text-xs text-muted">{tx(profile.location)}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#contact" className="btn-primary">
              {t("hero.cta")}
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
        <div className="order-first w-[min(60vw,15rem)] md:order-none md:w-full">
          <div className="aspect-[5/6] w-full overflow-hidden rounded-xl border border-line bg-surface-muted">
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
    </section>
  );
}
