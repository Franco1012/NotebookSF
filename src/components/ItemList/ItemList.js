import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; 
import './ItemList.css';
import Item from '../Item.js/Item';
import { ProductContext } from '../../ProductContext';

const ItemList = () => {
  const productos=useContext(ProductContext)
  return (
    <div className='item-list'>
      {productos.docs.map((producto) => (
        <NavLink key={producto.id} to={`/${producto.id}`} className='nav-link'>
          <Item producto={producto.data()} mostrarBotonAgregar={false} className={'card'} />
        </NavLink>
      ))}
    </div>
  );
}

export default ItemList;


