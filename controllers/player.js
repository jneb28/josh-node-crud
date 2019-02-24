const mongoose = require('mongoose');
const Player = require('../models/player.js');

// exports.addPlayer = (req, res, next) => {
//   res.render('player/create.ejs', {
//     path: '/add-player',
//     title: 'Add Player'
//   });
// };

// exports.postPlayer = (req, res, next) => {
//   const name = req.body.name;
//   const wins = req.body.wins;
//   const losses = req.body.losses;
//   const race = req.body.race;
//   const player = new Player({
//     name: name,
//     wins: wins,
//     losses: losses,
//     race: race,
//     id: new mongoose.mongo.ObjectId()
//   });
//   player
//   .save()
//   .then(result => {
//     console.log(result);
//     console.log('Player Added!');
//     res.redirect('/');
//   })
//   .catch(err => console.log(err));
// };
exports.postPlayer = (req, res, next) => {
  const name = req.body.name;
  const wins = req.body.wins;
  const losses = req.body.losses;
  const race = req.body.race;

  const player = new Player({
    name: name,
    wins: wins,
    losses: losses,
    race: race
  });

  player.save(function(err) {
    if(err) return next(err);
    res.json(player);
  });
};

// exports.viewPlayer = (req, res, next) => {
//   const playerId = req.params.playerId;
//   Player.findById(playerId)
//   .then(player => {
//     res.render('player/view.ejs', {
//       path: '/view-player',
//       player: player,
//       title: player.name
//     });
//   })
//   .catch(err => console.log(err));
// };
exports.viewPlayer = (req, res, next) => {
  Player.findOne({ name: req.params.id })
  .then((player) => res.json(player));
};

// exports.updatePlayer = (req, res, next) => {
//   const playerId = req.body.id;
//   const name = req.body.name;
//   const wins = req.body.wins;
//   const losses = req.body.losses;
//   const race = req.body.race;

//   Player.findById(playerId)
//   .then(player => {
//     player.name = name;
//     player.wins = wins;
//     player.losses = losses;
//     player.race = race;
//     return player.save();
//   })
//   .then(result => {
//     console.log('Player Updated!');
//     res.redirect('/');
//   })
//   .catch(err => console.log(err));
// };
exports.updatePlayer = (req, res, next) => {
  Player.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err) => {
      if(err) return next(err);
      res.send('Player Updated!');
    }
  );
};

// exports.deletePlayer = (req, res, next) => {
//   const playerId = req.body.id;

//   Player.findByIdAndRemove(playerId)
//   .then(() => {
//     console.log('Player Deleted!');
//     res.redirect('/');
//   })
//   .catch(err => console.log(err));
// };
exports.deletePlayer = (req, res, next) => {
  Player.findByIdAndRemove(
    req.params.id,
    (err) => {
      if(err) return next(err);
      res.send('Player Deleted!');
    }
  );
};

// exports.getPlayers = (req, res, next) => {
//   Player.find()
//   .then(players => {
//     res.render('ladder/index.ejs', {
//       path: '/',
//       title: 'Ladder',
//       players: players
//     });
//   })
//   .catch(err => console.log(err));
// };
exports.getPlayers = (req, res) => {
  Player.find()
  .then((players) => res.json(players));
}