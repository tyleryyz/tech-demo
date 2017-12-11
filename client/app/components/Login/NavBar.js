import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/bulma.css';

class NavBar extends Component {
  render() {
    return (
			<nav className="navbar" aria-label="main navigation">
  			<div className="navbar-brand">
					<Link className="navbar-item" to="/">
      			Tech Demo Home
					</Link>
					<Link className="navbar-item" to="/helloworld">
      			Email Example
					</Link>
					<Link className="navbar-item" to="/signup">
      			Sign Up
					</Link>
					<Link className="navbar-item" to="/login">
      			Log In
					</Link>
					<Link className="navbar-item" to="/imageupload">
      			Image Upload
					</Link>
			    <button className="button navbar-burger">
			      <span></span>
			      <span></span>
			      <span></span>
			    </button>
  			</div>
			</nav>
    );
  }
}

export default NavBar;
