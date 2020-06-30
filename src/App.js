import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import { Loader, Image, Container } from 'semantic-ui-react';
import FilmCard from './components/FilmCard';
import CharacterCards from './components/CharacterCards';
import Header from './components/Header';
import Search from './components/Search';
import Error from './components/Error';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchValue, setSearchValue] = useState('');

  // const getCharacters = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await axios.get(
  //       `https://swapi.dev/api/people/?search=${searchValue}`,
  //     );

  //     setSearchResults(data.data.results);
  //   } catch (err) {
  //     console.log(err.message);
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //     setTimeout(() => setError(''), 3500);
  //   }
  // };
  const memoizedCallback = useCallback(async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://swapi.dev/api/people/?search=${searchValue}`,
      );

      setSearchResults(data.data.results);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setError(''), 3500);
    }
  }, [searchValue]);

  useEffect(() => {
    memoizedCallback();
  }, [searchValue, memoizedCallback]);

  console.log({ searchValue });

  const getFilms = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`https://swapi.dev/api/films/`);
      setFilms(data.data.results);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // async function getFilms() {
  //   try {
  //     setLoading(true);
  //     const data = await axios.get(`https://swapi.dev/api/films/`);
  //     setFilms(data.data.results);
  //   } catch (err) {
  //     console.log(err.message);
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path='/movie/:id'>
            <FilmCard films={films} error={error} />
          </Route>

          <Route path='/'>
            <Search setSearchValue={setSearchValue} />
            {loading && (
              <Loader active inline>
                Loading...
              </Loader>
            )}
            {searchResults.length > 0 && searchValue.length > 2 ? (
              <CharacterCards
                characters={searchResults}
                getFilms={getFilms}
                films={films}
              />
            ) : (
              <Image src='./movie-icon.svg' size='medium' />
            )}
            {error && <Error error={error} />}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
