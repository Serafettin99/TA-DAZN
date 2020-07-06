import React, { useState } from 'react';
import {
  Icon,
  Transition,
  Button,
  Loader,
  Container,
  Header,
} from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import Error from './Error';

const FilmCard = ({ films, error }) => {
  const [visible, setVisible] = useState(false);

  let { id } = useParams();

  if (films.length === 0)
    return (
      <>
        <Loader active inline>
          Loading...
        </Loader>{' '}
        {error && <Error error={error} />}
      </>
    );

  const { title, director, release_date, opening_crawl } = films.find(
    (film) => film.episode_id.toString() === id,
  );

  return (
    <>
      <Container text textAlign='left'>
        <Header as='h3'>{title}</Header>
        <h4>
          Director: <span className='date'>{director}</span>
        </h4>
        <h4>
          Release date: <span className='date'>{release_date}</span>
        </h4>
        <Button
          onClick={() => {
            setVisible((prevState, state) => (state = !prevState));
          }}
        >
          {visible ? 'Hide' : 'Show Details'}
        </Button>
        <Transition.Group animation={'drop'} duration={1500}>
          {visible && <p>{opening_crawl}</p>}{' '}
        </Transition.Group>

        <Link to='/'>
          {' '}
          <Button secondary>
            <Icon disabled name='arrow left' /> Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default FilmCard;
