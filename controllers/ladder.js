mongodb = require('mongodb');
const Player = require('../models/player.js');

exports.sortLadder = (req, res, next) => {
  Player.find()
  .then(players => {
    res.render('ladder/index.ejs', {
      path: '/',
      title: 'Current Ladder',
      players: players
    });
  })
  .catch(err => console.log(err));
};
