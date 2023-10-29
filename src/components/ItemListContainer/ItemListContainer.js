
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';




const ItemListContainer = ({ texto }) => {

  return (
    <div className='container'>
      <div className='greeting'>{texto}</div>
      <ItemList />
    </div>

  )

}
export default ItemListContainer
