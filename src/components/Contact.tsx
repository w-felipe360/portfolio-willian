import { useState } from "react";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";
import { CheckIcon, CopyIcon, LinkedinIcon, WhatsappIcon } from "./icons";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard bloqueado: o link mailto ao lado continua funcionando */
    }
  }

  const links = [
    { key: "whatsapp", label: t("contact.whatsapp"), href: profile.contact.whatsapp, Icon: WhatsappIcon },
    { key: "linkedin", label: t("contact.linkedin"), href: profile.contact.linkedin, Icon: LinkedinIcon },
  ];

  return (
    <Section id="contact" title={t("section.contact")}>
      <div className="card grid gap-4 p-[1.375rem] md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-7 md:py-[1.625rem]">
        <div>
          <p className="text-sm text-muted">{t("contact.lead")}</p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-link text-xl font-medium tracking-[-0.03em] [overflow-wrap:anywhere] text-text sm:text-[1.75rem]"
          >
            {profile.contact.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={copyEmail} className="chip">
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span aria-live="polite">{copied ? t("contact.copied") : t("contact.copy")}</span>
          </button>
          {links.map(({ key, label, href, Icon }) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="chip">
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
