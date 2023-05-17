import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card/Card';
import Pokeinfo from '../Pokeinfo/Pokeinfo';
import PokemonLogo from '../PokemonLogo/PokemonLogo';

const Main = () => {
  const [pokeData, setPokeData] = useState([]); // array of 20 pokemons on the left
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
  const [prevUrl, setPrevUrl] = useState(null);
  const [pokeDex, setPokeDex] = useState(null);
  const [error, setError] = useState(null);

  // Function to get pokemon to render on the left
  const getPokemon = (pokeArray) => {
    setPokeData([]);

    pokeArray.map(async poke => {
      try {
        const response = await fetch(poke.url);
        if (!response.ok) {
          throw new Error('Loading Pokèmon failed!');
        }
        const data = await response.json();

        setPokeData(state => {
          state = [...state, data];
          state.sort((a, b) => a.id > b.id ? 1 : -1);
          return state;
        });
      } catch (error) {
        setError(error);
      }
    });
  }

  // Function to get current 20 pokemons as well as URLs for next and previous 20 pokemons respectively 
  const pokeFun = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Fetching Pokémon data failed!');
      }
      const pokeData = await response.json();
      console.log(pokeData);
      setNextUrl(pokeData.next);
      setPrevUrl(pokeData.previous);
      console.log(pokeData.results);
      getPokemon(pokeData.results);
      
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [url])


  //Function to take pokemon information from the selected card and update the pokeDex state
  const updatePokeDexState = poke => {
    // console.log(poke);
    setPokeDex(poke);
  };

  const loadNext = () => {
    setUrl(nextUrl);
  }

  const loadPrevious = () => {
    if (prevUrl !== null) {
      setUrl(prevUrl);
    }
  }

  //Whenever URL changes, send API get request to fetch 20 pokemon data
  useEffect(() => {
    pokeFun();
  }, [url, pokeFun]);


  return (
    <div className="container">
      <PokemonLogo />
      <div className='left-right-container'>
        <div className="left-content">
          <Card data-testid="card-component" pokemon={pokeData} loading={loading} error={error} updatePokeDexState={updatePokeDexState} />
          <div className="btn-group">
            {
              (prevUrl !== null) &&
              <button id="prev-button" onClick={loadPrevious}>Previous</button>
            }
            {
              (nextUrl !== "https://pokeapi.co/api/v2/pokemon/?offset=380&limit=20") &&
              <button onClick={loadNext}>Next</button>
            }
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo
            pickedPokemon={pokeDex} />
        </div>
      </div>
    </div >
  );
}

export default Main;
