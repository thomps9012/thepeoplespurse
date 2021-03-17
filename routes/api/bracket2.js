const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket2/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 2
        }
    })
        .then(bracket2 => {

            res.json(bracket2)
            console.log(bracket2)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 