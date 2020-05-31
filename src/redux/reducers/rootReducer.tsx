import { combineReducers } from 'redux';
import dataReducer from 'src/redux/reducers/pokemonList';
import pokemonReducer from 'src/redux/reducers/pokemon';
import abilityReducer from 'src/redux/reducers/abilities';

export default combineReducers({
  data: dataReducer,
  pokemon: pokemonReducer,
  ability: abilityReducer,
});
