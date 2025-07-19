import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { withLocaleValidation } from "../components/localization/withLocaleValidation";

export function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
}

const MainLayoutWithLocale = withLocaleValidation(MainLayout);
export default MainLayoutWithLocale;
