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

export interface TypeProps {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonProps {
  isLoading?: boolean;
  name: string;
  imageUrl: string;
}
