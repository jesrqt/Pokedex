import React from 'react';

const EvolutionCard = ({ loading, evoError, evoData, imgUrl }) => {

  return (
    <div className='evolution-container'>
      <h2>Evolution</h2>
      <div className="evol-poke-container">
    {loading && !evoError && <p>Loading...</p>}
    {!loading && evoError && <p>Data loading error</p>}
    {!loading && !evoError && evoData.map((item) => {
          return (
            <div key={evoData.indexOf(item)}>
              <img src={imgUrl[evoData.indexOf(item)]} alt={item} />
              <h3>{item}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EvolutionCard; 