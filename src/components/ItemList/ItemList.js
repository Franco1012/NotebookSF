
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
        <div>
          <Item producto={producto} mostrarBotonAgregar={false} mostrarDescripcion={true} className={'card'} >
            <NavLink key={producto.id} to={`/${producto.id}`} className='nav-link'>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <button className='cart-create-order-link'>Ver detalle</button>
              </div>
            </NavLink>
          </Item>

        </div>

      ))}
    </div>
  );
}

export default ItemList;



