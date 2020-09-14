// cart context
import React, { useState } from 'react';
import localCart from '../utils/localCart';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
