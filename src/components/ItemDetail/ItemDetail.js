import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
/*import { productos } from '../ProductosData/ProductosData';*/
import Item from '../Item.js/Item';
import './ItemDetail.css'
import { ProductContext } from '../../ProductContext';


const ItemDetail = () => {
  const productos=useContext(ProductContext)
  const { id } = useParams();
  const productoSeleccionado = productos.find(producto => producto.id === id)

  if (productoSeleccionado) {
    return (
      <div className='item-detail'> <Item producto={productoSeleccionado} /></div>
     
    )
  }





};

export default ItemDetail;








