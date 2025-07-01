import { Box,Typography } from '@mui/material'
import React from 'react';
import { Filterbarlist } from './Filterbarlist';

const Filterbar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        height: "56px",
        px: 8,
        bgcolor: "#fff",
        borderBottom: "1px solid #F4F4F4"
      }}
    >
      <Box><Typography>{Filterbarlist.ShopAll}</Typography></Box>
      <Box>{Filterbarlist.Flowerdropdown}</Box>
      <Box><Typography>{Filterbarlist.Edibles}</Typography></Box>
      <Box>{Filterbarlist.Concentrates}</Box>
      <Box><Typography>{Filterbarlist.Mushrooms}</Typography></Box>
      <Box>{Filterbarlist.Promotions}</Box>
      <Box>{Filterbarlist.Support}</Box>
      <Box><Typography>{Filterbarlist.Rewards}</Typography></Box>
      <Box><Typography>{Filterbarlist.Blog}</Typography></Box>
    </Box>
  )
}

export default Filterbar
