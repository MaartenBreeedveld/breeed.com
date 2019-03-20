import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation" >
            <div className="hamburger-menu">
              <i className="material-icons">menu</i>
            </div>
            <h1 className="title-small">Demo Page</h1>
            <h1 className="title">Cool Furniture Demo Page</h1>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;