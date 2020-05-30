import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import PokemonContainer from './containers/PokemonContainer';
import AbilityContainer from './containers/AbilityContainer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route path="/pokemon/:pokemonName" component={PokemonContainer}/>
        <Route path="/ability/:abilityName" component={AbilityContainer}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
