import { useEffect, useState } from "react";
import type { SectionId } from "@/content/profile";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";

const NAV: readonly SectionId[] = ["home", "about", "stack", "experience", "projects", "contact"];

const controlClass =
  "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-muted transition-colors hover:bg-line/60 hover:text-text";

export function SiteHeader() {
  const { t, lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const active = useActiveSection(NAV);
  const [menuOpen, setMenuOpen] = useState(false);

  /* fecha o menu ao passar para o breakpoint de desktop e no Esc */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const query = window.matchMedia("(min-width: 768px)");
    const onResize = () => query.matches && setMenuOpen(false);

    window.addEventListener("keydown", onKey);
    query.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      query.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#home"
          className="display text-base text-text transition-colors hover:text-soft"
        >
          {profile.name}
        </a>

        <nav aria-label={t("nav.home")} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {NAV.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`transition-colors hover:text-text ${
                    active === id ? "text-text" : "text-muted"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-4">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("a11y.lang")}
            className={`${controlClass} text-sm`}
          >
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("a11y.close") : t("a11y.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`${controlClass} text-base md:hidden`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* menu mobile: removido da árvore quando fechado, então nada fica tabulável escondido */}
      {menuOpen ? (
        <nav id="mobile-nav" className="border-t border-line md:hidden">
          <ul className="mx-auto grid max-w-4xl gap-0.5 px-3 py-3 text-sm">
            {NAV.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-md px-3 py-2 transition-colors hover:bg-line/60 ${
                    active === id ? "text-text" : "text-muted"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
