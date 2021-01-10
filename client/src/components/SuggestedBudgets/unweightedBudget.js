import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./suggestedBudgets.css";
import axios from "axios";


export default class UnweightedBudget extends React.Component {
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
    axios.get('/api/vote/get')
      .then(res => {
        const votes = res.data;
        this.setState({ votes });

        //data manipulation piece

        //defines each dept as an array
        const agriculture = [];
        const commerce = [];
        const communicate = [];
        const defense = [];
        const education = [];
        const election = [];
        const energy = [];
        const environmental_protection = [];
        const equal_employment = [];
        const health_human_services = [];
        const homeland_security = [];
        const housing = [];
        const interior = [];
        const justice = [];
        const labor = [];
        const nasa = [];
        const social = [];
        const state = [];
        const trade = [];
        const transportation = [];
        const treasury = [];
        const veterans_affairs = [];

        //for loop that grabs each of the values of depts
        for (var i = 0; i < votes.length; i++) {

          //pushes the dept values to arrays
          agriculture.push(votes[i].agriculture);
          commerce.push(votes[i].commerce);
          communicate.push(votes[i].communication)
          defense.push(votes[i].defense)
          education.push(votes[i].education)
          election.push(votes[i].election)
          energy.push(votes[i].energy)
          environmental_protection.push(votes[i].environmental_protection)
          equal_employment.push(votes[i].equal_employment)
          health_human_services.push(votes[i].health_human_services)
          homeland_security.push(votes[i].homeland_security)
          housing.push(votes[i].housing_urban_development)
          interior.push(votes[i].interior)
          justice.push(votes[i].justice)
          labor.push(votes[i].labor)
          nasa.push(votes[i].nasa)
          social.push(votes[i].social)
          state.push(votes[i].state)
          trade.push(votes[i].trade)
          transportation.push(votes[i].transportation)
          treasury.push(votes[i].treasury)
          veterans_affairs.push(votes[i].veterans_affairs)
        }

        //totals the dept values 
        const agTotal = agriculture.reduce((a, b) => a + b, 0)
        const commerceTotal = commerce.reduce((a, b) => a + b, 0)
        const communicateTotal = communicate.reduce((a, b) => a + b, 0)
        const defenseTotal = defense.reduce((a, b) => a + b, 0)
        const educationTotal = education.reduce((a, b) => a + b, 0)
        const electionTotal = election.reduce((a, b) => a + b, 0)
        const energyTotal = energy.reduce((a, b) => a + b, 0)
        const environmental_protectionTotal = environmental_protection.reduce((a, b) => a + b, 0)
        const equal_employmentTotal = equal_employment.reduce((a, b) => a + b, 0)
        const health_human_servicesTotal = health_human_services.reduce((a, b) => a + b, 0)
        const homeland_securityTotal = homeland_security.reduce((a, b) => a + b, 0)
        const housingTotal = housing.reduce((a, b) => a + b, 0)
        const interiorTotal = interior.reduce((a, b) => a + b, 0)
        const justiceTotal = justice.reduce((a, b) => a + b, 0)
        const laborTotal = labor.reduce((a, b) => a + b, 0)
        const nasaTotal = nasa.reduce((a, b) => a + b, 0)
        const socialTotal = social.reduce((a, b) => a + b, 0)
        const stateTotal = state.reduce((a, b) => a + b, 0)
        const tradeTotal = trade.reduce((a, b) => a + b, 0)
        const transportationTotal = transportation.reduce((a, b) => a + b, 0)
        const treasuryTotal = treasury.reduce((a, b) => a + b, 0)
        const veterans_affairsTotal = veterans_affairs.reduce((a, b) => a + b, 0)

        //averages out the dept totals based on vote counts
        const agAvg = agTotal / votes.length
        const commerceAvg = commerceTotal / votes.length
        const communicateAvg = communicateTotal / votes.length
        const defenseAvg = defenseTotal / votes.length
        const educationAvg = educationTotal / votes.length
        const electionAvg = electionTotal / votes.length
        const energyAvg = energyTotal / votes.length
        const environmental_protectionAvg = environmental_protectionTotal / votes.length
        const equal_employmentAvg = equal_employmentTotal / votes.length
        const health_human_servicesAvg = health_human_servicesTotal / votes.length
        const homeland_securityAvg = homeland_securityTotal / votes.length
        const housingAvg = housingTotal / votes.length
        const interiorAvg = interiorTotal / votes.length
        const justiceAvg = justiceTotal / votes.length
        const laborAvg = laborTotal / votes.length
        const nasaAvg = nasaTotal / votes.length
        const socialAvg = socialTotal / votes.length
        const stateAvg = stateTotal / votes.length
        const tradeAvg = tradeTotal / votes.length
        const transportationAvg = transportationTotal / votes.length
        const treasuryAvg = treasuryTotal / votes.length
        const veterans_affairsAvg = veterans_affairsTotal / votes.length

        //pushing arrays to state so they can be used in our chart
        const newArr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];

        //updates the state with our new array of data
        this.setState({
          datasets: [
            {
              data: newArr
            }
          ]
        })

      })
  }

  render() {
    return (
      <div className="suggestedSpending-unweighted">
        <Doughnut
          data={this.state}
          options={{
            title: {
              display: true,
              text: 'Unweighted Budget',
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
