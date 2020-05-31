import { Dispatch } from 'redux';
import api from 'src/utils/api';
import {
  DATA_POKEMON_CLEAR,
  DATA_POKEMON_REQUEST,
} from 'src/constants/pokemon';

export const getPokemonData = (pokemonName: string) => async (dispatch: Dispatch) => {
  await api
    .get(`pokemon/${pokemonName}`)
    .then(response => dispatch({
      type: DATA_POKEMON_REQUEST,
      payload: response.data,
    }))
    .catch(error => console.error(error));
};

export const pokemonDataClear = () => {
  return {
    type: DATA_POKEMON_CLEAR,
    payload: {
      name: '',
      sprites: {
        front_default: '',
      },
    },
  };
};
