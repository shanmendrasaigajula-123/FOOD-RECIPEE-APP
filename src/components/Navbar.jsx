import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

// Public website navbar - changes buttons depending on who is logged in
export default function Navbar() {
  const { session, isUser, isAdmin, logout } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    showToast("You have been logged out successfully!");
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
        <span>🍴</span> Foodie
      </Link>

      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active" : "")}>
          Recipes
        </NavLink>
        <Link to="/#categories">Categories</Link>
        <Link to="/#about">About</Link>
      </nav>

      <div className="nav-buttons">
        {session ? (
          <>
            <Link to={isAdmin ? "/admin" : "/dashboard"} className="login-btn">
              {isAdmin ? "Admin Panel" : "Dashboard"}
            </Link>
            <a href="#logout" className="signup-btn" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}
