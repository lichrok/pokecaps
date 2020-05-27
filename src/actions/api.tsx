import { FETCH_DATA } from 'src/constants/api';
import { TypedResponse, DataState } from 'src/reducers/data';

declare function fetch<T>(...args: any): Promise<TypedResponse<T>>;

export const fetchData = () => async (dispatch: (arg0: { type: string; payload: DataState; }) => void) => {
  fetch<DataState>('https://pokeapi.co/api/v2/pokemon/?limit=20')
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: FETCH_DATA,
        payload: json,
      }),
    );
};
