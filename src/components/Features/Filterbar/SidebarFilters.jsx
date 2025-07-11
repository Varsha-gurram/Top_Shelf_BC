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
  IconButton,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import OrderBySection from '../../../pages/OrderBySection';

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
  if (category && category !== 'all') appliedFilters.push({ type: 'category', label: category });
  if (strain) appliedFilters.push({ type: 'strain', label: strain });
  if (priceRange && (priceRange[0] > 0 || priceRange[1] < 1000)) appliedFilters.push({ type: 'price', label: `$${priceRange[0]} - $${priceRange[1]}` });
  if (rating) appliedFilters.push({ type: 'rating', label: `${rating}★ & below` });

  // Remove individual filter chips
  const handleRemoveFilter = (type, value) => {
    if (type === 'category') dispatch(setCategory('all'));
    if (type === 'strain') dispatch(setStrain(null));
    if (type === 'price') dispatch(setPriceRange([0, 1000]));
    if (type === 'rating') dispatch(setRating(null));
  };

  const sidebarContent = (
    <Box
      sx={{
        width: { xs: 300, md: 260 },
        p: 2,
        bgcolor: '#fff',
        minHeight: '100vh',
        boxShadow: { md: 3 },
        borderRight: { md: '1px solid #eee' },
        position: { md: 'sticky' },
        top: { md: 0 },
        zIndex: 1100,
        overflowY: 'auto'
      }}
    >
      {/* Applied Filters */}
      {appliedFilters.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>Applied Filters</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
            {appliedFilters.map((filter, idx) => (
              <Chip
                key={idx}
                label={filter.label}
                onDelete={() => handleRemoveFilter(filter.type, filter.label)}
                color="success"
                size="small"
                sx={{ bgcolor: "#e0f7fa", color: "#00695c" }}
              />
            ))}
          </Stack>
          <Button
            size="small"
            onClick={handleClearAll}
            color="secondary"
            variant="contained"
            sx={{ fontWeight: 600, letterSpacing: 1, mt: 1 }}
            fullWidth
          >
            Clear All
          </Button>
        </Box>
      )}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600, color: "#17AF26" }}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} defaultExpanded>
          <Typography sx={{ fontWeight: 600, color: "#17AF26" }}>Strain</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600, color: "#17AF26" }}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={priceRange}
            onChange={handlePrice}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{ mb: 1, color: "#17AF26", height: "2px" }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600, color: "#17AF26" }}>Sort By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderBySection
            selectedSort={sort}
            setSelectedSort={handleSortChange}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600, color: "#17AF26" }}>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Rating
            name="rating-filter"
            value={rating || 0}
            precision={1}
            onChange={handleRatingChange}
            size="large"
            sx={{ mb: 2 }}
          />
        </AccordionDetails>
      </Accordion>
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 }
        }}
      >
        {sidebarContent}
      </Drawer>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          width: 260,
          flexShrink: 0
        }}
      >
        {sidebarContent}
      </Box>
    </>
  );
};

export default SidebarFilters;
