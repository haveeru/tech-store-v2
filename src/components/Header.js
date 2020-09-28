import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartLink from './Cart/CartLink';
import logo from '../assets/logo.svg';
import { UserContext } from '../context/user';
import LoginLink from '../components/LoginLink';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
