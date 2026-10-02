import { useState } from "react";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard bloqueado: o link mailto continua funcionando */
    }
  }

  return (
    <Section id="contact" title={t("section.contact")}>
      <p className="leading-[1.7] text-soft">{t("contact.lead")}</p>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <a href={`mailto:${profile.contact.email}`} className="display link text-2xl break-all sm:text-3xl">
          {profile.contact.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-text active:scale-[0.98]"
        >
          <span aria-live="polite">{copied ? t("contact.copied") : t("contact.copy")}</span>
        </button>
      </div>

      <dl className="mt-10 space-y-2 text-sm">
        <div className="flex gap-6">
          <dt className="w-24 text-muted">{t("contact.whatsapp")}</dt>
          <dd>
            <a href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="link">
              {profile.contact.phoneLabel}
            </a>
          </dd>
        </div>
        <div className="flex gap-6">
          <dt className="w-24 text-muted">{t("contact.linkedin")}</dt>
          <dd>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              /in/will-felipe
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
