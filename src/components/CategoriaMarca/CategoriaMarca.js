import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
/*import { productos } from '../ProductosData/ProductosData'*/
import Item from '../Item.js/Item'
import './CategoriaMarca.css'
import { ProductContext } from '../../ProductContext'




const CategoriaMarca = () => {
    const productos=useContext(ProductContext)
    const { marca } = useParams();
    const marcaSeleccionada = productos.docs.filter(producto => producto.data().marca === marca);
   
    if (marcaSeleccionada.length === 0) {
        return <div>No se encontraron productos para la marca seleccionada.</div>;
    }

    return (
        <div className='categoria-marca container' >
            {marcaSeleccionada.map((producto) => (
                <NavLink key={producto.id} to={`/productos/${marca}/${producto.id}`} className='nav-link'>
                    <Item producto={producto.data()} mostrarBotonAgregar={false} className={'card'} />
                </NavLink>
            ))}
        </div>
    );
}

export default CategoriaMarca;
