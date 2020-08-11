import React, { Component } from "react";
import UnweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";
import WeightedBudget from "../components/SuggestedBudgets/weightedBudget.js";
import NavTabs from "../components/SuggestedBudgets/SuggestedBudgetTabs";
import "../assets/styles/budgetResults.css";


class BudgetResults extends Component {
  state = {
    currentChart: "UnweightedBudget"
  };

  

  handleChartChange = chart => {
    this.setState({ currentChart: chart });
  };

  renderChart = () => {
    if (this.state.currentChart === "UnweightedBudget") {
      return <UnweightedBudget />;
    } else {
      return <WeightedBudget />;
    }
  };


  render() {
    return (
      <main className="budgetResults">
        <section className="intro">
          <h1>Data Collection Center</h1>
          <p>Whenever the people are well informed, they can be trusted with their own government; that whenever things get so far wrong as to attract their notice, they may be relied on to set them to rights. </p>
          <br></br>
          <p>- Thomas Jefferson</p>
        </section>
        <section className="suggestedSpending">
          <div className="suggestedSpending-charts">
            <div>
              <NavTabs
                currentChart={this.state.currentChart}
                handleChartChange={this.handleChartChange}
              />
              {this.renderChart()}
            </div>
          </div>
        </section>
      </main>
    );
  };
};

export default BudgetResults;
