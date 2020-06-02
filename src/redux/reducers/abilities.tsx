import { Reducer } from 'redux';
import { DATA_ABILITY_REQUEST, DATA_ABILITY_LOADED } from 'src/constants/abilities';
import { Actions, AbilityProps } from 'src/types';

const initState: AbilityProps = {
  isLoading: false,
  name: '',
  effect_entries: [],
  generation: {
    name: '',
  },
  pokemon: [],
};

const abilityReducer: Reducer<AbilityProps> = (state = initState, action: Actions) => {
  switch (action.type) {
    case DATA_ABILITY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_ABILITY_LOADED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default abilityReducer;
