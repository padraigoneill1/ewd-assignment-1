import React, { Component } from 'react';

 export default class SelectControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = (e) => {
        this.handleChange( e, 'search', e.target.value);
    };
    handleSortChange = (e) => {
        this.handleChange(e, 'sort', e.target.value);
    };

    render() {
        return (
            <div className="col-md-10">
                <input type="text" placeholder="Search" 
                    value={this.props.filterText}
                    onChange={this.handleTextChange} />
                <span> Sort by: </span>
                <select id="sort" value={this.props.order } 
                    onChange={this.handleSortChange} >
                    <option value="upvotes">Order by Votes</option>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                    
                </select>
            </div>
        );
    }
  }
