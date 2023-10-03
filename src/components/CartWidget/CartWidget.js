
import cart from '../../assets/img/cart-img.png'
import './CartWidget.css'




const CartWidget = () => {
 
  return (
    <div className='cart-container'>
      <img src={cart} alt="cart" className='cart-image' />
      <span className='cart-badge'>0</span>
      </div>


  )
}
export default CartWidget
