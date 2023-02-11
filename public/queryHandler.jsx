import React from 'react';
import { useState } from 'react';

const QueryHandler = ({ querySubmit }) => {
  const [textValue, setTextValue] = useState('');
  const updateText = (event) => {
    setTextValue(event.target.value);
  }
  return (
    <div>
    <h2>Pokemon Name:</h2>
    <form>
      <input type='text' id='search' onChange={updateText}></input>
      <img type='button' id='pokeball' src='./Pokeball.jpg' onClick={() => querySubmit(textValue)}></img>
      {/* <input type='button' id='searchButton' value='search' onClick={() => querySubmit(textValue)}></input> */}
    </form>
    </div>
  )
}
export { QueryHandler };