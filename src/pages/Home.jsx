import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeImage from "../components/RecipeImage";
import { useRecipes } from "../context/RecipeContext";
import { CATEGORIES, CUISINES } from "../utils/helpers";

export default function Home() {
  const { recipes, isFavorite, toggleFavorite } = useRecipes();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const trending = recipes.slice(0, 3);

  const handleSearch = () => {
    const text = search.trim();
    if (!text) return;
    navigate("/recipes?search=" + encodeURIComponent(text));
  };

  const countFor = (cat) => {
    const n = recipes.filter((r) => r.category === cat).length;
    return n + (n === 1 ? " Recipe" : " Recipes");
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO FOODIE 👨‍🍳</p>
          <h1>
            Discover Your <span>Inner Chef</span>
          </h1>
          <p className="hero-text">
            Discover delicious recipes, explore new flavors and make every meal special.
          </p>

          <div className="hero-search">
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>🔍 Search</button>
          </div>

          <Link to="/recipes" className="explore-btn">
            Explore Recipes →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="categories">
        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Browse By Category</h2>
          <span>Find the perfect recipe for every occasion</span>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <div
              className="category"
              key={c.value}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/recipes?category=" + c.value)}
            >
              <div className="category-icon">{c.icon}</div>
              <h3>{c.label}</h3>
              <p>{countFor(c.value)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CUISINES */}
      <section className="categories" id="cuisines">
        <div className="section-heading">
          <p>AROUND THE WORLD</p>
          <h2>Browse By Cuisine</h2>
          <span>Indian, Italian, French, American, Japanese and many more</span>
        </div>

        <div className="category-grid">
          {CUISINES.map((c) => {
            const n = recipes.filter((r) => r.cuisine === c.value).length;
            return (
              <div
                className="category"
                key={c.value}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/recipes?cuisine=" + c.value)}
              >
                <div className="category-icon">{c.icon}</div>
                <h3>{c.value}</h3>
                <p>{n + (n === 1 ? " Recipe" : " Recipes")}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRENDING */}
      <section className="trending">
        <div className="section-heading">
          <p>POPULAR NOW 🔥</p>
          <h2>Trending Recipes</h2>
          <span>Everyone's cooking these delicious recipes</span>
        </div>

        <div className="recipe-grid">
          {trending.map((r) => {
            const saved = isFavorite(r.id);
            return (
              <div className="recipe" key={r.id}>
                <RecipeImage recipe={r} className="recipe-image">
                  <span
                    className={"favorite" + (saved ? " saved" : "")}
                    role="button"
                    aria-label={`Save ${r.name}`}
                    onClick={() => toggleFavorite(r.id)}
                  >
                    {saved ? "♥" : "♡"}
                  </span>
                  {r.tag && <span className="tag">{r.tag}</span>}
                </RecipeImage>

                <div className="recipe-content">
                  <div className="rating">⭐ {r.rating}</div>
                  <h3>{r.name}</h3>
                  <p>{r.description}</p>

                  <div className="recipe-bottom">
                    <span>⏱ {r.time} min</span>
                    <Link to={`/recipe/${r.id}`}>View Recipe →</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all">
          <Link to="/recipes">View All Recipes →</Link>
        </div>
      </section>

      {/* WHY FOODIE */}
      <section className="why-foodie" id="about">
        <div className="why-image">🍳</div>

        <div className="why-content">
          <p>WHY CHOOSE FOODIE?</p>
          <h2>
            Cooking Made <span>Simple &amp; Delicious</span>
          </h2>
          <p className="description">
            Whether you're a beginner or an experienced cook, Foodie helps you discover easy
            recipes and create delicious meals at home.
          </p>

          <div className="features">
            <div>
              <span>✓</span>
              <strong>Easy Recipes</strong>
              <p>Simple instructions anyone can follow.</p>
            </div>
            <div>
              <span>✓</span>
              <strong>Fresh Ingredients</strong>
              <p>Recipes using simple ingredients.</p>
            </div>
            <div>
              <span>✓</span>
              <strong>Save Favorites</strong>
              <p>Keep your favorite recipes in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Cook Something Delicious?</h2>
        <p>Explore hundreds of recipes and start cooking today.</p>
        <Link to="/recipes">Start Cooking →</Link>
      </section>

      <Footer />
    </>
  );
}
