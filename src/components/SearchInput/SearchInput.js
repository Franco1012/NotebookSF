import React from 'react'
import './SearchInput.css'

const SearchInput = ({placeholder}) => {
    return (
      <input
        className='search-input'
        type="text"
        placeholder={placeholder}
      />
    );
  };
export default SearchInput