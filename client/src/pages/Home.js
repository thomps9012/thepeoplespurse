import React from "react";
import "../assets/styles/home.css";
import PieChart from "../components/PieChart/PieChart";
import NonProfitBanner from '../components/NonProfitBanner/NonProfitBanner';
import Tile from "../components/Tile/Tile";

const Home = () => {
  return (
    <main>
      <NonProfitBanner />
      <section className="chartArea contentWrap">
        <h3>74% of the budget, or roughly 3.5 trillion dollars, belongs to the Departments of Defense, Social Security, Treasury, and Health & Human Services. The remaining 1.2 trillion is divided among the other independent executive agencies; this is illustrated in the provided chart.</h3>
        <PieChart></PieChart>
      </section>
      <div className="tiles contentWrap">

        <Tile
          classNames="tile blue"
          icon="icon-education"
          tileTitle="Educational Materials"
          tileText="Take a deeper dive into the different agency departments to learn about what they do."
          link="/DeptInfo"
          tileButton="Learn More"
        />

        <Tile
          classNames="tile yellow"
          icon="icon-vote"
          tileTitle="Vote"
          tileText="Are you ready to decide on your own personal budget breakdown? Go Vote!"
          link="/BudgetVoting"
          tileButton="Vote Now"
        />

        <Tile
          classNames="tile green"
          icon="icon-data"
          tileTitle="Data Results"
          tileText="Looking to view the collected voting results for the current fiscal year?"
          link="/BudgetResults"
          tileButton="View Data"
        />
      </div>
    </main >
  );
};

export default Home;
