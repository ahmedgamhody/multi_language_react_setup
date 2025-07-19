import { useNavigate, useParams } from "react-router-dom";
import { Languages } from "../constants/enums";
import { useTypedTranslation } from "../hooks/useTypedTranslation";

export default function Header() {
  const { t } = useTypedTranslation();
  const navigate = useNavigate();
  const { locale } = useParams<{ locale: string }>();
  const getCurrentUrl = () => {
    const segments = window.location.pathname.split("/").filter(Boolean);
    return segments.slice(1).join("/");
  };
  const switchLanguage = (newLanguage: Languages) => {
    navigate(`/${newLanguage}/${getCurrentUrl()}`, {
      replace: true,
    });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1>{t("logo")}</h1>
      <div className="flex space-x-2">
        {locale === Languages.ENGLISH ? (
          <button
            onClick={() => switchLanguage(Languages.ARABIC)}
            className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-colors"
          >
            العربية
          </button>
        ) : (
          <button
            onClick={() => switchLanguage(Languages.ENGLISH)}
            className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-colors"
          >
            English
          </button>
        )}
      </div>
    </div>
  );
}
