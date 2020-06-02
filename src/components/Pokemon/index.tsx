import React, { useState } from 'react';
import { PokemonProps } from 'src/types';
import PokemonStats from './PokemonStats';
import PokemonAbilities from './PokemonAbilities';
import LoaderIcon from 'src/assets/svg/loader.svg';
import { ReactSVG } from 'react-svg';

const Pokemon: React.FC<PokemonProps> = ({
  isLoading,
  name,
  sprites,
  height,
  weight,
  types,
  stats,
  abilities,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const imgLoaderClass = isImageLoaded ? 'is-hidden' : 'is-visible';

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
          <div className="content__info-header">
            <div className="content__info-header-container">
              <h1 className="content__info-name">{name}</h1>
              <img
                className="content__info-img"
                src={sprites.front_default}
                onLoad={() => setImageLoaded(true)}
                hidden={isImageLoaded}
                alt={name}
              />
              <div className={`content__info-loader ${imgLoaderClass}`}>
                <ReactSVG
                  src={LoaderIcon}
                  beforeInjection={svg => svg.classList.add('loader-icon')}
                />
              </div>
            </div>
          </div>
          <div className="content__info-body">
            <table className="content__info-table">
              <tbody>
              <tr>
                <td>Height</td>
                <td>{height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{weight}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>
                  <ul className="inline-list">
                    {types.map(type => <li key={`type-${type.type.name}`}>{type.type.name}</li>)}
                  </ul>
                </td>
              </tr>
              <PokemonStats stats={stats}/>
              <PokemonAbilities abilities={abilities}/>
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  );
};

export default Pokemon;
