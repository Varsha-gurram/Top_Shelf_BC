import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Coupons = () => (
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "center",
      pointerEvents: "auto",
    }}
  >
    <Box
      sx={{
        background: "#05422C",
        borderRadius: "50px",
        px: 4,
        py: 2,
        zIndex: 2,
        boxShadow: 3,
        mt: { xs: "-60px", md: "-80px" },
        minWidth: { xs: "90%", md: "60%" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 550,
          fontSize: { md: "32px", xs: "36px" },
          letterSpacing: "-3px",
          color: "#fff",
          lineHeight: "110%",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        UNLOCK 20% OFF YOUR FIRST ORDER
      </Typography>
    </Box>
  </Box>
);


export default Coupons;
