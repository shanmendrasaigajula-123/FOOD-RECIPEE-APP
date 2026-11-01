import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function Signup() {
  const { signup, session } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (session) return <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup(name, email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    showToast("Account created successfully! 🎉 Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">🍴 Foodie</div>
        <h1>Create Account</h1>
        <p className="auth-subtitle">Join Foodie and discover delicious recipes.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">Create Account</button>
        </form>

        <p className="auth-bottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}
