import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filterbarlist } from './Filterbarlist';
import { setCategory } from '../../../Redux/filters/filterSlice';
import { useNavigate } from 'react-router-dom';

const Filterbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategory = useSelector((state) => state.filters.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate('/products'); // navigate after dispatching
  };

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: '56px',
        px: 8,
        bgcolor: '#fff',
        borderBottom: '1px solid #F4F4F4',
      }}
    >
      {Filterbarlist.categories.map((item) => (
        <Box
          key={item.value}
          onClick={() => handleCategoryClick(item.value)}
          sx={{
            cursor: 'pointer',
            borderBottom: selectedCategory === item.value ? '2px solid green' : 'none',
            paddingBottom: '4px',
          }}
        >
          <Typography
            sx={{
              color: selectedCategory === item.value ? 'green' : 'black',
              fontWeight: selectedCategory === item.value ? 'bold' : 'normal',
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Filterbar;
