import React from 'react';
import axios from 'axios';
import "./ClassRetrieveBtn.css";
import { Link } from 'react-router-dom';
import { Component } from 'react';

class VoteBtn extends Component {

 
  render() {
    return (
      <div>
        
        <Link to="/ClassResults"><button type="button" className="classBtn">View Class Results</button></Link>
        
      </div>
    )
  }
}


export default VoteBtn;