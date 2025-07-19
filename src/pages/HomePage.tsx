import { useTypedTranslation } from "../hooks/useTypedTranslation";

export default function HomePage() {
  const { t } = useTypedTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500">{t("homePage.title")}</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl text-center">
        {t("homePage.description")}
      </p>
    </div>
  );
}
