import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// pages
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';


// components
export default function App() {
  return <Router>

    <Route excat path="/">
      <Home />
    </Route>

    <Route path="/about">
      <About />
    </Route>

    <Route path="/cart">
      <Cart />
    </Route>

  </Router>
}
