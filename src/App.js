import React from 'react';
import Pokedex from "./components/pokedex/pokedex";
import PokemonDisplay from './components/pokedex/pokemonDisplay';
import PokemonStats from './components/pokedex/pokemonStats'

function App() {
  return (
    <div className="App">
      <Pokedex />
      <PokemonDisplay />
      <PokemonStats />
    </div>
  );
}

export default App;
