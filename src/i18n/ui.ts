import type { Lang, Localized } from "@/content/profile";

type Dict = Record<string, Localized>;

export const ui: Dict = {
  "nav.home": { pt: "início", en: "home" },
  "nav.about": { pt: "sobre", en: "about" },
  "nav.stack": { pt: "stack", en: "stack" },
  "nav.experience": { pt: "experiência", en: "experience" },
  "nav.projects": { pt: "projetos", en: "projects" },
  "nav.contact": { pt: "contato", en: "contact" },

  "section.about": { pt: "Sobre", en: "About" },
  "section.stack": { pt: "Stack", en: "Stack" },
  "section.experience": { pt: "Experiência", en: "Experience" },
  "section.projects": { pt: "Projetos", en: "Projects" },
  "section.contact": { pt: "Contato", en: "Contact" },

  "hero.cta": { pt: "Falar comigo", en: "Get in touch" },
  "hero.cv": { pt: "Baixar CV", en: "Download CV" },

  "education.title": { pt: "Formação", en: "Education" },
  "experience.current": { pt: "atual", en: "current" },

  "projects.live": { pt: "ver online", en: "view live" },
  "projects.repo": { pt: "código", en: "source" },
  "projects.private": { pt: "código privado", en: "private code" },

  "contact.lead": {
    pt: "Aberto a projetos, freelas e vagas full stack.",
    en: "Open to projects, freelance work and full stack roles.",
  },
  "contact.email": { pt: "E-mail", en: "E-mail" },
  "contact.whatsapp": { pt: "WhatsApp", en: "WhatsApp" },
  "contact.linkedin": { pt: "LinkedIn", en: "LinkedIn" },
  "contact.github": { pt: "GitHub", en: "GitHub" },
  "contact.copy": { pt: "copiar", en: "copy" },
  "contact.copied": { pt: "copiado", en: "copied" },

  "a11y.theme": { pt: "Alternar tema", en: "Toggle theme" },
  "a11y.lang": { pt: "Mudar idioma", en: "Change language" },
  "a11y.menu": { pt: "Abrir menu", en: "Open menu" },
  "a11y.close": { pt: "Fechar menu", en: "Close menu" },
  "a11y.skip": { pt: "Pular para o conteúdo", en: "Skip to content" },
};

export function translate(key: string, lang: Lang): string {
  const entry = ui[key];
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`[i18n] chave ausente: ${key}`);
    return key;
  }
  return entry[lang];
}
