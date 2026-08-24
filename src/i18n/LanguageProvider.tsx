import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Lang, Localized } from "@/content/profile";
import { translate } from "./ui";

const STORAGE_KEY = "wfb-lang";

interface LanguageValue {
  lang: Lang;
  toggle: () => void;
  /** texto de UI por chave */
  t: (key: string) => string;
  /** texto de conteúdo já localizado */
  tx: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function readInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return readInitialLang();
    } catch {
      return "pt";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* modo privado: seguir sem persistir */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((prev) => (prev === "pt" ? "en" : "pt")), []);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      toggle,
      t: (key) => translate(key, lang),
      tx: (entry) => entry[lang],
    }),
    [lang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de <LanguageProvider>");
  return ctx;
}
