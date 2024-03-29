

import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Item from '../Item.js/Item';
import './CategoriaMarca.css';
import { ProductContext } from '../../ProductContext';

const CategoriaMarca = () => {
    const { marca } = useParams();
    const { productos, loading } = useContext(ProductContext);


    if (loading) {
        return (
            <div className='item-list'>
                <p>Cargando productos...</p>
            </div>
        );
    }

    const marcaSeleccionada = productos.filter(producto => producto.marca === marca);

    if (marcaSeleccionada.length === 0) {
        return <div>No se encontraron productos para la marca seleccionada.</div>;
    }

    return (
        <div className='categoria-marca container'>
            {marcaSeleccionada.map((producto) => (
                <Item producto={producto} mostrarBotonAgregar={false} mostrarDescripcion={true} className={'card'}>
                    <NavLink key={producto.id} to={`/productos/${marca}/${producto.id}`} className='nav-link'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button className='cart-create-order-link'>Ver detalle</button>
                        </div>
                    </NavLink>
                </Item>

            ))}
        </div>
    );
};

export default CategoriaMarca;

