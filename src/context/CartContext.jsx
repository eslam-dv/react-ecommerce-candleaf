import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import products from "../db/products.json";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  let localCart = JSON.parse(localStorage.getItem("cartItems"));
  if (localCart) {
    return (cart = localCart);
  }
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getSubtotal = () => {
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        subtotal += cartItems[item] * itemInfo.price;
      }
    }
    return subtotal;
  };

  const addToCart = (itemId, quantity) => {
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const addOne = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeOne = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const changeQuantity = (itemId, newAmount) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const getCartItemCount = () => {
    let count = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        count += cartItems[item];
      }
    }
    return count;
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addOne,
    removeOne,
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
    getSubtotal,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
