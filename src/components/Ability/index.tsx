import React from 'react';
import { Link } from 'react-router-dom';
import { AbilityProps } from 'src/types';

const Ability: React.FC<AbilityProps> = ({
  name,
  pokemon,
  effect_entries,
  generation,
}) => {
  return (
    <div>
      <button onClick={() => window.history.back()}>Go back</button>
      <h1>{name}</h1>
      {effect_entries.map(entry => <p key={`a-${entry.effect}`}>{entry.effect}</p>)}
      <p>Generation: {generation.name}</p>
      <ul>
        {pokemon.map(character => <li key={`a-${character.pokemon.name}`}>
          <Link to={`/pokemon/${character.pokemon.name}`}>
            {character.pokemon.name}
          </Link>
        </li>)}
      </ul>
    </div>
  );
};

export default Ability;
