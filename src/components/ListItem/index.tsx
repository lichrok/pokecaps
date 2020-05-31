import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemProps } from 'src/types';

const ListItem = ({ name }: ListItemProps) => (
  <Link className="card" to={`/pokemon/${name}`}>
    <svg viewBox="0 0 250 250" className="card__name">
      <defs>
        <path
          id="circlePath"
          d="M100,250 C140,363 384,361 400,250"
        />
      </defs>
      <text textAnchor="middle">
        <textPath xlinkHref="#circlePath" startOffset="50%">
          {name}
        </textPath>
      </text>
    </svg>
  </Link>
);

export default ListItem;
