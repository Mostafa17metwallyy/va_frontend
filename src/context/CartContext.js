import React, { createContext, useState } from "react";

// Create the Cart Context
export const CartContext = createContext();

// Create the Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity || 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove the item if quantity reaches 0
    });
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
