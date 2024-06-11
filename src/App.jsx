import React from 'react';
import PokemonCard from './components/PokemonCard';
import PropTypes from "prop-types";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[0]} /> {/* ou pokemonList[1] pour tester Mew */}
    </div>
  );
}

export default App;
