
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { ProductContext } from '../../ProductContext';
import { useContext } from 'react';
/*import { productos } from '../ProductosData/ProductosData';*/



const ItemListContainer = ({ texto }) => {
const productos=useContext(ProductContext)
console.log(productos)
  return (
    <div className='container'>
      <div className='greeting'>{texto}</div>
      <ItemList/>
    </div>

  )

}
export default ItemListContainer
