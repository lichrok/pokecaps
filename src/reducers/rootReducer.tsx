import { combineReducers } from 'redux';
import dataReducer from './pokemonList';
import pokemonReducer from './pokemon';
import abilityReducer from './abilities';

export default combineReducers({
  data: dataReducer,
  pokemon: pokemonReducer,
  ability: abilityReducer,
});
