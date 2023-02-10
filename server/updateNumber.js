const mongoose = require('mongoose');
const models = require('./database.js');

const updateNumber = function(recents) {
  var counter = 0;
  var updates = recents.map((entry) => {
    counter += 1;
    return models.Recent.findOneAndUpdate({'name': entry.name}, {'slot': counter, 'name': entry.name, 'picture': entry.picture});
  })
  return Promise.all(updates)
  .then((results) => {
    return results;
  })
  .catch((err) => {
    return err;
  })
}

module.exports = updateNumber;