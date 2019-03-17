import React from 'react';
import './recipeDetail.css'

export default  ({recipe} ) => { 
    let thumbImages = recipe.images.map((img,index) => 
        <li key={index}>
            <img key={index} src={"/recipeDetails/" + img} alt="not available"/>
        </li>
    );
    let mainImage = (
        <div className="recipe-images">
            <img src={"/recipeDetails/" + recipe.images[0]} 
                        alt={recipe.name} className="recipe" />
        </div>
        ) ;
    return (
        <div>
            {mainImage}
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <ul className="recipe-thumbs">{thumbImages}</ul>
        </div>
    );
  }