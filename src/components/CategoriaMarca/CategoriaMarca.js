import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { productos } from '../ProductosData/ProductosData'
import Item from '../Item.js/Item'
import './CategoriaMarca.css'


const CategoriaMarca = () => {
    const { marca } = useParams();
    const marcaSeleccionada = productos.filter(producto => producto.marca === marca);
    console.log(marcaSeleccionada)
    if (marcaSeleccionada.length === 0) {
        return <div>No se encontraron productos para la marca seleccionada.</div>;
    }

    return (
        <div className='categoria-marca'>
            {marcaSeleccionada.map((producto) => (
                <NavLink key={producto.id} to={`/productos/${marca}/${producto.id}`}>
                    <Item producto={producto} />
                </NavLink>
            ))}
        </div>
    );
}

export default CategoriaMarca;
