import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ADMIN_EMAIL, ADMIN_PASSWORD, useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function AdminLogin() {
  const { adminLogin, session } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (session) return <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = adminLogin(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    showToast("Admin Login Successful! 🔐");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">🍴 Foodie</div>
        <h1>Admin Login</h1>
        <p className="auth-subtitle">Login to manage recipes and the Foodie application.</p>

        <form onSubmit={handleSubmit}>
          <label>Admin Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">Admin Login</button>
        </form>

        <p className="admin-hint">
          Demo login: {ADMIN_EMAIL} / {ADMIN_PASSWORD}
        </p>

        <p className="auth-bottom">
          Are you a user? <Link to="/login">User Login</Link>
        </p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}
