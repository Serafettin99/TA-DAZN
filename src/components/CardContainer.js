import React, { useState } from 'react';
import { Card, Icon, Transition, Button } from 'semantic-ui-react';

const CardContainer = ({ film }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Card key={film.episode_id}>
      <Card.Content>
        <Card.Header>{film.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{film.release_date}</span>
        </Card.Meta>
        <Button
          onClick={() => {
            setVisible((prevState, state) => (state = !prevState));
          }}
        >
          {visible ? 'Hide' : 'Show Details'}
        </Button>
        <Transition.Group animation={'drop'} duration={1500}>
          {visible && <Card.Description>{film.opening_crawl}</Card.Description>}{' '}
        </Transition.Group>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='users' />
          {film.characters.length}
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardContainer;
