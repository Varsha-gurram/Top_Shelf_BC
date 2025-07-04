import React from 'react';
import { useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';
import { productList } from './ProductList';

const ProductListPage = () => {
  // Get all filter and sort values from Redux
  const { category, strain, priceRange, rating, sort } = useSelector((state) => state.filters);

  // 1. FILTER PRODUCTS
  const filteredProducts = productList.filter((product) => {
    const categoryMatch =
      !category || category === "all"
        ? true
        : product.type.toLowerCase() === category.toLowerCase();
    const strainMatch =
      strain
        ? product.strain.toLowerCase().includes(strain.toLowerCase())
        : true;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch =
      rating ? product.rating >= rating : true;
    return categoryMatch && strainMatch && priceMatch && ratingMatch;
  });

  // 2. SORT PRODUCTS
  let sortedProducts = [...filteredProducts];
  if (sort === "price_low_high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price_high_low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating" || sort === "average_rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sort === "review_count") {
    sortedProducts.sort((a, b) => b.reviews - a.reviews);
  } else if (sort === "popularity") {
    sortedProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (sort === "newness") {
    sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === "product_name") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "random") {
    sortedProducts.sort(() => Math.random() - 0.5);
  }
  return <ProductGrid products={sortedProducts||filteredProducts} />;
};

export default ProductListPage;
