import React, { useState, useContext } from 'react';
import Form from '../Form/Form';
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from '../../CartContext';
import useFormValidation from '../../hooks/useValidForm';

const Checkout = () => {
  const { cartProducts, totalCompra, vaciarCarrito } = useContext(CartContext);
  const { nombre, telefono, email, setNombre, setTelefono, setEmail, isDisabled, isValidNombre, isValidTelefono, isValidEmail } = useFormValidation();

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
      items: [...cartProducts],
      total: totalCompra
    };

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        console.log("devuelve de firebase", id);
        setOrderId(id);
        vaciarCarrito();
        const orderDoc = doc(ordersCollection, id);

        return updateDoc(orderDoc, {
          buyer: {
            name: nombre,
            phone: telefono,
            email: email,
          },
          items: [...cartProducts],
          total: totalCompra,
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
        <div>
          <h2>Felicitaciones! {nombre} tu orden fue realizada con éxito</h2>
          <h5>Su orden es {orderId}</h5>
        </div>
      ) : (
        <Form crearOrden={crearOrden}
          nombre={nombre}
          telefono={telefono
          } email={email}
          setNombre={setNombre}
          setTelefono={setTelefono}
          setEmail={setEmail}
          isDisabled={isDisabled}
          isValidNombre={isValidNombre}
          isValidTelefono={isValidTelefono}
          isValidEmail={isValidEmail} />
      )}
    </div>
  );
}

export default Checkout;
