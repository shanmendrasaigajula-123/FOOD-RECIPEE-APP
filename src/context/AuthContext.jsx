import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { readJSON, writeJSON, removeKey } from "../utils/storage";

/*
  Authentication with localStorage (front-end demo only).
  Keys used:
    foodieUsers    -> [{ name, email, password }]   registered users
    foodieSession  -> { role: "user" | "admin", name, email }   who is logged in
  NOTE: passwords in localStorage are NOT secure - use a real backend in production.
*/

const USERS_KEY = "foodieUsers";
const SESSION_KEY = "foodieSession";

// Demo admin account
export const ADMIN_EMAIL = "admin@foodie.com";
export const ADMIN_PASSWORD = "admin123";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => readJSON(USERS_KEY, []));
  const [session, setSession] = useState(() => readJSON(SESSION_KEY, null));

  const saveUsers = (next) => {
    setUsers(next);
    writeJSON(USERS_KEY, next);
  };

  const startSession = (s) => {
    setSession(s);
    writeJSON(SESSION_KEY, s);
  };

  // ---------- USER SIGNUP ----------
  const signup = useCallback(
    (name, email, password) => {
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();

      if (!cleanName) return { ok: false, error: "Please enter your name." };
      if (password.length < 6)
        return { ok: false, error: "Password must be at least 6 characters." };
      if (cleanEmail === ADMIN_EMAIL)
        return { ok: false, error: "This email is reserved. Please use another one." };
      if (users.some((u) => u.email.toLowerCase() === cleanEmail))
        return { ok: false, error: "An account with this email already exists." };

      saveUsers([...users, { name: cleanName, email: cleanEmail, password }]);
      return { ok: true };
    },
    [users]
  );

  // ---------- USER LOGIN ----------
  const login = useCallback(
    (email, password) => {
      const cleanEmail = email.trim().toLowerCase();

      if (users.length === 0)
        return { ok: false, error: "No account found. Please sign up first." };

      const user = users.find(
        (u) => u.email.toLowerCase() === cleanEmail && u.password === password
      );
      if (!user) return { ok: false, error: "Invalid email or password." };

      startSession({ role: "user", name: user.name, email: user.email });
      return { ok: true };
    },
    [users]
  );

  // ---------- ADMIN LOGIN ----------
  const adminLogin = useCallback((email, password) => {
    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      startSession({ role: "admin", name: "Admin", email: ADMIN_EMAIL });
      return { ok: true };
    }
    return { ok: false, error: "Invalid admin email or password." };
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    removeKey(SESSION_KEY);
  }, []);

  // ---------- ADMIN: remove a registered user ----------
  const deleteUser = useCallback(
    (email) => {
      saveUsers(users.filter((u) => u.email !== email));
    },
    [users]
  );

  const value = useMemo(
    () => ({
      users,
      session,
      isUser: session?.role === "user",
      isAdmin: session?.role === "admin",
      signup,
      login,
      adminLogin,
      logout,
      deleteUser,
    }),
    [users, session, signup, login, adminLogin, logout, deleteUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
