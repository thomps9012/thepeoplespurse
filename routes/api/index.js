const Vote = require("./vote");
const Voter = require("./voter");
const Bracket1 = require("./bracket1");
const SingleSession = require('./singleSession');
const router = require("express").Router();

router.use(Vote);
router.use(Voter);
router.use(Bracket1);
router.use(SingleSession);

module.exports = router;