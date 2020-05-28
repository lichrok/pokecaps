import { DATA_POKEMON_REQUEST } from '../constants/pokemon';
import { Dispatch } from 'redux';

export const getPokemonData = (pokemonName: string) => async (dispatch: Dispatch) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: DATA_POKEMON_REQUEST,
        payload: json,
      }),
    );
};
