import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RecipeDetail from './components/recipeDetail'

 class Router extends Component {    //}= (props) => 
    render() {  
       return ( 
        <BrowserRouter>
            <div className="jumbotron">
               <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-10" >
                        <h1>Recipe App</h1>
                      </div>
                  </div>
                </div>
                <Switch>
                    <Route path='/recipes/:id' component={ RecipeDetail } />
                    <Route exact path='/' component={ App } />
                    <Redirect from='*' to='/' />
                </Switch>
            </div>
        </BrowserRouter>
  );
 }
}

ReactDOM.render(<Router />, document.getElementById('root'));