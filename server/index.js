const express = require('express');
const mongoose = require('mongoose');
const models = require('./database.js');
const helper = require('./helperFunctions.js');
const updateEntries = require('./updateNumber.js');
const path = require('path');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/pokemon', function (req, res) {
  //console.log('Req body: ', req.body);
  helper(req.body.name)
  .then((results) => {
    console.log('results from api', results);
      //console.log('These are results from post: ', results.data.data[0]);
      //add name -> results.data.data[0].name, dex number -> results.data.data[0].nationalPokedexNumbers[0], image -> results.data.data[0].images.small, types -> results.data.data[0].types[0] and results.data.data[0].types[1]
      var current = results.data.data[0];
      return models.Pokemon.create({'name': current.name, 'dex': current.nationalPokedexNumbers[0], 'picture': current.images.small, 'typeOne': current.types[0]})
    })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
        console.log('error from post: ', err);
      })
    //res.send('done');
    // res.send('hello');
})

app.get('/pokemon', (req, res) => {
  if (req.body.name !== null) {
    return models.Recent.findOneAndDelete({'name': req.body.name})
    .then((results) => {
      return models.Recent.find().sort({'slot': -1});
    })
    .then((results) => {
      if (results.length >= 6) {
        return models.Recent.deleteOne({'name': results[results.length - 1].name})
        .then((results) => {
          return models.Recent.create({'name': req.body.name, 'picture': req.body.picture, 'slot': null});
        })
        .then((results) => {
          return models.Recent.find();
        })
        .then((results) => {
          return updateEntries(results);
        })
        .then((results) => {
          return models.Recent.find().sort({'slot': -1}).limit(6);
        })
        .then((results) => {
          res.send(results);
        })
        .catch((err) => {
          res.status(500).send(err);
        })
      } else {
        return models.Recent.create({'name': req.body.name, 'picture': req.body.picture, 'slot': null})
        .then((results) => {
          return models.Recent.find();
        })
        .then((results) => {
          return updateEntries(results);
        })
        .then((results) => {
          return models.Recent.find().sort({'slot': -1}).limit(6);
        })
        .then((results) => {
          res.send(results);
        })
        .catch((err) => {
          res.status(500).send(err);
        })
      }
    })
  } else {
    return models.Recent.find().sort({'slot': -1}).limit(6)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  }
})

app.get('/', function(req, res) {
  res.send('yay');
})





const port = 3000;
app.listen(port, () => {
  console.log('Server listening on port: ' + port);
})