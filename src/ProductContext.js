import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Agregar estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const querySnapshot = await getDocs(itemCollection);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(data);
        console.log(data)
        setLoading(false); // Cambiar el estado de carga a falso cuando se completa
      } catch (error) {
        console.log(error);
        setLoading(false); // Cambiar el estado de carga a falso en caso de error
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ productos, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
