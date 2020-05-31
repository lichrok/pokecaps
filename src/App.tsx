import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import PokemonContainer from './containers/PokemonContainer';
import AbilityContainer from './containers/AbilityContainer';
import ErrorNotFound from './components/ErrorNotFound';
import './styles/css/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route path="/pokemon/:pokemonName" component={PokemonContainer}/>
          <Route path="/ability/:abilityName" component={AbilityContainer}/>
          <Route component={ErrorNotFound}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
