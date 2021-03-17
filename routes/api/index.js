const Vote = require("./vote");
const Voter = require("./voter");
const Bracket1 = require("./bracket1");
const Bracket2 = require("./bracket2");
const Bracket3 = require("./bracket3");
const Bracket4 = require("./bracket4");
const Bracket5 = require("./bracket5");
const Bracket6 = require("./bracket6");
const Bracket7 = require("./bracket7");
const SingleSession = require('./singleSession');
const router = require("express").Router();

router.use(Vote);
router.use(Voter);
router.use(Bracket1);
router.use(SingleSession);
router.use(Bracket2);
router.use(Bracket3);
router.use(Bracket4);
router.use(Bracket5);
router.use(Bracket6);
router.use(Bracket7);

module.exports = router;