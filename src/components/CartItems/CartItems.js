import React, { useContext } from 'react';
import Item from '../Item.js/Item';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import './CartItems.css'

const CartItems = () => {
  const { cartProducts, vaciarCarrito, totalCompra } = useContext(CartContext);

  return (
    <div className='cart-items container'>

      {cartProducts.map((producto) => (
        <Item key={`cart_${producto.id}`} producto={producto} mostrarBotonEliminar={true} className={'card-horizontal'} mostrarDescripcion={true} mostrarCantidadSubtotal={true} />
      ))}

      <div className='cart-items-option'>
        <button className='cart-empty-button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <NavLink className='cart-create-order-link' to='/checkout'>Crear orden de compra</NavLink>

        <p className='cart-total-text'>El total de la compra es de $ {totalCompra}</p>
      </div>

    </div>
  );
};

export default CartItems;
