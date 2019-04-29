const Player = require('../models/player.js');

exports.postPlayer = (req, res, next) => {
  const player = new Player({
    name: req.body.name,
    wins: req.body.wins,
    losses: req.body.losses,
    race: req.body.race,
    realm: req.body.realm
  });

  player.save(function(err) {
    if(err) return next(err);
    res.json(player);
  });
};

exports.viewPlayer = (req, res, next) => {
  Player.findOne({ _id: req.params.id })
  .then(player => res.json(player));
};

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

exports.deletePlayer = (req, res, next) => {
  Player.findByIdAndRemove(
    req.params.id,
    (err) => {
      if(err) return next(err);
      res.send('Player Deleted!');
    }
  );
};

exports.topTen = (req, res, next) => {
  Player.find()
    .sort({ wins: -1 })
    .limit(10)
    .then((players) => res.json(players));
};

exports.getPlayers = (req, res) => {
  Player.find()
  .then(players => {
    res.json(players);
  });
};

exports.getRealm = (req, res) => {
  Player.find({realm: req.params.realm})
  .then(realm => res.json(realm));
}