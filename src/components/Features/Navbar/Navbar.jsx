import React from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { images } from "../../../Assets/images";
import Search from "../../Common/Search";
import CartButton from "../../Common/CartButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Filterbar from "../Filterbar/Filterbar";
const Navbar = () => {
   const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#FFFFFF",
        px: { xs: 2, md: 8 },
        py: { xs: 1, md: "14px" },
        borderBottom: "1px solid #F4F4F4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "auto", md: "270px" },
        }}
      >
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Filterbar showMobileIcon />
        </Box>
        <img
          src={images.Logo}
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          mx: { xs: 1, md: 4 },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Search
          placeholder="Search here..."
          color="#f1f1f1"
          text="#000"
          border="none"
          width={{ xs: "70%", sm: "400px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 2 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            mr: 1,
            display: { xs: "none", sm: "block" },
          }}
        >
          Your Account
        </Typography>
        <CartButton
      count={cartCount}
      onClick={() => navigate("/cart")}
    />
      </Box>
    </Box>
  );
};

export default Navbar;
