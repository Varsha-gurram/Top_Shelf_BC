import React from "react";
import { Box, Typography } from "@mui/material";
import { images } from "../../../Assets/images";
import Search from "../../Common/Search";
import { Bag2 } from "iconsax-react";
const Navbar = () => {
  return (
    <Box
      sx={{
        width: "1440px",
        height: "76px",
        display: "flex",
        justifyContent: "space-between",
        background: "#FFFFFF",
        boxSizing: "border-box",
        padding: "14px 64px 14px 64px",
        border: "1px solid 3F4F4F4",
      }}
    >
      <Box sx={{ width: "270px" }}>
        <img
          src={images.Logo}
          alt="Logo"
          style={{ height: "40px", gap: "8px" }}
        />
      </Box>
      <Box>
        <Search />
      </Box>
      <Box sx={{display:"flex",gap:"16px",alignItems:"center"}}>
        <Box > 
          <Typography >
            Your account
          </Typography>
        </Box>
        <Box
          sx={{
             width: "1px",
          height: "24px",
          backgroundColor: "#C8C9CB",
          }}
        />
        <Box sx={{ position: "relative", width: "32px", height: "32px" }}>
            
          <Box>
            <Bag2 size="32" color="#000" variant="Linear" />
          </Box>
          <Box
        sx={{
          position: "absolute",
          top:"18px",
          left:"20px",
          width: "18px",
          height: "18px",
          borderRadius: "75%",
          backgroundColor: "#EB2606",
          zIndex: 1,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:"13px"
        }}
      >
        2
        </Box>
        </Box>
        
      </Box>
      
    </Box>
  );
};

export default Navbar;
