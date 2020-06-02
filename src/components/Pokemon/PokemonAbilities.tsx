import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonAbilityProps } from 'src/types';

interface Props {
  abilities: PokemonAbilityProps[];
}

const PokemonAbilities: React.FC<Props> = ({ abilities }): any => {
  if (abilities.length) {
    return <tr>
      <td>Abilities</td>
      <td>
        <ul className="inline-list">
          {abilities.map((item) => {
            const { ability } = item;

            return <li key={ability.name}>
              <Link to={`/ability/${ability.name}`} className="link">
                {ability.name}
              </Link>
            </li>;
          })}
        </ul>
      </td>
    </tr>;
  }

  return null;
};

export default PokemonAbilities;
