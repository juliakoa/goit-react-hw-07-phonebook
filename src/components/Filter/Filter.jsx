import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={handleFilterChange}
      className={css.filter}
    />
  );
};

export default Filter;
