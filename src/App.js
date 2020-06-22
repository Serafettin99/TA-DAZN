import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  Icon,
  Message,
  Loader,
  Transition,
  Button,
} from 'semantic-ui-react';
import CardContainer from './components/CardContainer';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const getFilms = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`https://swapi.dev/api/films/`);
      console.log(data.data.results);
      setFilms(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  useEffect(getFilms, []);

  return (
    <div className='App'>
      <Container>
        {loading && (
          <Loader active inline>
            Loading...
          </Loader>
        )}
        {films.length > 0 && films.map((film) => <CardContainer film={film} />)}
        {error && (
          <Message>
            <Message.Header>Error</Message.Header>
            <p>{error}</p>
          </Message>
        )}
      </Container>
    </div>
  );
}

export default App;
