import React, { Component } from 'react';
import "./TaxBrackets.css";

class TaxBrackets extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            tax_bracket_count: '',
        }
    }
    handleClick(event) {
        const id = event.target.id;
        const allBrackets = document.querySelectorAll(".btn");
        const selected = document.getElementById(id);
        for (var i = 0; i < allBrackets.length; i++) {
            allBrackets[i].classList.remove('active')
        }
        selected.classList.add("active");

    }
    render() {
        return (
            <div className="taxBracket">
                <h1 className="tax-title">Please select your tax bracket to vote!</h1>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="1">Up to $19,750</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="2">$19,751 to $80,250</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="3">$80,251 to $171,050</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="4">$171,051 to $326,600</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="5">$326,601 to $414,700</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="6">$414,701 to $622,050</button>
                <button type="button" className="btn btn-lg tax" onClick={this.handleClick} id="7">Over $622,050</button>
                <h2 className="directions">Slide to select the percentage of the budget you feel each department should receive. Your total must equal 100. </h2>
            </div>
        )
    }
}

export default TaxBrackets;

