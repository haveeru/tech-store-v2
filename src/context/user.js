// user context
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL';

const UserContext = createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage);
  // const [products, setProducts] = useState([]);
  // const [featured, setFeatured] = useState([]);

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
