import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function Login() {
  const { login, session } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // already logged in -> go to the right dashboard
  if (session) return <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    showToast("Login successful! 🎉");
    const from = location.state?.from;
    navigate(from && !from.startsWith("/admin") ? from : "/dashboard", { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">🍴 Foodie</div>
        <h1>Welcome Back!</h1>
        <p className="auth-subtitle">Login to continue exploring delicious recipes.</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-bottom">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
        <p className="auth-bottom">
          Are you an admin? <Link to="/admin-login">Admin Login</Link>
        </p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}
