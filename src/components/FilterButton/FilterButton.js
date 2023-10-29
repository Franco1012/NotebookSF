import React from 'react';
import { NavLink } from 'react-router-dom';
import './FilterButton.css';


const FilterButton = ({ text }) => {

  return (
    <ul className='list-filter-button'>
      <NavLink key={text} to={`/productos/${text}`} className='product-link'>
        <li><button className='filter-button'>{text}</button></li>
      </NavLink>
    </ul>
  );
};

export default FilterButton;
