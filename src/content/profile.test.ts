import { describe, expect, it } from "vitest";
import { profile } from "@/content/profile";
import { ui, translate } from "@/i18n/ui";

const LANGS = ["pt", "en"] as const;

describe("conteúdo bilíngue", () => {
  it("traduz toda chave de UI nos dois idiomas", () => {
    for (const [key, entry] of Object.entries(ui)) {
      for (const lang of LANGS) {
        expect(entry[lang], `${key}.${lang}`).toBeTruthy();
        expect(translate(key, lang)).not.toBe(key);
      }
    }
  });

  it("tem PT e EN em todo texto de perfil", () => {
    const localized = [
      profile.role,
      profile.location,
      profile.available,
      profile.headline,
      profile.intro,
      ...profile.about,
      ...profile.stack.map((s) => s.label),
      ...profile.experience.flatMap((e) => [e.role, e.period, e.place, ...e.bullets]),
      ...profile.education.map((e) => e.course),
      ...profile.projects.map((p) => p.summary),
    ];

    for (const entry of localized) {
      for (const lang of LANGS) {
        expect(entry[lang]?.trim().length ?? 0).toBeGreaterThan(0);
      }
    }
  });

  it("usa uma chave de nav para cada seção do menu", () => {
    for (const id of ["home", "about", "stack", "experience", "projects", "contact"]) {
      expect(ui[`nav.${id}`]).toBeDefined();
    }
  });
});

describe("integridade dos dados", () => {
  it("não repete nome de projeto", () => {
    const names = profile.projects.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("aponta cada projeto para um link ou marca o código como privado", () => {
    for (const project of profile.projects) {
      expect(Boolean(project.live || project.repo || project.privateCode), project.name).toBe(true);
    }
  });

  it("mantém experiências em ordem decrescente de início", () => {
    const starts = profile.experience.map((job) => job.period.en.slice(0, 8));
    expect(starts[0]).toContain("2025");
    expect(profile.experience.filter((job) => job.current).length).toBe(1);
  });

  it("usa links externos absolutos e e-mail válido", () => {
    const { email, whatsapp, linkedin, github, cv } = profile.contact;
    expect(email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
    for (const url of [whatsapp, linkedin, github]) expect(url).toMatch(/^https:\/\//);
    for (const url of [cv.pt, cv.en]) expect(url).toMatch(/^\/.+\.pdf$/);
    expect(cv.pt).not.toBe(cv.en);
  });
});
