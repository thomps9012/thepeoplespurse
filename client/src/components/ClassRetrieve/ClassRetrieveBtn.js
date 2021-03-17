import React from 'react';
import axios from 'axios';
import "./ClassRetrieveBtn.css";
import { Link } from 'react-router-dom';
import { Component } from 'react';

class VoteBtn extends Component {
handleClick(){
  let class_id = parseInt(document.querySelector("#classid").value);
  console.log(class_id);
}
 
  render() {
    return (
      <div>
        
        <Link to="/ClassResults"><button type="button" className="classBtn" onClick={this.handleClick}>View Class Results</button></Link>
        
      </div>
    )
  }
}


export default VoteBtn;