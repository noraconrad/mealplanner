// Ingredient mapping for flexible recipe matching
const ingredientMap = {
  'mixed greens': ['lettuce', 'spinach', 'arugula', 'kale'],
  'pork': ['pork butt', 'ground pork', 'pork chops', 'bacon', 'ham'],
  'beef': ['ground beef', 'beef chuck', 'beef roast'], 
  'steak': ['top sirloin steaks', 'flat iron steaks', 'ribeye steaks', 'filet mignon', 'new york strip', 'flank steak'],  
  'chicken': ['chicken breast', 'chicken thighs', 'whole chicken', 'ground chicken'],
  'onion': ['yellow onion', 'white onion', 'red onion', 'shallots', 'green onions'],
  'garlic': ['garlic cloves', 'garlic powder', 'minced garlic'],
  'berries': ['blueberries', 'strawberries', 'raspberries', 'blackberries'],
  'potatoes': ['fingerling potatoes', 'sweet potatoes'],
  'broth': ['beef broth', 'chicken broth', 'vegetable broth'],
  'tomatoes': ['diced tomatoes', 'cherry tomatoes'],
  
  // Reverse mappings - specific ingredients can substitute for general ones
  'lettuce': ['mixed greens'],
  'spinach': ['mixed greens'],
  'arugula': ['mixed greens'],
  'top sirloin steaks': ['steak'],
  'flat iron steaks': ['steak'],
  'ribeye steaks': ['steak'],
  'pork butt': ['pork'],
  'ground pork': ['pork'],
  'ground beef': ['beef'],
  'ground chicken': ['chicken'],
  'green onions': ['onion'],
  'red onion': ['onion'],
};

// Base ingredients list for the pantry
const baseIngredients = [
    'cauliflower', 'blueberries', 'grapes', 'eggs', 'garlic', 'olive oil', 'cabbage',
    'chicken', 'bell peppers', 'onions', 'arugula', 'macadamia nuts', 'radish',
    'pineapple', 'mushrooms', 'black beans', 'summer squash', 'lentils', 'beans',
    'peaches', 'strawberries', 'raspberries', 'blackberries', 'almonds', 'rice',
    'cucumbers', 'sweet potatoes', 'fingerling potatoes', 'celery', 'artichoke',
    'chickpeas', 'chia seeds', 'chickpea pasta', 'pears', 'leeks', 'lettuce',
    'oats', 'broccoli', 'corn', 'brussels sprouts', 'avocados', 'green beans',
    'zucchini', 'edamame', 'flaxseed', 'banana', 'ground chicken', 'walnuts',
    'coconut water', 'coconut shreds', 'greek yogurt', 'honey', 'carrots',
    'tomatoes', 'shrimp', 'salmon', 'homemade sourdough', 'homemade naan',
    'peanut butter', 'heavy cream', 'butter', 'lemons', 'ribeye steaks',
    'chuck roast', 'baby back ribs', 'top sirloin steaks', 'flat iron steaks',
    'pork butt', 'ground beef', 'ground pork', 'spinach', 'green onions',
    'ginger', 'red onion', 'cilantro', 'lime', 'cumin', 'paprika', 'oregano',
    'beef broth', 'chicken broth', 'vegetable broth', 'diced tomatoes',
    'cherry tomatoes', 'herbs', 'sesame oil'
];

/**
 * Check if a recipe ingredient can be satisfied by available ingredients
 * @param {string} recipeIngredient - The ingredient required by the recipe
 * @param {string[]} availableIngredients - Array of available ingredients
 * @returns {boolean} - True if the ingredient can be satisfied
 */
function hasIngredient(recipeIngredient, availableIngredients) {
  // Direct match
  if (availableIngredients.includes(recipeIngredient)) {
    return true;
  }
  
  // Check if this recipe ingredient has specific alternatives
  const aliases = ingredientMap[recipeIngredient];
  if (aliases && aliases.some(alias => availableIngredients.includes(alias))) {
    return true;
  }
  
  // Check if any available ingredient can substitute for this recipe ingredient
  return availableIngredients.some(available => {
    const canSubstitute = ingredientMap[available];
    return canSubstitute && canSubstitute.includes(recipeIngredient);
  });
}

/**
 * Format ingredient name for display (capitalize and clean up)
 * @param {string} ingredient - Raw ingredient name
 * @returns {string} - Formatted ingredient name
 */
function formatIngredientName(ingredient) {
    return ingredient.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}
