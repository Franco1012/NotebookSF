import React, { useContext } from 'react';
import './Item.css'
import { CartContext } from '../../CartContext';


const Item = ({ id,producto, mostrarBotonAgregar,mostrarBotonEliminar, mostrarCantidadSubtotal,className}) => {

  const { agregarProducto,eliminarProducto } = useContext(CartContext)

  return (

    <div className={className}>
      <img src={producto.img} alt="img"/>
      <h2>{producto.marca}</h2>
      <h2 className='card-titulo'>${producto.precio}</h2>
      <p className='card-descripcion'>{producto.descripcion}</p>

      {mostrarBotonAgregar ? (
        <button onClick={() => agregarProducto(producto,id)}>Agregar al carrito</button>

      ) : null}
      {mostrarBotonEliminar? (
        <button onClick={()=>eliminarProducto(producto)} >Eliminar</button>

      ) : null}
      { mostrarCantidadSubtotal?(
        <div>
          <p>Cantidad:{producto.cantidad}</p>
          <p>Subtotal: {producto.subtotal}</p>
        </div>
      ):null}

    </div>
  );
}

export default Item;