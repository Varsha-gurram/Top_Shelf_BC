import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { images } from "../../../Assets/images";
import Search from "../../Common/Search";
import CartButton from "../../Common/CartButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Filterbar from "../Filterbar/Filterbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const Navbar = ({ onAccountClick }) => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [user] = useAuthState(auth);

  // Helper to get initials from display name
  const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (
      words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
    );
  };

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
      {/* Logo + Mobile Filter */}
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

      {/* Search */}
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

      {/* Right Section: Account + Cart */}
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}>
        {!isMobile ? (
          <Typography
            onClick={onAccountClick}
            sx={{
              fontSize: { xs: 14, md: 16 },
              mr: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
          >
            Your Account
          </Typography>
        ) : (
          <IconButton onClick={onAccountClick}>
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={user?.photoURL || undefined}
            >
              {!user?.photoURL && getInitials(user?.displayName || user?.email)}
            </Avatar>
          </IconButton>
        )}
        <CartButton count={cartCount} onClick={() => navigate("/cart")} />
      </Box>
    </Box>
  );
};

export default Navbar;
