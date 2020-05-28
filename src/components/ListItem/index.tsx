import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import { ListItemProps } from 'src/types';

const ListItem = ({ name }: ListItemProps) => (
  <Link className={styles().card} to={`/pokemon/${name}`}>
    <span className="card-name">{name}</span>
  </Link>
);

export default ListItem;
