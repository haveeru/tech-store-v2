import React, { useContext } from 'react';
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  return <ProductList products={sorted} />;
};

export default PageProducts;
