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

//   useEffect(() => {
//     updateRepos();
//   }, [])

  var updateRepos = function(name, picture) {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/pokemon',
        data: { 'name': name, 'picture': picture },
        success: (data) => {
            console.log('Yay! ', data);
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
        updateRepos(data.name, data.picture);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  return (
    <div>
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