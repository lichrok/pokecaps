import React from 'react';
import { PokemonProps } from 'src/types';

const Pokemon: React.FC<PokemonProps> = ({
                                           name,
                                           imageUrl,
                                         }) => (
  <div>
    <h1>{name}</h1>
    <img src={imageUrl} alt={name}/>
  </div>
);

export default Pokemon;
