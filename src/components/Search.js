import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ setSearchValue }) => {
  return (
    <TextField
      style={{ marginBottom: '2rem' }}
      fullWidth={true}
      label='Search for movie characters'
      variant='outlined'
      type='search'
      name='search'
      onChange={({ target: { value } }) => {
        if (value.length >= 3) setSearchValue(value);
      }}
    />
  );
};

export default Search;
