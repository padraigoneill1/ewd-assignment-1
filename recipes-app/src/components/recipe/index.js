import React from 'react';
  import './recipe.css';
  import { Link } from 'react-router-dom';

  const Recipe = ( props ) => {
          const { id, imageUrl, name, snippet } = props.recipe
          const fullImageURL = `recipeDetails/${imageUrl}`
          const path = `/recipes/${id}`
          return (
              <li className="thumbnail recipe_item">
                  <Link to={path} className="thumb">
                      <img src={fullImageURL} alt={name} /> 
                  </Link>
                  <Link to={path}> {name}</Link>
                  <p>{snippet}</p>
              </li>
          ) ;
  }

  export default Recipe