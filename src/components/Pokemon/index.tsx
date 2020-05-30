import React, { useState } from 'react';
import { PokemonProps } from 'src/types';
import PokemonStats from './PokemonStats';
import PokemonAbilities from './PokemonAbilities';

const Pokemon: React.FC<PokemonProps> = ({
  name,
  sprites,
  height,
  weight,
  types,
  stats,
  abilities,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={sprites.front_default}
        style={isImageLoaded ? {} : { display: 'none' }}
        onLoad={() => setImageLoaded(true)}
        alt={name}
      />
      <table>
        <tbody>
          <tr>
            <td>Height</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>
              <ul>
                {types.map(type => <li key={`type-${type.type.name}`}>{type.type.name}</li>)}
              </ul>
            </td>
          </tr>
          <PokemonStats stats={stats}/>
          <PokemonAbilities abilities={abilities}/>
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
