import React, { useContext } from 'react';
import './Item.css'
import { CartContext } from '../../CartContext';


const Item = ({ producto, mostrarBotonAgregar, mostrarBotonEliminar, mostrarCantidadSubtotal, mostrarDescripcion, className, children }) => {

  const { agregarProducto, eliminarProducto } = useContext(CartContext)

  return (

    <div className={className}>
      <img src={producto.img} alt="img" />
      <h2>{producto.marca}</h2>
      {!mostrarDescripcion ? (
        <p className='card-descripcion'>{producto.descripcion}</p>
      ) : null
      }
      <h2 className='card-titulo'>${producto.precio}</h2>
      {mostrarCantidadSubtotal ? (
        <div>
          <p>Cantidad:{producto.cantidad}</p>
          <p>Subtotal: {producto.subtotal}</p>
        </div>
      ) : null}

      {mostrarBotonAgregar ? (
        <button className='cart-create-order-link' onClick={() => agregarProducto(producto)}>Agregar al carrito</button>

      ) : null}
      {mostrarBotonEliminar ? (
        <button className='cart-empty-button' onClick={() => eliminarProducto(producto)} >Eliminar</button>

      ) : null}

      {children}
    </div>
  );
}

export default Item;