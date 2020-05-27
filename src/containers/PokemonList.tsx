import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'src/actions/api';
import ListItem from 'src/components/ListItem';

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
    <main>
      <div className="card-layout">
        {pokemons.map((pokemon: { name: string; }) => <ListItem name={pokemon.name} key={pokemon.name}/>)}
      </div>
    </main>
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
