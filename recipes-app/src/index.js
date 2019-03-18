import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RecipeDetail from './components/recipeDetail'
import Header from './components/header'
import Footer from './components/footer'
//import Register from './components/register'


class About extends Component { 
    render() {  
        return ( 
            <div> 
                <h1>About this project</h1>
                <h4>Single page app designed for Enterprise Web Development Module</h4>
            </div>
        )
    }
}

class Contact extends Component { 
    render() {  
        return  <h2>Contact me on my <a href="https://github.com/padraigoneill1/">Github</a> </h2>
    }
}

const Router = props => {  
   return ( 
    <BrowserRouter>
     <div>
                <Header/>
        <div className="jumbotron">
            <Switch>
                <Route path='/recipes/:id' component={ RecipeDetail } />
                <Route exact path='/' component={ App } />
                
                <Route path='/contact' component={ Contact } />
                <Route path='/about' component={ About } />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
        <Footer />
              </div>
    </BrowserRouter>
);
};

ReactDOM.render(<Router />, document.getElementById('root'));