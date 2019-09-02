import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");

  ReactDOM.render(<h1>react</h1>, root);
});