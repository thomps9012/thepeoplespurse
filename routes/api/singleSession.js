const router = require("express").Router();
const db = require('../../models');

// posting route for the single class session
router.post('/singleSession', function (req, res) {
    db.singleSession.create({
        class_id: req.body.sessionData[0],
        tax_bracket: req.body.sessionData[1],
        agriculture: req.body.sessionData[2],
        commerce: req.body.sessionData[3],
        communication: req.body.sessionData[4],
        defense: req.body.sessionData[5],
        education: req.body.sessionData[6],
        election: req.body.sessionData[7],
        energy: req.body.sessionData[8],
        environmental_protection: req.body.sessionData[9],
        equal_employment: req.body.sessionData[10],
        health_human_services: req.body.sessionData[11],
        homeland_security: req.body.sessionData[12],
        housing_urban_development: req.body.sessionData[13],
        interior: req.body.sessionData[14],
        justice: req.body.sessionData[15],
        labor: req.body.sessionData[16],
        nasa: req.body.sessionData[17],
        social: req.body.sessionData[18],
        state: req.body.sessionData[19],
        trade: req.body.sessionData[20],
        transportation: req.body.sessionData[21],
        treasury: req.body.sessionData[22],
        veterans_affairs: req.body.sessionData[23]
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
