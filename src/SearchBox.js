import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type='text'
      placeholder='search robots'
      onChange={searchChange}
    />
  );
};

export default SearchBox;
