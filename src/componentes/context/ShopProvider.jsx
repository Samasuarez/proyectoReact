import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const Shop = createContext();
const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const isInCart = isProductInCart(product.id);
    if (isInCart) {
      const productoRepetido = products.find(
        (element) => element.id === product.id
      );
      productoRepetido.quantity += product.quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, product]);
    }
  };

  const removeProduct = (id) => {
    const productsFiltered = products.filter((product) => product.id !== id);
    setProducts(productsFiltered);
  };

  const countCart = () => {
    let cantidadTotal = 0;
    for (const product of products) {
      cantidadTotal += product.quantity;
    }
    return cantidadTotal;
  };
  const total = () => {
    let total = 0;
    for (const product of products) {
      total +=product.precio * product.quantity;
    }
    return total;
  };
  const isProductInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  return (
    <Shop.Provider value={{ products, addProduct, countCart, removeProduct, total }}>
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
