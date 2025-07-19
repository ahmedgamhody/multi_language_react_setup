import "react-i18next";

// Import your translation files
import type en from "./locale/en.json";
import type ar from "./locale/ar.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      en: {
        translation: typeof en;
      };
      ar: {
        translation: typeof ar; // Same structure as en
      };
    };
  }
}
