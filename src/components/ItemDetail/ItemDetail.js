import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item.js/Item';
import './ItemDetail.css';
import { ProductContext } from '../../ProductContext';

const ItemDetail = () => {
  const { productos, loading } = useContext(ProductContext);
  const { id } = useParams();

  if (loading) {
    // Si loading es true, mostrar un indicador de carga
    return (
      <div className='item-detail container'>
        <p>Cargando detalle del producto...</p>
      </div>
    );
  }

  const productoSeleccionado = productos.find((producto) => producto.id === id);

  if (productoSeleccionado) {
    return (
      <div className='item-detail container'>
        <Item id={id} producto={productoSeleccionado} mostrarBotonAgregar={true} className={'card'} />
      </div>
    );
  }
};

export default ItemDetail;









