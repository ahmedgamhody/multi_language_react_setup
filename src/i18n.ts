import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locale/en.json";
import ar from "./locale/ar.json";

export const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

export type Translations = typeof en;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

i18n.on("languageChanged", (lng) => {
  document.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
