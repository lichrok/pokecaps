import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import Pokemon from 'src/containers/Pokemon';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route path="/single" component={Pokemon}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
