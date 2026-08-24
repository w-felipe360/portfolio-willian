import { useEffect, useState } from "react";
import type { SectionId } from "@/content/profile";
import { profile } from "@/content/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";

const NAV: readonly SectionId[] = ["home", "about", "stack", "experience", "projects", "contact"];

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
    <header className="sticky top-0 z-50 pt-3 pb-1">
      <div className="glass-blur mx-auto flex h-14 w-full max-w-3xl items-center gap-4 px-5 sm:px-6">
        <a
          href="#home"
          className="font-mono text-sm tracking-tight text-text transition-colors hover:text-accent"
        >
          {profile.shortName.toLowerCase()}
          <span className="text-accent">.braz</span>
        </a>

        <nav aria-label={t("nav.home")} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-5 font-mono text-xs">
            {NAV.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`link-underline transition-colors hover:text-text ${
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
            className="rounded-full px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:bg-accent-soft hover:text-text"
          >
            {lang === "pt" ? "pt" : "en"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("a11y.theme")}
            aria-pressed={theme === "dark"}
            className="rounded-full p-2 text-base text-muted transition-colors hover:bg-accent-soft hover:text-text"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("a11y.close") : t("a11y.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-full p-2 text-base text-muted transition-colors hover:bg-accent-soft hover:text-text md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* menu mobile: removido da árvore quando fechado, então nada fica tabulável escondido */}
      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="glass mx-auto mt-2 w-full max-w-3xl overflow-hidden md:hidden"
        >
          <ul className="grid gap-1 px-4 py-4 font-mono text-sm">
            {NAV.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition-colors hover:bg-accent-soft ${
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
