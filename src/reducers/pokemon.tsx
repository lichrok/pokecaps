import { DATA_POKEMON_REQUEST } from 'src/constants/pokemon';
import { Actions, PokemonProps } from 'src/types';
import { Reducer } from 'redux';

const initState: PokemonProps = {
  isLoading: false,
  name: '',
  imageUrl: '',
};

const pokemonReducer: Reducer<PokemonProps> = (state = initState, action: Actions) => {
  switch (action.type) {
    case DATA_POKEMON_REQUEST:
      const { name, sprites: { front_default: imageUrl } } = action.payload;

      return {
        ...state,
        name,
        imageUrl,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
