import React from 'react';
import { StatProps } from 'src/types';

interface Props {
  stats: StatProps[];
}

const PokemonStats: React.FC<Props> = ({ stats }): any => {
  if (stats.length) {
    return stats.map((item) => {
      const { stat, base_stat } = item;

      return <tr key={stat.name}>
        <td>{stat.name}</td>
        <td>
          <div style={{ width: `${base_stat}%` }}>
            <span>{`${base_stat}%`}</span>
          </div>
        </td>
      </tr>;
    });
  }
  return null;
};

export default PokemonStats;
