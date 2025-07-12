import React, { useState } from 'react';
import ProductCard from '../components/Common/ProductCard';
import { Grid, Tab, Tabs, Box, Typography, Divider } from '@mui/material';
import { productList } from '../components/Features/Products/ProductList';

const tabCategories = [
  "Flowers",
  "Mushrooms",
  "Concentrates",
  "Edibles",
  "Shop All Weed"
];

const CategoryF = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedCategory = tabCategories[selectedTab];

  let filteredProducts;
  if (selectedCategory === "Shop All Weed") {
    filteredProducts = productList.filter(
      product => product.Rc === "Recently Added"
    );
  } else {
    filteredProducts = productList.filter(
      product =>
        product.type?.toLowerCase() === selectedCategory.toLowerCase() &&
        product.Rc === "Recently Added"
    );
  }

  return (
    <Box sx={{ width: '100%', mt: 4, overflowX: 'hidden' }}>
      <Typography
        align="center"
        sx={{
          color: "black",
          fontWeight: 600,
          fontSize: { xs: "clamp(32px, 8vw, 48px)", md: "64px" },
          lineHeight: 1.1,
          letterSpacing: { xs: "-1px", sm: "-2px", md: "-4px" },
          fontFamily: "Lexend, sans-serif",
          textAlign: "center",
          width: { xs: '90%', sm: '80%', md: '60%' },
          mx: "auto",
          display: "block",
          my: 8
        }}
      >
        RECENTLY ADDED
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          mb: 3,
          px: { xs: 1, sm: 2, md: 0 },
          '& .MuiTabs-flexContainer': {
            justifyContent: { xs: 'flex-start', md: 'center' },
          },
          '& .MuiTab-root': {
            borderRadius: '30px',
            minWidth: { xs: 90, sm: 100, md: 120 },
            color: '#222',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: { xs: 12, sm: 14, md: 16 },
            bgcolor: 'white',
            border: '1px solid #e0e0e0',
            mx: { xs: 0.5, sm: 1 },
            mb: 3,
            px: { xs: 1.5, sm: 2, md: 3 },
            whiteSpace: 'nowrap',
            flexShrink: 0,
          },
          '& .Mui-selected': {
            bgcolor: '#f3faf6',
            borderColor: '#17AF26',
            color: '#05422C6',
            fontWeight: 700,
          },
          '& .MuiTabs-scrollButtons': {
            color: '#17AF26',
            '&.Mui-disabled': {
              opacity: 0.3,
            },
          },
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {tabCategories.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Divider sx={{ borderColor: "#E8E9EB", m: { xs: 2, sm: 3, md: 5 } }} />

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ px: { xs: 2, sm: 4, md: 12 }, mb: 10 }}>
        {filteredProducts.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryF;
