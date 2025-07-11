import React ,{useState}from 'react'
import ProductCard from '../../Common/ProductCard'
import { Grid,useMediaQuery,Tab,Tabs ,Box,Typography} from '@mui/material';
import GridCarousel from '../../Common/Carousel';
import { productList } from './ProductList';
import Bestsellerscard from '../../../pages/Bestsellerscard';

const tabCategories = [
  "Best Sellers",
  "Bundles & Promotions",
  "On Sale"
];

const ProductTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const filteredProducts = productList.filter(
    product => product.category === tabCategories[selectedTab]
  );

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
     <Typography
  align="center"
  sx={{
    color: "black !important",
    fontWeight: 600,
    fontSize: { xs: "clamp(32px, 5vw, 48px)", md: "64px" },
    lineHeight: 1.1,
    letterSpacing: { xs: "-1px", sm: "-2px", md: "-4px" },
    fontFamily: "Lexend, sans-serif",
    textAlign: "center",
    width: "60%",
    mx: "auto",
    display: "block",
    my:8
  }}
>
  BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
</Typography>

      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        centered
        sx={{
          mb: 3,
          '& .MuiTab-root': {
            borderRadius: '30px',
            minWidth: {md:400,sm:100},
            color: '#05422C !important',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: {md:18,xs:12},
            bgcolor: 'white',
            border: '1px solid #e0e0e0',
            mx: 3,
            mb:3,
            px:{md:10}
          },
          '& .Mui-selected': {
            bgcolor: '#f3faf6',
            borderColor: '#17AF26',
            color:'#05422C'
          }
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {tabCategories.map((label, idx) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Grid container spacing={3} sx={{display:"flex",gap:5}}>
        <Grid item xs={12} md={4} lg={3} sx={{px:{md:3,xs:2},margin:{xs:"auto"}}} >
          <Bestsellerscard />
        </Grid>
        <Grid item xs={12} md={8} lg={9} sx={{px:{md:3,xs:2},margin:{xs:"auto"}}}>
          <GridCarousel>
            {filteredProducts.map((product, idx) => (
              <ProductCard {...product} key={product.id || idx} />
            ))}
          </GridCarousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductTabs;
