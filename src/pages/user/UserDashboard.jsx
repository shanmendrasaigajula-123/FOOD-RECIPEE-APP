import { Link } from "react-router-dom";
import DashNav from "../../components/DashNav";
import { useAuth } from "../../context/AuthContext";
import { useRecipes } from "../../context/RecipeContext";

export default function UserDashboard() {
  const { session } = useAuth();
  const { myFavorites } = useRecipes();

  return (
    <>
      <DashNav />

      <section className="user-dashboard">
        <div className="dashboard-welcome">
          <p className="dashboard-label">USER DASHBOARD</p>
          <h1>
            Welcome, <span>{session.name}</span> 👋
          </h1>
          <p>Discover delicious recipes and save your favorite dishes in one place.</p>
        </div>

        <div className="dashboard-card-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon">🍳</div>
            <h2>Explore Recipes</h2>
            <p>Browse delicious recipes from different categories.</p>
            <Link to="/recipes">Explore →</Link>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">❤️</div>
            <h2>My Favorites</h2>
            <p>
              You have saved {myFavorites.length} {myFavorites.length === 1 ? "recipe" : "recipes"}.
            </p>
            <Link to="/favorites">View Favorites →</Link>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🔍</div>
            <h2>Find Recipes</h2>
            <p>Search for recipes according to your taste.</p>
            <Link to="/recipes">Search Now →</Link>
          </div>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2026 Foodie Recipe App | User Module</p>
      </footer>
    </>
  );
}
