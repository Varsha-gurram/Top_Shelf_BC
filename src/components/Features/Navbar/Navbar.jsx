import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { images } from "../../../Assets/images";
import Search from "../../Common/Search";
import { Bag2 } from "iconsax-react";
import { Filterbarlist } from "../Filterbar/Filterbarlist";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../../Redux/filters/filterSlice";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#FFFFFF",
        boxSizing: "border-box",
        px: { xs: 2, md: 8 },
        py: { xs: 1, md: "14px" },
        borderBottom: "1px solid #F4F4F4",
      }}
    >
      {/* Left: Logo and menu */}
      <Box sx={{ display: "flex", alignItems: "center", width: { xs: "auto", md: "270px" } }}>
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={images.Logo}
          alt="Logo"
          style={{ height: "40px" }}
        />
      </Box>

      {/* Center: Search */}
      <Box sx={{ flex: 1, mx: { xs: 1, md: 4 }, display: { xs: "none", sm: "block" } }}>
        <Search placeholder="Search here..." color="#f1f1f1" text="#000" border="none" width={{ xs: "70%", sm: "400px" }} />
      </Box>

      {/* Right: Account and Cart */}
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}>
        <Typography sx={{ fontSize: { xs: 14, md: 16 }, mr: 1, display: { xs: "none", sm: "block" } }}>
          Your Account
        </Typography>
        <Box
          sx={{
            width: "1px",
            height: "24px",
            backgroundColor: "#C8C9CB",
            mx: 1,
            display: { xs: "none", sm: "block" }
          }}
        />
        <Box sx={{ position: "relative", width: "32px", height: "32px" }}>
          <Bag2 size="32" color="#000" variant="Linear" />
          <Box
            sx={{
              position: "absolute",
              top: "18px",
              left: "20px",
              width: "18px",
              height: "18px",
              borderRadius: "75%",
              backgroundColor: "#EB2606",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
              color: "#fff",
            }}
          >
            2
          </Box>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "#f9f9fb",
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            boxShadow: 3,
            px: 2,
            py: 2,
          },
        }}
      >
        {/* Drawer Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={images.Logo} alt="Logo" style={{ height: "32px", marginRight: 8 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#222" }}>
              Categories
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />

        {/* Category List */}
        <Box>
          {Filterbarlist.categories.map((item) => (
            <Box
              key={item.value}
              sx={{
                py: 1.2,
                px: 1,
                cursor: "pointer",
                color: "#222",
                fontWeight: 500,
                borderRadius: 2,
                mb: 0.5,
                transition: "background 0.2s, color 0.2s",
                "&:hover": {
                  background: "#e3e8ee",
                  color: "#1976d2",
                },
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                fontSize: 16,
              }}
              onClick={() => {
                setDrawerOpen(false);
                dispatch(setCategory(item.value));
                navigate("/products");
              }}
            >
              {/* Optional: Add an icon for each category if you have one */}
              {/* <CategoryIcon /> */}
              {item.label}
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
