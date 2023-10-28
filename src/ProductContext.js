import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
 

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'items');
    getDocs(itemCollection)
      .then((res) => {

       setProductos(res)
       console.log(productos)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={productos}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };