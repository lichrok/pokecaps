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
          <div className="content__info-stat" style={{ width: `${base_stat}%` }}>
            <small>{`${base_stat}%`}</small>
          </div>
        </td>
      </tr>;
    });
  }
  return null;
};

export default PokemonStats;
