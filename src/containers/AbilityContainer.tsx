import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAbilityData } from '../redux/actions/ablities';
import { getLastPathname } from '../utils';
import { AbilityProps } from '../types';
import Ability from '../components/Ability';
import { Link } from 'react-router-dom';
import ReturnIcon from 'src/assets/svg/return.svg';
import { ReactSVG } from 'react-svg';

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
    <div className="content">
      <a
        className="content__back-link"
        href="#"
        onClick={() => window.history.back()}
      >
        <ReactSVG
          src={ReturnIcon}
          beforeInjection={svg => svg.classList.add('content__back-icon')}
        />
      </a>
      <Ability
        name={ability.name}
        effect_entries={ability.effect_entries}
        generation={ability.generation}
        pokemon={ability.pokemon}
      />
      <div className="content-footer">
        <Link className="link link_theme_big" to={'/'}>See 'em all!</Link>
      </div>
    </div>
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
