import { Reducer } from 'redux';
import { DATA_ABILITY_REQUEST } from 'src/constants/abilities';
import { Actions, AbilityProps } from '../types';

const initState: AbilityProps = {
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
        ...action.payload,
      };

    default:
      return state;
  }
};

export default abilityReducer;
