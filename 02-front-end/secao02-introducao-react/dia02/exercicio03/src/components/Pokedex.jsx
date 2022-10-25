import React from 'react';
import pokemonList from '../data';
import Pokemon from './Pokemon';

export default class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <ul>
          {pokemonList.map((pokemon) => (<Pokemon
            key={ pokemon.id }
            pokemon={ pokemon }
          />))}
        </ul>
      </>
    );
  }
}
