// user context
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [featured, setFeatured] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`${url}/products`).then((response) => {
  //     const featured = featuredProducts(flatternProducts(response.data));
  //     const products = flatternProducts(response.data);
  //     setProducts(products);
  //     setFeatured(featured);
  //     setLoading(false);
  //   });
  //   return () => {};
  // }, []);

  return <UserContext.Provider value="user">{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
