const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket3/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 3
        }
    })
        .then(bracket3 => {

            res.json(bracket3)
            console.log(bracket3)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 