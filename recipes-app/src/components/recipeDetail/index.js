import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import localCache from '../../../src/localCache';
import request from 'superagent' ; 
import Details from './details'
import ImagesSection from './images'

class RecipeDetail extends Component {
    componentDidMount() {
        const url = `/recipeDetails/recipes/${this.props.match.params.id}.json`
        request.get( url, 
            (err, res) => {
              let json = JSON.parse(res.text);
              localCache.setRecipe(json);
              this.setState({});
            }) ;
    } 

    render(){
        let display = <p>No recipe details</p> ; 
        let recipe = localCache.getRecipe();
        if (recipe) {
            display =  
            <div>
                <ImagesSection recipe={recipe} />  
                <Details recipe={recipe} /> 
            </div> 
        }
        return (
            <div className="container-fluid">
              <div className="row">
                  <div className="col-md-10">
                      {display}
                  </div>
              </div>
            </div>
        );
    }
  }
export default withRouter(RecipeDetail);