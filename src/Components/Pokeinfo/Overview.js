import React from 'react';

const Overview = ({ pickedPokemon }) => {
  return (
    <div className='overview-container'>
      <h1>{pickedPokemon.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pickedPokemon.id}.svg`}
        alt={pickedPokemon.name} />
    </div>
  );
}

export default Overview;
