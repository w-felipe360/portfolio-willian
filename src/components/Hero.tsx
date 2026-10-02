import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import portrait from "@/assets/willian.webp";

export function Hero() {
  const { t, tx } = useLang();

  return (
    <section id="home" className="scroll-mt-20 pt-14 pb-20 sm:pt-24 md:pb-28">
      <img
        src={portrait}
        alt={profile.name}
        width={660}
        height={792}
        className="size-20 rounded-lg object-cover object-top sm:size-24"
      />

      <h1 className="headline mt-8 max-w-[21ch] text-text">{tx(profile.headline)}</h1>

      <p className="mt-8 max-w-[58ch] text-lg leading-[1.6] text-soft">
        {profile.name}, {tx(profile.role).toLowerCase()}. {tx(profile.location)}.{" "}
        <span className="text-muted">{tx(profile.intro)}</span>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href="#contact" className="btn">
          {t("hero.cta")}
        </a>
        <a href={tx(profile.contact.cv)} download target="_blank" rel="noopener noreferrer" className="link text-[0.9375rem]">
          {t("hero.cv")}
        </a>
        <span className="flex items-center gap-2 text-sm text-muted">
          <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
          {tx(profile.available)}
        </span>
      </div>
    </section>
  );
}
