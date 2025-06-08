const foodData = [
    {
        name: "Tzatziki",
        img: "https://www.foodista.com/sites/default/files/EC_tzatziki.jpg",
        ingredients: `2 cucumbers, peeled, seeded and coarsely grated,<br> 
                      ¼ tsp sea salt, 1 ½ cups of yogurt, ½ cup sour cream,<br> 
                      3 Tbs olive oil, 1 Tbs vinegar, 2 cloves garlic, finely minced,<br> 
                      ¼ tsp white pepper, 1 tsp fresh dill, chopped, or 1 Tbs dried dill`,
        link: "https://www.foodista.com/recipe/8RBBN8GT/tzadziki"
    },
    {
        name: "Fried Bee Hoon/Vermicelli",
        img: "https://img.spoonacular.com/recipes/643669-556x370.jpg",
        ingredients: "8 medium shrimp, deveined, shells removed, handful of bean sprouts, 2 garlic cloves, chopped, 2 stalks of spring onions (chopped to 2- inches lengths), Chicken boneless breast meat, chopped to bite-size, 1 small/ medium carrot, chopped into matchsticks, Corn/ olive oil, Dashes of flavoured white pepper, 4 tablespoons Soy Sauce, 1 tablespoon cornstarch to marinate chicken, 1 tablepsoon sugar, 1 packet vermicelli (follow packet's cooking instructions), 1/2 cup water, 1 tablespoon of sambal oelek (I use Thai Choice brand), 1 tablespoon of sambal oelek (I use Thai Choice brand)",
        link: "https://www.foodista.com/recipe/34MHGGXL/fried-bee-hoon-vermicelli"
    },
    {
        name: "Cheesecake Ice-Cream With Mango Syrup",
        img: "https://img.spoonacular.com/recipes/637624-556x370.jpg",
        ingredients: "1 can fat free condensed milk, 1/4 cup lemon juice, lemon rind finely grated (1 whole lemon), 450 grams low fat cream cheese, 500 grams gm mango (fresh, canned or frozen), 1 cup milk, ½ cup sugar, 1 teaspoon vanilla bean paste, 3 tablespoons water",
        link: "https://www.foodista.com/recipe/N8KPW64C/cheesecake-ice-cream-with-mango-syrup"
    },
    {
        name: "Mediterranean Semolina Cake",
        img: "https://img.spoonacular.com/recipes/651434-556x370.jpg",
        ingredients: "180g sugar, 5 eggs, 220ml yoghurt, Zest 1 lemon, Zest 1 orange, 225g almond meal, 200g semolina, 1 tsp baking powder, 200ml olive oil, 1 handful almonds, peeled, chopped, 1 handful raisins, 2-3 Tbs dry cranberries, 100ml honey, Juice of 1 orange",
        link: "https://www.foodista.com/recipe/DYTGRRYD/mediterranean-semolina-cake"
    },
    {
        name: "Thai Shrimp",
        img: "https://img.spoonacular.com/recipes/663151-556x370.jpg",
        ingredients: "1 bunch basil leaves, 2 c. leaves, 8 cups chicken stock, Hot cooked rice, 2 tablespoons fish sauce, 4 green onions, 1 teaspoon organic peanut oil, 3 hot red or green chilies, 8 ounces shrimp, cooked, peeled, and deveined, 51 – 60 per pound, 2 teaspoons soy sauce, 1 teaspoon sugar",
        link: "https://www.foodista.com/recipe/R35HC6C4/thai-shrimp"
    },
    {
        name: "Linguine With Prawns, Fresh Tomatoes and Spinach",
        img: "https://img.spoonacular.com/recipes/650139-556x370.jpg",
        ingredients: "1/2 package fresh baby spinach stems removed and cleaned, 1 pound of Fettuccine Barilla, 1 garlic clove, 1/4 cup Olive oil, 1 tablespoon freshly chopped parsley, 1 pound of fresh prawns, shell and tail removes and deveined, Salt and Pepper to taste, 4 fresh tomatoes, seed removed and chopped, 2 teaspoons unsalted butter, 1/2 cup White wine",
        link: "https://www.foodista.com/recipe/GYVMPF7R/linguine-with-prawns-fresh-tomatoes-and-spinach"
    },
    {
        name: "Vegetarian Spring Rolls With Garlic Lime Sauce",
        img: "https://img.spoonacular.com/recipes/664708-556x370.jpg",
        ingredients: "1 head of butter leaf lettuce, 2 carrots, julienned, 1/2 teaspoon ginger, 3/4 cup hoisin sauce, Garlic Lime Hoisin Sauce, 1 jicama, 2 tablespoons lime, 1 red bell pepper, 12 rice paper sheets, Vegetarian Spring Roll, 12 leaves of Thai basil, 1 yellow bell pepper, 1 teaspoon Saracha (or to taste), 1 teaspoon Saracha (or to taste)",
        link: "https://www.foodista.com/recipe/PTDX868M/vegetarian-spring-rolls-with-garlic-lime-sauce",
    },
    {
        name: "Crispy Panko and Herb Crusted Salmon",
        img: "https://img.spoonacular.com/recipes/640828-556x370.jpg",
        ingredients: "2 pound salmon fillet, 1/2 leek finely chopped (white part of the leek), 1/2 red pepper diced, 6 cherry tomatoes chopped, 2-3 tablespoons extra virgin olive oil, 1 1/2 cup panko crumbs, 1/2 cup Italian parsley finely chopped, 1 garlic clove finely chopped, zest of 1 lemon, 1/2 teaspoon salt, dash of pepper, 3 tablespoons extra virgin olive oil",
        link: "https://www.foodista.com/recipe/THDLRSLW/crispy-panko-and-herb-crusted-salmon",
    },
    {
        name: "Tuna Noodle Casserole: Mommie Cooks",
        img: "https://img.spoonacular.com/recipes/663942-556x370.jpg",
        ingredients: "3 tablespoons bread crumbs, 5 tablespoons of Butter, 1 can of Mushrooms, 1 can peas, 1 can tuna, drained, 2 Celery Sticks, Chopped, 1/2 cup grated cheese, 5 1/2 cups of Chicken Broth, 8 ounces of Egg Noodles, Cooked, 3 tablespoons flour, 1 Clove garlic, minced, 1 cup milk, 1 tablespoon minced onion, Parsley for Garnish, 1 jar of Pimientos, 1 salt and freshly ground pepper, 1/8 cup of Sherry",
        link: "https://www.foodista.com/recipe/SS4LMWQL/tuna-noodle-casserole-mommie-cooks"
    },
    {
        name: "Asian Salmon Burgers With Tangy Ginger Lime Sauce",
        img: "https://img.spoonacular.com/recipes/632874-556x370.jpg",
        ingredients: "4 burger buns, 1 tablespoon Fresh Basil, Chopped (about 5 leaves worth), 1 clove Garlic, 1 Green Onion, Chopped, 1/4 Lime, Juiced, 1/4 cup Mayonnaise, 1 teaspoon Oyster Sauce, 1/2 teaspoon Powdered Ginger, 1 pound Salmon, 5 1/2 tablespoons Sesame Oil, 2 tablespoons Sour Cream, 1 tablespoon Soy Sauce",
        link: "https://www.foodista.com/recipe/FRT38YTC/asian-salmon-burgers-with-tangy-ginger-lime-sauce"
    }
]

