import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import PokemonContainer from 'src/containers/PokemonContainer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route path="/pokemon/:pokemonName" component={PokemonContainer}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
