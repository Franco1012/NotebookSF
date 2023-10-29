
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './ItemList.css';
import Item from '../Item.js/Item';
import { ProductContext } from '../../ProductContext';

const ItemList = () => {
  const { productos, loading } = useContext(ProductContext);

  if (loading) {
    // Si loading es true, mostrar un indicador de carga
    return (
      <div className='item-list'>
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className='item-list'>
      {productos.map((producto) => (
        <NavLink key={producto.id} to={`/${producto.id}`} className='nav-link'>
          <Item producto={producto} mostrarBotonAgregar={false} mostrarDescripcion={true} className={'card'} />
        </NavLink>
      ))}
    </div>
  );
}

export default ItemList;



