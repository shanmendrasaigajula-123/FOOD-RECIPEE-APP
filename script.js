/* =====================================================
   FOODIE RECIPE APP - script.js
   One shared script used by every page.
   Every function checks that the elements it needs exist,
   so it is safe to load on any page.
===================================================== */


/* =====================================================
   1. RECIPE DATA  (single source of truth)
   Each recipe has a unique "id". Links use this id:
   recipe-details.html?id=chicken-biryani
===================================================== */

const BUILT_IN_RECIPES = [

    {
        id: "chicken-biryani",
        name: "Chicken Biryani",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=80",
        altImages: [
            "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Aromatic basmati rice cooked with tender chicken and flavorful spices.",
        longDescription: "A delicious and aromatic Indian chicken biryani made with basmati rice, tender chicken and flavorful spices.",
        rating: "4.9", reviews: 128, tag: "POPULAR",
        time: 50, difficulty: "Medium", servings: 4,
        ingredients: [
            { icon: "🍗", name: "Chicken", qty: "500 grams" },
            { icon: "🍚", name: "Basmati Rice", qty: "2 cups" },
            { icon: "🧅", name: "Onions", qty: "2 large" },
            { icon: "🍅", name: "Tomatoes", qty: "2 medium" },
            { icon: "🥛", name: "Yogurt", qty: "1 cup" },
            { icon: "🌿", name: "Mint & Coriander", qty: "1 handful" },
            { icon: "🌶️", name: "Biryani Masala", qty: "2 tablespoons" },
            { icon: "🧄", name: "Ginger Garlic Paste", qty: "2 tablespoons" }
        ],
        steps: [
            { title: "Marinate the Chicken", text: "Mix chicken with yogurt, ginger garlic paste, salt and biryani spices. Allow it to marinate for at least 30 minutes." },
            { title: "Prepare the Rice", text: "Wash the basmati rice and cook it with water, salt and whole spices until it is about 70% cooked." },
            { title: "Cook the Chicken", text: "Heat oil in a large pot. Add onions and cook until golden. Add tomatoes, marinated chicken and spices." },
            { title: "Layer the Biryani", text: "Add the partially cooked rice over the chicken. Add mint, coriander and fried onions on top." },
            { title: "Cook on Low Heat", text: "Cover the pot and cook on low heat for about 15 minutes. Let the flavors combine beautifully." },
            { title: "Serve & Enjoy", text: "Gently mix the biryani and serve hot with raita or your favorite side dish." }
        ],
        tip: "For extra flavor, let the biryani rest for 10 minutes after cooking before serving."
    },

    {
        id: "creamy-italian-pasta",
        name: "Creamy Italian Pasta",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=80",
        description: "Creamy pasta with fresh herbs, cheese and delicious sauce.",
        longDescription: "Silky pasta tossed in a garlic cream sauce with Italian herbs and freshly grated parmesan.",
        rating: "4.8", reviews: 96, tag: "TRENDING",
        time: 30, difficulty: "Easy", servings: 3,
        ingredients: [
            { icon: "🍝", name: "Penne Pasta", qty: "250 grams" },
            { icon: "🥛", name: "Fresh Cream", qty: "1 cup" },
            { icon: "🧄", name: "Garlic", qty: "4 cloves, minced" },
            { icon: "🧀", name: "Parmesan Cheese", qty: "1/2 cup, grated" },
            { icon: "🧈", name: "Butter", qty: "2 tablespoons" },
            { icon: "🌿", name: "Italian Herbs", qty: "1 teaspoon" },
            { icon: "🧂", name: "Salt & Black Pepper", qty: "To taste" }
        ],
        steps: [
            { title: "Boil the Pasta", text: "Cook the pasta in salted boiling water until al dente. Save a cup of pasta water, then drain." },
            { title: "Saute the Garlic", text: "Melt the butter in a pan and cook the garlic for about a minute until fragrant." },
            { title: "Make the Sauce", text: "Pour in the cream, add the Italian herbs, salt and pepper and simmer for 3 to 4 minutes." },
            { title: "Add the Cheese", text: "Stir in the parmesan until the sauce is smooth and thick." },
            { title: "Toss & Serve", text: "Add the pasta, toss well (loosen with a little pasta water if needed) and serve hot." }
        ],
        tip: "Add a splash of the starchy pasta water to make the sauce silky and help it cling to the pasta."
    },

    {
        id: "chicken-burger",
        name: "Chicken Burger",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
        description: "Juicy chicken burger with fresh vegetables and special sauce.",
        longDescription: "A juicy homemade chicken patty served in a toasted bun with crisp vegetables and a creamy special sauce.",
        rating: "4.7", reviews: 74, tag: "NEW",
        time: 25, difficulty: "Easy", servings: 2,
        ingredients: [
            { icon: "🍗", name: "Minced Chicken", qty: "300 grams" },
            { icon: "🍔", name: "Burger Buns", qty: "2" },
            { icon: "🥬", name: "Lettuce", qty: "2 leaves" },
            { icon: "🍅", name: "Tomato", qty: "1 sliced" },
            { icon: "🧀", name: "Cheese Slices", qty: "2" },
            { icon: "🍞", name: "Breadcrumbs", qty: "1/4 cup" },
            { icon: "🥫", name: "Mayonnaise", qty: "2 tablespoons" },
            { icon: "🌶️", name: "Spice Mix", qty: "1 teaspoon" }
        ],
        steps: [
            { title: "Make the Patties", text: "Mix the minced chicken with breadcrumbs, spice mix and salt. Shape into two even patties." },
            { title: "Cook the Patties", text: "Pan-fry on medium heat for 5 to 6 minutes per side until golden and cooked through." },
            { title: "Melt the Cheese", text: "Place a cheese slice on each patty in the last minute and cover the pan briefly." },
            { title: "Toast the Buns", text: "Lightly toast the buns and spread mayonnaise on both halves." },
            { title: "Assemble", text: "Layer lettuce, tomato and the patty on the bun, close it up and serve right away." }
        ],
        tip: "Chill the shaped patties for 15 minutes before cooking so they hold their shape."
    },

    {
        id: "fluffy-pancakes",
        name: "Fluffy Pancakes",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
        description: "Soft, fluffy and delicious pancakes for a perfect breakfast.",
        longDescription: "Light, golden and fluffy pancakes that come together in minutes - perfect with maple syrup and fresh fruit.",
        rating: "4.8", reviews: 112, tag: "",
        time: 20, difficulty: "Easy", servings: 3,
        ingredients: [
            { icon: "🌾", name: "All-purpose Flour", qty: "1 1/2 cups" },
            { icon: "🥛", name: "Milk", qty: "1 1/4 cups" },
            { icon: "🥚", name: "Egg", qty: "1 large" },
            { icon: "🍬", name: "Sugar", qty: "2 tablespoons" },
            { icon: "🧁", name: "Baking Powder", qty: "2 teaspoons" },
            { icon: "🧈", name: "Melted Butter", qty: "3 tablespoons" },
            { icon: "🍯", name: "Maple Syrup", qty: "To serve" }
        ],
        steps: [
            { title: "Mix the Dry Ingredients", text: "Whisk the flour, sugar, baking powder and a pinch of salt in a large bowl." },
            { title: "Mix the Wet Ingredients", text: "In another bowl, whisk the milk, egg and melted butter together." },
            { title: "Combine", text: "Pour the wet mixture into the dry and stir gently until just combined. A few lumps are fine." },
            { title: "Cook", text: "Pour 1/4 cup batter per pancake onto a hot greased pan. Flip when bubbles form on top." },
            { title: "Serve", text: "Stack the pancakes and serve warm with maple syrup and fruit." }
        ],
        tip: "Do not overmix the batter - lumps are what keep the pancakes light and fluffy."
    },

    {
        id: "fresh-garden-salad",
        name: "Fresh Garden Salad",
        category: "healthy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
        description: "Fresh vegetables combined with a light and healthy dressing.",
        longDescription: "Crisp seasonal vegetables tossed in a light lemon and olive oil dressing - fresh, quick and healthy.",
        rating: "4.6", reviews: 58, tag: "HEALTHY",
        time: 15, difficulty: "Easy", servings: 2,
        ingredients: [
            { icon: "🥒", name: "Cucumber", qty: "1 medium" },
            { icon: "🍅", name: "Tomatoes", qty: "2 medium" },
            { icon: "🥬", name: "Lettuce", qty: "1 small bunch" },
            { icon: "🥕", name: "Carrot", qty: "1 grated" },
            { icon: "🫒", name: "Olive Oil", qty: "2 tablespoons" },
            { icon: "🍋", name: "Lemon", qty: "1, juiced" },
            { icon: "🧂", name: "Salt & Pepper", qty: "To taste" }
        ],
        steps: [
            { title: "Wash & Chop", text: "Wash all the vegetables and chop the cucumber, tomatoes and lettuce into bite-sized pieces." },
            { title: "Add the Carrot", text: "Add the grated carrot to the bowl with the other vegetables." },
            { title: "Make the Dressing", text: "Whisk the olive oil, lemon juice, salt and pepper in a small bowl." },
            { title: "Toss & Serve", text: "Pour the dressing over the vegetables, toss gently and serve immediately." }
        ],
        tip: "Add the dressing just before serving so the vegetables stay crisp."
    },

    {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
        description: "Rich, soft and delicious chocolate cake perfect for every occasion.",
        longDescription: "A rich, moist chocolate cake with a soft crumb - the perfect dessert for birthdays and celebrations.",
        rating: "4.9", reviews: 203, tag: "SWEET",
        time: 45, difficulty: "Medium", servings: 8,
        ingredients: [
            { icon: "🌾", name: "All-purpose Flour", qty: "1 3/4 cups" },
            { icon: "🍬", name: "Sugar", qty: "1 1/2 cups" },
            { icon: "🍫", name: "Cocoa Powder", qty: "3/4 cup" },
            { icon: "🥚", name: "Eggs", qty: "2 large" },
            { icon: "🥛", name: "Milk", qty: "1 cup" },
            { icon: "🫗", name: "Vegetable Oil", qty: "1/2 cup" },
            { icon: "🧁", name: "Baking Powder", qty: "2 teaspoons" },
            { icon: "☕", name: "Hot Water", qty: "1 cup" }
        ],
        steps: [
            { title: "Preheat & Prepare", text: "Preheat the oven to 175°C (350°F) and grease and line a 9-inch cake pan." },
            { title: "Mix the Dry Ingredients", text: "Sift together the flour, cocoa, sugar, baking powder and a pinch of salt." },
            { title: "Add the Wet Ingredients", text: "Add eggs, milk, oil and vanilla and beat for 2 minutes until smooth." },
            { title: "Add Hot Water", text: "Stir in the hot water. The batter will be thin - that is what makes the cake moist." },
            { title: "Bake", text: "Pour into the pan and bake for 30 to 35 minutes, until a toothpick comes out clean." },
            { title: "Cool & Serve", text: "Cool in the pan for 10 minutes, then on a rack. Frost or dust with sugar and serve." }
        ],
        tip: "Let the cake cool completely before frosting so the frosting does not melt."
    }
];


/* =====================================================
   2. SMALL HELPERS
===================================================== */

// Escape text so admin-entered content cannot break the page
function escapeHTML(value) {
    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Make a URL safe to put inside CSS url('...')
function cssUrl(url) {
    return String(url || "").trim().replace(/['"()\s<>\\]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
    });
}

function readJSON(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value === null || value === undefined ? fallback : value;
    } catch (e) {
        return fallback;
    }
}

function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function slugify(text) {
    return String(text).toLowerCase().trim()
        .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function capitalize(text) {
    text = String(text || "");
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function showToast(message) {
    let toast = document.getElementById("foodieToast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "foodieToast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2200);
}

const CURRENT_PAGE =
    (window.location.pathname.split("/").pop() || "index.html").toLowerCase();


/* =====================================================
   3. ADMIN RECIPES + ALL RECIPES
===================================================== */

let adminRecipes = readJSON("foodieAdminRecipes", []);

// Older saved recipes had no id - give each one a permanent id
(function ensureAdminIds() {
    let changed = false;

    adminRecipes.forEach(function (recipe, i) {
        if (!recipe.id) {
            recipe.id = "custom-" + Date.now() + "-" + i;
            changed = true;
        }
    });

    if (changed) {
        writeJSON("foodieAdminRecipes", adminRecipes);
    }
})();

function saveAdminRecipes() {
    writeJSON("foodieAdminRecipes", adminRecipes);
}

// Convert a recipe saved from the admin form into the full recipe shape
function normaliseAdminRecipe(r) {

    const ingredients = String(r.ingredients || "")
        .split("\n").map(function (l) { return l.trim(); }).filter(Boolean)
        .map(function (line) {
            const parts = line.split(/\s+[-–:]\s+|:\s*/);
            return {
                icon: "🥣",
                name: parts[0],
                qty: parts.slice(1).join(" - ")
            };
        });

    const steps = String(r.steps || "")
        .split("\n").map(function (l) { return l.trim(); }).filter(Boolean)
        .map(function (line, i) {
            return { title: "Step " + (i + 1), text: line };
        });

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
        ingredients: ingredients,
        steps: steps,
        tip: "",
        custom: true
    };
}

// Images to try in order: main image, backups, then a local file
// you can add yourself:  images/<recipe-id>.jpg
function withImageList(r) {
    r.images = [r.image]
        .concat(r.altImages || [])
        .concat(["images/" + r.id + ".jpg"])
        .filter(Boolean);
    return r;
}

function getAllRecipes() {
    adminRecipes = readJSON("foodieAdminRecipes", adminRecipes);
    return BUILT_IN_RECIPES
        .concat(adminRecipes.map(normaliseAdminRecipe))
        .map(withImageList);
}

/* ---------- image loading with fallbacks ---------- */

// Try each URL in turn; use the first one that actually loads
function loadFirstWorkingImage(urls, onLoad) {
    let i = 0;

    function tryNext() {
        if (i >= urls.length) {
            return;                       // none worked - placeholder colour stays
        }

        const url = urls[i++];
        const test = new Image();
        test.onload = function () { onLoad(url); };
        test.onerror = tryNext;
        test.src = url;
    }

    tryNext();
}

// Fill every element that has data-img-id="<recipe id>"
function hydrateImages() {
    document.querySelectorAll("[data-img-id]").forEach(function (el) {
        if (el.dataset.imgDone) {
            return;
        }
        el.dataset.imgDone = "1";

        const recipe = findRecipe(el.dataset.imgId);
        const urls = recipe ? recipe.images : [];

        if (el.dataset.imgFallback) {
            urls.push(el.dataset.imgFallback);
        }

        loadFirstWorkingImage(urls, function (url) {
            el.style.backgroundImage = "url('" + cssUrl(url) + "')";
            el.classList.add("img-loaded");
        });
    });
}

function findRecipe(id) {
    return getAllRecipes().find(function (r) { return r.id === id; });
}

function detailsLink(id) {
    return "recipe-details.html?id=" + encodeURIComponent(id);
}


/* =====================================================
   4. FAVORITES  (stored by recipe id)
===================================================== */

function getFavorites() {
    let favs = readJSON("foodieFavorites", []);
    const all = getAllRecipes();
    let changed = false;

    // Migrate old favorites that were saved by name only
    favs.forEach(function (f) {
        if (!f.id) {
            const match = all.find(function (r) { return r.name === f.name; });
            f.id = match ? match.id : slugify(f.name);
            changed = true;
        }
    });

    if (changed) {
        writeJSON("foodieFavorites", favs);
    }

    return favs;
}

function isFavorite(id) {
    return getFavorites().some(function (f) { return f.id === id; });
}

function toggleFavorite(id) {
    const recipe = findRecipe(id);

    if (!recipe) {
        return;
    }

    let favs = getFavorites();
    const index = favs.findIndex(function (f) { return f.id === id; });

    if (index !== -1) {
        favs.splice(index, 1);
        showToast(recipe.name + " removed from favorites");
    } else {
        favs.push({
            id: recipe.id,
            name: recipe.name,
            category: recipe.category,
            image: recipe.image
        });
        showToast("❤️ " + recipe.name + " added to favorites!");
    }

    writeJSON("foodieFavorites", favs);
    refreshFavoriteButtons();
hydrateImages();
}

// Update every heart / save button on the page
function refreshFavoriteButtons() {
    document.querySelectorAll("[data-fav-id]").forEach(function (btn) {
        const saved = isFavorite(btn.dataset.favId);
        btn.classList.toggle("saved", saved);

        if (btn.classList.contains("favorite-main")) {
            btn.textContent = saved ? "♥ Saved" : "♡ Save Recipe";
        } else {
            btn.textContent = saved ? "♥" : "♡";
        }
    });
}

function removeFavorite(id) {
    const favs = getFavorites().filter(function (f) { return f.id !== id; });
    writeJSON("foodieFavorites", favs);
    displayFavorites();
}

function displayFavorites() {
    const container = document.getElementById("favoritesContainer");

    if (!container) {
        return;
    }

    const favs = getFavorites();
    const count = document.getElementById("favoriteCount");
    const emptyMessage = document.getElementById("noFavorites");

    if (count) {
        count.textContent = favs.length + (favs.length === 1 ? " Recipe" : " Recipes");
    }

    if (favs.length === 0) {
        container.innerHTML = "";
        if (emptyMessage) { emptyMessage.style.display = "block"; }
        return;
    }

    if (emptyMessage) { emptyMessage.style.display = "none"; }

    container.innerHTML = favs.map(function (f) {
        return `
            <div class="professional-recipe-card">

                <div class="professional-food-image"
                     data-img-id="${escapeHTML(f.id)}"
                     data-img-fallback="${escapeHTML(f.image)}"></div>

                <div class="professional-recipe-content">

                    <span class="food-tag">${escapeHTML(f.category)}</span>

                    <h3>${escapeHTML(f.name)}</h3>

                    <a href="${detailsLink(f.id)}" class="recipe-view-btn">
                        View Recipe →
                    </a>

                    <button class="remove-favorite-btn"
                            data-remove-id="${escapeHTML(f.id)}">
                        Remove ❤️
                    </button>

                </div>

            </div>
        `;
    }).join("");

    hydrateImages();
}


/* =====================================================
   5. RECIPES PAGE  (cards built from data)
===================================================== */

let recipeFilter = { search: "", category: "all" };

function recipeCardHTML(r) {
    return `
        <article class="professional-recipe-card" data-category="${escapeHTML(r.category)}">

            <div class="professional-food-image" data-img-id="${escapeHTML(r.id)}">

                ${r.tag ? `<span class="food-tag">${escapeHTML(r.tag)}</span>` : ""}

                <button class="heart-btn" data-fav-id="${escapeHTML(r.id)}"
                        aria-label="Save ${escapeHTML(r.name)}">♡</button>

            </div>

            <div class="professional-recipe-content">

                <div class="food-rating">⭐ ${escapeHTML(r.rating)}</div>

                <h3>${escapeHTML(r.name)}</h3>

                <p>${escapeHTML(r.description)}</p>

                <div class="food-details">
                    <span>⏱ ${escapeHTML(r.time)} min</span>
                    <span>👨‍🍳 ${escapeHTML(r.difficulty)}</span>
                </div>

                <a href="${detailsLink(r.id)}" class="recipe-view-btn">
                    View Recipe →
                </a>

            </div>

        </article>
    `;
}

function renderRecipes() {
    const grid = document.getElementById("recipeGrid");

    if (!grid) {
        return;
    }

    const q = recipeFilter.search.trim().toLowerCase();

    const list = getAllRecipes().filter(function (r) {
        const matchesCategory =
            recipeFilter.category === "all" || r.category === recipeFilter.category;

        const matchesSearch =
            q === "" ||
            r.name.toLowerCase().includes(q) ||
            String(r.description).toLowerCase().includes(q) ||
            r.ingredients.some(function (i) {
                return i.name.toLowerCase().includes(q);
            });

        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = list.length
        ? list.map(recipeCardHTML).join("")
        : `<p class="no-results">No recipes found. Try a different search or category.</p>`;

    const count = document.getElementById("recipeCount");
    if (count) {
        count.textContent = list.length + (list.length === 1 ? " Recipe" : " Recipes");
    }

    refreshFavoriteButtons();
hydrateImages();
    hydrateImages();
}

// Called by the search box on recipes.html
function filterRecipes() {
    const input = document.getElementById("recipeSearch");
    recipeFilter.search = input ? input.value : "";
    renderRecipes();
}

// Called by the category buttons on recipes.html
function filterCategory(category, button) {
    recipeFilter.category = category;

    document.querySelectorAll(".filter").forEach(function (btn) {
        btn.classList.remove("active-filter");
    });

    if (button) {
        button.classList.add("active-filter");
    }

    renderRecipes();
}

// Called by the search box on the home page
function searchRecipe() {
    const input = document.getElementById("search");
    const text = input ? input.value.trim() : "";

    if (text === "") {
        alert("Please enter a recipe name!");
        return;
    }

    window.location.href = "recipes.html?search=" + encodeURIComponent(text);
}

function initRecipesPage() {
    if (!document.getElementById("recipeGrid")) {
        return;
    }

    // Support links like recipes.html?search=pasta or ?category=dinner
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    const category = params.get("category");

    if (search) {
        recipeFilter.search = search;
        const input = document.getElementById("recipeSearch");
        if (input) { input.value = search; }
    }

    if (category) {
        recipeFilter.category = category.toLowerCase();

        document.querySelectorAll(".filter").forEach(function (btn) {
            const wanted = "filterCategory('" + recipeFilter.category + "'";
            btn.classList.toggle(
                "active-filter",
                (btn.getAttribute("onclick") || "").indexOf(wanted) !== -1
            );
        });
    }

    renderRecipes();
}


/* =====================================================
   6. RECIPE DETAILS PAGE  (reads ?id=... from the URL)
===================================================== */

let currentRecipe = null;

function initDetailsPage() {
    const root = document.getElementById("recipeDetailRoot");

    if (!root) {
        return;
    }

    const id = new URLSearchParams(window.location.search).get("id");
    currentRecipe = id ? findRecipe(id) : null;

    // Unknown or missing id -> friendly message instead of a wrong recipe
    if (!currentRecipe) {
        root.innerHTML = `
            <section class="recipe-not-found">
                <div>🍽️</div>
                <h1>Recipe not found</h1>
                <p>We could not find the recipe you were looking for.</p>
                <a href="recipes.html" class="recipe-view-btn">← Back to Recipes</a>
            </section>
        `;
        document.title = "Recipe not found - Foodie";
        return;
    }

    const r = currentRecipe;
    document.title = r.name + " - Foodie";

    const ingredientsHTML = r.ingredients.length
        ? r.ingredients.map(function (i) {
            return `
                <div class="ingredient">
                    <span>${escapeHTML(i.icon)}</span>
                    <p>
                        <strong>${escapeHTML(i.name)}</strong>
                        ${escapeHTML(i.qty)}
                    </p>
                </div>`;
        }).join("")
        : `<p class="no-results">The ingredient list has not been added yet.</p>`;

    const stepsHTML = r.steps.length
        ? r.steps.map(function (s, i) {
            return `
                <div class="instruction">
                    <div class="step-number">${String(i + 1).padStart(2, "0")}</div>
                    <div>
                        <h3>${escapeHTML(s.title)}</h3>
                        <p>${escapeHTML(s.text)}</p>
                    </div>
                </div>`;
        }).join("")
        : `<p class="no-results">The cooking steps have not been added yet.</p>`;

    root.innerHTML = `

        <div class="breadcrumb">
            <a href="index.html">Home</a>
            <span>›</span>
            <a href="recipes.html">Recipes</a>
            <span>›</span>
            <span>${escapeHTML(r.name)}</span>
        </div>

        <section class="recipe-detail-header">

            <div class="detail-image" data-img-id="${escapeHTML(r.id)}"></div>

            <div class="detail-intro">

                <span class="detail-tag">${escapeHTML(capitalize(r.category))} Recipe</span>

                <h1>${escapeHTML(r.name)}</h1>

                <p class="detail-description">${escapeHTML(r.longDescription || r.description)}</p>

                <div class="detail-rating">
                    <span>⭐ ${escapeHTML(r.rating)}</span>
                    <span class="stars">★★★★★</span>
                    ${r.reviews ? `<span>${escapeHTML(r.reviews)} Reviews</span>` : ""}
                </div>

                <div class="detail-meta">
                    <div>
                        <span>⏱️</span>
                        <strong>${escapeHTML(r.time)} min</strong>
                        <small>Total Time</small>
                    </div>
                    <div>
                        <span>👨‍🍳</span>
                        <strong>${escapeHTML(r.difficulty)}</strong>
                        <small>Difficulty</small>
                    </div>
                    <div>
                        <span>🍽️</span>
                        <strong>${escapeHTML(r.servings)}</strong>
                        <small>Servings</small>
                    </div>
                </div>

                <div class="detail-actions">
                    <button class="favorite-main" data-fav-id="${escapeHTML(r.id)}">♡ Save Recipe</button>
                    <button class="share-btn" onclick="shareRecipe()">↗ Share</button>
                </div>

            </div>

        </section>

        <main class="recipe-detail-content">

            <section class="ingredients-section">
                <div class="detail-section-title">
                    <span>WHAT YOU NEED</span>
                    <h2>Ingredients</h2>
                </div>
                <div class="ingredient-list">${ingredientsHTML}</div>
            </section>

            <section class="instructions-section">
                <div class="detail-section-title">
                    <span>LET'S GET COOKING</span>
                    <h2>How to Make It</h2>
                </div>
                ${stepsHTML}
            </section>

        </main>

        ${r.tip ? `
        <section class="cooking-tip">
            <div class="tip-icon">💡</div>
            <div>
                <h3>Chef's Tip</h3>
                <p>${escapeHTML(r.tip)}</p>
            </div>
        </section>` : ""}
    `;

    refreshFavoriteButtons();
hydrateImages();
    hydrateImages();
}

function shareRecipe() {
    if (!currentRecipe) {
        return;
    }

    const shareData = {
        title: currentRecipe.name,
        text: "Check out this delicious " + currentRecipe.name + " recipe on Foodie!",
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(function () { /* user cancelled */ });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(
            function () { showToast("Recipe link copied! 🍴"); },
            function () { showToast("Could not copy the link."); }
        );
    } else {
        showToast("Copy the link from the address bar to share.");
    }
}


/* =====================================================
   7. USER SIGNUP / LOGIN  (localStorage demo)
   Note: this is a front-end demo only. Passwords in
   localStorage are NOT secure - use a real backend later.
===================================================== */

function getUsers() {
    let users = readJSON("foodieUsers", null);

    if (!users) {
        // Migrate the old single-user format
        const old = readJSON("foodieUser", null);
        users = old ? [old] : [];
        writeJSON("foodieUsers", users);
    }

    return users;
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim().toLowerCase();
        const password = document.getElementById("signupPassword").value;

        const users = getUsers();

        if (users.some(function (u) { return u.email.toLowerCase() === email; })) {
            alert("An account with this email already exists!");
            return;
        }

        users.push({ name: name, email: email, password: password });
        writeJSON("foodieUsers", users);

        alert("Account created successfully! 🎉");
        window.location.href = "login.html";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;

        const users = getUsers();

        if (users.length === 0) {
            alert("No account found. Please sign up first.");
            return;
        }

        const user = users.find(function (u) {
            return u.email.toLowerCase() === email && u.password === password;
        });

        if (!user) {
            alert("Invalid email or password!");
            return;
        }

        localStorage.setItem("foodieLoggedIn", "true");
        localStorage.setItem("foodieUserName", user.name);

        alert("Login successful! 🎉");
        window.location.href = "user-dashboard.html";
    });
}

function logoutUser() {
    localStorage.removeItem("foodieLoggedIn");
    localStorage.removeItem("foodieUserName");

    alert("You have been logged out successfully!");
    window.location.href = "login.html";
}


/* =====================================================
   8. ADMIN LOGIN / LOGOUT
===================================================== */

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value;

        // DEMO ADMIN CREDENTIALS
        if (email === "admin@foodie.com" && password === "admin123") {
            localStorage.setItem("foodieAdminLoggedIn", "true");
            alert("Admin Login Successful! 🔐");
            window.location.href = "admin-dashboard.html";
        } else {
            alert("Invalid Admin Email or Password!");
        }
    });
}

function logoutAdmin() {
    localStorage.removeItem("foodieAdminLoggedIn");
    alert("Admin logged out successfully!");
    window.location.href = "admin-login.html";
}


/* =====================================================
   9. ADMIN RECIPE MANAGEMENT
===================================================== */

function displayAdminRecipes() {
    const list = document.getElementById("adminRecipeList");

    if (!list) {
        return;
    }

    adminRecipes = readJSON("foodieAdminRecipes", []);

    const customHTML = adminRecipes.length === 0
        ? `<p class="admin-empty">You have not added any recipes yet. Use the form above to add one.</p>`
        : adminRecipes.map(function (recipe, index) {
            return `
            <div class="admin-recipe-item">

                <div class="admin-recipe-info">
                    <h3>${escapeHTML(recipe.name)}
                        <a class="admin-view-link" href="${detailsLink(recipe.id)}" target="_blank">View ↗</a>
                    </h3>
                    <p>Category: ${escapeHTML(recipe.category)}</p>
                    <p>${escapeHTML(recipe.description)}</p>
                </div>

                <div class="admin-recipe-actions">
                    <button class="admin-edit-btn" onclick="editRecipe(${index})">Edit</button>
                    <button class="admin-delete-btn" onclick="deleteRecipe(${index})">Delete</button>
                </div>

            </div>`;
        }).join("");

    const builtInHTML = BUILT_IN_RECIPES.map(function (recipe) {
        return `
            <div class="admin-recipe-item">

                <div class="admin-recipe-info">
                    <h3>${escapeHTML(recipe.name)}
                        <span class="admin-badge">Built-in</span>
                        <a class="admin-view-link" href="${detailsLink(recipe.id)}" target="_blank">View ↗</a>
                    </h3>
                    <p>Category: ${escapeHTML(recipe.category)}</p>
                    <p>${escapeHTML(recipe.description)}</p>
                </div>

            </div>`;
    }).join("");

    list.innerHTML =
        `<h3 class="admin-sub-heading">Added by you (${adminRecipes.length})</h3>` +
        customHTML +
        `<h3 class="admin-sub-heading">Built-in recipes (${BUILT_IN_RECIPES.length}) - read only</h3>` +
        builtInHTML;
}

function initAdminStats() {
    if (!document.getElementById("statTotal")) {
        return;
    }

    const custom = readJSON("foodieAdminRecipes", []).length;

    document.getElementById("statTotal").textContent = BUILT_IN_RECIPES.length + custom;
    document.getElementById("statCustom").textContent = custom;
    document.getElementById("statUsers").textContent = getUsers().length;
    document.getElementById("statFavorites").textContent = readJSON("foodieFavorites", []).length;
}

const recipeForm = document.getElementById("recipeForm");

if (recipeForm) {
    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const value = function (id) {
            const el = document.getElementById(id);
            return el ? el.value.trim() : "";
        };

        const name = value("adminRecipeName");
        const description = value("adminRecipeDescription");

        if (!name || !description) {
            alert("Please fill in the recipe name and description.");
            return;
        }

        const editIndex = value("editRecipeIndex");

        const recipe = {
            id: editIndex === ""
                ? "custom-" + Date.now()
                : adminRecipes[Number(editIndex)].id,   // keep the same id when editing
            name: name,
            category: value("adminRecipeCategory"),
            description: description,
            image: value("adminRecipeImage"),
            time: Number(value("adminRecipeTime")) || 30,
            difficulty: value("adminRecipeDifficulty") || "Easy",
            servings: Number(value("adminRecipeServings")) || 2,
            ingredients: value("adminRecipeIngredients"),
            steps: value("adminRecipeSteps")
        };

        if (editIndex === "") {
            adminRecipes.push(recipe);
            alert("Recipe added successfully! 🍴");
        } else {
            adminRecipes[Number(editIndex)] = recipe;
            alert("Recipe updated successfully! ✨");
        }

        saveAdminRecipes();
        clearRecipeForm();
        displayAdminRecipes();
    });
}

function editRecipe(index) {
    const recipe = adminRecipes[index];

    if (!recipe) {
        return;
    }

    const set = function (id, val) {
        const el = document.getElementById(id);
        if (el) { el.value = val == null ? "" : val; }
    };

    set("adminRecipeName", recipe.name);
    set("adminRecipeCategory", recipe.category);
    set("adminRecipeDescription", recipe.description);
    set("adminRecipeImage", recipe.image);
    set("adminRecipeTime", recipe.time);
    set("adminRecipeDifficulty", recipe.difficulty || "Easy");
    set("adminRecipeServings", recipe.servings);
    set("adminRecipeIngredients", recipe.ingredients);
    set("adminRecipeSteps", recipe.steps);
    set("editRecipeIndex", index);

    document.getElementById("formTitle").textContent = "✏️ Edit Recipe";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteRecipe(index) {
    if (!confirm("Are you sure you want to delete this recipe?")) {
        return;
    }

    const removed = adminRecipes.splice(index, 1)[0];
    saveAdminRecipes();

    // Also remove it from users' favorites
    if (removed) {
        const favs = readJSON("foodieFavorites", []).filter(function (f) {
            return f.id !== removed.id;
        });
        writeJSON("foodieFavorites", favs);
    }

    clearRecipeForm();
    displayAdminRecipes();
    alert("Recipe deleted successfully!");
}

function clearRecipeForm() {
    const form = document.getElementById("recipeForm");

    if (!form) {
        return;
    }

    form.reset();
    document.getElementById("editRecipeIndex").value = "";
    document.getElementById("formTitle").textContent = "➕ Add New Recipe";
}


/* =====================================================
   10. PAGE PROTECTION + NAVBAR + DASHBOARD NAME
===================================================== */

function isUserLoggedIn() {
    return localStorage.getItem("foodieLoggedIn") === "true";
}

function isAdminLoggedIn() {
    return localStorage.getItem("foodieAdminLoggedIn") === "true";
}

(function protectPages() {
    if (["admin-dashboard.html", "admin-recipes.html"].indexOf(CURRENT_PAGE) !== -1 &&
        !isAdminLoggedIn()) {
        window.location.replace("admin-login.html");
    }

    if (CURRENT_PAGE === "user-dashboard.html" && !isUserLoggedIn()) {
        window.location.replace("login.html");
    }
})();

function initNavbar() {
    // Show Dashboard / Logout instead of Login / Sign Up when logged in
    const box = document.querySelector(".navbar .nav-buttons");

    if (box && isUserLoggedIn()) {
        box.innerHTML = `
            <a href="user-dashboard.html" class="login-btn">Dashboard</a>
            <a href="#" class="signup-btn" onclick="logoutUser(); return false;">Logout</a>
        `;
    }

    const nameEl = document.getElementById("userName");
    if (nameEl) {
        nameEl.textContent = localStorage.getItem("foodieUserName") || "User";
    }
}


/* =====================================================
   11. GLOBAL CLICK HANDLER + START-UP
===================================================== */

document.addEventListener("click", function (event) {

    // Heart / save buttons (works for dynamically created cards too)
    const fav = event.target.closest("[data-fav-id]");
    if (fav) {
        event.preventDefault();
        toggleFavorite(fav.dataset.favId);
        return;
    }

    // Remove button on favorites page
    const remove = event.target.closest("[data-remove-id]");
    if (remove) {
        removeFavorite(remove.dataset.removeId);
    }
});

// Press Enter in the home-page search box
const homeSearch = document.getElementById("search");
if (homeSearch) {
    homeSearch.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { searchRecipe(); }
    });
}

initNavbar();
initRecipesPage();
initDetailsPage();
displayFavorites();
displayAdminRecipes();
initAdminStats();
refreshFavoriteButtons();
hydrateImages();
