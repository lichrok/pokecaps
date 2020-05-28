export interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

export interface DataState {
  results: [];
}

export interface DataInitialState {
  allPokemons: [];
  isLoading: boolean;
}

export interface Actions {
  type: string;
  payload: any;
}

export type ListItemProps = {
  name: string,
};
