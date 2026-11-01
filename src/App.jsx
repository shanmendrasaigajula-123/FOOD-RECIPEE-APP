import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollManager from "./components/ScrollManager";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

import UserDashboard from "./pages/user/UserDashboard";
import Favorites from "./pages/user/Favorites";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRecipes from "./pages/admin/AdminRecipes";
import AdminUsers from "./pages/admin/AdminUsers";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        {/* ---------- Public pages ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ---------- User module ---------- */}
        <Route path="/dashboard" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
        <Route path="/favorites" element={<ProtectedRoute role="user"><Favorites /></ProtectedRoute>} />

        {/* ---------- Admin module ---------- */}
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/recipes" element={<ProtectedRoute role="admin"><AdminRecipes /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute role="admin"><AdminUsers /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
