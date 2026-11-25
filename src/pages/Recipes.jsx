import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";
import { CATEGORIES, CUISINES } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function Recipes() {
  const { recipes } = useRecipes();
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "all";
  const cuisine = params.get("cuisine") || "all";

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value && value !== "all") next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const q = search.trim().toLowerCase();

  const list = recipes.filter((r) => {
    const matchesCategory = category === "all" || r.category === category;
    const matchesSearch =
      q === "" ||
      r.name.toLowerCase().includes(q) ||
      String(r.description).toLowerCase().includes(q) ||
      r.ingredients.some((i) => i.name.toLowerCase().includes(q));
    const matchesCuisine = cuisine === "all" || r.cuisine === cuisine;
    return matchesCategory && matchesCuisine && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section className="recipes-hero">
        <div>
          <p>OUR COLLECTION</p>
          <h1>Explore Delicious Recipes</h1>
          <span>Find something delicious to cook today.</span>
        </div>
      </section>

      <section className="recipes-tools">
        <div className="recipes-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        <div className="recipe-filters">
          <button
            className={"filter" + (category === "all" ? " active-filter" : "")}
            onClick={() => update("category", "all")}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              className={"filter" + (category === c.value ? " active-filter" : "")}
              onClick={() => update("category", c.value)}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        <div className="recipe-filters" style={{ marginTop: "12px" }}>
          <button
            className={"filter" + (cuisine === "all" ? " active-filter" : "")}
            onClick={() => update("cuisine", "all")}
          >
            🌍 All Cuisines
          </button>
          {CUISINES.map((c) => (
            <button
              key={c.value}
              className={"filter" + (cuisine === c.value ? " active-filter" : "")}
              onClick={() => update("cuisine", c.value)}
            >
              {c.icon} {c.value}
            </button>
          ))}
        </div>
      </section>

      <main className="recipes-main">
        <div className="recipes-top">
          <div>
            <h2>All Recipes</h2>
            <p>Discover your next favorite meal.</p>
          </div>
          <span>
            {list.length} {list.length === 1 ? "Recipe" : "Recipes"}
          </span>
        </div>

        <div className="professional-recipe-grid">
          {list.length ? (
            list.map((r) => <RecipeCard key={r.id} recipe={r} />)
          ) : (
            <p className="no-results">No recipes found. Try a different search or category.</p>
          )}
        </div>
      </main>

      <section className="cta">
        <h2>Can't Find What You're Looking For?</h2>
        <p>Try searching by ingredients or recipe name.</p>
        <Link to="/">Back to Home →</Link>
      </section>

      <Footer />
    </>
  );
}
