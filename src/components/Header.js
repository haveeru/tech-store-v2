import React from 'react';

import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
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
          </div>
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
