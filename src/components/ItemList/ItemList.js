import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './ItemList.css';
import Item from '../Item.js/Item';

const ItemList = ({ productos }) => {
  return (
    <div className='item-list'>
      {productos.map((producto) => (
        <NavLink key={producto.id} to={`/${producto.id}`} className='product-link'>
          <Item producto={producto} />
        </NavLink>
      ))}
    </div>
  );
}

export default ItemList;


