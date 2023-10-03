
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { productos } from '../ProductosData/ProductosData';


const ItemListContainer = ({ texto }) => {

  return (
    <div className='container'>
      <div className='greeting'>{texto}</div>
      <ItemList productos={productos} />
    </div>

  )

}
export default ItemListContainer
