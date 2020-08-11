import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
    return (
        <footer>
            <p>&copy; Copyright 2020 | Developed by
                <a className="portfolioLink" href="https://emvig-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">Erika Vigliucci</a>,
                <a className="portfolioLink" href="https://thomps9012.github.io/ThompsonPortfolio/" target="_blank" rel="noopener noreferrer">Samuel Thompson</a>,
                <a className="portfolioLink" href="https://www.linkedin.com/in/sarah-wise-903852116/" target="_blank" rel="noopener noreferrer">Sarah Wise</a>
                and <a className="portfolioLink" href="https://github.com/allenerich/react-portfolio.git" target="_blank" rel="noopener noreferrer">Erich Allen</a></p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/DeptInfo">Educational Information</Link></li>
                <li><Link to="/BudgetVoting">Voting</Link></li>
                <li><Link to="/BudgetResults">Proposed Budget</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;