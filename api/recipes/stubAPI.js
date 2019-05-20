import _ from 'lodash';

  const recipes = [
         { id: 1,
          ingredients:  [
            "6 skinless, boneless chicken breast halves - cut into 1/2 inch strips",
            "1 egg, beaten",
            "1 cup buttermilk",
            "1 1/2 teaspoons garlic powder",
            "1 cup all-purpose flour",
            "1 cup seasoned bread crumbs",
            "1 teaspoon salt",
            "1 teaspoon baking powder",
            "1 quart oil for frying"
          ],
          directions: [
          "Place chicken strips into a large, resealable plastic bag. In a small bowl, mix the egg, buttermilk and garlic powder. Pour mixture into bag with chicken. Seal, and refrigerate 2 to 4 hours.",
          "In another large, resealable plastic bag, mix together the flour, bread crumbs, salt and baking powder. Remove chicken from refrigerator, and drain, discarding buttermilk mixture. Place chicken in flour mixture bag. Seal, and shake to coat.",
          "Heat oil in a large, heavy skillet to 375 degrees F (190 degrees C).",
          "Carefully place coated chicken in hot oil. Fry until golden brown and juices run clear. Drain on paper towels."
          ],
          upvotes: 5, 
          description: "If you like the taste of garlic, this recipe is for you. It is easy to make, but requires time to marinate.", 
          images: [
          "img/recipes/breaded-chicken-fingers.0.jpg", 
          "img/recipes/breaded-chicken-fingers.1.jpg", 
          "img/recipes/breaded-chicken-fingers.2.jpg",
          "img/recipes/breaded-chicken-fingers.4.jpg", 
          "img/recipes/breaded-chicken-fingers.5.jpg"
          ], 

          time: {
            "prepTime": "20m", 
            "cookTime": "10m", 
            "readyTime": "2h 30m"
        }, 
          name: "Breaded Chicken Fingers",

          snippet: 'If you like the taste of garlic, this recipe is for you. It is easy to make, but requires time to marinate',
          imageUrl: 'img/recipes/breaded-chicken-fingers.0.jpg'


          },
        
         {
          id: 2,
          ingredients:  [
            "2 (4 ounce) filet mignon steaks",
            "1/2 teaspoon freshly ground black pepper to taste",
            "salt to taste",
            "1/4 cup balsamic vinegar",
            "1/4 cup dry red wine"
            
        ], 
        time: {
            "prepTime": "5m", 
            "cookTime": "15m", 
            "readyTime": "20m"
        }, 
        
        directions: [
            "Sprinkle freshly ground pepper over both sides of each steak, and sprinkle with salt to taste.",
            "Heat a nonstick skillet over medium-high heat. Place steaks in hot pan, and cook for 1 minute on each side, or until browned. Reduce heat to medium-low, and add balsamic vinegar and red wine. Cover, and cook for 4 minutes on each side, basting with sauce when you turn the meat over.",
            "Remove steaks to two warmed plates, spoon one tablespoon of glaze over each, and serve immediately."
        ], 
        upvotes: 4, 
        
        description: "This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes.", 
      
        images: [
            "img/recipes/filet-mignon-with-rich-balsamic-glaze.0.jpg", 
            "img/recipes/filet-mignon-with-rich-balsamic-glaze.1.jpg", 
            "img/recipes/filet-mignon-with-rich-balsamic-glaze.2.jpg"
        ], 
        name: "Filet Mignon with Rich Balsamic Glaze",
        snippet: 'This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes.',
        imageUrl: 'img/recipes/filet-mignon-with-rich-balsamic-glaze.0.jpg' 

            
          },
          {

            id: 3,
            ingredients:  [
              "2 eggs beaten",
              "1 cup grated Parmesan cheese",
              "7 ounces seasoned bread crumbs",
              "6 skinless, boneless chicken breast halves",
              "1 tablespoon vegetable oil",
              "12 ounces pasta sauce"
          ], 
          time: {
              "prepTime": "15m", 
              "cookTime": "30m", 
              "readyTime": "45m"
          }, 
          
          directions: [
              "Preheat oven to 375 degrees F (190 degrees C).",
              "Pour beaten eggs into a shallow dish or bowl. In another shallow dish or bowl, mix together the grated Parmesan cheese and bread crumbs. Dip chicken breasts into beaten egg, then into bread crumb mixture to coat.",
              "In a large skillet, heat oil over medium high heat. Add coated chicken and saute for about 8 to 10 minutes each side, or until chicken is cooked through and juices run clear.",
              "Pour tomato sauce into a lightly greased 9x13 inch baking dish. Add chicken, then place a slice of Monterey Jack cheese over each breast, and bake in the preheated oven for 20 minutes or until cheese is completely melted."
          ], 
          
          description: "A delicious Italian breaded chicken smothered with cheese and tomato-based pasta sauce!", 
        
          upvotes: 10, 

          images: [
              "img/recipes/tomato-chicken-parmesan.0.jpg", 
              "img/recipes/tomato-chicken-parmesan.1.jpg", 
              "img/recipes/tomato-chicken-parmesan.2.jpg", 
              "img/recipes/tomato-chicken-parmesan.3.jpg"
          ], 
          name: "Tomato Chicken Parmesan",

          snippet: 'A delicious Italian breaded chicken smothered with cheese and tomato-based pasta sauce!',
          imageUrl: 'img/recipes/tomato-chicken-parmesan.0.jpg'
          },
          

      ];

     const stubAPI = {
         getAll: () => {
            return recipes;
          },
        //  add: (t, l) => {
        //       if (!(t && l)) return false;
        //       let id = 1;
        //       const last = _.last(recipes);
        //       if (last) {
        //          id = last.id + 1;
        //       }
        //       let len = recipes.length;
        //       let newLen = recipes.push({
        //          TODO
        //        return newLen > len?id:-1;
        //       },
          upvote: (id) => {
            console.log(id)
             const index = _.findIndex(recipes,
                   (recipe) => {
                     console.log(recipe.id)
                    return recipe.id == id;
                  } );
             if (index !== -1) {
                  recipes[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getRecipe: (id) => {
            let result = null;
            const index = _.findIndex(recipes,
                   (recipe) => {
                    return recipe.id == id;
                  } );
             if (index !== -1) {
                result = recipes[index];
                    }
            return result;
            },

      };
    export default stubAPI;




   


    