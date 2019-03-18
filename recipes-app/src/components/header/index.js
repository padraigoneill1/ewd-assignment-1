import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css'
class Header extends Component {
    render() { 
      return (
            <div className="navbar navbar-fixed-top navbar-inverse" >
                <div className="container">
                    <Link to="/" id="logo" >Recipe App Demo</Link>
                    <nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>       
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
      )
    }
}

export default Header;