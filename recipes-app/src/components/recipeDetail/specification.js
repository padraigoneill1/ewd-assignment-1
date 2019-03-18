import React from 'react'
import './recipeDetail.css'

export default  ({recipe}) => {
    let ingredients = recipe.ingredients.map(
        (avb,index) => <dd key={index}>{avb}</dd>
    ) 
    let directions = recipe.directions.map(
        (dim,index) => <dd key={index}>{dim}</dd> 
    ) 
    return (
      <div>
          <ul className="specs">
              <li >
                  <span>Ingredients</span>
                  <dl>
                          {ingredients}
                  </dl>
              </li>
              <li>
                  <span>Time</span>
                  <dl>
                      <dt>Prep Time</dt>
                      <dd>{recipe.time.prepTime}</dd>
                      <dt>Cook Time</dt>
                      <dd>{recipe.time.cookTime}</dd>
                      <dt>Ready time</dt>
                      <dd>{recipe.time.readyTime}</dd>
                  </dl>
              </li> 
              <li>
                  <span>Directions</span>
                  <dl>
                          {directions}
                  </dl>
              </li>
              
              </ul>            
            </div>
        )
}
