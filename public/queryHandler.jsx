import React from 'react';
import { useState } from 'react';

const QueryHandler = ({ querySubmit }) => {
  const [textValue, setTextValue] = useState('');
  const updateText = (event) => {
    setTextValue(event.target.value);
  }


  return (
    <form>
      <label value='Pokemon Name:'></label>
      <textarea id='search' onChange={updateText}></textarea>
      <input type='button' id='searchButton' value='search' onClick={() => querySubmit(textValue)}></input>
    </form>
  )
}
export { QueryHandler };