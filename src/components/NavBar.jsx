import React from 'react';

const NavBar = ({ pokemonList, setPokemonIndex }) => {
    const handleClick = (index) => {
        if (pokemonList[index].name === 'pikachu') {
          alert("pika pikachu !!!");
        }
        setPokemonIndex(index);
      };
  
    return (
        <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
  );
};

export default NavBar;
