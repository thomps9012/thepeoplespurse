const Vote = require("./vote");
const Voter = require("./voter");
const WeightedBudget = require("./weightedBudget");
const router = require("express").Router();


router.use(Vote);
router.use(Voter);
router.use(WeightedBudget);

module.exports = router;