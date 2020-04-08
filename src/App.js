import React from 'react';
import Pokedex from "./components/pokedex/pokedex";
import PokemonDisplay from './components/pokedex/pokemonDisplay';

function App() {
  return (
    <div className="App">
      <Pokedex />
      <PokemonDisplay />
    </div>
  );
}

export default App;
