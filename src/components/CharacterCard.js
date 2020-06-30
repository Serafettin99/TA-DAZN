import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterCard = ({ character, movies }) => {
  const { name, birth_year, height, gender, films } = character;
  let { id } = useParams();

  return (
    <div className='ui items'>
      <div className='item'>
        <div className='image'>
          <img src='/profile-avatar.png' alt='avatar' />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='meta'>{birth_year}</div>
          <div className='description'>{height}</div>
          <div className='extra'>{gender}</div>
        </div>
        <div role='list' className='ui list'>
          {films.map((film, i) => {
            id = film.split('/')[5];

            return (
              <div role='listitem' className='item' key='i'>
                {movies.length > 0 && (
                  <Link to={`/movie/${id}`}>
                    {
                      movies.find(
                        (movie) =>
                          movie.episode_id.toString() === film.split('/')[5],
                      ).title
                    }
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
