import React , { Component } from 'react';
import Recipes from  './Data';
import RecipeList from './components/recipeList'
import SelectControls  from './components/selectControls' ;
import Header from './components/header'
import _ from 'lodash';

class App extends Component {
    state = { search: '', sort: 'name' };
    handleChange = (type, value) => {
        type === 'search' ?
            this.setState( { search: value } ) :
            this.setState( { sort: value } ) ;
    };

    render() {
        let list = Recipes.filter( 
            (r) => 
            r.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1 
        );
        let filteredList = _.sortBy(list, this.state.sort) ;
        return (
            <div className="row">
                <SelectControls onUserInput={this.handleChange } 
                    filterText={this.state.search} 
                    sort={this.state.sort} />
                <RecipeList recipes={filteredList} />
            </div> 
        );
    }
  }
export default App;