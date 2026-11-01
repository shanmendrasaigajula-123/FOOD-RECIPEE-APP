import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

// Navbar used inside the User and Admin modules
export default function DashNav({ admin = false }) {
  const { logout } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast(admin ? "Admin logged out successfully!" : "You have been logged out successfully!");
    navigate(admin ? "/admin-login" : "/login");
  };

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-logo">{admin ? "🍴 Foodie Admin" : "🍴 Foodie"}</div>

      <div className="dashboard-links">
        {admin ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/recipes">Recipes</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/recipes">View Site</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/favorites">Favorites</Link>
          </>
        )}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}
