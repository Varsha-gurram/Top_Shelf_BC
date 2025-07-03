import React from 'react';
import { useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';
import { productList } from './ProductList';

const ProductListPage = () => {
  const selectedCategory = useSelector((state) => state.filters.category);

  const filteredProducts = selectedCategory === 'all'
    ? productList
    : productList.filter((product) => product.type === selectedCategory);

  return <ProductGrid products={filteredProducts} />;
};

export default ProductListPage;
