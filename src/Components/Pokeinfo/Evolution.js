import React from 'react';
import { useState, useEffect } from 'react';
import EvolutionCard from './EvolutionCard';

const Evolution = ({ pickedPokemon }) => {
  const [evoData, setEvoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState([]);
  const [evoError, setEvoError] = useState(null);



  useEffect(() => {

    const getSpeciesInfo = async () => {
      setLoading(true);
      setEvoData([]);
      setImgUrl([]);
      setEvoError(null);
      try {
        //1st Promise: To get evolution_chain url
        const response = await fetch(pickedPokemon.species.url);
        if (!response.ok) {
          throw new Error('Fetching evolution data failed');
        };

        const data = await response.json();
        const evolutionChainUrl = data.evolution_chain.url;

        //2nd Promise: to get names of pokemons concerning evolution
        const evoChainRes = await fetch(evolutionChainUrl);
        if (!evoChainRes.ok) {
          throw new Error('Fetching evolution info failed!');
        }
        const evoChainData = await evoChainRes.json();

        //Get name of first pokemon
        const firstPoke = evoChainData.chain.species.name;
        setEvoData([firstPoke]);

        //Get image of the first pokemon
        const firstPokeId = evoChainData.chain.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
        setImgUrl([`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${firstPokeId}.png`]);

        try {
          //Get name of second pokemon (if any)
          if (evoChainData.chain.evolves_to[0].species.name) {
            const secondPoke = evoChainData.chain.evolves_to[0].species.name;
            setEvoData(prev => [
              ...prev, secondPoke]);

            //Get image of the second pokemon (if any)
            const secondPokeId = evoChainData.chain.evolves_to[0].species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
            setImgUrl(prev => [...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${secondPokeId}.png`]);
          }

          //Get name of the third pokemon (if any)
          if (evoChainData.chain.evolves_to[0].evolves_to[0].species.name) {
            const thirdPoke = evoChainData.chain.evolves_to[0].evolves_to[0].species.name;
            setEvoData(prev => [
              ...prev, thirdPoke]);

            //Get image of the third pokemon (if any)
            const thirdPokeId = evoChainData.chain.evolves_to[0].evolves_to[0].species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
            setImgUrl(prev => [...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${thirdPokeId}.png`]);
          }
        } catch (error) {
          console.log(error)
        }

      } catch (error) {
        setEvoError(error);
        console.log(error);
      }
      setLoading(false);
    }
    getSpeciesInfo();
  }, [pickedPokemon])


  return (
    <EvolutionCard
      loading={loading}
      evoError={evoError}
      evoData={evoData}
      imgUrl={imgUrl}
    />
  );
}

export default Evolution;
