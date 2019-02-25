const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    required: true
  },
  losses: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  winRatio: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Player', PlayerSchema);