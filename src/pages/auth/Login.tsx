import { useTypedTranslation } from "../../hooks/useTypedTranslation";

export default function Login() {
  const { t } = useTypedTranslation();
  return <div>{t("login")}</div>;
}
