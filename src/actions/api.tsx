import { FETCH_DATA } from '../constants/api';
import { Dispatch } from 'redux';

export const fetchData = () => async (dispatch: Dispatch) => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: FETCH_DATA,
        payload: json,
      }),
    );
};
