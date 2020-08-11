import React from "react";
import "./SuggestedBudgetTabs.css";

function SuggestedBudgetTabs(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#UnweightedBudget"
                    onClick={() => props.handleChartChange("UnweightedBudget")}
                    className={props.currentChart === "UnweightedBudget" ? "nav-link active" : "nav-link"}
                >
                    Unweighted
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#WeightedBudget"
                    onClick={() => props.handleChartChange("WeightedBudget")}
                    className={props.currentChart === "WeightedBudget" ? "nav-link active" : "nav-link"}
                >
                    Weighted
            </a>
            </li>
        </ul>
    );
}

export default SuggestedBudgetTabs;
