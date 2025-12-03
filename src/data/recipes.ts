export interface Recipe {
  id: number
  title: string
  description: string
  image: string
  time: number
  servings: number
  difficulty: string
  category: string
  ingredients: string[]
  instructions: string[]
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Classic Margherita Pizza',
    description: 'Traditional Italian pizza with fresh mozzarella, tomatoes, and basil',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800',
    time: 30,
    servings: 4,
    difficulty: 'Easy',
    category: 'Italian',
    ingredients: [
      '1 pizza dough',
      '1 cup tomato sauce',
      '8 oz fresh mozzarella cheese',
      'Fresh basil leaves',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough on a floured surface',
      'Spread tomato sauce evenly over the dough',
      'Add sliced mozzarella cheese',
      'Bake for 12-15 minutes until crust is golden',
      'Top with fresh basil leaves and drizzle with olive oil'
    ]
  },
  {
    id: 2,
    title: 'Chicken Pad Thai',
    description: 'Authentic Thai stir-fried noodles with chicken, peanuts, and tangy sauce',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    time: 25,
    servings: 3,
    difficulty: 'Medium',
    category: 'Asian',
    ingredients: [
      '8 oz rice noodles',
      '2 chicken breasts, sliced',
      '2 eggs',
      '3 cloves garlic, minced',
      '1/4 cup fish sauce',
      '2 tbsp tamarind paste',
      '2 tbsp brown sugar',
      '1/4 cup peanuts',
      'Bean sprouts',
      'Lime wedges',
      'Green onions'
    ],
    instructions: [
      'Soak rice noodles in warm water for 30 minutes',
      'Heat oil in a wok over high heat',
      'Cook chicken until golden, then set aside',
      'Scramble eggs in the wok',
      'Add garlic and drained noodles',
      'Mix fish sauce, tamarind, and sugar; add to wok',
      'Toss everything together for 3-4 minutes',
      'Serve with peanuts, bean sprouts, lime, and green onions'
    ]
  },
  {
    id: 3,
    title: 'Classic Beef Burger',
    description: 'Juicy homemade beef burger with all the fixings',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    time: 20,
    servings: 4,
    difficulty: 'Easy',
    category: 'American',
    ingredients: [
      '1 lb ground beef (80/20)',
      '4 burger buns',
      '4 slices cheddar cheese',
      'Lettuce leaves',
      'Tomato slices',
      'Red onion slices',
      'Pickles',
      'Ketchup and mustard',
      'Salt and pepper'
    ],
    instructions: [
      'Form ground beef into 4 patties',
      'Season generously with salt and pepper',
      'Heat grill or skillet to medium-high',
      'Cook patties for 4-5 minutes per side',
      'Add cheese in the last minute of cooking',
      'Toast buns lightly',
      'Assemble burgers with desired toppings'
    ]
  },
  {
    id: 4,
    title: 'Chicken Tikka Masala',
    description: 'Creamy Indian curry with tender chicken in spiced tomato sauce',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
    time: 45,
    servings: 6,
    difficulty: 'Medium',
    category: 'Indian',
    ingredients: [
      '2 lbs chicken breast, cubed',
      '1 cup yogurt',
      '2 tbsp garam masala',
      '1 can tomato sauce',
      '1 cup heavy cream',
      '1 onion, diced',
      '4 cloves garlic',
      '1 inch ginger',
      '2 tsp cumin',
      'Fresh cilantro',
      'Rice for serving'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 30 minutes',
      'Grill or broil chicken until charred',
      'Sauté onion, garlic, and ginger until soft',
      'Add tomato sauce and spices',
      'Simmer for 15 minutes',
      'Stir in cream and chicken',
      'Cook for 10 more minutes',
      'Garnish with cilantro and serve with rice'
    ]
  },
  {
    id: 5,
    title: 'Caesar Salad',
    description: 'Classic Caesar with crispy romaine, croutons, and parmesan',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
    time: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'American',
    ingredients: [
      '1 head romaine lettuce',
      '1/2 cup Caesar dressing',
      '1/2 cup parmesan cheese, grated',
      '2 cups croutons',
      '2 anchovy fillets (optional)',
      'Lemon juice',
      'Black pepper'
    ],
    instructions: [
      'Wash and chop romaine lettuce',
      'In a large bowl, toss lettuce with Caesar dressing',
      'Add croutons and parmesan cheese',
      'Toss until well combined',
      'Add anchovies if desired',
      'Finish with lemon juice and black pepper',
      'Serve immediately'
    ]
  },
  {
    id: 6,
    title: 'Chocolate Chip Cookies',
    description: 'Soft and chewy homemade chocolate chip cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
    time: 30,
    servings: 24,
    difficulty: 'Easy',
    category: 'Dessert',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in a bowl',
      'Cream together butter and sugars',
      'Beat in eggs and vanilla',
      'Gradually mix in flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto baking sheets',
      'Bake for 9-11 minutes until golden',
      'Cool on baking sheet for 2 minutes, then transfer to wire rack'
    ]
  }
]