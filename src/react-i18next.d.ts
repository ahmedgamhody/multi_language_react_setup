import "react-i18next";

// Import your translation files
import type en from "./locale/en.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      en: {
        translation: typeof en;
      };
      ar: {
        translation: typeof en; // Same structure as en
      };
    };
  }
}
