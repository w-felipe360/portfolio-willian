import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import "@/styles/global.css";

import { App } from "@/App";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider } from "@/theme/ThemeProvider";

const container = document.getElementById("root");
if (!container) throw new Error("#root não encontrado no index.html");

createRoot(container).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
