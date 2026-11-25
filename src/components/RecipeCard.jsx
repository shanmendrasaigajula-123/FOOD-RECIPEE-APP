import { Link } from "react-router-dom";
import RecipeImage from "./RecipeImage";
import { useRecipes } from "../context/RecipeContext";
import { cuisineIcon } from "../utils/helpers";

export default function RecipeCard({ recipe: r }) {
  const { isFavorite, toggleFavorite } = useRecipes();
  const saved = isFavorite(r.id);

  return (
    <article className="professional-recipe-card">
      <RecipeImage recipe={r} className="professional-food-image">
        {r.tag && <span className="food-tag">{r.tag}</span>}
        <button
          className={"heart-btn" + (saved ? " saved" : "")}
          aria-label={`Save ${r.name}`}
          onClick={() => toggleFavorite(r.id)}
        >
          {saved ? "♥" : "♡"}
        </button>
      </RecipeImage>

      <div className="professional-recipe-content">
        <div className="food-rating">⭐ {r.rating} · {cuisineIcon(r.cuisine)} {r.cuisine}</div>
        <h3>{r.name}</h3>
        <p>{r.description}</p>

        <div className="food-details">
          <span>⏱ {r.time} min</span>
          <span>👨‍🍳 {r.difficulty}</span>
        </div>

        <Link to={`/recipe/${r.id}`} className="recipe-view-btn">
          View Recipe →
        </Link>
      </div>
    </article>
  );
}
