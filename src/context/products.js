import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { flatternProducts, featuredProducts } from '../utils/helpers';

export const ProductContext = React.createContext();

// Provider, Consumer, useContext()

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  // extra state values

  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all',
  });

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(flatternProducts(response.data));
      const products = flatternProducts(response.data);

      setSorted(products)
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  const changePage = (index) => {
    console.log(index);
  };

  const updateFilters = (e) => {
    console.log(e);
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
