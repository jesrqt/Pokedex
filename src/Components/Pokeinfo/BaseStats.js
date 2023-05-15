import React from 'react';

const BaseStats = ({ pickedPokemon }) => {
  return (
    <div className='base-stats-container'>
      <h2 className='base-stat-header'>Base Stats</h2>
      <div className="base-stat">
        <div className="base-stat-group">
          <label htmlFor="hp">HP: </label>
          <meter id="hp" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[0].base_stat}></meter>
          <p>{pickedPokemon.stats[0].base_stat}</p>
        </div>
        <div className="base-stat-group">
          <label htmlFor="attack">Attack:</label>
          <meter id="attack" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[1].base_stat}></meter>
          <p>{pickedPokemon.stats[1].base_stat}</p>
        </div>
        <div className="base-stat-group">
          <label htmlFor="defence">Defence: </label>
          <meter id="defence" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[2].base_stat}></meter>
          <p>{pickedPokemon.stats[2].base_stat}</p>
        </div>
        <div className="base-stat-group">
          <label htmlFor="special-attack">Sp. Attack: </label>
          <meter id="special-attack" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[3].base_stat}></meter>
          <p>{pickedPokemon.stats[3].base_stat}</p>
        </div>
        <div className="base-stat-group">
          <label htmlFor="special-defence">Sp. Defence: </label>
          <meter id="special-defence" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[4].base_stat}></meter>
          <p>{pickedPokemon.stats[4].base_stat}</p>
        </div>
        <div className="base-stat-group">
          <label htmlFor="speed">Speed </label>
          <meter id="speed" className="base-stat-meter" max={180} min={0} value={pickedPokemon.stats[5].base_stat}></meter>
          <p>{pickedPokemon.stats[5].base_stat}</p>
        </div>
      </div>
    </div>
  );
}

export default BaseStats;
