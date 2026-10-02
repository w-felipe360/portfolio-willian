import { useEffect, useState } from "react";
import type { SectionId } from "@/content/profile";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MoonIcon, SunIcon } from "./icons";

const NAV: readonly SectionId[] = ["home", "about", "stack", "experience", "projects", "contact"];

const controlClass =
  "inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-muted transition-colors hover:bg-surface-muted hover:text-text";

export function SiteHeader() {
  const { t, lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const active = useActiveSection(NAV);
  const [menuOpen, setMenuOpen] = useState(false);

  /* fecha no Esc e ao passar para desktop; trava o scroll do fundo enquanto aberto */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const query = window.matchMedia("(min-width: 768px)");
    const onResize = () => query.matches && setMenuOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    query.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      query.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ilha flutuante: destacada do topo, largura do conteúdo */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="island flex h-12 w-full max-w-4xl items-center gap-4 rounded-full pr-2 pl-5 md:w-max md:gap-6">
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight text-text transition-colors hover:text-text-soft"
          >
            {profile.name}
          </a>

          <nav aria-label={t("nav.home")} className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {NAV.slice(1).map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? "true" : undefined}
                    className={`rounded-full px-3 py-1.5 transition-colors duration-200 hover:text-text ${
                      active === id ? "bg-surface-muted text-text" : "text-muted"
                    }`}
                  >
                    {t(`nav.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-0.5 md:ml-0">
            <button type="button" onClick={toggleLang} aria-label={t("a11y.lang")} className={`${controlClass} font-mono text-xs`}>
              {lang}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t("a11y.theme")}
              aria-pressed={theme === "dark"}
              className={`${controlClass} text-base`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* hambúrguer: as duas linhas giram e formam o X */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t("a11y.close") : t("a11y.menu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className={`${controlClass} relative w-8 md:hidden`}
            >
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-[var(--ease-drawer)] ${
                  menuOpen ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-[var(--ease-drawer)] ${
                  menuOpen ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* menu mobile em tela cheia. Fechado = visibility:hidden, que tira os
          links da ordem de tabulação sem desmontar (e mantém a transição) */}
      <nav
        id="mobile-nav"
        aria-label={t("nav.home")}
        className={`fixed inset-0 z-40 bg-bg/95 transition-[opacity,visibility] duration-500 ease-[var(--ease-drawer)] md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-8">
          {NAV.map((id, i) => (
            <li key={id} className="overflow-hidden">
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === id ? "true" : undefined}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                className={`block py-1 text-4xl font-semibold tracking-[-0.035em] transition-[transform,opacity] duration-700 ease-[var(--ease-out)] ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${active === id ? "text-text" : "text-muted"}`}
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
