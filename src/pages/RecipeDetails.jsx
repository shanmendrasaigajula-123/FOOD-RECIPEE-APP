import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeImage from "../components/RecipeImage";
import { useRecipes } from "../context/RecipeContext";
import { useToast } from "../context/ToastContext";
import { capitalize } from "../utils/helpers";

export default function RecipeDetails() {
  const { id } = useParams();
  const { findRecipe, isFavorite, toggleFavorite } = useRecipes();
  const showToast = useToast();
  const r = findRecipe(id);

  useEffect(() => {
    document.title = (r ? r.name : "Recipe not found") + " - Foodie";
    return () => {
      document.title = "Foodie - Discover Delicious Recipes";
    };
  }, [r]);

  const share = () => {
    const data = {
      title: r.name,
      text: `Check out this delicious ${r.name} recipe on Foodie!`,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator.share(data).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(
        () => showToast("Recipe link copied! 🍴"),
        () => showToast("Could not copy the link.")
      );
    } else {
      showToast("Copy the link from the address bar to share.");
    }
  };

  if (!r) {
    return (
      <>
        <Navbar />
        <section className="recipe-not-found">
          <div>🍽️</div>
          <h1>Recipe not found</h1>
          <p>We could not find the recipe you were looking for.</p>
          <Link to="/recipes" className="recipe-view-btn">← Back to Recipes</Link>
        </section>
        <Footer />
      </>
    );
  }

  const saved = isFavorite(r.id);

  return (
    <>
      <Navbar />

      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/recipes">Recipes</Link>
        <span>›</span>
        <span>{r.name}</span>
      </div>

      <section className="recipe-detail-header">
        <RecipeImage recipe={r} className="detail-image" />

        <div className="detail-intro">
          <span className="detail-tag">{capitalize(r.category)} Recipe</span>
          <h1>{r.name}</h1>
          <p className="detail-description">{r.longDescription || r.description}</p>

          <div className="detail-rating">
            <span>⭐ {r.rating}</span>
            <span className="stars">★★★★★</span>
            {r.reviews ? <span>{r.reviews} Reviews</span> : null}
          </div>

          <div className="detail-meta">
            <div>
              <span>⏱️</span>
              <strong>{r.time} min</strong>
              <small>Total Time</small>
            </div>
            <div>
              <span>👨‍🍳</span>
              <strong>{r.difficulty}</strong>
              <small>Difficulty</small>
            </div>
            <div>
              <span>🍽️</span>
              <strong>{r.servings}</strong>
              <small>Servings</small>
            </div>
          </div>

          <div className="detail-actions">
            <button
              className={"favorite-main" + (saved ? " saved" : "")}
              onClick={() => toggleFavorite(r.id)}
            >
              {saved ? "♥ Saved" : "♡ Save Recipe"}
            </button>
            <button className="share-btn" onClick={share}>↗ Share</button>
          </div>
        </div>
      </section>

      <main className="recipe-detail-content">
        <section className="ingredients-section">
          <div className="detail-section-title">
            <span>WHAT YOU NEED</span>
            <h2>Ingredients</h2>
          </div>
          <div className="ingredient-list">
            {r.ingredients.length ? (
              r.ingredients.map((i, idx) => (
                <div className="ingredient" key={idx}>
                  <span>{i.icon}</span>
                  <p>
                    <strong>{i.name}</strong> {i.qty}
                  </p>
                </div>
              ))
            ) : (
              <p className="no-results">The ingredient list has not been added yet.</p>
            )}
          </div>
        </section>

        <section className="instructions-section">
          <div className="detail-section-title">
            <span>LET'S GET COOKING</span>
            <h2>How to Make It</h2>
          </div>
          {r.steps.length ? (
            r.steps.map((s, i) => (
              <div className="instruction" key={i}>
                <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">The cooking steps have not been added yet.</p>
          )}
        </section>
      </main>

      {r.tip && (
        <section className="cooking-tip">
          <div className="tip-icon">💡</div>
          <div>
            <h3>Chef's Tip</h3>
            <p>{r.tip}</p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
