import { combineReducers } from 'redux';
import dataReducer from './data';
import pokemonReducer from './pokemon';

export default combineReducers({
  data: dataReducer,
  pokemon: pokemonReducer,
});
