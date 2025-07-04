import React from 'react';
import { Box } from '@mui/material';
import SidebarFilters from '../components/Features/Filterbar/SidebarFilters'
import ProductListPage from '../components/Features/Products/ProductListPage';
import Footer from '../components/Features/Footer/Footer';

const ProductPage = () => {
  return (
    <>
    <Box sx={{ display: 'flex',gap:5,mb:50 }}>
      <SidebarFilters />
      <Box sx={{ flex: 1, p: 4 }}>
        <ProductListPage />
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default ProductPage;
