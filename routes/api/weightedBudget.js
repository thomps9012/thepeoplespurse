const router = require("express").Router();
const db = require('../../models');

//posting route for the tax brackets
router.post('/weightedBudget', function (req, res) {
    db.WeightedBudget.create({ 
        tax_bracket: req.body.voteData[0],
        agriculture: req.body.voteData[1],
        commerce: req.body.voteData[2],
        communication: req.body.voteData[3],
        defense: req.body.voteData[4],
        education: req.body.voteData[5],
        election: req.body.voteData[6],
        energy: req.body.voteData[7],
        environmental_protection: req.body.voteData[8],
        equal_employment: req.body.voteData[9],
        health_human_services: req.body.voteData[10],
        homeland_security: req.body.voteData[11],
        housing_urban_development: req.body.voteData[12],
        interior: req.body.voteData[13],
        justice: req.body.voteData[14],
        labor: req.body.voteData[15],
        nasa: req.body.voteData[16],
        social: req.body.voteData[17],
        state: req.body.voteData[18],
        trade: req.body.voteData[19],
        transportation: req.body.voteData[20],
        treasury: req.body.voteData[21],
        veterans_affairs: req.body.voteData[22]
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error"
            })
        })
    res.json(req.body)
});



module.exports = router