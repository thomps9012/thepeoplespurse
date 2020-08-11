import React from 'react';
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
          <li><a href="/">Home</a></li>
          <li><a href="/DeptInfo">Educational Information</a></li>
          <li><a href="/BudgetVoting">Voting</a></li>
          <li><a href="/BudgetResults">Proposed Budget</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;