const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket5/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 5
        }
    })
        .then(bracket5 => {

            res.json(bracket5)
            console.log(bracket5)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 