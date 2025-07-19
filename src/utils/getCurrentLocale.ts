export const SUPPORTED_LOCALES = ["en", "ar"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const getCurrentLocale = (): SupportedLocale => {
  if (typeof window === "undefined") return "en";

  const segments = window.location.pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  return SUPPORTED_LOCALES.includes(maybeLocale as SupportedLocale)
    ? (maybeLocale as SupportedLocale)
    : "en";
};
