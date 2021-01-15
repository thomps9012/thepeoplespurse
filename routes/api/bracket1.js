const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket1/get', (req, res) => {
    db.WeightedBudget.findAll({
        where: {
            tax_bracket: 1
        }
    })
        .then(votes => {

            res.json(votes)
            bracket1 = res
            console.log(bracket1)

            //     //data manipulation piece
            // this.setState({ bracket1 });
            // //defines each dept as an array
            // const agriculture = [];
            // const commerce = [];
            // const communicate = [];
            // const defense = [];
            // const education = [];
            // const election = [];
            // const energy = [];
            // const environmental_protection = [];
            // const equal_employment = [];
            // const health_human_services = [];
            // const homeland_security = [];
            // const housing = [];
            // const interior = [];
            // const justice = [];
            // const labor = [];
            // const nasa = [];
            // const social = [];
            // const state = [];
            // const trade = [];
            // const transportation = [];
            // const treasury = [];
            // const veterans_affairs = [];

            // //for loop that grabs each of the values of depts
            // for (var i = 0; i < bracket1.length; i++) {

            //   //pushes the dept values to arrays
            //   agriculture.push(bracket1[i].agriculture);
            //   commerce.push(bracket1[i].commerce);
            //   communicate.push(bracket1[i].communication)
            //   defense.push(bracket1[i].defense)
            //   education.push(bracket1[i].education)
            //   election.push(bracket1[i].election)
            //   energy.push(bracket1[i].energy)
            //   environmental_protection.push(bracket1[i].environmental_protection)
            //   equal_employment.push(bracket1[i].equal_employment)
            //   health_human_services.push(bracket1[i].health_human_services)
            //   homeland_security.push(bracket1[i].homeland_security)
            //   housing.push(bracket1[i].housing_urban_development)
            //   interior.push(bracket1[i].interior)
            //   justice.push(bracket1[i].justice)
            //   labor.push(bracket1[i].labor)
            //   nasa.push(bracket1[i].nasa)
            //   social.push(bracket1[i].social)
            //   state.push(bracket1[i].state)
            //   trade.push(bracket1[i].trade)
            //   transportation.push(bracket1[i].transportation)
            //   treasury.push(bracket1[i].treasury)
            //   veterans_affairs.push(bracket1[i].veterans_affairs)
            // }

            // //totals the dept values 
            // const agTotal = agriculture.reduce((a, b) => a + b, 0)
            // const commerceTotal = commerce.reduce((a, b) => a + b, 0)
            // const communicateTotal = communicate.reduce((a, b) => a + b, 0)
            // const defenseTotal = defense.reduce((a, b) => a + b, 0)
            // const educationTotal = education.reduce((a, b) => a + b, 0)
            // const electionTotal = election.reduce((a, b) => a + b, 0)
            // const energyTotal = energy.reduce((a, b) => a + b, 0)
            // const environmental_protectionTotal = environmental_protection.reduce((a, b) => a + b, 0)
            // const equal_employmentTotal = equal_employment.reduce((a, b) => a + b, 0)
            // const health_human_servicesTotal = health_human_services.reduce((a, b) => a + b, 0)
            // const homeland_securityTotal = homeland_security.reduce((a, b) => a + b, 0)
            // const housingTotal = housing.reduce((a, b) => a + b, 0)
            // const interiorTotal = interior.reduce((a, b) => a + b, 0)
            // const justiceTotal = justice.reduce((a, b) => a + b, 0)
            // const laborTotal = labor.reduce((a, b) => a + b, 0)
            // const nasaTotal = nasa.reduce((a, b) => a + b, 0)
            // const socialTotal = social.reduce((a, b) => a + b, 0)
            // const stateTotal = state.reduce((a, b) => a + b, 0)
            // const tradeTotal = trade.reduce((a, b) => a + b, 0)
            // const transportationTotal = transportation.reduce((a, b) => a + b, 0)
            // const treasuryTotal = treasury.reduce((a, b) => a + b, 0)
            // const veterans_affairsTotal = veterans_affairs.reduce((a, b) => a + b, 0)

            // //averages out the dept totals based on vote counts
            // const agAvg = agTotal / bracket1.length
            // const commerceAvg = commerceTotal / bracket1.length
            // const communicateAvg = communicateTotal / bracket1.length
            // const defenseAvg = defenseTotal / bracket1.length
            // const educationAvg = educationTotal / bracket1.length
            // const electionAvg = electionTotal / bracket1.length
            // const energyAvg = energyTotal / bracket1.length
            // const environmental_protectionAvg = environmental_protectionTotal / bracket1.length
            // const equal_employmentAvg = equal_employmentTotal / bracket1.length
            // const health_human_servicesAvg = health_human_servicesTotal / bracket1.length
            // const homeland_securityAvg = homeland_securityTotal / bracket1.length
            // const housingAvg = housingTotal / bracket1.length
            // const interiorAvg = interiorTotal / bracket1.length
            // const justiceAvg = justiceTotal / bracket1.length
            // const laborAvg = laborTotal / bracket1.length
            // const nasaAvg = nasaTotal / bracket1.length
            // const socialAvg = socialTotal / bracket1.length
            // const stateAvg = stateTotal / bracket1.length
            // const tradeAvg = tradeTotal / bracket1.length
            // const transportationAvg = transportationTotal / bracket1.length
            // const treasuryAvg = treasuryTotal / bracket1.length
            // const veterans_affairsAvg = veterans_affairsTotal / bracket1.length

            // //pushing arrays to state so they can be used in our chart
            // let res = [agAvg, commerceAvg, communicateAvg, defenseAvg, educationAvg, electionAvg, energyAvg, environmental_protectionAvg, equal_employmentAvg, health_human_servicesAvg, homeland_securityAvg, housingAvg, interiorAvg, justiceAvg, laborAvg, nasaAvg, socialAvg, stateAvg, tradeAvg, transportationAvg, treasuryAvg, veterans_affairsAvg];



        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router 