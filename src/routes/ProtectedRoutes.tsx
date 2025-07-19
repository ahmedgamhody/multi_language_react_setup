import { Outlet, Navigate } from "react-router-dom";
import UnauthorizedPage from "../pages/errors/UnauthorizedPage";
interface ProtectedRoutesProps {
  allowedRoles: string[];
}

export default function ProtectedRoutes({
  allowedRoles,
}: ProtectedRoutesProps) {
  const token = "";
  const role = "user";
  const getCurrentLocale = () => {
    const currentUrl = window.location.pathname;
    return currentUrl.split("/")[1];
  };
  if (!token || !role) {
    return <Navigate to={`/${getCurrentLocale()}/login`} replace />;
  }
  if (!allowedRoles.includes(role)) {
    return <UnauthorizedPage />;
  }
  return <Outlet />;
}
