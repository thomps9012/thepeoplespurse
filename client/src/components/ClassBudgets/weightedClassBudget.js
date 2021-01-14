import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./suggestedBudgets.css";
import axios from "axios";


export default class WeightedBudget extends React.Component {
  state = {
    datasets: [{
      data: [7, 10, 20, 20, 30, 30, 10, 7, 10, 20, 20, 30, 30, 10, 7, 10, 20, 20, 30, 3, 2, 1, 1],
      backgroundColor: [
        "#124E73",
        "#176FA6",
        "#11A8BD",
        "#10B39A",
        "#08C976",

        "#F9F03E",
        "#F2C849",
        "#F2B138",
        "#F9A23E",
        "#F29829",

        "#124E73",
        "#176FA6",
        "#11A8BD",
        "#10B39A",
        "#08C976",

        "#F9F03E",
        "#F2C849",
        "#F2B138",
        "#F9A23E",
        "#F29829",

        "#124E73",
        "#176FA6",
        "#11A8BD",
        "#10B39A",
        "#08C976",

        "#F9F03E",
        "#F2C849",
        "#F2B138",
        "#F9A23E",
        "#F29829"
      ],
    }],
    borderColor: [
      'rgba(57, 249, 202)'
    ],
    borderWidth: 1,
    labels: ['Dept of Agriculture', 'Dept of Commerce', 'Federal Communication Commission', 'Dept of Defense', 'Dept of Education', 'Federal Elections Commission', 'Dept of Energy', 'Environmental Protection Agency', 'Equal Opportunity Employment Commission', 'Dept of Health and Human Services', 'Dept of Homeland Security', 'Dept of Housing & Urban Development', 'Dept of the Interior', 'Dept of Justice', 'Dept of Labor', 'National Aeronautics and Space Administration ', 'Dept of Social Security', 'Dept of State', 'Federal Trade Commission', 'Dept of Transportation', 'Dept of the Treasury', 'Dept of Veterans Affairs']
  }

  componentDidMount() {
    
    //api call for weighted budget votes
    axios.get('/api/bracket1/get')
      .then(res => {
        const bracket1 = res.data;
        

        console.log(bracket1);

        

      })
  }

  render() {
    return (
      <div className="suggestedSpending-weighted">
        <Doughnut
          data={this.state}
          options={{
            title: {
              display: true,
              text: 'Weighted Budget',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            tooltips: {
              intersect: false,
            },

            animation: {
              animateScale: true,
              animateRotate: true
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 10
              }
            }
          }}
        />
      </div>
    );
  }
}
