// Extra built-in recipes: breakfast, lunch, dinner, dessert, healthy, drinks
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

export const MORE_RECIPES = [
  /* ===================== BREAKFAST ===================== */
  {
    id: "masala-dosa",
    name: "Crispy Masala Dosa",
    category: "breakfast",
    image: U("photo-1668236543090-82eba5ee5976"),
    description: "Golden, paper-thin rice crepe filled with spiced potato masala.",
    longDescription: "A South Indian classic: a crisp fermented rice and lentil crepe stuffed with a soft, turmeric-spiced potato filling, served with coconut chutney and sambar.",
    rating: "4.9", reviews: 164, tag: "POPULAR",
    time: 40, difficulty: "Medium", servings: 4,
    ingredients: [
      { icon: "🍚", name: "Dosa Batter", qty: "3 cups" },
      { icon: "🥔", name: "Potatoes", qty: "4 medium, boiled" },
      { icon: "🧅", name: "Onions", qty: "2 sliced" },
      { icon: "🌿", name: "Curry Leaves", qty: "1 sprig" },
      { icon: "🟡", name: "Turmeric", qty: "1/2 teaspoon" },
      { icon: "🌶️", name: "Green Chillies", qty: "2 chopped" },
      { icon: "🧈", name: "Ghee or Oil", qty: "4 tablespoons" }
    ],
    steps: [
      { title: "Make the Potato Masala", text: "Splutter mustard seeds and curry leaves in oil. Add onions, chillies and turmeric, then cook until soft." },
      { title: "Add the Potatoes", text: "Mash the boiled potatoes roughly, add them to the pan with salt and mix well. Keep the filling warm." },
      { title: "Spread the Dosa", text: "Heat a tawa, pour a ladle of batter in the centre and spread it in circles into a thin round." },
      { title: "Crisp It Up", text: "Drizzle ghee around the edges and cook on medium heat until the dosa turns golden and crisp." },
      { title: "Fill & Serve", text: "Place the potato masala in the middle, fold the dosa and serve hot with chutney and sambar." }
    ],
    tip: "Keep the tawa hot but wipe it with a wet cloth before each dosa so the batter spreads smoothly."
  },
  {
    id: "vegetable-poha",
    name: "Vegetable Poha",
    category: "breakfast",
    image: U("photo-1645177628172-a94c1f96e6db"),
    description: "Light, fluffy flattened rice tossed with peanuts, onions and lemon.",
    longDescription: "A quick Indian breakfast of soft flattened rice cooked with mustard seeds, curry leaves, peanuts and vegetables, finished with a squeeze of lemon.",
    rating: "4.6", reviews: 87, tag: "QUICK",
    time: 20, difficulty: "Easy", servings: 3,
    ingredients: [
      { icon: "🍚", name: "Thick Poha", qty: "2 cups" },
      { icon: "🥜", name: "Peanuts", qty: "1/4 cup" },
      { icon: "🧅", name: "Onion", qty: "1 chopped" },
      { icon: "🥕", name: "Carrot & Peas", qty: "1/2 cup" },
      { icon: "🌿", name: "Curry Leaves", qty: "8 to 10" },
      { icon: "🍋", name: "Lemon", qty: "1, juiced" },
      { icon: "🟡", name: "Turmeric", qty: "1/4 teaspoon" }
    ],
    steps: [
      { title: "Rinse the Poha", text: "Rinse the poha in a sieve under water for 30 seconds, then let it rest for 5 minutes until soft." },
      { title: "Temper the Spices", text: "Heat oil, fry the peanuts, then add mustard seeds, curry leaves and green chillies." },
      { title: "Cook the Vegetables", text: "Add onion, carrot and peas with turmeric and cook for 4 to 5 minutes until tender." },
      { title: "Add the Poha", text: "Add the soft poha and salt, mix gently and cook for 2 minutes on low heat." },
      { title: "Finish & Serve", text: "Turn off the heat, add lemon juice and fresh coriander, and serve warm." }
    ],
    tip: "Do not soak poha in water - a quick rinse is enough or it will turn mushy."
  },
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    category: "breakfast",
    image: U("photo-1626132647523-66f5bf380027"),
    description: "Whole-wheat flatbread stuffed with spiced mashed potato, served with butter.",
    longDescription: "Soft, golden whole-wheat parathas stuffed with a tangy, spiced potato filling and cooked with butter until crisp at the edges.",
    rating: "4.8", reviews: 142, tag: "",
    time: 35, difficulty: "Medium", servings: 4,
    ingredients: [
      { icon: "🌾", name: "Whole Wheat Flour", qty: "2 cups" },
      { icon: "🥔", name: "Boiled Potatoes", qty: "3 large" },
      { icon: "🌶️", name: "Green Chillies", qty: "2 chopped" },
      { icon: "🌿", name: "Coriander Leaves", qty: "2 tablespoons" },
      { icon: "🧂", name: "Garam Masala & Salt", qty: "1 teaspoon each" },
      { icon: "🧈", name: "Butter", qty: "4 tablespoons" },
      { icon: "🥛", name: "Curd", qty: "1/2 cup, to serve" }
    ],
    steps: [
      { title: "Knead the Dough", text: "Mix flour, salt and water into a soft dough. Cover and rest for 15 minutes." },
      { title: "Prepare the Filling", text: "Mash the potatoes and mix with chillies, coriander, garam masala and salt." },
      { title: "Stuff the Dough", text: "Roll a dough ball slightly, place filling in the centre, seal the edges and roll it out gently." },
      { title: "Cook the Paratha", text: "Cook on a hot tawa, turning and brushing with butter until golden brown spots appear." },
      { title: "Serve Hot", text: "Serve with a spoon of butter, fresh curd and pickle." }
    ],
    tip: "Make sure the potatoes are completely cool and dry, or the filling will tear the paratha."
  },

  /* ===================== LUNCH ===================== */
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "lunch",
    image: U("photo-1631452180519-c014fe946bc7"),
    description: "Soft paneer cubes in a rich, creamy tomato and butter gravy.",
    longDescription: "A restaurant favourite: soft paneer simmered in a velvety tomato-cashew gravy with butter, cream and warm spices. Perfect with naan or jeera rice.",
    rating: "4.9", reviews: 231, tag: "POPULAR",
    time: 35, difficulty: "Medium", servings: 4,
    ingredients: [
      { icon: "🧀", name: "Paneer", qty: "250 grams, cubed" },
      { icon: "🍅", name: "Tomatoes", qty: "4 large" },
      { icon: "🥜", name: "Cashews", qty: "10 soaked" },
      { icon: "🧈", name: "Butter", qty: "3 tablespoons" },
      { icon: "🥛", name: "Fresh Cream", qty: "1/4 cup" },
      { icon: "🧄", name: "Ginger Garlic Paste", qty: "1 tablespoon" },
      { icon: "🌶️", name: "Kashmiri Chilli Powder", qty: "1 teaspoon" },
      { icon: "🌿", name: "Kasuri Methi", qty: "1 teaspoon" }
    ],
    steps: [
      { title: "Make the Tomato Base", text: "Boil tomatoes with cashews for 8 minutes, cool, and blend into a smooth puree." },
      { title: "Build the Gravy", text: "Melt butter, add ginger garlic paste, then pour in the puree with chilli powder and salt. Simmer for 10 minutes." },
      { title: "Add Paneer", text: "Gently add the paneer cubes and cook for 5 minutes so they absorb the flavour." },
      { title: "Finish with Cream", text: "Stir in the cream, crushed kasuri methi and a pinch of sugar to balance the tang." },
      { title: "Serve", text: "Garnish with a swirl of cream and coriander and serve with naan, roti or rice." }
    ],
    tip: "Soak the paneer cubes in warm water for 10 minutes before cooking to keep them extra soft."
  },
  {
    id: "rajma-chawal",
    name: "Rajma Chawal",
    category: "lunch",
    image: U("photo-1585937421612-70a008356fbe"),
    description: "Slow-cooked kidney beans in thick masala gravy with steamed rice.",
    longDescription: "Comforting North Indian rajma - red kidney beans simmered with onions, tomatoes and spices until thick and creamy, served over hot steamed rice.",
    rating: "4.7", reviews: 118, tag: "COMFORT",
    time: 55, difficulty: "Easy", servings: 4,
    ingredients: [
      { icon: "🫘", name: "Rajma (Kidney Beans)", qty: "1 cup, soaked overnight" },
      { icon: "🧅", name: "Onions", qty: "2 chopped" },
      { icon: "🍅", name: "Tomatoes", qty: "3 pureed" },
      { icon: "🧄", name: "Ginger Garlic Paste", qty: "1 tablespoon" },
      { icon: "🌶️", name: "Rajma Masala", qty: "2 teaspoons" },
      { icon: "🍚", name: "Basmati Rice", qty: "2 cups, cooked" },
      { icon: "🧈", name: "Ghee", qty: "1 tablespoon" }
    ],
    steps: [
      { title: "Pressure Cook the Rajma", text: "Cook the soaked rajma with salt and water for 6 to 7 whistles until completely soft." },
      { title: "Fry the Masala", text: "Saute onions until golden, add ginger garlic paste, then the tomato puree and spices. Cook until oil separates." },
      { title: "Combine", text: "Add the cooked rajma with some of its water to the masala." },
      { title: "Simmer", text: "Mash a few beans against the pan and simmer for 15 minutes until the gravy is thick." },
      { title: "Serve", text: "Finish with ghee and coriander and serve over hot steamed rice." }
    ],
    tip: "Always soak rajma overnight and discard the soaking water - it cooks faster and digests better."
  },
  {
    id: "lemon-rice",
    name: "Tangy Lemon Rice",
    category: "lunch",
    image: U("photo-1596797038530-2c107229654b"),
    description: "Fluffy rice tempered with mustard, peanuts, curry leaves and fresh lemon.",
    longDescription: "A bright South Indian rice dish (chitranna) with a crunchy peanut tempering, turmeric and fresh lemon juice. Ready in 20 minutes and great for lunchboxes.",
    rating: "4.5", reviews: 66, tag: "",
    time: 20, difficulty: "Easy", servings: 3,
    ingredients: [
      { icon: "🍚", name: "Cooked Rice", qty: "3 cups, cooled" },
      { icon: "🍋", name: "Lemons", qty: "2, juiced" },
      { icon: "🥜", name: "Peanuts", qty: "3 tablespoons" },
      { icon: "🌿", name: "Curry Leaves", qty: "1 sprig" },
      { icon: "🟡", name: "Turmeric", qty: "1/2 teaspoon" },
      { icon: "🌶️", name: "Green Chillies", qty: "2 slit" },
      { icon: "🫙", name: "Mustard & Chana Dal", qty: "1 teaspoon each" }
    ],
    steps: [
      { title: "Prepare the Rice", text: "Spread the cooked rice on a plate and let it cool so the grains stay separate." },
      { title: "Make the Tempering", text: "Heat oil, add mustard, chana dal and peanuts and fry until golden and crunchy." },
      { title: "Add Flavour", text: "Add curry leaves, green chillies and turmeric and fry for 30 seconds." },
      { title: "Mix", text: "Add the rice and salt, mix gently, then turn off the heat." },
      { title: "Finish", text: "Pour in the lemon juice, toss and serve with papad or raita." }
    ],
    tip: "Add the lemon juice only after switching off the heat - cooking it makes the rice bitter."
  },

  /* ===================== DINNER ===================== */
  {
    id: "butter-chicken",
    name: "Creamy Butter Chicken",
    category: "dinner",
    image: U("photo-1603894584373-5ac82b2ae398"),
    description: "Tender tandoori-style chicken in a smooth, buttery tomato gravy.",
    longDescription: "India's most loved curry: marinated chicken cooked in a silky tomato, butter and cream sauce with a hint of fenugreek. Best with garlic naan.",
    rating: "4.9", reviews: 312, tag: "BESTSELLER",
    time: 50, difficulty: "Medium", servings: 4,
    ingredients: [
      { icon: "🍗", name: "Boneless Chicken", qty: "500 grams" },
      { icon: "🥛", name: "Yogurt", qty: "1/2 cup" },
      { icon: "🍅", name: "Tomato Puree", qty: "1 1/2 cups" },
      { icon: "🧈", name: "Butter", qty: "3 tablespoons" },
      { icon: "🥛", name: "Fresh Cream", qty: "1/3 cup" },
      { icon: "🧄", name: "Ginger Garlic Paste", qty: "1 tablespoon" },
      { icon: "🌶️", name: "Chilli & Garam Masala", qty: "1 teaspoon each" }
    ],
    steps: [
      { title: "Marinate", text: "Mix chicken with yogurt, ginger garlic paste, chilli powder and salt. Rest for at least 30 minutes." },
      { title: "Sear the Chicken", text: "Cook the marinated chicken in a hot pan until lightly charred, then set aside." },
      { title: "Cook the Sauce", text: "Melt butter, add tomato puree and spices, and simmer for 12 minutes until thick." },
      { title: "Combine", text: "Add the chicken and simmer for 10 minutes until fully cooked and tender." },
      { title: "Finish", text: "Stir in cream and crushed kasuri methi, then serve with naan or rice." }
    ],
    tip: "A teaspoon of honey or sugar at the end balances the tomato's acidity and gives the classic restaurant taste."
  },
  {
    id: "margherita-pizza",
    name: "Homemade Margherita Pizza",
    category: "dinner",
    image: U("photo-1574071318508-1cdbab80d002"),
    description: "Thin crust pizza with tomato sauce, fresh mozzarella and basil.",
    longDescription: "A simple Italian classic made at home: soft, chewy dough topped with a bright tomato sauce, melting mozzarella and fresh basil leaves.",
    rating: "4.8", reviews: 189, tag: "TRENDING",
    time: 45, difficulty: "Medium", servings: 2,
    ingredients: [
      { icon: "🌾", name: "Pizza Dough", qty: "300 grams" },
      { icon: "🍅", name: "Tomato Sauce", qty: "1/2 cup" },
      { icon: "🧀", name: "Mozzarella Cheese", qty: "150 grams" },
      { icon: "🌿", name: "Fresh Basil", qty: "8 to 10 leaves" },
      { icon: "🫒", name: "Olive Oil", qty: "2 tablespoons" },
      { icon: "🧄", name: "Garlic", qty: "2 cloves, minced" },
      { icon: "🧂", name: "Salt & Oregano", qty: "To taste" }
    ],
    steps: [
      { title: "Preheat the Oven", text: "Heat your oven to its highest setting (250°C) with a baking tray inside." },
      { title: "Shape the Dough", text: "Stretch the dough by hand on a floured surface into a thin 10 to 12 inch round." },
      { title: "Add the Sauce", text: "Spread the tomato sauce mixed with garlic and oregano, leaving a border for the crust." },
      { title: "Top with Cheese", text: "Scatter torn mozzarella over the sauce and drizzle with olive oil." },
      { title: "Bake & Garnish", text: "Bake for 8 to 10 minutes until the crust is golden and the cheese bubbles. Top with fresh basil." }
    ],
    tip: "Pat the mozzarella dry with a paper towel so the pizza does not turn soggy."
  },

  /* ===================== DESSERT ===================== */
  {
    id: "gulab-jamun",
    name: "Soft Gulab Jamun",
    category: "dessert",
    image: U("photo-1666190092159-3171cf0fbb12"),
    description: "Melt-in-the-mouth milk dumplings soaked in warm cardamom sugar syrup.",
    longDescription: "The festival favourite: soft milk-powder dumplings fried until golden and soaked in a fragrant rose and cardamom syrup.",
    rating: "4.9", reviews: 275, tag: "SWEET",
    time: 40, difficulty: "Medium", servings: 6,
    ingredients: [
      { icon: "🥛", name: "Milk Powder", qty: "1 cup" },
      { icon: "🌾", name: "All-purpose Flour", qty: "1/4 cup" },
      { icon: "🥛", name: "Milk", qty: "4 tablespoons" },
      { icon: "🍬", name: "Sugar", qty: "1 1/2 cups" },
      { icon: "🫘", name: "Cardamom", qty: "4 pods, crushed" },
      { icon: "🧈", name: "Ghee", qty: "For frying" },
      { icon: "🌹", name: "Rose Water", qty: "1 teaspoon" }
    ],
    steps: [
      { title: "Make the Syrup", text: "Boil sugar with 1 1/2 cups water and cardamom for 6 minutes until slightly sticky. Add rose water." },
      { title: "Prepare the Dough", text: "Mix milk powder, flour and milk into a soft, smooth dough without kneading too hard." },
      { title: "Shape the Balls", text: "Roll into small smooth crack-free balls. They will double in size when fried." },
      { title: "Fry Slowly", text: "Fry on very low heat, turning gently, for 6 to 8 minutes until deep golden brown." },
      { title: "Soak & Serve", text: "Drop the hot jamuns into warm syrup and soak for at least 1 hour before serving." }
    ],
    tip: "Fry on low heat only - high heat browns the outside while the inside stays raw."
  },
  {
    id: "chocolate-brownies",
    name: "Fudgy Chocolate Brownies",
    category: "dessert",
    image: U("photo-1606313564200-e75d5e30476c"),
    description: "Dense, fudgy brownies with a crackly top and gooey centre.",
    longDescription: "Rich and chewy brownies made with real cocoa and dark chocolate, with the signature shiny crackly top and a fudgy middle.",
    rating: "4.8", reviews: 198, tag: "",
    time: 40, difficulty: "Easy", servings: 9,
    ingredients: [
      { icon: "🍫", name: "Dark Chocolate", qty: "150 grams" },
      { icon: "🧈", name: "Butter", qty: "1/2 cup" },
      { icon: "🍬", name: "Sugar", qty: "3/4 cup" },
      { icon: "🥚", name: "Eggs", qty: "2 large" },
      { icon: "🌾", name: "All-purpose Flour", qty: "1/2 cup" },
      { icon: "🍫", name: "Cocoa Powder", qty: "1/4 cup" },
      { icon: "🌰", name: "Walnuts", qty: "1/3 cup, chopped" }
    ],
    steps: [
      { title: "Melt Chocolate", text: "Melt the chocolate and butter together over a double boiler and let it cool slightly." },
      { title: "Whisk Eggs & Sugar", text: "Whisk eggs with sugar for 2 minutes until pale and thick - this creates the crackly top." },
      { title: "Combine", text: "Fold the chocolate mixture into the eggs, then gently fold in flour, cocoa and a pinch of salt." },
      { title: "Add Walnuts", text: "Stir in the walnuts and pour the batter into a lined 8-inch tin." },
      { title: "Bake", text: "Bake at 175°C for 22 to 25 minutes. A few moist crumbs on a toothpick means they are perfect." }
    ],
    tip: "Cool the brownies completely before slicing - it gives clean, fudgy squares."
  },
  {
    id: "rice-kheer",
    name: "Creamy Rice Kheer",
    category: "dessert",
    image: U("photo-1631292784640-2b24be784d5d"),
    description: "Slow-cooked milk and rice pudding with cardamom, saffron and nuts.",
    longDescription: "A traditional Indian rice pudding simmered in full-cream milk until thick and creamy, flavoured with cardamom and saffron and topped with nuts.",
    rating: "4.7", reviews: 94, tag: "",
    time: 50, difficulty: "Easy", servings: 5,
    ingredients: [
      { icon: "🍚", name: "Basmati Rice", qty: "1/4 cup" },
      { icon: "🥛", name: "Full-cream Milk", qty: "1 litre" },
      { icon: "🍬", name: "Sugar", qty: "1/2 cup" },
      { icon: "🫘", name: "Cardamom Powder", qty: "1/2 teaspoon" },
      { icon: "🌼", name: "Saffron", qty: "A few strands" },
      { icon: "🥜", name: "Almonds & Pistachios", qty: "2 tablespoons, sliced" }
    ],
    steps: [
      { title: "Soak the Rice", text: "Wash the rice and soak it in water for 20 minutes, then drain." },
      { title: "Boil the Milk", text: "Bring the milk to a boil in a heavy pan, then reduce to low heat." },
      { title: "Cook the Rice", text: "Add the rice and simmer for 30 to 35 minutes, stirring often, until soft and creamy." },
      { title: "Sweeten", text: "Add sugar, cardamom and saffron and cook for 5 more minutes." },
      { title: "Serve", text: "Top with sliced nuts and serve warm or chilled." }
    ],
    tip: "Use a heavy-bottomed pan and stir from the bottom to stop the milk from sticking."
  },

  /* ===================== HEALTHY ===================== */
  {
    id: "quinoa-veggie-bowl",
    name: "Quinoa Veggie Power Bowl",
    category: "healthy",
    image: U("photo-1546069901-ba9599a7e63c"),
    description: "Protein-rich quinoa with roasted vegetables, chickpeas and lemon dressing.",
    longDescription: "A colourful, filling bowl of fluffy quinoa topped with roasted vegetables, crispy chickpeas and a zesty lemon-tahini dressing.",
    rating: "4.7", reviews: 73, tag: "HEALTHY",
    time: 30, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "🌾", name: "Quinoa", qty: "1 cup" },
      { icon: "🫘", name: "Chickpeas", qty: "1 cup, boiled" },
      { icon: "🥦", name: "Broccoli", qty: "1 cup florets" },
      { icon: "🥕", name: "Carrot", qty: "1 sliced" },
      { icon: "🥑", name: "Avocado", qty: "1/2 sliced" },
      { icon: "🍋", name: "Lemon", qty: "1, juiced" },
      { icon: "🫒", name: "Olive Oil", qty: "2 tablespoons" }
    ],
    steps: [
      { title: "Cook the Quinoa", text: "Rinse the quinoa and simmer with 2 cups of water for 15 minutes until fluffy." },
      { title: "Roast the Vegetables", text: "Toss broccoli, carrot and chickpeas with olive oil, salt and pepper and roast at 200°C for 20 minutes." },
      { title: "Make the Dressing", text: "Whisk lemon juice, olive oil, a little garlic and salt." },
      { title: "Assemble", text: "Fill a bowl with quinoa and top with the roasted vegetables and avocado." },
      { title: "Dress & Serve", text: "Drizzle the dressing over the bowl and serve immediately." }
    ],
    tip: "Rinse quinoa well before cooking to remove its natural bitter coating."
  },
  {
    id: "moong-sprouts-salad",
    name: "Moong Sprouts Salad",
    category: "healthy",
    image: U("photo-1540420773420-3366772f4999"),
    description: "Crunchy sprouted moong with onion, tomato, cucumber and lemon.",
    longDescription: "A high-protein, no-cook salad of fresh moong sprouts tossed with chopped vegetables, chaat masala and lime. Light, filling and ready in 10 minutes.",
    rating: "4.5", reviews: 52, tag: "HIGH PROTEIN",
    time: 10, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "🌱", name: "Moong Sprouts", qty: "2 cups" },
      { icon: "🧅", name: "Onion", qty: "1 small, chopped" },
      { icon: "🍅", name: "Tomato", qty: "1 chopped" },
      { icon: "🥒", name: "Cucumber", qty: "1 chopped" },
      { icon: "🍋", name: "Lemon", qty: "1, juiced" },
      { icon: "🧂", name: "Chaat Masala", qty: "1 teaspoon" },
      { icon: "🌿", name: "Coriander", qty: "2 tablespoons" }
    ],
    steps: [
      { title: "Steam the Sprouts", text: "Steam the sprouts for 3 to 4 minutes so they are tender but still crunchy." },
      { title: "Chop the Vegetables", text: "Finely chop the onion, tomato, cucumber and coriander." },
      { title: "Mix", text: "Combine the sprouts and vegetables in a large bowl." },
      { title: "Season", text: "Add lemon juice, chaat masala, black salt and pepper and toss well." },
      { title: "Serve Fresh", text: "Serve right away so the vegetables stay crisp." }
    ],
    tip: "Add the lemon juice and salt just before serving so the salad does not turn watery."
  },
  {
    id: "fruit-yogurt-parfait",
    name: "Fruit & Yogurt Parfait",
    category: "healthy",
    image: U("photo-1488477181946-6428a0291777"),
    description: "Layers of creamy yogurt, crunchy granola, honey and fresh seasonal fruit.",
    longDescription: "A refreshing, protein-packed breakfast or snack made by layering thick yogurt with crunchy granola and fresh fruit. No cooking required.",
    rating: "4.6", reviews: 61, tag: "",
    time: 10, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "🥛", name: "Thick Greek Yogurt", qty: "1 1/2 cups" },
      { icon: "🥣", name: "Granola", qty: "1/2 cup" },
      { icon: "🍓", name: "Strawberries", qty: "1 cup, sliced" },
      { icon: "🍌", name: "Banana", qty: "1 sliced" },
      { icon: "🍯", name: "Honey", qty: "2 tablespoons" },
      { icon: "🌱", name: "Chia Seeds", qty: "1 teaspoon" }
    ],
    steps: [
      { title: "Prepare the Fruit", text: "Wash and slice the strawberries and banana." },
      { title: "First Layer", text: "Spoon yogurt into the bottom of two glasses." },
      { title: "Add Crunch", text: "Add a layer of granola and a layer of fruit." },
      { title: "Repeat", text: "Repeat the layers until the glasses are full, finishing with fruit." },
      { title: "Finish", text: "Drizzle with honey, sprinkle chia seeds and serve immediately." }
    ],
    tip: "Add the granola right before serving so it stays crunchy."
  },

  /* ===================== DRINKS ===================== */
  {
    id: "mango-lassi",
    name: "Creamy Mango Lassi",
    category: "drinks",
    image: U("photo-1623065422902-30a2d299bbe4"),
    description: "Thick, chilled yogurt drink blended with sweet ripe mangoes.",
    longDescription: "A classic Indian summer cooler: ripe mango pulp blended with chilled yogurt, a touch of sugar and a pinch of cardamom.",
    rating: "4.9", reviews: 154, tag: "SUMMER",
    time: 5, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "🥭", name: "Ripe Mango", qty: "2 cups, chopped" },
      { icon: "🥛", name: "Chilled Yogurt", qty: "1 cup" },
      { icon: "🥛", name: "Cold Milk", qty: "1/2 cup" },
      { icon: "🍬", name: "Sugar or Honey", qty: "2 tablespoons" },
      { icon: "🫘", name: "Cardamom Powder", qty: "A pinch" },
      { icon: "🧊", name: "Ice Cubes", qty: "4 to 5" }
    ],
    steps: [
      { title: "Add to Blender", text: "Add the mango, yogurt, milk, sugar and cardamom to a blender." },
      { title: "Blend", text: "Blend for 1 minute until completely smooth and creamy." },
      { title: "Adjust", text: "Taste and add more sugar or milk to reach your preferred sweetness and thickness." },
      { title: "Chill & Serve", text: "Pour over ice cubes in tall glasses and garnish with chopped pistachios." }
    ],
    tip: "Use frozen mango chunks for an extra thick, ice-cream-like lassi."
  },
  {
    id: "masala-chai",
    name: "Classic Masala Chai",
    category: "drinks",
    image: U("photo-1571934811356-5cc061b6821f"),
    description: "Strong Indian milk tea simmered with ginger, cardamom and warm spices.",
    longDescription: "The everyday Indian favourite: black tea simmered with milk, fresh ginger and whole spices until rich, aromatic and warming.",
    rating: "4.8", reviews: 260, tag: "POPULAR",
    time: 10, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "💧", name: "Water", qty: "1 cup" },
      { icon: "🥛", name: "Milk", qty: "1 cup" },
      { icon: "🍃", name: "Tea Leaves", qty: "2 teaspoons" },
      { icon: "🫚", name: "Fresh Ginger", qty: "1 inch, crushed" },
      { icon: "🫘", name: "Cardamom", qty: "2 pods, crushed" },
      { icon: "🍬", name: "Sugar", qty: "2 teaspoons" }
    ],
    steps: [
      { title: "Boil the Spices", text: "Boil the water with ginger and cardamom for 2 minutes." },
      { title: "Add the Tea", text: "Add the tea leaves and simmer for 1 minute until the water turns dark." },
      { title: "Add Milk & Sugar", text: "Pour in the milk and sugar and bring it to a boil." },
      { title: "Simmer", text: "Reduce the heat and simmer for 2 minutes, letting it rise once or twice." },
      { title: "Strain & Serve", text: "Strain into cups and serve hot." }
    ],
    tip: "Crush the ginger and cardamom just before adding - fresh crushing releases the most aroma."
  },
  {
    id: "iced-cold-coffee",
    name: "Iced Cold Coffee",
    category: "drinks",
    image: U("photo-1461023058943-07fcbe16d735"),
    description: "Frothy, chilled coffee blended with milk and a scoop of ice cream.",
    longDescription: "A cafe-style cold coffee made at home: strong coffee blended with cold milk, sugar and ice cream for a thick, frothy finish.",
    rating: "4.7", reviews: 121, tag: "NEW",
    time: 5, difficulty: "Easy", servings: 2,
    ingredients: [
      { icon: "☕", name: "Instant Coffee", qty: "2 teaspoons" },
      { icon: "🥛", name: "Cold Milk", qty: "2 cups" },
      { icon: "🍬", name: "Sugar", qty: "2 tablespoons" },
      { icon: "🍨", name: "Vanilla Ice Cream", qty: "2 scoops" },
      { icon: "🧊", name: "Ice Cubes", qty: "6 to 8" },
      { icon: "🍫", name: "Chocolate Syrup", qty: "To garnish" }
    ],
    steps: [
      { title: "Dissolve the Coffee", text: "Mix the coffee and sugar with 2 tablespoons of warm water until dissolved." },
      { title: "Blend", text: "Add the coffee, cold milk, ice cubes and one scoop of ice cream to a blender and blend until frothy." },
      { title: "Prepare Glasses", text: "Drizzle chocolate syrup inside two tall glasses." },
      { title: "Serve", text: "Pour in the coffee and top with another scoop of ice cream." }
    ],
    tip: "Blend the coffee with sugar in warm water first - this gives a much frothier top."
  },
  {
    id: "mint-lemonade",
    name: "Fresh Mint Lemonade",
    category: "drinks",
    image: U("photo-1621263764928-df1444c5e859"),
    description: "Zesty, ice-cold lemonade with crushed mint leaves.",
    longDescription: "A refreshing homemade cooler with fresh lemon juice, crushed mint and a hint of sweetness. Perfect for hot afternoons.",
    rating: "4.6", reviews: 98, tag: "REFRESHING",
    time: 5, difficulty: "Easy", servings: 4,
    ingredients: [
      { icon: "🍋", name: "Lemons", qty: "4, juiced" },
      { icon: "🌿", name: "Fresh Mint", qty: "1 handful" },
      { icon: "🍬", name: "Sugar", qty: "1/3 cup" },
      { icon: "💧", name: "Cold Water or Soda", qty: "4 cups" },
      { icon: "🧂", name: "Black Salt", qty: "A pinch" },
      { icon: "🧊", name: "Ice Cubes", qty: "Plenty" }
    ],
    steps: [
      { title: "Crush the Mint", text: "Gently crush the mint leaves with the sugar in a jug to release the flavour." },
      { title: "Add the Lemon", text: "Pour in the lemon juice and stir until the sugar dissolves." },
      { title: "Add Water", text: "Add cold water or soda and a pinch of black salt." },
      { title: "Serve", text: "Fill glasses with ice, pour over the lemonade and garnish with lemon slices." }
    ],
    tip: "Use sparkling water instead of plain water for a fizzy mojito-style version."
  }
];