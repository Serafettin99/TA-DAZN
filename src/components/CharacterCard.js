import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterCard = ({ character, movies }) => {
  const { name, birth_year, height, gender, films } = character;
  let { id } = useParams();

  return (
    <div class='ui items'>
      <div class='item'>
        <div class='image'>
          <img src='/profile-avatar.png' alt='avatar' />
        </div>
        <div class='content'>
          <div class='header'>{name}</div>
          <div class='meta'>{birth_year}</div>
          <div class='description'>{height}</div>
          <div class='extra'>{gender}</div>
        </div>
        <div role='list' class='ui list'>
          {films.map((film) => {
            id = film.split('/')[5];

            return (
              <div role='listitem' class='item'>
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
