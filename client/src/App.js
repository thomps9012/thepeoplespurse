import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import BudgetResults from "./pages/BudgetResults";
import BudgetVoting from "./pages/BudgetVoting";
import DeptInfo from "./pages/DeptInfo";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer";
import runtimeEnv from '@mars/heroku-js-runtime-env';


function App() {
  const env = runtimeEnv();
  
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/BudgetResults" component={BudgetResults} />
      <Route exact path="/BudgetVoting" component={BudgetVoting} />
      <Route exact path="/DeptInfo" component={DeptInfo} />
      <Footer></Footer>
    </Router>
  );
}

export default App;
