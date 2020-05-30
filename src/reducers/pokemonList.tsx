import { FETCH_DATA } from 'src/constants/pokemonList';
import { Actions, DataInitialState } from 'src/types';
import { Reducer } from 'redux';

const initState: DataInitialState = {
  allPokemons: [],
  isLoading: false,
};

const dataReducer: Reducer<DataInitialState> = (state = initState, action: Actions) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        allPokemons: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
