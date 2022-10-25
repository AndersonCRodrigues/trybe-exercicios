import React from 'react';
import Props from 'prop-types';

export default class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { value, measurementUnit } = pokemon.averageWeight;
    const peso = [value, measurementUnit].join(' ');
    return (
      <li>
        <p>
          {pokemon.name}
        </p>
        <p>
          {pokemon.type}
        </p>
        <p>
          {peso}
        </p>
        <img src={ pokemon.image } alt={ pokemon.name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: Props.shape({
    name: Props.string.isRequired,
    type: Props.string.isRequired,
    averageWeight: Props.shape({
      value: Props.number.isRequired,
      measurementUnit: Props.string.isRequired,
    }).isRequired,
    image: Props.string.isRequired,
    moreInfo: Props.string.isRequired,
  }).isRequired,
};
