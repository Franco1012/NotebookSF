import React, { useContext } from 'react'
import cart from '../../assets/img/cart-img.png'
import './CartWidget.css'
import { NavLink } from 'react-router-dom'; 
import { CartContext } from '../../CartContext';



const CartWidget = () => {
  const { totalCantidad} = useContext(CartContext); 
  
  
 
  return (
    <NavLink to="/CartItems" className='nav-link'>
      <div className='cart-container'>
      <img src={cart} alt="cart" className='cart-image' />
      <span className='cart-badge'>{totalCantidad}</span>
      </div>
    </NavLink>
     
   

  )
}
export default CartWidget
