import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    pokeIndex: 0,
    pokeType: '',
  };

  handleNext = (length) => {
    this.setState((prev) => ({ pokeIndex: prev.pokeIndex < length
      ? prev.pokeIndex + 1
      : 0 }));
  };

  handleFire = () => {
    this.setState({ pokeType: 'Fire', pokeIndex: 0 });
  };

  handlePsychic = () => {
    this.setState({ pokeType: 'Psychic', pokeIndex: 0 });
  };

  render() {
    const { pokemonList } = this.props;
    const { pokeType, pokeIndex } = this.state;
    const filtredPokemon = pokemonList.filter((pokemon) => (
      pokemon.type.includes(pokeType)));

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ filtredPokemon[pokeIndex] } />
          <button
            type="submit"
            onClick={ () => this.handleNext(filtredPokemon.length - 1) }
          >
            Próximo pokémon

          </button>
          <button type="submit" onClick={ this.handleFire }>Fire</button>
          <button type="submit" onClick={ this.handlePsychic }>Psychic</button>

        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};
// export
export default Pokedex;
