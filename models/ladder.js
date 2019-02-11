const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LadderSchema = new Schema({
  playerId: {
    //type: Number,
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  }
});