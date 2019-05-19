import React , { Component } from 'react';
import RecipeList from './components/recipeList'
import SelectControls  from './components/selectControls' ;
// import api from './dataStore/stubAPI';
import * as api from './api';
import _ from 'lodash';

class App extends Component {
    state = { recipes: [{}], search: '', sort: 'name' };

    componentDidMount() {
        api.getAll().then(resp => {
            this.setState({
                recipes: resp.recipes
            });
        }).catch(console.error);
    };


    handleChange = (type, value) => {
        type === 'search' ?
            this.setState( { search: value } ) :
            this.setState( { sort: value } ) ;
    };
    incrementUpvote = (id) => {
        api.upvote(id).then(resp=> {
            var upvotedRecipe= _.find(this.state.recipes, recipe=>recipe.id == id);
            upvotedRecipe.upvotes++;  
            this.setState({})
          }) ;
    };

    render() {

        // let recipes = _.sortBy(api.getAll()).filter(
        //     (r) => 
        //     r.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1 
        // );

        const recipes = _.sortBy(this.state.recipes, recipe =>
            recipe.upvotes);
      
        let filteredList = recipes.reverse()

        // let test = filteredList.filter(
        //     (r) => 
        //     r.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1 
        // );
        

        // let filteredList = _.sortBy(this.state.recipes, this.state.sort,(recipe) =>  recipe.upvotes) ;
        return (
            <div className="row">
                <SelectControls onUserInput={this.handleChange } 
                    filterText={this.state.search} 
                    sort={this.state.sort} />
                <RecipeList recipes={filteredList}
                     upvoteHandler={this.incrementUpvote} 
                 />
            </div> 
        );
    }
  }
export default App;