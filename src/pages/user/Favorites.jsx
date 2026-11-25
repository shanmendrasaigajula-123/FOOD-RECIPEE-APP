import { Link } from "react-router-dom";
import DashNav from "../../components/DashNav";
import RecipeImage from "../../components/RecipeImage";
import { useRecipes } from "../../context/RecipeContext";
import { capitalize } from "../../utils/helpers";

export default function Favorites() {
  const { myFavorites, toggleFavorite } = useRecipes();

  return (
    <>
      <DashNav />

      <section className="favorites-page">
        <div className="favorites-heading">
          <p>MY COLLECTION</p>
          <h1>❤️ My Favorite Recipes</h1>
          <span>
            {myFavorites.length} {myFavorites.length === 1 ? "Recipe" : "Recipes"}
          </span>
        </div>

        {myFavorites.length > 0 ? (
          <div className="professional-recipe-grid">
            {myFavorites.map((r) => (
              <div className="professional-recipe-card" key={r.id}>
                <RecipeImage recipe={r} className="professional-food-image" />

                <div className="professional-recipe-content">
                  <span className="food-tag">{capitalize(r.category)}</span>
                  <h3>{r.name}</h3>

                  <Link to={`/recipe/${r.id}`} className="recipe-view-btn">
                    View Recipe →
                  </Link>

                  <button className="remove-favorite-btn" onClick={() => toggleFavorite(r.id)}>
                    Remove ❤️
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-favorites" style={{ display: "block" }}>
            <div>🍽️</div>
            <h2>No Favorite Recipes Yet</h2>
            <p>Explore recipes and save your favorite dishes here.</p>
            <Link to="/recipes">Explore Recipes →</Link>
          </div>
        )}
      </section>

      <footer className="dashboard-footer">
        <p>© 2026 Foodie Recipe App</p>
      </footer>
    </>
  );
}