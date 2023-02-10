import React from 'react';

const Recent = ({ repoList }) => {
  var results = repoList.map((repo) => {
    return(
      <div className='image'>
        <img src={repo.picture}></img>
      </div>
    )
  });
  return (
    <div>
      <h4>
        Your Party:
      </h4>
      <div>
        {results}
      </div>
    </div>
  )
}

export { Recent };