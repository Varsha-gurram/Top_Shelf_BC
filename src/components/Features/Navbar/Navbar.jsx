import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { images } from "../../../Assets/images";
import Search from "../../Common/Search";
import { Bag2 } from "iconsax-react";
import { Filterbarlist } from "../Filterbar/Filterbarlist";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      <Box sx={{ flex: 1, mx: { xs: 1, md: 4 }, display: { xs: "none", sm: "block" } }}>
        <Search placeholder="Search here..." color="#f1f1f1" text="#000" border="none" width={{ xs: "70%", sm: "400px" }} />
      </Box>
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
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <img src={images.Logo} alt="Logo" style={{ height: "40px", marginBottom: 16 }} />
          <Search />
          <Typography sx={{ mt: 2 }}>Your Account</Typography>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.ShopAll}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Flowerdropdown}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Edibles} 
          </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Concentrates}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Mushrooms}
            </Box>
          <Box sx={{ mt: 2 }}>  
            {Filterbarlist.Promotions}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Support}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Rewards}
            </Box>
          <Box sx={{ mt: 2 }}>
            {Filterbarlist.Blog}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
