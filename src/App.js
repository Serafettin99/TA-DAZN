import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import CardContainer from './components/CardContainer';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import Search from './components/Search';
import Error from './components/Error';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFilms = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`https://swapi.dev/api/films/`);
      console.log(data.data.results);
      setFilms(data.data.results);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(getFilms, []);

  return (
    <div>
      <Header />
      <Search
        setError={setError}
        setLoading={setLoading}
        setCharacters={setSearchResults}
      />

      {loading && (
        <Loader active inline>
          Loading...
        </Loader>
      )}
      {films.length > 0 && films.map((film) => <CardContainer film={film} />)}
      {searchResults.length > 0 &&
        searchResults.map((searchResult) => (
          <CharacterCard
            character={searchResult}
            getFilms={getFilms}
            movies={films}
          />
        ))}
      {error && <Error error={error} />}
    </div>
  );
}

export default App;
