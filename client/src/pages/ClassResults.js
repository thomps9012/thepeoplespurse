import React, { Component } from "react";
import UnweightedBudget from "../components/ClassBudgets/unweightedClassBudget.js";
import WeightedBudget from "../components/ClassBudgets/weightedClassBudget.js";
import NavTabs from "../components/ClassBudgets/ClassBudgetTabs.js";
import "../assets/styles/budgetResults.css";


class ClassResults extends Component {
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
          <h1>Class Data</h1>
          <p>Below are the unique results from your classroom!</p>
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

export default ClassResults;