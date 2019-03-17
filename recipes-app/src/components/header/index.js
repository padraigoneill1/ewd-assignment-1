import React , { Component } from 'react';

class Header extends Component {
  render() {
    let displayNumber = this.props.noRecipes
;
    return (
        <div className="row">
        <div className="col-md-10" >
            <div className="page-header">
              <h2>Recipes App<span className="badge"> {displayNumber}</span>
             </h2>
            </div>
          </div>
      </div>  
    ) ;
  }
}

export default Header;