const Player = require('../models/player.js');

exports.getLadder = (req, res, next) => {
  Player.find()
  .then(players => {
    res.render('ladder/index.ejs', {
      path: '/',
      title: 'Ladder',
      players: players
    });
  })
  .catch(err => console.log(err));
};
