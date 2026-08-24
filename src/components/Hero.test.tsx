import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { LanguageProvider } from "@/i18n/LanguageProvider";

/* O idioma inicial vem do localStorage; sem DOM basta um stub para escolher
   qual dicionário o provider carrega e conferir o PDF que o botão aponta. */
function renderHeroWith(lang: string): string {
  Object.defineProperty(globalThis, "localStorage", {
    value: {
      getItem: (key: string) => (key === "wfb-lang" ? lang : null),
      setItem: () => {},
    },
    configurable: true,
  });

  return renderToStaticMarkup(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>,
  );
}

afterEach(() => {
  Reflect.deleteProperty(globalThis, "localStorage");
});

describe("Hero", () => {
  it("baixa o CV do idioma ativo", () => {
    expect(renderHeroWith("pt")).toContain('href="/willian-braz-cv-pt.pdf"');
    expect(renderHeroWith("en")).toContain('href="/willian-braz-cv-en.pdf"');
  });

  it("marca o link do CV como download", () => {
    expect(renderHeroWith("pt")).toMatch(/href="\/willian-braz-cv-pt\.pdf"[^>]*download/);
  });
});
