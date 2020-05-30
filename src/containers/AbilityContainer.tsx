import React, { useEffect } from 'react';
import { getLastPathname } from 'src/helpers/utils';

const AbilityContainer = () => {
  useEffect(
    () => {
      console.log(getLastPathname());
    },
    [],
  );

  return (
    <p>{getLastPathname()}</p>
  );
};

export default AbilityContainer;
