const axios = require('axios');

const getPokemonData = function(name) {
  console.log('this is a name: ', name);
  var options = {
    'url': `https://api.pokemontcg.io/v2/cards?q=name:${name}`,
    'headers': {'X-Api-Key': '79eee9da-9a8a-4b8f-868b-853ebe05e17a'}
  };
  return axios(options);
}

module.exports = getPokemonData;