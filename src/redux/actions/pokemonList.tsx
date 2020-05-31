import { Dispatch } from 'redux';
import {
  FETCH_DATA,
  REQUEST_URL,
  SEARCH_POKEMON,
} from 'src/constants/pokemonList';
import api from 'src/utils/api';

export const fetchData = () => async (dispatch: Dispatch) => {
  await api
    .get(REQUEST_URL)
    .then(response => dispatch({
      type: FETCH_DATA,
      payload: response.data.results,
    }))
    .catch(error => console.error(error));
};

export const searchPokemon = (payload: string) => ({
  payload,
  type: SEARCH_POKEMON,
});
