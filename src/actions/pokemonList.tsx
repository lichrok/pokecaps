import { Dispatch } from 'redux';
import { FETCH_DATA, REQUEST_URL } from 'src/constants/pokemonList';
import api from '../utils/api';

export const fetchData = () => async (dispatch: Dispatch) => {
  await api
    .get(REQUEST_URL)
    .then(response => dispatch({
      type: FETCH_DATA,
      payload: response.data.results,
    }))
    .catch(error => console.error(error));
};
