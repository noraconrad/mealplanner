const { useState, useMemo } = React;

const RecipeIngredientFinder = () => {
    // Use the recipe database loaded from recipes.js
    const recipes = RECIPE_DATABASE;

    // State management
    const [checkedIngredients, setCheckedIngredients] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showShoppingList, setShowShoppingList] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Event handlers
    const toggleIngredient = (ingredient) => {
        const newChecked = new Set(checkedIngredients);
        if (newChecked.has(ingredient)) {
            newChecked.delete(ingredient);
        } else {
            newChecked.add(ingredient);
        }
        setCheckedIngredients(newChecked);
    };

    // Recipe filtering with ingredient mapping
    const availableRecipes = useMemo(() => {
        const checkedIngredientsArray = Array.from(checkedIngredients);
        return recipes.filter(recipe => {
            const hasAllIngredients = recipe.ingredients.every(ingredient => 
                hasIngredient(ingredient, checkedIngredientsArray)
            );
            const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
            return hasAllIngredients && matchesCategory;
        });
    }, [checkedIngredients, selectedCategory]);

    const partialRecipes = useMemo(() => {
        const checkedIngredientsArray = Array.from(checkedIngredients);
        return recipes.filter(recipe => {
            const hasAnyIngredients = recipe.ingredients.some(ingredient => 
                hasIngredient(ingredient, checkedIngredientsArray)
            );
            const hasAllIngredients = recipe.ingredients.every(ingredient => 
                hasIngredient(ingredient, checkedIngredientsArray)
            );
            const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
            
            return hasAnyIngredients && !hasAllIngredients && matchesCategory;
        }).map(recipe => ({
            ...recipe,
            missingIngredients: recipe.ingredients.filter(ingredient => 
                !hasIngredient(ingredient, checkedIngredientsArray)
            ),
            missingCount: recipe.ingredients.filter(ingredient => 
                !hasIngredient(ingredient, checkedIngredientsArray)
            ).length
        })).sort((a, b) => a.missingCount - b.missingCount);
    }, [checkedIngredients, selectedCategory]);

    // Utility functions
    const generateShoppingList = () => {
        const allMissingIngredients = new Set();
        partialRecipes.slice(0, 10).forEach(recipe => {
            recipe.missingIngredients.forEach(ingredient => {
                allMissingIngredients.add(ingredient);
            });
        });
        return Array.from(allMissingIngredients).sort();
    };

    const clearAll = () => setCheckedIngredients(new Set());
    const selectAll = () => setCheckedIngredients(new Set(baseIngredients));

    const openRecipeModal = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const closeRecipeModal = () => {
        setSelectedRecipe(null);
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-cream to-brand-rose-light" style={{backgroundImage: 'linear-gradient(135deg, #efe8e3 0%, #f5e8eb 100%)'}}>
            {/* Recipe Modal */}
            {showModal && selectedRecipe && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                        {/* Modal Header */}
                        <div className="bg-brand-primary text-white p-6" style={{backgroundColor: '#2f895d'}}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>
                                    <div className="flex items-center gap-4 text-green-100">
                                        <span className="flex items-center gap-1">
                                            <Clock size={16} />
                                            {selectedRecipe.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users size={16} />
                                            Serves {selectedRecipe.serves}
                                        </span>
                                        <span className="bg-brand-secondary px-3 py-1 rounded-full text-sm" style={{backgroundColor: '#1a4c34'}}>
                                            {selectedRecipe.cuisine}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    onClick={closeRecipeModal}
                                    className="text-white hover:text-green-200 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Ingredients */}
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center gap-2" style={{color: '#523e29'}}>
                                        <div className="w-2 h-2 bg-brand-primary rounded-full" style={{backgroundColor: '#2f895d'}}></div>
                                        Ingredients
                                    </h3>
                                    <div className="space-y-2">
                                        {(selectedRecipe.fullIngredients || selectedRecipe.ingredients).map((ingredient, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center gap-3 p-2 rounded-lg transition-colors"
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#efe8e3'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                            >
                                                <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0" style={{backgroundColor: '#c29848'}}></div>
                                                <span className="text-brand-dark" style={{color: '#523e29'}}>{ingredient}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Instructions */}
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center gap-2" style={{color: '#523e29'}}>
                                        <div className="w-2 h-2 bg-brand-rose rounded-full" style={{backgroundColor: '#d793a5'}}></div>
                                        Instructions
                                    </h3>
                                    <div className="space-y-3">
                                        {(selectedRecipe.instructions || ["Instructions coming soon!"]).map((step, index) => (
                                            <div key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 w-6 h-6 bg-brand-rose text-white rounded-full flex items-center justify-center text-sm font-medium" style={{backgroundColor: '#d793a5'}}>
                                                    {index + 1}
                                                </div>
                                                <p className="text-brand-dark leading-relaxed" style={{color: '#523e29'}}>{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tips Section */}
                            <div className="mt-8 p-4 bg-brand-accent-light rounded-lg border-l-4 border-brand-accent" style={{backgroundColor: '#faf8f3', borderColor: '#c29848'}}>
                                <h4 className="font-semibold text-brand-accent mb-2" style={{color: '#c29848'}}>💡 Cooking Tip</h4>
                                <p className="text-brand-brown text-sm" style={{color: '#a58364'}}>
                                    {selectedRecipe.category === 'breakfast' 
                                        ? "Prep ingredients the night before for quick morning assembly!"
                                        : selectedRecipe.category === 'lunch'
                                        ? "These ingredients can be prepped in advance and stored separately for quick lunch assembly."
                                        : "For best results, let meat rest for 5 minutes after cooking and taste and adjust seasonings as needed."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="bg-white shadow-sm border-b border-brand-primary" style={{borderColor: '#2f895d'}}>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-3">
                        <ChefHat className="text-brand-primary" size={36} style={{color: '#2f895d'}} />
                        <div>
                            <h1 className="text-3xl font-bold text-brand-dark" style={{color: '#523e29'}}>Recipe Ingredient Finder</h1>
                            <p className="text-brand-brown" style={{color: '#a58364'}}>Find recipes you can make with ingredients you have</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Ingredients Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 border border-brand-primary" style={{borderColor: '#2f895d'}}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-brand-dark" style={{color: '#523e29'}}>Your Pantry</h2>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={clearAll}
                                        className="px-3 py-1 text-sm bg-brand-rose text-white rounded-lg hover:opacity-80 transition-all" style={{backgroundColor: '#d793a5'}}
                                    >
                                        Clear
                                    </button>
                                    <button 
                                        onClick={selectAll}
                                        className="px-3 py-1 text-sm bg-brand-primary text-white rounded-lg hover:opacity-80 transition-all" style={{backgroundColor: '#2f895d'}}
                                    >
                                        All
                                    </button>
                                </div>
                            </div>
                            
                            <div className="mb-4 p-3 bg-brand-cream rounded-lg" style={{backgroundColor: '#efe8e3'}}>
                                <div className="text-sm text-brand-brown" style={{color: '#a58364'}}>
                                    <strong>{checkedIngredients.size}</strong> of {baseIngredients.length} selected
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div 
                                        className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                                        style={{width: `${(checkedIngredients.size / baseIngredients.length) * 100}%`, backgroundColor: '#2f895d'}}
                                    ></div>
                                </div>
                            </div>
                            
                            <div className="max-h-96 overflow-y-auto">
                                <div className="space-y-2">
                                    {baseIngredients.sort().map(ingredient => (
                                        <label 
                                            key={ingredient}
                                            className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors"
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#efe8e3'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={checkedIngredients.has(ingredient)}
                                                onChange={() => toggleIngredient(ingredient)}
                                                className="ingredient-checkbox w-4 h-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" style={{accentColor: '#2f895d'}}
                                            />
                                            <span className={`ingredient-label text-sm flex-1 ${
                                                checkedIngredients.has(ingredient) 
                                                    ? 'font-medium' 
                                                    : ''
                                            }`} style={{color: checkedIngredients.has(ingredient) ? '#2f895d' : '#523e29'}}>
                                                {formatIngredientName(ingredient)}
                                            </span>
                                            {checkedIngredients.has(ingredient) && (
                                                <Check size={16} className="text-brand-primary" style={{color: '#2f895d'}} />
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recipes Panel */}
                    <div className="lg:col-span-3">
                        {/* Category Filter */}
                        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-brand-sage" style={{borderColor: '#9eb6a5'}}>
                            <div className="flex flex-wrap gap-2">
                                {['all', 'breakfast', 'lunch', 'dinner'].map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className="px-6 py-2 rounded-lg capitalize font-medium transition-all"
                                        style={{
                                            backgroundColor: selectedCategory === category ? '#2f895d' : '#efe8e3',
                                            color: selectedCategory === category ? 'white' : '#523e29'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedCategory !== category) {
                                                e.currentTarget.style.backgroundColor = '#9eb6a5';
                                                e.currentTarget.style.color = 'white';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedCategory !== category) {
                                                e.currentTarget.style.backgroundColor = '#efe8e3';
                                                e.currentTarget.style.color = '#523e29';
                                            }
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                                {partialRecipes.length > 0 && (
                                    <button
                                        onClick={() => setShowShoppingList(!showShoppingList)}
                                        className="ml-auto px-4 py-2 bg-brand-accent-light text-brand-accent rounded-lg transition-all flex items-center gap-2" 
                                        style={{backgroundColor: '#faf8f3', color: '#c29848'}}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#c29848';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#faf8f3';
                                            e.currentTarget.style.color = '#c29848';
                                        }}
                                    >
                                        <ShoppingCart size={16} />
                                        Shopping List
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Shopping List Modal */}
                        {showShoppingList && (
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-brand-accent" style={{borderColor: '#c29848'}}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-brand-dark flex items-center gap-2" style={{color: '#523e29'}}>
                                        <ShoppingCart size={20} style={{color: '#c29848'}} />
                                        Shopping List
                                    </h3>
                                    <button 
                                        onClick={() => setShowShoppingList(false)}
                                        className="text-brand-brown hover:text-brand-dark transition-colors" style={{color: '#a58364'}}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <p className="text-brand-brown text-sm mb-4" style={{color: '#a58364'}}>
                                    Get these ingredients to unlock more recipes:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {generateShoppingList().map(ingredient => (
                                        <div key={ingredient} className="bg-brand-accent-light px-3 py-2 rounded-lg text-sm text-brand-accent" style={{backgroundColor: '#faf8f3', color: '#c29848'}}>
                                            {formatIngredientName(ingredient)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Available Recipes */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-brand-primary" style={{borderColor: '#2f895d'}}>
                            <h2 className="text-2xl font-semibold text-brand-primary mb-6 flex items-center gap-3" style={{color: '#2f895d'}}>
                                <Check size={28} />
                                Ready to Cook ({availableRecipes.length})
                            </h2>
                            
                            {availableRecipes.length === 0 ? (
                                <div className="text-center py-12">
                                    <ChefHat size={64} className="text-brand-sage mx-auto mb-4" style={{color: '#9eb6a5'}} />
                                    <p className="text-brand-brown text-lg mb-2" style={{color: '#a58364'}}>No recipes available yet</p>
                                    <p className="text-brand-brown" style={{color: '#a58364'}}>Select some ingredients to see what you can make!</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {availableRecipes.map((recipe, index) => (
                                        <div 
                                            key={index} 
                                            className="recipe-card border-2 border-brand-primary rounded-xl p-5 bg-gradient-to-br from-brand-light to-brand-cream cursor-pointer transform transition-all hover:scale-[1.02]" style={{borderColor: '#2f895d', backgroundImage: 'linear-gradient(135deg, #f0f9f4 0%, #efe8e3 100%)'}}
                                            onClick={() => openRecipeModal(recipe)}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-bold text-brand-dark text-lg leading-tight" style={{color: '#523e29'}}>{recipe.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-brand-primary text-white px-2 py-1 rounded-lg text-xs font-medium" style={{backgroundColor: '#2f895d'}}>
                                                        {recipe.cuisine}
                                                    </span>
                                                    <BookOpen size={16} className="text-brand-primary" style={{color: '#2f895d'}} />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-brand-brown mb-3" style={{color: '#a58364'}}>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {recipe.time}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users size={14} />
                                                    Serves {recipe.serves}
                                                </span>
                                                <span className="capitalize bg-brand-sage text-white px-2 py-1 rounded text-xs" style={{backgroundColor: '#9eb6a5'}}>
                                                    {recipe.category}
                                                </span>
                                            </div>
                                            <div className="text-xs text-brand-brown" style={{color: '#a58364'}}>
                                                <strong>Ingredients:</strong>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    {recipe.ingredients.slice(0, 4).map(ingredient => (
                                                        <span key={ingredient} className="bg-white px-2 py-1 rounded text-xs border border-brand-sage" style={{borderColor: '#9eb6a5'}}>
                                                            {formatIngredientName(ingredient)}
                                                        </span>
                                                    ))}
                                                    {recipe.ingredients.length > 4 && (
                                                        <span className="bg-brand-sage text-white px-2 py-1 rounded text-xs" style={{backgroundColor: '#9eb6a5'}}>
                                                            +{recipe.ingredients.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mt-3 text-xs text-brand-primary font-medium flex items-center gap-1" style={{color: '#2f895d'}}>
                                                <BookOpen size={12} />
                                                Click for full recipe
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Partial Recipes */}
                        {partialRecipes.length > 0 && (
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent" style={{borderColor: '#c29848'}}>
                                <h2 className="text-2xl font-semibold text-brand-accent mb-6" style={{color: '#c29848'}}>
                                    Almost There ({partialRecipes.length})
                                </h2>
                                <p className="text-brand-brown mb-6" style={{color: '#a58364'}}>
                                    You're close to making these recipes! Just need a few more ingredients.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {partialRecipes.slice(0, 12).map((recipe, index) => (
                                        <div 
                                            key={index} 
                                            className="recipe-card border-2 border-brand-accent rounded-xl p-5 bg-gradient-to-br from-brand-accent-light to-brand-cream cursor-pointer transform transition-all hover:scale-[1.02]" style={{borderColor: '#c29848', backgroundImage: 'linear-gradient(135deg, #faf8f3 0%, #efe8e3 100%)'}}
                                            onClick={() => openRecipeModal(recipe)}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-bold text-brand-dark text-lg leading-tight" style={{color: '#523e29'}}>{recipe.name}</h3>
                                                <div className="text-right">
                                                    <span className="bg-brand-accent text-white px-2 py-1 rounded-lg text-xs font-medium block mb-1" style={{backgroundColor: '#c29848'}}>
                                                        {recipe.cuisine}
                                                    </span>
                                                    <span className="bg-brand-rose text-white px-2 py-1 rounded text-xs" style={{backgroundColor: '#d793a5'}}>
                                                        -{recipe.missingCount} items
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-brand-brown mb-3" style={{color: '#a58364'}}>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {recipe.time}
                                                </span>
                                                <span className="capitalize bg-brand-accent text-white px-2 py-1 rounded text-xs" style={{backgroundColor: '#c29848'}}>
                                                    {recipe.category}
                                                </span>
                                            </div>
                                            <div className="text-xs">
                                                <div className="mb-2">
                                                    <span className="text-brand-rose font-semibold" style={{color: '#d793a5'}}>Missing: </span>
                                                    <div className="flex flex-wrap gap-1 mt-1">
                                                        {recipe.missingIngredients.slice(0, 3).map(ingredient => (
                                                            <span key={ingredient} className="bg-brand-rose-light text-brand-rose px-2 py-1 rounded border border-brand-rose" style={{backgroundColor: '#f5e8eb', color: '#d793a5', borderColor: '#d793a5'}}>
                                                                {formatIngredientName(ingredient)}
                                                            </span>
                                                        ))}
                                                        {recipe.missingIngredients.length > 3 && (
                                                            <span className="bg-brand-rose text-white px-2 py-1 rounded text-xs" style={{backgroundColor: '#d793a5'}}>
                                                                +{recipe.missingIngredients.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-xs text-brand-accent font-medium flex items-center gap-1" style={{color: '#c29848'}}>
                                                <BookOpen size={12} />
                                                Click for full recipe
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 py-8 border-t bg-white rounded-xl shadow-lg border-brand-sage" style={{borderColor: '#9eb6a5'}}>
                    <p className="text-brand-brown" style={{color: '#a58364'}}>
                        🍽️ Made with love for the whole family.
                    </p>
                    <p className="text-brand-brown text-sm mt-2" style={{color: '#a58364'}}>
                        Share this tool with friends and family!
                    </p>
                </div>
            </div>
        </div>
    );
};

// Render the application
ReactDOM.render(React.createElement(RecipeIngredientFinder), document.getElementById('root'));
