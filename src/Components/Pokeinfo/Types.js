import React from 'react';
import { getTypeColor } from '../pokeColor';

const Types = ({ pickedPokemon }) => {
  return (
    <div className='types-container'>
      <h2>Types</h2>
      <div className="type">
        {
          pickedPokemon.types.map(item => {
            return <p
              key={Math.random()}
              className='type-name'
              style={{ backgroundColor: getTypeColor(item.type.name) }}
            >{item.type.name}</p>
          })
        }
      </div>
    </div>
  );
}

export default Types;
