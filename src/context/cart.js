// cart context
import React, { useState, useEffect, useReducer } from 'react';
//import localCart from '../utils/localCart';
import reducer from './reducer';

function getCartFromLocalStroage() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStroage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    //cart items
    let newCartItems = cart.reduce((total, cartItems) => {
      return (total += cartItems.amount);
    }, 0);
    setCartItems(newCartItems);
    // cart total
    let newTotal = cart.reduce((total, cartItems) => {
      return (total += cartItems.amount * cartItems.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  // remove item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  // increase amount
  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  // decrease amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: 'REMOVE', payload: id });
      return;
    } else {
      dispatch({ type: 'DECREASE', payload: id });
    }
  };
  // add to cart
  const addToCart = (product) => {
    let item = [...cart].find((item) => item.id === product.id);
    if (item) {
      dispatch({ type: 'INCREASE', payload: product.id });
    } else {
      dispatch({ type: 'ADDTOCART', payload: product });
    }
    // const { id, image, title, price } = product;
    // const item = [...cart].find((item) => item.id === id);
    // if (item) {
    //   increaseAmount(id);
    //   return;
    // } else {
    //   const newItem = { id, image, title, price, amount: 1 };
    //   const newCart = [...cart, newItem];
    //   setCart(newCart);
    // }
  };
  // clear Cart
  const clearCart = () => {
    dispatch({ type: 'CLEARCART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
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
