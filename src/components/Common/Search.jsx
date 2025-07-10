import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../Redux/filters/filterSlice"; 
const Search = ({ placeholder, color, text, border, width }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const [inputValue, setInputValue] = React.useState(searchTerm);
  React.useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const triggerSearch = () => {
    dispatch(setSearchTerm(inputValue));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      triggerSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: width,
        bgcolor: color,
        border: border,
        borderRadius: "100px",
        px: 1,
        py: 0.5,
      }}
    >
      <InputBase
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
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
        onClick={triggerSearch}
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
};

export default Search;
