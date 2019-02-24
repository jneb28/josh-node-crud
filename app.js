//const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

const playerRoutes = require('./routes/player.js');
app.use(playerRoutes);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
.then(result => {
  console.log('Connected to Cluster!');
  app.listen(process.env.PORT || port);
})
.catch(err => console.log(err));