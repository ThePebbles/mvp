const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemonApp', {'useNewUrlParser': true, 'useUnifiedTopology': true})
.then(() => {
  console.log('db connected');
})
.catch((err) => {
  console.log('db connection error: ', err);
})
const { Schema } = mongoose;

const pokemon = new Schema({
  name: String,
  dex: Number,
  typeOne: String,
  picture: String
});

const Pokemon = mongoose.model('pokemon', pokemon);

const recent = new Schema({
  name: String,
  picture: String,
  slot: Number
})

const Recent = mongoose.model('recent', recent);

module.exports.Pokemon = Pokemon;
module.exports.Recent = Recent;