const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player.js');

router.get('/add-player', PlayerController.addPlayer);

router.post('/add-player', PlayerController.postPlayer);

//router.get('/add-player', ladderController.addPlayer);

//router.post();

module.exports = router;