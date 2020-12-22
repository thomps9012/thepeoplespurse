import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from '../../assets/images/logo-peoples-purse.png';

function Navbar() {
  return (

    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DeptInfo">Educational Information</Link></li>
          <li><Link to="/BudgetVoting">Voting</Link></li>
          <li><Link to="/BudgetResults">Proposed Budget</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;