const Vote = require("./vote");
const Voter = require("./voter");
const WeightedBudget = require("./weightedBudget");
const SingleSession = require('./singleSession')
const router = require("express").Router();

router.use(Vote);
router.use(Voter);
router.use(WeightedBudget);
router.use(SingleSession);

module.exports = router;