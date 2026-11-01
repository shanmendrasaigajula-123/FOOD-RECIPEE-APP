import { useState } from "react";
import { Link } from "react-router-dom";
import DashNav from "../../components/DashNav";
import { useRecipes } from "../../context/RecipeContext";
import { useToast } from "../../context/ToastContext";
import { BUILT_IN_RECIPES } from "../../data/recipes";
import { CATEGORIES } from "../../utils/helpers";

const EMPTY = {
  name: "",
  category: "",
  description: "",
  image: "",
  time: "",
  difficulty: "Easy",
  servings: "",
  ingredients: "",
  steps: "",
};

export default function AdminRecipes() {
  const { adminRecipes, addRecipe, updateRecipe, deleteRecipe } = useRecipes();
  const showToast = useToast();

  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const reset = () => {
    setForm(EMPTY);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      name: form.name.trim(),
      description: form.description.trim(),
      image: form.image.trim(),
      time: Number(form.time) || 30,
      servings: Number(form.servings) || 2,
    };

    if (!data.name || !data.description) {
      showToast("Please fill in the recipe name and description.");
      return;
    }

    if (editingId) {
      updateRecipe(editingId, data);
      showToast("Recipe updated successfully! ✨");
    } else {
      addRecipe(data);
      showToast("Recipe added successfully! 🍴");
    }
    reset();
  };

  const startEdit = (recipe) => {
    setForm({
      name: recipe.name || "",
      category: recipe.category || "",
      description: recipe.description || "",
      image: recipe.image || "",
      time: recipe.time ?? "",
      difficulty: recipe.difficulty || "Easy",
      servings: recipe.servings ?? "",
      ingredients: recipe.ingredients || "",
      steps: recipe.steps || "",
    });
    setEditingId(recipe.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (recipe) => {
    if (!window.confirm(`Delete "${recipe.name}"? This cannot be undone.`)) return;
    deleteRecipe(recipe.id);
    if (editingId === recipe.id) reset();
    showToast("Recipe deleted successfully!");
  };

  return (
    <>
      <DashNav admin />

      <section className="admin-recipes-page">
        <div className="admin-heading">
          <p>ADMIN MODULE</p>
          <h1>Manage Recipes</h1>
          <span>Add, edit and delete recipes.</span>
        </div>

        {/* ADD / EDIT FORM */}
        <div className="admin-form-card">
          <h2>{editingId ? "✏️ Edit Recipe" : "➕ Add New Recipe"}</h2>

          <form onSubmit={handleSubmit}>
            <label>Recipe Name</label>
            <input
              type="text"
              placeholder="Enter recipe name"
              value={form.name}
              onChange={set("name")}
              required
            />

            <label>Category</label>
            <select value={form.category} onChange={set("category")} required>
              <option value="">Select Category</option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            <label>Description</label>
            <textarea
              placeholder="Enter recipe description"
              value={form.description}
              onChange={set("description")}
              required
            />

            <label>Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={form.image}
              onChange={set("image")}
              required
            />

            <label>Cooking Time (minutes)</label>
            <input type="number" min="1" placeholder="e.g. 30" value={form.time} onChange={set("time")} />

            <label>Difficulty</label>
            <select value={form.difficulty} onChange={set("difficulty")}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <label>Servings</label>
            <input type="number" min="1" placeholder="e.g. 4" value={form.servings} onChange={set("servings")} />

            <label>Ingredients (one per line, e.g. Rice - 2 cups)</label>
            <textarea
              placeholder={"Rice - 2 cups\nOnion - 1 large"}
              value={form.ingredients}
              onChange={set("ingredients")}
            />

            <label>Steps (one per line)</label>
            <textarea
              placeholder={"Wash the rice.\nCook until soft."}
              value={form.steps}
              onChange={set("steps")}
            />

            <div className="admin-form-buttons">
              <button type="submit" className="auth-btn">
                {editingId ? "Update Recipe" : "Save Recipe"}
              </button>
              <button type="button" onClick={reset} className="admin-cancel-btn">
                {editingId ? "Cancel" : "Clear"}
              </button>
            </div>
          </form>
        </div>

        {/* RECIPE LIST */}
        <div className="admin-list-section">
          <h2>📋 Existing Recipes</h2>

          <h3 className="admin-sub-heading">Added by you ({adminRecipes.length})</h3>
          {adminRecipes.length === 0 ? (
            <p className="admin-empty">You have not added any recipes yet. Use the form above to add one.</p>
          ) : (
            adminRecipes.map((recipe) => (
              <div className="admin-recipe-item" key={recipe.id}>
                <div className="admin-recipe-info">
                  <h3>
                    {recipe.name}{" "}
                    <Link className="admin-view-link" to={`/recipe/${recipe.id}`} target="_blank">
                      View ↗
                    </Link>
                  </h3>
                  <p>Category: {recipe.category}</p>
                  <p>{recipe.description}</p>
                </div>

                <div className="admin-recipe-actions">
                  <button className="admin-edit-btn" onClick={() => startEdit(recipe)}>Edit</button>
                  <button className="admin-delete-btn" onClick={() => handleDelete(recipe)}>Delete</button>
                </div>
              </div>
            ))
          )}

          <h3 className="admin-sub-heading">Built-in recipes ({BUILT_IN_RECIPES.length}) - read only</h3>
          {BUILT_IN_RECIPES.map((recipe) => (
            <div className="admin-recipe-item" key={recipe.id}>
              <div className="admin-recipe-info">
                <h3>
                  {recipe.name} <span className="admin-badge">Built-in</span>{" "}
                  <Link className="admin-view-link" to={`/recipe/${recipe.id}`} target="_blank">
                    View ↗
                  </Link>
                </h3>
                <p>Category: {recipe.category}</p>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2026 Foodie Recipe App | Admin Module</p>
      </footer>
    </>
  );
}
