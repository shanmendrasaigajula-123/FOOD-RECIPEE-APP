import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// role = "user" or "admin". Wrong / no login -> sent to the right login page.
export default function ProtectedRoute({ role, children }) {
  const { session } = useAuth();
  const location = useLocation();

  if (!session) {
    return (
      <Navigate
        to={role === "admin" ? "/admin-login" : "/login"}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  if (session.role !== role) {
    // logged in, but in the other module
    return <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />;
  }

  return children;
}
