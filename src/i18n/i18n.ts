import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./en.json";
import no from "./no.json";
import jp from "./jp.json";
import pl from "./pl.json";

i18n
  // Detect browser language (and use saved one if available)
  .use(LanguageDetector)
  // Connect i18next to React
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: { translation: en },
      no: { translation: no },
      jp: { translation: jp },
      pl: { translation: pl },
    },

    // Default language if detection fails
    fallbackLng: "en",

    // Language detection configuration
    detection: {
      // Detection priority
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      // Where to store the chosen language
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // React already escapes text
    },
  });

// Keep <html lang="xx"> updated for SEO and accessibility
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
