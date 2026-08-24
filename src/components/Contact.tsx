import { useState } from "react";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { Section } from "./Section";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";

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

  /* identidade visual: só WhatsApp e LinkedIn como canais sociais */
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
    <Section id="contact" index="05" title={t("section.contact")} hint={t("section.contact.hint")}>
      <p className="max-w-xl text-base leading-relaxed text-muted">{t("contact.lead")}</p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <a
          href={`mailto:${profile.contact.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          <MailIcon className="text-base" />
          {profile.contact.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 font-mono text-xs text-muted transition-colors hover:bg-accent-soft hover:text-text"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span aria-live="polite">{copied ? t("contact.copied") : t("contact.copy")}</span>
        </button>
      </div>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {links.map(({ key, label, value, href, Icon }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
            >
              <Icon className="text-lg text-muted transition-colors group-hover:text-accent" />
              <span className="text-sm font-medium">{label}</span>
              <span className="ml-auto font-mono text-xs text-muted">{value}</span>
              <ArrowUpRightIcon className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
