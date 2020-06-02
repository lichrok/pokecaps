import { Dispatch } from 'redux';
import api from 'src/utils/api';
import {
  DATA_POKEMON_LOADED,
  DATA_POKEMON_REQUEST,
} from 'src/constants/pokemon';
import { ResponseProps } from 'src/types';

export const pokemonRequest = (pokemonName: string) => ({
  pokemonName,
  type: DATA_POKEMON_REQUEST,
});

export const pokemonReceive = (response: ResponseProps) => ({
  type: DATA_POKEMON_LOADED,
  payload: response.data,
});

export const getPokemonData = (pokemonName: string) => async (dispatch: Dispatch) => {
  dispatch(pokemonRequest(pokemonName));

  return await api
    .get(`pokemon/${pokemonName}`)
    .then(response => dispatch(pokemonReceive(response)))
    .catch(error => console.error(error));
};
