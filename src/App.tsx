import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:locale" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route path="/:locale/admin" element={<AdminLayout />}>
            <Route index element={<div>Admin Dashboard</div>} />
            <Route path="users" element={<div>Users Management</div>} />
            <Route path="settings" element={<div>Admin Settings</div>} />
          </Route>
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
          <Route path="/:locale/user" element={<UserLayout />}>
            <Route index element={<div>User Dashboard</div>} />
            <Route path="profile" element={<div>User Profile</div>} />
            <Route path="orders" element={<div>User Orders</div>} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </div>
  );
}

export default App;
