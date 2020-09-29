import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';

// react-stripe-eelements
import submitOrder from '../strapi/submitOrder';

export default function Checkout(props) {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = useContext(UserContext);

  const history = useHistory();

  // state values

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const isEmpty = !name || alert.show;

  async function handleSubmit(e) {
    e.preventDefault();
  }

  if (cart.length < 1) return <EmptyCart />;

  return <h1>hello from checkout page</h1>;
}
