import { FETCH_DATA } from 'src/constants/api';

export interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

export interface DataState {
  results: [];
}

type Actions = {
  type: string;
  payload: any;
};

const initState = {
  allPokemons: [],
  isLoading: false,
};

const dataReducer = (state: any = initState, action: Actions) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        allPokemons: action.payload.results,
      };
    default:
      return state;
  }
};

export default dataReducer;
