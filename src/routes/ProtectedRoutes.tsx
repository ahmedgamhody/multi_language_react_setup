import { Outlet, Navigate, useParams } from "react-router-dom";
import UnauthorizedPage from "../pages/errors/UnauthorizedPage";
interface ProtectedRoutesProps {
  allowedRoles: string[];
}

export default function ProtectedRoutes({
  allowedRoles,
}: ProtectedRoutesProps) {
  const token = "ss";
  const role = "user";

  const { locale } = useParams();

  if (!token || !role) {
    return <Navigate to={`/${locale}/login`} replace />;
  }
  if (!allowedRoles.includes(role)) {
    return <UnauthorizedPage />;
  }
  return <Outlet />;
}
