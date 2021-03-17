const router = require("express").Router();
const db = require('../../models');

//route for retrieving the data before we push it into our chart
router.get('/bracket6/get', (req, res) => {
    db.singleSession.findAll({
        where: {
            tax_bracket: 6
        }
    })
        .then(bracket6 => {

            res.json(bracket6)
            console.log(bracket6)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
});

module.exports = router 