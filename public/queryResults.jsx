import React from 'react';

const QueryResults = ({ queryRepo }) => {
  const type = () => {
    if (queryRepo.typeOne === undefined) {
      return;
    } else {
      return 'Type: ' + queryRepo.typeOne;
    }
  };
  const dex = () => {
    if (queryRepo.dex === undefined) {
      return;
    } else {
      return 'National Pokedex Number: ' + queryRepo.dex;
    }
  };
  return (
    <div>
    <h3>
      Search Results
    </h3>
    <img src={queryRepo.picture}></img>
    <div className='name'>{queryRepo.name}</div>
    <div className='type'>{type()}</div>
    <div className='dex'>{dex()}</div>
    </div>
  )
}

export { QueryResults };