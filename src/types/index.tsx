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

export type ImgProps = {
  front_default: string;
};

export type StatProps = {
  stat: {
    name: string;
  };
  base_stat: number;
};

export type TypeProps = {
  slot: number;
  type: {
    name: string;
  };
};

export type AbilityProps = {
  ability: {
    name: string;
    url: string;
  };
};

export interface PokemonProps {
  isLoading: boolean;
  name: string;
  sprites: ImgProps;
  height: number;
  weight: number;
  types: TypeProps[];
  stats: StatProps[];
  abilities: AbilityProps[];
}
