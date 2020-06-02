import { Reducer } from 'redux';
import { Actions, PokemonProps } from 'src/types';
import {
  DATA_POKEMON_LOADED,
  DATA_POKEMON_REQUEST,
} from 'src/constants/pokemon';

const initState: PokemonProps = {
  isLoading: false,
  name: '',
  height: 0,
  weight: 0,
  sprites: {
    front_default: '',
  },
  types: [],
  stats: [],
  abilities: [],
};

const pokemonReducer: Reducer<PokemonProps> = (state = initState, action: Actions) => {
  switch (action.type) {
    case DATA_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case DATA_POKEMON_LOADED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default pokemonReducer;
