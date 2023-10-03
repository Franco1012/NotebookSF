import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../ProductosData/ProductosData';
import Item from '../Item.js/Item';
import './ItemDetail.css'


const ItemDetail = () => {
  const { id } = useParams();
  const productoSeleccionado = productos.find(producto => producto.id === id)

  if (productoSeleccionado) {
    return (
      <div className='item-detail'> <Item producto={productoSeleccionado} /></div>
     
    )
  }





};

export default ItemDetail;








