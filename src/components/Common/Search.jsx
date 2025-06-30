import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      width: { xs: "100%", sm: "400px" },
      bgcolor: "#F4F4F4",
      borderRadius: "100px",
      px: 1,
      py: 0.5,
    }}
  >
    <InputBase
      placeholder="Search"
      sx={{
        flex: 1,
        ml: 1,
        fontSize: { xs: 14, sm: 16 },
        color: "#000",
        bgcolor: "transparent",
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton
      sx={{
        bgcolor: "#17AF26",
        color: "#fff",
        borderRadius: "100px",
        ml: 1,
        "&:hover": { bgcolor: "#12991e" },
      }}
    >
      <SearchIcon />
    </IconButton>
  </Box>
);

export default Search;
