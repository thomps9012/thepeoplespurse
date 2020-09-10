const router = require("express").Router();
const db = require('../../models');
const sequelize = require('sequelize');

//posting routes for dept values in the database
router.post('/vote', function (req, res) {
     
    const ag = req.body.depts[0]
    db.Vote.create({
        agriculture: req.body.depts[0],
        commerce: req.body.depts[1],
        communication: req.body.depts[2],
        defense: req.body.depts[3],
        education: req.body.depts[4],
        election: req.body.depts[5],
        energy: req.body.depts[6],
        environmental_protection: req.body.depts[7],
        equal_employment: req.body.depts[8],
        health_human_services: req.body.depts[9],
        homeland_security: req.body.depts[10],
        housing_urban_development: req.body.depts[11],
        interior: req.body.depts[12],
        justice: req.body.depts[13],
        labor: req.body.depts[14],
        nasa: req.body.depts[15],
        social: req.body.depts[16],
        state: req.body.depts[17],
        trade: req.body.depts[18],
        transportation: req.body.depts[19],
        treasury: req.body.depts[20],
        veterans_affairs: req.body.depts[21]
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
    res.json(req.body.depts[0])
})

//route for retrieving the data before we push it into our chart
router.get('/vote/get', (req, res) => {
    db.Vote.findAll()
        .then(votes => {
            //manipulate votes
            res.json(votes)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;