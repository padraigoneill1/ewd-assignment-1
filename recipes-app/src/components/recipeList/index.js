import React, { Component } from 'react';
import Recipe from '../recipe'
import './recipeList.css'

const RecipeList = (
  {
    recipes,
  },
) => {
  let displayedRecipes =  recipes.map( 
      (recipe) => <Recipe key={recipe.id} recipe={recipe } />
   ) ; 
  return (
    <div className="col-md-10">
      <ul className="recipes">
          {displayedRecipes}
      </ul>
    </div>
  ) ;
};

export default RecipeList