import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BUILT_IN_RECIPES } from "../data/recipes";
import { normaliseAdminRecipe } from "../utils/helpers";
import { readJSON, writeJSON } from "../utils/storage";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

/*
  Keys used:
    foodieAdminRecipes     -> recipes added by the admin (raw form data)
    foodieFavoritesByUser  -> { "<user email>": ["recipe-id", ...] }
*/

const RECIPES_KEY = "foodieAdminRecipes";
const FAVS_KEY = "foodieFavoritesByUser";

const RecipeContext = createContext(null);

export function RecipeProvider({ children }) {
  const { session, isUser, isAdmin, users } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const [adminRecipes, setAdminRecipes] = useState(() => readJSON(RECIPES_KEY, []));
  const [favoritesByUser, setFavoritesByUser] = useState(() => readJSON(FAVS_KEY, {}));

  const saveRecipes = (next) => {
    setAdminRecipes(next);
    writeJSON(RECIPES_KEY, next);
  };
  const saveFavs = (next) => {
    setFavoritesByUser(next);
    writeJSON(FAVS_KEY, next);
  };

  // built-in + admin recipes, all in the same shape
  const recipes = useMemo(
    () => BUILT_IN_RECIPES.concat(adminRecipes.map(normaliseAdminRecipe)),
    [adminRecipes]
  );

  const findRecipe = useCallback((id) => recipes.find((r) => r.id === id), [recipes]);

  // ---------- ADMIN CRUD ----------
  const addRecipe = (data) => {
    saveRecipes([...adminRecipes, { ...data, id: "custom-" + Date.now() }]);
  };

  const updateRecipe = (id, data) => {
    saveRecipes(adminRecipes.map((r) => (r.id === id ? { ...data, id } : r)));
  };

  const deleteRecipe = (id) => {
    saveRecipes(adminRecipes.filter((r) => r.id !== id));

    // also remove it from every user's favorites
    const cleaned = {};
    Object.keys(favoritesByUser).forEach((email) => {
      cleaned[email] = favoritesByUser[email].filter((fid) => fid !== id);
    });
    saveFavs(cleaned);
  };

  // ---------- USER FAVORITES ----------
  const myFavoriteIds = isUser ? favoritesByUser[session.email] || [] : [];

  const isFavorite = (id) => myFavoriteIds.includes(id);

  const toggleFavorite = (id) => {
    if (isAdmin) {
      // admins have no favorites list - do not bounce them to the login page
      showToast("Favorites are for user accounts. Please login as a user to save recipes.");
      return;
    }
    if (!isUser) {
      showToast("Please login as a user to save recipes ❤️");
      navigate("/login");
      return;
    }

    const recipe = findRecipe(id);
    if (!recipe) return;

    const exists = myFavoriteIds.includes(id);
    const next = exists ? myFavoriteIds.filter((f) => f !== id) : [...myFavoriteIds, id];

    saveFavs({ ...favoritesByUser, [session.email]: next });
    showToast(exists ? `${recipe.name} removed from favorites` : `❤️ ${recipe.name} added to favorites!`);
  };

  const myFavorites = myFavoriteIds.map(findRecipe).filter(Boolean);

  // only count favorites of users that still exist (removed users no longer inflate the admin stat)
  const totalFavorites = Object.entries(favoritesByUser).reduce(
    (sum, [email, list]) => (users.some((u) => u.email === email) ? sum + list.length : sum),
    0
  );

  const value = {
    recipes,
    adminRecipes,
    findRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    isFavorite,
    toggleFavorite,
    myFavorites,
    totalFavorites,
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
}

export const useRecipes = () => useContext(RecipeContext);