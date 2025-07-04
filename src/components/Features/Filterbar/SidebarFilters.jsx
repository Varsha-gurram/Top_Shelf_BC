import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Rating,
  Drawer,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setStrain,
  setPriceRange,
  setRating,
  setSort,
  resetFilters
} from '../../../Redux/filters/filterSlice';
import { Filterbarlist } from '../../Features/Filterbar/Filterbarlist';
import OrderBySection from '../../../pages/OrderBySection'; // Capital O!

const strains = [
  "Indica 70%",
  "Sativa 100%",
  "Hybrid",
  "Gummies",
  "Chocolates",
  "Shatter",
  "Wax"
];

const SidebarFilters = () => {
  const dispatch = useDispatch();
  const { category, strain, priceRange, rating, sort } = useSelector((state) => state.filters);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCategory = (value) => dispatch(setCategory(value === category ? 'all' : value));
  const handleStrain = (value) => dispatch(setStrain(value === strain ? null : value));
  const handlePrice = (e, value) => dispatch(setPriceRange(value));
  const handleRatingChange = (e, value) => dispatch(setRating(value));
  const handleSortChange = (value) => dispatch(setSort(value));
  const handleClearAll = () => dispatch(resetFilters());

  const appliedFilters = [];
  if (category && category !== 'all') appliedFilters.push(category);
  if (strain) appliedFilters.push(strain);
  if (priceRange && (priceRange[0] > 0 || priceRange[1] < 1000)) appliedFilters.push(`$${priceRange[0]} - $${priceRange[1]}`);
  if (rating) appliedFilters.push(`${rating}★ & up`);

  const sidebarContent = (
    <Box sx={{ width: { xs: 280, md: 240 }, p: 2, bgcolor: '#fafafa', minHeight: '100vh' }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      {appliedFilters.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>Applied Filters:</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
            {appliedFilters.map((filter, idx) => (
              <Box key={idx} sx={{ bgcolor: '#e0f7fa', px: 1, py: 0.5, borderRadius: 1, fontSize: 12 }}>
                {filter}
              </Box>
            ))}
          </Box>
          <Button size="small" onClick={handleClearAll} color="secondary" variant="outlined">Clear All</Button>
        </Box>
      )}
      <Typography variant="subtitle2" sx={{ mt: 2 }}>Category</Typography>
      <FormGroup>
        {Filterbarlist.categories.filter(c => c.value !== '/').map((c) => (
          <FormControlLabel
            key={c.value}
            control={
              <Checkbox
                checked={category === c.value}
                onChange={() => handleCategory(c.value)}
                sx={{
                  '&.Mui-checked': { color: "#17AF26" },
                }}
              />
            }
            label={c.label}
          />
        ))}
      </FormGroup>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>Strain</Typography>
      <FormGroup>
        {strains.map((s) => (
          <FormControlLabel
            key={s}
            control={
              <Checkbox
                checked={strain === s}
                onChange={() => handleStrain(s)}
                sx={{
                  '&.Mui-checked': { color: "#17AF26" },
                }}
              />
            }
            label={s}
          />
        ))}
      </FormGroup>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>Price</Typography>
      <Slider
        value={priceRange}
        onChange={handlePrice}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        sx={{ mb: 2, color: "#17AF26", height: "2px" }}
      />
      {/* Order By Section */}
      <OrderBySection
        selectedSort={sort}
        setSelectedSort={handleSortChange}
      />
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Rating</Typography>
      <Rating
        name="rating-filter"
        value={rating || 0}
        precision={1}
        onChange={handleRatingChange}
        size="large"
        sx={{ mb: 2 }}
      />
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: '#fff',
            border: '1px solid #eee',
            boxShadow: 1,
            display: { xs: 'block', md: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 }
        }}
      >
        {sidebarContent}
      </Drawer>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          width: 240,
          flexShrink: 0
        }}
      >
        {sidebarContent}
      </Box>
    </>
  );
};

export default SidebarFilters;
