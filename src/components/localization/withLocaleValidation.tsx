import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "../../constants/enums";

export function withLocaleValidation<T extends object>(
  Component: React.ComponentType<T>
) {
  const WrappedComponent = function LocaleValidatedComponent(props: T) {
    const { locale } = useParams<{ locale: string }>();
    const { i18n } = useTranslation();

    // Validate locale
    const isValidLocale =
      locale && Object.values(Languages).includes(locale as Languages);

    useEffect(() => {
      if (isValidLocale && i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    }, [locale, i18n, isValidLocale]);

    // Redirect to valid locale if invalid
    if (!isValidLocale) {
      return <Navigate to="/en" replace />;
    }

    return <Component {...props} />;
  };

  // Set display name for debugging
  WrappedComponent.displayName = `withLocaleValidation(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}
