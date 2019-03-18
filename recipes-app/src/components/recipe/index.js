import React , { Component } from 'react';
  import './recipe.css';
  import { Link } from 'react-router-dom';
  import api from '../../dataStore/stubAPI';


  export default class Recipe extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.recipe.id);
    render(){
          
          return (
              <li className="thumbnail recipe_item">
                  <Link to={`/recipes/${this.props.recipe.id}`} className="thumb">
                      <img src={`recipeDetails/${this.props.recipe.imageUrl}`} alt={this.props.recipe.name} /> 
                  </Link>
                   <span className="glyphicon glyphicon-thumbs-up ptr" onClick={this.handleVote}/>
                {this.props.recipe.upvotes}
                    
             
                  <Link to={`/recipes/${this.props.recipe.id}`}> {this.props.recipe.name}</Link>
                  
                  <p>{this.props.recipe.snippet}</p>
              </li>
              
          ) ;
    }
}