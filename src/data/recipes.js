// Built-in recipes (read-only). Admin-added recipes are stored in localStorage.
const BASE_RECIPES = [
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

import { MORE_RECIPES } from "./moreRecipes";
import { WORLD_RECIPES } from "./worldRecipes";

// Cuisine of the original recipes (everything not listed here is Indian)
const ORIGINAL_CUISINE = {
  "creamy-italian-pasta": "Italian", "margherita-pizza": "Italian",
  "chicken-burger": "American", "fluffy-pancakes": "American", "chocolate-brownies": "American",
  "chocolate-cake": "American", "fresh-garden-salad": "International", "quinoa-veggie-bowl": "International",
  "fruit-yogurt-parfait": "International", "iced-cold-coffee": "International", "mint-lemonade": "International",
};

// original 6 recipes first (home page "Trending" shows the first 3), then the rest
export const BUILT_IN_RECIPES = [
  ...[...BASE_RECIPES, ...MORE_RECIPES].map((r) => ({ ...r, cuisine: ORIGINAL_CUISINE[r.id] || "Indian" })),
  ...WORLD_RECIPES,
];
