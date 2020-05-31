export type DataPokemonInitialState = {
  name: string;
  url: string;
};

export interface DataInitialState {
  allPokemons: DataPokemonInitialState[];
  searchPokemon: string;
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

export type PokemonAbilityProps = {
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
  abilities: PokemonAbilityProps[];
}

export type EffectProps = {
  effect: string;
};

export type AbilityPokemonsProps = {
  pokemon: {
    name: string;
  },
};

export interface AbilityProps {
  name: string;
  effect_entries: EffectProps[];
  generation: {
    name: string;
  };
  pokemon: AbilityPokemonsProps[];
}

export interface RootProps {
  data: DataInitialState;
  pokemon: PokemonProps;
  ability: AbilityProps;
}
