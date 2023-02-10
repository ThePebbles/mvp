import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { QueryHandler } from './queryHandler.jsx';
import { QueryResults } from './queryResults.jsx';
import { Recent } from './recent.jsx';
//const $ = require('jquery')
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [queryRepo, setQueryRepo] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    ohNo();
  }, [])

  var ohNo = () => {
    const name = error;
    if (error.length > 0) {
      setError('');
      return (
        alert('Sorry! ' + name + ' is not in our Pokedex yet! Please try again with a different Pokemon.')
      );
    }
  }

  var updateRepos = function(name, picture) {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/pokemon',
        data: { 'name': name, 'picture': picture },
        success: (data) => {
          setRepoList(data);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  var querySubmit = function(query) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/pokemon',
      data: { 'name': query },
      success: (data) => {
        setQueryRepo(data);
        setError('');
        updateRepos(data.name, data.picture);
      },
      error: (err) => {
        setError(query);
      }
    })
  }

  return (
    <div>
      <div>
        {ohNo()}
      </div>
      <h1>
        Pokemon Card Finder
      </h1>
        <QueryHandler querySubmit={querySubmit} />
        <QueryResults queryRepo={queryRepo} />
        <Recent repoList={repoList} />
    </div>
  )
}

export default App