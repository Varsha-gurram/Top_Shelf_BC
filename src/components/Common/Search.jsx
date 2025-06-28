import React from "react";
import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const Mystyle = {
  width: "400px",
  height: "48px",
  borderRadius: "100px",
  border: "1px solid #F4F4F4",
  color: "#FFFFFF",
  padding: "4px 4px 4px 24px",
};
const Search = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box>
        <input type="text" placeholder="search" style={Mystyle}></input>
      </Box>

      <Box sx={{height:"40px",width:"40px",borderRadius:"100px",padding:"8px",gap:"8px",background:"#17AF26" ,display:"flex",alignItems: "center",justifyContent: "center",}}>
        <SearchIcon sx={{color:'#fff'}}/>
      </Box>
    </Box>
  );
};

export default Search;
