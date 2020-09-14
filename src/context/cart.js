// cart context
import React, { useState, useEffect } from 'react';
import localCart from '../utils/localCart';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    //local storage
    //cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newCartItems);
    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  // remove item
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  // increase amount
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };
  // decrease amount
  const decreaseAmount = (id) => {};
  // add to cart
  const addToCart = (id) => {};
  // clear Cart
  const clearCart = (id) => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItem,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
