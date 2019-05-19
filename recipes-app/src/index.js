import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RecipeDetail from './components/recipeDetail'
import Header from './components/header'
import Footer from './components/footer'


  class PrivateRoute extends Component {
    render() { 
      const { component: Component, ...rest } = this.props ;
      return ( 
        <Route { ...rest} render={ (props) =>  
           fakeAuth.isAuthenticated === true ?
             <Component {...props} />  :
             <Redirect to={
              {
                pathname: '/login',
                state: { from: this.props.location }
              }
            } /> 
  
           } 
         />
      )
    }
  }

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(username,cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

  class Login extends Component {
    state = {
      redirectToReferrer: false,
      username: null,
    }
    login = () => {
      fakeAuth.authenticate(
        this.state.username,
        () => {
          this.setState( {redirectToReferrer: true } )
      }  )
    }
    render() {
      const { redirectToReferrer } = this.state
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }
      return (
        <div>
          <h3>Login page</h3>
          <p>You must log in to view saved recipes </p>

        <form>
            <input type="text" id="login"  name="login" placeholder="login"/>
            <input type="text" id="password"  name="login" placeholder="password"/>
        </form>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    } 
  }

  class AuthButton extends Component {  
    render() {   
        const { history } = this.props
        return ( 
          fakeAuth.isAuthenticated ? 
            <p>
              Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
              }}>Sign out</button>
            </p>  : 
            <p>You are not logged in.</p>  
          )
        }
      }
  
  // const AuthButtonwithRouter = withRouter(AuthButton )

  class Saved extends Component {
    render() { 
       return ( 
        <div> 
            <h2>Your saved recipes</h2>
            <ul>
                <li><Link to="/recipes/tomato-chicken-parmesan">Tomato Chicken Parmesan</Link></li>
                <li><Link to="/recipes/filet-mignon-with-rich-balsamic-glaze">Filet Mignon</Link></li>
                <li><Link to="/recipes/breaded-chicken-fingers">Breaded Chicken Fingers</Link></li>
            </ul>
        </div>
    )
    }
 }

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
                <Route path='/login' component={ Login } />
                <PrivateRoute path='/saved' component={ Saved } />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
        <Footer />
    </div>
    </BrowserRouter>
);
};

ReactDOM.render(<Router />, document.getElementById('root'));