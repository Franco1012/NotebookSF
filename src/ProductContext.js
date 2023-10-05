import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('/productos.json')
        .then((response) => response.json())
        .then((data) => {
          setProductos(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Error al cargar los productos:', error);
        });
    }, 3000); // Espera 3 segundos antes de cargar los datos

  }, []);
  const loadingStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Puedes ajustar el tamaño de la fuente según tus preferencias
    height: '100vh', // Esto centra verticalmente el texto en la pantalla completa
  };
  return (
    <ProductContext.Provider value={productos}>
      {isLoading ? (
        <div style={loadingStyles}>Cargando...</div>
      ) : (
        children
      )}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
