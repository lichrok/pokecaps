import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAbilityData } from '../redux/actions/ablities';
import { getLastPathname } from '../utils';
import { AbilityProps } from '../types';
import Ability from '../components/Ability';

interface AbilityReqProps extends AbilityProps {
  onFetchData: Function;
  ability: any;
}

type StoreProps = {
  ability: any,
};

const AbilityContainer: React.FC<AbilityReqProps> = ({
  onFetchData,
  ability,
}) => {
  useEffect(
    () => {
      onFetchData(getLastPathname());
    },
    [],
  );

  return (
    <Ability
      name={ability.name}
      effect_entries={ability.effect_entries}
      generation={ability.generation}
      pokemon={ability.pokemon}
    />
  );
};

const mapStateToProps = (store: StoreProps) => ({
  ability: store.ability,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onFetchData: (abilityName: string) => {
    dispatch(getAbilityData(abilityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AbilityContainer);
