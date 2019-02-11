const express = require('express');
const router = express.Router();

const ladderController = require('../controllers/ladder.js');

router.get('/', ladderController.getLadder);

module.exports = router;