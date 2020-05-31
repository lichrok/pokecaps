import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'modern-css-reset/src/reset.css';
import PokemonList from './containers/PokemonList';
import PokemonContainer from './containers/PokemonContainer';
import AbilityContainer from './containers/AbilityContainer';
import ErrorNotFound from './components/ErrorNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route path="/pokemon/:pokemonName" component={PokemonContainer}/>
        <Route path="/ability/:abilityName" component={AbilityContainer}/>
        <Route component={ErrorNotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
