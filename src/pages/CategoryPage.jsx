import React from 'react';
import { Box } from '@mui/material';
//import Filterbar from '../components/Features/Products/Filterbar';
import ProductListPage from '../components/Features/Products/ProductListPage';
import { Link } from 'react-router-dom';



const ProductPage = () => {
  return (
    <Box>
        <Link to="/products">Shop Products</Link>
      {/* <Filterbar /> */}
      <Box sx={{ p: 4 }}>
        <ProductListPage />
      </Box>
    </Box>
  );
};

export default ProductPage;
