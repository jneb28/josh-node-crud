
const Player = require('../models/player.js');

exports.getLadder = (req, res, next) => {
  Player.find()
  .then(result => {
    res.render('ladder/index.ejs', {
      path: '/',
      title: 'Current Ladder',
      players: result
    });
  })
  .catch(err => {
    console.log(err);
  });
};

