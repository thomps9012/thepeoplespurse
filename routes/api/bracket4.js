const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket4/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 4
        }
    })
        .then(bracket4 => {

            res.json(bracket4)
            console.log(bracket4)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 