const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player.js');

router.get('/', PlayerController.getPlayers);

router.get('/add-player', PlayerController.addPlayer);

router.post('/add-player', PlayerController.postPlayer);

router.get('/view-player/:playerId', PlayerController.viewPlayer);

router.post('/update-player', PlayerController.updatePlayer);

router.post('/delete-player', PlayerController.deletePlayer);

module.exports = router;