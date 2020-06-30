import React from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export const CharacterCards = ({ characters, getFilms, films }) => {
  return (
    <Grid columns={2} divided>
      {characters.map((character) => (
        <Grid.Column key={character.name}>
          <Grid.Row>
            <CharacterCard
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
