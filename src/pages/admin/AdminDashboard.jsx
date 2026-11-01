import { Link } from "react-router-dom";
import DashNav from "../../components/DashNav";
import { useAuth } from "../../context/AuthContext";
import { useRecipes } from "../../context/RecipeContext";

export default function AdminDashboard() {
  const { users } = useAuth();
  const { recipes, adminRecipes, totalFavorites } = useRecipes();

  return (
    <>
      <DashNav admin />

      <section className="user-dashboard">
        <div className="dashboard-welcome">
          <p className="dashboard-label">ADMIN MODULE</p>
          <h1>Admin Dashboard 🔐</h1>
          <p>Manage recipes and control the Foodie recipe collection from one place.</p>
        </div>

        <div className="admin-stats">
          <div className="admin-stat">
            <strong>{recipes.length}</strong>
            <span>Total Recipes</span>
          </div>
          <div className="admin-stat">
            <strong>{adminRecipes.length}</strong>
            <span>Added by Admin</span>
          </div>
          <div className="admin-stat">
            <strong>{users.length}</strong>
            <span>Registered Users</span>
          </div>
          <div className="admin-stat">
            <strong>{totalFavorites}</strong>
            <span>Saved Favorites</span>
          </div>
        </div>

        <div className="dashboard-card-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon">➕</div>
            <h2>Add Recipe</h2>
            <p>Add a new recipe to the Foodie recipe collection.</p>
            <Link to="/admin/recipes">Add Recipe →</Link>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🍽️</div>
            <h2>Manage Recipes</h2>
            <p>View, edit and delete recipes from the application.</p>
            <Link to="/admin/recipes">Manage →</Link>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">👥</div>
            <h2>Manage Users</h2>
            <p>See every registered user and remove accounts.</p>
            <Link to="/admin/users">View Users →</Link>
          </div>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2026 Foodie Recipe App | Admin Module</p>
      </footer>
    </>
  );
}
