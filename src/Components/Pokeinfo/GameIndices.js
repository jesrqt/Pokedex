import React from 'react';
import { pokeIndicesColor } from '../pokeColor'

const GameIndices = ({ pickedPokemon }) => {
  return (
    <div className='game-indices-container'>
      <h2 className='game-indices-header'>Game Indices</h2>
      <div className="game-indices-group">
        {
        pickedPokemon.game_indices.map(item => {
          return <p
          key={Math.random()}
          style={{backgroundColor : pokeIndicesColor(item.version.name)}}>{item.version.name}</p>
        })
      }
      </div>
      
    </div>
  );
}

export default GameIndices;
