// js/ingredients.js - Complete ingredient management with automatic plural handling

// Simplified ingredient mapping (plurals handled automatically now)
const ingredientMap = {
  // Complex substitutions that need manual mapping
  'mixed greens': ['lettuce', 'spinach', 'arugula', 'kale'],
  'pork': ['pork butt', 'ground pork', 'pork chops', 'bacon', 'ham'],
  'beef': ['ground beef', 'beef chuck', 'beef roast'], 
  'chicken': ['chicken breast', 'chicken thighs', 'whole chicken', 'ground chicken'],
  'berries': ['blueberries', 'strawberries', 'raspberries', 'blackberries'],
  'broth': ['beef broth', 'chicken broth', 'vegetable broth'],
  'herbs': ['basil', 'parsley', 'cilantro', 'oregano', 'thyme'],
  
  // Reverse mappings for when you have specific items but recipe calls for general
  'lettuce': ['mixed greens'],
  'spinach': ['mixed greens'],
  'arugula': ['mixed greens'],
  'kale': ['mixed greens'],
  'ground beef': ['beef'],
  'ground pork': ['pork'],
  'ground chicken': ['chicken'],
  'blueberries': ['berries'],
  'strawberries': ['berries'],
  'raspberries': ['berries'],
  'blackberries': ['berries'],
  'beef broth': ['broth'],
  'chicken broth': ['broth'],
  'vegetable broth': ['broth'],
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
 * Normalize ingredient names to handle plurals, common variations, and formatting
 * @param {string} ingredient - Raw ingredient name
 * @returns {string} - Normalized ingredient name
 */
function normalizeIngredient(ingredient) {
  let normalized = ingredient.toLowerCase().trim();
  
  // Remove common prefixes
  normalized = normalized.replace(/^(fresh|dried|chopped|diced|minced|ground|whole|raw)\s+/, '');
  
  // Handle plurals - convert to singular
  if (normalized.endsWith('ies')) {
    // berries -> berry, cherries -> cherry
    normalized = normalized.slice(0, -3) + 'y';
  } else if (normalized.endsWith('ves')) {
    // knives -> knife, leaves -> leaf
    normalized = normalized.slice(0, -3) + 'f';
  } else if (normalized.endsWith('es') && !normalized.endsWith('ness')) {
    // tomatoes -> tomato, potatoes -> potato (but not business -> busines)
    normalized = normalized.slice(0, -2);
  } else if (normalized.endsWith('s') && normalized.length > 3) {
    // steaks -> steak, onions -> onion
    normalized = normalized.slice(0, -1);
  }
  
  // Handle common irregular plurals
  const irregularPlurals = {
    'children': 'child',
    'feet': 'foot',
    'geese': 'goose',
    'mice': 'mouse',
    'teeth': 'tooth',
    'women': 'woman',
    'men': 'man'
  };
  
  if (irregularPlurals[normalized]) {
    normalized = irregularPlurals[normalized];
  }
  
  return normalized;
}

/**
 * Check if two ingredient names are equivalent (handling plurals and variations)
 * @param {string} ingredient1 - First ingredient name
 * @param {string} ingredient2 - Second ingredient name  
 * @returns {boolean} - True if ingredients are equivalent
 */
function ingredientsMatch(ingredient1, ingredient2) {
  if (ingredient1 === ingredient2) return true;
  
  const norm1 = normalizeIngredient(ingredient1);
  const norm2 = normalizeIngredient(ingredient2);
  
  if (norm1 === norm2) return true;
  
  // Handle common equivalent terms
  const equivalents = {
    'scallion': 'green onion',
    'spring onion': 'green onion',
    'roma tomato': 'tomato',
    'beefsteak tomato': 'tomato',
    'white onion': 'onion',
    'yellow onion': 'onion',
    'red onion': 'onion',
    'sweet onion': 'onion',
    'sirloin steak': 'steak',
    'ribeye steak': 'steak',
    'flat iron steak': 'steak',
    'new york strip steak': 'steak',
    'filet mignon': 'steak',
    'top sirloin steak': 'steak',
    'strip steak': 'steak'
  };
  
  return equivalents[norm1] === norm2 || equivalents[norm2] === norm1;
}

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
  
  // Check with automatic plural/singular matching
  if (availableIngredients.some(available => ingredientsMatch(recipeIngredient, available))) {
    return true;
  }
  
  // Check manual ingredient mapping (for complex substitutions)
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
