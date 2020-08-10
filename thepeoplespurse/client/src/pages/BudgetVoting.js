import React from "react";
import "../assets/styles/budgetVoting.css";
import TaxBrackets from "../components/TaxBrackets/TaxBrackets.js";
import BudgetSliders from "../components/RangeSliders/RangeSliders.js"
import VoteBtn from "../components/VoteBtn/VoteBtn";

const BudgetVoting = () => {
  return (
    <main className="voting">
      <TaxBrackets />
      <div className="sliders">
        <BudgetSliders />
      </div>
      <VoteBtn />

    </main>

  );
};

export default BudgetVoting;
