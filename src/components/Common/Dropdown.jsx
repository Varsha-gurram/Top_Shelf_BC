import React, { useEffect, useState } from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = ({ label, options = [], onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState('');

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option) => {
    setSelected(option);
    handleClose();
    if (onChange) onChange(option);
  };

  useEffect(() => {
    setSelected('');
  }, [label]);

  return (
    <Box>
      <Box
        sx={{
          cursor: 'pointer',
          color: '#000',
          display: 'inline-flex',
          alignItems: 'center',
          fontWeight: 500,
          userSelect: 'none',
        }}
        onClick={handleOpen}
      >
        <Typography component="span">{selected || label}</Typography>
        <ArrowDropDownIcon sx={{ ml: 0.5 }} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ dense: true }}
      >
        {options.map((option, idx) => (
          <MenuItem
            key={idx}
            selected={option === selected}
            onClick={() => handleSelect(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Dropdown;
