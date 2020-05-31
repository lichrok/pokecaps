import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, searchPokemon } from 'src/redux/actions/pokemonList';
import { filterPokemons } from 'src/redux/reselect';
import ListItem from '../components/ListItem';
import listStyles from '../containers/listStyle';
import { ListItemProps } from '../types';

type ListProps = {
  onFetchData: Function,
  onSearchUpdate: Function,
  pokemons: [],
};

type StoreProps = {
  data: {
    allPokemons: [],
    searchPokemon: string,
  },
};

const PokemonList = ({ onFetchData, onSearchUpdate, pokemons }: ListProps) => {
  useEffect(
    () => {
      onFetchData();
    },
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSearchUpdate(event.target.value);

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange}/>
      </div>
      <div className={listStyles().cardLayout}>
        {pokemons.length
          ? pokemons.map((pokemon: ListItemProps) =>
            <ListItem name={pokemon.name} key={pokemon.name}/>,
          )
          : <p>There's no pokemon 😿</p>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (store: StoreProps) => {
  return {
    pokemons: store.data.searchPokemon
      // @ts-ignore
      ? filterPokemons(store.data)
      : store.data.allPokemons,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  onFetchData: () => {
    dispatch(fetchData());
  },
  onSearchUpdate: (name: string) => dispatch(searchPokemon(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
