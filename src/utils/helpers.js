export const CATEGORIES = [
  { value: "breakfast", label: "Breakfast", icon: "🍳" },
  { value: "lunch", label: "Lunch", icon: "🍛" },
  { value: "dinner", label: "Dinner", icon: "🍝" },
  { value: "dessert", label: "Dessert", icon: "🍰" },
  { value: "healthy", label: "Healthy", icon: "🥗" },
  { value: "drinks", label: "Drinks", icon: "🥤" },
];

export function capitalize(text) {
  const s = String(text || "");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Turn the admin form text into the full recipe shape used by the pages
export function normaliseAdminRecipe(r) {
  const ingredients = String(r.ingredients || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/\s+[-–:]\s+|:\s*/);
      return { icon: "🥣", name: parts[0], qty: parts.slice(1).join(" - ") };
    });

  const steps = String(r.steps || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line, i) => ({ title: "Step " + (i + 1), text: line }));

  return {
    id: r.id,
    name: r.name,
    category: r.category,
    image: r.image,
    description: r.description,
    longDescription: r.description,
    rating: "5.0",
    reviews: 0,
    tag: "NEW",
    time: r.time || 30,
    difficulty: r.difficulty || "Easy",
    servings: r.servings || 2,
    ingredients,
    steps,
    tip: "",
    custom: true,
  };
}
