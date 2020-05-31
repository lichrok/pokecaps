import { FETCH_DATA, SEARCH_POKEMON } from 'src/constants/pokemonList';
import { Actions, DataInitialState } from 'src/types';
import { Reducer } from 'redux';

const initState: DataInitialState = {
  allPokemons: [],
  isLoading: false,
  searchPokemon: '',
};

const dataReducer: Reducer<DataInitialState> = (state = initState, action: Actions) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        allPokemons: action.payload,
        searchPokemon: '',
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        searchPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
