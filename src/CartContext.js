import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  //recuperamos los datos almacenados en el localStorage
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cartProducts, setCartItems] = useState(initialCart);//inicializamos cartProducts con los datos del localStorage
  const [totalCantidad, setTotalCantidad] = useState(0);
  const [totalCompra, setTotalCompra] = useState(0);
  //almacenamos cartProducts en el localStorage cada vez que haya un cambio en el estado cartProducts o totalCantidad
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts, totalCantidad]);

  useEffect(() => {
    const total = cartProducts.reduce((acumulador, producto) => acumulador + producto.subtotal, 0);//calculamos la compra total
    const cantidad = cartProducts.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);//calculamos la cantidad total
    //seteamos los estados totalCompra y totalCantidad cada vez que haya un cambio en cartProducts o totalCantidad
    setTotalCompra(total);
    setTotalCantidad(cantidad);


  }, [cartProducts, totalCantidad]);

  const agregarProducto = (producto) => {
    //recorremos el array para verificar si el producto existe
    const productoExistente = cartProducts.find((item) => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad++;
      productoExistente.subtotal = productoExistente.cantidad * productoExistente.precio;
    } else {
      //le agregamos la propiedad cantidad y la propiedad subtotal al producto
      const nuevoProducto = { ...producto, cantidad: 1, subtotal: producto.precio };
      setCartItems([...cartProducts, nuevoProducto]);//agregamos el nuevo producto al carrito de compras
    }
    setTotalCantidad(totalCantidad + 1);//actualizamos el estado totalCantidad

  };
  const eliminarProducto = (producto) => {
    // buscamos la posición del primer producto que sea igual
    const index = cartProducts.findIndex((item) => item === producto);

    if (index !== -1) {
      const nuevoCarrito = [...cartProducts];//creamos una copia
      const productoEnCarrito = nuevoCarrito[index];//hacemos referencia al producto especifico

      if (productoEnCarrito.cantidad > 1) {
        // Si la cantidad es mayor que 1, disminuimos la cantidad en 1
        productoEnCarrito.cantidad--;
        productoEnCarrito.subtotal -= productoEnCarrito.precio


      } else {
        // Si la cantidad es 1, eliminamos el producto del carrito
        nuevoCarrito.splice(index, 1);
      }

      // Actualizamos el estado del carrito con el nuevo array
      setCartItems(nuevoCarrito);
      setTotalCantidad(totalCantidad - 1);
    }
  };

  const vaciarCarrito = () => {
    setCartItems([]);
    setTotalCantidad(0);
  }



  return (


    <CartContext.Provider value={{ cartProducts, totalCantidad, agregarProducto, vaciarCarrito, eliminarProducto, totalCompra }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
