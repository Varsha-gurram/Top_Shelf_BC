import React, { useState } from 'react';
import { Box, Typography, Drawer, IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import { Filterbarlist } from './Filterbarlist';
import { setCategory, setStrain } from '../../../Redux/filters/filterSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import Dropdown from '../../Common/Dropdown';
import { useTheme, useMediaQuery } from '@mui/material';

const Filterbar = ({ showMobileIcon = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = useSelector((state) => state.filters.category);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCategoryClick = (item) => {
    if (item.label === 'Home') {
      dispatch(setCategory('all'));
      navigate('/');
    } else if (item.label === 'Shop All') {
      dispatch(setCategory('all'));
      navigate('/products');
    } else {
      dispatch(setCategory(item.value));
      navigate('/products');
    }
    setDrawerOpen(false);
  };

  const handleSubCategorySelect = (subItem) => {
    dispatch(setStrain(subItem));
    navigate('/products');
    setDrawerOpen(false); 
  };

  const currentCategory =
    location.pathname === '/' ? '/' : selectedCategory;
  const filterBarContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: { xs: 'flex-start', md: 'center' },
        height: { md: '56px' },
        px: { xs: 2, md: 8 },
        py: { xs: 2, md: 0 },
        bgcolor: '#fff',
        borderBottom: { md: '1px solid #F4F4F4' },
        minWidth: { xs: 220, md: 'auto' },
      }}
    >
      {Filterbarlist.categories.map((item) => (
        <Box
          key={item.value}
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            pb: 0.5,
            borderBottom:
              currentCategory === item.value && !isMobile
                ? '2px solid green'
                : 'none',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          {item.subItems ? (
            <Dropdown
              label={item.label}
              options={item.subItems}
              onChange={handleSubCategorySelect}
              fullWidth={isMobile}
            />
          ) : (
            <Typography
              onClick={() => handleCategoryClick(item)}
              sx={{
                color:
                  currentCategory === item.value ? 'green' : 'black',
                fontWeight:
                  currentCategory === item.value ? 'bold' : 'normal',
                width: { xs: '100%', md: 'auto' },
                py: { xs: 1, md: 0 },
              }}
            >
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
  if (isMobile && !showMobileIcon) return null;
  if (isMobile && showMobileIcon) {
    return (
      <>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          color="inherit"
          sx={{ ml: 1 }}
          aria-label="open filter bar"
        >
          <TuneIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              minHeight: 200,
              bgcolor: '#fff',
            },
          }}
        >
          <Box sx={{ p: 2 }}>{filterBarContent}</Box>
        </Drawer>
      </>
    );
  }
  return filterBarContent;
};

export default Filterbar;
