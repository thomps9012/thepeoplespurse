const router = require("express").Router();
const db = require('../../models');

//posting route for the tax brackets
router.post('/voter', function (req, res) {
    db.Voter.create({ tax_bracket: req.body.taxBracket })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error"
            })
        })
    res.json(req.body.taxBracket)
});

//route for retrieving the data before we push it into our chart
router.get('/voter/get', (req, res) => {
    db.Voter.findAll()
        .then(voters => {
       
            res.json(voters)
           
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router
