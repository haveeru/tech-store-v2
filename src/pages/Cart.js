import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
//import { userContext } from '../context/user';

const Cart = () => {
  let user = false;
  const { cart, total } = useContext(CartContext);

  if(cart.length === 0) return <EmptyCart />

  return <h1>hello from cart page</h1>;
};

export default Cart;
