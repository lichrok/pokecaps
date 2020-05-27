import React from 'react';

type ListItemProps = {
  name: string,
};

const ListItem = ({ name }: ListItemProps) => (
  <section className="card">
    <span className="card-name">{name}</span>
  </section>
);

export default ListItem;
