const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket1/get', (req, res) => {
    db.WeightedBudget.findAll({
        where: {
            tax_bracket: 1
        }
    })
        .then(bracket1 => {

            res.json(bracket1)
            console.log(bracket1)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 