import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SelectControls from '../src/components/selectControls';
import Recipe from '../src/components/recipe';
// import Recipes from '../src/Data';   // Test data set
import RecipeList from '../src/components/recipeList';
import { action } from '@storybook/addon-actions';
import Images from '../src/components/recipeDetail/images';
import { MemoryRouter, Route } from 'react-router'
import Details from '../src/components/recipeDetail/details'
import api from '../src/dataStore/stubAPI';


const recipe = 
{
        "ingredients":  [
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
        "time": {
            "prepTime": "20m", 
            "cookTime": "10m", 
            "readyTime": "2h 30m"
        }, 
        
        "directions": [
            "Place chicken strips into a large, resealable plastic bag. In a small bowl, mix the egg, buttermilk and garlic powder. Pour mixture into bag with chicken. Seal, and refrigerate 2 to 4 hours.",
            "In another large, resealable plastic bag, mix together the flour, bread crumbs, salt and baking powder. Remove chicken from refrigerator, and drain, discarding buttermilk mixture. Place chicken in flour mixture bag. Seal, and shake to coat.",
            "Heat oil in a large, heavy skillet to 375 degrees F (190 degrees C).",
            "Carefully place coated chicken in hot oil. Fry until golden brown and juices run clear. Drain on paper towels."
        ],
        "upvotes": 5, 
        
        "description": "If you like the taste of garlic, this recipe is for you. It is easy to make, but requires time to marinate.", 
    
        "id": "breaded-chicken-fingers", 
        "images": [
            "../../public/recipes/img/recipes/breaded-chicken-fingers.0.jpg", 
            "img/recipes/breaded-chicken-fingers.1.jpg", 
            "img/recipes/breaded-chicken-fingers.2.jpg",
            "img/recipes/breaded-chicken-fingers.4.jpg", 
            "img/recipes/breaded-chicken-fingers.5.jpg"
        ], 
        "name": "Breaded Chicken Fingers"
    }
    

const recipes = api.getAll();

storiesOf('Recipe List', module)
        .add('Images', 
        () =>  <Images recipe={recipe}  />
        ) 
        .add('Details', 
        () =>  <Details recipe={recipe}  />
        )
        .addDecorator(story => 
                <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
        )

        .add('Select controls', 
        () =>   <SelectControls 
                    onUserInput={ action('input changed') }
                    filterText='' /> 
        )
        .add('Recipe', 
        () =>  <Recipe recipe={recipes[0]} /> 
        )
        .add('Recipe list', 
        () =>  <RecipeList recipes={recipes} /> 
        )
        

 