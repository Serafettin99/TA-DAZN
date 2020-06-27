import React from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export const CharacterCards = ({ characters, getFilms, films }) => {
  return (
    <Grid columns={2} divided>
      {characters.map((character) => (
        <Grid.Column>
          <Grid.Row>
            <CharacterCard
              key={character.name}
              character={character}
              getFilms={getFilms}
              movies={films}
            />
          </Grid.Row>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterCards;
