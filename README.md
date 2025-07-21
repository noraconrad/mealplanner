## 🛠️ Installation & Setup

1. **Download the project**
   ```bash
   git clone https://github.com/noraconrad/mealplanner.git
   cd mealplanner
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No server setup required!

3. **Start cooking**
   - Check off ingredients you have
   - Discover what you can make tonight

## 📁 Project Structure

```
mealplanner/
├── index.html           # Main application entry point
├── css/
│   └── styles.css       # Brand colors and styling
├── js/
│   ├── recipes.js       # 77-recipe database
│   ├── ingredients.js   # Smart mapping logic + 80+ ingredients
│   ├── components.js    # React UI components
│   └── app.js          # Main application logic
└── README.md           # You are here!
```

### **Why This Structure?**
- **Easy editing**: Need to add ingredients? Edit one file.
- **Team collaboration**: Multiple people can work on different parts
- **Performance**: Browser caches files efficiently
- **Debugging**: Issues are easy to locate and fix

## 🍳 How to Use

1. **Check Your Pantry**: Select ingredients you have from the 80+ item list
2. **Discover Recipes**: 
   - 🟢 **Ready to Cook**: Recipes you can make now
   - 🟡 **Almost There**: Recipes missing just a few ingredients
3. **Get Details**: Click any recipe for full ingredients and instructions
4. **Shop Smart**: Use the auto-generated shopping list for missing items

## Customization

### Adding New Ingredients
Edit `js/ingredients.js`:
```javascript
const baseIngredients = [
  'existing_ingredient',
  'your_new_ingredient', // Add here
];
```

### Creating Ingredient Mappings
For smart matching, add to the `ingredientMap`:
```javascript
const ingredientMap = {
  'recipe_calls_for': ['you_have_this', 'or_this'],
  'mixed greens': ['lettuce', 'spinach', 'arugula'],
  'your_mapping': ['specific_item1', 'specific_item2'],
};
```

### Styling Changes
Modify `css/styles.css` to adjust:
- App colors (search for hex codes like `#2f895d`)
- Layout and spacing
- Interactive effects

## 🤝 Contributing

This is a personal family recipe collection, but you're welcome to:
- **Fork it** for your own recipe database
- **Submit bug fixes** via pull requests
- **Suggest ingredient mappings** that would help others

## 🧪 Technical Details

- **Framework**: React 18 (via CDN)
- **Styling**: Tailwind CSS + custom brand colors
- **Data**: Static JSON recipe database
- **Performance**: Client-side only, no server required
- **Browser Support**: Modern browsers (ES6+)

## 🎨 Design Philosophy

This tool prioritizes:
- **Speed** over complexity
- **Family-friendly recipes** over exotic ingredients  
- **Real cooking scenarios** over theoretical meal planning
- **Visual clarity** over feature bloat

## 🔮 Future Ideas

- [ ] Add dietary restriction filters (vegetarian, gluten-free)
- [ ] Recipe difficulty ratings
- [ ] Cooking time estimates
- [ ] Photo integration
- [ ] Recipe scaling (2x, 4x servings)
- [ ] Nutritional information
- [ ] Seasonal ingredient suggestions

## 📜 License

Released under CC0 1.0 Universal - essentially public domain. Use it however you want!

## ❤️ About

**Full disclosure**: I don't actually code! This project started as a personal solution to my own "what's for dinner?" problem. I got tired of forgetting which recipes I could make with ingredients I already had, so I cobbled this together through lots of googling, AI assistance, and trial-and-error.

The code probably isn't great by any standards, but it works for my family and solves a real problem. I figured if it helps me, maybe it'll help someone else too, so why not share it publicly?

If you're a real developer and see ways to improve this, I'd love to learn! And if you're like me (not a coder but want to solve a problem), maybe this shows it's possible to build something useful even without formal programming knowledge.

**Happy cooking!** 🍽️

---

*Have 77 recipes not enough? Fork this project and add your own family favorites!*
