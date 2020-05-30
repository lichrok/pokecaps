import {
  DATA_POKEMON_CLEAR,
  DATA_POKEMON_LOADED,
  DATA_POKEMON_REQUEST,
} from '../constants/pokemon';
import { Actions, PokemonProps } from '../types';
import { Reducer } from 'redux';

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
        ...action.payload,
        isLoading: true,
        error: '',
      };
    case DATA_POKEMON_LOADED:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case DATA_POKEMON_CLEAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
