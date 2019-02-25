const express = require('express');
const router = express.Router();
const PlayerController = require('../controllers/player.js');

router.post('/create-player', PlayerController.postPlayer);

router.get('/view-player/:id', PlayerController.viewPlayer);

router.put('/update-player/:id', PlayerController.updatePlayer);

router.delete('/delete-player/:id', PlayerController.deletePlayer);

router.get('/top10', PlayerController.topTen);

router.get('/', PlayerController.getPlayers);

module.exports = router;