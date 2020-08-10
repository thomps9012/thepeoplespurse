const Vote = require("./vote");
const Voter = require("./voter");
const router = require("express").Router();


router.use(Vote);
router.use(Voter);

module.exports = router;