import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { productList } from './ProductList'; 
import ProductGrid from './ProductGrid';
import { Pagination, Box } from '@mui/material';

const PRODUCTS_PER_PAGE = 9;

const ProductListPage = () => {
  const [page, setPage] = useState(1);
  const { searchTerm, category, strain, priceRange, rating, sort } = useSelector(state => state.filters);

  const matchesSearch = (field, term) => {
    if (!field) return false;
    if (Array.isArray(field)) {
      return field.some(val => val && val.toLowerCase().includes(term));
    }
    return field.toLowerCase().includes(term);
  };

  const filteredProducts = productList.filter(product => {
    const normSearch = searchTerm ? searchTerm.toLowerCase() : "";
    const searchMatch = !normSearch
      ? true
      : (
          matchesSearch(product.title, normSearch) ||
          matchesSearch(product.type, normSearch) ||
          matchesSearch(product.strain, normSearch) ||
          matchesSearch(product.category, normSearch) ||
          matchesSearch(product.description, normSearch) ||
          matchesSearch(product.DescriptionD, normSearch) ||
          matchesSearch(product.effects, normSearch) ||
          matchesSearch(product.aromas, normSearch) ||
          matchesSearch(product.medicalUses, normSearch)
        );

    const categoryMatch = !category || category === "all"
      ? true
      : product.type && product.type.toLowerCase() === category.toLowerCase();

    const strainMatch = !strain
      ? true
      : product.strain && product.strain.toLowerCase().includes(strain.toLowerCase());

    const priceMatch = priceRange && priceRange.length === 2
      ? product.price >= priceRange[0] && product.price <= priceRange[1]
      : true;

    const ratingMatch = rating ? product.rating <= rating : true;

    return searchMatch && categoryMatch && strainMatch && priceMatch && ratingMatch;
  });

  let sortedProducts = [...filteredProducts];
  if (sort === "price_low_high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price_high_low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating" || sort === "average_rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sort === "popularity") {
    sortedProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (sort === "newness") {
    sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === "product_name") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "random") {
    sortedProducts.sort(() => Math.random() - 0.5);
  }
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  React.useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [sortedProducts.length, totalPages]);

  const paginatedProducts = sortedProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <>
      {sortedProducts.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '2rem 0', color: '#888' }}>
          No products found.
        </div>
      ) : (
        <>
          <ProductGrid products={paginatedProducts} />
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ProductListPage;
