const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket7/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 7
        }
    })
        .then(bracket7 => {

            res.json(bracket7)
            console.log(bracket7)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 