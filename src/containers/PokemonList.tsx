import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/api';
import ListItem from '../components/ListItem';
import listStyles from '../containers/listStyle';
import { ListItemProps } from '../types';

type ListProps = {
  onFetchData: Function,
  pokemons: any,
};

type StoreProps = {
  data: {
    allPokemons: [],
  },
};

const PokemonList = ({ onFetchData, pokemons }: ListProps) => {
  useEffect(
    () => {
      onFetchData();
    },
    [],
  );

  return (
    <div className={listStyles().cardLayout}>
      {pokemons.map((pokemon: ListItemProps) => <ListItem name={pokemon.name} key={pokemon.name}/>)}
    </div>
  );
};

const mapStateToProps = (store: StoreProps) => ({
  pokemons: store.data.allPokemons,
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchData: () => {
    dispatch(fetchData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
