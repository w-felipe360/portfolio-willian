import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ArrowDownIcon, DownloadIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons";
import portrait from "@/assets/willian.webp";

const SOCIALS = [
  { key: "linkedin", href: profile.contact.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "whatsapp", href: profile.contact.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
] as const;

export function Hero() {
  const { t, tx } = useLang();

  return (
    <section id="home" className="scroll-mt-28 pt-8 pb-10 sm:pt-14">
      <div className="glass px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_16.5rem] md:gap-10">
          <div className="text-center md:text-left">
            <h1
              className="glitch text-display font-medium lowercase"
              data-text={profile.name.toLowerCase()}
            >
              {profile.name.toLowerCase()}
            </h1>

            <p className="mt-4 font-mono text-[0.7rem] tracking-[0.3em] text-accent uppercase sm:text-xs">
              {tx(profile.role)}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {tx(profile.intro)}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-muted md:justify-start">
              <span>{tx(profile.location)}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_-14px_var(--glow)] transition-transform hover:-translate-y-0.5"
              >
                {t("hero.cta")}
              </a>
              <a
                href={tx(profile.contact.cv)}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-text"
              >
                {t("hero.cv")}
                <DownloadIcon />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              {SOCIALS.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-btn text-lg"
                >
                  <Icon />
                </a>
              ))}
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label={t("contact.email")}
                className="icon-btn text-lg"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {/* retrato: no mobile vem antes do texto (ordem visual), no desktop à direita */}
          <div className="order-first mx-auto w-[min(68vw,16.5rem)] md:order-none md:w-full">
            <div className="relative">
              {/* glow por gradiente puro: filter: blur aqui rerasterizaria a área a cada repaint */}
              <span
                className="portrait-blob absolute -inset-5 opacity-80"
                style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="portrait-blob portrait-fill relative aspect-[5/6] w-full overflow-hidden ring-1 ring-accent/45">
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
      </div>

      <div className="mt-8 text-center">
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <ArrowDownIcon className="animate-bounce" />
          {t("hero.scroll")}
        </a>
      </div>
    </section>
  );
}
