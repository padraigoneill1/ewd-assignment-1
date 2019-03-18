import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

class Footer extends Component {
    render() { 
      return ( 
            <footer className="footer">
                <nav>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </footer>
      )
    }
}
export default Footer; 