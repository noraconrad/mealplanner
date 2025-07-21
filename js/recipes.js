
const RECIPE_DATABASE = [
  // Recipe Database - Add new recipes here!
// Each recipe should have: name, category, time, serves, cuisine, ingredients, fullIngredients, instructions

  
    // BREAKFAST RECIPES
    {
        name: "Berry Overnight Oats",
        category: "breakfast",
        time: "5 min prep",
        serves: 1,
        cuisine: "Healthy",
        ingredients: ['oats', 'greek yogurt', 'berries', 'chia seeds', 'honey'],
        fullIngredients: [
            "1/2 cup rolled oats",
            "1/2 cup Greek yogurt",
            "1/4 cup mixed berries",
            "1 tbsp chia seeds",
            "1 tbsp honey",
            "1/4 cup coconut water or water"
        ],
        instructions: [
            "Mix all ingredients in a jar or bowl the night before.",
            "Refrigerate overnight.",
            "Ready to eat in the morning - no cooking required!"
        ]
    },
    {
        name: "Greek Yogurt Parfait",
        category: "breakfast",
        time: "2 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['greek yogurt', 'berries', 'almonds', 'honey'],
        fullIngredients: [
            "1 cup Greek yogurt",
            "1/2 cup mixed berries",
            "1/4 cup almonds, chopped",
            "2 tbsp honey"
        ],
        instructions: [
            "Layer yogurt, berries, and nuts in a bowl or glass.",
            "Drizzle with honey.",
            "Enjoy immediately!"
        ]
    },
    {
        name: "Sweet Potato Hash",
        category: "breakfast",
        time: "25 min",
        serves: 2,
        cuisine: "American",
        ingredients: ['sweet potatoes', 'eggs', 'bell peppers', 'olive oil'],
        fullIngredients: [
            "2 large sweet potatoes, cubed",
            "4 eggs",
            "1 bell pepper, diced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large skillet over medium heat.",
            "Cook sweet potatoes for 15 minutes until tender, stirring occasionally.",
            "Add bell pepper and cook for 3 more minutes.",
            "Make wells in the hash and crack eggs into them.",
            "Cover and cook for 5 minutes until eggs are set.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Steak & Egg Scramble",
        category: "breakfast",
        time: "5 min",
        serves: 1,
        cuisine: "American",
        ingredients: ['steak', 'eggs', 'bell peppers', 'olive oil'],
        fullIngredients: [
            "4 oz leftover steak, diced",
            "3 eggs",
            "1/2 bell pepper, diced",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté bell pepper for 3 minutes.",
            "Add diced steak to warm through.",
            "Beat eggs and scramble into the mixture.",
            "Cook until eggs are set, about 2 minutes."
        ]
    },
    {
        name: "Korean Beef Hash",
        category: "breakfast",
        time: "7 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['ground beef', 'sweet potatoes', 'eggs', 'garlic', 'olive oil'],
        fullIngredients: [
            "1/2 cup leftover ground beef",
            "1 medium roasted sweet potato, cubed",
            "2 eggs",
            "1 clove garlic, minced",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté garlic for 30 seconds.",
            "Add sweet potato and beef to warm through.",
            "Scramble eggs separately and serve together."
        ]
    },
    {
        name: "Mexican Chicken Scramble",
        category: "breakfast",
        time: "8 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['ground chicken', 'eggs', 'bell peppers', 'onions', 'olive oil'],
        fullIngredients: [
            "1/2 cup leftover ground chicken",
            "3 eggs",
            "1/2 bell pepper, diced",
            "1/4 onion, diced",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté pepper and onion for 3 minutes.",
            "Add chicken to warm through.",
            "Beat eggs and scramble into the mixture.",
            "Cook until eggs are set."
        ]
    },
    {
        name: "Veggie Scramble",
        category: "breakfast",
        time: "8 min",
        serves: 2,
        cuisine: "Vegetarian",
        ingredients: ['eggs', 'mushrooms', 'onions', 'bell peppers', 'olive oil'],
        fullIngredients: [
            "4 eggs",
            "1 cup mixed vegetables (mushrooms, onions, peppers)",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pan over medium heat.",
            "Sauté vegetables for 5 minutes until tender.",
            "Beat eggs and add to the pan.",
            "Scramble everything together for 3 minutes.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Banana Almond Oats",
        category: "breakfast",
        time: "5 min",
        serves: 1,
        cuisine: "Healthy",
        ingredients: ['oats', 'banana', 'almonds', 'honey'],
        fullIngredients: [
            "1/2 cup rolled oats",
            "1 banana, sliced",
            "1/4 cup almonds, chopped",
            "1 tbsp honey",
            "1 cup water or coconut water"
        ],
        instructions: [
            "Cook oats with water for 5 minutes, stirring occasionally.",
            "Top with sliced banana and chopped almonds.",
            "Drizzle with honey and serve warm."
        ]
    },
    {
        name: "Korean Sweet Potato Pancakes",
        category: "breakfast",
        time: "12 min",
        serves: 2,
        cuisine: "Korean",
        ingredients: ['sweet potatoes', 'eggs', 'onions', 'garlic', 'olive oil'],
        fullIngredients: [
            "2 cups grated sweet potato",
            "2 eggs, beaten",
            "1/4 cup onion, minced",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Mix sweet potato, eggs, onion, and garlic in a bowl.",
            "Heat oil in a pan over medium heat.",
            "Form mixture into patties and cook 4 minutes per side.",
            "Cook until golden brown and crispy."
        ]
    },
    {
        name: "Greek Spinach & Egg Scramble",
        category: "breakfast",
        time: "6 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['eggs', 'spinach', 'cherry tomatoes', 'garlic', 'olive oil'],
        fullIngredients: [
            "3 eggs",
            "2 cups fresh spinach",
            "1/4 cup cherry tomatoes, halved",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté garlic for 30 seconds until fragrant.",
            "Add spinach and cook until wilted.",
            "Add tomatoes and cook for 1 minute.",
            "Beat eggs and scramble into the mixture until set."
        ]
    },
    {
        name: "Mexican Avocado & Egg Bowl",
        category: "breakfast",
        time: "5 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['eggs', 'avocados', 'black beans', 'olive oil', 'lime'],
        fullIngredients: [
            "2 eggs",
            "1/2 avocado, sliced",
            "1/4 cup black beans, warmed",
            "1 tbsp olive oil",
            "Lime juice to taste",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Scramble eggs with a little oil until fluffy.",
            "Serve in a bowl with sliced avocado and warm black beans.",
            "Drizzle with olive oil and lime juice.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Korean Mushroom & Egg Scramble",
        category: "breakfast",
        time: "8 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['eggs', 'mushrooms', 'green onions', 'garlic', 'olive oil', 'honey'],
        fullIngredients: [
            "3 eggs",
            "1 cup mushrooms, sliced",
            "2 green onions, chopped",
            "2 cloves garlic, minced",
            "1 tbsp olive oil",
            "1 tsp honey"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté mushrooms for 5 minutes until golden.",
            "Add garlic and cook for 1 minute.",
            "Beat eggs and scramble into the mushrooms.",
            "Mix in green onions and honey before serving."
        ]
    },
    {
        name: "Greek Cucumber & Yogurt Bowl",
        category: "breakfast",
        time: "3 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['greek yogurt', 'cucumbers', 'walnuts', 'honey', 'olive oil'],
        fullIngredients: [
            "1 cup Greek yogurt",
            "1 cucumber, diced",
            "1/4 cup walnuts, chopped",
            "1 tbsp honey",
            "2 tbsp olive oil",
            "Fresh herbs (optional)"
        ],
        instructions: [
            "Mix yogurt with cucumber in a bowl.",
            "Top with chopped walnuts.",
            "Drizzle with honey and olive oil.",
            "Add fresh herbs if desired."
        ]
    },
    {
        name: "Mexican Corn & Egg Scramble",
        category: "breakfast",
        time: "8 min",
        serves: 2,
        cuisine: "Mexican",
        ingredients: ['eggs', 'corn', 'bell peppers', 'onions', 'olive oil'],
        fullIngredients: [
            "4 eggs",
            "1 cup corn kernels",
            "1/2 bell pepper, diced",
            "1/4 onion, diced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté pepper and onion for 3 minutes.",
            "Add corn and cook for 2 minutes.",
            "Beat eggs and scramble into the mixture.",
            "Cook until eggs are set, about 3 minutes."
        ]
    },
    {
        name: "Korean Cabbage & Egg Pancake",
        category: "breakfast",
        time: "12 min",
        serves: 2,
        cuisine: "Korean",
        ingredients: ['cabbage', 'eggs', 'carrots', 'garlic', 'olive oil'],
        fullIngredients: [
            "2 cups cabbage, shredded",
            "3 eggs, beaten",
            "2 carrots, grated",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Mix cabbage, eggs, carrots, and garlic in a bowl.",
            "Heat oil in a pan over medium heat.",
            "Pour mixture into pan and cook 5 minutes per side.",
            "Cook until golden brown and set through."
        ]
    },
    {
        name: "Greek Herb Omelette",
        category: "breakfast",
        time: "5 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['eggs', 'herbs', 'cherry tomatoes', 'olive oil'],
        fullIngredients: [
            "3 eggs",
            "1/4 cup fresh herbs (or 1 tbsp dried)",
            "1/4 cup cherry tomatoes, halved",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Beat eggs with herbs in a bowl.",
            "Heat oil in a pan over medium heat.",
            "Add tomatoes and cook for 1 minute.",
            "Add eggs and scramble gently until set.",
            "Season with salt and pepper."
        ]
    },

    // LUNCH RECIPES
    {
        name: "Greek Steak Salad",
        category: "lunch",
        time: "15 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['top sirloin steak', 'arugula', 'cucumbers', 'cherry tomatoes', 'olive oil', 'lemons'],
        fullIngredients: [
            "4 oz sirloin steak",
            "2 cups arugula",
            "1/2 cucumber, sliced",
            "1/4 cup cherry tomatoes",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season and grill steak 3-4 minutes per side for medium-rare.",
            "Let rest for 5 minutes, then slice thinly.",
            "Toss greens with olive oil and lemon juice.",
            "Top with sliced steak and vegetables.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Mexican Chuck Roast Bowl",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['chuck roast', 'sweet potatoes', 'black beans', 'avocados', 'olive oil', 'lime'],
        fullIngredients: [
            "1/2 cup shredded chuck roast",
            "1 roasted sweet potato, cubed",
            "1/4 cup black beans",
            "1/4 avocado, sliced",
            "1 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Warm the shredded chuck roast.",
            "Layer over cubed sweet potato and black beans.",
            "Top with avocado slices.",
            "Drizzle with olive oil and lime juice."
        ]
    },
    {
        name: "Korean Flat Iron Salad",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['flat iron steak', 'cabbage', 'carrots', 'mixed greens', 'olive oil', 'honey'],
        fullIngredients: [
            "4 oz flat iron steak, sliced",
            "1 cup cabbage, shredded",
            "1/2 carrot, julienned",
            "1 cup mixed greens",
            "2 tbsp olive oil",
            "1 tsp honey",
            "Salt to taste"
        ],
        instructions: [
            "Toss vegetables together in a bowl.",
            "Top with sliced steak.",
            "Whisk oil and honey for dressing.",
            "Drizzle over the bowl and toss."
        ]
    },
    {
        name: "Korean Pork Bowl",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['pork', 'sweet potatoes', 'cabbage', 'olive oil', 'honey'],
        fullIngredients: [
            "1/2 cup pulled pork",
            "1 roasted sweet potato, cubed",
            "1 cup cabbage slaw",
            "1 tbsp olive oil",
            "1 tsp honey",
            "Salt to taste"
        ],
        instructions: [
            "Warm pork in a pan.",
            "Layer over sweet potato in a bowl.",
            "Top with cabbage slaw.",
            "Drizzle with oil and honey mixture."
        ]
    },
    {
        name: "Mexican Pork Salad",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['pork', 'lettuce', 'avocados', 'bell peppers', 'olive oil', 'lime'],
        fullIngredients: [
            "1/2 cup pulled pork",
            "2 cups lettuce",
            "1/4 avocado, sliced",
            "1/2 bell pepper, sliced",
            "2 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Warm pork if desired.",
            "Toss lettuce with oil and lime juice.",
            "Top with pork, avocado, and peppers.",
            "Serve immediately."
        ]
    },
    {
        name: "Greek Chicken Salad",
        category: "lunch",
        time: "10 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['chicken breast', 'arugula', 'cucumbers', 'olive oil', 'lemons'],
        fullIngredients: [
            "4 oz grilled chicken breast",
            "2 cups arugula",
            "1/2 cucumber, sliced",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Grill chicken 6 minutes per side, then slice.",
            "Toss arugula with oil and lemon juice.",
            "Top with chicken and cucumber.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Korean Chicken Bowl",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['ground chicken', 'sweet potatoes', 'mixed greens', 'olive oil', 'honey'],
        fullIngredients: [
            "1/2 cup cooked ground chicken",
            "1 roasted sweet potato, cubed",
            "1 cup mixed greens",
            "1 tbsp olive oil",
            "1 tsp honey"
        ],
        instructions: [
            "Warm the ground chicken.",
            "Layer over sweet potato and greens.",
            "Whisk olive oil and honey together.",
            "Drizzle dressing over the bowl."
        ]
    },
    {
        name: "Salmon Sweet Potato Salad",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Healthy",
        ingredients: ['salmon', 'sweet potatoes', 'arugula', 'olive oil', 'lemons'],
        fullIngredients: [
            "4 oz leftover salmon, flaked",
            "1 roasted sweet potato, cubed",
            "2 cups arugula",
            "2 tbsp olive oil",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Layer flaked salmon over arugula.",
            "Add cubed sweet potato.",
            "Drizzle with olive oil and lemon juice.",
            "Toss gently and serve."
        ]
    },
    {
        name: "Greek Shrimp Salad",
        category: "lunch",
        time: "10 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['shrimp', 'lettuce', 'cucumbers', 'cherry tomatoes', 'olive oil', 'lemons'],
        fullIngredients: [
            "6 oz cooked shrimp",
            "2 cups lettuce",
            "1/2 cucumber, sliced",
            "1/4 cup cherry tomatoes",
            "2 tbsp olive oil",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "If using raw shrimp, cook for 2-3 minutes per side.",
            "Toss lettuce with olive oil and lemon juice.",
            "Top with shrimp, cucumber, and tomatoes.",
            "Serve immediately."
        ]
    },
    {
        name: "Roasted Sweet Potato Bowl",
        category: "lunch",
        time: "30 min",
        serves: 2,
        cuisine: "Vegetarian",
        ingredients: ['sweet potatoes', 'arugula', 'olive oil', 'lemons'],
        fullIngredients: [
            "2 large sweet potatoes, cubed",
            "2 cups arugula",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Roast sweet potatoes at 400°F for 25 minutes.",
            "Toss arugula with oil and lemon juice.",
            "Top with warm sweet potatoes.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Greek Cucumber Tomato Salad",
        category: "lunch",
        time: "15 min",
        serves: 2,
        cuisine: "Greek",
        ingredients: ['cucumbers', 'cherry tomatoes', 'mixed greens', 'olive oil', 'lemons', 'oregano'],
        fullIngredients: [
            "2 cucumbers, sliced",
            "1 cup cherry tomatoes, halved",
            "2 cups mixed greens",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Toss all ingredients together in a large bowl.",
            "Let sit for 10 minutes for flavors to blend.",
            "Serve at room temperature."
        ]
    },
    {
        name: "Mexican Black Bean Sweet Potato Bowl",
        category: "lunch",
        time: "5 min",
        serves: 2,
        cuisine: "Mexican",
        ingredients: ['black beans', 'sweet potatoes', 'avocados', 'olive oil', 'lime'],
        fullIngredients: [
            "1 cup black beans, cooked",
            "2 roasted sweet potatoes, cubed",
            "1/2 avocado, sliced",
            "2 tbsp olive oil",
            "Lime juice to taste",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Warm the black beans.",
            "Layer over sweet potatoes.",
            "Top with avocado slices.",
            "Drizzle with olive oil and lime juice.",
            "Season to taste."
        ]
    },
    {
        name: "Greek Chickpea Salad",
        category: "lunch",
        time: "5 min",
        serves: 2,
        cuisine: "Greek",
        ingredients: ['chickpeas', 'cucumbers', 'cherry tomatoes', 'arugula', 'olive oil', 'lemons'],
        fullIngredients: [
            "1 cup chickpeas, cooked",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "2 cups arugula",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine chickpeas, cucumber, and tomatoes.",
            "Toss with olive oil and lemon juice.",
            "Serve over arugula.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Lentil Sweet Potato Salad",
        category: "lunch",
        time: "10 min",
        serves: 2,
        cuisine: "Vegetarian",
        ingredients: ['lentils', 'sweet potatoes', 'mixed greens', 'olive oil', 'lemons'],
        fullIngredients: [
            "1 cup cooked lentils",
            "1 roasted sweet potato, cubed",
            "2 cups mixed greens",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine warm lentils and sweet potato.",
            "Serve over greens.",
            "Drizzle with oil and lemon juice.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Korean Beef & Cabbage Bowl",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['ground beef', 'cabbage', 'carrots', 'cucumbers', 'olive oil', 'honey', 'garlic'],
        fullIngredients: [
            "4 oz leftover beef, sliced",
            "2 cups cabbage, shredded",
            "1/2 carrot, julienned",
            "1 cucumber, sliced",
            "2 tbsp olive oil",
            "1 tsp honey",
            "1 clove garlic, minced"
        ],
        instructions: [
            "Toss vegetables together in a bowl.",
            "Top with sliced beef.",
            "Whisk oil, honey, and garlic for dressing.",
            "Drizzle over the bowl and toss."
        ]
    },
    {
        name: "Mexican Shrimp & Avocado Salad",
        category: "lunch",
        time: "10 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['shrimp', 'avocados', 'lettuce', 'corn', 'olive oil', 'lime'],
        fullIngredients: [
            "6 oz cooked shrimp",
            "1/2 avocado, cubed",
            "2 cups lettuce",
            "1/4 cup corn kernels",
            "2 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Toss lettuce with olive oil and lime juice.",
            "Top with shrimp, avocado, and corn.",
            "Serve immediately."
        ]
    },
    {
        name: "Greek Lentil & Cucumber Salad",
        category: "lunch",
        time: "10 min",
        serves: 2,
        cuisine: "Greek",
        ingredients: ['lentils', 'cucumbers', 'red onion', 'arugula', 'olive oil', 'lemons', 'oregano'],
        fullIngredients: [
            "1 cup cooked lentils",
            "2 cucumbers, diced",
            "1/2 red onion, thinly sliced",
            "2 cups arugula",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "1 tsp oregano"
        ],
        instructions: [
            "Combine lentils, cucumber, and onion.",
            "Toss with oil, lemon juice, and oregano.",
            "Serve over arugula.",
            "Let flavors meld for 10 minutes before serving."
        ]
    },
    {
        name: "Korean Chicken & Sweet Potato Soup",
        category: "lunch",
        time: "25 min",
        serves: 2,
        cuisine: "Korean",
        ingredients: ['chicken', 'chicken broth', 'sweet potatoes', 'mushrooms', 'garlic', 'olive oil'],
        fullIngredients: [
            "1 cup leftover chicken, shredded",
            "2 cups low-sodium chicken broth",
            "1 sweet potato, cubed",
            "1 cup mushrooms, sliced",
            "2 cloves garlic, minced",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Heat oil in a pot, sauté mushrooms and garlic for 3 minutes.",
            "Add broth and sweet potato, bring to a boil.",
            "Simmer for 15 minutes until sweet potato is tender.",
            "Add shredded chicken and heat through, about 5 minutes."
        ]
    },
    {
        name: "Mexican Black Bean & Corn Salad",
        category: "lunch",
        time: "5 min",
        serves: 2,
        cuisine: "Mexican",
        ingredients: ['black beans', 'corn', 'bell peppers', 'lettuce', 'avocados', 'olive oil', 'lime'],
        fullIngredients: [
            "1 cup black beans, cooked",
            "1 cup corn kernels",
            "1 bell pepper, diced",
            "2 cups lettuce",
            "1/4 avocado, diced",
            "3 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Mix beans, corn, and pepper.",
            "Serve over lettuce with avocado.",
            "Drizzle with oil and lime juice.",
            "Toss gently before serving."
        ]
    },
    {
        name: "Greek Chickpea & Tomato Bowl",
        category: "lunch",
        time: "10 min",
        serves: 1,
        cuisine: "Greek",
        ingredients: ['chickpeas', 'cherry tomatoes', 'cucumbers', 'sweet potatoes', 'olive oil', 'lemons'],
        fullIngredients: [
            "1 cup chickpeas, cooked",
            "1 cup cherry tomatoes, halved",
            "1/2 cucumber, diced",
            "1 roasted sweet potato, cubed",
            "2 tbsp olive oil",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Combine all ingredients in a bowl.",
            "Let flavors meld for 10 minutes before serving.",
            "Serve at room temperature."
        ]
    },
    {
        name: "Korean Mushroom & Rice Bowl",
        category: "lunch",
        time: "15 min",
        serves: 1,
        cuisine: "Korean",
        ingredients: ['rice', 'mushrooms', 'carrots', 'spinach', 'olive oil', 'honey', 'garlic'],
        fullIngredients: [
            "1 cup cooked rice",
            "1.5 cups mushrooms, sautéed",
            "1/2 carrot, julienned",
            "2 cups spinach, wilted",
            "2 tbsp olive oil",
            "1 tsp honey",
            "1 clove garlic, minced"
        ],
        instructions: [
            "Sauté mushrooms until golden, about 5 minutes.",
            "Wilt spinach and julienne carrots.",
            "Layer rice with vegetables.",
            "Drizzle with oil, honey, and garlic mixture."
        ]
    },
    {
        name: "Mexican Salmon & Black Bean Salad",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['salmon', 'black beans', 'mixed greens', 'corn', 'avocados', 'olive oil', 'lime'],
        fullIngredients: [
            "4 oz leftover salmon, flaked",
            "1/2 cup black beans",
            "2 cups mixed greens",
            "1/4 cup corn kernels",
            "1/4 avocado, sliced",
            "2 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Layer all ingredients over greens.",
            "Drizzle with olive oil and lime juice.",
            "Toss gently and serve."
        ]
    },
    {
        name: "Greek Zucchini & Chickpea Salad",
        category: "lunch",
        time: "10 min",
        serves: 2,
        cuisine: "Greek",
        ingredients: ['zucchini', 'chickpeas', 'cherry tomatoes', 'almonds', 'olive oil', 'lemons'],
        fullIngredients: [
            "2 zucchini, spiralized or julienned",
            "1 cup chickpeas, cooked",
            "1/4 cup cherry tomatoes",
            "1/4 cup almonds, chopped",
            "3 tbsp olive oil",
            "2 tbsp lemon juice"
        ],
        instructions: [
            "Toss zucchini with oil and lemon juice.",
            "Top with chickpeas, tomatoes, and almonds.",
            "Let marinate for 5 minutes before serving."
        ]
    },
    {
        name: "Korean Pork & Vegetable Soup",
        category: "lunch",
        time: "20 min",
        serves: 2,
        cuisine: "Korean",
        ingredients: ['pork', 'broth', 'cabbage', 'carrots', 'mushrooms', 'garlic', 'olive oil'],
        fullIngredients: [
            "1 cup leftover pork, shredded",
            "2 cups low-sodium broth",
            "1 cup cabbage, chopped",
            "1/2 carrot, sliced",
            "1 cup mushrooms, sliced",
            "2 cloves garlic, minced",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Heat oil, sauté vegetables for 5 minutes.",
            "Add broth and simmer for 10 minutes.",
            "Add pork and heat through for 3 minutes.",
            "Serve hot."
        ]
    },
    {
        name: "Mexican Sweet Potato & Chicken Bowl",
        category: "lunch",
        time: "5 min",
        serves: 1,
        cuisine: "Mexican",
        ingredients: ['chicken', 'sweet potatoes', 'black beans', 'lettuce', 'avocados', 'olive oil', 'lime'],
        fullIngredients: [
            "4 oz leftover chicken, cubed",
            "1 roasted sweet potato, cubed",
            "1/4 cup black beans",
            "2 cups lettuce",
            "1/4 avocado, sliced",
            "2 tbsp olive oil",
            "Lime juice to taste"
        ],
        instructions: [
            "Layer all ingredients in a bowl.",
            "Drizzle with olive oil and lime juice.",
            "Toss gently and serve."
        ]
    },

    // DINNER RECIPES
    {
        name: "Ribeye Steak - Greek Style",
        category: "dinner",
        time: "30 min",
        serves: 2,
        cuisine: "Greek",
        ingredients: ['ribeye steaks', 'fingerling potatoes', 'garlic', 'olive oil', 'lemons', 'oregano'],
        fullIngredients: [
            "2 ribeye steaks (6-8 oz each)",
            "1 lb fingerling potatoes, halved",
            "2 cloves garlic, minced",
            "1/4 cup olive oil",
            "2 lemons, juiced",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F.",
            "Toss potatoes with half the oil, roast for 20 minutes.",
            "Season steaks with salt and pepper, grill 4-5 minutes per side.",
            "Mix remaining oil, garlic, lemon juice, and oregano.",
            "Serve steaks with herb sauce over roasted potatoes."
        ]
    },
    {
        name: "Chuck Roast - Mexican Slow Cooker",
        category: "dinner",
        time: "8 hours",
        serves: 8,
        cuisine: "Mexican",
        ingredients: ['chuck roast', 'onions', 'bell peppers', 'diced tomatoes', 'garlic', 'cumin', 'paprika'],
        fullIngredients: [
            "2.25 lb chuck roast",
            "1 large onion, sliced",
            "2 bell peppers, sliced",
            "1 can diced tomatoes (low sodium)",
            "3 cloves garlic, minced",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season roast with salt, pepper, cumin, and paprika.",
            "Sear in a pan for 2 minutes per side.",
            "Place in slow cooker with vegetables, garlic, and tomatoes.",
            "Cook on low for 8 hours or high for 4 hours.",
            "Shred with forks and serve with rice."
        ]
    },
    {
        name: "Korean Top Sirloin",
        category: "dinner",
        time: "20 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['top sirloin steaks', 'mushrooms', 'broccoli', 'garlic', 'olive oil', 'honey', 'rice'],
        fullIngredients: [
            "4 sirloin steaks (6 oz each)",
            "1 lb mushrooms, sliced",
            "1 head broccoli, cut in florets",
            "3 cloves garlic, minced",
            "3 tbsp olive oil",
            "2 tbsp honey",
            "2 cups cooked rice"
        ],
        instructions: [
            "Heat oil in a large pan, sauté mushrooms for 5 minutes.",
            "Add broccoli and garlic, cook 3 minutes more.",
            "Season steaks and grill 3-4 minutes per side.",
            "Drizzle vegetables with honey.",
            "Serve steaks and vegetables over rice."
        ]
    },
    {
        name: "Ground Chicken Stuffed Peppers",
        category: "dinner",
        time: "45 min",
        serves: 4,
        cuisine: "Mexican",
        ingredients: ['bell peppers', 'ground chicken', 'rice', 'onions', 'diced tomatoes', 'garlic', 'olive oil'],
        fullIngredients: [
            "4 large bell peppers, tops cut, seeded",
            "1 lb ground chicken",
            "1 cup cooked rice",
            "1/2 onion, diced",
            "1 can diced tomatoes, drained",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F.",
            "Sauté onion in oil for 3 minutes, add garlic for 1 minute.",
            "Add ground chicken and cook for 8 minutes.",
            "Mix in rice and tomatoes, season with salt and pepper.",
            "Stuff peppers with mixture and bake for 30 minutes."
        ]
    },
    {
        name: "Greek Chicken Thighs",
        category: "dinner",
        time: "55 min",
        serves: 4,
        cuisine: "Greek",
        ingredients: ['chicken', 'zucchini', 'carrots', 'onions', 'olive oil', 'lemons', 'oregano', 'garlic'],
        fullIngredients: [
            "8 chicken thighs",
            "1 lb mixed vegetables (zucchini, carrots, onions)",
            "1/4 cup olive oil",
            "2 lemons, juiced",
            "2 tsp dried oregano",
            "4 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F.",
            "Mix oil, lemon juice, oregano, and garlic.",
            "Marinate chicken in half the mixture for 15 minutes.",
            "Toss vegetables with remaining marinade.",
            "Bake chicken and vegetables for 35 minutes until cooked through.",
            "Let rest for 5 minutes before serving."
        ]
    },
    {
        name: "Korean Ground Chicken",
        category: "dinner",
        time: "15 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['ground chicken', 'mushrooms', 'carrots', 'garlic', 'olive oil', 'honey', 'rice'],
        fullIngredients: [
            "1 lb ground chicken",
            "1 lb mushrooms, sliced",
            "2 carrots, diced",
            "3 cloves garlic, minced",
            "2 tbsp olive oil",
            "2 tbsp honey",
            "4 cups cooked rice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pan over medium-high heat.",
            "Cook ground chicken for 8 minutes, breaking up with a spoon.",
            "Add vegetables and garlic, cook for 5 minutes more.",
            "Drizzle with honey and season with salt and pepper.",
            "Serve over rice."
        ]
    },
    {
        name: "Chicken Soup - Greek Style",
        category: "dinner",
        time: "40 min",
        serves: 6,
        cuisine: "Greek",
        ingredients: ['chicken', 'chicken broth', 'carrots', 'celery', 'rice', 'lemons', 'olive oil'],
        fullIngredients: [
            "2 chicken breasts",
            "6 cups low-sodium chicken broth",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1/2 cup rice",
            "2 lemons, juiced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil chicken in broth for 20 minutes until cooked through.",
            "Remove chicken, shred, and set aside.",
            "Add vegetables and rice to broth, simmer for 15 minutes.",
            "Return shredded chicken to pot.",
            "Stir in lemon juice and olive oil before serving."
        ]
    },
    {
        name: "Ground Chicken Zucchini Boats",
        category: "dinner",
        time: "40 min",
        serves: 4,
        cuisine: "Mexican",
        ingredients: ['zucchini', 'ground chicken', 'onions', 'bell peppers', 'diced tomatoes', 'olive oil'],
        fullIngredients: [
            "4 large zucchini, halved lengthwise, scooped",
            "1 lb ground chicken",
            "1/2 onion, diced",
            "1 bell pepper, diced",
            "1 can diced tomatoes, drained",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F.",
            "Sauté onion and pepper in oil for 5 minutes.",
            "Add ground chicken and cook for 8 minutes.",
            "Mix in tomatoes and season with salt and pepper.",
            "Fill zucchini boats with mixture and bake for 25 minutes."
        ]
    },
    {
        name: "Korean Salmon",
        category: "dinner",
        time: "25 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['salmon', 'broccoli', 'olive oil', 'honey', 'garlic', 'rice'],
        fullIngredients: [
            "4 salmon fillets (6 oz each)",
            "1 head broccoli, cut in florets",
            "2 tbsp olive oil",
            "2 tbsp honey",
            "2 cloves garlic, minced",
            "4 cups cooked rice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 400°F.",
            "Steam broccoli for 5 minutes until tender-crisp.",
            "Mix olive oil, honey, and garlic in a small bowl.",
            "Brush salmon fillets with the glaze and season with salt and pepper.",
            "Bake salmon for 12-15 minutes until flaky.",
            "Toss steamed broccoli with remaining glaze.",
            "Serve salmon and broccoli over rice."
        ]
    },
    {
        name: "Greek Salmon",
        category: "dinner",
        time: "35 min",
        serves: 4,
        cuisine: "Greek",
        ingredients: ['salmon', 'zucchini', 'fingerling potatoes', 'olive oil', 'garlic', 'lemons'],
        fullIngredients: [
            "4 salmon fillets (6 oz each)",
            "2 zucchini, sliced",
            "1 lb fingerling potatoes, halved",
            "1/4 cup olive oil",
            "4 cloves garlic, minced",
            "2 lemons, juiced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F.",
            "Toss potatoes with half the oil, roast for 15 minutes.",
            "Add zucchini to pan, roast for 10 minutes more.",
            "Mix remaining oil, garlic, and lemon juice.",
            "Season salmon and bake for 12 minutes.",
            "Drizzle everything with lemon-garlic mixture."
        ]
    },
    {
        name: "Korean Shrimp Stir-Fry",
        category: "dinner",
        time: "12 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['shrimp', 'bell peppers', 'mushrooms', 'garlic', 'olive oil', 'honey', 'rice'],
        fullIngredients: [
            "1.5 lbs shrimp, peeled",
            "2 bell peppers, sliced",
            "1 lb mushrooms, sliced",
            "3 cloves garlic, minced",
            "3 tbsp olive oil",
            "2 tbsp honey",
            "4 cups cooked rice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pan over high heat.",
            "Cook shrimp for 2 minutes per side, remove from pan.",
            "Add vegetables and garlic, stir-fry for 5 minutes.",
            "Return shrimp to pan, add honey, and toss for 1 minute.",
            "Serve over rice."
        ]
    },
    {
        name: "Greek Shrimp",
        category: "dinner",
        time: "15 min",
        serves: 4,
        cuisine: "Greek",
        ingredients: ['shrimp', 'zucchini', 'diced tomatoes', 'garlic', 'olive oil', 'lemons', 'rice'],
        fullIngredients: [
            "1.5 lbs shrimp, peeled",
            "2 zucchini, diced",
            "1 can diced tomatoes",
            "4 cloves garlic, minced",
            "1/4 cup olive oil",
            "2 lemons, juiced",
            "4 cups cooked rice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pan over medium heat.",
            "Sauté zucchini for 5 minutes until tender.",
            "Add garlic and cook for 1 minute.",
            "Add tomatoes and simmer for 5 minutes.",
            "Add shrimp and cook for 3 minutes per side.",
            "Stir in lemon juice and serve over rice."
        ]
    },
    {
        name: "Lentil Vegetable Soup",
        category: "dinner",
        time: "35 min",
        serves: 6,
        cuisine: "Vegetarian",
        ingredients: ['lentils', 'vegetable broth', 'carrots', 'celery', 'onions', 'garlic', 'olive oil'],
        fullIngredients: [
            "1.5 cups dried lentils",
            "4 cups low-sodium vegetable broth",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat.",
            "Sauté onion, carrot, and celery for 5 minutes.",
            "Add garlic and cook for 1 minute.",
            "Add lentils and broth, bring to a boil.",
            "Simmer for 25 minutes until lentils are tender.",
            "Season with salt and pepper."
        ]
    },
    {
        name: "Mexican Cauliflower Tacos",
        category: "dinner",
        time: "30 min",
        serves: 4,
        cuisine: "Mexican",
        ingredients: ['cauliflower', 'black beans', 'lettuce', 'avocados', 'olive oil', 'cumin', 'paprika'],
        fullIngredients: [
            "1 head cauliflower, cut in florets",
            "1 cup black beans, cooked",
            "8 large lettuce leaves",
            "1/2 avocado, sliced",
            "3 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F.",
            "Toss cauliflower with olive oil, cumin, paprika, salt, and pepper.",
            "Roast for 25 minutes until golden and tender.",
            "Warm black beans in a small pot.",
            "Serve roasted cauliflower and beans in lettuce cups.",
            "Top with avocado slices."
        ]
    },
    {
        name: "Korean Beef Stir-Fry",
        category: "dinner",
        time: "18 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['ground beef', 'bell peppers', 'mushrooms', 'carrots', 'garlic', 'olive oil', 'honey', 'rice'],
        fullIngredients: [
            "1 lb ground beef",
            "2 bell peppers, sliced",
            "1 cup mushrooms, sliced",
            "2 carrots, julienned",
            "3 cloves garlic, minced",
            "3 tbsp olive oil",
            "2 tbsp honey",
            "4 cups cooked rice"
        ],
        instructions: [
            "Heat oil in a large pan over high heat.",
            "Cook ground beef for 8 minutes, breaking apart.",
            "Add vegetables and garlic, stir-fry for 6 minutes.",
            "Drizzle with honey and toss for 2 minutes.",
            "Serve over rice."
        ]
    },
    {
        name: "Mexican Stuffed Sweet Potatoes",
        category: "dinner",
        time: "55 min",
        serves: 4,
        cuisine: "Mexican",
        ingredients: ['sweet potatoes', 'ground chicken', 'onions', 'bell peppers', 'black beans', 'olive oil', 'avocados'],
        fullIngredients: [
            "4 large sweet potatoes",
            "1 lb ground chicken",
            "1/2 onion, diced",
            "1 bell pepper, diced",
            "1/2 cup black beans",
            "2 tbsp olive oil",
            "1 avocado, sliced"
        ],
        instructions: [
            "Bake sweet potatoes at 400°F for 45 minutes.",
            "Sauté onion and pepper in oil for 5 minutes.",
            "Add ground chicken and cook for 8 minutes.",
            "Cut open sweet potatoes and stuff with chicken mixture.",
            "Top with black beans and avocado slices."
        ]
    },
    {
        name: "Korean Salmon & Cabbage Stir-Fry",
        category: "dinner",
        time: "15 min",
        serves: 4,
        cuisine: "Korean",
        ingredients: ['salmon', 'cabbage', 'mushrooms', 'carrots', 'olive oil', 'honey', 'garlic', 'rice'],
        fullIngredients: [
            "4 salmon fillets, cubed",
            "4 cups cabbage, chopped",
            "1 cup mushrooms, sliced",
            "2 carrots, sliced",
            "3 tbsp olive oil",
            "2 tbsp honey",
            "3 cloves garlic, minced",
            "4 cups cooked rice"
        ],
        instructions: [
            "Heat oil in a large pan over high heat.",
            "Stir-fry vegetables for 5 minutes.",
            "Add garlic and cook for 1 minute.",
            "Add cubed salmon and cook for 4 minutes.",
            "Drizzle with honey and serve over rice."
        ]
    },
    {
        name: "Greek Chicken & Artichoke Bake",
        category: "dinner",
        time: "45 min",
        serves: 6,
        cuisine: "Greek",
        ingredients: ['chicken', 'artichoke', 'lemons', 'olive oil', 'garlic', 'fingerling potatoes', 'oregano'],
        fullIngredients: [
            "6 chicken thighs",
            "1 jar artichoke hearts, drained",
            "2 lemons, juiced",
            "1/4 cup olive oil",
            "4 cloves garlic, minced",
            "1 lb fingerling potatoes, halved",
            "2 tsp oregano"
        ],
        instructions: [
            "Preheat oven to 425°F.",
            "Toss all ingredients together in a large baking dish.",
            "Bake for 40 minutes until chicken is cooked through.",
            "Let rest for 5 minutes before serving."
        ]
    },
    {
        name: "Mexican Pork & Sweet Potato Stew",
        category: "dinner",
        time: "60 min",
        serves: 6,
        cuisine: "Mexican",
        ingredients: ['pork butt', 'sweet potatoes', 'bell peppers', 'onions', 'chicken broth', 'olive oil', 'cumin', 'paprika'],
        fullIngredients: [
            "2 lbs pork shoulder, cubed",
            "3 sweet potatoes, cubed",
            "2 bell peppers, diced",
            "1 onion, diced",
            "4 cups low-sodium broth",
            "3 tbsp olive oil",
            "2 tsp cumin",
            "1 tsp paprika"
        ],
        instructions: [
            "Heat oil in a large pot, brown pork for 5 minutes.",
            "Add vegetables and sauté for 5 minutes.",
            "Add broth, cumin, and paprika.",
            "Bring to a boil, then simmer for 45 minutes until tender."
        ]
    },
    {
        name: "Mexican Beef & Black Bean Chili",
        category: "dinner",
        time: "45 min",
        serves: 6,
        cuisine: "Mexican",
        ingredients: ['ground beef', 'black beans', 'diced tomatoes', 'bell peppers', 'onions', 'olive oil', 'cumin', 'paprika'],
        fullIngredients: [
            "1 lb ground beef",
            "2 cups black beans, cooked",
            "1 can diced tomatoes",
            "2 bell peppers, diced",
            "1 onion, diced",
            "3 tbsp olive oil",
            "2 tsp cumin",
            "1 tsp paprika"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat.",
            "Cook ground beef for 8 minutes, breaking apart.",
            "Add vegetables and cook for 5 minutes.",
            "Add tomatoes, beans, and spices.",
            "Simmer for 30 minutes, stirring occasionally."
        ]
    },
    {
        name: "Korean Pork BBQ",
        category: "dinner",
        time: "8+ hours",
        serves: 10,
        cuisine: "Korean",
        ingredients: ['pork butt', 'olive oil', 'honey', 'garlic', 'ginger', 'rice'],
        fullIngredients: [
            "3.5 lb pork butt",
            "1/4 cup olive oil",
            "3 tbsp honey",
            "4 cloves garlic, minced",
            "2 tsp ground ginger",
            "Salt and pepper to taste",
            "Cooked rice and vegetables for serving"
        ],
        instructions: [
            "Mix oil, honey, garlic, ginger, salt, and pepper for a rub.",
            "Coat pork thoroughly with the rub.",
            "Slow cook on low for 8 hours until tender.",
            "Shred with forks and serve with rice and steamed vegetables."
        ]
    },
    {
        name: "Baby Back Ribs",
        category: "dinner",
        time: "3 hours",
        serves: 6,
        cuisine: "American",
        ingredients: ['baby back ribs', 'olive oil', 'paprika', 'garlic', 'carrots', 'brussels sprouts'],
        fullIngredients: [
            "2 lbs baby back ribs",
            "2 tbsp olive oil",
            "1 tbsp paprika",
            "1 tsp garlic powder",
            "1 tsp onion powder",
            "1 lb carrots, cut in sticks",
            "1 lb brussels sprouts, halved",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 300°F.",
            "Mix spices for a dry rub and coat ribs.",
            "Bake ribs for 2.5 hours.",
            "In the last 30 minutes, add vegetables tossed with oil.",
            "Let rest for 10 minutes before serving."
        ]
    },
  {
    name: "Blueberry Banana Oat Bowl",
    ingredients: ["oats", "blueberries", "banana", "honey", "walnuts"],
    time: "5 min",
    serves: 1,
    category: "breakfast",
    cuisine: "American",
    instructions: [
      "Cook oats according to package directions",
      "Slice banana and mix with blueberries",
      "Top oats with fruit, walnuts, and drizzle with honey"
    ]
  },
  {
    name: "Avocado Scrambled Eggs",
    ingredients: ["eggs", "avocados", "butter", "spinach", "cherry tomatoes"],
    time: "8 min",
    serves: 2,
    category: "breakfast",
    cuisine: "American",
    instructions: [
      "Scramble eggs in butter over medium heat",
      "Add spinach in last minute of cooking",
      "Serve with sliced avocado and cherry tomatoes"
    ]
  },
  {
    name: "Greek Yogurt Berry Parfait",
    ingredients: ["greek yogurt", "strawberries", "blueberries", "honey", "almonds"],
    time: "3 min",
    serves: 1,
    category: "breakfast",
    cuisine: "Mediterranean",
    instructions: [
      "Layer greek yogurt with berries in a bowl",
      "Top with almonds and drizzle with honey"
    ]
  },
  {
    name: "Sweet Potato Hash",
    ingredients: ["sweet potatoes", "bell peppers", "onions", "eggs", "olive oil"],
    time: "20 min",
    serves: 4,
    category: "breakfast",
    cuisine: "American",
    instructions: [
      "Dice sweet potatoes and cook in olive oil until tender",
      "Add peppers and onions, cook until soft",
      "Create wells and crack eggs into them, cook until set"
    ]
  },
  {
    name: "Chia Seed Pudding",
    ingredients: ["chia seeds", "coconut water", "banana", "raspberries", "honey"],
    time: "5 min prep",
    serves: 2,
    category: "breakfast",
    cuisine: "Modern",
    instructions: [
      "Mix chia seeds with coconut water, let sit overnight",
      "Top with sliced banana, raspberries, and honey"
    ]
  },
  {
    name: "Spinach Mushroom Omelet",
    ingredients: ["eggs", "spinach", "mushrooms", "butter", "garlic"],
    time: "10 min",
    serves: 2,
    category: "breakfast",
    cuisine: "French",
    instructions: [
      "Sauté mushrooms and garlic in butter",
      "Beat eggs and pour into pan, add spinach",
      "Fold omelet in half when eggs are set"
    ]
  },
  {
    name: "Peanut Butter Banana Toast",
    ingredients: ["homemade sourdough", "peanut butter", "banana", "honey", "flaxseed"],
    time: "5 min",
    serves: 1,
    category: "breakfast",
    cuisine: "American",
    instructions: [
      "Toast sourdough bread",
      "Spread peanut butter, add sliced banana",
      "Sprinkle with flaxseed and drizzle honey"
    ]
  },
  {
    name: "Breakfast Rice Bowl",
    ingredients: ["rice", "eggs", "green onions", "sesame oil", "carrots"],
    time: "15 min",
    serves: 2,
    category: "breakfast",
    cuisine: "Asian",
    instructions: [
      "Cook rice and let cool slightly",
      "Scramble eggs with sesame oil",
      "Mix together with diced carrots and green onions"
    ]
  },
  {
    name: "Coconut Berry Smoothie Bowl",
    ingredients: ["coconut shreds", "strawberries", "banana", "greek yogurt", "almonds"],
    time: "5 min",
    serves: 1,
    category: "breakfast",
    cuisine: "Tropical",
    instructions: [
      "Blend frozen strawberries and banana with yogurt",
      "Pour into bowl and top with coconut shreds and almonds"
    ]
  },
  {
    name: "Herb Scrambled Eggs",
    ingredients: ["eggs", "herbs", "butter", "cherry tomatoes", "arugula"],
    time: "8 min",
    serves: 2,
    category: "breakfast",
    cuisine: "Mediterranean",
    instructions: [
      "Scramble eggs with herbs in butter",
      "Serve over arugula with cherry tomatoes"
    ]
  },

  // LUNCH RECIPES (15)
  {
    name: "Chickpea Arugula Salad",
    ingredients: ["chickpeas", "arugula", "cherry tomatoes", "olive oil", "lemons"],
    time: "10 min",
    serves: 2,
    category: "lunch",
    cuisine: "Mediterranean",
    instructions: [
      "Drain and rinse chickpeas",
      "Toss with arugula and cherry tomatoes",
      "Dress with olive oil and lemon juice"
    ]
  },
  {
    name: "Asian Cucumber Salad",
    ingredients: ["cucumbers", "sesame oil", "ginger", "green onions", "rice"],
    time: "15 min",
    serves: 3,
    category: "lunch",
    cuisine: "Asian",
    instructions: [
      "Slice cucumbers thinly",
      "Mix with minced ginger and green onions",
      "Dress with sesame oil and serve over rice"
    ]
  },
  {
    name: "Lentil Vegetable Soup",
    ingredients: ["lentils", "carrots", "celery", "onions", "vegetable broth"],
    time: "30 min",
    serves: 4,
    category: "lunch",
    cuisine: "Mediterranean",
    instructions: [
      "Sauté diced onions, carrots, and celery",
      "Add lentils and vegetable broth",
      "Simmer until lentils are tender"
    ]
  },
  {
    name: "Shrimp Avocado Bowl",
    ingredients: ["shrimp", "avocados", "lettuce", "cherry tomatoes", "lime"],
    time: "12 min",
    serves: 2,
    category: "lunch",
    cuisine: "Mexican",
    instructions: [
      "Cook shrimp until pink",
      "Arrange over lettuce with diced avocado",
      "Add cherry tomatoes and squeeze lime over all"
    ]
  },
  {
    name: "Quinoa-less Power Bowl",
    ingredients: ["chickpea pasta", "broccoli", "carrots", "olive oil", "garlic"],
    time: "15 min",
    serves: 2,
    category: "lunch",
    cuisine: "Modern",
    instructions: [
      "Cook chickpea pasta according to package",
      "Steam broccoli and carrots until tender",
      "Toss with olive oil and minced garlic"
    ]
  },
  {
    name: "Black Bean Corn Salad",
    ingredients: ["black beans", "corn", "bell peppers", "cilantro", "lime"],
    time: "10 min",
    serves: 4,
    category: "lunch",
    cuisine: "Mexican",
    instructions: [
      "Combine drained black beans with corn",
      "Add diced bell peppers and chopped cilantro",
      "Dress with lime juice and salt"
    ]
  },
  {
    name: "Salmon Spinach Salad",
    ingredients: ["salmon", "spinach", "cucumbers", "olive oil", "lemons"],
    time: "15 min",
    serves: 2,
    category: "lunch",
    cuisine: "Mediterranean",
    instructions: [
      "Pan-sear salmon until cooked through",
      "Serve over spinach with sliced cucumbers",
      "Dress with olive oil and lemon"
    ]
  },
  {
    name: "Brussels Sprouts Slaw",
    ingredients: ["brussels sprouts", "carrots", "almonds", "olive oil", "honey"],
    time: "10 min",
    serves: 4,
    category: "lunch",
    cuisine: "American",
    instructions: [
      "Shred brussels sprouts and carrots",
      "Toss with sliced almonds",
      "Dress with olive oil and honey"
    ]
  },
  {
    name: "Mushroom Barley Soup",
    ingredients: ["mushrooms", "celery", "carrots", "vegetable broth", "herbs"],
    time: "25 min",
    serves: 4,
    category: "lunch",
    cuisine: "European",
    instructions: [
      "Sauté mushrooms until golden",
      "Add diced celery, carrots, and broth",
      "Simmer with herbs until vegetables are tender"
    ]
  },
  {
    name: "Zucchini Noodle Bowl",
    ingredients: ["zucchini", "cherry tomatoes", "garlic", "olive oil", "herbs"],
    time: "12 min",
    serves: 2,
    category: "lunch",
    cuisine: "Italian",
    instructions: [
      "Spiralize zucchini into noodles",
      "Sauté garlic in olive oil",
      "Toss with zucchini noodles, tomatoes, and herbs"
    ]
  },
  {
    name: "Cabbage Carrot Slaw",
    ingredients: ["cabbage", "carrots", "green onions", "sesame oil", "ginger"],
    time: "8 min",
    serves: 4,
    category: "lunch",
    cuisine: "Asian",
    instructions: [
      "Shred cabbage and carrots",
      "Mix with chopped green onions",
      "Dress with sesame oil and minced ginger"
    ]
  },
  {
    name: "Sweet Potato Black Bean Bowl",
    ingredients: ["sweet potatoes", "black beans", "bell peppers", "cilantro", "cumin"],
    time: "25 min",
    serves: 3,
    category: "lunch",
    cuisine: "Mexican",
    instructions: [
      "Roast diced sweet potatoes with cumin",
      "Heat black beans and diced bell peppers",
      "Combine and garnish with cilantro"
    ]
  },
  {
    name: "Artichoke Spinach Salad",
    ingredients: ["artichoke", "spinach", "cherry tomatoes", "olive oil", "lemons"],
    time: "8 min",
    serves: 2,
    category: "lunch",
    cuisine: "Mediterranean",
    instructions: [
      "Chop artichoke hearts",
      "Toss with spinach and cherry tomatoes",
      "Dress with olive oil and lemon juice"
    ]
  },
  {
    name: "Pear Walnut Salad",
    ingredients: ["pears", "arugula", "walnuts", "olive oil", "honey"],
    time: "7 min",
    serves: 2,
    category: "lunch",
    cuisine: "Modern",
    instructions: [
      "Slice pears and arrange over arugula",
      "Top with chopped walnuts",
      "Drizzle with olive oil and honey"
    ]
  },
  {
    name: "Edamame Rice Bowl",
    ingredients: ["edamame", "rice", "carrots", "sesame oil", "green onions"],
    time: "18 min",
    serves: 2,
    category: "lunch",
    cuisine: "Asian",
    instructions: [
      "Cook rice and steam edamame",
      "Sauté diced carrots until tender",
      "Combine with sesame oil and green onions"
    ]
  },

  // DINNER RECIPES (15)
  {
    name: "Herb Crusted Salmon",
    ingredients: ["salmon", "herbs", "garlic", "olive oil", "lemons"],
    time: "20 min",
    serves: 4,
    category: "dinner",
    cuisine: "Mediterranean",
    instructions: [
      "Mix chopped herbs with minced garlic and olive oil",
      "Coat salmon fillets with herb mixture",
      "Bake at 400°F for 12-15 minutes, serve with lemon"
    ]
  },
  {
    name: "Ground Beef Vegetable Stir Fry",
    ingredients: ["ground beef", "broccoli", "bell peppers", "garlic", "sesame oil"],
    time: "15 min",
    serves: 4,
    category: "dinner",
    cuisine: "Asian",
    instructions: [
      "Brown ground beef in a large pan",
      "Add garlic, broccoli, and bell peppers",
      "Stir fry until vegetables are tender, finish with sesame oil"
    ]
  },
  {
    name: "Pork Butt with Sweet Potatoes",
    ingredients: ["pork butt", "sweet potatoes", "onions", "carrots", "beef broth"],
    time: "3 hours",
    serves: 6,
    category: "dinner",
    cuisine: "American",
    instructions: [
      "Season pork butt and sear all sides",
      "Add vegetables and beef broth to pot",
      "Slow cook at 325°F for 2.5-3 hours until tender"
    ]
  },
  {
    name: "Chicken Vegetable Curry",
    ingredients: ["chicken", "cauliflower", "bell peppers", "coconut water", "cumin"],
    time: "25 min",
    serves: 4,
    category: "dinner",
    cuisine: "Indian",
    instructions: [
      "Cook chicken pieces until golden",
      "Add cumin and vegetables",
      "Simmer in coconut water until chicken is cooked through"
    ]
  },
  {
    name: "Ribeye with Mushrooms",
    ingredients: ["ribeye steaks", "mushrooms", "garlic", "butter", "herbs"],
    time: "15 min",
    serves: 2,
    category: "dinner",
    cuisine: "American",
    instructions: [
      "Season ribeye steaks and sear in hot pan",
      "Sauté mushrooms and garlic in butter",
      "Top steaks with mushroom mixture and fresh herbs"
    ]
  },
  {
    name: "Shrimp Zucchini Pasta",
    ingredients: ["shrimp", "zucchini", "garlic", "olive oil", "cherry tomatoes"],
    time: "12 min",
    serves: 3,
    category: "dinner",
    cuisine: "Italian",
    instructions: [
      "Spiralize zucchini into noodles",
      "Cook shrimp with garlic in olive oil",
      "Toss with zucchini noodles and cherry tomatoes"
    ]
  },
  {
    name: "Ground Pork Lettuce Wraps",
    ingredients: ["ground pork", "lettuce", "ginger", "green onions", "sesame oil"],
    time: "15 min",
    serves: 4,
    category: "dinner",
    cuisine: "Asian",
    instructions: [
      "Cook ground pork with minced ginger",
      "Add green onions and sesame oil",
      "Serve in lettuce cups"
    ]
  },
  {
    name: "Chuck Roast Pot Roast",
    ingredients: ["chuck roast", "carrots", "celery", "onions", "beef broth"],
    time: "4 hours",
    serves: 8,
    category: "dinner",
    cuisine: "American",
    instructions: [
      "Sear chuck roast on all sides",
      "Add vegetables and beef broth",
      "Slow cook at 300°F for 3-4 hours until fork tender"
    ]
  },
  {
    name: "Chicken Broccoli Rice",
    ingredients: ["chicken", "broccoli", "rice", "garlic", "chicken broth"],
    time: "25 min",
    serves: 4,
    category: "dinner",
    cuisine: "American",
    instructions: [
      "Cook rice in chicken broth",
      "Pan-fry chicken with garlic until cooked",
      "Steam broccoli and combine all ingredients"
    ]
  },
  {
    name: "Baby Back Ribs",
    ingredients: ["baby back ribs", "paprika", "cumin", "garlic", "onions"],
    time: "2.5 hours",
    serves: 4,
    category: "dinner",
    cuisine: "BBQ",
    instructions: [
      "Rub ribs with paprika, cumin, and garlic",
      "Slow roast at 275°F for 2 hours",
      "Add sliced onions for last 30 minutes"
    ]
  },
  {
    name: "Flat Iron Steak Fajitas",
    ingredients: ["flat iron steaks", "bell peppers", "onions", "cilantro", "lime"],
    time: "18 min",
    serves: 4,
    category: "dinner",
    cuisine: "Mexican",
    instructions: [
      "Slice steak into strips and season",
      "Cook steak with peppers and onions",
      "Garnish with cilantro and lime juice"
    ]
  },
  {
    name: "Ground Chicken Meatballs",
    ingredients: ["ground chicken", "eggs", "garlic", "herbs", "diced tomatoes"],
    time: "22 min",
    serves: 4,
    category: "dinner",
    cuisine: "Italian",
    instructions: [
      "Mix ground chicken with eggs, garlic, and herbs",
      "Form into meatballs and brown in pan",
      "Simmer in diced tomatoes until cooked through"
    ]
  },
  {
    name: "Salmon with Brussels Sprouts",
    ingredients: ["salmon", "brussels sprouts", "olive oil", "garlic", "lemons"],
    time: "20 min",
    serves: 4,
    category: "dinner",
    cuisine: "Modern",
    instructions: [
      "Halve brussels sprouts and roast with olive oil",
      "Season salmon and bake alongside vegetables",
      "Finish with garlic and lemon juice"
    ]
  },
  {
    name: "Chicken Naan Pizza",
    ingredients: ["homemade naan", "chicken", "diced tomatoes", "bell peppers", "herbs"],
    time: "15 min",
    serves: 2,
    category: "dinner",
    cuisine: "Fusion",
    instructions: [
      "Top naan with diced tomatoes",
      "Add cooked chicken and bell peppers",
      "Bake until crispy, garnish with herbs"
    ]
  },
  {
    name: "Pineapple Chicken Bowl",
    ingredients: ["chicken", "pineapple", "rice", "bell peppers", "ginger"],
    time: "20 min",
    serves: 4,
    category: "dinner",
    cuisine: "Hawaiian",
    instructions: [
      "Cook chicken with minced ginger",
      "Add diced pineapple and bell peppers",
      "Serve over rice"
    ]
  }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RECIPE_DATABASE;
}
