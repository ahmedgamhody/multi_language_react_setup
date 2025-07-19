import { useTranslation } from "react-i18next";
import type en from "../locale/en.json";

// Helper type to get nested keys from an object
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Create a type for all possible translation keys including nested ones
type AllTranslationKeys = NestedKeyOf<typeof en>;

export function useTypedTranslation() {
  const { t: originalT, i18n, ready } = useTranslation();

  const typedT = (key: AllTranslationKeys): string => {
    return originalT(key);
  };

  return { t: typedT, i18n, ready };
}
