import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';

import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const Search = ({ setError, setLoading, setCharacters }) => {
  const [searchValue, setSearchValue] = useState();

  const getCharacters = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://swapi.dev/api/people/?search=${searchValue}`,
      );
      setCharacters(data.data.results);
      console.log(data.data.results);
      console.log({ setCharacters });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setError(''), 1000);
    }
  };
  useEffect(() => getCharacters, [searchValue]);

  return (
    <TextField
      label='Search Character'
      variant='outlined'
      type='search'
      name='search'
      onChange={({ target: { value } }) => {
        console.log(value);
        setSearchValue(value);
      }}
    />
  );
};

export default Search;
