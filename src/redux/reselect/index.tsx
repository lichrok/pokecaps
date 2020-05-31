import { createSelector } from 'reselect';
import { DataInitialState } from 'src/types';

export const getPokemons = (store: DataInitialState) => store.allPokemons;

export const getSearchPokemon = (store: DataInitialState) => store.searchPokemon;

export const filterPokemons = createSelector(
  getPokemons,
  getSearchPokemon,
  (allPokemons, searchName) =>
    allPokemons
      .filter(character =>
        character.name
          .toLowerCase()
          .includes(searchName.toLowerCase()),
      ),
);
