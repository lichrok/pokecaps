import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemonData } from '../actions/pokemon';
import { PokemonProps } from '../types';
import Pokemon from '../components/Pokemon';

interface PokemonReqProps extends PokemonProps {
  onFetchData: Function;
  pokemon: any;
}

type StoreProps = {
  pokemon: any,
};

const PokemonContainer: React.FC<PokemonReqProps> = ({ onFetchData, pokemon }) => {
  useEffect(
    () => {
      const name = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
      onFetchData(name);
    },
    [],
  );

  return (
    <Pokemon name={pokemon.name} imageUrl={pokemon.imageUrl}/>
  );
};

const mapStateToProps = (store: StoreProps) => ({
  pokemon: store.pokemon,
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchData: (pokemonName: string) => {
    dispatch(getPokemonData(pokemonName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
