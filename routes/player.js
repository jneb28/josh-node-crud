const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player.js');

//router.get('/add-player', PlayerController.addPlayer);

router.post('/add-player', PlayerController.postPlayer);

//router.get('/view-player/:playerId', PlayerController.viewPlayer);
router.get('/view-player/:name', PlayerController.viewPlayer);

router.put('/update-player', PlayerController.updatePlayer);

router.delete('/delete-player', PlayerController.deletePlayer);

router.get('/', PlayerController.getPlayers);

module.exports = router;