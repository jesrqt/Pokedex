import React from 'react';
import { getTypeColor } from '../pokeColor';

const Card = ({ pokemon, loading, error, updatePokeDexState }) => {

  if (loading && !error) {
    return <p>Loading...</p>
  };

  if (!loading && !error) {
    return (
      <div className='pokemon-grid'>
        {pokemon.map((item) => {
          return (
            <div
              data-testid='card-div'
              className='card'
              key={item.id} onClick={() => updatePokeDexState(item)}
              style={{ background: getTypeColor(item.types[0].type.name) }}>
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          )
        })}
      </div>
    );
  };

  if (!loading && error) {
    return <p>{error}</p>
  }

}


export default Card;
