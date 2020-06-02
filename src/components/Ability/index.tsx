import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { AbilityProps } from 'src/types';
import { removeHyphen, getGeneration } from 'src/utils';
import LoaderIcon from '../../assets/svg/loader.svg';

const Ability: React.FC<AbilityProps> = ({
  isLoading,
  name,
  pokemon,
  effect_entries,
  generation,
}) => {
  return (
    <div className="content__info">
      {isLoading
        ? <div className="loader">
          <ReactSVG
            src={LoaderIcon}
            beforeInjection={svg => svg.classList.add('loader-icon')}
          />
        </div>
        : <>
          <h1 className="content__info-title">{removeHyphen(name)}</h1>
          {effect_entries.map(entry => <p key={`a-${entry.effect}`}>{entry.effect}</p>)}
          <p>
            <b>Generation:</b>
            <span className="content__info-generation">{getGeneration(generation.name)}</span>
          </p>
          <div className="content__info-body">
            <span className="ability-pokemons__title">Pokemons with this ability:</span>
            <ul className="inline-list inline-list_theme_capital">
              {pokemon.map(character => <li key={`a-${character.pokemon.name}`}>
                <Link to={`/pokemon/${character.pokemon.name}`} className="link">
                  {character.pokemon.name}
                </Link>
              </li>)}
            </ul>
          </div>
        </>
      }
    </div>
  );
};

export default Ability;
