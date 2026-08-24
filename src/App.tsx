import { About } from "@/components/About";
import { Ambient } from "@/components/Ambient";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";
import { useLang } from "@/i18n/LanguageProvider";

export function App() {
  const { t } = useLang();

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-surface-solid focus:px-3 focus:py-2 focus:text-sm focus:ring-1 focus:ring-accent"
      >
        {t("a11y.skip")}
      </a>

      <Ambient />

      <div className="relative z-10">
        <SiteHeader />

        <main className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <Hero />
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
