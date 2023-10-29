import React, { useState, useContext } from 'react';
import Form from '../Form/Form';
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from '../../CartContext';
import useFormValidation from '../../hooks/useValidForm';
import './Checkout.css'

const Checkout = () => {
  const { cartProducts, totalCompra, vaciarCarrito } = useContext(CartContext); // Obtenemos datos del carrito desde el contexto
  const { nombre, telefono, email, setNombre, setTelefono, setEmail, isDisabled, isValidNombre, isValidTelefono, isValidEmail } = useFormValidation(); // Obtiene datos del formulario
  console.log(cartProducts); // Muestramos los productos del carrito en la consola

  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const crearOrden = () => {
    const order = {
      buyer: {
        name: nombre,
        phone: telefono,
        email: email
      },
      items: [...cartProducts], // Copiamos los productos del carrito
      total: totalCompra
    };

    // Agregamos una nueva orden a la colección
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id); // Almacenamos el ID de la orden
        vaciarCarrito();
        const orderDoc = doc(ordersCollection, id);

        // Actualizamos la orden con los datos del comprador
        return updateDoc(orderDoc, {
          buyer: {
            name: nombre,
            phone: telefono,
            email: email,
          },
          items: [...cartProducts], // Actualizamos la lista de productos
          total: totalCompra, // Actualizamos el total
        });
      })
      .then(() => {
        console.log("Operación completada con éxito");
      })
      .catch((error) => {
        console.error("Error en la operación:", error);
      });
  }

  return (
    <div>
      {orderId !== null ? (
        <div className='orden-container'>
          <div className='message-box'>
            <h2 className='message-text'>Felicitaciones {nombre}! tu orden fue realizada con éxito</h2>
            <h5>Su orden es {orderId}</h5>
          </div>
        </div>
      ) : (
        <Form crearOrden={crearOrden}
          nombre={nombre}
          telefono={telefono}
          email={email}
          setNombre={setNombre}
          setTelefono={setTelefono}
          setEmail={setEmail}
          isDisabled={isDisabled}
          isValidNombre={isValidNombre}
          isValidTelefono={isValidTelefono}
          isValidEmail={isValidEmail}
        />
      )}
    </div>
  );
}

export default Checkout;
