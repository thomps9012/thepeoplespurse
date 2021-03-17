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
    // api call for getting taxbracket1 budget votes
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
        const bracket1Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
        console.log(bracket1Arr)

        //api call for weighted taxbracket2 budget votes
        axios.get('/api/bracket2/get')
          .then(res => {
            const bracket2 = res.data;
            this.setState({ bracket2 });
            console.log(bracket2);

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
            for (var i = 0; i < bracket2.length; i++) {

              //pushes the dept values to arrays
              agriculture.push(bracket2[i].agriculture);
              commerce.push(bracket2[i].commerce);
              communicate.push(bracket2[i].communication)
              defense.push(bracket2[i].defense)
              education.push(bracket2[i].education)
              election.push(bracket2[i].election)
              energy.push(bracket2[i].energy)
              environmental_protection.push(bracket2[i].environmental_protection)
              equal_employment.push(bracket2[i].equal_employment)
              health_human_services.push(bracket2[i].health_human_services)
              homeland_security.push(bracket2[i].homeland_security)
              housing.push(bracket2[i].housing_urban_development)
              interior.push(bracket2[i].interior)
              justice.push(bracket2[i].justice)
              labor.push(bracket2[i].labor)
              nasa.push(bracket2[i].nasa)
              social.push(bracket2[i].social)
              state.push(bracket2[i].state)
              trade.push(bracket2[i].trade)
              transportation.push(bracket2[i].transportation)
              treasury.push(bracket2[i].treasury)
              veterans_affairs.push(bracket2[i].veterans_affairs)
            }

            //totals the dept values 
            const agTotal = 2 * (agriculture.reduce((a, b) => a + b, 0))
            const commerceTotal = 2 * (commerce.reduce((a, b) => a + b, 0))
            const communicateTotal = 2 * (communicate.reduce((a, b) => a + b, 0))
            const defenseTotal = 2 * (defense.reduce((a, b) => a + b, 0))
            const educationTotal = 2 * (education.reduce((a, b) => a + b, 0))
            const electionTotal = 2 * (election.reduce((a, b) => a + b, 0))
            const energyTotal = 2 * (energy.reduce((a, b) => a + b, 0))
            const environmental_protectionTotal = 2 * (environmental_protection.reduce((a, b) => a + b, 0))
            const equal_employmentTotal = 2 * (equal_employment.reduce((a, b) => a + b, 0))
            const health_human_servicesTotal = 2 * (health_human_services.reduce((a, b) => a + b, 0))
            const homeland_securityTotal = 2 * (homeland_security.reduce((a, b) => a + b, 0))
            const housingTotal = 2 * (housing.reduce((a, b) => a + b, 0))
            const interiorTotal = 2 * (interior.reduce((a, b) => a + b, 0))
            const justiceTotal = 2 * (justice.reduce((a, b) => a + b, 0))
            const laborTotal = 2 * (labor.reduce((a, b) => a + b, 0))
            const nasaTotal = 2 * (nasa.reduce((a, b) => a + b, 0))
            const socialTotal = 2 * (social.reduce((a, b) => a + b, 0))
            const stateTotal = 2 * (state.reduce((a, b) => a + b, 0))
            const tradeTotal = 2 * (trade.reduce((a, b) => a + b, 0))
            const transportationTotal = 2 * (transportation.reduce((a, b) => a + b, 0))
            const treasuryTotal = 2 * (treasury.reduce((a, b) => a + b, 0))
            const veterans_affairsTotal = 2 * (veterans_affairs.reduce((a, b) => a + b, 0))

            //averages out the dept totals based on vote counts
            const agAvg = agTotal / bracket2.length
            const commerceAvg = commerceTotal / bracket2.length
            const communicateAvg = communicateTotal / bracket2.length
            const defenseAvg = defenseTotal / bracket2.length
            const educationAvg = educationTotal / bracket2.length
            const electionAvg = electionTotal / bracket2.length
            const energyAvg = energyTotal / bracket2.length
            const environmental_protectionAvg = environmental_protectionTotal / bracket2.length
            const equal_employmentAvg = equal_employmentTotal / bracket2.length
            const health_human_servicesAvg = health_human_servicesTotal / bracket2.length
            const homeland_securityAvg = homeland_securityTotal / bracket2.length
            const housingAvg = housingTotal / bracket2.length
            const interiorAvg = interiorTotal / bracket2.length
            const justiceAvg = justiceTotal / bracket2.length
            const laborAvg = laborTotal / bracket2.length
            const nasaAvg = nasaTotal / bracket2.length
            const socialAvg = socialTotal / bracket2.length
            const stateAvg = stateTotal / bracket2.length
            const tradeAvg = tradeTotal / bracket2.length
            const transportationAvg = transportationTotal / bracket2.length
            const treasuryAvg = treasuryTotal / bracket2.length
            const veterans_affairsAvg = veterans_affairsTotal / bracket2.length

            //pushing arrays to state so they can be used in our chart
            const bracket2Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
            console.log(bracket2Arr)

            // axios call and array creation for bracket 3
            axios.get('/api/bracket3/get')
              .then(res => {
                const bracket3 = res.data;
                this.setState({ bracket3 });
                console.log(bracket3);

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
                for (var i = 0; i < bracket3.length; i++) {

                  //pushes the dept values to arrays
                  agriculture.push(bracket3[i].agriculture);
                  commerce.push(bracket3[i].commerce);
                  communicate.push(bracket3[i].communication)
                  defense.push(bracket3[i].defense)
                  education.push(bracket3[i].education)
                  election.push(bracket3[i].election)
                  energy.push(bracket3[i].energy)
                  environmental_protection.push(bracket3[i].environmental_protection)
                  equal_employment.push(bracket3[i].equal_employment)
                  health_human_services.push(bracket3[i].health_human_services)
                  homeland_security.push(bracket3[i].homeland_security)
                  housing.push(bracket3[i].housing_urban_development)
                  interior.push(bracket3[i].interior)
                  justice.push(bracket3[i].justice)
                  labor.push(bracket3[i].labor)
                  nasa.push(bracket3[i].nasa)
                  social.push(bracket3[i].social)
                  state.push(bracket3[i].state)
                  trade.push(bracket3[i].trade)
                  transportation.push(bracket3[i].transportation)
                  treasury.push(bracket3[i].treasury)
                  veterans_affairs.push(bracket3[i].veterans_affairs)
                }

                //totals the dept values 
                const agTotal = 3 * (agriculture.reduce((a, b) => a + b, 0))
                const commerceTotal = 3 * (commerce.reduce((a, b) => a + b, 0))
                const communicateTotal = 3 * (communicate.reduce((a, b) => a + b, 0))
                const defenseTotal = 3 * (defense.reduce((a, b) => a + b, 0))
                const educationTotal = 3 * (education.reduce((a, b) => a + b, 0))
                const electionTotal = 3 * (election.reduce((a, b) => a + b, 0))
                const energyTotal = 3 * (energy.reduce((a, b) => a + b, 0))
                const environmental_protectionTotal = 3 * (environmental_protection.reduce((a, b) => a + b, 0))
                const equal_employmentTotal = 3 * (equal_employment.reduce((a, b) => a + b, 0))
                const health_human_servicesTotal = 3 * (health_human_services.reduce((a, b) => a + b, 0))
                const homeland_securityTotal = 3 * (homeland_security.reduce((a, b) => a + b, 0))
                const housingTotal = 3 * (housing.reduce((a, b) => a + b, 0))
                const interiorTotal = 3 * (interior.reduce((a, b) => a + b, 0))
                const justiceTotal = 3 * (justice.reduce((a, b) => a + b, 0))
                const laborTotal = 3 * (labor.reduce((a, b) => a + b, 0))
                const nasaTotal = 3 * (nasa.reduce((a, b) => a + b, 0))
                const socialTotal = 3 * (social.reduce((a, b) => a + b, 0))
                const stateTotal = 3 * (state.reduce((a, b) => a + b, 0))
                const tradeTotal = 3 * (trade.reduce((a, b) => a + b, 0))
                const transportationTotal = 3 * (transportation.reduce((a, b) => a + b, 0))
                const treasuryTotal = 3 * (treasury.reduce((a, b) => a + b, 0))
                const veterans_affairsTotal = 3 * (veterans_affairs.reduce((a, b) => a + b, 0))

                //averages out the dept totals based on vote counts
                const agAvg = agTotal / bracket3.length
                const commerceAvg = commerceTotal / bracket3.length
                const communicateAvg = communicateTotal / bracket3.length
                const defenseAvg = defenseTotal / bracket3.length
                const educationAvg = educationTotal / bracket3.length
                const electionAvg = electionTotal / bracket3.length
                const energyAvg = energyTotal / bracket3.length
                const environmental_protectionAvg = environmental_protectionTotal / bracket3.length
                const equal_employmentAvg = equal_employmentTotal / bracket3.length
                const health_human_servicesAvg = health_human_servicesTotal / bracket3.length
                const homeland_securityAvg = homeland_securityTotal / bracket3.length
                const housingAvg = housingTotal / bracket3.length
                const interiorAvg = interiorTotal / bracket3.length
                const justiceAvg = justiceTotal / bracket3.length
                const laborAvg = laborTotal / bracket3.length
                const nasaAvg = nasaTotal / bracket3.length
                const socialAvg = socialTotal / bracket3.length
                const stateAvg = stateTotal / bracket3.length
                const tradeAvg = tradeTotal / bracket3.length
                const transportationAvg = transportationTotal / bracket3.length
                const treasuryAvg = treasuryTotal / bracket3.length
                const veterans_affairsAvg = veterans_affairsTotal / bracket3.length

                //pushing arrays to state so they can be used in our chart
                const bracket3Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
                console.log(bracket3Arr)

                // api call for getting tax bracket4
            axios.get('/api/bracket4/get')
            .then(res => {
              const bracket4 = res.data;
              this.setState({ bracket4 });
              console.log(bracket4);

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
              for (var i = 0; i < bracket4.length; i++) {

                //pushes the dept values to arrays
                agriculture.push(bracket4[i].agriculture);
                commerce.push(bracket4[i].commerce);
                communicate.push(bracket4[i].communication)
                defense.push(bracket4[i].defense)
                education.push(bracket4[i].education)
                election.push(bracket4[i].election)
                energy.push(bracket4[i].energy)
                environmental_protection.push(bracket4[i].environmental_protection)
                equal_employment.push(bracket4[i].equal_employment)
                health_human_services.push(bracket4[i].health_human_services)
                homeland_security.push(bracket4[i].homeland_security)
                housing.push(bracket4[i].housing_urban_development)
                interior.push(bracket4[i].interior)
                justice.push(bracket4[i].justice)
                labor.push(bracket4[i].labor)
                nasa.push(bracket4[i].nasa)
                social.push(bracket4[i].social)
                state.push(bracket4[i].state)
                trade.push(bracket4[i].trade)
                transportation.push(bracket4[i].transportation)
                treasury.push(bracket4[i].treasury)
                veterans_affairs.push(bracket4[i].veterans_affairs)
              }

              //totals the dept values 
              const agTotal = 4 * (agriculture.reduce((a, b) => a + b, 0))
              const commerceTotal = 4 * (commerce.reduce((a, b) => a + b, 0))
              const communicateTotal = 4 * (communicate.reduce((a, b) => a + b, 0))
              const defenseTotal = 4 * (defense.reduce((a, b) => a + b, 0))
              const educationTotal = 4 * (education.reduce((a, b) => a + b, 0))
              const electionTotal = 4 * (election.reduce((a, b) => a + b, 0))
              const energyTotal = 4 * (energy.reduce((a, b) => a + b, 0))
              const environmental_protectionTotal = 4 * (environmental_protection.reduce((a, b) => a + b, 0))
              const equal_employmentTotal = 4 * (equal_employment.reduce((a, b) => a + b, 0))
              const health_human_servicesTotal = 4 * (health_human_services.reduce((a, b) => a + b, 0))
              const homeland_securityTotal = 4 * (homeland_security.reduce((a, b) => a + b, 0))
              const housingTotal = 4 * (housing.reduce((a, b) => a + b, 0))
              const interiorTotal = 4 * (interior.reduce((a, b) => a + b, 0))
              const justiceTotal = 4 * (justice.reduce((a, b) => a + b, 0))
              const laborTotal = 4 * (labor.reduce((a, b) => a + b, 0))
              const nasaTotal = 4 * (nasa.reduce((a, b) => a + b, 0))
              const socialTotal = 4 * (social.reduce((a, b) => a + b, 0))
              const stateTotal = 4 * (state.reduce((a, b) => a + b, 0))
              const tradeTotal = 4 * (trade.reduce((a, b) => a + b, 0))
              const transportationTotal = 4 * (transportation.reduce((a, b) => a + b, 0))
              const treasuryTotal = 4 * (treasury.reduce((a, b) => a + b, 0))
              const veterans_affairsTotal = 4 * (veterans_affairs.reduce((a, b) => a + b, 0))

              //averages out the dept totals based on vote counts
              const agAvg = agTotal / bracket4.length
              const commerceAvg = commerceTotal / bracket4.length
              const communicateAvg = communicateTotal / bracket4.length
              const defenseAvg = defenseTotal / bracket4.length
              const educationAvg = educationTotal / bracket4.length
              const electionAvg = electionTotal / bracket4.length
              const energyAvg = energyTotal / bracket4.length
              const environmental_protectionAvg = environmental_protectionTotal / bracket4.length
              const equal_employmentAvg = equal_employmentTotal / bracket4.length
              const health_human_servicesAvg = health_human_servicesTotal / bracket4.length
              const homeland_securityAvg = homeland_securityTotal / bracket4.length
              const housingAvg = housingTotal / bracket4.length
              const interiorAvg = interiorTotal / bracket4.length
              const justiceAvg = justiceTotal / bracket4.length
              const laborAvg = laborTotal / bracket4.length
              const nasaAvg = nasaTotal / bracket4.length
              const socialAvg = socialTotal / bracket4.length
              const stateAvg = stateTotal / bracket4.length
              const tradeAvg = tradeTotal / bracket4.length
              const transportationAvg = transportationTotal / bracket4.length
              const treasuryAvg = treasuryTotal / bracket4.length
              const veterans_affairsAvg = veterans_affairsTotal / bracket4.length

              //pushing arrays to state so they can be used in our chart
              const bracket4Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
              console.log(bracket4Arr)

              // api call for tax bracket 5
            axios.get('/api/bracket5/get')
            .then(res => {
              const bracket5 = res.data;
              this.setState({ bracket5 });
              console.log(bracket5);

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
              for (var i = 0; i < bracket5.length; i++) {

                //pushes the dept values to arrays
                agriculture.push(bracket5[i].agriculture);
                commerce.push(bracket5[i].commerce);
                communicate.push(bracket5[i].communication)
                defense.push(bracket5[i].defense)
                education.push(bracket5[i].education)
                election.push(bracket5[i].election)
                energy.push(bracket5[i].energy)
                environmental_protection.push(bracket5[i].environmental_protection)
                equal_employment.push(bracket5[i].equal_employment)
                health_human_services.push(bracket5[i].health_human_services)
                homeland_security.push(bracket5[i].homeland_security)
                housing.push(bracket5[i].housing_urban_development)
                interior.push(bracket5[i].interior)
                justice.push(bracket5[i].justice)
                labor.push(bracket5[i].labor)
                nasa.push(bracket5[i].nasa)
                social.push(bracket5[i].social)
                state.push(bracket5[i].state)
                trade.push(bracket5[i].trade)
                transportation.push(bracket5[i].transportation)
                treasury.push(bracket5[i].treasury)
                veterans_affairs.push(bracket5[i].veterans_affairs)
              }

              //totals the dept values 
              const agTotal = 5 * (agriculture.reduce((a, b) => a + b, 0))
              const commerceTotal = 5 * (commerce.reduce((a, b) => a + b, 0))
              const communicateTotal = 5 * (communicate.reduce((a, b) => a + b, 0))
              const defenseTotal = 5 * (defense.reduce((a, b) => a + b, 0))
              const educationTotal = 5 * (education.reduce((a, b) => a + b, 0))
              const electionTotal = 5 * (election.reduce((a, b) => a + b, 0))
              const energyTotal = 5 * (energy.reduce((a, b) => a + b, 0))
              const environmental_protectionTotal = 5 * (environmental_protection.reduce((a, b) => a + b, 0))
              const equal_employmentTotal = 5 * (equal_employment.reduce((a, b) => a + b, 0))
              const health_human_servicesTotal = 5 * (health_human_services.reduce((a, b) => a + b, 0))
              const homeland_securityTotal = 5 * (homeland_security.reduce((a, b) => a + b, 0))
              const housingTotal = 5 * (housing.reduce((a, b) => a + b, 0))
              const interiorTotal = 5 * (interior.reduce((a, b) => a + b, 0))
              const justiceTotal = 5 * (justice.reduce((a, b) => a + b, 0))
              const laborTotal = 5 * (labor.reduce((a, b) => a + b, 0))
              const nasaTotal = 5 * (nasa.reduce((a, b) => a + b, 0))
              const socialTotal = 5 * (social.reduce((a, b) => a + b, 0))
              const stateTotal = 5 * (state.reduce((a, b) => a + b, 0))
              const tradeTotal = 5 * (trade.reduce((a, b) => a + b, 0))
              const transportationTotal = 5 * (transportation.reduce((a, b) => a + b, 0))
              const treasuryTotal = 5 * (treasury.reduce((a, b) => a + b, 0))
              const veterans_affairsTotal = 5 * (veterans_affairs.reduce((a, b) => a + b, 0))

              //averages out the dept totals based on vote counts
              const agAvg = agTotal / bracket5.length
              const commerceAvg = commerceTotal / bracket5.length
              const communicateAvg = communicateTotal / bracket5.length
              const defenseAvg = defenseTotal / bracket5.length
              const educationAvg = educationTotal / bracket5.length
              const electionAvg = electionTotal / bracket5.length
              const energyAvg = energyTotal / bracket5.length
              const environmental_protectionAvg = environmental_protectionTotal / bracket5.length
              const equal_employmentAvg = equal_employmentTotal / bracket5.length
              const health_human_servicesAvg = health_human_servicesTotal / bracket5.length
              const homeland_securityAvg = homeland_securityTotal / bracket5.length
              const housingAvg = housingTotal / bracket5.length
              const interiorAvg = interiorTotal / bracket5.length
              const justiceAvg = justiceTotal / bracket5.length
              const laborAvg = laborTotal / bracket5.length
              const nasaAvg = nasaTotal / bracket5.length
              const socialAvg = socialTotal / bracket5.length
              const stateAvg = stateTotal / bracket5.length
              const tradeAvg = tradeTotal / bracket5.length
              const transportationAvg = transportationTotal / bracket5.length
              const treasuryAvg = treasuryTotal / bracket5.length
              const veterans_affairsAvg = veterans_affairsTotal / bracket5.length

              //pushing arrays to state so they can be used in our chart
              const bracket5Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
              console.log(bracket5Arr)

              // api call for tax bracket 6
            axios.get('/api/bracket6/get')
            .then(res => {
              const bracket6 = res.data;
              this.setState({ bracket6 });
              console.log(bracket6);

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
              for (var i = 0; i < bracket6.length; i++) {

                //pushes the dept values to arrays
                agriculture.push(bracket6[i].agriculture);
                commerce.push(bracket6[i].commerce);
                communicate.push(bracket6[i].communication)
                defense.push(bracket6[i].defense)
                education.push(bracket6[i].education)
                election.push(bracket6[i].election)
                energy.push(bracket6[i].energy)
                environmental_protection.push(bracket6[i].environmental_protection)
                equal_employment.push(bracket6[i].equal_employment)
                health_human_services.push(bracket6[i].health_human_services)
                homeland_security.push(bracket6[i].homeland_security)
                housing.push(bracket6[i].housing_urban_development)
                interior.push(bracket6[i].interior)
                justice.push(bracket6[i].justice)
                labor.push(bracket6[i].labor)
                nasa.push(bracket6[i].nasa)
                social.push(bracket6[i].social)
                state.push(bracket6[i].state)
                trade.push(bracket6[i].trade)
                transportation.push(bracket6[i].transportation)
                treasury.push(bracket6[i].treasury)
                veterans_affairs.push(bracket6[i].veterans_affairs)
              }

              //totals the dept values 
              const agTotal = 6 * (agriculture.reduce((a, b) => a + b, 0))
              const commerceTotal = 6 * (commerce.reduce((a, b) => a + b, 0))
              const communicateTotal = 6 * (communicate.reduce((a, b) => a + b, 0))
              const defenseTotal = 6 * (defense.reduce((a, b) => a + b, 0))
              const educationTotal = 6 * (education.reduce((a, b) => a + b, 0))
              const electionTotal = 6 * (election.reduce((a, b) => a + b, 0))
              const energyTotal = 6 * (energy.reduce((a, b) => a + b, 0))
              const environmental_protectionTotal = 6 * (environmental_protection.reduce((a, b) => a + b, 0))
              const equal_employmentTotal = 6 * (equal_employment.reduce((a, b) => a + b, 0))
              const health_human_servicesTotal = 6 * (health_human_services.reduce((a, b) => a + b, 0))
              const homeland_securityTotal = 6 * (homeland_security.reduce((a, b) => a + b, 0))
              const housingTotal = 6 * (housing.reduce((a, b) => a + b, 0))
              const interiorTotal = 6 * (interior.reduce((a, b) => a + b, 0))
              const justiceTotal = 6 * (justice.reduce((a, b) => a + b, 0))
              const laborTotal = 6 * (labor.reduce((a, b) => a + b, 0))
              const nasaTotal = 6 * (nasa.reduce((a, b) => a + b, 0))
              const socialTotal = 6 * (social.reduce((a, b) => a + b, 0))
              const stateTotal = 6 * (state.reduce((a, b) => a + b, 0))
              const tradeTotal = 6 * (trade.reduce((a, b) => a + b, 0))
              const transportationTotal = 6 * (transportation.reduce((a, b) => a + b, 0))
              const treasuryTotal = 6 * (treasury.reduce((a, b) => a + b, 0))
              const veterans_affairsTotal = 6 * (veterans_affairs.reduce((a, b) => a + b, 0))

              //averages out the dept totals based on vote counts
              const agAvg = agTotal / bracket6.length
              const commerceAvg = commerceTotal / bracket6.length
              const communicateAvg = communicateTotal / bracket6.length
              const defenseAvg = defenseTotal / bracket6.length
              const educationAvg = educationTotal / bracket6.length
              const electionAvg = electionTotal / bracket6.length
              const energyAvg = energyTotal / bracket6.length
              const environmental_protectionAvg = environmental_protectionTotal / bracket6.length
              const equal_employmentAvg = equal_employmentTotal / bracket6.length
              const health_human_servicesAvg = health_human_servicesTotal / bracket6.length
              const homeland_securityAvg = homeland_securityTotal / bracket6.length
              const housingAvg = housingTotal / bracket6.length
              const interiorAvg = interiorTotal / bracket6.length
              const justiceAvg = justiceTotal / bracket6.length
              const laborAvg = laborTotal / bracket6.length
              const nasaAvg = nasaTotal / bracket6.length
              const socialAvg = socialTotal / bracket6.length
              const stateAvg = stateTotal / bracket6.length
              const tradeAvg = tradeTotal / bracket6.length
              const transportationAvg = transportationTotal / bracket6.length
              const treasuryAvg = treasuryTotal / bracket6.length
              const veterans_affairsAvg = veterans_affairsTotal / bracket6.length

              //pushing arrays to state so they can be used in our chart
              const bracket6Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
              console.log(bracket6Arr)

              // api call for tax bracket 7
            axios.get('/api/bracket7/get')
            .then(res => {
              const bracket7 = res.data;
              this.setState({ bracket7 });
              console.log(bracket7);

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
              for (var i = 0; i < bracket7.length; i++) {

                //pushes the dept values to arrays
                agriculture.push(bracket7[i].agriculture);
                commerce.push(bracket7[i].commerce);
                communicate.push(bracket7[i].communication)
                defense.push(bracket7[i].defense)
                education.push(bracket7[i].education)
                election.push(bracket7[i].election)
                energy.push(bracket7[i].energy)
                environmental_protection.push(bracket7[i].environmental_protection)
                equal_employment.push(bracket7[i].equal_employment)
                health_human_services.push(bracket7[i].health_human_services)
                homeland_security.push(bracket7[i].homeland_security)
                housing.push(bracket7[i].housing_urban_development)
                interior.push(bracket7[i].interior)
                justice.push(bracket7[i].justice)
                labor.push(bracket7[i].labor)
                nasa.push(bracket7[i].nasa)
                social.push(bracket7[i].social)
                state.push(bracket7[i].state)
                trade.push(bracket7[i].trade)
                transportation.push(bracket7[i].transportation)
                treasury.push(bracket7[i].treasury)
                veterans_affairs.push(bracket7[i].veterans_affairs)
              }

              //totals the dept values 
              const agTotal = 7 * (agriculture.reduce((a, b) => a + b, 0))
              const commerceTotal = 7 * (commerce.reduce((a, b) => a + b, 0))
              const communicateTotal = 7 * (communicate.reduce((a, b) => a + b, 0))
              const defenseTotal = 7 * (defense.reduce((a, b) => a + b, 0))
              const educationTotal = 7 * (education.reduce((a, b) => a + b, 0))
              const electionTotal = 7 * (election.reduce((a, b) => a + b, 0))
              const energyTotal = 7 * (energy.reduce((a, b) => a + b, 0))
              const environmental_protectionTotal = 7 * (environmental_protection.reduce((a, b) => a + b, 0))
              const equal_employmentTotal = 7 * (equal_employment.reduce((a, b) => a + b, 0))
              const health_human_servicesTotal = 7 * (health_human_services.reduce((a, b) => a + b, 0))
              const homeland_securityTotal = 7 * (homeland_security.reduce((a, b) => a + b, 0))
              const housingTotal = 7 * (housing.reduce((a, b) => a + b, 0))
              const interiorTotal = 7 * (interior.reduce((a, b) => a + b, 0))
              const justiceTotal = 7 * (justice.reduce((a, b) => a + b, 0))
              const laborTotal = 7 * (labor.reduce((a, b) => a + b, 0))
              const nasaTotal = 7 * (nasa.reduce((a, b) => a + b, 0))
              const socialTotal = 7 * (social.reduce((a, b) => a + b, 0))
              const stateTotal = 7 * (state.reduce((a, b) => a + b, 0))
              const tradeTotal = 7 * (trade.reduce((a, b) => a + b, 0))
              const transportationTotal = 7 * (transportation.reduce((a, b) => a + b, 0))
              const treasuryTotal = 7 * (treasury.reduce((a, b) => a + b, 0))
              const veterans_affairsTotal = 7 * (veterans_affairs.reduce((a, b) => a + b, 0))

              //averages out the dept totals based on vote counts
              const agAvg = agTotal / bracket7.length
              const commerceAvg = commerceTotal / bracket7.length
              const communicateAvg = communicateTotal / bracket7.length
              const defenseAvg = defenseTotal / bracket7.length
              const educationAvg = educationTotal / bracket7.length
              const electionAvg = electionTotal / bracket7.length
              const energyAvg = energyTotal / bracket7.length
              const environmental_protectionAvg = environmental_protectionTotal / bracket7.length
              const equal_employmentAvg = equal_employmentTotal / bracket7.length
              const health_human_servicesAvg = health_human_servicesTotal / bracket7.length
              const homeland_securityAvg = homeland_securityTotal / bracket7.length
              const housingAvg = housingTotal / bracket7.length
              const interiorAvg = interiorTotal / bracket7.length
              const justiceAvg = justiceTotal / bracket7.length
              const laborAvg = laborTotal / bracket7.length
              const nasaAvg = nasaTotal / bracket7.length
              const socialAvg = socialTotal / bracket7.length
              const stateAvg = stateTotal / bracket7.length
              const tradeAvg = tradeTotal / bracket7.length
              const transportationAvg = transportationTotal / bracket7.length
              const treasuryAvg = treasuryTotal / bracket7.length
              const veterans_affairsAvg = veterans_affairsTotal / bracket7.length

              //pushing arrays to state so they can be used in our chart
              const bracket7Arr = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];
              console.log(bracket7Arr)

              // creates a new array where tax brackets are weighted to reflect their income distribution
              const newArr = []
              newArr.push(bracket1Arr,bracket2Arr,bracket3Arr,bracket4Arr,bracket5Arr,bracket7Arr)
              console.log(newArr)
                //updates the state with our new array of data
                this.setState({
                  datasets: [
                    {
                      data: bracket2Arr
                    }
                  ]
                })
              })
          })
      })
    })
  })
})
})
    }
  render() {
    return (
      <div className="suggestedSpending-weighted" >
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
