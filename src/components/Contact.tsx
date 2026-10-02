import { useState } from "react";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";
import { ArrowUpRightIcon, CheckIcon, CopyIcon, LinkedinIcon, WhatsappIcon } from "./icons";

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
    {
      key: "whatsapp",
      label: t("contact.whatsapp"),
      value: profile.contact.phoneLabel,
      href: profile.contact.whatsapp,
      Icon: WhatsappIcon,
    },
    {
      key: "linkedin",
      label: t("contact.linkedin"),
      value: "/in/will-felipe",
      href: profile.contact.linkedin,
      Icon: LinkedinIcon,
    },
  ];

  return (
    <Section id="contact" title={t("section.contact")}>
      <p className="max-w-[52ch] text-lg leading-[1.6] text-text-soft">{t("contact.lead")}</p>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${profile.contact.email}`}
          className="text-link text-2xl font-medium tracking-[-0.03em] break-all text-text sm:text-3xl"
        >
          {profile.contact.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-muted transition-[color,border-color,transform] duration-200 hover:border-line-strong hover:text-text active:scale-[0.98]"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span aria-live="polite">{copied ? t("contact.copied") : t("contact.copy")}</span>
        </button>
      </div>

      <ul className="mt-12 border-t border-line">
        {links.map(({ key, label, value, href, Icon }) => (
          <li key={key} className="border-b border-line">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-4 text-text-soft transition-colors hover:text-text"
            >
              <Icon className="text-lg text-muted transition-colors group-hover:text-text" />
              <span className="text-sm font-medium">{label}</span>
              <span className="ml-auto font-mono text-xs text-muted">{value}</span>
              <ArrowUpRightIcon className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
