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
  const filteredProducts =
    tabCategories[selectedTab] === "Shop All Weed"
      ? productList
      : productList.filter(
          product => product.type?.toLowerCase() === tabCategories[selectedTab].toLowerCase()
        );

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography
        align="center"
        sx={{
          color: "black",
          fontWeight: 600,
          fontSize: { xs: "clamp(32px, 5vw, 48px)", md: "64px" },
          lineHeight: 1.1,
          letterSpacing: { xs: "-1px", sm: "-2px", md: "-4px" },
          fontFamily: "Lexend, sans-serif",
          textAlign: { md: "left", xs: "center" },
          margin: "auto",
          ml:{md:3.5},
          display: "block",
          my: 8
        }}
      >
        CHOOSE YOUR WEED
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
            minWidth: { xs: 90, sm: 100, md: 100 },
            color: '#222',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: { md: 16, xs: 12 },
            bgcolor: 'white',
            border: '1px solid #e0e0e0',
            mx: { xs: 0.5, sm: 1 },
            mb: 3,
            px: { md: 3, xs: 1.5 },
            whiteSpace: 'nowrap',
            flexShrink: 0,
          },
          '& .Mui-selected': {
            bgcolor: '#f3faf6',
            borderColor: '#17AF26',
            color: '#05422C6'
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

      <Divider sx={{ borderColor: "#E8E9EB", m: 5 }} />

      <Grid container spacing={3} sx={{ px: { md: 12, sm: 2 }, mb: 30 }}>
        {filteredProducts.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx} sx={{ margin: "auto" }}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryF;
