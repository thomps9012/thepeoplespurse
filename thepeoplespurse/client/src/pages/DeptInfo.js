import React from 'react';
import DeptDropdown from "../components/DeptDropdown/DeptDropdown.js";
import "../assets/styles/departInfo.css";
import library from "../assets/images/library.png";

const DeptInfo = () => {
  return (
    <main className="deptInfo">
      <section className="intro" >
        <h1>Agency Knowledge Center</h1>
        <p>We understand that you might feel the need for more information before you are ready to vote for your agency spending budget. The below guide can be used to give you more information for each specific agency.  </p>
      </section>

      <section className="agencyInfo">
        <img alt="test" src={library} />
        <DeptDropdown />
      </section>
    </main>
  );
};

export default DeptInfo;
