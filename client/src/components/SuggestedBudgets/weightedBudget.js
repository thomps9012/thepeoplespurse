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
        this.setState({ bracket1 });
        console.log(bracket1);

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
        for (var i = 0; i < bracket1.length; i++) {

          //pushes the dept values to arrays
          agriculture.push(bracket1[i].agriculture);
          commerce.push(bracket1[i].commerce);
          communicate.push(bracket1[i].communication)
          defense.push(bracket1[i].defense)
          education.push(bracket1[i].education)
          election.push(bracket1[i].election)
          energy.push(bracket1[i].energy)
          environmental_protection.push(bracket1[i].environmental_protection)
          equal_employment.push(bracket1[i].equal_employment)
          health_human_services.push(bracket1[i].health_human_services)
          homeland_security.push(bracket1[i].homeland_security)
          housing.push(bracket1[i].housing_urban_development)
          interior.push(bracket1[i].interior)
          justice.push(bracket1[i].justice)
          labor.push(bracket1[i].labor)
          nasa.push(bracket1[i].nasa)
          social.push(bracket1[i].social)
          state.push(bracket1[i].state)
          trade.push(bracket1[i].trade)
          transportation.push(bracket1[i].transportation)
          treasury.push(bracket1[i].treasury)
          veterans_affairs.push(bracket1[i].veterans_affairs)
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
        const agAvg = agTotal / bracket1.length
        const commerceAvg = commerceTotal / bracket1.length
        const communicateAvg = communicateTotal / bracket1.length
        const defenseAvg = defenseTotal / bracket1.length
        const educationAvg = educationTotal / bracket1.length
        const electionAvg = electionTotal / bracket1.length
        const energyAvg = energyTotal / bracket1.length
        const environmental_protectionAvg = environmental_protectionTotal / bracket1.length
        const equal_employmentAvg = equal_employmentTotal / bracket1.length
        const health_human_servicesAvg = health_human_servicesTotal / bracket1.length
        const homeland_securityAvg = homeland_securityTotal / bracket1.length
        const housingAvg = housingTotal / bracket1.length
        const interiorAvg = interiorTotal / bracket1.length
        const justiceAvg = justiceTotal / bracket1.length
        const laborAvg = laborTotal / bracket1.length
        const nasaAvg = nasaTotal / bracket1.length
        const socialAvg = socialTotal / bracket1.length
        const stateAvg = stateTotal / bracket1.length
        const tradeAvg = tradeTotal / bracket1.length
        const transportationAvg = transportationTotal / bracket1.length
        const treasuryAvg = treasuryTotal / bracket1.length
        const veterans_affairsAvg = veterans_affairsTotal / bracket1.length

        //pushing arrays to state so they can be used in our chart
        const newArr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
        console.log(newArr)
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
