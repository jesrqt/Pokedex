import React from 'react';
import Overview from './Overview';
import Types from './Types';
import BaseStats from './BaseStats';
import GameIndices from './GameIndices';
import Evolution from './Evolution';


const Pokeinfo = ({ pickedPokemon }) => {

  return (
    <div>
      {
        (!pickedPokemon) ? "" : (
          <div className='pokeinfo'>
            <Overview pickedPokemon={pickedPokemon} />
            <Types pickedPokemon={pickedPokemon} />
            <Evolution pickedPokemon={pickedPokemon} />
            <GameIndices pickedPokemon={pickedPokemon} />
            <BaseStats pickedPokemon={pickedPokemon} />
          </div>
        )
      }
    </div>
  )
}
export default Pokeinfo;
