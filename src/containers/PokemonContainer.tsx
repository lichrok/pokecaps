import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { getLastPathname } from 'src/utils';
import { getPokemonData, pokemonDataClear } from '../redux/actions/pokemon';
import { PokemonProps } from '../types';
import Pokemon from '../components/Pokemon';
import ReturnIcon from '../assets/svg/return.svg';

interface PokemonReqProps extends PokemonProps {
  onFetchData: Function;
  onLeavePage: Function;
  pokemon: any;
}

type StoreProps = {
  pokemon: any,
};

const PokemonContainer: React.FC<PokemonReqProps> = ({
  onFetchData,
  onLeavePage,
  pokemon,
}) => {
  useEffect(
    () => {
      onFetchData(getLastPathname());
    },
    [],
  );

  return (
    <section className="content">
      <Link
        to="/"
        className="content__back-link"
        onClick={() => onLeavePage()}
        title="See 'em all!"
      >
        <ReactSVG
          src={ReturnIcon}
          beforeInjection={svg => svg.classList.add('content__back-icon')}
        />
      </Link>
      <Pokemon
        isLoading={pokemon.isLoading}
        name={pokemon.name}
        sprites={pokemon.sprites}
        height={pokemon.height}
        weight={pokemon.weight}
        types={pokemon.types}
        stats={pokemon.stats}
        abilities={pokemon.abilities}
      />
    </section>
  );
};

const mapStateToProps = (store: StoreProps) => ({
  pokemon: store.pokemon,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onFetchData: (pokemonName: string) => {
    dispatch(getPokemonData(pokemonName));
  },
  onLeavePage: () => {
    dispatch(pokemonDataClear());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
