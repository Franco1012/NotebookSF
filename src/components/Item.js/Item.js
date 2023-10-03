import React from 'react';
import './Item.css'


const Item = ({ producto }) => {


  return (
    <div className='card'>

      <img src={producto.img} alt="img" />
      <h2>{producto.marca}</h2>
      <h2 className='card-titulo'>{producto.precio}</h2>
      <p className='card-descripcion'>{producto.descripcion}</p>


    </div>
  );
}

export default Item;