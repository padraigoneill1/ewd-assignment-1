import React, { Component } from 'react';
import Recipe from '../recipe'
import './recipeList.css'

export default class RecipeList extends Component {
    render() {
      let displayedRecipes =  this.props.recipes.map( 
          (recipe) => <Recipe key={recipe.id} recipe={recipe } />
       ) ; 
      return (
        <div className="col-md-10">
          <ul className="recipes">
              {displayedRecipes}
          </ul>
        </div>
      ) ;
  }
}
