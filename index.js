const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
//const port = process.env.PORT || 5000;


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const ladderRoutes = require('./routes/ladder.js');
const playerRoutes = require('./routes/player.js');
app.use(ladderRoutes);
app.use(playerRoutes);

mongoose.connect('mongodb+srv://jneb:likgvQyckdgq9psk@cluster0-qbjhd.mongodb.net/test?retryWrites=true')
.then(result => {
  console.log('Connected!');
  
  app.listen(process.env.PORT || 5000);
  
})
.catch(err => {
  console.log(err);
});
