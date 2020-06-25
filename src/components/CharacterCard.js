import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';

const CharacterCard = ({ character, movies }) => {
  const [visible, setVisible] = useState(false);
  const { name, birth_year, height, gender, films } = character;

  return (
    <div class='ui items'>
      <div class='item'>
        <div class='image'>
          <img src='/profile-avatar.png' />
        </div>
        <div class='content'>
          <div class='header'>{name}</div>
          <div class='meta'>{birth_year}</div>
          <div class='description'>{height}</div>
          <div class='extra'>{gender}</div>
        </div>
        <div role='list' class='ui list'>
          {films.map((film) => (
            <div role='listitem' class='item'>
              {
                movies.find((movie) => movie.episode_id == film.split('/')[5])
                  .title
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
