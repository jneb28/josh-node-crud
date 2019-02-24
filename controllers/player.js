const mongoose = require('mongoose');

const Ladder = require('../models/ladder.js');
const Player = require('../models/player.js')

exports.addPlayer = (req, res, next) => {
  res.render('player/create.ejs', {
    path: '/add-player',
    title: 'Add Player'
  });
};

exports.postPlayer = (req, res, next) => {
  const name = req.body.name;
  const wins = req.body.wins;
  const losses = req.body.losses;
  const race = req.body.race;
  const player = new Player({
    name: name,
    wins: wins,
    losses: losses,
    race: race,
    id: new mongoose.mongo.ObjectId() //player._id
  });
  player
  .save()
  .then(result => {
    console.log(result);
    console.log('Player Added!');
    res.redirect('/');
  })
  .catch(err => console.log(err));
};

exports.viewPlayer = (req, res, next) => {
  const playerId = req.params.playerId;
  Player.findById(playerId)
  .then(player => {
    res.render('player/view.ejs', {
      path: '/view-player',
      player: player,
      title: player.name
    });
  })
  .catch(err => console.log(err));
};

exports.getPlayers = (req, res, next) => {
  Player.find()
  .then(result => {
    console.log(result);
    res.render('ladder/index.ejs', {
      path: '/',
      title: 'Current Ladder',
      players: result
    });
  })
  .catch(err => console.log(err));
};