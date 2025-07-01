import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({placeholder,color,text,border,width}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      width: width,
      bgcolor: color,
      border:border,
      borderRadius: "100px",
      px: 1,
      py: 0.5,
    }}
  >
    <InputBase
      placeholder={placeholder}
      sx={{
        flex: 1,
        ml: 1,
        fontSize: { xs: 14, sm: 16 },
        color: text,
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
        "&:hover": { bgcolor: "#17AF26" },
      }}
    >
      <SearchIcon />
    </IconButton>
  </Box>
);

export default Search;
