import React, { Component } from 'react';
import axios from 'axios';
import "./VoteBtn.css";

class VoteBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {


    if (document.querySelector(".active")) {
      let taxBracket = parseInt(document.querySelector(".active").id);
      console.log(taxBracket);
     
    }
    else {
      alert("Slow your horses there, let's make sure to select a tax bracket first")
      return;

    }
    
    
    let agriculture = parseInt(document.querySelector("#DoA > input[type=hidden]").value);
    let commerce = parseInt(document.querySelector("#DoC > input[type=hidden]").value);
    let defense = parseInt(document.querySelector("#DoD > input[type=hidden]").value);
    let energy = parseInt(document.querySelector("#DoE > input[type=hidden]").value);
    let education = parseInt(document.querySelector("#DoEd > input[type=hidden]").value);
    let health_human_services = parseInt(document.querySelector("#DoHHS > input[type=hidden]").value);
    let homeland_security = parseInt(document.querySelector("#DoHS > input[type=hidden]").value);
    let interior = parseInt(document.querySelector("#DoI > input[type=hidden]").value);
    let labor = parseInt(document.querySelector("#DoL > input[type=hidden]").value);
    let state = parseInt(document.querySelector("#DoS > input[type=hidden]").value);
    let transportation = parseInt(document.querySelector("#DoT > input[type=hidden]").value);
    let treasury = parseInt(document.querySelector("#DoTr > input[type=hidden]").value);
    let environmental_protection = parseInt(document.querySelector("#EPA > input[type=hidden]").value);
    let communication = parseInt(document.querySelector("#FCC > input[type=hidden]").value);
    let election = parseInt(document.querySelector("#FEC > input[type=hidden]").value);
    let trade = parseInt(document.querySelector("#FTC > input[type=hidden]").value);
    let housing_urban_development = parseInt(document.querySelector("#HUD > input[type=hidden]").value);
    let social = parseInt(document.querySelector("#SS > input[type=hidden]").value);
    let justice = parseInt(document.querySelector("#DoJ > input[type=hidden]").value);
    let nasa = parseInt(document.querySelector("#NASA > input[type=hidden]").value);
    let veterans = parseInt(document.querySelector("#DoVA > input[type=hidden]").value);
    let equal_employment = parseInt(document.querySelector("#EOEC > input[type=hidden]").value);

    var depts = [];
    depts.push(agriculture, commerce, communication, defense, education, election, energy, environmental_protection, equal_employment, health_human_services, homeland_security, housing_urban_development, interior, justice, labor, nasa, social, state, trade, transportation, treasury, veterans);


    if (((depts.reduce((a, b) => a + b, 0)) <= 100) && (document.querySelector(".active"))) {
      console.log(depts);
      let taxBracket = parseInt(document.querySelector(".active").id);
      axios.post("/api/vote", { depts })
        .then(data => console.log(data));
      
        axios.post("/api/voter", { taxBracket })
        .then(data => console.log(data));
        
    } else {
      const over = depts.reduce((a, b) => a + b, 0) - 100;

      alert("Holy guacamole your budget is over by " + over)
      return;

    }
    if(((depts.reduce((a, b) => a + b, 0)) <= 100) && (document.querySelector(".active")) ){
      document.location.href='/BudgetResults'
    };
    
  }
  render() {
    return (
      <div>
        <button type="button" className="voteBtn" onClick={this.handleClick}>Submit My Vote</button>
      </div>
    )
  }
}


export default VoteBtn;