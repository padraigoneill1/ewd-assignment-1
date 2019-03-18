import React , { Component } from 'react';
import RecipeList from './components/recipeList'
import SelectControls  from './components/selectControls' ;
import api from './dataStore/stubAPI';
import _ from 'lodash';

class App extends Component {
    state = { search: '', sort: 'name' };
    handleChange = (type, value) => {
        type === 'search' ?
            this.setState( { search: value } ) :
            this.setState( { sort: value } ) ;
    };
    incrementUpvote = (id) => {
        api.upvote(id) ;
        this.setState({});
    };

    render() {

        let recipes = _.sortBy(api.getAll()).filter(
            (r) => 
            r.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1 
        );
      
        let filteredList = _.sortBy(recipes, this.state.sort,(recipe) => - recipe.upvotes) ;
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