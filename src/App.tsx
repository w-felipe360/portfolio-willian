import { About } from "@/components/About";
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-bg focus:px-3 focus:py-2 focus:text-sm focus:ring-1 focus:ring-accent"
      >
        {t("a11y.skip")}
      </a>

      <SiteHeader />

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <main>
          <Hero />
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
