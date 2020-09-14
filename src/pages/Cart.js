import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  console.log({ cart, total });
  return <h1>hello from cart page</h1>;
};

export default Cart;
