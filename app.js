const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/player.js');

const app = express();
const URI = 'mongodb+srv://jneb:likgvQyckdgq9psk@cluster0-qbjhd.mongodb.net/ladder?retryWrites=true';
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})
app.use(playerRoutes);

mongoose.connect(URI, {useNewUrlParser: true})
.then(result => {
  console.log('Connected to Cluster!');
  app.listen(port);
})
.catch(err => console.log(err));