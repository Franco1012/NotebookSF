import React, { useContext} from 'react';
import Item from '../Item.js/Item';
import { NavLink } from 'react-router-dom'; 
import { CartContext } from '../../CartContext';
import './CartItems.css'

const CartItems = () => {
  const { cartProducts, vaciarCarrito,totalCompra } = useContext(CartContext);



  return (
    <div className='cart-items container'>

      {cartProducts.map((producto) => (
        <Item key={producto.id} producto={producto} mostrarBotonEliminar={true} className={'card-horizontal'}  mostrarCantidadSubtotal={true} />
      ))}
      
      <div className='cart-items-option'>
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <NavLink  to='/checkout'>Crear orden de compra</NavLink>
      
      <p>El total de la compra es de {totalCompra}</p>
      </div>
     
    </div>
  );
};

export default CartItems;
